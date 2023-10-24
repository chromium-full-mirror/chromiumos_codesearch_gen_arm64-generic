// Copyright 2023 The Chromium Authors
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

enum  URLType {
  URL_TYPE_NONE = 0,
  URL_TYPE_EVENT_URL,
  URL_TYPE_LANDING_PAGE,
  URL_TYPE_LANDING_REFERRER,
  URL_TYPE_CLIENT_REDIRECT,
  URL_TYPE_RECENT_NAVIGATION,
  URL_TYPE_REFERRER,
  URL_TYPE_LAST = URL_TYPE_REFERRER,
};


const char* ToString(URLType as_enum);
URLType ParseURLType(base::StringPiece as_string);
std::u16string GetURLTypeParseError(base::StringPiece as_string);

enum  NavigationInitiation {
  NAVIGATION_INITIATION_NONE = 0,
  NAVIGATION_INITIATION_BROWSER_INITIATED,
  NAVIGATION_INITIATION_RENDERER_INITIATED_WITHOUT_USER_GESTURE,
  NAVIGATION_INITIATION_RENDERER_INITIATED_WITH_USER_GESTURE,
  NAVIGATION_INITIATION_COPY_PASTE_USER_INITIATED,
  NAVIGATION_INITIATION_NOTIFICATION_INITIATED,
  NAVIGATION_INITIATION_LAST = NAVIGATION_INITIATION_NOTIFICATION_INITIATED,
};


const char* ToString(NavigationInitiation as_enum);
NavigationInitiation ParseNavigationInitiation(base::StringPiece as_string);
std::u16string GetNavigationInitiationParseError(base::StringPiece as_string);

struct PolicySpecifiedPasswordReuse {
  PolicySpecifiedPasswordReuse();
  ~PolicySpecifiedPasswordReuse();
  PolicySpecifiedPasswordReuse(const PolicySpecifiedPasswordReuse&) = delete;
  PolicySpecifiedPasswordReuse& operator=(const PolicySpecifiedPasswordReuse&) = delete;
  PolicySpecifiedPasswordReuse(PolicySpecifiedPasswordReuse&& rhs);
  PolicySpecifiedPasswordReuse& operator=(PolicySpecifiedPasswordReuse&& rhs);

  // Populates a PolicySpecifiedPasswordReuse object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PolicySpecifiedPasswordReuse& out);

  // Populates a PolicySpecifiedPasswordReuse object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PolicySpecifiedPasswordReuse& out);

  // Creates a deep copy of PolicySpecifiedPasswordReuse.
  PolicySpecifiedPasswordReuse Clone() const;

  // Creates a PolicySpecifiedPasswordReuse object from a base::Value, or NULL
  // on failure.
  static std::unique_ptr<PolicySpecifiedPasswordReuse> FromValueDeprecated(const base::Value& value);

  // Creates a PolicySpecifiedPasswordReuse object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<PolicySpecifiedPasswordReuse> FromValue(const base::Value::Dict& value);

  // Creates a PolicySpecifiedPasswordReuse object from a base::Value, or
  // nullopt on failure.
  static absl::optional<PolicySpecifiedPasswordReuse> FromValue(const base::Value& value);

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
  DangerousDownloadInfo(DangerousDownloadInfo&& rhs);
  DangerousDownloadInfo& operator=(DangerousDownloadInfo&& rhs);

  // Populates a DangerousDownloadInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DangerousDownloadInfo& out);

  // Populates a DangerousDownloadInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DangerousDownloadInfo& out);

  // Creates a deep copy of DangerousDownloadInfo.
  DangerousDownloadInfo Clone() const;

  // Creates a DangerousDownloadInfo object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<DangerousDownloadInfo> FromValueDeprecated(const base::Value& value);

  // Creates a DangerousDownloadInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<DangerousDownloadInfo> FromValue(const base::Value::Dict& value);

  // Creates a DangerousDownloadInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<DangerousDownloadInfo> FromValue(const base::Value& value);

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
  InterstitialInfo(InterstitialInfo&& rhs);
  InterstitialInfo& operator=(InterstitialInfo&& rhs);

  // Populates a InterstitialInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InterstitialInfo& out);

  // Populates a InterstitialInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InterstitialInfo& out);

  // Creates a deep copy of InterstitialInfo.
  InterstitialInfo Clone() const;

  // Creates a InterstitialInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<InterstitialInfo> FromValueDeprecated(const base::Value& value);

  // Creates a InterstitialInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<InterstitialInfo> FromValue(const base::Value::Dict& value);

  // Creates a InterstitialInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<InterstitialInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInterstitialInfo object.
  base::Value::Dict ToValue() const;

  // Top level URL that triggers this interstitial.
  std::string url;

  // Human-readable string indicate why this interstitial is shown.
  std::string reason;

  // Net error code.
  absl::optional<std::string> net_error_code;

  // User name of the profile. Empty string if user name not available.
  std::string user_name;

};

struct ServerRedirect {
  ServerRedirect();
  ~ServerRedirect();
  ServerRedirect(const ServerRedirect&) = delete;
  ServerRedirect& operator=(const ServerRedirect&) = delete;
  ServerRedirect(ServerRedirect&& rhs);
  ServerRedirect& operator=(ServerRedirect&& rhs);

  // Populates a ServerRedirect object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ServerRedirect& out);

  // Populates a ServerRedirect object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ServerRedirect& out);

  // Creates a deep copy of ServerRedirect.
  ServerRedirect Clone() const;

  // Creates a ServerRedirect object from a base::Value, or NULL on failure.
  static std::unique_ptr<ServerRedirect> FromValueDeprecated(const base::Value& value);

  // Creates a ServerRedirect object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ServerRedirect> FromValue(const base::Value::Dict& value);

  // Creates a ServerRedirect object from a base::Value, or nullopt on failure.
  static absl::optional<ServerRedirect> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisServerRedirect object.
  base::Value::Dict ToValue() const;

  // Server redirect URL.
  absl::optional<std::string> url;

};

struct ReferrerChainEntry {
  ReferrerChainEntry();
  ~ReferrerChainEntry();
  ReferrerChainEntry(const ReferrerChainEntry&) = delete;
  ReferrerChainEntry& operator=(const ReferrerChainEntry&) = delete;
  ReferrerChainEntry(ReferrerChainEntry&& rhs);
  ReferrerChainEntry& operator=(ReferrerChainEntry&& rhs);

  // Populates a ReferrerChainEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReferrerChainEntry& out);

  // Populates a ReferrerChainEntry object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReferrerChainEntry& out);

  // Creates a deep copy of ReferrerChainEntry.
  ReferrerChainEntry Clone() const;

  // Creates a ReferrerChainEntry object from a base::Value, or NULL on failure.
  static std::unique_ptr<ReferrerChainEntry> FromValueDeprecated(const base::Value& value);

  // Creates a ReferrerChainEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ReferrerChainEntry> FromValue(const base::Value::Dict& value);

  // Creates a ReferrerChainEntry object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ReferrerChainEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReferrerChainEntry object.
  base::Value::Dict ToValue() const;

  // URL of this entry.
  std::string url;

  // Only set if different from |url|.
  absl::optional<std::string> main_frame_url;

  // Types of URLs, such as event url, landing page, etc.
  URLType url_type;

  // IP addresses corresponding to this host.
  absl::optional<std::vector<std::string>> ip_addresses;

  // Referrer URL of this entry.
  absl::optional<std::string> referrer_url;

  // Main frame URL of referrer. Only set if different from |referrer_url|.
  absl::optional<std::string> referrer_main_frame_url;

  // If this URL loads in a different tab/frame from previous one.
  absl::optional<bool> is_retargeting;

  absl::optional<double> navigation_time_ms;

  // Set only if server redirects happened in navigation.
  absl::optional<std::vector<ServerRedirect>> server_redirect_chain;

  // How this navigation is initiated.
  NavigationInitiation navigation_initiation;

  // Whether this entry may have been launched by an external application.
  absl::optional<bool> maybe_launched_by_external_app;

  // Whether subframe URLs are removed due to user consent restriction.
  absl::optional<bool> is_subframe_url_removed;

  // Whether subframe referrer URLs are removed due to user consent restriction.
  absl::optional<bool> is_subframe_referrer_url_removed;

  // Whether any of the URLs are removed because the URL matches the
  // SafeBrowsingAllowlistDomains enterprise policy in Chrome.
  bool is_url_removed_by_policy;

};


//
// Functions
//

namespace GetReferrerChain {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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
