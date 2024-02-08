// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/declarative_net_request.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/declarative_net_request.h"

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
#include "tools/json_schema_compiler/manifest_parse_util.h"

#include "base/strings/string_piece.h"
#include "base/types/expected.h"
#include "extensions/common/api/extension_types.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace declarative_net_request {
//
// Properties
//

const int GUARANTEED_MINIMUM_STATIC_RULES = 30000;

const int MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES = 5000;

const int MAX_NUMBER_OF_DYNAMIC_RULES = 30000;

const int MAX_NUMBER_OF_UNSAFE_DYNAMIC_RULES = 5000;

const int MAX_NUMBER_OF_SESSION_RULES = 5000;

const int MAX_NUMBER_OF_UNSAFE_SESSION_RULES = 5000;

const int GETMATCHEDRULES_QUOTA_INTERVAL = 10;

const int MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL = 20;

const int MAX_NUMBER_OF_REGEX_RULES = 1000;

const int MAX_NUMBER_OF_STATIC_RULESETS = 100;

const int MAX_NUMBER_OF_ENABLED_STATIC_RULESETS = 50;

const char DYNAMIC_RULESET_ID[] = "_dynamic";

const char SESSION_RULESET_ID[] = "_session";

//
// Types
//

const char* ToString(ResourceType enum_param) {
  switch (enum_param) {
    case ResourceType::kMainFrame:
      return "main_frame";
    case ResourceType::kSubFrame:
      return "sub_frame";
    case ResourceType::kStylesheet:
      return "stylesheet";
    case ResourceType::kScript:
      return "script";
    case ResourceType::kImage:
      return "image";
    case ResourceType::kFont:
      return "font";
    case ResourceType::kObject:
      return "object";
    case ResourceType::kXmlhttprequest:
      return "xmlhttprequest";
    case ResourceType::kPing:
      return "ping";
    case ResourceType::kCspReport:
      return "csp_report";
    case ResourceType::kMedia:
      return "media";
    case ResourceType::kWebsocket:
      return "websocket";
    case ResourceType::kWebtransport:
      return "webtransport";
    case ResourceType::kWebbundle:
      return "webbundle";
    case ResourceType::kOther:
      return "other";
    case ResourceType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ResourceType ParseResourceType(base::StringPiece enum_string) {
  if (enum_string == "main_frame")
    return ResourceType::kMainFrame;
  if (enum_string == "sub_frame")
    return ResourceType::kSubFrame;
  if (enum_string == "stylesheet")
    return ResourceType::kStylesheet;
  if (enum_string == "script")
    return ResourceType::kScript;
  if (enum_string == "image")
    return ResourceType::kImage;
  if (enum_string == "font")
    return ResourceType::kFont;
  if (enum_string == "object")
    return ResourceType::kObject;
  if (enum_string == "xmlhttprequest")
    return ResourceType::kXmlhttprequest;
  if (enum_string == "ping")
    return ResourceType::kPing;
  if (enum_string == "csp_report")
    return ResourceType::kCspReport;
  if (enum_string == "media")
    return ResourceType::kMedia;
  if (enum_string == "websocket")
    return ResourceType::kWebsocket;
  if (enum_string == "webtransport")
    return ResourceType::kWebtransport;
  if (enum_string == "webbundle")
    return ResourceType::kWebbundle;
  if (enum_string == "other")
    return ResourceType::kOther;
  return ResourceType::kNone;
}

std::u16string GetResourceTypeParseError(base::StringPiece enum_string) {
  return u"expected \"main_frame\" or \"sub_frame\" or \"stylesheet\" or \"script\" or \"image\" or \"font\" or \"object\" or \"xmlhttprequest\" or \"ping\" or \"csp_report\" or \"media\" or \"websocket\" or \"webtransport\" or \"webbundle\" or \"other\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(RequestMethod enum_param) {
  switch (enum_param) {
    case RequestMethod::kConnect:
      return "connect";
    case RequestMethod::kDelete:
      return "delete";
    case RequestMethod::kGet:
      return "get";
    case RequestMethod::kHead:
      return "head";
    case RequestMethod::kOptions:
      return "options";
    case RequestMethod::kPatch:
      return "patch";
    case RequestMethod::kPost:
      return "post";
    case RequestMethod::kPut:
      return "put";
    case RequestMethod::kOther:
      return "other";
    case RequestMethod::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RequestMethod ParseRequestMethod(base::StringPiece enum_string) {
  if (enum_string == "connect")
    return RequestMethod::kConnect;
  if (enum_string == "delete")
    return RequestMethod::kDelete;
  if (enum_string == "get")
    return RequestMethod::kGet;
  if (enum_string == "head")
    return RequestMethod::kHead;
  if (enum_string == "options")
    return RequestMethod::kOptions;
  if (enum_string == "patch")
    return RequestMethod::kPatch;
  if (enum_string == "post")
    return RequestMethod::kPost;
  if (enum_string == "put")
    return RequestMethod::kPut;
  if (enum_string == "other")
    return RequestMethod::kOther;
  return RequestMethod::kNone;
}

std::u16string GetRequestMethodParseError(base::StringPiece enum_string) {
  return u"expected \"connect\" or \"delete\" or \"get\" or \"head\" or \"options\" or \"patch\" or \"post\" or \"put\" or \"other\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DomainType enum_param) {
  switch (enum_param) {
    case DomainType::kFirstParty:
      return "firstParty";
    case DomainType::kThirdParty:
      return "thirdParty";
    case DomainType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DomainType ParseDomainType(base::StringPiece enum_string) {
  if (enum_string == "firstParty")
    return DomainType::kFirstParty;
  if (enum_string == "thirdParty")
    return DomainType::kThirdParty;
  return DomainType::kNone;
}

std::u16string GetDomainTypeParseError(base::StringPiece enum_string) {
  return u"expected \"firstParty\" or \"thirdParty\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(HeaderOperation enum_param) {
  switch (enum_param) {
    case HeaderOperation::kAppend:
      return "append";
    case HeaderOperation::kSet:
      return "set";
    case HeaderOperation::kRemove:
      return "remove";
    case HeaderOperation::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

HeaderOperation ParseHeaderOperation(base::StringPiece enum_string) {
  if (enum_string == "append")
    return HeaderOperation::kAppend;
  if (enum_string == "set")
    return HeaderOperation::kSet;
  if (enum_string == "remove")
    return HeaderOperation::kRemove;
  return HeaderOperation::kNone;
}

std::u16string GetHeaderOperationParseError(base::StringPiece enum_string) {
  return u"expected \"append\" or \"set\" or \"remove\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(RuleActionType enum_param) {
  switch (enum_param) {
    case RuleActionType::kBlock:
      return "block";
    case RuleActionType::kRedirect:
      return "redirect";
    case RuleActionType::kAllow:
      return "allow";
    case RuleActionType::kUpgradeScheme:
      return "upgradeScheme";
    case RuleActionType::kModifyHeaders:
      return "modifyHeaders";
    case RuleActionType::kAllowAllRequests:
      return "allowAllRequests";
    case RuleActionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RuleActionType ParseRuleActionType(base::StringPiece enum_string) {
  if (enum_string == "block")
    return RuleActionType::kBlock;
  if (enum_string == "redirect")
    return RuleActionType::kRedirect;
  if (enum_string == "allow")
    return RuleActionType::kAllow;
  if (enum_string == "upgradeScheme")
    return RuleActionType::kUpgradeScheme;
  if (enum_string == "modifyHeaders")
    return RuleActionType::kModifyHeaders;
  if (enum_string == "allowAllRequests")
    return RuleActionType::kAllowAllRequests;
  return RuleActionType::kNone;
}

std::u16string GetRuleActionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"block\" or \"redirect\" or \"allow\" or \"upgradeScheme\" or \"modifyHeaders\" or \"allowAllRequests\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(UnsupportedRegexReason enum_param) {
  switch (enum_param) {
    case UnsupportedRegexReason::kSyntaxError:
      return "syntaxError";
    case UnsupportedRegexReason::kMemoryLimitExceeded:
      return "memoryLimitExceeded";
    case UnsupportedRegexReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

UnsupportedRegexReason ParseUnsupportedRegexReason(base::StringPiece enum_string) {
  if (enum_string == "syntaxError")
    return UnsupportedRegexReason::kSyntaxError;
  if (enum_string == "memoryLimitExceeded")
    return UnsupportedRegexReason::kMemoryLimitExceeded;
  return UnsupportedRegexReason::kNone;
}

std::u16string GetUnsupportedRegexReasonParseError(base::StringPiece enum_string) {
  return u"expected \"syntaxError\" or \"memoryLimitExceeded\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Ruleset::Ruleset()
: enabled(false) {}

Ruleset::~Ruleset() = default;
Ruleset::Ruleset(Ruleset&& rhs) noexcept = default;
Ruleset& Ruleset::operator=(Ruleset&& rhs) noexcept = default;
Ruleset Ruleset::Clone() const {
  Ruleset out;
  out.id = id;
  out.path = path;
  out.enabled = enabled;
  return out;
}

// static
bool Ruleset::Populate(
    const base::Value::Dict& dict, Ruleset& out, std::u16string& error) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    DCHECK(error.empty());
    error = u"'id' is required";
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'id': expected id, got " + UTF8ToUTF16(base::Value::GetTypeName((*id_value).type()));
      return false;
    }
    out.id = *temp;
  }

  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    DCHECK(error.empty());
    error = u"'path' is required";
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'path': expected path, got " + UTF8ToUTF16(base::Value::GetTypeName((*path_value).type()));
      return false;
    }
    out.path = *temp;
  }

  const base::Value* enabled_value = dict.Find("enabled");
  if (!enabled_value) {
    DCHECK(error.empty());
    error = u"'enabled' is required";
    return false;
  }
  {
    auto temp = (*enabled_value).GetIfBool();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'enabled': expected enabled, got " + UTF8ToUTF16(base::Value::GetTypeName((*enabled_value).type()));
      return false;
    }
    out.enabled = *temp;
  }

  return true;
}

// static
bool Ruleset::Populate(
    const base::Value& value, Ruleset& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Ruleset, std::u16string> Ruleset::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Ruleset out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Ruleset, std::u16string> Ruleset::FromValue(const base::Value& value) {
  std::u16string error;
  Ruleset out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Ruleset::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("path", this->path);

  to_value_result.Set("enabled", this->enabled);


  return to_value_result;
}


QueryKeyValue::QueryKeyValue()
 {}

QueryKeyValue::~QueryKeyValue() = default;
QueryKeyValue::QueryKeyValue(QueryKeyValue&& rhs) noexcept = default;
QueryKeyValue& QueryKeyValue::operator=(QueryKeyValue&& rhs) noexcept = default;
QueryKeyValue QueryKeyValue::Clone() const {
  QueryKeyValue out;
  out.key = key;
  out.value = value;
  out.replace_only = replace_only;
  return out;
}

// static
bool QueryKeyValue::Populate(
    const base::Value::Dict& dict, QueryKeyValue& out, std::u16string& error) {
  const base::Value* key_value = dict.Find("key");
  if (!key_value) {
    DCHECK(error.empty());
    error = u"'key' is required";
    return false;
  }
  {
    auto* temp = (*key_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'key': expected key, got " + UTF8ToUTF16(base::Value::GetTypeName((*key_value).type()));
      return false;
    }
    out.key = *temp;
  }

  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    DCHECK(error.empty());
    error = u"'value' is required";
    return false;
  }
  {
    auto* temp = (*value_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'value': expected value, got " + UTF8ToUTF16(base::Value::GetTypeName((*value_value).type()));
      return false;
    }
    out.value = *temp;
  }

  const base::Value* replace_only_value = dict.Find("replaceOnly");
  if (replace_only_value) {
    {
      auto temp = (*replace_only_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'replaceOnly': expected replaceOnly, got " + UTF8ToUTF16(base::Value::GetTypeName((*replace_only_value).type()));
        out.replace_only = std::nullopt;
        return false;
      }
      out.replace_only = *temp;
    }
  }

  return true;
}

// static
bool QueryKeyValue::Populate(
    const base::Value& value, QueryKeyValue& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<QueryKeyValue, std::u16string> QueryKeyValue::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  QueryKeyValue out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<QueryKeyValue, std::u16string> QueryKeyValue::FromValue(const base::Value& value) {
  std::u16string error;
  QueryKeyValue out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict QueryKeyValue::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("key", this->key);

  to_value_result.Set("value", this->value);

  if (this->replace_only) {
    to_value_result.Set("replaceOnly", *this->replace_only);

  }

  return to_value_result;
}


QueryTransform::QueryTransform()
 {}

QueryTransform::~QueryTransform() = default;
QueryTransform::QueryTransform(QueryTransform&& rhs) noexcept = default;
QueryTransform& QueryTransform::operator=(QueryTransform&& rhs) noexcept = default;
QueryTransform QueryTransform::Clone() const {
  QueryTransform out;
  out.remove_params = remove_params;
  if (add_or_replace_params) {
    out.add_or_replace_params.emplace();
    out.add_or_replace_params->reserve(add_or_replace_params->size());
    for (const auto& element : *add_or_replace_params) {
      json_schema_compiler::util::AppendToContainer(*out.add_or_replace_params, element.Clone());
    }
  }
  return out;
}

// static
bool QueryTransform::Populate(
    const base::Value::Dict& dict, QueryTransform& out, std::u16string& error) {
  const base::Value* remove_params_value = dict.Find("removeParams");
  if (remove_params_value) {
    {
      if (!(*remove_params_value).is_list()) {
        DCHECK(error.empty());
        error = u"'removeParams': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*remove_params_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*remove_params_value).GetList(), out.remove_params, array_parse_error)) {
          array_parse_error = u"Error at key 'removeParams': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* add_or_replace_params_value = dict.Find("addOrReplaceParams");
  if (add_or_replace_params_value) {
    {
      if (!(*add_or_replace_params_value).is_list()) {
        DCHECK(error.empty());
        error = u"'addOrReplaceParams': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*add_or_replace_params_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*add_or_replace_params_value).GetList(), out.add_or_replace_params, array_parse_error)) {
          array_parse_error = u"Error at key 'addOrReplaceParams': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool QueryTransform::Populate(
    const base::Value& value, QueryTransform& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<QueryTransform, std::u16string> QueryTransform::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  QueryTransform out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<QueryTransform, std::u16string> QueryTransform::FromValue(const base::Value& value) {
  std::u16string error;
  QueryTransform out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict QueryTransform::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->remove_params) {
    to_value_result.Set("removeParams", json_schema_compiler::util::CreateValueFromArray(*this->remove_params));

  }
  if (this->add_or_replace_params) {
    to_value_result.Set("addOrReplaceParams", json_schema_compiler::util::CreateValueFromArray(*this->add_or_replace_params));

  }

  return to_value_result;
}


URLTransform::URLTransform()
 {}

URLTransform::~URLTransform() = default;
URLTransform::URLTransform(URLTransform&& rhs) noexcept = default;
URLTransform& URLTransform::operator=(URLTransform&& rhs) noexcept = default;
URLTransform URLTransform::Clone() const {
  URLTransform out;
  out.scheme = scheme;
  out.host = host;
  out.port = port;
  out.path = path;
  out.query = query;
  if (query_transform) {
    out.query_transform = query_transform->Clone();
  }
  out.fragment = fragment;
  out.username = username;
  out.password = password;
  return out;
}

// static
bool URLTransform::Populate(
    const base::Value::Dict& dict, URLTransform& out, std::u16string& error) {
  const base::Value* scheme_value = dict.Find("scheme");
  if (scheme_value) {
    {
      auto* temp = (*scheme_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'scheme': expected scheme, got " + UTF8ToUTF16(base::Value::GetTypeName((*scheme_value).type()));
        out.scheme = std::nullopt;
        return false;
      }
      out.scheme = *temp;
    }
  }

  const base::Value* host_value = dict.Find("host");
  if (host_value) {
    {
      auto* temp = (*host_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'host': expected host, got " + UTF8ToUTF16(base::Value::GetTypeName((*host_value).type()));
        out.host = std::nullopt;
        return false;
      }
      out.host = *temp;
    }
  }

  const base::Value* port_value = dict.Find("port");
  if (port_value) {
    {
      auto* temp = (*port_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'port': expected port, got " + UTF8ToUTF16(base::Value::GetTypeName((*port_value).type()));
        out.port = std::nullopt;
        return false;
      }
      out.port = *temp;
    }
  }

  const base::Value* path_value = dict.Find("path");
  if (path_value) {
    {
      auto* temp = (*path_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'path': expected path, got " + UTF8ToUTF16(base::Value::GetTypeName((*path_value).type()));
        out.path = std::nullopt;
        return false;
      }
      out.path = *temp;
    }
  }

  const base::Value* query_value = dict.Find("query");
  if (query_value) {
    {
      auto* temp = (*query_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'query': expected query, got " + UTF8ToUTF16(base::Value::GetTypeName((*query_value).type()));
        out.query = std::nullopt;
        return false;
      }
      out.query = *temp;
    }
  }

  const base::Value* query_transform_value = dict.Find("queryTransform");
  if (query_transform_value) {
    {
      if (!(*query_transform_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'queryTransform': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*query_transform_value).type()));
        return false;
      }
      else {
        QueryTransform temp;
        if (!QueryTransform::Populate((*query_transform_value).GetDict(), temp, error))
          return false;
        out.query_transform = std::move(temp);
      }
    }
  }

  const base::Value* fragment_value = dict.Find("fragment");
  if (fragment_value) {
    {
      auto* temp = (*fragment_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'fragment': expected fragment, got " + UTF8ToUTF16(base::Value::GetTypeName((*fragment_value).type()));
        out.fragment = std::nullopt;
        return false;
      }
      out.fragment = *temp;
    }
  }

  const base::Value* username_value = dict.Find("username");
  if (username_value) {
    {
      auto* temp = (*username_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'username': expected username, got " + UTF8ToUTF16(base::Value::GetTypeName((*username_value).type()));
        out.username = std::nullopt;
        return false;
      }
      out.username = *temp;
    }
  }

  const base::Value* password_value = dict.Find("password");
  if (password_value) {
    {
      auto* temp = (*password_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'password': expected password, got " + UTF8ToUTF16(base::Value::GetTypeName((*password_value).type()));
        out.password = std::nullopt;
        return false;
      }
      out.password = *temp;
    }
  }

  return true;
}

// static
bool URLTransform::Populate(
    const base::Value& value, URLTransform& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<URLTransform, std::u16string> URLTransform::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  URLTransform out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<URLTransform, std::u16string> URLTransform::FromValue(const base::Value& value) {
  std::u16string error;
  URLTransform out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict URLTransform::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->scheme) {
    to_value_result.Set("scheme", *this->scheme);

  }
  if (this->host) {
    to_value_result.Set("host", *this->host);

  }
  if (this->port) {
    to_value_result.Set("port", *this->port);

  }
  if (this->path) {
    to_value_result.Set("path", *this->path);

  }
  if (this->query) {
    to_value_result.Set("query", *this->query);

  }
  if (this->query_transform) {
    to_value_result.Set("queryTransform", (this->query_transform)->ToValue());

  }
  if (this->fragment) {
    to_value_result.Set("fragment", *this->fragment);

  }
  if (this->username) {
    to_value_result.Set("username", *this->username);

  }
  if (this->password) {
    to_value_result.Set("password", *this->password);

  }

  return to_value_result;
}


Redirect::Redirect()
 {}

Redirect::~Redirect() = default;
Redirect::Redirect(Redirect&& rhs) noexcept = default;
Redirect& Redirect::operator=(Redirect&& rhs) noexcept = default;
Redirect Redirect::Clone() const {
  Redirect out;
  out.extension_path = extension_path;
  if (transform) {
    out.transform = transform->Clone();
  }
  out.url = url;
  out.regex_substitution = regex_substitution;
  return out;
}

// static
bool Redirect::Populate(
    const base::Value::Dict& dict, Redirect& out, std::u16string& error) {
  const base::Value* extension_path_value = dict.Find("extensionPath");
  if (extension_path_value) {
    {
      auto* temp = (*extension_path_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'extensionPath': expected extensionPath, got " + UTF8ToUTF16(base::Value::GetTypeName((*extension_path_value).type()));
        out.extension_path = std::nullopt;
        return false;
      }
      out.extension_path = *temp;
    }
  }

  const base::Value* transform_value = dict.Find("transform");
  if (transform_value) {
    {
      if (!(*transform_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'transform': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*transform_value).type()));
        return false;
      }
      else {
        URLTransform temp;
        if (!URLTransform::Populate((*transform_value).GetDict(), temp, error))
          return false;
        out.transform = std::move(temp);
      }
    }
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'url': expected url, got " + UTF8ToUTF16(base::Value::GetTypeName((*url_value).type()));
        out.url = std::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* regex_substitution_value = dict.Find("regexSubstitution");
  if (regex_substitution_value) {
    {
      auto* temp = (*regex_substitution_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'regexSubstitution': expected regexSubstitution, got " + UTF8ToUTF16(base::Value::GetTypeName((*regex_substitution_value).type()));
        out.regex_substitution = std::nullopt;
        return false;
      }
      out.regex_substitution = *temp;
    }
  }

  return true;
}

// static
bool Redirect::Populate(
    const base::Value& value, Redirect& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Redirect, std::u16string> Redirect::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Redirect out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Redirect, std::u16string> Redirect::FromValue(const base::Value& value) {
  std::u16string error;
  Redirect out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Redirect::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->extension_path) {
    to_value_result.Set("extensionPath", *this->extension_path);

  }
  if (this->transform) {
    to_value_result.Set("transform", (this->transform)->ToValue());

  }
  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->regex_substitution) {
    to_value_result.Set("regexSubstitution", *this->regex_substitution);

  }

  return to_value_result;
}


HeaderInfo::HeaderInfo()
 {}

HeaderInfo::~HeaderInfo() = default;
HeaderInfo::HeaderInfo(HeaderInfo&& rhs) noexcept = default;
HeaderInfo& HeaderInfo::operator=(HeaderInfo&& rhs) noexcept = default;
HeaderInfo HeaderInfo::Clone() const {
  HeaderInfo out;
  out.header = header;
  out.values = values;
  out.excluded_values = excluded_values;
  return out;
}

// static
bool HeaderInfo::Populate(
    const base::Value::Dict& dict, HeaderInfo& out, std::u16string& error) {
  const base::Value* header_value = dict.Find("header");
  if (!header_value) {
    DCHECK(error.empty());
    error = u"'header' is required";
    return false;
  }
  {
    auto* temp = (*header_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'header': expected header, got " + UTF8ToUTF16(base::Value::GetTypeName((*header_value).type()));
      return false;
    }
    out.header = *temp;
  }

  const base::Value* values_value = dict.Find("values");
  if (values_value) {
    {
      if (!(*values_value).is_list()) {
        DCHECK(error.empty());
        error = u"'values': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*values_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*values_value).GetList(), out.values, array_parse_error)) {
          array_parse_error = u"Error at key 'values': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* excluded_values_value = dict.Find("excludedValues");
  if (excluded_values_value) {
    {
      if (!(*excluded_values_value).is_list()) {
        DCHECK(error.empty());
        error = u"'excludedValues': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*excluded_values_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*excluded_values_value).GetList(), out.excluded_values, array_parse_error)) {
          array_parse_error = u"Error at key 'excludedValues': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool HeaderInfo::Populate(
    const base::Value& value, HeaderInfo& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<HeaderInfo, std::u16string> HeaderInfo::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  HeaderInfo out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<HeaderInfo, std::u16string> HeaderInfo::FromValue(const base::Value& value) {
  std::u16string error;
  HeaderInfo out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict HeaderInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("header", this->header);

  if (this->values) {
    to_value_result.Set("values", json_schema_compiler::util::CreateValueFromArray(*this->values));

  }
  if (this->excluded_values) {
    to_value_result.Set("excludedValues", json_schema_compiler::util::CreateValueFromArray(*this->excluded_values));

  }

  return to_value_result;
}


RuleCondition::RuleCondition()
: domain_type() {}

RuleCondition::~RuleCondition() = default;
RuleCondition::RuleCondition(RuleCondition&& rhs) noexcept = default;
RuleCondition& RuleCondition::operator=(RuleCondition&& rhs) noexcept = default;
RuleCondition RuleCondition::Clone() const {
  RuleCondition out;
  out.url_filter = url_filter;
  out.regex_filter = regex_filter;
  out.is_url_filter_case_sensitive = is_url_filter_case_sensitive;
  out.initiator_domains = initiator_domains;
  out.excluded_initiator_domains = excluded_initiator_domains;
  out.request_domains = request_domains;
  out.excluded_request_domains = excluded_request_domains;
  out.domains = domains;
  out.excluded_domains = excluded_domains;
  out.resource_types = resource_types;
  out.excluded_resource_types = excluded_resource_types;
  out.request_methods = request_methods;
  out.excluded_request_methods = excluded_request_methods;
  out.domain_type = domain_type;
  out.tab_ids = tab_ids;
  out.excluded_tab_ids = excluded_tab_ids;
  if (response_headers) {
    out.response_headers.emplace();
    out.response_headers->reserve(response_headers->size());
    for (const auto& element : *response_headers) {
      json_schema_compiler::util::AppendToContainer(*out.response_headers, element.Clone());
    }
  }
  if (excluded_response_headers) {
    out.excluded_response_headers.emplace();
    out.excluded_response_headers->reserve(excluded_response_headers->size());
    for (const auto& element : *excluded_response_headers) {
      json_schema_compiler::util::AppendToContainer(*out.excluded_response_headers, element.Clone());
    }
  }
  return out;
}

// static
bool RuleCondition::Populate(
    const base::Value::Dict& dict, RuleCondition& out, std::u16string& error) {
  out.domain_type = DomainType();
  const base::Value* url_filter_value = dict.Find("urlFilter");
  if (url_filter_value) {
    {
      auto* temp = (*url_filter_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'urlFilter': expected urlFilter, got " + UTF8ToUTF16(base::Value::GetTypeName((*url_filter_value).type()));
        out.url_filter = std::nullopt;
        return false;
      }
      out.url_filter = *temp;
    }
  }

  const base::Value* regex_filter_value = dict.Find("regexFilter");
  if (regex_filter_value) {
    {
      auto* temp = (*regex_filter_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'regexFilter': expected regexFilter, got " + UTF8ToUTF16(base::Value::GetTypeName((*regex_filter_value).type()));
        out.regex_filter = std::nullopt;
        return false;
      }
      out.regex_filter = *temp;
    }
  }

  const base::Value* is_url_filter_case_sensitive_value = dict.Find("isUrlFilterCaseSensitive");
  if (is_url_filter_case_sensitive_value) {
    {
      auto temp = (*is_url_filter_case_sensitive_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'isUrlFilterCaseSensitive': expected isUrlFilterCaseSensitive, got " + UTF8ToUTF16(base::Value::GetTypeName((*is_url_filter_case_sensitive_value).type()));
        out.is_url_filter_case_sensitive = std::nullopt;
        return false;
      }
      out.is_url_filter_case_sensitive = *temp;
    }
  }

  const base::Value* initiator_domains_value = dict.Find("initiatorDomains");
  if (initiator_domains_value) {
    {
      if (!(*initiator_domains_value).is_list()) {
        DCHECK(error.empty());
        error = u"'initiatorDomains': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*initiator_domains_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*initiator_domains_value).GetList(), out.initiator_domains, array_parse_error)) {
          array_parse_error = u"Error at key 'initiatorDomains': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* excluded_initiator_domains_value = dict.Find("excludedInitiatorDomains");
  if (excluded_initiator_domains_value) {
    {
      if (!(*excluded_initiator_domains_value).is_list()) {
        DCHECK(error.empty());
        error = u"'excludedInitiatorDomains': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*excluded_initiator_domains_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*excluded_initiator_domains_value).GetList(), out.excluded_initiator_domains, array_parse_error)) {
          array_parse_error = u"Error at key 'excludedInitiatorDomains': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* request_domains_value = dict.Find("requestDomains");
  if (request_domains_value) {
    {
      if (!(*request_domains_value).is_list()) {
        DCHECK(error.empty());
        error = u"'requestDomains': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*request_domains_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*request_domains_value).GetList(), out.request_domains, array_parse_error)) {
          array_parse_error = u"Error at key 'requestDomains': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* excluded_request_domains_value = dict.Find("excludedRequestDomains");
  if (excluded_request_domains_value) {
    {
      if (!(*excluded_request_domains_value).is_list()) {
        DCHECK(error.empty());
        error = u"'excludedRequestDomains': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*excluded_request_domains_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*excluded_request_domains_value).GetList(), out.excluded_request_domains, array_parse_error)) {
          array_parse_error = u"Error at key 'excludedRequestDomains': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* domains_value = dict.Find("domains");
  if (domains_value) {
    {
      if (!(*domains_value).is_list()) {
        DCHECK(error.empty());
        error = u"'domains': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*domains_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*domains_value).GetList(), out.domains, array_parse_error)) {
          array_parse_error = u"Error at key 'domains': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* excluded_domains_value = dict.Find("excludedDomains");
  if (excluded_domains_value) {
    {
      if (!(*excluded_domains_value).is_list()) {
        DCHECK(error.empty());
        error = u"'excludedDomains': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*excluded_domains_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*excluded_domains_value).GetList(), out.excluded_domains, array_parse_error)) {
          array_parse_error = u"Error at key 'excludedDomains': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* resource_types_value = dict.Find("resourceTypes");
  if (resource_types_value) {
    {
      if (!(*resource_types_value).is_list()) {
        DCHECK(error.empty());
        error = u"'resourceTypes': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*resource_types_value).type()));
        return false;
      }
      else {
        out.resource_types.emplace();
        for (const auto& it : ((*resource_types_value)).GetList()) {
          ResourceType tmp;
          const std::string* resource_type_as_string = (it).GetIfString();
          if (!resource_type_as_string) {
            DCHECK(error.empty());
            error = u"'ResourceType': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((it).type()));
            return false;
          }
          tmp = ParseResourceType(*resource_type_as_string);
          if (tmp == ResourceType()) {
            DCHECK(error.empty());
            error = u"'ResourceType': " + GetResourceTypeParseError(*resource_type_as_string);
            return false;
          }
          out.resource_types->push_back(tmp);
        }
      }
    }
  }

  const base::Value* excluded_resource_types_value = dict.Find("excludedResourceTypes");
  if (excluded_resource_types_value) {
    {
      if (!(*excluded_resource_types_value).is_list()) {
        DCHECK(error.empty());
        error = u"'excludedResourceTypes': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*excluded_resource_types_value).type()));
        return false;
      }
      else {
        out.excluded_resource_types.emplace();
        for (const auto& it : ((*excluded_resource_types_value)).GetList()) {
          ResourceType tmp;
          const std::string* resource_type_as_string = (it).GetIfString();
          if (!resource_type_as_string) {
            DCHECK(error.empty());
            error = u"'ResourceType': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((it).type()));
            return false;
          }
          tmp = ParseResourceType(*resource_type_as_string);
          if (tmp == ResourceType()) {
            DCHECK(error.empty());
            error = u"'ResourceType': " + GetResourceTypeParseError(*resource_type_as_string);
            return false;
          }
          out.excluded_resource_types->push_back(tmp);
        }
      }
    }
  }

  const base::Value* request_methods_value = dict.Find("requestMethods");
  if (request_methods_value) {
    {
      if (!(*request_methods_value).is_list()) {
        DCHECK(error.empty());
        error = u"'requestMethods': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*request_methods_value).type()));
        return false;
      }
      else {
        out.request_methods.emplace();
        for (const auto& it : ((*request_methods_value)).GetList()) {
          RequestMethod tmp;
          const std::string* request_method_as_string = (it).GetIfString();
          if (!request_method_as_string) {
            DCHECK(error.empty());
            error = u"'RequestMethod': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((it).type()));
            return false;
          }
          tmp = ParseRequestMethod(*request_method_as_string);
          if (tmp == RequestMethod()) {
            DCHECK(error.empty());
            error = u"'RequestMethod': " + GetRequestMethodParseError(*request_method_as_string);
            return false;
          }
          out.request_methods->push_back(tmp);
        }
      }
    }
  }

  const base::Value* excluded_request_methods_value = dict.Find("excludedRequestMethods");
  if (excluded_request_methods_value) {
    {
      if (!(*excluded_request_methods_value).is_list()) {
        DCHECK(error.empty());
        error = u"'excludedRequestMethods': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*excluded_request_methods_value).type()));
        return false;
      }
      else {
        out.excluded_request_methods.emplace();
        for (const auto& it : ((*excluded_request_methods_value)).GetList()) {
          RequestMethod tmp;
          const std::string* request_method_as_string = (it).GetIfString();
          if (!request_method_as_string) {
            DCHECK(error.empty());
            error = u"'RequestMethod': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((it).type()));
            return false;
          }
          tmp = ParseRequestMethod(*request_method_as_string);
          if (tmp == RequestMethod()) {
            DCHECK(error.empty());
            error = u"'RequestMethod': " + GetRequestMethodParseError(*request_method_as_string);
            return false;
          }
          out.excluded_request_methods->push_back(tmp);
        }
      }
    }
  }

  const base::Value* domain_type_value = dict.Find("domainType");
  if (domain_type_value) {
    {
      const std::string* domain_type_as_string = (*domain_type_value).GetIfString();
      if (!domain_type_as_string) {
        DCHECK(error.empty());
        error = u"'DomainType': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*domain_type_value).type()));
        return false;
      }
      out.domain_type = ParseDomainType(*domain_type_as_string);
      if (out.domain_type == DomainType()) {
        DCHECK(error.empty());
        error = u"'DomainType': " + GetDomainTypeParseError(*domain_type_as_string);
        return false;
      }
    }
    } else {
    out.domain_type = DomainType();
  }

  const base::Value* tab_ids_value = dict.Find("tabIds");
  if (tab_ids_value) {
    {
      if (!(*tab_ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'tabIds': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*tab_ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*tab_ids_value).GetList(), out.tab_ids, array_parse_error)) {
          array_parse_error = u"Error at key 'tabIds': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* excluded_tab_ids_value = dict.Find("excludedTabIds");
  if (excluded_tab_ids_value) {
    {
      if (!(*excluded_tab_ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'excludedTabIds': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*excluded_tab_ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*excluded_tab_ids_value).GetList(), out.excluded_tab_ids, array_parse_error)) {
          array_parse_error = u"Error at key 'excludedTabIds': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* response_headers_value = dict.Find("responseHeaders");
  if (response_headers_value) {
    {
      if (!(*response_headers_value).is_list()) {
        DCHECK(error.empty());
        error = u"'responseHeaders': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*response_headers_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*response_headers_value).GetList(), out.response_headers, array_parse_error)) {
          array_parse_error = u"Error at key 'responseHeaders': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* excluded_response_headers_value = dict.Find("excludedResponseHeaders");
  if (excluded_response_headers_value) {
    {
      if (!(*excluded_response_headers_value).is_list()) {
        DCHECK(error.empty());
        error = u"'excludedResponseHeaders': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*excluded_response_headers_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*excluded_response_headers_value).GetList(), out.excluded_response_headers, array_parse_error)) {
          array_parse_error = u"Error at key 'excludedResponseHeaders': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool RuleCondition::Populate(
    const base::Value& value, RuleCondition& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<RuleCondition, std::u16string> RuleCondition::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  RuleCondition out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<RuleCondition, std::u16string> RuleCondition::FromValue(const base::Value& value) {
  std::u16string error;
  RuleCondition out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict RuleCondition::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->url_filter) {
    to_value_result.Set("urlFilter", *this->url_filter);

  }
  if (this->regex_filter) {
    to_value_result.Set("regexFilter", *this->regex_filter);

  }
  if (this->is_url_filter_case_sensitive) {
    to_value_result.Set("isUrlFilterCaseSensitive", *this->is_url_filter_case_sensitive);

  }
  if (this->initiator_domains) {
    to_value_result.Set("initiatorDomains", json_schema_compiler::util::CreateValueFromArray(*this->initiator_domains));

  }
  if (this->excluded_initiator_domains) {
    to_value_result.Set("excludedInitiatorDomains", json_schema_compiler::util::CreateValueFromArray(*this->excluded_initiator_domains));

  }
  if (this->request_domains) {
    to_value_result.Set("requestDomains", json_schema_compiler::util::CreateValueFromArray(*this->request_domains));

  }
  if (this->excluded_request_domains) {
    to_value_result.Set("excludedRequestDomains", json_schema_compiler::util::CreateValueFromArray(*this->excluded_request_domains));

  }
  if (this->domains) {
    to_value_result.Set("domains", json_schema_compiler::util::CreateValueFromArray(*this->domains));

  }
  if (this->excluded_domains) {
    to_value_result.Set("excludedDomains", json_schema_compiler::util::CreateValueFromArray(*this->excluded_domains));

  }
  if (this->resource_types) {
    {
      std::vector<std::string> resourceTypes_list;
      for (const auto& it : *(this->resource_types)) {
        resourceTypes_list.emplace_back(declarative_net_request::ToString(it));
      }
      to_value_result.Set("resourceTypes", json_schema_compiler::util::CreateValueFromArray(resourceTypes_list));
    }

  }
  if (this->excluded_resource_types) {
    {
      std::vector<std::string> excludedResourceTypes_list;
      for (const auto& it : *(this->excluded_resource_types)) {
        excludedResourceTypes_list.emplace_back(declarative_net_request::ToString(it));
      }
      to_value_result.Set("excludedResourceTypes", json_schema_compiler::util::CreateValueFromArray(excludedResourceTypes_list));
    }

  }
  if (this->request_methods) {
    {
      std::vector<std::string> requestMethods_list;
      for (const auto& it : *(this->request_methods)) {
        requestMethods_list.emplace_back(declarative_net_request::ToString(it));
      }
      to_value_result.Set("requestMethods", json_schema_compiler::util::CreateValueFromArray(requestMethods_list));
    }

  }
  if (this->excluded_request_methods) {
    {
      std::vector<std::string> excludedRequestMethods_list;
      for (const auto& it : *(this->excluded_request_methods)) {
        excludedRequestMethods_list.emplace_back(declarative_net_request::ToString(it));
      }
      to_value_result.Set("excludedRequestMethods", json_schema_compiler::util::CreateValueFromArray(excludedRequestMethods_list));
    }

  }
  if (this->domain_type != DomainType()) {
    to_value_result.Set("domainType", declarative_net_request::ToString(this->domain_type));

  }
  if (this->tab_ids) {
    to_value_result.Set("tabIds", json_schema_compiler::util::CreateValueFromArray(*this->tab_ids));

  }
  if (this->excluded_tab_ids) {
    to_value_result.Set("excludedTabIds", json_schema_compiler::util::CreateValueFromArray(*this->excluded_tab_ids));

  }
  if (this->response_headers) {
    to_value_result.Set("responseHeaders", json_schema_compiler::util::CreateValueFromArray(*this->response_headers));

  }
  if (this->excluded_response_headers) {
    to_value_result.Set("excludedResponseHeaders", json_schema_compiler::util::CreateValueFromArray(*this->excluded_response_headers));

  }

  return to_value_result;
}


ModifyHeaderInfo::ModifyHeaderInfo()
: operation() {}

ModifyHeaderInfo::~ModifyHeaderInfo() = default;
ModifyHeaderInfo::ModifyHeaderInfo(ModifyHeaderInfo&& rhs) noexcept = default;
ModifyHeaderInfo& ModifyHeaderInfo::operator=(ModifyHeaderInfo&& rhs) noexcept = default;
ModifyHeaderInfo ModifyHeaderInfo::Clone() const {
  ModifyHeaderInfo out;
  out.header = header;
  out.operation = operation;
  out.value = value;
  return out;
}

// static
bool ModifyHeaderInfo::Populate(
    const base::Value::Dict& dict, ModifyHeaderInfo& out, std::u16string& error) {
  const base::Value* header_value = dict.Find("header");
  if (!header_value) {
    DCHECK(error.empty());
    error = u"'header' is required";
    return false;
  }
  {
    auto* temp = (*header_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'header': expected header, got " + UTF8ToUTF16(base::Value::GetTypeName((*header_value).type()));
      return false;
    }
    out.header = *temp;
  }

  const base::Value* operation_value = dict.Find("operation");
  if (!operation_value) {
    DCHECK(error.empty());
    error = u"'operation' is required";
    return false;
  }
  {
    const std::string* header_operation_as_string = (*operation_value).GetIfString();
    if (!header_operation_as_string) {
      DCHECK(error.empty());
      error = u"'HeaderOperation': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*operation_value).type()));
      return false;
    }
    out.operation = ParseHeaderOperation(*header_operation_as_string);
    if (out.operation == HeaderOperation()) {
      DCHECK(error.empty());
      error = u"'HeaderOperation': " + GetHeaderOperationParseError(*header_operation_as_string);
      return false;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      auto* temp = (*value_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'value': expected value, got " + UTF8ToUTF16(base::Value::GetTypeName((*value_value).type()));
        out.value = std::nullopt;
        return false;
      }
      out.value = *temp;
    }
  }

  return true;
}

// static
bool ModifyHeaderInfo::Populate(
    const base::Value& value, ModifyHeaderInfo& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ModifyHeaderInfo, std::u16string> ModifyHeaderInfo::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  ModifyHeaderInfo out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ModifyHeaderInfo, std::u16string> ModifyHeaderInfo::FromValue(const base::Value& value) {
  std::u16string error;
  ModifyHeaderInfo out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict ModifyHeaderInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("header", this->header);

  to_value_result.Set("operation", declarative_net_request::ToString(this->operation));

  if (this->value) {
    to_value_result.Set("value", *this->value);

  }

  return to_value_result;
}


RuleAction::RuleAction()
: type() {}

RuleAction::~RuleAction() = default;
RuleAction::RuleAction(RuleAction&& rhs) noexcept = default;
RuleAction& RuleAction::operator=(RuleAction&& rhs) noexcept = default;
RuleAction RuleAction::Clone() const {
  RuleAction out;
  out.type = type;
  if (redirect) {
    out.redirect = redirect->Clone();
  }
  if (request_headers) {
    out.request_headers.emplace();
    out.request_headers->reserve(request_headers->size());
    for (const auto& element : *request_headers) {
      json_schema_compiler::util::AppendToContainer(*out.request_headers, element.Clone());
    }
  }
  if (response_headers) {
    out.response_headers.emplace();
    out.response_headers->reserve(response_headers->size());
    for (const auto& element : *response_headers) {
      json_schema_compiler::util::AppendToContainer(*out.response_headers, element.Clone());
    }
  }
  return out;
}

// static
bool RuleAction::Populate(
    const base::Value::Dict& dict, RuleAction& out, std::u16string& error) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    DCHECK(error.empty());
    error = u"'type' is required";
    return false;
  }
  {
    const std::string* rule_action_type_as_string = (*type_value).GetIfString();
    if (!rule_action_type_as_string) {
      DCHECK(error.empty());
      error = u"'RuleActionType': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*type_value).type()));
      return false;
    }
    out.type = ParseRuleActionType(*rule_action_type_as_string);
    if (out.type == RuleActionType()) {
      DCHECK(error.empty());
      error = u"'RuleActionType': " + GetRuleActionTypeParseError(*rule_action_type_as_string);
      return false;
    }
  }

  const base::Value* redirect_value = dict.Find("redirect");
  if (redirect_value) {
    {
      if (!(*redirect_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'redirect': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*redirect_value).type()));
        return false;
      }
      else {
        Redirect temp;
        if (!Redirect::Populate((*redirect_value).GetDict(), temp, error))
          return false;
        out.redirect = std::move(temp);
      }
    }
  }

  const base::Value* request_headers_value = dict.Find("requestHeaders");
  if (request_headers_value) {
    {
      if (!(*request_headers_value).is_list()) {
        DCHECK(error.empty());
        error = u"'requestHeaders': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*request_headers_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*request_headers_value).GetList(), out.request_headers, array_parse_error)) {
          array_parse_error = u"Error at key 'requestHeaders': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* response_headers_value = dict.Find("responseHeaders");
  if (response_headers_value) {
    {
      if (!(*response_headers_value).is_list()) {
        DCHECK(error.empty());
        error = u"'responseHeaders': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*response_headers_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*response_headers_value).GetList(), out.response_headers, array_parse_error)) {
          array_parse_error = u"Error at key 'responseHeaders': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool RuleAction::Populate(
    const base::Value& value, RuleAction& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<RuleAction, std::u16string> RuleAction::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  RuleAction out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<RuleAction, std::u16string> RuleAction::FromValue(const base::Value& value) {
  std::u16string error;
  RuleAction out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict RuleAction::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", declarative_net_request::ToString(this->type));

  if (this->redirect) {
    to_value_result.Set("redirect", (this->redirect)->ToValue());

  }
  if (this->request_headers) {
    to_value_result.Set("requestHeaders", json_schema_compiler::util::CreateValueFromArray(*this->request_headers));

  }
  if (this->response_headers) {
    to_value_result.Set("responseHeaders", json_schema_compiler::util::CreateValueFromArray(*this->response_headers));

  }

  return to_value_result;
}


Rule::Rule()
: id(0) {}

Rule::~Rule() = default;
Rule::Rule(Rule&& rhs) noexcept = default;
Rule& Rule::operator=(Rule&& rhs) noexcept = default;
Rule Rule::Clone() const {
  Rule out;
  out.id = id;
  out.priority = priority;
  out.condition = condition.Clone();
  out.action = action.Clone();
  return out;
}

// static
bool Rule::Populate(
    const base::Value::Dict& dict, Rule& out, std::u16string& error) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    DCHECK(error.empty());
    error = u"'id' is required";
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'id': expected id, got " + UTF8ToUTF16(base::Value::GetTypeName((*id_value).type()));
      return false;
    }
    out.id = *temp;
  }

  const base::Value* priority_value = dict.Find("priority");
  if (priority_value) {
    {
      auto temp = (*priority_value).GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'priority': expected priority, got " + UTF8ToUTF16(base::Value::GetTypeName((*priority_value).type()));
        out.priority = std::nullopt;
        return false;
      }
      out.priority = *temp;
    }
  }

  const base::Value* condition_value = dict.Find("condition");
  if (!condition_value) {
    DCHECK(error.empty());
    error = u"'condition' is required";
    return false;
  }
  {
    if (!(*condition_value).is_dict()) {
      DCHECK(error.empty());
      error = u"'condition': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*condition_value).type()));
      return false;
    }
    if (!RuleCondition::Populate((*condition_value).GetDict(), out.condition, error)) {
      return false;
    }
  }

  const base::Value* action_value = dict.Find("action");
  if (!action_value) {
    DCHECK(error.empty());
    error = u"'action' is required";
    return false;
  }
  {
    if (!(*action_value).is_dict()) {
      DCHECK(error.empty());
      error = u"'action': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*action_value).type()));
      return false;
    }
    if (!RuleAction::Populate((*action_value).GetDict(), out.action, error)) {
      return false;
    }
  }

  return true;
}

// static
bool Rule::Populate(
    const base::Value& value, Rule& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Rule, std::u16string> Rule::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Rule out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Rule, std::u16string> Rule::FromValue(const base::Value& value) {
  std::u16string error;
  Rule out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Rule::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->priority) {
    to_value_result.Set("priority", *this->priority);

  }
  to_value_result.Set("condition", (this->condition).ToValue());

  to_value_result.Set("action", (this->action).ToValue());


  return to_value_result;
}


MatchedRule::MatchedRule()
: rule_id(0) {}

MatchedRule::~MatchedRule() = default;
MatchedRule::MatchedRule(MatchedRule&& rhs) noexcept = default;
MatchedRule& MatchedRule::operator=(MatchedRule&& rhs) noexcept = default;
MatchedRule MatchedRule::Clone() const {
  MatchedRule out;
  out.rule_id = rule_id;
  out.ruleset_id = ruleset_id;
  return out;
}

// static
bool MatchedRule::Populate(
    const base::Value::Dict& dict, MatchedRule& out, std::u16string& error) {
  const base::Value* rule_id_value = dict.Find("ruleId");
  if (!rule_id_value) {
    DCHECK(error.empty());
    error = u"'ruleId' is required";
    return false;
  }
  {
    auto temp = (*rule_id_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'ruleId': expected ruleId, got " + UTF8ToUTF16(base::Value::GetTypeName((*rule_id_value).type()));
      return false;
    }
    out.rule_id = *temp;
  }

  const base::Value* ruleset_id_value = dict.Find("rulesetId");
  if (!ruleset_id_value) {
    DCHECK(error.empty());
    error = u"'rulesetId' is required";
    return false;
  }
  {
    auto* temp = (*ruleset_id_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'rulesetId': expected rulesetId, got " + UTF8ToUTF16(base::Value::GetTypeName((*ruleset_id_value).type()));
      return false;
    }
    out.ruleset_id = *temp;
  }

  return true;
}

// static
bool MatchedRule::Populate(
    const base::Value& value, MatchedRule& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<MatchedRule, std::u16string> MatchedRule::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  MatchedRule out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<MatchedRule, std::u16string> MatchedRule::FromValue(const base::Value& value) {
  std::u16string error;
  MatchedRule out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict MatchedRule::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("ruleId", this->rule_id);

  to_value_result.Set("rulesetId", this->ruleset_id);


  return to_value_result;
}


GetRulesFilter::GetRulesFilter()
 {}

GetRulesFilter::~GetRulesFilter() = default;
GetRulesFilter::GetRulesFilter(GetRulesFilter&& rhs) noexcept = default;
GetRulesFilter& GetRulesFilter::operator=(GetRulesFilter&& rhs) noexcept = default;
GetRulesFilter GetRulesFilter::Clone() const {
  GetRulesFilter out;
  out.rule_ids = rule_ids;
  return out;
}

// static
bool GetRulesFilter::Populate(
    const base::Value::Dict& dict, GetRulesFilter& out, std::u16string& error) {
  const base::Value* rule_ids_value = dict.Find("ruleIds");
  if (rule_ids_value) {
    {
      if (!(*rule_ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'ruleIds': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*rule_ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*rule_ids_value).GetList(), out.rule_ids, array_parse_error)) {
          array_parse_error = u"Error at key 'ruleIds': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool GetRulesFilter::Populate(
    const base::Value& value, GetRulesFilter& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<GetRulesFilter, std::u16string> GetRulesFilter::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  GetRulesFilter out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<GetRulesFilter, std::u16string> GetRulesFilter::FromValue(const base::Value& value) {
  std::u16string error;
  GetRulesFilter out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict GetRulesFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->rule_ids) {
    to_value_result.Set("ruleIds", json_schema_compiler::util::CreateValueFromArray(*this->rule_ids));

  }

  return to_value_result;
}


MatchedRuleInfo::MatchedRuleInfo()
: time_stamp(0.0),
tab_id(0) {}

MatchedRuleInfo::~MatchedRuleInfo() = default;
MatchedRuleInfo::MatchedRuleInfo(MatchedRuleInfo&& rhs) noexcept = default;
MatchedRuleInfo& MatchedRuleInfo::operator=(MatchedRuleInfo&& rhs) noexcept = default;
MatchedRuleInfo MatchedRuleInfo::Clone() const {
  MatchedRuleInfo out;
  out.rule = rule.Clone();
  out.time_stamp = time_stamp;
  out.tab_id = tab_id;
  return out;
}

// static
bool MatchedRuleInfo::Populate(
    const base::Value::Dict& dict, MatchedRuleInfo& out, std::u16string& error) {
  const base::Value* rule_value = dict.Find("rule");
  if (!rule_value) {
    DCHECK(error.empty());
    error = u"'rule' is required";
    return false;
  }
  {
    if (!(*rule_value).is_dict()) {
      DCHECK(error.empty());
      error = u"'rule': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*rule_value).type()));
      return false;
    }
    if (!MatchedRule::Populate((*rule_value).GetDict(), out.rule, error)) {
      return false;
    }
  }

  const base::Value* time_stamp_value = dict.Find("timeStamp");
  if (!time_stamp_value) {
    DCHECK(error.empty());
    error = u"'timeStamp' is required";
    return false;
  }
  {
    auto temp = (*time_stamp_value).GetIfDouble();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'timeStamp': expected timeStamp, got " + UTF8ToUTF16(base::Value::GetTypeName((*time_stamp_value).type()));
      return false;
    }
    out.time_stamp = *temp;
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    DCHECK(error.empty());
    error = u"'tabId' is required";
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'tabId': expected tabId, got " + UTF8ToUTF16(base::Value::GetTypeName((*tab_id_value).type()));
      return false;
    }
    out.tab_id = *temp;
  }

  return true;
}

// static
bool MatchedRuleInfo::Populate(
    const base::Value& value, MatchedRuleInfo& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<MatchedRuleInfo, std::u16string> MatchedRuleInfo::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  MatchedRuleInfo out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<MatchedRuleInfo, std::u16string> MatchedRuleInfo::FromValue(const base::Value& value) {
  std::u16string error;
  MatchedRuleInfo out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict MatchedRuleInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("rule", (this->rule).ToValue());

  to_value_result.Set("timeStamp", this->time_stamp);

  to_value_result.Set("tabId", this->tab_id);


  return to_value_result;
}


MatchedRulesFilter::MatchedRulesFilter()
 {}

MatchedRulesFilter::~MatchedRulesFilter() = default;
MatchedRulesFilter::MatchedRulesFilter(MatchedRulesFilter&& rhs) noexcept = default;
MatchedRulesFilter& MatchedRulesFilter::operator=(MatchedRulesFilter&& rhs) noexcept = default;
MatchedRulesFilter MatchedRulesFilter::Clone() const {
  MatchedRulesFilter out;
  out.tab_id = tab_id;
  out.min_time_stamp = min_time_stamp;
  return out;
}

// static
bool MatchedRulesFilter::Populate(
    const base::Value::Dict& dict, MatchedRulesFilter& out, std::u16string& error) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'tabId': expected tabId, got " + UTF8ToUTF16(base::Value::GetTypeName((*tab_id_value).type()));
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  const base::Value* min_time_stamp_value = dict.Find("minTimeStamp");
  if (min_time_stamp_value) {
    {
      auto temp = (*min_time_stamp_value).GetIfDouble();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'minTimeStamp': expected minTimeStamp, got " + UTF8ToUTF16(base::Value::GetTypeName((*min_time_stamp_value).type()));
        out.min_time_stamp = std::nullopt;
        return false;
      }
      out.min_time_stamp = *temp;
    }
  }

  return true;
}

// static
bool MatchedRulesFilter::Populate(
    const base::Value& value, MatchedRulesFilter& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<MatchedRulesFilter, std::u16string> MatchedRulesFilter::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  MatchedRulesFilter out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<MatchedRulesFilter, std::u16string> MatchedRulesFilter::FromValue(const base::Value& value) {
  std::u16string error;
  MatchedRulesFilter out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict MatchedRulesFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }
  if (this->min_time_stamp) {
    to_value_result.Set("minTimeStamp", *this->min_time_stamp);

  }

  return to_value_result;
}


RulesMatchedDetails::RulesMatchedDetails()
 {}

RulesMatchedDetails::~RulesMatchedDetails() = default;
RulesMatchedDetails::RulesMatchedDetails(RulesMatchedDetails&& rhs) noexcept = default;
RulesMatchedDetails& RulesMatchedDetails::operator=(RulesMatchedDetails&& rhs) noexcept = default;
RulesMatchedDetails RulesMatchedDetails::Clone() const {
  RulesMatchedDetails out;
  out.rules_matched_info.reserve(rules_matched_info.size());
  for (const auto& element : rules_matched_info) {
    json_schema_compiler::util::AppendToContainer(out.rules_matched_info, element.Clone());
  }
  return out;
}

// static
bool RulesMatchedDetails::Populate(
    const base::Value::Dict& dict, RulesMatchedDetails& out, std::u16string& error) {
  const base::Value* rules_matched_info_value = dict.Find("rulesMatchedInfo");
  if (!rules_matched_info_value) {
    DCHECK(error.empty());
    error = u"'rulesMatchedInfo' is required";
    return false;
  }
  {
    if (!(*rules_matched_info_value).is_list()) {
      DCHECK(error.empty());
      error = u"'rulesMatchedInfo': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*rules_matched_info_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*rules_matched_info_value).GetList(), out.rules_matched_info, array_parse_error)) {
        array_parse_error = u"Error at key 'rulesMatchedInfo': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  return true;
}

// static
bool RulesMatchedDetails::Populate(
    const base::Value& value, RulesMatchedDetails& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<RulesMatchedDetails, std::u16string> RulesMatchedDetails::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  RulesMatchedDetails out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<RulesMatchedDetails, std::u16string> RulesMatchedDetails::FromValue(const base::Value& value) {
  std::u16string error;
  RulesMatchedDetails out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict RulesMatchedDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("rulesMatchedInfo", json_schema_compiler::util::CreateValueFromArray(this->rules_matched_info));


  return to_value_result;
}


RequestDetails::RequestDetails()
: frame_id(0),
frame_type(),
document_lifecycle(),
parent_frame_id(0),
tab_id(0),
type() {}

RequestDetails::~RequestDetails() = default;
RequestDetails::RequestDetails(RequestDetails&& rhs) noexcept = default;
RequestDetails& RequestDetails::operator=(RequestDetails&& rhs) noexcept = default;
RequestDetails RequestDetails::Clone() const {
  RequestDetails out;
  out.request_id = request_id;
  out.url = url;
  out.initiator = initiator;
  out.method = method;
  out.frame_id = frame_id;
  out.document_id = document_id;
  out.frame_type = frame_type;
  out.document_lifecycle = document_lifecycle;
  out.parent_frame_id = parent_frame_id;
  out.parent_document_id = parent_document_id;
  out.tab_id = tab_id;
  out.type = type;
  return out;
}

// static
bool RequestDetails::Populate(
    const base::Value::Dict& dict, RequestDetails& out, std::u16string& error) {
  out.frame_type = extensions::api::extension_types::FrameType();
  out.document_lifecycle = extensions::api::extension_types::DocumentLifecycle();
  const base::Value* request_id_value = dict.Find("requestId");
  if (!request_id_value) {
    DCHECK(error.empty());
    error = u"'requestId' is required";
    return false;
  }
  {
    auto* temp = (*request_id_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'requestId': expected requestId, got " + UTF8ToUTF16(base::Value::GetTypeName((*request_id_value).type()));
      return false;
    }
    out.request_id = *temp;
  }

  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    DCHECK(error.empty());
    error = u"'url' is required";
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'url': expected url, got " + UTF8ToUTF16(base::Value::GetTypeName((*url_value).type()));
      return false;
    }
    out.url = *temp;
  }

  const base::Value* initiator_value = dict.Find("initiator");
  if (initiator_value) {
    {
      auto* temp = (*initiator_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'initiator': expected initiator, got " + UTF8ToUTF16(base::Value::GetTypeName((*initiator_value).type()));
        out.initiator = std::nullopt;
        return false;
      }
      out.initiator = *temp;
    }
  }

  const base::Value* method_value = dict.Find("method");
  if (!method_value) {
    DCHECK(error.empty());
    error = u"'method' is required";
    return false;
  }
  {
    auto* temp = (*method_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'method': expected method, got " + UTF8ToUTF16(base::Value::GetTypeName((*method_value).type()));
      return false;
    }
    out.method = *temp;
  }

  const base::Value* frame_id_value = dict.Find("frameId");
  if (!frame_id_value) {
    DCHECK(error.empty());
    error = u"'frameId' is required";
    return false;
  }
  {
    auto temp = (*frame_id_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'frameId': expected frameId, got " + UTF8ToUTF16(base::Value::GetTypeName((*frame_id_value).type()));
      return false;
    }
    out.frame_id = *temp;
  }

  const base::Value* document_id_value = dict.Find("documentId");
  if (document_id_value) {
    {
      auto* temp = (*document_id_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'documentId': expected documentId, got " + UTF8ToUTF16(base::Value::GetTypeName((*document_id_value).type()));
        out.document_id = std::nullopt;
        return false;
      }
      out.document_id = *temp;
    }
  }

  const base::Value* frame_type_value = dict.Find("frameType");
  if (frame_type_value) {
    {
      const std::string* frame_type_as_string = (*frame_type_value).GetIfString();
      if (!frame_type_as_string) {
        DCHECK(error.empty());
        error = u"'FrameType': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*frame_type_value).type()));
        return false;
      }
      out.frame_type = extensions::api::extension_types::ParseFrameType(*frame_type_as_string);
      if (out.frame_type == extensions::api::extension_types::FrameType()) {
        DCHECK(error.empty());
        error = u"'FrameType': " + extensions::api::extension_types::GetFrameTypeParseError(*frame_type_as_string);
        return false;
      }
    }
    } else {
    out.frame_type = extensions::api::extension_types::FrameType();
  }

  const base::Value* document_lifecycle_value = dict.Find("documentLifecycle");
  if (document_lifecycle_value) {
    {
      const std::string* document_lifecycle_as_string = (*document_lifecycle_value).GetIfString();
      if (!document_lifecycle_as_string) {
        DCHECK(error.empty());
        error = u"'DocumentLifecycle': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*document_lifecycle_value).type()));
        return false;
      }
      out.document_lifecycle = extensions::api::extension_types::ParseDocumentLifecycle(*document_lifecycle_as_string);
      if (out.document_lifecycle == extensions::api::extension_types::DocumentLifecycle()) {
        DCHECK(error.empty());
        error = u"'DocumentLifecycle': " + extensions::api::extension_types::GetDocumentLifecycleParseError(*document_lifecycle_as_string);
        return false;
      }
    }
    } else {
    out.document_lifecycle = extensions::api::extension_types::DocumentLifecycle();
  }

  const base::Value* parent_frame_id_value = dict.Find("parentFrameId");
  if (!parent_frame_id_value) {
    DCHECK(error.empty());
    error = u"'parentFrameId' is required";
    return false;
  }
  {
    auto temp = (*parent_frame_id_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'parentFrameId': expected parentFrameId, got " + UTF8ToUTF16(base::Value::GetTypeName((*parent_frame_id_value).type()));
      return false;
    }
    out.parent_frame_id = *temp;
  }

  const base::Value* parent_document_id_value = dict.Find("parentDocumentId");
  if (parent_document_id_value) {
    {
      auto* temp = (*parent_document_id_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'parentDocumentId': expected parentDocumentId, got " + UTF8ToUTF16(base::Value::GetTypeName((*parent_document_id_value).type()));
        out.parent_document_id = std::nullopt;
        return false;
      }
      out.parent_document_id = *temp;
    }
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    DCHECK(error.empty());
    error = u"'tabId' is required";
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'tabId': expected tabId, got " + UTF8ToUTF16(base::Value::GetTypeName((*tab_id_value).type()));
      return false;
    }
    out.tab_id = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    DCHECK(error.empty());
    error = u"'type' is required";
    return false;
  }
  {
    const std::string* resource_type_as_string = (*type_value).GetIfString();
    if (!resource_type_as_string) {
      DCHECK(error.empty());
      error = u"'ResourceType': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*type_value).type()));
      return false;
    }
    out.type = ParseResourceType(*resource_type_as_string);
    if (out.type == ResourceType()) {
      DCHECK(error.empty());
      error = u"'ResourceType': " + GetResourceTypeParseError(*resource_type_as_string);
      return false;
    }
  }

  return true;
}

// static
bool RequestDetails::Populate(
    const base::Value& value, RequestDetails& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<RequestDetails, std::u16string> RequestDetails::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  RequestDetails out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<RequestDetails, std::u16string> RequestDetails::FromValue(const base::Value& value) {
  std::u16string error;
  RequestDetails out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict RequestDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("requestId", this->request_id);

  to_value_result.Set("url", this->url);

  if (this->initiator) {
    to_value_result.Set("initiator", *this->initiator);

  }
  to_value_result.Set("method", this->method);

  to_value_result.Set("frameId", this->frame_id);

  if (this->document_id) {
    to_value_result.Set("documentId", *this->document_id);

  }
  if (this->frame_type != extensions::api::extension_types::FrameType()) {
    to_value_result.Set("frameType", extension_types::ToString(this->frame_type));

  }
  if (this->document_lifecycle != extensions::api::extension_types::DocumentLifecycle()) {
    to_value_result.Set("documentLifecycle", extension_types::ToString(this->document_lifecycle));

  }
  to_value_result.Set("parentFrameId", this->parent_frame_id);

  if (this->parent_document_id) {
    to_value_result.Set("parentDocumentId", *this->parent_document_id);

  }
  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("type", declarative_net_request::ToString(this->type));


  return to_value_result;
}


TestMatchRequestDetails::TestMatchRequestDetails()
: method(),
type() {}

TestMatchRequestDetails::~TestMatchRequestDetails() = default;
TestMatchRequestDetails::TestMatchRequestDetails(TestMatchRequestDetails&& rhs) noexcept = default;
TestMatchRequestDetails& TestMatchRequestDetails::operator=(TestMatchRequestDetails&& rhs) noexcept = default;
TestMatchRequestDetails TestMatchRequestDetails::Clone() const {
  TestMatchRequestDetails out;
  out.url = url;
  out.initiator = initiator;
  out.method = method;
  out.type = type;
  out.tab_id = tab_id;
  return out;
}

// static
bool TestMatchRequestDetails::Populate(
    const base::Value::Dict& dict, TestMatchRequestDetails& out, std::u16string& error) {
  out.method = RequestMethod();
  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    DCHECK(error.empty());
    error = u"'url' is required";
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'url': expected url, got " + UTF8ToUTF16(base::Value::GetTypeName((*url_value).type()));
      return false;
    }
    out.url = *temp;
  }

  const base::Value* initiator_value = dict.Find("initiator");
  if (initiator_value) {
    {
      auto* temp = (*initiator_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'initiator': expected initiator, got " + UTF8ToUTF16(base::Value::GetTypeName((*initiator_value).type()));
        out.initiator = std::nullopt;
        return false;
      }
      out.initiator = *temp;
    }
  }

  const base::Value* method_value = dict.Find("method");
  if (method_value) {
    {
      const std::string* request_method_as_string = (*method_value).GetIfString();
      if (!request_method_as_string) {
        DCHECK(error.empty());
        error = u"'RequestMethod': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*method_value).type()));
        return false;
      }
      out.method = ParseRequestMethod(*request_method_as_string);
      if (out.method == RequestMethod()) {
        DCHECK(error.empty());
        error = u"'RequestMethod': " + GetRequestMethodParseError(*request_method_as_string);
        return false;
      }
    }
    } else {
    out.method = RequestMethod();
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    DCHECK(error.empty());
    error = u"'type' is required";
    return false;
  }
  {
    const std::string* resource_type_as_string = (*type_value).GetIfString();
    if (!resource_type_as_string) {
      DCHECK(error.empty());
      error = u"'ResourceType': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*type_value).type()));
      return false;
    }
    out.type = ParseResourceType(*resource_type_as_string);
    if (out.type == ResourceType()) {
      DCHECK(error.empty());
      error = u"'ResourceType': " + GetResourceTypeParseError(*resource_type_as_string);
      return false;
    }
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'tabId': expected tabId, got " + UTF8ToUTF16(base::Value::GetTypeName((*tab_id_value).type()));
        out.tab_id = std::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  return true;
}

// static
bool TestMatchRequestDetails::Populate(
    const base::Value& value, TestMatchRequestDetails& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<TestMatchRequestDetails, std::u16string> TestMatchRequestDetails::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  TestMatchRequestDetails out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<TestMatchRequestDetails, std::u16string> TestMatchRequestDetails::FromValue(const base::Value& value) {
  std::u16string error;
  TestMatchRequestDetails out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict TestMatchRequestDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  if (this->initiator) {
    to_value_result.Set("initiator", *this->initiator);

  }
  if (this->method != RequestMethod()) {
    to_value_result.Set("method", declarative_net_request::ToString(this->method));

  }
  to_value_result.Set("type", declarative_net_request::ToString(this->type));

  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }

  return to_value_result;
}


MatchedRuleInfoDebug::MatchedRuleInfoDebug()
 {}

MatchedRuleInfoDebug::~MatchedRuleInfoDebug() = default;
MatchedRuleInfoDebug::MatchedRuleInfoDebug(MatchedRuleInfoDebug&& rhs) noexcept = default;
MatchedRuleInfoDebug& MatchedRuleInfoDebug::operator=(MatchedRuleInfoDebug&& rhs) noexcept = default;
MatchedRuleInfoDebug MatchedRuleInfoDebug::Clone() const {
  MatchedRuleInfoDebug out;
  out.rule = rule.Clone();
  out.request = request.Clone();
  return out;
}

// static
bool MatchedRuleInfoDebug::Populate(
    const base::Value::Dict& dict, MatchedRuleInfoDebug& out, std::u16string& error) {
  const base::Value* rule_value = dict.Find("rule");
  if (!rule_value) {
    DCHECK(error.empty());
    error = u"'rule' is required";
    return false;
  }
  {
    if (!(*rule_value).is_dict()) {
      DCHECK(error.empty());
      error = u"'rule': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*rule_value).type()));
      return false;
    }
    if (!MatchedRule::Populate((*rule_value).GetDict(), out.rule, error)) {
      return false;
    }
  }

  const base::Value* request_value = dict.Find("request");
  if (!request_value) {
    DCHECK(error.empty());
    error = u"'request' is required";
    return false;
  }
  {
    if (!(*request_value).is_dict()) {
      DCHECK(error.empty());
      error = u"'request': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*request_value).type()));
      return false;
    }
    if (!RequestDetails::Populate((*request_value).GetDict(), out.request, error)) {
      return false;
    }
  }

  return true;
}

// static
bool MatchedRuleInfoDebug::Populate(
    const base::Value& value, MatchedRuleInfoDebug& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<MatchedRuleInfoDebug, std::u16string> MatchedRuleInfoDebug::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  MatchedRuleInfoDebug out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<MatchedRuleInfoDebug, std::u16string> MatchedRuleInfoDebug::FromValue(const base::Value& value) {
  std::u16string error;
  MatchedRuleInfoDebug out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict MatchedRuleInfoDebug::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("rule", (this->rule).ToValue());

  to_value_result.Set("request", (this->request).ToValue());


  return to_value_result;
}


DNRInfo::DNRInfo()
 {}

DNRInfo::~DNRInfo() = default;
DNRInfo::DNRInfo(DNRInfo&& rhs) noexcept = default;
DNRInfo& DNRInfo::operator=(DNRInfo&& rhs) noexcept = default;
// static
constexpr char DNRInfo::kRuleResources[];

DNRInfo DNRInfo::Clone() const {
  DNRInfo out;
  out.rule_resources.reserve(rule_resources.size());
  for (const auto& element : rule_resources) {
    json_schema_compiler::util::AppendToContainer(out.rule_resources, element.Clone());
  }
  return out;
}

// static
bool DNRInfo::Populate(
    const base::Value::Dict& dict, DNRInfo& out, std::u16string& error) {
  const base::Value* rule_resources_value = dict.Find("rule_resources");
  if (!rule_resources_value) {
    DCHECK(error.empty());
    error = u"'rule_resources' is required";
    return false;
  }
  {
    if (!(*rule_resources_value).is_list()) {
      DCHECK(error.empty());
      error = u"'rule_resources': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*rule_resources_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*rule_resources_value).GetList(), out.rule_resources, array_parse_error)) {
        array_parse_error = u"Error at key 'rule_resources': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  return true;
}

// static
bool DNRInfo::Populate(
    const base::Value& value, DNRInfo& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<DNRInfo, std::u16string> DNRInfo::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  DNRInfo out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<DNRInfo, std::u16string> DNRInfo::FromValue(const base::Value& value) {
  std::u16string error;
  DNRInfo out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict DNRInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("rule_resources", json_schema_compiler::util::CreateValueFromArray(this->rule_resources));


  return to_value_result;
}

//static
bool DNRInfo::ParseFromDictionary(
const base::Value::Dict& root_dict, base::StringPiece key, DNRInfo& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed) {

  const base::Value* value = ::json_schema_compiler::manifest_parse_util::FindKeyOfType(root_dict, key, base::Value::Type::DICT, error, error_path_reversed);
  if (!value)
    return false;
  const base::Value::Dict& dict = value->GetDict();
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kRuleResources, out.rule_resources, error, error_path_reversed)) {
    error_path_reversed.push_back(key);
    return false;
  }

  return true;
}


RegexOptions::RegexOptions()
 {}

RegexOptions::~RegexOptions() = default;
RegexOptions::RegexOptions(RegexOptions&& rhs) noexcept = default;
RegexOptions& RegexOptions::operator=(RegexOptions&& rhs) noexcept = default;
RegexOptions RegexOptions::Clone() const {
  RegexOptions out;
  out.regex = regex;
  out.is_case_sensitive = is_case_sensitive;
  out.require_capturing = require_capturing;
  return out;
}

// static
bool RegexOptions::Populate(
    const base::Value::Dict& dict, RegexOptions& out, std::u16string& error) {
  const base::Value* regex_value = dict.Find("regex");
  if (!regex_value) {
    DCHECK(error.empty());
    error = u"'regex' is required";
    return false;
  }
  {
    auto* temp = (*regex_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'regex': expected regex, got " + UTF8ToUTF16(base::Value::GetTypeName((*regex_value).type()));
      return false;
    }
    out.regex = *temp;
  }

  const base::Value* is_case_sensitive_value = dict.Find("isCaseSensitive");
  if (is_case_sensitive_value) {
    {
      auto temp = (*is_case_sensitive_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'isCaseSensitive': expected isCaseSensitive, got " + UTF8ToUTF16(base::Value::GetTypeName((*is_case_sensitive_value).type()));
        out.is_case_sensitive = std::nullopt;
        return false;
      }
      out.is_case_sensitive = *temp;
    }
  }

  const base::Value* require_capturing_value = dict.Find("requireCapturing");
  if (require_capturing_value) {
    {
      auto temp = (*require_capturing_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'requireCapturing': expected requireCapturing, got " + UTF8ToUTF16(base::Value::GetTypeName((*require_capturing_value).type()));
        out.require_capturing = std::nullopt;
        return false;
      }
      out.require_capturing = *temp;
    }
  }

  return true;
}

// static
bool RegexOptions::Populate(
    const base::Value& value, RegexOptions& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<RegexOptions, std::u16string> RegexOptions::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  RegexOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<RegexOptions, std::u16string> RegexOptions::FromValue(const base::Value& value) {
  std::u16string error;
  RegexOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict RegexOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("regex", this->regex);

  if (this->is_case_sensitive) {
    to_value_result.Set("isCaseSensitive", *this->is_case_sensitive);

  }
  if (this->require_capturing) {
    to_value_result.Set("requireCapturing", *this->require_capturing);

  }

  return to_value_result;
}


IsRegexSupportedResult::IsRegexSupportedResult()
: is_supported(false),
reason() {}

IsRegexSupportedResult::~IsRegexSupportedResult() = default;
IsRegexSupportedResult::IsRegexSupportedResult(IsRegexSupportedResult&& rhs) noexcept = default;
IsRegexSupportedResult& IsRegexSupportedResult::operator=(IsRegexSupportedResult&& rhs) noexcept = default;
IsRegexSupportedResult IsRegexSupportedResult::Clone() const {
  IsRegexSupportedResult out;
  out.is_supported = is_supported;
  out.reason = reason;
  return out;
}

// static
bool IsRegexSupportedResult::Populate(
    const base::Value::Dict& dict, IsRegexSupportedResult& out, std::u16string& error) {
  out.reason = UnsupportedRegexReason();
  const base::Value* is_supported_value = dict.Find("isSupported");
  if (!is_supported_value) {
    DCHECK(error.empty());
    error = u"'isSupported' is required";
    return false;
  }
  {
    auto temp = (*is_supported_value).GetIfBool();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'isSupported': expected isSupported, got " + UTF8ToUTF16(base::Value::GetTypeName((*is_supported_value).type()));
      return false;
    }
    out.is_supported = *temp;
  }

  const base::Value* reason_value = dict.Find("reason");
  if (reason_value) {
    {
      const std::string* unsupported_regex_reason_as_string = (*reason_value).GetIfString();
      if (!unsupported_regex_reason_as_string) {
        DCHECK(error.empty());
        error = u"'UnsupportedRegexReason': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*reason_value).type()));
        return false;
      }
      out.reason = ParseUnsupportedRegexReason(*unsupported_regex_reason_as_string);
      if (out.reason == UnsupportedRegexReason()) {
        DCHECK(error.empty());
        error = u"'UnsupportedRegexReason': " + GetUnsupportedRegexReasonParseError(*unsupported_regex_reason_as_string);
        return false;
      }
    }
    } else {
    out.reason = UnsupportedRegexReason();
  }

  return true;
}

// static
bool IsRegexSupportedResult::Populate(
    const base::Value& value, IsRegexSupportedResult& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<IsRegexSupportedResult, std::u16string> IsRegexSupportedResult::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  IsRegexSupportedResult out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<IsRegexSupportedResult, std::u16string> IsRegexSupportedResult::FromValue(const base::Value& value) {
  std::u16string error;
  IsRegexSupportedResult out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict IsRegexSupportedResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("isSupported", this->is_supported);

  if (this->reason != UnsupportedRegexReason()) {
    to_value_result.Set("reason", declarative_net_request::ToString(this->reason));

  }

  return to_value_result;
}


TestMatchOutcomeResult::TestMatchOutcomeResult()
 {}

TestMatchOutcomeResult::~TestMatchOutcomeResult() = default;
TestMatchOutcomeResult::TestMatchOutcomeResult(TestMatchOutcomeResult&& rhs) noexcept = default;
TestMatchOutcomeResult& TestMatchOutcomeResult::operator=(TestMatchOutcomeResult&& rhs) noexcept = default;
TestMatchOutcomeResult TestMatchOutcomeResult::Clone() const {
  TestMatchOutcomeResult out;
  out.matched_rules.reserve(matched_rules.size());
  for (const auto& element : matched_rules) {
    json_schema_compiler::util::AppendToContainer(out.matched_rules, element.Clone());
  }
  return out;
}

// static
bool TestMatchOutcomeResult::Populate(
    const base::Value::Dict& dict, TestMatchOutcomeResult& out, std::u16string& error) {
  const base::Value* matched_rules_value = dict.Find("matchedRules");
  if (!matched_rules_value) {
    DCHECK(error.empty());
    error = u"'matchedRules' is required";
    return false;
  }
  {
    if (!(*matched_rules_value).is_list()) {
      DCHECK(error.empty());
      error = u"'matchedRules': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*matched_rules_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*matched_rules_value).GetList(), out.matched_rules, array_parse_error)) {
        array_parse_error = u"Error at key 'matchedRules': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  return true;
}

// static
bool TestMatchOutcomeResult::Populate(
    const base::Value& value, TestMatchOutcomeResult& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<TestMatchOutcomeResult, std::u16string> TestMatchOutcomeResult::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  TestMatchOutcomeResult out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<TestMatchOutcomeResult, std::u16string> TestMatchOutcomeResult::FromValue(const base::Value& value) {
  std::u16string error;
  TestMatchOutcomeResult out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict TestMatchOutcomeResult::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("matchedRules", json_schema_compiler::util::CreateValueFromArray(this->matched_rules));


  return to_value_result;
}


UpdateRuleOptions::UpdateRuleOptions()
 {}

UpdateRuleOptions::~UpdateRuleOptions() = default;
UpdateRuleOptions::UpdateRuleOptions(UpdateRuleOptions&& rhs) noexcept = default;
UpdateRuleOptions& UpdateRuleOptions::operator=(UpdateRuleOptions&& rhs) noexcept = default;
UpdateRuleOptions UpdateRuleOptions::Clone() const {
  UpdateRuleOptions out;
  out.remove_rule_ids = remove_rule_ids;
  if (add_rules) {
    out.add_rules.emplace();
    out.add_rules->reserve(add_rules->size());
    for (const auto& element : *add_rules) {
      json_schema_compiler::util::AppendToContainer(*out.add_rules, element.Clone());
    }
  }
  return out;
}

// static
bool UpdateRuleOptions::Populate(
    const base::Value::Dict& dict, UpdateRuleOptions& out, std::u16string& error) {
  const base::Value* remove_rule_ids_value = dict.Find("removeRuleIds");
  if (remove_rule_ids_value) {
    {
      if (!(*remove_rule_ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'removeRuleIds': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*remove_rule_ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*remove_rule_ids_value).GetList(), out.remove_rule_ids, array_parse_error)) {
          array_parse_error = u"Error at key 'removeRuleIds': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* add_rules_value = dict.Find("addRules");
  if (add_rules_value) {
    {
      if (!(*add_rules_value).is_list()) {
        DCHECK(error.empty());
        error = u"'addRules': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*add_rules_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*add_rules_value).GetList(), out.add_rules, array_parse_error)) {
          array_parse_error = u"Error at key 'addRules': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool UpdateRuleOptions::Populate(
    const base::Value& value, UpdateRuleOptions& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<UpdateRuleOptions, std::u16string> UpdateRuleOptions::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  UpdateRuleOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<UpdateRuleOptions, std::u16string> UpdateRuleOptions::FromValue(const base::Value& value) {
  std::u16string error;
  UpdateRuleOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict UpdateRuleOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->remove_rule_ids) {
    to_value_result.Set("removeRuleIds", json_schema_compiler::util::CreateValueFromArray(*this->remove_rule_ids));

  }
  if (this->add_rules) {
    to_value_result.Set("addRules", json_schema_compiler::util::CreateValueFromArray(*this->add_rules));

  }

  return to_value_result;
}


UpdateRulesetOptions::UpdateRulesetOptions()
 {}

UpdateRulesetOptions::~UpdateRulesetOptions() = default;
UpdateRulesetOptions::UpdateRulesetOptions(UpdateRulesetOptions&& rhs) noexcept = default;
UpdateRulesetOptions& UpdateRulesetOptions::operator=(UpdateRulesetOptions&& rhs) noexcept = default;
UpdateRulesetOptions UpdateRulesetOptions::Clone() const {
  UpdateRulesetOptions out;
  out.disable_ruleset_ids = disable_ruleset_ids;
  out.enable_ruleset_ids = enable_ruleset_ids;
  return out;
}

// static
bool UpdateRulesetOptions::Populate(
    const base::Value::Dict& dict, UpdateRulesetOptions& out, std::u16string& error) {
  const base::Value* disable_ruleset_ids_value = dict.Find("disableRulesetIds");
  if (disable_ruleset_ids_value) {
    {
      if (!(*disable_ruleset_ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'disableRulesetIds': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*disable_ruleset_ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*disable_ruleset_ids_value).GetList(), out.disable_ruleset_ids, array_parse_error)) {
          array_parse_error = u"Error at key 'disableRulesetIds': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* enable_ruleset_ids_value = dict.Find("enableRulesetIds");
  if (enable_ruleset_ids_value) {
    {
      if (!(*enable_ruleset_ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'enableRulesetIds': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*enable_ruleset_ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*enable_ruleset_ids_value).GetList(), out.enable_ruleset_ids, array_parse_error)) {
          array_parse_error = u"Error at key 'enableRulesetIds': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool UpdateRulesetOptions::Populate(
    const base::Value& value, UpdateRulesetOptions& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<UpdateRulesetOptions, std::u16string> UpdateRulesetOptions::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  UpdateRulesetOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<UpdateRulesetOptions, std::u16string> UpdateRulesetOptions::FromValue(const base::Value& value) {
  std::u16string error;
  UpdateRulesetOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict UpdateRulesetOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->disable_ruleset_ids) {
    to_value_result.Set("disableRulesetIds", json_schema_compiler::util::CreateValueFromArray(*this->disable_ruleset_ids));

  }
  if (this->enable_ruleset_ids) {
    to_value_result.Set("enableRulesetIds", json_schema_compiler::util::CreateValueFromArray(*this->enable_ruleset_ids));

  }

  return to_value_result;
}


UpdateStaticRulesOptions::UpdateStaticRulesOptions()
 {}

UpdateStaticRulesOptions::~UpdateStaticRulesOptions() = default;
UpdateStaticRulesOptions::UpdateStaticRulesOptions(UpdateStaticRulesOptions&& rhs) noexcept = default;
UpdateStaticRulesOptions& UpdateStaticRulesOptions::operator=(UpdateStaticRulesOptions&& rhs) noexcept = default;
UpdateStaticRulesOptions UpdateStaticRulesOptions::Clone() const {
  UpdateStaticRulesOptions out;
  out.ruleset_id = ruleset_id;
  out.disable_rule_ids = disable_rule_ids;
  out.enable_rule_ids = enable_rule_ids;
  return out;
}

// static
bool UpdateStaticRulesOptions::Populate(
    const base::Value::Dict& dict, UpdateStaticRulesOptions& out, std::u16string& error) {
  const base::Value* ruleset_id_value = dict.Find("rulesetId");
  if (!ruleset_id_value) {
    DCHECK(error.empty());
    error = u"'rulesetId' is required";
    return false;
  }
  {
    auto* temp = (*ruleset_id_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'rulesetId': expected rulesetId, got " + UTF8ToUTF16(base::Value::GetTypeName((*ruleset_id_value).type()));
      return false;
    }
    out.ruleset_id = *temp;
  }

  const base::Value* disable_rule_ids_value = dict.Find("disableRuleIds");
  if (disable_rule_ids_value) {
    {
      if (!(*disable_rule_ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'disableRuleIds': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*disable_rule_ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*disable_rule_ids_value).GetList(), out.disable_rule_ids, array_parse_error)) {
          array_parse_error = u"Error at key 'disableRuleIds': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* enable_rule_ids_value = dict.Find("enableRuleIds");
  if (enable_rule_ids_value) {
    {
      if (!(*enable_rule_ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'enableRuleIds': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*enable_rule_ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*enable_rule_ids_value).GetList(), out.enable_rule_ids, array_parse_error)) {
          array_parse_error = u"Error at key 'enableRuleIds': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  return true;
}

// static
bool UpdateStaticRulesOptions::Populate(
    const base::Value& value, UpdateStaticRulesOptions& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<UpdateStaticRulesOptions, std::u16string> UpdateStaticRulesOptions::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  UpdateStaticRulesOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<UpdateStaticRulesOptions, std::u16string> UpdateStaticRulesOptions::FromValue(const base::Value& value) {
  std::u16string error;
  UpdateStaticRulesOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict UpdateStaticRulesOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("rulesetId", this->ruleset_id);

  if (this->disable_rule_ids) {
    to_value_result.Set("disableRuleIds", json_schema_compiler::util::CreateValueFromArray(*this->disable_rule_ids));

  }
  if (this->enable_rule_ids) {
    to_value_result.Set("enableRuleIds", json_schema_compiler::util::CreateValueFromArray(*this->enable_rule_ids));

  }

  return to_value_result;
}


GetDisabledRuleIdsOptions::GetDisabledRuleIdsOptions()
 {}

GetDisabledRuleIdsOptions::~GetDisabledRuleIdsOptions() = default;
GetDisabledRuleIdsOptions::GetDisabledRuleIdsOptions(GetDisabledRuleIdsOptions&& rhs) noexcept = default;
GetDisabledRuleIdsOptions& GetDisabledRuleIdsOptions::operator=(GetDisabledRuleIdsOptions&& rhs) noexcept = default;
GetDisabledRuleIdsOptions GetDisabledRuleIdsOptions::Clone() const {
  GetDisabledRuleIdsOptions out;
  out.ruleset_id = ruleset_id;
  return out;
}

// static
bool GetDisabledRuleIdsOptions::Populate(
    const base::Value::Dict& dict, GetDisabledRuleIdsOptions& out, std::u16string& error) {
  const base::Value* ruleset_id_value = dict.Find("rulesetId");
  if (!ruleset_id_value) {
    DCHECK(error.empty());
    error = u"'rulesetId' is required";
    return false;
  }
  {
    auto* temp = (*ruleset_id_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'rulesetId': expected rulesetId, got " + UTF8ToUTF16(base::Value::GetTypeName((*ruleset_id_value).type()));
      return false;
    }
    out.ruleset_id = *temp;
  }

  return true;
}

// static
bool GetDisabledRuleIdsOptions::Populate(
    const base::Value& value, GetDisabledRuleIdsOptions& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<GetDisabledRuleIdsOptions, std::u16string> GetDisabledRuleIdsOptions::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  GetDisabledRuleIdsOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<GetDisabledRuleIdsOptions, std::u16string> GetDisabledRuleIdsOptions::FromValue(const base::Value& value) {
  std::u16string error;
  GetDisabledRuleIdsOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict GetDisabledRuleIdsOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("rulesetId", this->ruleset_id);


  return to_value_result;
}


TabActionCountUpdate::TabActionCountUpdate()
: tab_id(0),
increment(0) {}

TabActionCountUpdate::~TabActionCountUpdate() = default;
TabActionCountUpdate::TabActionCountUpdate(TabActionCountUpdate&& rhs) noexcept = default;
TabActionCountUpdate& TabActionCountUpdate::operator=(TabActionCountUpdate&& rhs) noexcept = default;
TabActionCountUpdate TabActionCountUpdate::Clone() const {
  TabActionCountUpdate out;
  out.tab_id = tab_id;
  out.increment = increment;
  return out;
}

// static
bool TabActionCountUpdate::Populate(
    const base::Value::Dict& dict, TabActionCountUpdate& out, std::u16string& error) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    DCHECK(error.empty());
    error = u"'tabId' is required";
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'tabId': expected tabId, got " + UTF8ToUTF16(base::Value::GetTypeName((*tab_id_value).type()));
      return false;
    }
    out.tab_id = *temp;
  }

  const base::Value* increment_value = dict.Find("increment");
  if (!increment_value) {
    DCHECK(error.empty());
    error = u"'increment' is required";
    return false;
  }
  {
    auto temp = (*increment_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'increment': expected increment, got " + UTF8ToUTF16(base::Value::GetTypeName((*increment_value).type()));
      return false;
    }
    out.increment = *temp;
  }

  return true;
}

// static
bool TabActionCountUpdate::Populate(
    const base::Value& value, TabActionCountUpdate& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<TabActionCountUpdate, std::u16string> TabActionCountUpdate::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  TabActionCountUpdate out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<TabActionCountUpdate, std::u16string> TabActionCountUpdate::FromValue(const base::Value& value) {
  std::u16string error;
  TabActionCountUpdate out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict TabActionCountUpdate::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("increment", this->increment);


  return to_value_result;
}


ExtensionActionOptions::ExtensionActionOptions()
 {}

ExtensionActionOptions::~ExtensionActionOptions() = default;
ExtensionActionOptions::ExtensionActionOptions(ExtensionActionOptions&& rhs) noexcept = default;
ExtensionActionOptions& ExtensionActionOptions::operator=(ExtensionActionOptions&& rhs) noexcept = default;
ExtensionActionOptions ExtensionActionOptions::Clone() const {
  ExtensionActionOptions out;
  out.display_action_count_as_badge_text = display_action_count_as_badge_text;
  if (tab_update) {
    out.tab_update = tab_update->Clone();
  }
  return out;
}

// static
bool ExtensionActionOptions::Populate(
    const base::Value::Dict& dict, ExtensionActionOptions& out, std::u16string& error) {
  const base::Value* display_action_count_as_badge_text_value = dict.Find("displayActionCountAsBadgeText");
  if (display_action_count_as_badge_text_value) {
    {
      auto temp = (*display_action_count_as_badge_text_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'displayActionCountAsBadgeText': expected displayActionCountAsBadgeText, got " + UTF8ToUTF16(base::Value::GetTypeName((*display_action_count_as_badge_text_value).type()));
        out.display_action_count_as_badge_text = std::nullopt;
        return false;
      }
      out.display_action_count_as_badge_text = *temp;
    }
  }

  const base::Value* tab_update_value = dict.Find("tabUpdate");
  if (tab_update_value) {
    {
      if (!(*tab_update_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'tabUpdate': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*tab_update_value).type()));
        return false;
      }
      else {
        TabActionCountUpdate temp;
        if (!TabActionCountUpdate::Populate((*tab_update_value).GetDict(), temp, error))
          return false;
        out.tab_update = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool ExtensionActionOptions::Populate(
    const base::Value& value, ExtensionActionOptions& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ExtensionActionOptions, std::u16string> ExtensionActionOptions::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  ExtensionActionOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ExtensionActionOptions, std::u16string> ExtensionActionOptions::FromValue(const base::Value& value) {
  std::u16string error;
  ExtensionActionOptions out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict ExtensionActionOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->display_action_count_as_badge_text) {
    to_value_result.Set("displayActionCountAsBadgeText", *this->display_action_count_as_badge_text);

  }
  if (this->tab_update) {
    to_value_result.Set("tabUpdate", (this->tab_update)->ToValue());

  }

  return to_value_result;
}



//
// Manifest Keys
//

ManifestKeys::ManifestKeys()
 {}

ManifestKeys::~ManifestKeys() = default;
ManifestKeys::ManifestKeys(ManifestKeys&& rhs) noexcept = default;
ManifestKeys& ManifestKeys::operator=(ManifestKeys&& rhs) noexcept = default;
// static
constexpr char ManifestKeys::kDeclarativeNetRequest[];

//static
bool ManifestKeys::ParseFromDictionary(
const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error) {

  std::vector<base::StringPiece> error_path_reversed;
  const base::Value::Dict& dict = root_dict;
  if (!::json_schema_compiler::manifest_parse_util::ParseFromDictionary(dict, kDeclarativeNetRequest, out.declarative_net_request, error, error_path_reversed)) {
    ::json_schema_compiler::manifest_parse_util::PopulateFinalError(error, error_path_reversed);
    return false;
  }

  return true;
}


//
// Functions
//

namespace UpdateDynamicRules {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'options': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(options_value.type()));
        return std::nullopt;
      }
      if (!UpdateRuleOptions::Populate(options_value.GetDict(), params.options, error)) {
        return std::nullopt;
      }
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'options' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UpdateDynamicRules

namespace GetDynamicRules {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() > 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'filter': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(filter_value.type()));
        return std::nullopt;
      }
      else {
        GetRulesFilter temp;
        if (!GetRulesFilter::Populate(filter_value.GetDict(), temp, error))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create(const std::vector<Rule>& rules) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(rules));

  return create_results;
}
}  // namespace GetDynamicRules

namespace UpdateSessionRules {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'options': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(options_value.type()));
        return std::nullopt;
      }
      if (!UpdateRuleOptions::Populate(options_value.GetDict(), params.options, error)) {
        return std::nullopt;
      }
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'options' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UpdateSessionRules

namespace GetSessionRules {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() > 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'filter': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(filter_value.type()));
        return std::nullopt;
      }
      else {
        GetRulesFilter temp;
        if (!GetRulesFilter::Populate(filter_value.GetDict(), temp, error))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create(const std::vector<Rule>& rules) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(rules));

  return create_results;
}
}  // namespace GetSessionRules

namespace UpdateEnabledRulesets {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'options': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(options_value.type()));
        return std::nullopt;
      }
      if (!UpdateRulesetOptions::Populate(options_value.GetDict(), params.options, error)) {
        return std::nullopt;
      }
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'options' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UpdateEnabledRulesets

namespace GetEnabledRulesets {

base::Value::List Results::Create(const std::vector<std::string>& ruleset_ids) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(ruleset_ids));

  return create_results;
}
}  // namespace GetEnabledRulesets

namespace UpdateStaticRules {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'options': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(options_value.type()));
        return std::nullopt;
      }
      if (!UpdateStaticRulesOptions::Populate(options_value.GetDict(), params.options, error)) {
        return std::nullopt;
      }
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'options' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace UpdateStaticRules

namespace GetDisabledRuleIds {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'options': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(options_value.type()));
        return std::nullopt;
      }
      if (!GetDisabledRuleIdsOptions::Populate(options_value.GetDict(), params.options, error)) {
        return std::nullopt;
      }
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'options' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create(const std::vector<int>& disabled_rule_ids) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(disabled_rule_ids));

  return create_results;
}
}  // namespace GetDisabledRuleIds

namespace GetMatchedRules {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() > 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'filter': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(filter_value.type()));
        return std::nullopt;
      }
      else {
        MatchedRulesFilter temp;
        if (!MatchedRulesFilter::Populate(filter_value.GetDict(), temp, error))
          return std::nullopt;
        params.filter = std::move(temp);
      }
    }
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create(const RulesMatchedDetails& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace GetMatchedRules

namespace SetExtensionActionOptions {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'options': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(options_value.type()));
        return std::nullopt;
      }
      if (!ExtensionActionOptions::Populate(options_value.GetDict(), params.options, error)) {
        return std::nullopt;
      }
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'options' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetExtensionActionOptions

namespace IsRegexSupported {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& regex_options_value = args[0];
    {
      if (!regex_options_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'regexOptions': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(regex_options_value.type()));
        return std::nullopt;
      }
      if (!RegexOptions::Populate(regex_options_value.GetDict(), params.regex_options, error)) {
        return std::nullopt;
      }
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'regexOptions' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create(const IsRegexSupportedResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace IsRegexSupported

namespace GetAvailableStaticRuleCount {

base::Value::List Results::Create(int count) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(count);

  return create_results;
}
}  // namespace GetAvailableStaticRuleCount

namespace TestMatchOutcome {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args, std::u16string& error) {
  if (args.size() != 1) {
    DCHECK(error.empty());
    error = u"expected 1 arguments, got " + base::NumberToString16(args.size());
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_value = args[0];
    {
      if (!request_value.is_dict()) {
        DCHECK(error.empty());
        error = u"'request': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(request_value.type()));
        return std::nullopt;
      }
      if (!TestMatchRequestDetails::Populate(request_value.GetDict(), params.request, error)) {
        return std::nullopt;
      }
    }
  }
  else {
    DCHECK(error.empty());
    error = u"'request' is required";
    return std::nullopt;
  }

  return params;
}


// static
base::expected<Params, std::u16string> Params::Create(const base::Value::List& args) {
  std::u16string error;
  auto result = Params::Create(args, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return std::move(result).value();
}


base::Value::List Results::Create(const TestMatchOutcomeResult& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace TestMatchOutcome

//
// Events
//

namespace OnRuleMatchedDebug {

const char kEventName[] = "declarativeNetRequest.onRuleMatchedDebug";

base::Value::List Create(const MatchedRuleInfoDebug& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnRuleMatchedDebug

}  // namespace declarative_net_request
}  // namespace api
}  // namespace extensions

