// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/declarative_net_request.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_DECLARATIVE_NET_REQUEST_H__
#define EXTENSIONS_COMMON_API_DECLARATIVE_NET_REQUEST_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "base/types/expected.h"
#include "extensions/common/api/extension_types.h"


namespace extensions {
namespace api {
namespace declarative_net_request {

//
// Properties
//

// The minimum number of static rules guaranteed to an extension across its
// enabled static rulesets. Any rules above this limit will count towards the <a
// href="#global-static-rule-limit">global static rule limit</a>.
extern const int GUARANTEED_MINIMUM_STATIC_RULES;

// The maximum number of combined dynamic and session scoped rules an extension
// can add.
extern const int MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES;

// The maximum number of dynamic rules that an extension can add.
extern const int MAX_NUMBER_OF_DYNAMIC_RULES;

// The maximum number of "unsafe" dynamic rules that an extension can add.
extern const int MAX_NUMBER_OF_UNSAFE_DYNAMIC_RULES;

// The maximum number of session scoped rules that an extension can add.
extern const int MAX_NUMBER_OF_SESSION_RULES;

// The maximum number of "unsafe" session scoped rules that an extension can
// add.
extern const int MAX_NUMBER_OF_UNSAFE_SESSION_RULES;

// Time interval within which <code>MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL
// getMatchedRules</code> calls can be made, specified in minutes. Additional
// calls will fail immediately and set $(ref:runtime.lastError). Note:
// <code>getMatchedRules</code> calls associated with a user gesture are exempt
// from the quota.
extern const int GETMATCHEDRULES_QUOTA_INTERVAL;

// The number of times <code>getMatchedRules</code> can be called within a
// period of <code>GETMATCHEDRULES_QUOTA_INTERVAL</code>.
extern const int MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL;

// The maximum number of regular expression rules that an extension can add.
// This limit is evaluated separately for the set of dynamic rules and those
// specified in the rule resources file.
extern const int MAX_NUMBER_OF_REGEX_RULES;

// The maximum number of static <code>Rulesets</code> an extension can specify
// as part of the <code>"rule_resources"</code> manifest key.
extern const int MAX_NUMBER_OF_STATIC_RULESETS;

// The maximum number of static <code>Rulesets</code> an extension can enable at
// any one time.
extern const int MAX_NUMBER_OF_ENABLED_STATIC_RULESETS;

// Ruleset ID for the dynamic rules added by the extension.
extern const char DYNAMIC_RULESET_ID[];

// Ruleset ID for the session-scoped rules added by the extension.
extern const char SESSION_RULESET_ID[];

//
// Types
//

// This describes the resource type of the network request.
enum class ResourceType {
  kNone = 0,
  kMainFrame,
  kSubFrame,
  kStylesheet,
  kScript,
  kImage,
  kFont,
  kObject,
  kXmlhttprequest,
  kPing,
  kCspReport,
  kMedia,
  kWebsocket,
  kWebtransport,
  kWebbundle,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(ResourceType as_enum);
ResourceType ParseResourceType(base::StringPiece as_string);
std::u16string GetResourceTypeParseError(base::StringPiece as_string);

// This describes the HTTP request method of a network request.
enum class RequestMethod {
  kNone = 0,
  kConnect,
  kDelete,
  kGet,
  kHead,
  kOptions,
  kPatch,
  kPost,
  kPut,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(RequestMethod as_enum);
RequestMethod ParseRequestMethod(base::StringPiece as_string);
std::u16string GetRequestMethodParseError(base::StringPiece as_string);

// This describes whether the request is first or third party to the frame in
// which it originated. A request is said to be first party if it has the same
// domain (eTLD+1) as the frame in which the request originated.
enum class DomainType {
  kNone = 0,
  kFirstParty,
  kThirdParty,
  kMaxValue = kThirdParty,
};


const char* ToString(DomainType as_enum);
DomainType ParseDomainType(base::StringPiece as_string);
std::u16string GetDomainTypeParseError(base::StringPiece as_string);

// This describes the possible operations for a "modifyHeaders" rule.
enum class HeaderOperation {
  kNone = 0,
  kAppend,
  kSet,
  kRemove,
  kMaxValue = kRemove,
};


const char* ToString(HeaderOperation as_enum);
HeaderOperation ParseHeaderOperation(base::StringPiece as_string);
std::u16string GetHeaderOperationParseError(base::StringPiece as_string);

// Describes the kind of action to take if a given RuleCondition matches.
enum class RuleActionType {
  kNone = 0,
  kBlock,
  kRedirect,
  kAllow,
  kUpgradeScheme,
  kModifyHeaders,
  kAllowAllRequests,
  kMaxValue = kAllowAllRequests,
};


const char* ToString(RuleActionType as_enum);
RuleActionType ParseRuleActionType(base::StringPiece as_string);
std::u16string GetRuleActionTypeParseError(base::StringPiece as_string);

// Describes the reason why a given regular expression isn't supported.
enum class UnsupportedRegexReason {
  kNone = 0,
  kSyntaxError,
  kMemoryLimitExceeded,
  kMaxValue = kMemoryLimitExceeded,
};


const char* ToString(UnsupportedRegexReason as_enum);
UnsupportedRegexReason ParseUnsupportedRegexReason(base::StringPiece as_string);
std::u16string GetUnsupportedRegexReasonParseError(base::StringPiece as_string);

struct Ruleset {
  Ruleset();
  ~Ruleset();
  Ruleset(const Ruleset&) = delete;
  Ruleset& operator=(const Ruleset&) = delete;
  Ruleset(Ruleset&& rhs);
  Ruleset& operator=(Ruleset&& rhs);

  // Populates a Ruleset object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Ruleset& out, std::u16string& error);

  // Populates a Ruleset object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Ruleset& out, std::u16string& error);

  // Creates a deep copy of Ruleset.
  Ruleset Clone() const;

  // Creates a Ruleset object from a base::Value, or NULL on failure.
  static std::unique_ptr<Ruleset> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a Ruleset object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<Ruleset, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a Ruleset object from a base::Value, or unexpected on failure.
  static base::expected<Ruleset, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRuleset object.
  base::Value::Dict ToValue() const;

  // A non-empty string uniquely identifying the ruleset. IDs beginning with '_'
  // are reserved for internal use.
  std::string id;

  // The path of the JSON ruleset relative to the extension directory.
  std::string path;

  // Whether the ruleset is enabled by default.
  bool enabled;

};

struct QueryKeyValue {
  QueryKeyValue();
  ~QueryKeyValue();
  QueryKeyValue(const QueryKeyValue&) = delete;
  QueryKeyValue& operator=(const QueryKeyValue&) = delete;
  QueryKeyValue(QueryKeyValue&& rhs);
  QueryKeyValue& operator=(QueryKeyValue&& rhs);

  // Populates a QueryKeyValue object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, QueryKeyValue& out, std::u16string& error);

  // Populates a QueryKeyValue object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, QueryKeyValue& out, std::u16string& error);

  // Creates a deep copy of QueryKeyValue.
  QueryKeyValue Clone() const;

  // Creates a QueryKeyValue object from a base::Value, or NULL on failure.
  static std::unique_ptr<QueryKeyValue> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a QueryKeyValue object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<QueryKeyValue, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a QueryKeyValue object from a base::Value, or unexpected on
  // failure.
  static base::expected<QueryKeyValue, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisQueryKeyValue object.
  base::Value::Dict ToValue() const;

  std::string key;

  std::string value;

  // If true, the query key is replaced only if it's already present. Otherwise,
  // the key is also added if it's missing. Defaults to false.
  absl::optional<bool> replace_only;

};

struct QueryTransform {
  QueryTransform();
  ~QueryTransform();
  QueryTransform(const QueryTransform&) = delete;
  QueryTransform& operator=(const QueryTransform&) = delete;
  QueryTransform(QueryTransform&& rhs);
  QueryTransform& operator=(QueryTransform&& rhs);

  // Populates a QueryTransform object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, QueryTransform& out, std::u16string& error);

  // Populates a QueryTransform object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, QueryTransform& out, std::u16string& error);

  // Creates a deep copy of QueryTransform.
  QueryTransform Clone() const;

  // Creates a QueryTransform object from a base::Value, or NULL on failure.
  static std::unique_ptr<QueryTransform> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a QueryTransform object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<QueryTransform, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a QueryTransform object from a base::Value, or unexpected on
  // failure.
  static base::expected<QueryTransform, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisQueryTransform object.
  base::Value::Dict ToValue() const;

  // The list of query keys to be removed.
  absl::optional<std::vector<std::string>> remove_params;

  // The list of query key-value pairs to be added or replaced.
  absl::optional<std::vector<QueryKeyValue>> add_or_replace_params;

};

struct URLTransform {
  URLTransform();
  ~URLTransform();
  URLTransform(const URLTransform&) = delete;
  URLTransform& operator=(const URLTransform&) = delete;
  URLTransform(URLTransform&& rhs);
  URLTransform& operator=(URLTransform&& rhs);

  // Populates a URLTransform object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, URLTransform& out, std::u16string& error);

  // Populates a URLTransform object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, URLTransform& out, std::u16string& error);

  // Creates a deep copy of URLTransform.
  URLTransform Clone() const;

  // Creates a URLTransform object from a base::Value, or NULL on failure.
  static std::unique_ptr<URLTransform> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a URLTransform object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<URLTransform, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a URLTransform object from a base::Value, or unexpected on failure.
  static base::expected<URLTransform, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisURLTransform object.
  base::Value::Dict ToValue() const;

  // The new scheme for the request. Allowed values are "http", "https", "ftp" and
  // "chrome-extension".
  absl::optional<std::string> scheme;

  // The new host for the request.
  absl::optional<std::string> host;

  // The new port for the request. If empty, the existing port is cleared.
  absl::optional<std::string> port;

  // The new path for the request. If empty, the existing path is cleared.
  absl::optional<std::string> path;

  // The new query for the request. Should be either empty, in which case the
  // existing query is cleared; or should begin with '?'.
  absl::optional<std::string> query;

  // Add, remove or replace query key-value pairs.
  absl::optional<QueryTransform> query_transform;

  // The new fragment for the request. Should be either empty, in which case the
  // existing fragment is cleared; or should begin with '#'.
  absl::optional<std::string> fragment;

  // The new username for the request.
  absl::optional<std::string> username;

  // The new password for the request.
  absl::optional<std::string> password;

};

struct Redirect {
  Redirect();
  ~Redirect();
  Redirect(const Redirect&) = delete;
  Redirect& operator=(const Redirect&) = delete;
  Redirect(Redirect&& rhs);
  Redirect& operator=(Redirect&& rhs);

  // Populates a Redirect object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Redirect& out, std::u16string& error);

  // Populates a Redirect object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Redirect& out, std::u16string& error);

  // Creates a deep copy of Redirect.
  Redirect Clone() const;

  // Creates a Redirect object from a base::Value, or NULL on failure.
  static std::unique_ptr<Redirect> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a Redirect object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<Redirect, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a Redirect object from a base::Value, or unexpected on failure.
  static base::expected<Redirect, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRedirect object.
  base::Value::Dict ToValue() const;

  // Path relative to the extension directory. Should start with '/'.
  absl::optional<std::string> extension_path;

  // Url transformations to perform.
  absl::optional<URLTransform> transform;

  // The redirect url. Redirects to JavaScript urls are not allowed.
  absl::optional<std::string> url;

  // Substitution pattern for rules which specify a <code>regexFilter</code>. The
  // first match of <code>regexFilter</code> within the url will be replaced with
  // this pattern. Within <code>regexSubstitution</code>, backslash-escaped digits
  // (\1 to \9) can be used to insert the corresponding capture groups. \0 refers
  // to the entire matching text.
  absl::optional<std::string> regex_substitution;

};

struct RuleCondition {
  RuleCondition();
  ~RuleCondition();
  RuleCondition(const RuleCondition&) = delete;
  RuleCondition& operator=(const RuleCondition&) = delete;
  RuleCondition(RuleCondition&& rhs);
  RuleCondition& operator=(RuleCondition&& rhs);

  // Populates a RuleCondition object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RuleCondition& out, std::u16string& error);

  // Populates a RuleCondition object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RuleCondition& out, std::u16string& error);

  // Creates a deep copy of RuleCondition.
  RuleCondition Clone() const;

  // Creates a RuleCondition object from a base::Value, or NULL on failure.
  static std::unique_ptr<RuleCondition> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a RuleCondition object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<RuleCondition, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a RuleCondition object from a base::Value, or unexpected on
  // failure.
  static base::expected<RuleCondition, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRuleCondition object.
  base::Value::Dict ToValue() const;

  // <p>The pattern which is matched against the network request url. Supported
  // constructs:</p><p><b>'*'</b>  : Wildcard: Matches any number of
  // characters.</p><p><b>'|'</b>  : Left/right anchor: If used at either end of
  // the pattern,               specifies the beginning/end of the url
  // respectively.</p><p><b>'||'</b> : Domain name anchor: If used at the
  // beginning of the pattern,               specifies the start of a (sub-)domain
  // of the URL.</p><p><b>'^'</b>  : Separator character: This matches anything
  // except a letter, a               digit or one of the following: _ - . %. This
  // can also match               the end of the URL.</p><p>Therefore
  // <code>urlFilter</code> is composed of the following parts: (optional
  // Left/Domain name anchor) + pattern + (optional Right anchor).</p><p>If
  // omitted, all urls are matched. An empty string is not allowed.</p><p>A
  // pattern beginning with <code>||*</code> is not allowed. Use <code>*</code>
  // instead.</p><p>Note: Only one of <code>urlFilter</code> or
  // <code>regexFilter</code> can be specified.</p><p>Note: The
  // <code>urlFilter</code> must be composed of only ASCII characters. This is
  // matched against a url where the host is encoded in the punycode format (in
  // case of internationalized domains) and any other non-ascii characters are url
  // encoded in utf-8. For example, when the request url is
  // http://abc.&#x0440;&#x0444;?q=&#x0444;, the <code>urlFilter</code> will be
  // matched against the url http://abc.xn--p1ai/?q=%D1%84.</p>
  absl::optional<std::string> url_filter;

  // <p>Regular expression to match against the network request url. This follows
  // the <a href = "https://github.com/google/re2/wiki/Syntax">RE2
  // syntax</a>.</p><p>Note: Only one of <code>urlFilter</code> or
  // <code>regexFilter</code> can be specified.</p><p>Note: The
  // <code>regexFilter</code> must be composed of only ASCII characters. This is
  // matched against a url where the host is encoded in the punycode format (in
  // case of internationalized domains) and any other non-ascii characters are url
  // encoded in utf-8.</p>
  absl::optional<std::string> regex_filter;

  // Whether the <code>urlFilter</code> or <code>regexFilter</code> (whichever is
  // specified) is case sensitive. Default is false.
  absl::optional<bool> is_url_filter_case_sensitive;

  // <p>The rule will only match network requests originating from the list of
  // <code>initiatorDomains</code>. If the list is omitted, the rule is applied to
  // requests from all domains. An empty list is not allowed.</p><p>Notes: <ul>
  // <li>Sub-domains like "a.example.com" are also allowed.</li>  <li>The entries
  // must consist of only ascii characters.</li>  <li>Use punycode encoding for
  // internationalized domains.</li>  <li>    This matches against the request
  // initiator and not the request url.  </li>  <li>Sub-domains of the listed
  // domains are also matched.</li> </ul></p>
  absl::optional<std::vector<std::string>> initiator_domains;

  // <p>The rule will not match network requests originating from the list of
  // <code>excludedInitiatorDomains</code>. If the list is empty or omitted, no
  // domains are excluded. This takes precedence over
  // <code>initiatorDomains</code>.</p><p>Notes: <ul>  <li>Sub-domains like
  // "a.example.com" are also allowed.</li>  <li>The entries must consist of only
  // ascii characters.</li>  <li>Use punycode encoding for internationalized
  // domains.</li>  <li>    This matches against the request initiator and not the
  // request url.  </li>  <li>Sub-domains of the listed domains are also
  // excluded.</li> </ul></p>
  absl::optional<std::vector<std::string>> excluded_initiator_domains;

  // <p>The rule will only match network requests when the domain matches one from
  // the list of <code>requestDomains</code>. If the list is omitted, the rule is
  // applied to requests from all domains. An empty list is not
  // allowed.</p><p>Notes: <ul>  <li>Sub-domains like "a.example.com" are also
  // allowed.</li>  <li>The entries must consist of only ascii characters.</li>
  // <li>Use punycode encoding for internationalized domains.</li>
  // <li>Sub-domains of the listed domains are also matched.</li> </ul></p>
  absl::optional<std::vector<std::string>> request_domains;

  // <p>The rule will not match network requests when the domains matches one from
  // the list of <code>excludedRequestDomains</code>. If the list is empty or
  // omitted, no domains are excluded. This takes precedence over
  // <code>requestDomains</code>.</p><p>Notes: <ul>  <li>Sub-domains like
  // "a.example.com" are also allowed.</li>  <li>The entries must consist of only
  // ascii characters.</li>  <li>Use punycode encoding for internationalized
  // domains.</li>  <li>Sub-domains of the listed domains are also excluded.</li>
  // </ul></p>
  absl::optional<std::vector<std::string>> excluded_request_domains;

  // The rule will only match network requests originating from the list of
  // <code>domains</code>.
  absl::optional<std::vector<std::string>> domains;

  // The rule will not match network requests originating from the list of
  // <code>excludedDomains</code>.
  absl::optional<std::vector<std::string>> excluded_domains;

  // <p>List of resource types which the rule can match. An empty list is not
  // allowed.</p><p>Note: this must be specified for <code>allowAllRequests</code>
  // rules and may only include the <code>sub_frame</code> and
  // <code>main_frame</code> resource types.</p>
  absl::optional<std::vector<ResourceType>> resource_types;

  // List of resource types which the rule won't match. Only one of
  // <code>resourceTypes</code> and <code>excludedResourceTypes</code> should be
  // specified. If neither of them is specified, all resource types except
  // "main_frame" are blocked.
  absl::optional<std::vector<ResourceType>> excluded_resource_types;

  // <p>List of HTTP request methods which the rule can match. An empty list is
  // not allowed.</p><p>Note: Specifying a <code>requestMethods</code> rule
  // condition will also exclude non-HTTP(s) requests, whereas specifying
  // <code>excludedRequestMethods</code> will not.</p>
  absl::optional<std::vector<RequestMethod>> request_methods;

  // List of request methods which the rule won't match. Only one of
  // <code>requestMethods</code> and <code>excludedRequestMethods</code> should be
  // specified. If neither of them is specified, all request methods are matched.
  absl::optional<std::vector<RequestMethod>> excluded_request_methods;

  // Specifies whether the network request is first-party or third-party to the
  // domain from which it originated. If omitted, all requests are accepted.
  DomainType domain_type;

  // List of $(ref:tabs.Tab.id) which the rule should match. An ID of
  // $(ref:tabs.TAB_ID_NONE) matches requests which don't originate from a tab. An
  // empty list is not allowed. Only supported for session-scoped rules.
  absl::optional<std::vector<int>> tab_ids;

  // List of $(ref:tabs.Tab.id) which the rule should not match. An ID of
  // $(ref:tabs.TAB_ID_NONE) excludes requests which don't originate from a tab.
  // Only supported for session-scoped rules.
  absl::optional<std::vector<int>> excluded_tab_ids;

};

struct ModifyHeaderInfo {
  ModifyHeaderInfo();
  ~ModifyHeaderInfo();
  ModifyHeaderInfo(const ModifyHeaderInfo&) = delete;
  ModifyHeaderInfo& operator=(const ModifyHeaderInfo&) = delete;
  ModifyHeaderInfo(ModifyHeaderInfo&& rhs);
  ModifyHeaderInfo& operator=(ModifyHeaderInfo&& rhs);

  // Populates a ModifyHeaderInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ModifyHeaderInfo& out, std::u16string& error);

  // Populates a ModifyHeaderInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ModifyHeaderInfo& out, std::u16string& error);

  // Creates a deep copy of ModifyHeaderInfo.
  ModifyHeaderInfo Clone() const;

  // Creates a ModifyHeaderInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<ModifyHeaderInfo> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a ModifyHeaderInfo object from a base::Value::Dict, or unexpected
  // on failure.
  static base::expected<ModifyHeaderInfo, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a ModifyHeaderInfo object from a base::Value, or unexpected on
  // failure.
  static base::expected<ModifyHeaderInfo, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisModifyHeaderInfo object.
  base::Value::Dict ToValue() const;

  // The name of the header to be modified.
  std::string header;

  // The operation to be performed on a header.
  HeaderOperation operation;

  // The new value for the header. Must be specified for <code>append</code> and
  // <code>set</code> operations.
  absl::optional<std::string> value;

};

struct RuleAction {
  RuleAction();
  ~RuleAction();
  RuleAction(const RuleAction&) = delete;
  RuleAction& operator=(const RuleAction&) = delete;
  RuleAction(RuleAction&& rhs);
  RuleAction& operator=(RuleAction&& rhs);

  // Populates a RuleAction object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, RuleAction& out, std::u16string& error);

  // Populates a RuleAction object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, RuleAction& out, std::u16string& error);

  // Creates a deep copy of RuleAction.
  RuleAction Clone() const;

  // Creates a RuleAction object from a base::Value, or NULL on failure.
  static std::unique_ptr<RuleAction> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a RuleAction object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<RuleAction, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a RuleAction object from a base::Value, or unexpected on failure.
  static base::expected<RuleAction, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRuleAction object.
  base::Value::Dict ToValue() const;

  // The type of action to perform.
  RuleActionType type;

  // Describes how the redirect should be performed. Only valid for redirect
  // rules.
  absl::optional<Redirect> redirect;

  // The request headers to modify for the request. Only valid if RuleActionType
  // is "modifyHeaders".
  absl::optional<std::vector<ModifyHeaderInfo>> request_headers;

  // The response headers to modify for the request. Only valid if RuleActionType
  // is "modifyHeaders".
  absl::optional<std::vector<ModifyHeaderInfo>> response_headers;

};

struct Rule {
  Rule();
  ~Rule();
  Rule(const Rule&) = delete;
  Rule& operator=(const Rule&) = delete;
  Rule(Rule&& rhs);
  Rule& operator=(Rule&& rhs);

  // Populates a Rule object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Rule& out, std::u16string& error);

  // Populates a Rule object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Rule& out, std::u16string& error);

  // Creates a deep copy of Rule.
  Rule Clone() const;

  // Creates a Rule object from a base::Value, or NULL on failure.
  static std::unique_ptr<Rule> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a Rule object from a base::Value::Dict, or unexpected on failure.
  static base::expected<Rule, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a Rule object from a base::Value, or unexpected on failure.
  static base::expected<Rule, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRule object.
  base::Value::Dict ToValue() const;

  // An id which uniquely identifies a rule. Mandatory and should be >= 1.
  int id;

  // Rule priority. Defaults to 1. When specified, should be >= 1.
  absl::optional<int> priority;

  // The condition under which this rule is triggered.
  RuleCondition condition;

  // The action to take if this rule is matched.
  RuleAction action;

};

struct MatchedRule {
  MatchedRule();
  ~MatchedRule();
  MatchedRule(const MatchedRule&) = delete;
  MatchedRule& operator=(const MatchedRule&) = delete;
  MatchedRule(MatchedRule&& rhs);
  MatchedRule& operator=(MatchedRule&& rhs);

  // Populates a MatchedRule object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MatchedRule& out, std::u16string& error);

  // Populates a MatchedRule object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, MatchedRule& out, std::u16string& error);

  // Creates a deep copy of MatchedRule.
  MatchedRule Clone() const;

  // Creates a MatchedRule object from a base::Value, or NULL on failure.
  static std::unique_ptr<MatchedRule> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a MatchedRule object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<MatchedRule, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a MatchedRule object from a base::Value, or unexpected on failure.
  static base::expected<MatchedRule, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMatchedRule object.
  base::Value::Dict ToValue() const;

  // A matching rule's ID.
  int rule_id;

  // ID of the $(ref:Ruleset) this rule belongs to. For a rule originating from
  // the set of dynamic rules, this will be equal to $(ref:DYNAMIC_RULESET_ID).
  std::string ruleset_id;

};

struct GetRulesFilter {
  GetRulesFilter();
  ~GetRulesFilter();
  GetRulesFilter(const GetRulesFilter&) = delete;
  GetRulesFilter& operator=(const GetRulesFilter&) = delete;
  GetRulesFilter(GetRulesFilter&& rhs);
  GetRulesFilter& operator=(GetRulesFilter&& rhs);

  // Populates a GetRulesFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetRulesFilter& out, std::u16string& error);

  // Populates a GetRulesFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetRulesFilter& out, std::u16string& error);

  // Creates a deep copy of GetRulesFilter.
  GetRulesFilter Clone() const;

  // Creates a GetRulesFilter object from a base::Value, or NULL on failure.
  static std::unique_ptr<GetRulesFilter> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a GetRulesFilter object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<GetRulesFilter, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a GetRulesFilter object from a base::Value, or unexpected on
  // failure.
  static base::expected<GetRulesFilter, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetRulesFilter object.
  base::Value::Dict ToValue() const;

  // If specified, only rules with matching IDs are included.
  absl::optional<std::vector<int>> rule_ids;

};

struct MatchedRuleInfo {
  MatchedRuleInfo();
  ~MatchedRuleInfo();
  MatchedRuleInfo(const MatchedRuleInfo&) = delete;
  MatchedRuleInfo& operator=(const MatchedRuleInfo&) = delete;
  MatchedRuleInfo(MatchedRuleInfo&& rhs);
  MatchedRuleInfo& operator=(MatchedRuleInfo&& rhs);

  // Populates a MatchedRuleInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MatchedRuleInfo& out, std::u16string& error);

  // Populates a MatchedRuleInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MatchedRuleInfo& out, std::u16string& error);

  // Creates a deep copy of MatchedRuleInfo.
  MatchedRuleInfo Clone() const;

  // Creates a MatchedRuleInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<MatchedRuleInfo> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a MatchedRuleInfo object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<MatchedRuleInfo, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a MatchedRuleInfo object from a base::Value, or unexpected on
  // failure.
  static base::expected<MatchedRuleInfo, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMatchedRuleInfo object.
  base::Value::Dict ToValue() const;

  MatchedRule rule;

  // The time the rule was matched. Timestamps will correspond to the Javascript
  // convention for times, i.e. number of milliseconds since the epoch.
  double time_stamp;

  // The tabId of the tab from which the request originated if the tab is still
  // active. Else -1.
  int tab_id;

};

struct MatchedRulesFilter {
  MatchedRulesFilter();
  ~MatchedRulesFilter();
  MatchedRulesFilter(const MatchedRulesFilter&) = delete;
  MatchedRulesFilter& operator=(const MatchedRulesFilter&) = delete;
  MatchedRulesFilter(MatchedRulesFilter&& rhs);
  MatchedRulesFilter& operator=(MatchedRulesFilter&& rhs);

  // Populates a MatchedRulesFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MatchedRulesFilter& out, std::u16string& error);

  // Populates a MatchedRulesFilter object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MatchedRulesFilter& out, std::u16string& error);

  // Creates a deep copy of MatchedRulesFilter.
  MatchedRulesFilter Clone() const;

  // Creates a MatchedRulesFilter object from a base::Value, or NULL on failure.
  static std::unique_ptr<MatchedRulesFilter> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a MatchedRulesFilter object from a base::Value::Dict, or unexpected
  // on failure.
  static base::expected<MatchedRulesFilter, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a MatchedRulesFilter object from a base::Value, or unexpected on
  // failure.
  static base::expected<MatchedRulesFilter, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMatchedRulesFilter object.
  base::Value::Dict ToValue() const;

  // If specified, only matches rules for the given tab. Matches rules not
  // associated with any active tab if set to -1.
  absl::optional<int> tab_id;

  // If specified, only matches rules after the given timestamp.
  absl::optional<double> min_time_stamp;

};

struct RulesMatchedDetails {
  RulesMatchedDetails();
  ~RulesMatchedDetails();
  RulesMatchedDetails(const RulesMatchedDetails&) = delete;
  RulesMatchedDetails& operator=(const RulesMatchedDetails&) = delete;
  RulesMatchedDetails(RulesMatchedDetails&& rhs);
  RulesMatchedDetails& operator=(RulesMatchedDetails&& rhs);

  // Populates a RulesMatchedDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RulesMatchedDetails& out, std::u16string& error);

  // Populates a RulesMatchedDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RulesMatchedDetails& out, std::u16string& error);

  // Creates a deep copy of RulesMatchedDetails.
  RulesMatchedDetails Clone() const;

  // Creates a RulesMatchedDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RulesMatchedDetails> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a RulesMatchedDetails object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<RulesMatchedDetails, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a RulesMatchedDetails object from a base::Value, or unexpected on
  // failure.
  static base::expected<RulesMatchedDetails, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRulesMatchedDetails object.
  base::Value::Dict ToValue() const;

  // Rules matching the given filter.
  std::vector<MatchedRuleInfo> rules_matched_info;

};

struct RequestDetails {
  RequestDetails();
  ~RequestDetails();
  RequestDetails(const RequestDetails&) = delete;
  RequestDetails& operator=(const RequestDetails&) = delete;
  RequestDetails(RequestDetails&& rhs);
  RequestDetails& operator=(RequestDetails&& rhs);

  // Populates a RequestDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestDetails& out, std::u16string& error);

  // Populates a RequestDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RequestDetails& out, std::u16string& error);

  // Creates a deep copy of RequestDetails.
  RequestDetails Clone() const;

  // Creates a RequestDetails object from a base::Value, or NULL on failure.
  static std::unique_ptr<RequestDetails> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a RequestDetails object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<RequestDetails, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a RequestDetails object from a base::Value, or unexpected on
  // failure.
  static base::expected<RequestDetails, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRequestDetails object.
  base::Value::Dict ToValue() const;

  // The ID of the request. Request IDs are unique within a browser session.
  std::string request_id;

  // The URL of the request.
  std::string url;

  // The origin where the request was initiated. This does not change through
  // redirects. If this is an opaque origin, the string 'null' will be used.
  absl::optional<std::string> initiator;

  // Standard HTTP method.
  std::string method;

  // The value 0 indicates that the request happens in the main frame; a positive
  // value indicates the ID of a subframe in which the request happens. If the
  // document of a (sub-)frame is loaded (<code>type</code> is
  // <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code>
  // indicates the ID of this frame, not the ID of the outer frame. Frame IDs are
  // unique within a tab.
  int frame_id;

  // The unique identifier for the frame's document, if this request is for a
  // frame.
  absl::optional<std::string> document_id;

  // The type of the frame, if this request is for a frame.
  extensions::api::extension_types::FrameType frame_type;

  // The lifecycle of the frame's document, if this request is for a frame.
  extensions::api::extension_types::DocumentLifecycle document_lifecycle;

  // ID of frame that wraps the frame which sent the request. Set to -1 if no
  // parent frame exists.
  int parent_frame_id;

  // The unique identifier for the frame's parent document, if this request is for
  // a frame and has a parent.
  absl::optional<std::string> parent_document_id;

  // The ID of the tab in which the request takes place. Set to -1 if the request
  // isn't related to a tab.
  int tab_id;

  // The resource type of the request.
  ResourceType type;

};

struct TestMatchRequestDetails {
  TestMatchRequestDetails();
  ~TestMatchRequestDetails();
  TestMatchRequestDetails(const TestMatchRequestDetails&) = delete;
  TestMatchRequestDetails& operator=(const TestMatchRequestDetails&) = delete;
  TestMatchRequestDetails(TestMatchRequestDetails&& rhs);
  TestMatchRequestDetails& operator=(TestMatchRequestDetails&& rhs);

  // Populates a TestMatchRequestDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TestMatchRequestDetails& out, std::u16string& error);

  // Populates a TestMatchRequestDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TestMatchRequestDetails& out, std::u16string& error);

  // Creates a deep copy of TestMatchRequestDetails.
  TestMatchRequestDetails Clone() const;

  // Creates a TestMatchRequestDetails object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<TestMatchRequestDetails> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a TestMatchRequestDetails object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<TestMatchRequestDetails, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a TestMatchRequestDetails object from a base::Value, or unexpected
  // on failure.
  static base::expected<TestMatchRequestDetails, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTestMatchRequestDetails object.
  base::Value::Dict ToValue() const;

  // The URL of the hypothetical request.
  std::string url;

  // The initiator URL (if any) for the hypothetical request.
  absl::optional<std::string> initiator;

  // Standard HTTP method of the hypothetical request. Defaults to "get" for HTTP
  // requests and is ignored for non-HTTP requests.
  RequestMethod method;

  // The resource type of the hypothetical request.
  ResourceType type;

  // The ID of the tab in which the hypothetical request takes place. Does not
  // need to correspond to a real tab ID. Default is -1, meaning that the request
  // isn't related to a tab.
  absl::optional<int> tab_id;

};

struct MatchedRuleInfoDebug {
  MatchedRuleInfoDebug();
  ~MatchedRuleInfoDebug();
  MatchedRuleInfoDebug(const MatchedRuleInfoDebug&) = delete;
  MatchedRuleInfoDebug& operator=(const MatchedRuleInfoDebug&) = delete;
  MatchedRuleInfoDebug(MatchedRuleInfoDebug&& rhs);
  MatchedRuleInfoDebug& operator=(MatchedRuleInfoDebug&& rhs);

  // Populates a MatchedRuleInfoDebug object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MatchedRuleInfoDebug& out, std::u16string& error);

  // Populates a MatchedRuleInfoDebug object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MatchedRuleInfoDebug& out, std::u16string& error);

  // Creates a deep copy of MatchedRuleInfoDebug.
  MatchedRuleInfoDebug Clone() const;

  // Creates a MatchedRuleInfoDebug object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<MatchedRuleInfoDebug> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a MatchedRuleInfoDebug object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<MatchedRuleInfoDebug, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a MatchedRuleInfoDebug object from a base::Value, or unexpected on
  // failure.
  static base::expected<MatchedRuleInfoDebug, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMatchedRuleInfoDebug object.
  base::Value::Dict ToValue() const;

  MatchedRule rule;

  // Details about the request for which the rule was matched.
  RequestDetails request;

};

struct DNRInfo {
  DNRInfo();
  ~DNRInfo();
  DNRInfo(const DNRInfo&) = delete;
  DNRInfo& operator=(const DNRInfo&) = delete;
  DNRInfo(DNRInfo&& rhs);
  DNRInfo& operator=(DNRInfo&& rhs);

  // Manifest key constants.
  static constexpr char kRuleResources[] = "rule_resources";

  // Populates a DNRInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, DNRInfo& out, std::u16string& error);

  // Populates a DNRInfo object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, DNRInfo& out, std::u16string& error);

  // Creates a deep copy of DNRInfo.
  DNRInfo Clone() const;

  // Creates a DNRInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<DNRInfo> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a DNRInfo object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<DNRInfo, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a DNRInfo object from a base::Value, or unexpected on failure.
  static base::expected<DNRInfo, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDNRInfo object.
  base::Value::Dict ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, DNRInfo& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


  std::vector<Ruleset> rule_resources;

};

struct RegexOptions {
  RegexOptions();
  ~RegexOptions();
  RegexOptions(const RegexOptions&) = delete;
  RegexOptions& operator=(const RegexOptions&) = delete;
  RegexOptions(RegexOptions&& rhs);
  RegexOptions& operator=(RegexOptions&& rhs);

  // Populates a RegexOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RegexOptions& out, std::u16string& error);

  // Populates a RegexOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RegexOptions& out, std::u16string& error);

  // Creates a deep copy of RegexOptions.
  RegexOptions Clone() const;

  // Creates a RegexOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<RegexOptions> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a RegexOptions object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<RegexOptions, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a RegexOptions object from a base::Value, or unexpected on failure.
  static base::expected<RegexOptions, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRegexOptions object.
  base::Value::Dict ToValue() const;

  // The regular expresson to check.
  std::string regex;

  // Whether the <code>regex</code> specified is case sensitive. Default is true.
  absl::optional<bool> is_case_sensitive;

  // Whether the <code>regex</code> specified requires capturing. Capturing is
  // only required for redirect rules which specify a <code>regexSubstition</code>
  // action. The default is false.
  absl::optional<bool> require_capturing;

};

struct IsRegexSupportedResult {
  IsRegexSupportedResult();
  ~IsRegexSupportedResult();
  IsRegexSupportedResult(const IsRegexSupportedResult&) = delete;
  IsRegexSupportedResult& operator=(const IsRegexSupportedResult&) = delete;
  IsRegexSupportedResult(IsRegexSupportedResult&& rhs);
  IsRegexSupportedResult& operator=(IsRegexSupportedResult&& rhs);

  // Populates a IsRegexSupportedResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, IsRegexSupportedResult& out, std::u16string& error);

  // Populates a IsRegexSupportedResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, IsRegexSupportedResult& out, std::u16string& error);

  // Creates a deep copy of IsRegexSupportedResult.
  IsRegexSupportedResult Clone() const;

  // Creates a IsRegexSupportedResult object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<IsRegexSupportedResult> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a IsRegexSupportedResult object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<IsRegexSupportedResult, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a IsRegexSupportedResult object from a base::Value, or unexpected
  // on failure.
  static base::expected<IsRegexSupportedResult, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisIsRegexSupportedResult object.
  base::Value::Dict ToValue() const;

  bool is_supported;

  // Specifies the reason why the regular expression is not supported. Only
  // provided if <code>isSupported</code> is false.
  UnsupportedRegexReason reason;

};

struct TestMatchOutcomeResult {
  TestMatchOutcomeResult();
  ~TestMatchOutcomeResult();
  TestMatchOutcomeResult(const TestMatchOutcomeResult&) = delete;
  TestMatchOutcomeResult& operator=(const TestMatchOutcomeResult&) = delete;
  TestMatchOutcomeResult(TestMatchOutcomeResult&& rhs);
  TestMatchOutcomeResult& operator=(TestMatchOutcomeResult&& rhs);

  // Populates a TestMatchOutcomeResult object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TestMatchOutcomeResult& out, std::u16string& error);

  // Populates a TestMatchOutcomeResult object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TestMatchOutcomeResult& out, std::u16string& error);

  // Creates a deep copy of TestMatchOutcomeResult.
  TestMatchOutcomeResult Clone() const;

  // Creates a TestMatchOutcomeResult object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<TestMatchOutcomeResult> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a TestMatchOutcomeResult object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<TestMatchOutcomeResult, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a TestMatchOutcomeResult object from a base::Value, or unexpected
  // on failure.
  static base::expected<TestMatchOutcomeResult, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTestMatchOutcomeResult object.
  base::Value::Dict ToValue() const;

  // The rules (if any) that match the hypothetical request.
  std::vector<MatchedRule> matched_rules;

};

struct UpdateRuleOptions {
  UpdateRuleOptions();
  ~UpdateRuleOptions();
  UpdateRuleOptions(const UpdateRuleOptions&) = delete;
  UpdateRuleOptions& operator=(const UpdateRuleOptions&) = delete;
  UpdateRuleOptions(UpdateRuleOptions&& rhs);
  UpdateRuleOptions& operator=(UpdateRuleOptions&& rhs);

  // Populates a UpdateRuleOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UpdateRuleOptions& out, std::u16string& error);

  // Populates a UpdateRuleOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UpdateRuleOptions& out, std::u16string& error);

  // Creates a deep copy of UpdateRuleOptions.
  UpdateRuleOptions Clone() const;

  // Creates a UpdateRuleOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<UpdateRuleOptions> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a UpdateRuleOptions object from a base::Value::Dict, or unexpected
  // on failure.
  static base::expected<UpdateRuleOptions, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a UpdateRuleOptions object from a base::Value, or unexpected on
  // failure.
  static base::expected<UpdateRuleOptions, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUpdateRuleOptions object.
  base::Value::Dict ToValue() const;

  // IDs of the rules to remove. Any invalid IDs will be ignored.
  absl::optional<std::vector<int>> remove_rule_ids;

  // Rules to add.
  absl::optional<std::vector<Rule>> add_rules;

};

struct UpdateRulesetOptions {
  UpdateRulesetOptions();
  ~UpdateRulesetOptions();
  UpdateRulesetOptions(const UpdateRulesetOptions&) = delete;
  UpdateRulesetOptions& operator=(const UpdateRulesetOptions&) = delete;
  UpdateRulesetOptions(UpdateRulesetOptions&& rhs);
  UpdateRulesetOptions& operator=(UpdateRulesetOptions&& rhs);

  // Populates a UpdateRulesetOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UpdateRulesetOptions& out, std::u16string& error);

  // Populates a UpdateRulesetOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UpdateRulesetOptions& out, std::u16string& error);

  // Creates a deep copy of UpdateRulesetOptions.
  UpdateRulesetOptions Clone() const;

  // Creates a UpdateRulesetOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<UpdateRulesetOptions> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a UpdateRulesetOptions object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<UpdateRulesetOptions, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a UpdateRulesetOptions object from a base::Value, or unexpected on
  // failure.
  static base::expected<UpdateRulesetOptions, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUpdateRulesetOptions object.
  base::Value::Dict ToValue() const;

  // The set of ids corresponding to a static $(ref:Ruleset) that should be
  // disabled.
  absl::optional<std::vector<std::string>> disable_ruleset_ids;

  // The set of ids corresponding to a static $(ref:Ruleset) that should be
  // enabled.
  absl::optional<std::vector<std::string>> enable_ruleset_ids;

};

struct UpdateStaticRulesOptions {
  UpdateStaticRulesOptions();
  ~UpdateStaticRulesOptions();
  UpdateStaticRulesOptions(const UpdateStaticRulesOptions&) = delete;
  UpdateStaticRulesOptions& operator=(const UpdateStaticRulesOptions&) = delete;
  UpdateStaticRulesOptions(UpdateStaticRulesOptions&& rhs);
  UpdateStaticRulesOptions& operator=(UpdateStaticRulesOptions&& rhs);

  // Populates a UpdateStaticRulesOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UpdateStaticRulesOptions& out, std::u16string& error);

  // Populates a UpdateStaticRulesOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UpdateStaticRulesOptions& out, std::u16string& error);

  // Creates a deep copy of UpdateStaticRulesOptions.
  UpdateStaticRulesOptions Clone() const;

  // Creates a UpdateStaticRulesOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<UpdateStaticRulesOptions> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a UpdateStaticRulesOptions object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<UpdateStaticRulesOptions, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a UpdateStaticRulesOptions object from a base::Value, or unexpected
  // on failure.
  static base::expected<UpdateStaticRulesOptions, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUpdateStaticRulesOptions object.
  base::Value::Dict ToValue() const;

  // The id corresponding to a static $(ref:Ruleset).
  std::string ruleset_id;

  // Set of ids corresponding to rules in the $(ref:Ruleset) to disable.
  absl::optional<std::vector<int>> disable_rule_ids;

  // Set of ids corresponding to rules in the $(ref:Ruleset) to enable.
  absl::optional<std::vector<int>> enable_rule_ids;

};

struct GetDisabledRuleIdsOptions {
  GetDisabledRuleIdsOptions();
  ~GetDisabledRuleIdsOptions();
  GetDisabledRuleIdsOptions(const GetDisabledRuleIdsOptions&) = delete;
  GetDisabledRuleIdsOptions& operator=(const GetDisabledRuleIdsOptions&) = delete;
  GetDisabledRuleIdsOptions(GetDisabledRuleIdsOptions&& rhs);
  GetDisabledRuleIdsOptions& operator=(GetDisabledRuleIdsOptions&& rhs);

  // Populates a GetDisabledRuleIdsOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetDisabledRuleIdsOptions& out, std::u16string& error);

  // Populates a GetDisabledRuleIdsOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetDisabledRuleIdsOptions& out, std::u16string& error);

  // Creates a deep copy of GetDisabledRuleIdsOptions.
  GetDisabledRuleIdsOptions Clone() const;

  // Creates a GetDisabledRuleIdsOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<GetDisabledRuleIdsOptions> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a GetDisabledRuleIdsOptions object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<GetDisabledRuleIdsOptions, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a GetDisabledRuleIdsOptions object from a base::Value, or
  // unexpected on failure.
  static base::expected<GetDisabledRuleIdsOptions, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetDisabledRuleIdsOptions object.
  base::Value::Dict ToValue() const;

  // The id corresponding to a static $(ref:Ruleset).
  std::string ruleset_id;

};

struct TabActionCountUpdate {
  TabActionCountUpdate();
  ~TabActionCountUpdate();
  TabActionCountUpdate(const TabActionCountUpdate&) = delete;
  TabActionCountUpdate& operator=(const TabActionCountUpdate&) = delete;
  TabActionCountUpdate(TabActionCountUpdate&& rhs);
  TabActionCountUpdate& operator=(TabActionCountUpdate&& rhs);

  // Populates a TabActionCountUpdate object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TabActionCountUpdate& out, std::u16string& error);

  // Populates a TabActionCountUpdate object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TabActionCountUpdate& out, std::u16string& error);

  // Creates a deep copy of TabActionCountUpdate.
  TabActionCountUpdate Clone() const;

  // Creates a TabActionCountUpdate object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<TabActionCountUpdate> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a TabActionCountUpdate object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<TabActionCountUpdate, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a TabActionCountUpdate object from a base::Value, or unexpected on
  // failure.
  static base::expected<TabActionCountUpdate, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTabActionCountUpdate object.
  base::Value::Dict ToValue() const;

  // The tab for which to update the action count.
  int tab_id;

  // The amount to increment the tab's action count by. Negative values will
  // decrement the count.
  int increment;

};

struct ExtensionActionOptions {
  ExtensionActionOptions();
  ~ExtensionActionOptions();
  ExtensionActionOptions(const ExtensionActionOptions&) = delete;
  ExtensionActionOptions& operator=(const ExtensionActionOptions&) = delete;
  ExtensionActionOptions(ExtensionActionOptions&& rhs);
  ExtensionActionOptions& operator=(ExtensionActionOptions&& rhs);

  // Populates a ExtensionActionOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionActionOptions& out, std::u16string& error);

  // Populates a ExtensionActionOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionActionOptions& out, std::u16string& error);

  // Creates a deep copy of ExtensionActionOptions.
  ExtensionActionOptions Clone() const;

  // Creates a ExtensionActionOptions object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ExtensionActionOptions> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a ExtensionActionOptions object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<ExtensionActionOptions, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionActionOptions object from a base::Value, or unexpected
  // on failure.
  static base::expected<ExtensionActionOptions, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionActionOptions object.
  base::Value::Dict ToValue() const;

  // Whether to automatically display the action count for a page as the
  // extension's badge text. This preference is persisted across sessions.
  absl::optional<bool> display_action_count_as_badge_text;

  // Details of how the tab's action count should be adjusted.
  absl::optional<TabActionCountUpdate> tab_update;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs);
  ManifestKeys& operator=(ManifestKeys&& rhs);

  // Manifest key constants.
  static constexpr char kDeclarativeNetRequest[] = "declarative_net_request";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  DNRInfo declarative_net_request;

};

//
// Functions
//

namespace UpdateDynamicRules {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  UpdateRuleOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateDynamicRules

namespace GetDynamicRules {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // An object to filter the list of fetched rules.
  absl::optional<GetRulesFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Rule>& rules);
}  // namespace Results

}  // namespace GetDynamicRules

namespace UpdateSessionRules {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  UpdateRuleOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateSessionRules

namespace GetSessionRules {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // An object to filter the list of fetched rules.
  absl::optional<GetRulesFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<Rule>& rules);
}  // namespace Results

}  // namespace GetSessionRules

namespace UpdateEnabledRulesets {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  UpdateRulesetOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateEnabledRulesets

namespace GetEnabledRulesets {

namespace Results {

base::Value::List Create(const std::vector<std::string>& ruleset_ids);
}  // namespace Results

}  // namespace GetEnabledRulesets

namespace UpdateStaticRules {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  UpdateStaticRulesOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateStaticRules

namespace GetDisabledRuleIds {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Specifies the ruleset to query.
  GetDisabledRuleIdsOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<int>& disabled_rule_ids);
}  // namespace Results

}  // namespace GetDisabledRuleIds

namespace GetMatchedRules {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // An object to filter the list of matched rules.
  absl::optional<MatchedRulesFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RulesMatchedDetails& details);
}  // namespace Results

}  // namespace GetMatchedRules

namespace SetExtensionActionOptions {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  ExtensionActionOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetExtensionActionOptions

namespace IsRegexSupported {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The regular expression to check.
  RegexOptions regex_options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const IsRegexSupportedResult& result);
}  // namespace Results

}  // namespace IsRegexSupported

namespace GetAvailableStaticRuleCount {

namespace Results {

base::Value::List Create(int count);
}  // namespace Results

}  // namespace GetAvailableStaticRuleCount

namespace TestMatchOutcome {

struct Params {
  static base::expected<Params, std::u16string> Create(const base::Value::List& args);
  // DEPRECATED: prefer the variant of this function returning errors with
  // `base::expected`.
  static absl::optional<Params> Create(const base::Value::List& args, std::u16string& error);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  TestMatchRequestDetails request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const TestMatchOutcomeResult& result);
}  // namespace Results

}  // namespace TestMatchOutcome

//
// Events
//

namespace OnRuleMatchedDebug {

extern const char kEventName[];  // "declarativeNetRequest.onRuleMatchedDebug"

// The rule that has been matched along with information about the associated
// request.
base::Value::List Create(const MatchedRuleInfoDebug& info);
}  // namespace OnRuleMatchedDebug

}  // namespace declarative_net_request
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_DECLARATIVE_NET_REQUEST_H__
