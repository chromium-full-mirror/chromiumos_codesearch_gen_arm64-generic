// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_NETWORK_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_NETWORK_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_network.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {

template <>
struct FromValue<network::ResourceType> {
  static network::ResourceType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::ResourceType::DOCUMENT;
    }
    if (value.GetString() == "Document")
      return network::ResourceType::DOCUMENT;
    if (value.GetString() == "Stylesheet")
      return network::ResourceType::STYLESHEET;
    if (value.GetString() == "Image")
      return network::ResourceType::IMAGE;
    if (value.GetString() == "Media")
      return network::ResourceType::MEDIA;
    if (value.GetString() == "Font")
      return network::ResourceType::FONT;
    if (value.GetString() == "Script")
      return network::ResourceType::SCRIPT;
    if (value.GetString() == "TextTrack")
      return network::ResourceType::TEXT_TRACK;
    if (value.GetString() == "XHR")
      return network::ResourceType::XHR;
    if (value.GetString() == "Fetch")
      return network::ResourceType::FETCH;
    if (value.GetString() == "Prefetch")
      return network::ResourceType::PREFETCH;
    if (value.GetString() == "EventSource")
      return network::ResourceType::EVENT_SOURCE;
    if (value.GetString() == "WebSocket")
      return network::ResourceType::WEB_SOCKET;
    if (value.GetString() == "Manifest")
      return network::ResourceType::MANIFEST;
    if (value.GetString() == "SignedExchange")
      return network::ResourceType::SIGNED_EXCHANGE;
    if (value.GetString() == "Ping")
      return network::ResourceType::PING;
    if (value.GetString() == "CSPViolationReport")
      return network::ResourceType::CSP_VIOLATION_REPORT;
    if (value.GetString() == "Preflight")
      return network::ResourceType::PREFLIGHT;
    if (value.GetString() == "Other")
      return network::ResourceType::OTHER;
    errors->AddError("invalid enum value");
    return network::ResourceType::DOCUMENT;
  }
};

template <>
inline base::Value ToValue(const network::ResourceType& value) {
  switch (value) {
    case network::ResourceType::DOCUMENT:
      return base::Value("Document");
    case network::ResourceType::STYLESHEET:
      return base::Value("Stylesheet");
    case network::ResourceType::IMAGE:
      return base::Value("Image");
    case network::ResourceType::MEDIA:
      return base::Value("Media");
    case network::ResourceType::FONT:
      return base::Value("Font");
    case network::ResourceType::SCRIPT:
      return base::Value("Script");
    case network::ResourceType::TEXT_TRACK:
      return base::Value("TextTrack");
    case network::ResourceType::XHR:
      return base::Value("XHR");
    case network::ResourceType::FETCH:
      return base::Value("Fetch");
    case network::ResourceType::PREFETCH:
      return base::Value("Prefetch");
    case network::ResourceType::EVENT_SOURCE:
      return base::Value("EventSource");
    case network::ResourceType::WEB_SOCKET:
      return base::Value("WebSocket");
    case network::ResourceType::MANIFEST:
      return base::Value("Manifest");
    case network::ResourceType::SIGNED_EXCHANGE:
      return base::Value("SignedExchange");
    case network::ResourceType::PING:
      return base::Value("Ping");
    case network::ResourceType::CSP_VIOLATION_REPORT:
      return base::Value("CSPViolationReport");
    case network::ResourceType::PREFLIGHT:
      return base::Value("Preflight");
    case network::ResourceType::OTHER:
      return base::Value("Other");
  };
  NOTREACHED();
  return base::Value();
}



template <>
struct FromValue<network::ErrorReason> {
  static network::ErrorReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::ErrorReason::FAILED;
    }
    if (value.GetString() == "Failed")
      return network::ErrorReason::FAILED;
    if (value.GetString() == "Aborted")
      return network::ErrorReason::ABORTED;
    if (value.GetString() == "TimedOut")
      return network::ErrorReason::TIMED_OUT;
    if (value.GetString() == "AccessDenied")
      return network::ErrorReason::ACCESS_DENIED;
    if (value.GetString() == "ConnectionClosed")
      return network::ErrorReason::CONNECTION_CLOSED;
    if (value.GetString() == "ConnectionReset")
      return network::ErrorReason::CONNECTION_RESET;
    if (value.GetString() == "ConnectionRefused")
      return network::ErrorReason::CONNECTION_REFUSED;
    if (value.GetString() == "ConnectionAborted")
      return network::ErrorReason::CONNECTION_ABORTED;
    if (value.GetString() == "ConnectionFailed")
      return network::ErrorReason::CONNECTION_FAILED;
    if (value.GetString() == "NameNotResolved")
      return network::ErrorReason::NAME_NOT_RESOLVED;
    if (value.GetString() == "InternetDisconnected")
      return network::ErrorReason::INTERNET_DISCONNECTED;
    if (value.GetString() == "AddressUnreachable")
      return network::ErrorReason::ADDRESS_UNREACHABLE;
    if (value.GetString() == "BlockedByClient")
      return network::ErrorReason::BLOCKED_BY_CLIENT;
    if (value.GetString() == "BlockedByResponse")
      return network::ErrorReason::BLOCKED_BY_RESPONSE;
    errors->AddError("invalid enum value");
    return network::ErrorReason::FAILED;
  }
};

template <>
inline base::Value ToValue(const network::ErrorReason& value) {
  switch (value) {
    case network::ErrorReason::FAILED:
      return base::Value("Failed");
    case network::ErrorReason::ABORTED:
      return base::Value("Aborted");
    case network::ErrorReason::TIMED_OUT:
      return base::Value("TimedOut");
    case network::ErrorReason::ACCESS_DENIED:
      return base::Value("AccessDenied");
    case network::ErrorReason::CONNECTION_CLOSED:
      return base::Value("ConnectionClosed");
    case network::ErrorReason::CONNECTION_RESET:
      return base::Value("ConnectionReset");
    case network::ErrorReason::CONNECTION_REFUSED:
      return base::Value("ConnectionRefused");
    case network::ErrorReason::CONNECTION_ABORTED:
      return base::Value("ConnectionAborted");
    case network::ErrorReason::CONNECTION_FAILED:
      return base::Value("ConnectionFailed");
    case network::ErrorReason::NAME_NOT_RESOLVED:
      return base::Value("NameNotResolved");
    case network::ErrorReason::INTERNET_DISCONNECTED:
      return base::Value("InternetDisconnected");
    case network::ErrorReason::ADDRESS_UNREACHABLE:
      return base::Value("AddressUnreachable");
    case network::ErrorReason::BLOCKED_BY_CLIENT:
      return base::Value("BlockedByClient");
    case network::ErrorReason::BLOCKED_BY_RESPONSE:
      return base::Value("BlockedByResponse");
  };
  NOTREACHED();
  return base::Value();
}



template <>
struct FromValue<network::ConnectionType> {
  static network::ConnectionType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::ConnectionType::NONE;
    }
    if (value.GetString() == "none")
      return network::ConnectionType::NONE;
    if (value.GetString() == "cellular2g")
      return network::ConnectionType::CELLULAR2G;
    if (value.GetString() == "cellular3g")
      return network::ConnectionType::CELLULAR3G;
    if (value.GetString() == "cellular4g")
      return network::ConnectionType::CELLULAR4G;
    if (value.GetString() == "bluetooth")
      return network::ConnectionType::BLUETOOTH;
    if (value.GetString() == "ethernet")
      return network::ConnectionType::ETHERNET;
    if (value.GetString() == "wifi")
      return network::ConnectionType::WIFI;
    if (value.GetString() == "wimax")
      return network::ConnectionType::WIMAX;
    if (value.GetString() == "other")
      return network::ConnectionType::OTHER;
    errors->AddError("invalid enum value");
    return network::ConnectionType::NONE;
  }
};

template <>
inline base::Value ToValue(const network::ConnectionType& value) {
  switch (value) {
    case network::ConnectionType::NONE:
      return base::Value("none");
    case network::ConnectionType::CELLULAR2G:
      return base::Value("cellular2g");
    case network::ConnectionType::CELLULAR3G:
      return base::Value("cellular3g");
    case network::ConnectionType::CELLULAR4G:
      return base::Value("cellular4g");
    case network::ConnectionType::BLUETOOTH:
      return base::Value("bluetooth");
    case network::ConnectionType::ETHERNET:
      return base::Value("ethernet");
    case network::ConnectionType::WIFI:
      return base::Value("wifi");
    case network::ConnectionType::WIMAX:
      return base::Value("wimax");
    case network::ConnectionType::OTHER:
      return base::Value("other");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::CookieSameSite> {
  static network::CookieSameSite Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::CookieSameSite::EXACT;
    }
    if (value.GetString() == "Strict")
      return network::CookieSameSite::EXACT;
    if (value.GetString() == "Lax")
      return network::CookieSameSite::LAX;
    if (value.GetString() == "None")
      return network::CookieSameSite::NONE;
    errors->AddError("invalid enum value");
    return network::CookieSameSite::EXACT;
  }
};

template <>
inline base::Value ToValue(const network::CookieSameSite& value) {
  switch (value) {
    case network::CookieSameSite::EXACT:
      return base::Value("Strict");
    case network::CookieSameSite::LAX:
      return base::Value("Lax");
    case network::CookieSameSite::NONE:
      return base::Value("None");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::CookiePriority> {
  static network::CookiePriority Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::CookiePriority::LOW;
    }
    if (value.GetString() == "Low")
      return network::CookiePriority::LOW;
    if (value.GetString() == "Medium")
      return network::CookiePriority::MEDIUM;
    if (value.GetString() == "High")
      return network::CookiePriority::HIGH;
    errors->AddError("invalid enum value");
    return network::CookiePriority::LOW;
  }
};

template <>
inline base::Value ToValue(const network::CookiePriority& value) {
  switch (value) {
    case network::CookiePriority::LOW:
      return base::Value("Low");
    case network::CookiePriority::MEDIUM:
      return base::Value("Medium");
    case network::CookiePriority::HIGH:
      return base::Value("High");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::CookieSourceScheme> {
  static network::CookieSourceScheme Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::CookieSourceScheme::UNSET;
    }
    if (value.GetString() == "Unset")
      return network::CookieSourceScheme::UNSET;
    if (value.GetString() == "NonSecure")
      return network::CookieSourceScheme::NON_SECURE;
    if (value.GetString() == "Secure")
      return network::CookieSourceScheme::SECURE;
    errors->AddError("invalid enum value");
    return network::CookieSourceScheme::UNSET;
  }
};

template <>
inline base::Value ToValue(const network::CookieSourceScheme& value) {
  switch (value) {
    case network::CookieSourceScheme::UNSET:
      return base::Value("Unset");
    case network::CookieSourceScheme::NON_SECURE:
      return base::Value("NonSecure");
    case network::CookieSourceScheme::SECURE:
      return base::Value("Secure");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::ResourceTiming> {
  static std::unique_ptr<network::ResourceTiming> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ResourceTiming::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ResourceTiming& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::ResourcePriority> {
  static network::ResourcePriority Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::ResourcePriority::VERY_LOW;
    }
    if (value.GetString() == "VeryLow")
      return network::ResourcePriority::VERY_LOW;
    if (value.GetString() == "Low")
      return network::ResourcePriority::LOW;
    if (value.GetString() == "Medium")
      return network::ResourcePriority::MEDIUM;
    if (value.GetString() == "High")
      return network::ResourcePriority::HIGH;
    if (value.GetString() == "VeryHigh")
      return network::ResourcePriority::VERY_HIGH;
    errors->AddError("invalid enum value");
    return network::ResourcePriority::VERY_LOW;
  }
};

template <>
inline base::Value ToValue(const network::ResourcePriority& value) {
  switch (value) {
    case network::ResourcePriority::VERY_LOW:
      return base::Value("VeryLow");
    case network::ResourcePriority::LOW:
      return base::Value("Low");
    case network::ResourcePriority::MEDIUM:
      return base::Value("Medium");
    case network::ResourcePriority::HIGH:
      return base::Value("High");
    case network::ResourcePriority::VERY_HIGH:
      return base::Value("VeryHigh");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::PostDataEntry> {
  static std::unique_ptr<network::PostDataEntry> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::PostDataEntry::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::PostDataEntry& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::Request> {
  static std::unique_ptr<network::Request> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::Request::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::Request& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SignedCertificateTimestamp> {
  static std::unique_ptr<network::SignedCertificateTimestamp> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SignedCertificateTimestamp::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SignedCertificateTimestamp& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SecurityDetails> {
  static std::unique_ptr<network::SecurityDetails> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SecurityDetails::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SecurityDetails& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::CertificateTransparencyCompliance> {
  static network::CertificateTransparencyCompliance Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::CertificateTransparencyCompliance::UNKNOWN;
    }
    if (value.GetString() == "unknown")
      return network::CertificateTransparencyCompliance::UNKNOWN;
    if (value.GetString() == "not-compliant")
      return network::CertificateTransparencyCompliance::NOT_COMPLIANT;
    if (value.GetString() == "compliant")
      return network::CertificateTransparencyCompliance::COMPLIANT;
    errors->AddError("invalid enum value");
    return network::CertificateTransparencyCompliance::UNKNOWN;
  }
};

template <>
inline base::Value ToValue(const network::CertificateTransparencyCompliance& value) {
  switch (value) {
    case network::CertificateTransparencyCompliance::UNKNOWN:
      return base::Value("unknown");
    case network::CertificateTransparencyCompliance::NOT_COMPLIANT:
      return base::Value("not-compliant");
    case network::CertificateTransparencyCompliance::COMPLIANT:
      return base::Value("compliant");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::BlockedReason> {
  static network::BlockedReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::BlockedReason::OTHER;
    }
    if (value.GetString() == "other")
      return network::BlockedReason::OTHER;
    if (value.GetString() == "csp")
      return network::BlockedReason::CSP;
    if (value.GetString() == "mixed-content")
      return network::BlockedReason::MIXED_CONTENT;
    if (value.GetString() == "origin")
      return network::BlockedReason::ORIGIN;
    if (value.GetString() == "inspector")
      return network::BlockedReason::INSPECTOR;
    if (value.GetString() == "subresource-filter")
      return network::BlockedReason::SUBRESOURCE_FILTER;
    if (value.GetString() == "content-type")
      return network::BlockedReason::CONTENT_TYPE;
    if (value.GetString() == "coep-frame-resource-needs-coep-header")
      return network::BlockedReason::COEP_FRAME_RESOURCE_NEEDS_COEP_HEADER;
    if (value.GetString() == "coop-sandboxed-iframe-cannot-navigate-to-coop-page")
      return network::BlockedReason::COOP_SANDBOXED_IFRAME_CANNOT_NAVIGATE_TO_COOP_PAGE;
    if (value.GetString() == "corp-not-same-origin")
      return network::BlockedReason::CORP_NOT_SAME_ORIGIN;
    if (value.GetString() == "corp-not-same-origin-after-defaulted-to-same-origin-by-coep")
      return network::BlockedReason::CORP_NOT_SAME_ORIGIN_AFTER_DEFAULTED_TO_SAME_ORIGIN_BY_COEP;
    if (value.GetString() == "corp-not-same-site")
      return network::BlockedReason::CORP_NOT_SAME_SITE;
    errors->AddError("invalid enum value");
    return network::BlockedReason::OTHER;
  }
};

template <>
inline base::Value ToValue(const network::BlockedReason& value) {
  switch (value) {
    case network::BlockedReason::OTHER:
      return base::Value("other");
    case network::BlockedReason::CSP:
      return base::Value("csp");
    case network::BlockedReason::MIXED_CONTENT:
      return base::Value("mixed-content");
    case network::BlockedReason::ORIGIN:
      return base::Value("origin");
    case network::BlockedReason::INSPECTOR:
      return base::Value("inspector");
    case network::BlockedReason::SUBRESOURCE_FILTER:
      return base::Value("subresource-filter");
    case network::BlockedReason::CONTENT_TYPE:
      return base::Value("content-type");
    case network::BlockedReason::COEP_FRAME_RESOURCE_NEEDS_COEP_HEADER:
      return base::Value("coep-frame-resource-needs-coep-header");
    case network::BlockedReason::COOP_SANDBOXED_IFRAME_CANNOT_NAVIGATE_TO_COOP_PAGE:
      return base::Value("coop-sandboxed-iframe-cannot-navigate-to-coop-page");
    case network::BlockedReason::CORP_NOT_SAME_ORIGIN:
      return base::Value("corp-not-same-origin");
    case network::BlockedReason::CORP_NOT_SAME_ORIGIN_AFTER_DEFAULTED_TO_SAME_ORIGIN_BY_COEP:
      return base::Value("corp-not-same-origin-after-defaulted-to-same-origin-by-coep");
    case network::BlockedReason::CORP_NOT_SAME_SITE:
      return base::Value("corp-not-same-site");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::CorsError> {
  static network::CorsError Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::CorsError::DISALLOWED_BY_MODE;
    }
    if (value.GetString() == "DisallowedByMode")
      return network::CorsError::DISALLOWED_BY_MODE;
    if (value.GetString() == "InvalidResponse")
      return network::CorsError::INVALID_RESPONSE;
    if (value.GetString() == "WildcardOriginNotAllowed")
      return network::CorsError::WILDCARD_ORIGIN_NOT_ALLOWED;
    if (value.GetString() == "MissingAllowOriginHeader")
      return network::CorsError::MISSING_ALLOW_ORIGIN_HEADER;
    if (value.GetString() == "MultipleAllowOriginValues")
      return network::CorsError::MULTIPLE_ALLOW_ORIGIN_VALUES;
    if (value.GetString() == "InvalidAllowOriginValue")
      return network::CorsError::INVALID_ALLOW_ORIGIN_VALUE;
    if (value.GetString() == "AllowOriginMismatch")
      return network::CorsError::ALLOW_ORIGIN_MISMATCH;
    if (value.GetString() == "InvalidAllowCredentials")
      return network::CorsError::INVALID_ALLOW_CREDENTIALS;
    if (value.GetString() == "CorsDisabledScheme")
      return network::CorsError::CORS_DISABLED_SCHEME;
    if (value.GetString() == "PreflightInvalidStatus")
      return network::CorsError::PREFLIGHT_INVALID_STATUS;
    if (value.GetString() == "PreflightDisallowedRedirect")
      return network::CorsError::PREFLIGHT_DISALLOWED_REDIRECT;
    if (value.GetString() == "PreflightWildcardOriginNotAllowed")
      return network::CorsError::PREFLIGHT_WILDCARD_ORIGIN_NOT_ALLOWED;
    if (value.GetString() == "PreflightMissingAllowOriginHeader")
      return network::CorsError::PREFLIGHT_MISSING_ALLOW_ORIGIN_HEADER;
    if (value.GetString() == "PreflightMultipleAllowOriginValues")
      return network::CorsError::PREFLIGHT_MULTIPLE_ALLOW_ORIGIN_VALUES;
    if (value.GetString() == "PreflightInvalidAllowOriginValue")
      return network::CorsError::PREFLIGHT_INVALID_ALLOW_ORIGIN_VALUE;
    if (value.GetString() == "PreflightAllowOriginMismatch")
      return network::CorsError::PREFLIGHT_ALLOW_ORIGIN_MISMATCH;
    if (value.GetString() == "PreflightInvalidAllowCredentials")
      return network::CorsError::PREFLIGHT_INVALID_ALLOW_CREDENTIALS;
    if (value.GetString() == "PreflightMissingAllowExternal")
      return network::CorsError::PREFLIGHT_MISSING_ALLOW_EXTERNAL;
    if (value.GetString() == "PreflightInvalidAllowExternal")
      return network::CorsError::PREFLIGHT_INVALID_ALLOW_EXTERNAL;
    if (value.GetString() == "PreflightMissingAllowPrivateNetwork")
      return network::CorsError::PREFLIGHT_MISSING_ALLOW_PRIVATE_NETWORK;
    if (value.GetString() == "PreflightInvalidAllowPrivateNetwork")
      return network::CorsError::PREFLIGHT_INVALID_ALLOW_PRIVATE_NETWORK;
    if (value.GetString() == "InvalidAllowMethodsPreflightResponse")
      return network::CorsError::INVALID_ALLOW_METHODS_PREFLIGHT_RESPONSE;
    if (value.GetString() == "InvalidAllowHeadersPreflightResponse")
      return network::CorsError::INVALID_ALLOW_HEADERS_PREFLIGHT_RESPONSE;
    if (value.GetString() == "MethodDisallowedByPreflightResponse")
      return network::CorsError::METHOD_DISALLOWED_BY_PREFLIGHT_RESPONSE;
    if (value.GetString() == "HeaderDisallowedByPreflightResponse")
      return network::CorsError::HEADER_DISALLOWED_BY_PREFLIGHT_RESPONSE;
    if (value.GetString() == "RedirectContainsCredentials")
      return network::CorsError::REDIRECT_CONTAINS_CREDENTIALS;
    if (value.GetString() == "InsecurePrivateNetwork")
      return network::CorsError::INSECURE_PRIVATE_NETWORK;
    if (value.GetString() == "InvalidPrivateNetworkAccess")
      return network::CorsError::INVALID_PRIVATE_NETWORK_ACCESS;
    if (value.GetString() == "UnexpectedPrivateNetworkAccess")
      return network::CorsError::UNEXPECTED_PRIVATE_NETWORK_ACCESS;
    if (value.GetString() == "NoCorsRedirectModeNotFollow")
      return network::CorsError::NO_CORS_REDIRECT_MODE_NOT_FOLLOW;
    if (value.GetString() == "PreflightMissingPrivateNetworkAccessId")
      return network::CorsError::PREFLIGHT_MISSING_PRIVATE_NETWORK_ACCESS_ID;
    if (value.GetString() == "PreflightMissingPrivateNetworkAccessName")
      return network::CorsError::PREFLIGHT_MISSING_PRIVATE_NETWORK_ACCESS_NAME;
    if (value.GetString() == "PrivateNetworkAccessPermissionUnavailable")
      return network::CorsError::PRIVATE_NETWORK_ACCESS_PERMISSION_UNAVAILABLE;
    if (value.GetString() == "PrivateNetworkAccessPermissionDenied")
      return network::CorsError::PRIVATE_NETWORK_ACCESS_PERMISSION_DENIED;
    errors->AddError("invalid enum value");
    return network::CorsError::DISALLOWED_BY_MODE;
  }
};

template <>
inline base::Value ToValue(const network::CorsError& value) {
  switch (value) {
    case network::CorsError::DISALLOWED_BY_MODE:
      return base::Value("DisallowedByMode");
    case network::CorsError::INVALID_RESPONSE:
      return base::Value("InvalidResponse");
    case network::CorsError::WILDCARD_ORIGIN_NOT_ALLOWED:
      return base::Value("WildcardOriginNotAllowed");
    case network::CorsError::MISSING_ALLOW_ORIGIN_HEADER:
      return base::Value("MissingAllowOriginHeader");
    case network::CorsError::MULTIPLE_ALLOW_ORIGIN_VALUES:
      return base::Value("MultipleAllowOriginValues");
    case network::CorsError::INVALID_ALLOW_ORIGIN_VALUE:
      return base::Value("InvalidAllowOriginValue");
    case network::CorsError::ALLOW_ORIGIN_MISMATCH:
      return base::Value("AllowOriginMismatch");
    case network::CorsError::INVALID_ALLOW_CREDENTIALS:
      return base::Value("InvalidAllowCredentials");
    case network::CorsError::CORS_DISABLED_SCHEME:
      return base::Value("CorsDisabledScheme");
    case network::CorsError::PREFLIGHT_INVALID_STATUS:
      return base::Value("PreflightInvalidStatus");
    case network::CorsError::PREFLIGHT_DISALLOWED_REDIRECT:
      return base::Value("PreflightDisallowedRedirect");
    case network::CorsError::PREFLIGHT_WILDCARD_ORIGIN_NOT_ALLOWED:
      return base::Value("PreflightWildcardOriginNotAllowed");
    case network::CorsError::PREFLIGHT_MISSING_ALLOW_ORIGIN_HEADER:
      return base::Value("PreflightMissingAllowOriginHeader");
    case network::CorsError::PREFLIGHT_MULTIPLE_ALLOW_ORIGIN_VALUES:
      return base::Value("PreflightMultipleAllowOriginValues");
    case network::CorsError::PREFLIGHT_INVALID_ALLOW_ORIGIN_VALUE:
      return base::Value("PreflightInvalidAllowOriginValue");
    case network::CorsError::PREFLIGHT_ALLOW_ORIGIN_MISMATCH:
      return base::Value("PreflightAllowOriginMismatch");
    case network::CorsError::PREFLIGHT_INVALID_ALLOW_CREDENTIALS:
      return base::Value("PreflightInvalidAllowCredentials");
    case network::CorsError::PREFLIGHT_MISSING_ALLOW_EXTERNAL:
      return base::Value("PreflightMissingAllowExternal");
    case network::CorsError::PREFLIGHT_INVALID_ALLOW_EXTERNAL:
      return base::Value("PreflightInvalidAllowExternal");
    case network::CorsError::PREFLIGHT_MISSING_ALLOW_PRIVATE_NETWORK:
      return base::Value("PreflightMissingAllowPrivateNetwork");
    case network::CorsError::PREFLIGHT_INVALID_ALLOW_PRIVATE_NETWORK:
      return base::Value("PreflightInvalidAllowPrivateNetwork");
    case network::CorsError::INVALID_ALLOW_METHODS_PREFLIGHT_RESPONSE:
      return base::Value("InvalidAllowMethodsPreflightResponse");
    case network::CorsError::INVALID_ALLOW_HEADERS_PREFLIGHT_RESPONSE:
      return base::Value("InvalidAllowHeadersPreflightResponse");
    case network::CorsError::METHOD_DISALLOWED_BY_PREFLIGHT_RESPONSE:
      return base::Value("MethodDisallowedByPreflightResponse");
    case network::CorsError::HEADER_DISALLOWED_BY_PREFLIGHT_RESPONSE:
      return base::Value("HeaderDisallowedByPreflightResponse");
    case network::CorsError::REDIRECT_CONTAINS_CREDENTIALS:
      return base::Value("RedirectContainsCredentials");
    case network::CorsError::INSECURE_PRIVATE_NETWORK:
      return base::Value("InsecurePrivateNetwork");
    case network::CorsError::INVALID_PRIVATE_NETWORK_ACCESS:
      return base::Value("InvalidPrivateNetworkAccess");
    case network::CorsError::UNEXPECTED_PRIVATE_NETWORK_ACCESS:
      return base::Value("UnexpectedPrivateNetworkAccess");
    case network::CorsError::NO_CORS_REDIRECT_MODE_NOT_FOLLOW:
      return base::Value("NoCorsRedirectModeNotFollow");
    case network::CorsError::PREFLIGHT_MISSING_PRIVATE_NETWORK_ACCESS_ID:
      return base::Value("PreflightMissingPrivateNetworkAccessId");
    case network::CorsError::PREFLIGHT_MISSING_PRIVATE_NETWORK_ACCESS_NAME:
      return base::Value("PreflightMissingPrivateNetworkAccessName");
    case network::CorsError::PRIVATE_NETWORK_ACCESS_PERMISSION_UNAVAILABLE:
      return base::Value("PrivateNetworkAccessPermissionUnavailable");
    case network::CorsError::PRIVATE_NETWORK_ACCESS_PERMISSION_DENIED:
      return base::Value("PrivateNetworkAccessPermissionDenied");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::CorsErrorStatus> {
  static std::unique_ptr<network::CorsErrorStatus> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CorsErrorStatus::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CorsErrorStatus& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::ServiceWorkerResponseSource> {
  static network::ServiceWorkerResponseSource Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::ServiceWorkerResponseSource::CACHE_STORAGE;
    }
    if (value.GetString() == "cache-storage")
      return network::ServiceWorkerResponseSource::CACHE_STORAGE;
    if (value.GetString() == "http-cache")
      return network::ServiceWorkerResponseSource::HTTP_CACHE;
    if (value.GetString() == "fallback-code")
      return network::ServiceWorkerResponseSource::FALLBACK_CODE;
    if (value.GetString() == "network")
      return network::ServiceWorkerResponseSource::NETWORK;
    errors->AddError("invalid enum value");
    return network::ServiceWorkerResponseSource::CACHE_STORAGE;
  }
};

template <>
inline base::Value ToValue(const network::ServiceWorkerResponseSource& value) {
  switch (value) {
    case network::ServiceWorkerResponseSource::CACHE_STORAGE:
      return base::Value("cache-storage");
    case network::ServiceWorkerResponseSource::HTTP_CACHE:
      return base::Value("http-cache");
    case network::ServiceWorkerResponseSource::FALLBACK_CODE:
      return base::Value("fallback-code");
    case network::ServiceWorkerResponseSource::NETWORK:
      return base::Value("network");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::TrustTokenParams> {
  static std::unique_ptr<network::TrustTokenParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::TrustTokenParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::TrustTokenParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::TrustTokenOperationType> {
  static network::TrustTokenOperationType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::TrustTokenOperationType::ISSUANCE;
    }
    if (value.GetString() == "Issuance")
      return network::TrustTokenOperationType::ISSUANCE;
    if (value.GetString() == "Redemption")
      return network::TrustTokenOperationType::REDEMPTION;
    if (value.GetString() == "Signing")
      return network::TrustTokenOperationType::SIGNING;
    errors->AddError("invalid enum value");
    return network::TrustTokenOperationType::ISSUANCE;
  }
};

template <>
inline base::Value ToValue(const network::TrustTokenOperationType& value) {
  switch (value) {
    case network::TrustTokenOperationType::ISSUANCE:
      return base::Value("Issuance");
    case network::TrustTokenOperationType::REDEMPTION:
      return base::Value("Redemption");
    case network::TrustTokenOperationType::SIGNING:
      return base::Value("Signing");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::AlternateProtocolUsage> {
  static network::AlternateProtocolUsage Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::AlternateProtocolUsage::ALTERNATIVE_JOB_WON_WITHOUT_RACE;
    }
    if (value.GetString() == "alternativeJobWonWithoutRace")
      return network::AlternateProtocolUsage::ALTERNATIVE_JOB_WON_WITHOUT_RACE;
    if (value.GetString() == "alternativeJobWonRace")
      return network::AlternateProtocolUsage::ALTERNATIVE_JOB_WON_RACE;
    if (value.GetString() == "mainJobWonRace")
      return network::AlternateProtocolUsage::MAIN_JOB_WON_RACE;
    if (value.GetString() == "mappingMissing")
      return network::AlternateProtocolUsage::MAPPING_MISSING;
    if (value.GetString() == "broken")
      return network::AlternateProtocolUsage::BROKEN;
    if (value.GetString() == "dnsAlpnH3JobWonWithoutRace")
      return network::AlternateProtocolUsage::DNS_ALPNH3_JOB_WON_WITHOUT_RACE;
    if (value.GetString() == "dnsAlpnH3JobWonRace")
      return network::AlternateProtocolUsage::DNS_ALPNH3_JOB_WON_RACE;
    if (value.GetString() == "unspecifiedReason")
      return network::AlternateProtocolUsage::UNSPECIFIED_REASON;
    errors->AddError("invalid enum value");
    return network::AlternateProtocolUsage::ALTERNATIVE_JOB_WON_WITHOUT_RACE;
  }
};

template <>
inline base::Value ToValue(const network::AlternateProtocolUsage& value) {
  switch (value) {
    case network::AlternateProtocolUsage::ALTERNATIVE_JOB_WON_WITHOUT_RACE:
      return base::Value("alternativeJobWonWithoutRace");
    case network::AlternateProtocolUsage::ALTERNATIVE_JOB_WON_RACE:
      return base::Value("alternativeJobWonRace");
    case network::AlternateProtocolUsage::MAIN_JOB_WON_RACE:
      return base::Value("mainJobWonRace");
    case network::AlternateProtocolUsage::MAPPING_MISSING:
      return base::Value("mappingMissing");
    case network::AlternateProtocolUsage::BROKEN:
      return base::Value("broken");
    case network::AlternateProtocolUsage::DNS_ALPNH3_JOB_WON_WITHOUT_RACE:
      return base::Value("dnsAlpnH3JobWonWithoutRace");
    case network::AlternateProtocolUsage::DNS_ALPNH3_JOB_WON_RACE:
      return base::Value("dnsAlpnH3JobWonRace");
    case network::AlternateProtocolUsage::UNSPECIFIED_REASON:
      return base::Value("unspecifiedReason");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::ServiceWorkerRouterInfo> {
  static std::unique_ptr<network::ServiceWorkerRouterInfo> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ServiceWorkerRouterInfo::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ServiceWorkerRouterInfo& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::Response> {
  static std::unique_ptr<network::Response> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::Response::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::Response& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketRequest> {
  static std::unique_ptr<network::WebSocketRequest> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketRequest::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketRequest& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketResponse> {
  static std::unique_ptr<network::WebSocketResponse> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketResponse::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketResponse& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketFrame> {
  static std::unique_ptr<network::WebSocketFrame> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketFrame::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketFrame& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::CachedResource> {
  static std::unique_ptr<network::CachedResource> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CachedResource::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CachedResource& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::Initiator> {
  static std::unique_ptr<network::Initiator> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::Initiator::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::Initiator& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::Cookie> {
  static std::unique_ptr<network::Cookie> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::Cookie::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::Cookie& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::SetCookieBlockedReason> {
  static network::SetCookieBlockedReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::SetCookieBlockedReason::SECURE_ONLY;
    }
    if (value.GetString() == "SecureOnly")
      return network::SetCookieBlockedReason::SECURE_ONLY;
    if (value.GetString() == "SameSiteStrict")
      return network::SetCookieBlockedReason::SAME_SITE_STRICT;
    if (value.GetString() == "SameSiteLax")
      return network::SetCookieBlockedReason::SAME_SITE_LAX;
    if (value.GetString() == "SameSiteUnspecifiedTreatedAsLax")
      return network::SetCookieBlockedReason::SAME_SITE_UNSPECIFIED_TREATED_AS_LAX;
    if (value.GetString() == "SameSiteNoneInsecure")
      return network::SetCookieBlockedReason::SAME_SITE_NONE_INSECURE;
    if (value.GetString() == "UserPreferences")
      return network::SetCookieBlockedReason::USER_PREFERENCES;
    if (value.GetString() == "ThirdPartyPhaseout")
      return network::SetCookieBlockedReason::THIRD_PARTY_PHASEOUT;
    if (value.GetString() == "ThirdPartyBlockedInFirstPartySet")
      return network::SetCookieBlockedReason::THIRD_PARTY_BLOCKED_IN_FIRST_PARTY_SET;
    if (value.GetString() == "SyntaxError")
      return network::SetCookieBlockedReason::SYNTAX_ERROR;
    if (value.GetString() == "SchemeNotSupported")
      return network::SetCookieBlockedReason::SCHEME_NOT_SUPPORTED;
    if (value.GetString() == "OverwriteSecure")
      return network::SetCookieBlockedReason::OVERWRITE_SECURE;
    if (value.GetString() == "InvalidDomain")
      return network::SetCookieBlockedReason::INVALID_DOMAIN;
    if (value.GetString() == "InvalidPrefix")
      return network::SetCookieBlockedReason::INVALID_PREFIX;
    if (value.GetString() == "UnknownError")
      return network::SetCookieBlockedReason::UNKNOWN_ERROR;
    if (value.GetString() == "SchemefulSameSiteStrict")
      return network::SetCookieBlockedReason::SCHEMEFUL_SAME_SITE_STRICT;
    if (value.GetString() == "SchemefulSameSiteLax")
      return network::SetCookieBlockedReason::SCHEMEFUL_SAME_SITE_LAX;
    if (value.GetString() == "SchemefulSameSiteUnspecifiedTreatedAsLax")
      return network::SetCookieBlockedReason::SCHEMEFUL_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX;
    if (value.GetString() == "SamePartyFromCrossPartyContext")
      return network::SetCookieBlockedReason::SAME_PARTY_FROM_CROSS_PARTY_CONTEXT;
    if (value.GetString() == "SamePartyConflictsWithOtherAttributes")
      return network::SetCookieBlockedReason::SAME_PARTY_CONFLICTS_WITH_OTHER_ATTRIBUTES;
    if (value.GetString() == "NameValuePairExceedsMaxSize")
      return network::SetCookieBlockedReason::NAME_VALUE_PAIR_EXCEEDS_MAX_SIZE;
    if (value.GetString() == "DisallowedCharacter")
      return network::SetCookieBlockedReason::DISALLOWED_CHARACTER;
    if (value.GetString() == "NoCookieContent")
      return network::SetCookieBlockedReason::NO_COOKIE_CONTENT;
    errors->AddError("invalid enum value");
    return network::SetCookieBlockedReason::SECURE_ONLY;
  }
};

template <>
inline base::Value ToValue(const network::SetCookieBlockedReason& value) {
  switch (value) {
    case network::SetCookieBlockedReason::SECURE_ONLY:
      return base::Value("SecureOnly");
    case network::SetCookieBlockedReason::SAME_SITE_STRICT:
      return base::Value("SameSiteStrict");
    case network::SetCookieBlockedReason::SAME_SITE_LAX:
      return base::Value("SameSiteLax");
    case network::SetCookieBlockedReason::SAME_SITE_UNSPECIFIED_TREATED_AS_LAX:
      return base::Value("SameSiteUnspecifiedTreatedAsLax");
    case network::SetCookieBlockedReason::SAME_SITE_NONE_INSECURE:
      return base::Value("SameSiteNoneInsecure");
    case network::SetCookieBlockedReason::USER_PREFERENCES:
      return base::Value("UserPreferences");
    case network::SetCookieBlockedReason::THIRD_PARTY_PHASEOUT:
      return base::Value("ThirdPartyPhaseout");
    case network::SetCookieBlockedReason::THIRD_PARTY_BLOCKED_IN_FIRST_PARTY_SET:
      return base::Value("ThirdPartyBlockedInFirstPartySet");
    case network::SetCookieBlockedReason::SYNTAX_ERROR:
      return base::Value("SyntaxError");
    case network::SetCookieBlockedReason::SCHEME_NOT_SUPPORTED:
      return base::Value("SchemeNotSupported");
    case network::SetCookieBlockedReason::OVERWRITE_SECURE:
      return base::Value("OverwriteSecure");
    case network::SetCookieBlockedReason::INVALID_DOMAIN:
      return base::Value("InvalidDomain");
    case network::SetCookieBlockedReason::INVALID_PREFIX:
      return base::Value("InvalidPrefix");
    case network::SetCookieBlockedReason::UNKNOWN_ERROR:
      return base::Value("UnknownError");
    case network::SetCookieBlockedReason::SCHEMEFUL_SAME_SITE_STRICT:
      return base::Value("SchemefulSameSiteStrict");
    case network::SetCookieBlockedReason::SCHEMEFUL_SAME_SITE_LAX:
      return base::Value("SchemefulSameSiteLax");
    case network::SetCookieBlockedReason::SCHEMEFUL_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX:
      return base::Value("SchemefulSameSiteUnspecifiedTreatedAsLax");
    case network::SetCookieBlockedReason::SAME_PARTY_FROM_CROSS_PARTY_CONTEXT:
      return base::Value("SamePartyFromCrossPartyContext");
    case network::SetCookieBlockedReason::SAME_PARTY_CONFLICTS_WITH_OTHER_ATTRIBUTES:
      return base::Value("SamePartyConflictsWithOtherAttributes");
    case network::SetCookieBlockedReason::NAME_VALUE_PAIR_EXCEEDS_MAX_SIZE:
      return base::Value("NameValuePairExceedsMaxSize");
    case network::SetCookieBlockedReason::DISALLOWED_CHARACTER:
      return base::Value("DisallowedCharacter");
    case network::SetCookieBlockedReason::NO_COOKIE_CONTENT:
      return base::Value("NoCookieContent");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::CookieBlockedReason> {
  static network::CookieBlockedReason Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::CookieBlockedReason::SECURE_ONLY;
    }
    if (value.GetString() == "SecureOnly")
      return network::CookieBlockedReason::SECURE_ONLY;
    if (value.GetString() == "NotOnPath")
      return network::CookieBlockedReason::NOT_ON_PATH;
    if (value.GetString() == "DomainMismatch")
      return network::CookieBlockedReason::DOMAIN_MISMATCH;
    if (value.GetString() == "SameSiteStrict")
      return network::CookieBlockedReason::SAME_SITE_STRICT;
    if (value.GetString() == "SameSiteLax")
      return network::CookieBlockedReason::SAME_SITE_LAX;
    if (value.GetString() == "SameSiteUnspecifiedTreatedAsLax")
      return network::CookieBlockedReason::SAME_SITE_UNSPECIFIED_TREATED_AS_LAX;
    if (value.GetString() == "SameSiteNoneInsecure")
      return network::CookieBlockedReason::SAME_SITE_NONE_INSECURE;
    if (value.GetString() == "UserPreferences")
      return network::CookieBlockedReason::USER_PREFERENCES;
    if (value.GetString() == "ThirdPartyPhaseout")
      return network::CookieBlockedReason::THIRD_PARTY_PHASEOUT;
    if (value.GetString() == "ThirdPartyBlockedInFirstPartySet")
      return network::CookieBlockedReason::THIRD_PARTY_BLOCKED_IN_FIRST_PARTY_SET;
    if (value.GetString() == "UnknownError")
      return network::CookieBlockedReason::UNKNOWN_ERROR;
    if (value.GetString() == "SchemefulSameSiteStrict")
      return network::CookieBlockedReason::SCHEMEFUL_SAME_SITE_STRICT;
    if (value.GetString() == "SchemefulSameSiteLax")
      return network::CookieBlockedReason::SCHEMEFUL_SAME_SITE_LAX;
    if (value.GetString() == "SchemefulSameSiteUnspecifiedTreatedAsLax")
      return network::CookieBlockedReason::SCHEMEFUL_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX;
    if (value.GetString() == "SamePartyFromCrossPartyContext")
      return network::CookieBlockedReason::SAME_PARTY_FROM_CROSS_PARTY_CONTEXT;
    if (value.GetString() == "NameValuePairExceedsMaxSize")
      return network::CookieBlockedReason::NAME_VALUE_PAIR_EXCEEDS_MAX_SIZE;
    errors->AddError("invalid enum value");
    return network::CookieBlockedReason::SECURE_ONLY;
  }
};

template <>
inline base::Value ToValue(const network::CookieBlockedReason& value) {
  switch (value) {
    case network::CookieBlockedReason::SECURE_ONLY:
      return base::Value("SecureOnly");
    case network::CookieBlockedReason::NOT_ON_PATH:
      return base::Value("NotOnPath");
    case network::CookieBlockedReason::DOMAIN_MISMATCH:
      return base::Value("DomainMismatch");
    case network::CookieBlockedReason::SAME_SITE_STRICT:
      return base::Value("SameSiteStrict");
    case network::CookieBlockedReason::SAME_SITE_LAX:
      return base::Value("SameSiteLax");
    case network::CookieBlockedReason::SAME_SITE_UNSPECIFIED_TREATED_AS_LAX:
      return base::Value("SameSiteUnspecifiedTreatedAsLax");
    case network::CookieBlockedReason::SAME_SITE_NONE_INSECURE:
      return base::Value("SameSiteNoneInsecure");
    case network::CookieBlockedReason::USER_PREFERENCES:
      return base::Value("UserPreferences");
    case network::CookieBlockedReason::THIRD_PARTY_PHASEOUT:
      return base::Value("ThirdPartyPhaseout");
    case network::CookieBlockedReason::THIRD_PARTY_BLOCKED_IN_FIRST_PARTY_SET:
      return base::Value("ThirdPartyBlockedInFirstPartySet");
    case network::CookieBlockedReason::UNKNOWN_ERROR:
      return base::Value("UnknownError");
    case network::CookieBlockedReason::SCHEMEFUL_SAME_SITE_STRICT:
      return base::Value("SchemefulSameSiteStrict");
    case network::CookieBlockedReason::SCHEMEFUL_SAME_SITE_LAX:
      return base::Value("SchemefulSameSiteLax");
    case network::CookieBlockedReason::SCHEMEFUL_SAME_SITE_UNSPECIFIED_TREATED_AS_LAX:
      return base::Value("SchemefulSameSiteUnspecifiedTreatedAsLax");
    case network::CookieBlockedReason::SAME_PARTY_FROM_CROSS_PARTY_CONTEXT:
      return base::Value("SamePartyFromCrossPartyContext");
    case network::CookieBlockedReason::NAME_VALUE_PAIR_EXCEEDS_MAX_SIZE:
      return base::Value("NameValuePairExceedsMaxSize");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::BlockedSetCookieWithReason> {
  static std::unique_ptr<network::BlockedSetCookieWithReason> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::BlockedSetCookieWithReason::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::BlockedSetCookieWithReason& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::BlockedCookieWithReason> {
  static std::unique_ptr<network::BlockedCookieWithReason> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::BlockedCookieWithReason::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::BlockedCookieWithReason& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::CookieParam> {
  static std::unique_ptr<network::CookieParam> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CookieParam::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CookieParam& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::AuthChallenge> {
  static std::unique_ptr<network::AuthChallenge> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::AuthChallenge::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::AuthChallenge& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::AuthChallengeResponse> {
  static std::unique_ptr<network::AuthChallengeResponse> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::AuthChallengeResponse::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::AuthChallengeResponse& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::InterceptionStage> {
  static network::InterceptionStage Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::InterceptionStage::REQUEST;
    }
    if (value.GetString() == "Request")
      return network::InterceptionStage::REQUEST;
    if (value.GetString() == "HeadersReceived")
      return network::InterceptionStage::HEADERS_RECEIVED;
    errors->AddError("invalid enum value");
    return network::InterceptionStage::REQUEST;
  }
};

template <>
inline base::Value ToValue(const network::InterceptionStage& value) {
  switch (value) {
    case network::InterceptionStage::REQUEST:
      return base::Value("Request");
    case network::InterceptionStage::HEADERS_RECEIVED:
      return base::Value("HeadersReceived");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::RequestPattern> {
  static std::unique_ptr<network::RequestPattern> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::RequestPattern::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::RequestPattern& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SignedExchangeSignature> {
  static std::unique_ptr<network::SignedExchangeSignature> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SignedExchangeSignature::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SignedExchangeSignature& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SignedExchangeHeader> {
  static std::unique_ptr<network::SignedExchangeHeader> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SignedExchangeHeader::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SignedExchangeHeader& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::SignedExchangeErrorField> {
  static network::SignedExchangeErrorField Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::SignedExchangeErrorField::SIGNATURE_SIG;
    }
    if (value.GetString() == "signatureSig")
      return network::SignedExchangeErrorField::SIGNATURE_SIG;
    if (value.GetString() == "signatureIntegrity")
      return network::SignedExchangeErrorField::SIGNATURE_INTEGRITY;
    if (value.GetString() == "signatureCertUrl")
      return network::SignedExchangeErrorField::SIGNATURE_CERT_URL;
    if (value.GetString() == "signatureCertSha256")
      return network::SignedExchangeErrorField::SIGNATURE_CERT_SHA256;
    if (value.GetString() == "signatureValidityUrl")
      return network::SignedExchangeErrorField::SIGNATURE_VALIDITY_URL;
    if (value.GetString() == "signatureTimestamps")
      return network::SignedExchangeErrorField::SIGNATURE_TIMESTAMPS;
    errors->AddError("invalid enum value");
    return network::SignedExchangeErrorField::SIGNATURE_SIG;
  }
};

template <>
inline base::Value ToValue(const network::SignedExchangeErrorField& value) {
  switch (value) {
    case network::SignedExchangeErrorField::SIGNATURE_SIG:
      return base::Value("signatureSig");
    case network::SignedExchangeErrorField::SIGNATURE_INTEGRITY:
      return base::Value("signatureIntegrity");
    case network::SignedExchangeErrorField::SIGNATURE_CERT_URL:
      return base::Value("signatureCertUrl");
    case network::SignedExchangeErrorField::SIGNATURE_CERT_SHA256:
      return base::Value("signatureCertSha256");
    case network::SignedExchangeErrorField::SIGNATURE_VALIDITY_URL:
      return base::Value("signatureValidityUrl");
    case network::SignedExchangeErrorField::SIGNATURE_TIMESTAMPS:
      return base::Value("signatureTimestamps");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::SignedExchangeError> {
  static std::unique_ptr<network::SignedExchangeError> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SignedExchangeError::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SignedExchangeError& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SignedExchangeInfo> {
  static std::unique_ptr<network::SignedExchangeInfo> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SignedExchangeInfo::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SignedExchangeInfo& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::ContentEncoding> {
  static network::ContentEncoding Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::ContentEncoding::DEFLATE;
    }
    if (value.GetString() == "deflate")
      return network::ContentEncoding::DEFLATE;
    if (value.GetString() == "gzip")
      return network::ContentEncoding::GZIP;
    if (value.GetString() == "br")
      return network::ContentEncoding::BR;
    if (value.GetString() == "zstd")
      return network::ContentEncoding::ZSTD;
    errors->AddError("invalid enum value");
    return network::ContentEncoding::DEFLATE;
  }
};

template <>
inline base::Value ToValue(const network::ContentEncoding& value) {
  switch (value) {
    case network::ContentEncoding::DEFLATE:
      return base::Value("deflate");
    case network::ContentEncoding::GZIP:
      return base::Value("gzip");
    case network::ContentEncoding::BR:
      return base::Value("br");
    case network::ContentEncoding::ZSTD:
      return base::Value("zstd");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::PrivateNetworkRequestPolicy> {
  static network::PrivateNetworkRequestPolicy Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::PrivateNetworkRequestPolicy::ALLOW;
    }
    if (value.GetString() == "Allow")
      return network::PrivateNetworkRequestPolicy::ALLOW;
    if (value.GetString() == "BlockFromInsecureToMorePrivate")
      return network::PrivateNetworkRequestPolicy::BLOCK_FROM_INSECURE_TO_MORE_PRIVATE;
    if (value.GetString() == "WarnFromInsecureToMorePrivate")
      return network::PrivateNetworkRequestPolicy::WARN_FROM_INSECURE_TO_MORE_PRIVATE;
    if (value.GetString() == "PreflightBlock")
      return network::PrivateNetworkRequestPolicy::PREFLIGHT_BLOCK;
    if (value.GetString() == "PreflightWarn")
      return network::PrivateNetworkRequestPolicy::PREFLIGHT_WARN;
    errors->AddError("invalid enum value");
    return network::PrivateNetworkRequestPolicy::ALLOW;
  }
};

template <>
inline base::Value ToValue(const network::PrivateNetworkRequestPolicy& value) {
  switch (value) {
    case network::PrivateNetworkRequestPolicy::ALLOW:
      return base::Value("Allow");
    case network::PrivateNetworkRequestPolicy::BLOCK_FROM_INSECURE_TO_MORE_PRIVATE:
      return base::Value("BlockFromInsecureToMorePrivate");
    case network::PrivateNetworkRequestPolicy::WARN_FROM_INSECURE_TO_MORE_PRIVATE:
      return base::Value("WarnFromInsecureToMorePrivate");
    case network::PrivateNetworkRequestPolicy::PREFLIGHT_BLOCK:
      return base::Value("PreflightBlock");
    case network::PrivateNetworkRequestPolicy::PREFLIGHT_WARN:
      return base::Value("PreflightWarn");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::IPAddressSpace> {
  static network::IPAddressSpace Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::IPAddressSpace::LOCAL;
    }
    if (value.GetString() == "Local")
      return network::IPAddressSpace::LOCAL;
    if (value.GetString() == "Private")
      return network::IPAddressSpace::PRIVATE;
    if (value.GetString() == "Public")
      return network::IPAddressSpace::PUBLIC;
    if (value.GetString() == "Unknown")
      return network::IPAddressSpace::UNKNOWN;
    errors->AddError("invalid enum value");
    return network::IPAddressSpace::LOCAL;
  }
};

template <>
inline base::Value ToValue(const network::IPAddressSpace& value) {
  switch (value) {
    case network::IPAddressSpace::LOCAL:
      return base::Value("Local");
    case network::IPAddressSpace::PRIVATE:
      return base::Value("Private");
    case network::IPAddressSpace::PUBLIC:
      return base::Value("Public");
    case network::IPAddressSpace::UNKNOWN:
      return base::Value("Unknown");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::ConnectTiming> {
  static std::unique_ptr<network::ConnectTiming> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ConnectTiming::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ConnectTiming& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ClientSecurityState> {
  static std::unique_ptr<network::ClientSecurityState> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ClientSecurityState::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ClientSecurityState& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::CrossOriginOpenerPolicyValue> {
  static network::CrossOriginOpenerPolicyValue Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::CrossOriginOpenerPolicyValue::SAME_ORIGIN;
    }
    if (value.GetString() == "SameOrigin")
      return network::CrossOriginOpenerPolicyValue::SAME_ORIGIN;
    if (value.GetString() == "SameOriginAllowPopups")
      return network::CrossOriginOpenerPolicyValue::SAME_ORIGIN_ALLOW_POPUPS;
    if (value.GetString() == "RestrictProperties")
      return network::CrossOriginOpenerPolicyValue::RESTRICT_PROPERTIES;
    if (value.GetString() == "UnsafeNone")
      return network::CrossOriginOpenerPolicyValue::UNSAFE_NONE;
    if (value.GetString() == "SameOriginPlusCoep")
      return network::CrossOriginOpenerPolicyValue::SAME_ORIGIN_PLUS_COEP;
    if (value.GetString() == "RestrictPropertiesPlusCoep")
      return network::CrossOriginOpenerPolicyValue::RESTRICT_PROPERTIES_PLUS_COEP;
    errors->AddError("invalid enum value");
    return network::CrossOriginOpenerPolicyValue::SAME_ORIGIN;
  }
};

template <>
inline base::Value ToValue(const network::CrossOriginOpenerPolicyValue& value) {
  switch (value) {
    case network::CrossOriginOpenerPolicyValue::SAME_ORIGIN:
      return base::Value("SameOrigin");
    case network::CrossOriginOpenerPolicyValue::SAME_ORIGIN_ALLOW_POPUPS:
      return base::Value("SameOriginAllowPopups");
    case network::CrossOriginOpenerPolicyValue::RESTRICT_PROPERTIES:
      return base::Value("RestrictProperties");
    case network::CrossOriginOpenerPolicyValue::UNSAFE_NONE:
      return base::Value("UnsafeNone");
    case network::CrossOriginOpenerPolicyValue::SAME_ORIGIN_PLUS_COEP:
      return base::Value("SameOriginPlusCoep");
    case network::CrossOriginOpenerPolicyValue::RESTRICT_PROPERTIES_PLUS_COEP:
      return base::Value("RestrictPropertiesPlusCoep");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::CrossOriginOpenerPolicyStatus> {
  static std::unique_ptr<network::CrossOriginOpenerPolicyStatus> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CrossOriginOpenerPolicyStatus::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CrossOriginOpenerPolicyStatus& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::CrossOriginEmbedderPolicyValue> {
  static network::CrossOriginEmbedderPolicyValue Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::CrossOriginEmbedderPolicyValue::NONE;
    }
    if (value.GetString() == "None")
      return network::CrossOriginEmbedderPolicyValue::NONE;
    if (value.GetString() == "Credentialless")
      return network::CrossOriginEmbedderPolicyValue::CREDENTIALLESS;
    if (value.GetString() == "RequireCorp")
      return network::CrossOriginEmbedderPolicyValue::REQUIRE_CORP;
    errors->AddError("invalid enum value");
    return network::CrossOriginEmbedderPolicyValue::NONE;
  }
};

template <>
inline base::Value ToValue(const network::CrossOriginEmbedderPolicyValue& value) {
  switch (value) {
    case network::CrossOriginEmbedderPolicyValue::NONE:
      return base::Value("None");
    case network::CrossOriginEmbedderPolicyValue::CREDENTIALLESS:
      return base::Value("Credentialless");
    case network::CrossOriginEmbedderPolicyValue::REQUIRE_CORP:
      return base::Value("RequireCorp");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::CrossOriginEmbedderPolicyStatus> {
  static std::unique_ptr<network::CrossOriginEmbedderPolicyStatus> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CrossOriginEmbedderPolicyStatus::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CrossOriginEmbedderPolicyStatus& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::ContentSecurityPolicySource> {
  static network::ContentSecurityPolicySource Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::ContentSecurityPolicySource::HTTP;
    }
    if (value.GetString() == "HTTP")
      return network::ContentSecurityPolicySource::HTTP;
    if (value.GetString() == "Meta")
      return network::ContentSecurityPolicySource::META;
    errors->AddError("invalid enum value");
    return network::ContentSecurityPolicySource::HTTP;
  }
};

template <>
inline base::Value ToValue(const network::ContentSecurityPolicySource& value) {
  switch (value) {
    case network::ContentSecurityPolicySource::HTTP:
      return base::Value("HTTP");
    case network::ContentSecurityPolicySource::META:
      return base::Value("Meta");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::ContentSecurityPolicyStatus> {
  static std::unique_ptr<network::ContentSecurityPolicyStatus> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ContentSecurityPolicyStatus::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ContentSecurityPolicyStatus& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SecurityIsolationStatus> {
  static std::unique_ptr<network::SecurityIsolationStatus> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SecurityIsolationStatus::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SecurityIsolationStatus& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::ReportStatus> {
  static network::ReportStatus Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::ReportStatus::QUEUED;
    }
    if (value.GetString() == "Queued")
      return network::ReportStatus::QUEUED;
    if (value.GetString() == "Pending")
      return network::ReportStatus::PENDING;
    if (value.GetString() == "MarkedForRemoval")
      return network::ReportStatus::MARKED_FOR_REMOVAL;
    if (value.GetString() == "Success")
      return network::ReportStatus::SUCCESS;
    errors->AddError("invalid enum value");
    return network::ReportStatus::QUEUED;
  }
};

template <>
inline base::Value ToValue(const network::ReportStatus& value) {
  switch (value) {
    case network::ReportStatus::QUEUED:
      return base::Value("Queued");
    case network::ReportStatus::PENDING:
      return base::Value("Pending");
    case network::ReportStatus::MARKED_FOR_REMOVAL:
      return base::Value("MarkedForRemoval");
    case network::ReportStatus::SUCCESS:
      return base::Value("Success");
  };
  NOTREACHED();
  return base::Value();
}


template <>
struct FromValue<network::ReportingApiReport> {
  static std::unique_ptr<network::ReportingApiReport> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ReportingApiReport::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ReportingApiReport& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ReportingApiEndpoint> {
  static std::unique_ptr<network::ReportingApiEndpoint> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ReportingApiEndpoint::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ReportingApiEndpoint& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::LoadNetworkResourcePageResult> {
  static std::unique_ptr<network::LoadNetworkResourcePageResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::LoadNetworkResourcePageResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::LoadNetworkResourcePageResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::LoadNetworkResourceOptions> {
  static std::unique_ptr<network::LoadNetworkResourceOptions> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::LoadNetworkResourceOptions::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::LoadNetworkResourceOptions& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::RequestReferrerPolicy> {
  static network::RequestReferrerPolicy Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::RequestReferrerPolicy::UNSAFE_URL;
    }
    if (value.GetString() == "unsafe-url")
      return network::RequestReferrerPolicy::UNSAFE_URL;
    if (value.GetString() == "no-referrer-when-downgrade")
      return network::RequestReferrerPolicy::NO_REFERRER_WHEN_DOWNGRADE;
    if (value.GetString() == "no-referrer")
      return network::RequestReferrerPolicy::NO_REFERRER;
    if (value.GetString() == "origin")
      return network::RequestReferrerPolicy::ORIGIN;
    if (value.GetString() == "origin-when-cross-origin")
      return network::RequestReferrerPolicy::ORIGIN_WHEN_CROSS_ORIGIN;
    if (value.GetString() == "same-origin")
      return network::RequestReferrerPolicy::SAME_ORIGIN;
    if (value.GetString() == "strict-origin")
      return network::RequestReferrerPolicy::STRICT_ORIGIN;
    if (value.GetString() == "strict-origin-when-cross-origin")
      return network::RequestReferrerPolicy::STRICT_ORIGIN_WHEN_CROSS_ORIGIN;
    errors->AddError("invalid enum value");
    return network::RequestReferrerPolicy::UNSAFE_URL;
  }
};

template <>
inline base::Value ToValue(const network::RequestReferrerPolicy& value) {
  switch (value) {
    case network::RequestReferrerPolicy::UNSAFE_URL:
      return base::Value("unsafe-url");
    case network::RequestReferrerPolicy::NO_REFERRER_WHEN_DOWNGRADE:
      return base::Value("no-referrer-when-downgrade");
    case network::RequestReferrerPolicy::NO_REFERRER:
      return base::Value("no-referrer");
    case network::RequestReferrerPolicy::ORIGIN:
      return base::Value("origin");
    case network::RequestReferrerPolicy::ORIGIN_WHEN_CROSS_ORIGIN:
      return base::Value("origin-when-cross-origin");
    case network::RequestReferrerPolicy::SAME_ORIGIN:
      return base::Value("same-origin");
    case network::RequestReferrerPolicy::STRICT_ORIGIN:
      return base::Value("strict-origin");
    case network::RequestReferrerPolicy::STRICT_ORIGIN_WHEN_CROSS_ORIGIN:
      return base::Value("strict-origin-when-cross-origin");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::TrustTokenParamsRefreshPolicy> {
  static network::TrustTokenParamsRefreshPolicy Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::TrustTokenParamsRefreshPolicy::USE_CACHED;
    }
    if (value.GetString() == "UseCached")
      return network::TrustTokenParamsRefreshPolicy::USE_CACHED;
    if (value.GetString() == "Refresh")
      return network::TrustTokenParamsRefreshPolicy::REFRESH;
    errors->AddError("invalid enum value");
    return network::TrustTokenParamsRefreshPolicy::USE_CACHED;
  }
};

template <>
inline base::Value ToValue(const network::TrustTokenParamsRefreshPolicy& value) {
  switch (value) {
    case network::TrustTokenParamsRefreshPolicy::USE_CACHED:
      return base::Value("UseCached");
    case network::TrustTokenParamsRefreshPolicy::REFRESH:
      return base::Value("Refresh");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::InitiatorType> {
  static network::InitiatorType Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::InitiatorType::PARSER;
    }
    if (value.GetString() == "parser")
      return network::InitiatorType::PARSER;
    if (value.GetString() == "script")
      return network::InitiatorType::SCRIPT;
    if (value.GetString() == "preload")
      return network::InitiatorType::PRELOAD;
    if (value.GetString() == "SignedExchange")
      return network::InitiatorType::SIGNED_EXCHANGE;
    if (value.GetString() == "preflight")
      return network::InitiatorType::PREFLIGHT;
    if (value.GetString() == "other")
      return network::InitiatorType::OTHER;
    errors->AddError("invalid enum value");
    return network::InitiatorType::PARSER;
  }
};

template <>
inline base::Value ToValue(const network::InitiatorType& value) {
  switch (value) {
    case network::InitiatorType::PARSER:
      return base::Value("parser");
    case network::InitiatorType::SCRIPT:
      return base::Value("script");
    case network::InitiatorType::PRELOAD:
      return base::Value("preload");
    case network::InitiatorType::SIGNED_EXCHANGE:
      return base::Value("SignedExchange");
    case network::InitiatorType::PREFLIGHT:
      return base::Value("preflight");
    case network::InitiatorType::OTHER:
      return base::Value("other");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::AuthChallengeSource> {
  static network::AuthChallengeSource Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::AuthChallengeSource::SERVER;
    }
    if (value.GetString() == "Server")
      return network::AuthChallengeSource::SERVER;
    if (value.GetString() == "Proxy")
      return network::AuthChallengeSource::PROXY;
    errors->AddError("invalid enum value");
    return network::AuthChallengeSource::SERVER;
  }
};

template <>
inline base::Value ToValue(const network::AuthChallengeSource& value) {
  switch (value) {
    case network::AuthChallengeSource::SERVER:
      return base::Value("Server");
    case network::AuthChallengeSource::PROXY:
      return base::Value("Proxy");
  };
  NOTREACHED();
  return base::Value();
}
template <>
struct FromValue<network::AuthChallengeResponseResponse> {
  static network::AuthChallengeResponseResponse Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::AuthChallengeResponseResponse::DEFAULT;
    }
    if (value.GetString() == "Default")
      return network::AuthChallengeResponseResponse::DEFAULT;
    if (value.GetString() == "CancelAuth")
      return network::AuthChallengeResponseResponse::CANCEL_AUTH;
    if (value.GetString() == "ProvideCredentials")
      return network::AuthChallengeResponseResponse::PROVIDE_CREDENTIALS;
    errors->AddError("invalid enum value");
    return network::AuthChallengeResponseResponse::DEFAULT;
  }
};

template <>
inline base::Value ToValue(const network::AuthChallengeResponseResponse& value) {
  switch (value) {
    case network::AuthChallengeResponseResponse::DEFAULT:
      return base::Value("Default");
    case network::AuthChallengeResponseResponse::CANCEL_AUTH:
      return base::Value("CancelAuth");
    case network::AuthChallengeResponseResponse::PROVIDE_CREDENTIALS:
      return base::Value("ProvideCredentials");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::SetAcceptedEncodingsParams> {
  static std::unique_ptr<network::SetAcceptedEncodingsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetAcceptedEncodingsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetAcceptedEncodingsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetAcceptedEncodingsResult> {
  static std::unique_ptr<network::SetAcceptedEncodingsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetAcceptedEncodingsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetAcceptedEncodingsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ClearAcceptedEncodingsOverrideParams> {
  static std::unique_ptr<network::ClearAcceptedEncodingsOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ClearAcceptedEncodingsOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ClearAcceptedEncodingsOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ClearAcceptedEncodingsOverrideResult> {
  static std::unique_ptr<network::ClearAcceptedEncodingsOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ClearAcceptedEncodingsOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ClearAcceptedEncodingsOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::CanClearBrowserCacheParams> {
  static std::unique_ptr<network::CanClearBrowserCacheParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CanClearBrowserCacheParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CanClearBrowserCacheParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::CanClearBrowserCacheResult> {
  static std::unique_ptr<network::CanClearBrowserCacheResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CanClearBrowserCacheResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CanClearBrowserCacheResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::CanClearBrowserCookiesParams> {
  static std::unique_ptr<network::CanClearBrowserCookiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CanClearBrowserCookiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CanClearBrowserCookiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::CanClearBrowserCookiesResult> {
  static std::unique_ptr<network::CanClearBrowserCookiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CanClearBrowserCookiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CanClearBrowserCookiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::CanEmulateNetworkConditionsParams> {
  static std::unique_ptr<network::CanEmulateNetworkConditionsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CanEmulateNetworkConditionsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CanEmulateNetworkConditionsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::CanEmulateNetworkConditionsResult> {
  static std::unique_ptr<network::CanEmulateNetworkConditionsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::CanEmulateNetworkConditionsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::CanEmulateNetworkConditionsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ClearBrowserCacheParams> {
  static std::unique_ptr<network::ClearBrowserCacheParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ClearBrowserCacheParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ClearBrowserCacheParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ClearBrowserCacheResult> {
  static std::unique_ptr<network::ClearBrowserCacheResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ClearBrowserCacheResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ClearBrowserCacheResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ClearBrowserCookiesParams> {
  static std::unique_ptr<network::ClearBrowserCookiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ClearBrowserCookiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ClearBrowserCookiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ClearBrowserCookiesResult> {
  static std::unique_ptr<network::ClearBrowserCookiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ClearBrowserCookiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ClearBrowserCookiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ContinueInterceptedRequestParams> {
  static std::unique_ptr<network::ContinueInterceptedRequestParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ContinueInterceptedRequestParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ContinueInterceptedRequestParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ContinueInterceptedRequestResult> {
  static std::unique_ptr<network::ContinueInterceptedRequestResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ContinueInterceptedRequestResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ContinueInterceptedRequestResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::DeleteCookiesParams> {
  static std::unique_ptr<network::DeleteCookiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::DeleteCookiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::DeleteCookiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::DeleteCookiesResult> {
  static std::unique_ptr<network::DeleteCookiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::DeleteCookiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::DeleteCookiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::DisableParams> {
  static std::unique_ptr<network::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::DisableResult> {
  static std::unique_ptr<network::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::EmulateNetworkConditionsParams> {
  static std::unique_ptr<network::EmulateNetworkConditionsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::EmulateNetworkConditionsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::EmulateNetworkConditionsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::EmulateNetworkConditionsResult> {
  static std::unique_ptr<network::EmulateNetworkConditionsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::EmulateNetworkConditionsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::EmulateNetworkConditionsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::EnableParams> {
  static std::unique_ptr<network::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::EnableResult> {
  static std::unique_ptr<network::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetAllCookiesParams> {
  static std::unique_ptr<network::GetAllCookiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetAllCookiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetAllCookiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetAllCookiesResult> {
  static std::unique_ptr<network::GetAllCookiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetAllCookiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetAllCookiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetCertificateParams> {
  static std::unique_ptr<network::GetCertificateParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetCertificateParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetCertificateParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetCertificateResult> {
  static std::unique_ptr<network::GetCertificateResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetCertificateResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetCertificateResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetCookiesParams> {
  static std::unique_ptr<network::GetCookiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetCookiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetCookiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetCookiesResult> {
  static std::unique_ptr<network::GetCookiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetCookiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetCookiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetResponseBodyParams> {
  static std::unique_ptr<network::GetResponseBodyParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetResponseBodyParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetResponseBodyParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetResponseBodyResult> {
  static std::unique_ptr<network::GetResponseBodyResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetResponseBodyResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetResponseBodyResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetRequestPostDataParams> {
  static std::unique_ptr<network::GetRequestPostDataParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetRequestPostDataParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetRequestPostDataParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetRequestPostDataResult> {
  static std::unique_ptr<network::GetRequestPostDataResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetRequestPostDataResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetRequestPostDataResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetResponseBodyForInterceptionParams> {
  static std::unique_ptr<network::GetResponseBodyForInterceptionParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetResponseBodyForInterceptionParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetResponseBodyForInterceptionParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetResponseBodyForInterceptionResult> {
  static std::unique_ptr<network::GetResponseBodyForInterceptionResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetResponseBodyForInterceptionResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetResponseBodyForInterceptionResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::TakeResponseBodyForInterceptionAsStreamParams> {
  static std::unique_ptr<network::TakeResponseBodyForInterceptionAsStreamParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::TakeResponseBodyForInterceptionAsStreamParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::TakeResponseBodyForInterceptionAsStreamParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::TakeResponseBodyForInterceptionAsStreamResult> {
  static std::unique_ptr<network::TakeResponseBodyForInterceptionAsStreamResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::TakeResponseBodyForInterceptionAsStreamResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::TakeResponseBodyForInterceptionAsStreamResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ReplayXHRParams> {
  static std::unique_ptr<network::ReplayXHRParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ReplayXHRParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ReplayXHRParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ReplayXHRResult> {
  static std::unique_ptr<network::ReplayXHRResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ReplayXHRResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ReplayXHRResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SearchInResponseBodyParams> {
  static std::unique_ptr<network::SearchInResponseBodyParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SearchInResponseBodyParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SearchInResponseBodyParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SearchInResponseBodyResult> {
  static std::unique_ptr<network::SearchInResponseBodyResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SearchInResponseBodyResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SearchInResponseBodyResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetBlockedURLsParams> {
  static std::unique_ptr<network::SetBlockedURLsParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetBlockedURLsParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetBlockedURLsParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetBlockedURLsResult> {
  static std::unique_ptr<network::SetBlockedURLsResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetBlockedURLsResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetBlockedURLsResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetBypassServiceWorkerParams> {
  static std::unique_ptr<network::SetBypassServiceWorkerParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetBypassServiceWorkerParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetBypassServiceWorkerParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetBypassServiceWorkerResult> {
  static std::unique_ptr<network::SetBypassServiceWorkerResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetBypassServiceWorkerResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetBypassServiceWorkerResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetCacheDisabledParams> {
  static std::unique_ptr<network::SetCacheDisabledParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetCacheDisabledParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetCacheDisabledParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetCacheDisabledResult> {
  static std::unique_ptr<network::SetCacheDisabledResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetCacheDisabledResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetCacheDisabledResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetCookieParams> {
  static std::unique_ptr<network::SetCookieParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetCookieParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetCookieParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetCookieResult> {
  static std::unique_ptr<network::SetCookieResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetCookieResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetCookieResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetCookiesParams> {
  static std::unique_ptr<network::SetCookiesParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetCookiesParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetCookiesParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetCookiesResult> {
  static std::unique_ptr<network::SetCookiesResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetCookiesResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetCookiesResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetExtraHTTPHeadersParams> {
  static std::unique_ptr<network::SetExtraHTTPHeadersParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetExtraHTTPHeadersParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetExtraHTTPHeadersParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetExtraHTTPHeadersResult> {
  static std::unique_ptr<network::SetExtraHTTPHeadersResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetExtraHTTPHeadersResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetExtraHTTPHeadersResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetAttachDebugStackParams> {
  static std::unique_ptr<network::SetAttachDebugStackParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetAttachDebugStackParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetAttachDebugStackParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetAttachDebugStackResult> {
  static std::unique_ptr<network::SetAttachDebugStackResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetAttachDebugStackResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetAttachDebugStackResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetRequestInterceptionParams> {
  static std::unique_ptr<network::SetRequestInterceptionParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetRequestInterceptionParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetRequestInterceptionParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetRequestInterceptionResult> {
  static std::unique_ptr<network::SetRequestInterceptionResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetRequestInterceptionResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetRequestInterceptionResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetUserAgentOverrideParams> {
  static std::unique_ptr<network::SetUserAgentOverrideParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetUserAgentOverrideParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetUserAgentOverrideParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SetUserAgentOverrideResult> {
  static std::unique_ptr<network::SetUserAgentOverrideResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SetUserAgentOverrideResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SetUserAgentOverrideResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::StreamResourceContentParams> {
  static std::unique_ptr<network::StreamResourceContentParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::StreamResourceContentParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::StreamResourceContentParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::StreamResourceContentResult> {
  static std::unique_ptr<network::StreamResourceContentResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::StreamResourceContentResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::StreamResourceContentResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetSecurityIsolationStatusParams> {
  static std::unique_ptr<network::GetSecurityIsolationStatusParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetSecurityIsolationStatusParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetSecurityIsolationStatusParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::GetSecurityIsolationStatusResult> {
  static std::unique_ptr<network::GetSecurityIsolationStatusResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::GetSecurityIsolationStatusResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::GetSecurityIsolationStatusResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::EnableReportingApiParams> {
  static std::unique_ptr<network::EnableReportingApiParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::EnableReportingApiParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::EnableReportingApiParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::EnableReportingApiResult> {
  static std::unique_ptr<network::EnableReportingApiResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::EnableReportingApiResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::EnableReportingApiResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::LoadNetworkResourceParams> {
  static std::unique_ptr<network::LoadNetworkResourceParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::LoadNetworkResourceParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::LoadNetworkResourceParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::LoadNetworkResourceResult> {
  static std::unique_ptr<network::LoadNetworkResourceResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::LoadNetworkResourceResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::LoadNetworkResourceResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::DataReceivedParams> {
  static std::unique_ptr<network::DataReceivedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::DataReceivedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::DataReceivedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::EventSourceMessageReceivedParams> {
  static std::unique_ptr<network::EventSourceMessageReceivedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::EventSourceMessageReceivedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::EventSourceMessageReceivedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::LoadingFailedParams> {
  static std::unique_ptr<network::LoadingFailedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::LoadingFailedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::LoadingFailedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::LoadingFinishedParams> {
  static std::unique_ptr<network::LoadingFinishedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::LoadingFinishedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::LoadingFinishedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::RequestInterceptedParams> {
  static std::unique_ptr<network::RequestInterceptedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::RequestInterceptedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::RequestInterceptedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::RequestServedFromCacheParams> {
  static std::unique_ptr<network::RequestServedFromCacheParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::RequestServedFromCacheParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::RequestServedFromCacheParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::RequestWillBeSentParams> {
  static std::unique_ptr<network::RequestWillBeSentParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::RequestWillBeSentParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::RequestWillBeSentParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ResourceChangedPriorityParams> {
  static std::unique_ptr<network::ResourceChangedPriorityParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ResourceChangedPriorityParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ResourceChangedPriorityParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SignedExchangeReceivedParams> {
  static std::unique_ptr<network::SignedExchangeReceivedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SignedExchangeReceivedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SignedExchangeReceivedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ResponseReceivedParams> {
  static std::unique_ptr<network::ResponseReceivedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ResponseReceivedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ResponseReceivedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketClosedParams> {
  static std::unique_ptr<network::WebSocketClosedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketClosedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketClosedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketCreatedParams> {
  static std::unique_ptr<network::WebSocketCreatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketCreatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketCreatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketFrameErrorParams> {
  static std::unique_ptr<network::WebSocketFrameErrorParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketFrameErrorParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketFrameErrorParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketFrameReceivedParams> {
  static std::unique_ptr<network::WebSocketFrameReceivedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketFrameReceivedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketFrameReceivedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketFrameSentParams> {
  static std::unique_ptr<network::WebSocketFrameSentParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketFrameSentParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketFrameSentParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketHandshakeResponseReceivedParams> {
  static std::unique_ptr<network::WebSocketHandshakeResponseReceivedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketHandshakeResponseReceivedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketHandshakeResponseReceivedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebSocketWillSendHandshakeRequestParams> {
  static std::unique_ptr<network::WebSocketWillSendHandshakeRequestParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebSocketWillSendHandshakeRequestParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebSocketWillSendHandshakeRequestParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebTransportCreatedParams> {
  static std::unique_ptr<network::WebTransportCreatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebTransportCreatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebTransportCreatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebTransportConnectionEstablishedParams> {
  static std::unique_ptr<network::WebTransportConnectionEstablishedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebTransportConnectionEstablishedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebTransportConnectionEstablishedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::WebTransportClosedParams> {
  static std::unique_ptr<network::WebTransportClosedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::WebTransportClosedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::WebTransportClosedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::RequestWillBeSentExtraInfoParams> {
  static std::unique_ptr<network::RequestWillBeSentExtraInfoParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::RequestWillBeSentExtraInfoParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::RequestWillBeSentExtraInfoParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ResponseReceivedExtraInfoParams> {
  static std::unique_ptr<network::ResponseReceivedExtraInfoParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ResponseReceivedExtraInfoParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ResponseReceivedExtraInfoParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<network::TrustTokenOperationDoneStatus> {
  static network::TrustTokenOperationDoneStatus Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return network::TrustTokenOperationDoneStatus::OK;
    }
    if (value.GetString() == "Ok")
      return network::TrustTokenOperationDoneStatus::OK;
    if (value.GetString() == "InvalidArgument")
      return network::TrustTokenOperationDoneStatus::INVALID_ARGUMENT;
    if (value.GetString() == "MissingIssuerKeys")
      return network::TrustTokenOperationDoneStatus::MISSING_ISSUER_KEYS;
    if (value.GetString() == "FailedPrecondition")
      return network::TrustTokenOperationDoneStatus::FAILED_PRECONDITION;
    if (value.GetString() == "ResourceExhausted")
      return network::TrustTokenOperationDoneStatus::RESOURCE_EXHAUSTED;
    if (value.GetString() == "AlreadyExists")
      return network::TrustTokenOperationDoneStatus::ALREADY_EXISTS;
    if (value.GetString() == "Unavailable")
      return network::TrustTokenOperationDoneStatus::UNAVAILABLE;
    if (value.GetString() == "Unauthorized")
      return network::TrustTokenOperationDoneStatus::UNAUTHORIZED;
    if (value.GetString() == "BadResponse")
      return network::TrustTokenOperationDoneStatus::BAD_RESPONSE;
    if (value.GetString() == "InternalError")
      return network::TrustTokenOperationDoneStatus::INTERNAL_ERROR;
    if (value.GetString() == "UnknownError")
      return network::TrustTokenOperationDoneStatus::UNKNOWN_ERROR;
    if (value.GetString() == "FulfilledLocally")
      return network::TrustTokenOperationDoneStatus::FULFILLED_LOCALLY;
    errors->AddError("invalid enum value");
    return network::TrustTokenOperationDoneStatus::OK;
  }
};

template <>
inline base::Value ToValue(const network::TrustTokenOperationDoneStatus& value) {
  switch (value) {
    case network::TrustTokenOperationDoneStatus::OK:
      return base::Value("Ok");
    case network::TrustTokenOperationDoneStatus::INVALID_ARGUMENT:
      return base::Value("InvalidArgument");
    case network::TrustTokenOperationDoneStatus::MISSING_ISSUER_KEYS:
      return base::Value("MissingIssuerKeys");
    case network::TrustTokenOperationDoneStatus::FAILED_PRECONDITION:
      return base::Value("FailedPrecondition");
    case network::TrustTokenOperationDoneStatus::RESOURCE_EXHAUSTED:
      return base::Value("ResourceExhausted");
    case network::TrustTokenOperationDoneStatus::ALREADY_EXISTS:
      return base::Value("AlreadyExists");
    case network::TrustTokenOperationDoneStatus::UNAVAILABLE:
      return base::Value("Unavailable");
    case network::TrustTokenOperationDoneStatus::UNAUTHORIZED:
      return base::Value("Unauthorized");
    case network::TrustTokenOperationDoneStatus::BAD_RESPONSE:
      return base::Value("BadResponse");
    case network::TrustTokenOperationDoneStatus::INTERNAL_ERROR:
      return base::Value("InternalError");
    case network::TrustTokenOperationDoneStatus::UNKNOWN_ERROR:
      return base::Value("UnknownError");
    case network::TrustTokenOperationDoneStatus::FULFILLED_LOCALLY:
      return base::Value("FulfilledLocally");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<network::TrustTokenOperationDoneParams> {
  static std::unique_ptr<network::TrustTokenOperationDoneParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::TrustTokenOperationDoneParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::TrustTokenOperationDoneParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SubresourceWebBundleMetadataReceivedParams> {
  static std::unique_ptr<network::SubresourceWebBundleMetadataReceivedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SubresourceWebBundleMetadataReceivedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SubresourceWebBundleMetadataReceivedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SubresourceWebBundleMetadataErrorParams> {
  static std::unique_ptr<network::SubresourceWebBundleMetadataErrorParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SubresourceWebBundleMetadataErrorParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SubresourceWebBundleMetadataErrorParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SubresourceWebBundleInnerResponseParsedParams> {
  static std::unique_ptr<network::SubresourceWebBundleInnerResponseParsedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SubresourceWebBundleInnerResponseParsedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SubresourceWebBundleInnerResponseParsedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::SubresourceWebBundleInnerResponseErrorParams> {
  static std::unique_ptr<network::SubresourceWebBundleInnerResponseErrorParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::SubresourceWebBundleInnerResponseErrorParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::SubresourceWebBundleInnerResponseErrorParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ReportingApiReportAddedParams> {
  static std::unique_ptr<network::ReportingApiReportAddedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ReportingApiReportAddedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ReportingApiReportAddedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ReportingApiReportUpdatedParams> {
  static std::unique_ptr<network::ReportingApiReportUpdatedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ReportingApiReportUpdatedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ReportingApiReportUpdatedParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<network::ReportingApiEndpointsChangedForOriginParams> {
  static std::unique_ptr<network::ReportingApiEndpointsChangedForOriginParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return network::ReportingApiEndpointsChangedForOriginParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const network::ReportingApiEndpointsChangedForOriginParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_NETWORK_H_
