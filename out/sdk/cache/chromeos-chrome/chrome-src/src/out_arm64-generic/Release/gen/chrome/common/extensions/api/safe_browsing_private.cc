// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/safe_browsing_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/safe_browsing_private.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace safe_browsing_private {
//
// Types
//

const char* ToString(URLType enum_param) {
  switch (enum_param) {
    case URLType::kEventUrl:
      return "EVENT_URL";
    case URLType::kLandingPage:
      return "LANDING_PAGE";
    case URLType::kLandingReferrer:
      return "LANDING_REFERRER";
    case URLType::kClientRedirect:
      return "CLIENT_REDIRECT";
    case URLType::kRecentNavigation:
      return "RECENT_NAVIGATION";
    case URLType::kReferrer:
      return "REFERRER";
    case URLType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

URLType ParseURLType(base::StringPiece enum_string) {
  if (enum_string == "EVENT_URL")
    return URLType::kEventUrl;
  if (enum_string == "LANDING_PAGE")
    return URLType::kLandingPage;
  if (enum_string == "LANDING_REFERRER")
    return URLType::kLandingReferrer;
  if (enum_string == "CLIENT_REDIRECT")
    return URLType::kClientRedirect;
  if (enum_string == "RECENT_NAVIGATION")
    return URLType::kRecentNavigation;
  if (enum_string == "REFERRER")
    return URLType::kReferrer;
  return URLType::kNone;
}

std::u16string GetURLTypeParseError(base::StringPiece enum_string) {
  return u"expected \"EVENT_URL\" or \"LANDING_PAGE\" or \"LANDING_REFERRER\" or \"CLIENT_REDIRECT\" or \"RECENT_NAVIGATION\" or \"REFERRER\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(NavigationInitiation enum_param) {
  switch (enum_param) {
    case NavigationInitiation::kBrowserInitiated:
      return "BROWSER_INITIATED";
    case NavigationInitiation::kRendererInitiatedWithoutUserGesture:
      return "RENDERER_INITIATED_WITHOUT_USER_GESTURE";
    case NavigationInitiation::kRendererInitiatedWithUserGesture:
      return "RENDERER_INITIATED_WITH_USER_GESTURE";
    case NavigationInitiation::kCopyPasteUserInitiated:
      return "COPY_PASTE_USER_INITIATED";
    case NavigationInitiation::kNotificationInitiated:
      return "NOTIFICATION_INITIATED";
    case NavigationInitiation::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

NavigationInitiation ParseNavigationInitiation(base::StringPiece enum_string) {
  if (enum_string == "BROWSER_INITIATED")
    return NavigationInitiation::kBrowserInitiated;
  if (enum_string == "RENDERER_INITIATED_WITHOUT_USER_GESTURE")
    return NavigationInitiation::kRendererInitiatedWithoutUserGesture;
  if (enum_string == "RENDERER_INITIATED_WITH_USER_GESTURE")
    return NavigationInitiation::kRendererInitiatedWithUserGesture;
  if (enum_string == "COPY_PASTE_USER_INITIATED")
    return NavigationInitiation::kCopyPasteUserInitiated;
  if (enum_string == "NOTIFICATION_INITIATED")
    return NavigationInitiation::kNotificationInitiated;
  return NavigationInitiation::kNone;
}

std::u16string GetNavigationInitiationParseError(base::StringPiece enum_string) {
  return u"expected \"BROWSER_INITIATED\" or \"RENDERER_INITIATED_WITHOUT_USER_GESTURE\" or \"RENDERER_INITIATED_WITH_USER_GESTURE\" or \"COPY_PASTE_USER_INITIATED\" or \"NOTIFICATION_INITIATED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PolicySpecifiedPasswordReuse::PolicySpecifiedPasswordReuse()
: is_phishing_url(false) {}

PolicySpecifiedPasswordReuse::~PolicySpecifiedPasswordReuse() = default;
PolicySpecifiedPasswordReuse::PolicySpecifiedPasswordReuse(PolicySpecifiedPasswordReuse&& rhs) noexcept = default;
PolicySpecifiedPasswordReuse& PolicySpecifiedPasswordReuse::operator=(PolicySpecifiedPasswordReuse&& rhs) noexcept = default;
PolicySpecifiedPasswordReuse PolicySpecifiedPasswordReuse::Clone() const {
  PolicySpecifiedPasswordReuse out;
  out.url = url;
  out.user_name = user_name;
  out.is_phishing_url = is_phishing_url;
  return out;
}

// static
bool PolicySpecifiedPasswordReuse::Populate(
    const base::Value::Dict& dict, PolicySpecifiedPasswordReuse& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* user_name_value = dict.Find("userName");
  if (!user_name_value) {
    return false;
  }
  {
    auto* temp = (*user_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.user_name = *temp;
  }

  const base::Value* is_phishing_url_value = dict.Find("isPhishingUrl");
  if (!is_phishing_url_value) {
    return false;
  }
  {
    auto temp = (*is_phishing_url_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_phishing_url = *temp;
  }

  return true;
}

// static
bool PolicySpecifiedPasswordReuse::Populate(
    const base::Value& value, PolicySpecifiedPasswordReuse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PolicySpecifiedPasswordReuse> PolicySpecifiedPasswordReuse::FromValue(const base::Value::Dict& value) {
  PolicySpecifiedPasswordReuse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PolicySpecifiedPasswordReuse> PolicySpecifiedPasswordReuse::FromValue(const base::Value& value) {
  PolicySpecifiedPasswordReuse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PolicySpecifiedPasswordReuse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("userName", this->user_name);

  to_value_result.Set("isPhishingUrl", this->is_phishing_url);


  return to_value_result;
}


DangerousDownloadInfo::DangerousDownloadInfo()
 {}

DangerousDownloadInfo::~DangerousDownloadInfo() = default;
DangerousDownloadInfo::DangerousDownloadInfo(DangerousDownloadInfo&& rhs) noexcept = default;
DangerousDownloadInfo& DangerousDownloadInfo::operator=(DangerousDownloadInfo&& rhs) noexcept = default;
DangerousDownloadInfo DangerousDownloadInfo::Clone() const {
  DangerousDownloadInfo out;
  out.url = url;
  out.file_name = file_name;
  out.download_digest_sha256 = download_digest_sha256;
  out.user_name = user_name;
  return out;
}

// static
bool DangerousDownloadInfo::Populate(
    const base::Value::Dict& dict, DangerousDownloadInfo& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* file_name_value = dict.Find("fileName");
  if (!file_name_value) {
    return false;
  }
  {
    auto* temp = (*file_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.file_name = *temp;
  }

  const base::Value* download_digest_sha256_value = dict.Find("downloadDigestSha256");
  if (!download_digest_sha256_value) {
    return false;
  }
  {
    auto* temp = (*download_digest_sha256_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.download_digest_sha256 = *temp;
  }

  const base::Value* user_name_value = dict.Find("userName");
  if (!user_name_value) {
    return false;
  }
  {
    auto* temp = (*user_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.user_name = *temp;
  }

  return true;
}

// static
bool DangerousDownloadInfo::Populate(
    const base::Value& value, DangerousDownloadInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DangerousDownloadInfo> DangerousDownloadInfo::FromValue(const base::Value::Dict& value) {
  DangerousDownloadInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DangerousDownloadInfo> DangerousDownloadInfo::FromValue(const base::Value& value) {
  DangerousDownloadInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DangerousDownloadInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("fileName", this->file_name);

  to_value_result.Set("downloadDigestSha256", this->download_digest_sha256);

  to_value_result.Set("userName", this->user_name);


  return to_value_result;
}


InterstitialInfo::InterstitialInfo()
 {}

InterstitialInfo::~InterstitialInfo() = default;
InterstitialInfo::InterstitialInfo(InterstitialInfo&& rhs) noexcept = default;
InterstitialInfo& InterstitialInfo::operator=(InterstitialInfo&& rhs) noexcept = default;
InterstitialInfo InterstitialInfo::Clone() const {
  InterstitialInfo out;
  out.url = url;
  out.reason = reason;
  out.net_error_code = net_error_code;
  out.user_name = user_name;
  return out;
}

// static
bool InterstitialInfo::Populate(
    const base::Value::Dict& dict, InterstitialInfo& out) {
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* reason_value = dict.Find("reason");
  if (!reason_value) {
    return false;
  }
  {
    auto* temp = (*reason_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.reason = *temp;
  }

  const base::Value* net_error_code_value = dict.Find("netErrorCode");
  if (net_error_code_value) {
    {
      auto* temp = (*net_error_code_value).GetIfString();
      if (!temp) {
        out.net_error_code = std::nullopt;
        return false;
      }
      out.net_error_code = *temp;
    }
  }

  const base::Value* user_name_value = dict.Find("userName");
  if (!user_name_value) {
    return false;
  }
  {
    auto* temp = (*user_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.user_name = *temp;
  }

  return true;
}

// static
bool InterstitialInfo::Populate(
    const base::Value& value, InterstitialInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InterstitialInfo> InterstitialInfo::FromValue(const base::Value::Dict& value) {
  InterstitialInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InterstitialInfo> InterstitialInfo::FromValue(const base::Value& value) {
  InterstitialInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict InterstitialInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("reason", this->reason);

  if (this->net_error_code) {
    to_value_result.Set("netErrorCode", *this->net_error_code);

  }
  to_value_result.Set("userName", this->user_name);


  return to_value_result;
}


ServerRedirect::ServerRedirect()
 {}

ServerRedirect::~ServerRedirect() = default;
ServerRedirect::ServerRedirect(ServerRedirect&& rhs) noexcept = default;
ServerRedirect& ServerRedirect::operator=(ServerRedirect&& rhs) noexcept = default;
ServerRedirect ServerRedirect::Clone() const {
  ServerRedirect out;
  out.url = url;
  return out;
}

// static
bool ServerRedirect::Populate(
    const base::Value::Dict& dict, ServerRedirect& out) {
  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  return true;
}

// static
bool ServerRedirect::Populate(
    const base::Value& value, ServerRedirect& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ServerRedirect> ServerRedirect::FromValue(const base::Value::Dict& value) {
  ServerRedirect out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ServerRedirect> ServerRedirect::FromValue(const base::Value& value) {
  ServerRedirect out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ServerRedirect::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->url) {
    to_value_result.Set("url", *this->url);

  }

  return to_value_result;
}


ReferrerChainEntry::ReferrerChainEntry()
: url_type(),
navigation_initiation(),
is_url_removed_by_policy(false) {}

ReferrerChainEntry::~ReferrerChainEntry() = default;
ReferrerChainEntry::ReferrerChainEntry(ReferrerChainEntry&& rhs) noexcept = default;
ReferrerChainEntry& ReferrerChainEntry::operator=(ReferrerChainEntry&& rhs) noexcept = default;
ReferrerChainEntry ReferrerChainEntry::Clone() const {
  ReferrerChainEntry out;
  out.url = url;
  out.main_frame_url = main_frame_url;
  out.url_type = url_type;
  out.ip_addresses = ip_addresses;
  out.referrer_url = referrer_url;
  out.referrer_main_frame_url = referrer_main_frame_url;
  out.is_retargeting = is_retargeting;
  out.navigation_time_ms = navigation_time_ms;
  if (server_redirect_chain) {
    out.server_redirect_chain.emplace();
    out.server_redirect_chain->reserve(server_redirect_chain->size());
    for (const auto& element : *server_redirect_chain) {
      json_schema_compiler::util::AppendToContainer(*out.server_redirect_chain, element.Clone());
    }
  }
  out.navigation_initiation = navigation_initiation;
  out.maybe_launched_by_external_app = maybe_launched_by_external_app;
  out.is_subframe_url_removed = is_subframe_url_removed;
  out.is_subframe_referrer_url_removed = is_subframe_referrer_url_removed;
  out.is_url_removed_by_policy = is_url_removed_by_policy;
  return out;
}

// static
bool ReferrerChainEntry::Populate(
    const base::Value::Dict& dict, ReferrerChainEntry& out) {
  out.navigation_initiation = NavigationInitiation();
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* main_frame_url_value = dict.Find("mainFrameUrl");
  if (main_frame_url_value) {
    {
      auto* temp = (*main_frame_url_value).GetIfString();
      if (!temp) {
        out.main_frame_url = std::nullopt;
        return false;
      }
      out.main_frame_url = *temp;
    }
  }

  const base::Value* url_type_value = dict.Find("urlType");
  if (!url_type_value) {
    return false;
  }
  {
    const std::string* url_type_as_string = (*url_type_value).GetIfString();
    if (!url_type_as_string) {
      return false;
    }
    out.url_type = ParseURLType(*url_type_as_string);
    if (out.url_type == URLType()) {
      return false;
    }
  }

  const base::Value* ip_addresses_value = dict.Find("ipAddresses");
  if (ip_addresses_value) {
    {
      if (!(*ip_addresses_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*ip_addresses_value).GetList(), out.ip_addresses)) {
          return false;
        }
      }
    }
  }

  const base::Value* referrer_url_value = dict.Find("referrerUrl");
  if (referrer_url_value) {
    {
      auto* temp = (*referrer_url_value).GetIfString();
      if (!temp) {
        out.referrer_url = std::nullopt;
        return false;
      }
      out.referrer_url = *temp;
    }
  }

  const base::Value* referrer_main_frame_url_value = dict.Find("referrerMainFrameUrl");
  if (referrer_main_frame_url_value) {
    {
      auto* temp = (*referrer_main_frame_url_value).GetIfString();
      if (!temp) {
        out.referrer_main_frame_url = std::nullopt;
        return false;
      }
      out.referrer_main_frame_url = *temp;
    }
  }

  const base::Value* is_retargeting_value = dict.Find("isRetargeting");
  if (is_retargeting_value) {
    {
      auto temp = (*is_retargeting_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_retargeting = std::nullopt;
        return false;
      }
      out.is_retargeting = *temp;
    }
  }

  const base::Value* navigation_time_ms_value = dict.Find("navigationTimeMs");
  if (navigation_time_ms_value) {
    {
      auto temp = (*navigation_time_ms_value).GetIfDouble();
      if (!temp.has_value()) {
        out.navigation_time_ms = std::nullopt;
        return false;
      }
      out.navigation_time_ms = *temp;
    }
  }

  const base::Value* server_redirect_chain_value = dict.Find("serverRedirectChain");
  if (server_redirect_chain_value) {
    {
      if (!(*server_redirect_chain_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*server_redirect_chain_value).GetList(), out.server_redirect_chain)) {
          return false;
        }
      }
    }
  }

  const base::Value* navigation_initiation_value = dict.Find("navigationInitiation");
  if (navigation_initiation_value) {
    {
      const std::string* navigation_initiation_as_string = (*navigation_initiation_value).GetIfString();
      if (!navigation_initiation_as_string) {
        return false;
      }
      out.navigation_initiation = ParseNavigationInitiation(*navigation_initiation_as_string);
      if (out.navigation_initiation == NavigationInitiation()) {
        return false;
      }
    }
    } else {
    out.navigation_initiation = NavigationInitiation();
  }

  const base::Value* maybe_launched_by_external_app_value = dict.Find("maybeLaunchedByExternalApp");
  if (maybe_launched_by_external_app_value) {
    {
      auto temp = (*maybe_launched_by_external_app_value).GetIfBool();
      if (!temp.has_value()) {
        out.maybe_launched_by_external_app = std::nullopt;
        return false;
      }
      out.maybe_launched_by_external_app = *temp;
    }
  }

  const base::Value* is_subframe_url_removed_value = dict.Find("isSubframeUrlRemoved");
  if (is_subframe_url_removed_value) {
    {
      auto temp = (*is_subframe_url_removed_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_subframe_url_removed = std::nullopt;
        return false;
      }
      out.is_subframe_url_removed = *temp;
    }
  }

  const base::Value* is_subframe_referrer_url_removed_value = dict.Find("isSubframeReferrerUrlRemoved");
  if (is_subframe_referrer_url_removed_value) {
    {
      auto temp = (*is_subframe_referrer_url_removed_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_subframe_referrer_url_removed = std::nullopt;
        return false;
      }
      out.is_subframe_referrer_url_removed = *temp;
    }
  }

  const base::Value* is_url_removed_by_policy_value = dict.Find("isUrlRemovedByPolicy");
  if (!is_url_removed_by_policy_value) {
    return false;
  }
  {
    auto temp = (*is_url_removed_by_policy_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_url_removed_by_policy = *temp;
  }

  return true;
}

// static
bool ReferrerChainEntry::Populate(
    const base::Value& value, ReferrerChainEntry& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ReferrerChainEntry> ReferrerChainEntry::FromValue(const base::Value::Dict& value) {
  ReferrerChainEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReferrerChainEntry> ReferrerChainEntry::FromValue(const base::Value& value) {
  ReferrerChainEntry out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ReferrerChainEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  if (this->main_frame_url) {
    to_value_result.Set("mainFrameUrl", *this->main_frame_url);

  }
  to_value_result.Set("urlType", safe_browsing_private::ToString(this->url_type));

  if (this->ip_addresses) {
    to_value_result.Set("ipAddresses", json_schema_compiler::util::CreateValueFromArray(*this->ip_addresses));

  }
  if (this->referrer_url) {
    to_value_result.Set("referrerUrl", *this->referrer_url);

  }
  if (this->referrer_main_frame_url) {
    to_value_result.Set("referrerMainFrameUrl", *this->referrer_main_frame_url);

  }
  if (this->is_retargeting) {
    to_value_result.Set("isRetargeting", *this->is_retargeting);

  }
  if (this->navigation_time_ms) {
    to_value_result.Set("navigationTimeMs", *this->navigation_time_ms);

  }
  if (this->server_redirect_chain) {
    to_value_result.Set("serverRedirectChain", json_schema_compiler::util::CreateValueFromArray(*this->server_redirect_chain));

  }
  if (this->navigation_initiation != NavigationInitiation()) {
    to_value_result.Set("navigationInitiation", safe_browsing_private::ToString(this->navigation_initiation));

  }
  if (this->maybe_launched_by_external_app) {
    to_value_result.Set("maybeLaunchedByExternalApp", *this->maybe_launched_by_external_app);

  }
  if (this->is_subframe_url_removed) {
    to_value_result.Set("isSubframeUrlRemoved", *this->is_subframe_url_removed);

  }
  if (this->is_subframe_referrer_url_removed) {
    to_value_result.Set("isSubframeReferrerUrlRemoved", *this->is_subframe_referrer_url_removed);

  }
  to_value_result.Set("isUrlRemovedByPolicy", this->is_url_removed_by_policy);


  return to_value_result;
}



//
// Functions
//

namespace GetReferrerChain {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& tab_id_value = args[0];
    {
      auto temp = tab_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.tab_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<ReferrerChainEntry>& entries) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(entries));

  return create_results;
}
}  // namespace GetReferrerChain

//
// Events
//

namespace OnPolicySpecifiedPasswordReuseDetected {

const char kEventName[] = "safeBrowsingPrivate.onPolicySpecifiedPasswordReuseDetected";

base::Value::List Create(const PolicySpecifiedPasswordReuse& reuse_details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((reuse_details).ToValue());

  return create_results;
}

}  // namespace OnPolicySpecifiedPasswordReuseDetected

namespace OnPolicySpecifiedPasswordChanged {

const char kEventName[] = "safeBrowsingPrivate.onPolicySpecifiedPasswordChanged";

base::Value::List Create(const std::string& user_name) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(user_name);

  return create_results;
}

}  // namespace OnPolicySpecifiedPasswordChanged

namespace OnDangerousDownloadOpened {

const char kEventName[] = "safeBrowsingPrivate.onDangerousDownloadOpened";

base::Value::List Create(const DangerousDownloadInfo& dict) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((dict).ToValue());

  return create_results;
}

}  // namespace OnDangerousDownloadOpened

namespace OnSecurityInterstitialShown {

const char kEventName[] = "safeBrowsingPrivate.onSecurityInterstitialShown";

base::Value::List Create(const InterstitialInfo& dict) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((dict).ToValue());

  return create_results;
}

}  // namespace OnSecurityInterstitialShown

namespace OnSecurityInterstitialProceeded {

const char kEventName[] = "safeBrowsingPrivate.onSecurityInterstitialProceeded";

base::Value::List Create(const InterstitialInfo& dict) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((dict).ToValue());

  return create_results;
}

}  // namespace OnSecurityInterstitialProceeded

}  // namespace safe_browsing_private
}  // namespace api
}  // namespace extensions

