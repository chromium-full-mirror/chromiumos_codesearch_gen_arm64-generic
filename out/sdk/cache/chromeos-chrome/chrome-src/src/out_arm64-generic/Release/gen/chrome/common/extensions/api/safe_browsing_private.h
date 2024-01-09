// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/safe_browsing_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SAFE_BROWSING_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_SAFE_BROWSING_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace safe_browsing_private {

//
// Types
//

enum class URLType {
  kNone = 0,
  kEventUrl,
  kLandingPage,
  kLandingReferrer,
  kClientRedirect,
  kRecentNavigation,
  kReferrer,
  kMaxValue = kReferrer,
};


const char* ToString(URLType as_enum);
URLType ParseURLType(base::StringPiece as_string);
std::u16string GetURLTypeParseError(base::StringPiece as_string);

enum class NavigationInitiation {
  kNone = 0,
  kBrowserInitiated,
  kRendererInitiatedWithoutUserGesture,
  kRendererInitiatedWithUserGesture,
  kCopyPasteUserInitiated,
  kNotificationInitiated,
  kMaxValue = kNotificationInitiated,
};


const char* ToString(NavigationInitiation as_enum);
NavigationInitiation ParseNavigationInitiation(base::StringPiece as_string);
std::u16string GetNavigationInitiationParseError(base::StringPiece as_string);

struct PolicySpecifiedPasswordReuse {
  PolicySpecifiedPasswordReuse();
  ~PolicySpecifiedPasswordReuse();
  PolicySpecifiedPasswordReuse(const PolicySpecifiedPasswordReuse&) = delete;
  PolicySpecifiedPasswordReuse& operator=(const PolicySpecifiedPasswordReuse&) = delete;
  PolicySpecifiedPasswordReuse(PolicySpecifiedPasswordReuse&& rhs) noexcept;
  PolicySpecifiedPasswordReuse& operator=(PolicySpecifiedPasswordReuse&& rhs) noexcept;

  // Populates a PolicySpecifiedPasswordReuse object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolicySpecifiedPasswordReuse& out);

  // Populates a PolicySpecifiedPasswordReuse object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PolicySpecifiedPasswordReuse& out);

  // Creates a deep copy of PolicySpecifiedPasswordReuse.
  PolicySpecifiedPasswordReuse Clone() const;

  // Creates a PolicySpecifiedPasswordReuse object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<PolicySpecifiedPasswordReuse> FromValue(const base::Value::Dict& value);

  // Creates a PolicySpecifiedPasswordReuse object from a base::Value, or
  // nullopt on failure.
  static std::optional<PolicySpecifiedPasswordReuse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPolicySpecifiedPasswordReuse object.
  base::Value::Dict ToValue() const;

  // URL where this reuse happened.
  std::string url;

  // The user name of the policy specified password.
  std::string user_name;

  // If this a phishing url.
  bool is_phishing_url;

};

struct DangerousDownloadInfo {
  DangerousDownloadInfo();
  ~DangerousDownloadInfo();
  DangerousDownloadInfo(const DangerousDownloadInfo&) = delete;
  DangerousDownloadInfo& operator=(const DangerousDownloadInfo&) = delete;
  DangerousDownloadInfo(DangerousDownloadInfo&& rhs) noexcept;
  DangerousDownloadInfo& operator=(DangerousDownloadInfo&& rhs) noexcept;

  // Populates a DangerousDownloadInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DangerousDownloadInfo& out);

  // Populates a DangerousDownloadInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DangerousDownloadInfo& out);

  // Creates a deep copy of DangerousDownloadInfo.
  DangerousDownloadInfo Clone() const;

  // Creates a DangerousDownloadInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<DangerousDownloadInfo> FromValue(const base::Value::Dict& value);

  // Creates a DangerousDownloadInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<DangerousDownloadInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDangerousDownloadInfo object.
  base::Value::Dict ToValue() const;

  // URL of the download.
  std::string url;

  // File name and path of the download on user's machine.
  std::string file_name;

  // SHA256 digest of this download.
  std::string download_digest_sha256;

  // User name of the profile. Empty string if user name not available.
  std::string user_name;

};

struct InterstitialInfo {
  InterstitialInfo();
  ~InterstitialInfo();
  InterstitialInfo(const InterstitialInfo&) = delete;
  InterstitialInfo& operator=(const InterstitialInfo&) = delete;
  InterstitialInfo(InterstitialInfo&& rhs) noexcept;
  InterstitialInfo& operator=(InterstitialInfo&& rhs) noexcept;

  // Populates a InterstitialInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InterstitialInfo& out);

  // Populates a InterstitialInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InterstitialInfo& out);

  // Creates a deep copy of InterstitialInfo.
  InterstitialInfo Clone() const;

  // Creates a InterstitialInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<InterstitialInfo> FromValue(const base::Value::Dict& value);

  // Creates a InterstitialInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<InterstitialInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInterstitialInfo object.
  base::Value::Dict ToValue() const;

  // Top level URL that triggers this interstitial.
  std::string url;

  // Human-readable string indicate why this interstitial is shown.
  std::string reason;

  // Net error code.
  std::optional<std::string> net_error_code;

  // User name of the profile. Empty string if user name not available.
  std::string user_name;

};

struct ServerRedirect {
  ServerRedirect();
  ~ServerRedirect();
  ServerRedirect(const ServerRedirect&) = delete;
  ServerRedirect& operator=(const ServerRedirect&) = delete;
  ServerRedirect(ServerRedirect&& rhs) noexcept;
  ServerRedirect& operator=(ServerRedirect&& rhs) noexcept;

  // Populates a ServerRedirect object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ServerRedirect& out);

  // Populates a ServerRedirect object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ServerRedirect& out);

  // Creates a deep copy of ServerRedirect.
  ServerRedirect Clone() const;

  // Creates a ServerRedirect object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ServerRedirect> FromValue(const base::Value::Dict& value);

  // Creates a ServerRedirect object from a base::Value, or nullopt on failure.
  static std::optional<ServerRedirect> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisServerRedirect object.
  base::Value::Dict ToValue() const;

  // Server redirect URL.
  std::optional<std::string> url;

};

struct ReferrerChainEntry {
  ReferrerChainEntry();
  ~ReferrerChainEntry();
  ReferrerChainEntry(const ReferrerChainEntry&) = delete;
  ReferrerChainEntry& operator=(const ReferrerChainEntry&) = delete;
  ReferrerChainEntry(ReferrerChainEntry&& rhs) noexcept;
  ReferrerChainEntry& operator=(ReferrerChainEntry&& rhs) noexcept;

  // Populates a ReferrerChainEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReferrerChainEntry& out);

  // Populates a ReferrerChainEntry object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReferrerChainEntry& out);

  // Creates a deep copy of ReferrerChainEntry.
  ReferrerChainEntry Clone() const;

  // Creates a ReferrerChainEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ReferrerChainEntry> FromValue(const base::Value::Dict& value);

  // Creates a ReferrerChainEntry object from a base::Value, or nullopt on
  // failure.
  static std::optional<ReferrerChainEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReferrerChainEntry object.
  base::Value::Dict ToValue() const;

  // URL of this entry.
  std::string url;

  // Only set if different from |url|.
  std::optional<std::string> main_frame_url;

  // Types of URLs, such as event url, landing page, etc.
  URLType url_type;

  // IP addresses corresponding to this host.
  std::optional<std::vector<std::string>> ip_addresses;

  // Referrer URL of this entry.
  std::optional<std::string> referrer_url;

  // Main frame URL of referrer. Only set if different from |referrer_url|.
  std::optional<std::string> referrer_main_frame_url;

  // If this URL loads in a different tab/frame from previous one.
  std::optional<bool> is_retargeting;

  std::optional<double> navigation_time_ms;

  // Set only if server redirects happened in navigation.
  std::optional<std::vector<ServerRedirect>> server_redirect_chain;

  // How this navigation is initiated.
  NavigationInitiation navigation_initiation;

  // Whether this entry may have been launched by an external application.
  std::optional<bool> maybe_launched_by_external_app;

  // Whether subframe URLs are removed due to user consent restriction.
  std::optional<bool> is_subframe_url_removed;

  // Whether subframe referrer URLs are removed due to user consent restriction.
  std::optional<bool> is_subframe_referrer_url_removed;

  // Whether any of the URLs are removed because the URL matches the
  // SafeBrowsingAllowlistDomains enterprise policy in Chrome.
  bool is_url_removed_by_policy;

};


//
// Functions
//

namespace GetReferrerChain {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Id of the tab from which to retrieve the referrer.
  int tab_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<ReferrerChainEntry>& entries);
}  // namespace Results

}  // namespace GetReferrerChain

//
// Events
//

namespace OnPolicySpecifiedPasswordReuseDetected {

extern const char kEventName[];  // "safeBrowsingPrivate.onPolicySpecifiedPasswordReuseDetected"

// Details about where the password reuse occurred.
base::Value::List Create(const PolicySpecifiedPasswordReuse& reuse_details);
}  // namespace OnPolicySpecifiedPasswordReuseDetected

namespace OnPolicySpecifiedPasswordChanged {

extern const char kEventName[];  // "safeBrowsingPrivate.onPolicySpecifiedPasswordChanged"

// The user name of the policy specified password.
base::Value::List Create(const std::string& user_name);
}  // namespace OnPolicySpecifiedPasswordChanged

namespace OnDangerousDownloadOpened {

extern const char kEventName[];  // "safeBrowsingPrivate.onDangerousDownloadOpened"

base::Value::List Create(const DangerousDownloadInfo& dict);
}  // namespace OnDangerousDownloadOpened

namespace OnSecurityInterstitialShown {

extern const char kEventName[];  // "safeBrowsingPrivate.onSecurityInterstitialShown"

base::Value::List Create(const InterstitialInfo& dict);
}  // namespace OnSecurityInterstitialShown

namespace OnSecurityInterstitialProceeded {

extern const char kEventName[];  // "safeBrowsingPrivate.onSecurityInterstitialProceeded"

base::Value::List Create(const InterstitialInfo& dict);
}  // namespace OnSecurityInterstitialProceeded

}  // namespace safe_browsing_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SAFE_BROWSING_PRIVATE_H__
