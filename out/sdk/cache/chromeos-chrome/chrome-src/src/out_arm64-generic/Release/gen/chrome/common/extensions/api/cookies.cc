// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/cookies.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/cookies.h"

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
namespace cookies {
//
// Types
//

const char* ToString(SameSiteStatus enum_param) {
  switch (enum_param) {
    case SameSiteStatus::kNoRestriction:
      return "no_restriction";
    case SameSiteStatus::kLax:
      return "lax";
    case SameSiteStatus::kStrict:
      return "strict";
    case SameSiteStatus::kUnspecified:
      return "unspecified";
    case SameSiteStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SameSiteStatus ParseSameSiteStatus(base::StringPiece enum_string) {
  if (enum_string == "no_restriction")
    return SameSiteStatus::kNoRestriction;
  if (enum_string == "lax")
    return SameSiteStatus::kLax;
  if (enum_string == "strict")
    return SameSiteStatus::kStrict;
  if (enum_string == "unspecified")
    return SameSiteStatus::kUnspecified;
  return SameSiteStatus::kNone;
}

std::u16string GetSameSiteStatusParseError(base::StringPiece enum_string) {
  return u"expected \"no_restriction\" or \"lax\" or \"strict\" or \"unspecified\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CookiePartitionKey::CookiePartitionKey()
 {}

CookiePartitionKey::~CookiePartitionKey() = default;
CookiePartitionKey::CookiePartitionKey(CookiePartitionKey&& rhs) noexcept = default;
CookiePartitionKey& CookiePartitionKey::operator=(CookiePartitionKey&& rhs) noexcept = default;
CookiePartitionKey CookiePartitionKey::Clone() const {
  CookiePartitionKey out;
  out.top_level_site = top_level_site;
  return out;
}

// static
bool CookiePartitionKey::Populate(
    const base::Value::Dict& dict, CookiePartitionKey& out) {
  const base::Value* top_level_site_value = dict.Find("topLevelSite");
  if (top_level_site_value) {
    {
      auto* temp = (*top_level_site_value).GetIfString();
      if (!temp) {
        out.top_level_site = std::nullopt;
        return false;
      }
      out.top_level_site = *temp;
    }
  }

  return true;
}

// static
bool CookiePartitionKey::Populate(
    const base::Value& value, CookiePartitionKey& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CookiePartitionKey> CookiePartitionKey::FromValue(const base::Value::Dict& value) {
  CookiePartitionKey out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CookiePartitionKey> CookiePartitionKey::FromValue(const base::Value& value) {
  CookiePartitionKey out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CookiePartitionKey::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->top_level_site) {
    to_value_result.Set("topLevelSite", *this->top_level_site);

  }

  return to_value_result;
}


Cookie::Cookie()
: host_only(false),
secure(false),
http_only(false),
same_site(),
session(false) {}

Cookie::~Cookie() = default;
Cookie::Cookie(Cookie&& rhs) noexcept = default;
Cookie& Cookie::operator=(Cookie&& rhs) noexcept = default;
Cookie Cookie::Clone() const {
  Cookie out;
  out.name = name;
  out.value = value;
  out.domain = domain;
  out.host_only = host_only;
  out.path = path;
  out.secure = secure;
  out.http_only = http_only;
  out.same_site = same_site;
  out.session = session;
  out.expiration_date = expiration_date;
  out.store_id = store_id;
  if (partition_key) {
    out.partition_key = partition_key->Clone();
  }
  return out;
}

// static
bool Cookie::Populate(
    const base::Value::Dict& dict, Cookie& out) {
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* value_value = dict.Find("value");
  if (!value_value) {
    return false;
  }
  {
    auto* temp = (*value_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.value = *temp;
  }

  const base::Value* domain_value = dict.Find("domain");
  if (!domain_value) {
    return false;
  }
  {
    auto* temp = (*domain_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.domain = *temp;
  }

  const base::Value* host_only_value = dict.Find("hostOnly");
  if (!host_only_value) {
    return false;
  }
  {
    auto temp = (*host_only_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.host_only = *temp;
  }

  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* secure_value = dict.Find("secure");
  if (!secure_value) {
    return false;
  }
  {
    auto temp = (*secure_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.secure = *temp;
  }

  const base::Value* http_only_value = dict.Find("httpOnly");
  if (!http_only_value) {
    return false;
  }
  {
    auto temp = (*http_only_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.http_only = *temp;
  }

  const base::Value* same_site_value = dict.Find("sameSite");
  if (!same_site_value) {
    return false;
  }
  {
    const std::string* same_site_status_as_string = (*same_site_value).GetIfString();
    if (!same_site_status_as_string) {
      return false;
    }
    out.same_site = ParseSameSiteStatus(*same_site_status_as_string);
    if (out.same_site == SameSiteStatus()) {
      return false;
    }
  }

  const base::Value* session_value = dict.Find("session");
  if (!session_value) {
    return false;
  }
  {
    auto temp = (*session_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.session = *temp;
  }

  const base::Value* expiration_date_value = dict.Find("expirationDate");
  if (expiration_date_value) {
    {
      auto temp = (*expiration_date_value).GetIfDouble();
      if (!temp.has_value()) {
        out.expiration_date = std::nullopt;
        return false;
      }
      out.expiration_date = *temp;
    }
  }

  const base::Value* store_id_value = dict.Find("storeId");
  if (!store_id_value) {
    return false;
  }
  {
    auto* temp = (*store_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.store_id = *temp;
  }

  const base::Value* partition_key_value = dict.Find("partitionKey");
  if (partition_key_value) {
    {
      if (!(*partition_key_value).is_dict()) {
        return false;
      }
      else {
        CookiePartitionKey temp;
        if (!CookiePartitionKey::Populate((*partition_key_value).GetDict(), temp))
          return false;
        out.partition_key = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Cookie::Populate(
    const base::Value& value, Cookie& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Cookie> Cookie::FromValue(const base::Value::Dict& value) {
  Cookie out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Cookie> Cookie::FromValue(const base::Value& value) {
  Cookie out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Cookie::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("value", this->value);

  to_value_result.Set("domain", this->domain);

  to_value_result.Set("hostOnly", this->host_only);

  to_value_result.Set("path", this->path);

  to_value_result.Set("secure", this->secure);

  to_value_result.Set("httpOnly", this->http_only);

  to_value_result.Set("sameSite", cookies::ToString(this->same_site));

  to_value_result.Set("session", this->session);

  if (this->expiration_date) {
    to_value_result.Set("expirationDate", *this->expiration_date);

  }
  to_value_result.Set("storeId", this->store_id);

  if (this->partition_key) {
    to_value_result.Set("partitionKey", (this->partition_key)->ToValue());

  }

  return to_value_result;
}


CookieStore::CookieStore()
 {}

CookieStore::~CookieStore() = default;
CookieStore::CookieStore(CookieStore&& rhs) noexcept = default;
CookieStore& CookieStore::operator=(CookieStore&& rhs) noexcept = default;
CookieStore CookieStore::Clone() const {
  CookieStore out;
  out.id = id;
  out.tab_ids = tab_ids;
  return out;
}

// static
bool CookieStore::Populate(
    const base::Value::Dict& dict, CookieStore& out) {
  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto* temp = (*id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* tab_ids_value = dict.Find("tabIds");
  if (!tab_ids_value) {
    return false;
  }
  {
    if (!(*tab_ids_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*tab_ids_value).GetList(), out.tab_ids)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool CookieStore::Populate(
    const base::Value& value, CookieStore& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CookieStore> CookieStore::FromValue(const base::Value::Dict& value) {
  CookieStore out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CookieStore> CookieStore::FromValue(const base::Value& value) {
  CookieStore out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CookieStore::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("tabIds", json_schema_compiler::util::CreateValueFromArray(this->tab_ids));


  return to_value_result;
}


const char* ToString(OnChangedCause enum_param) {
  switch (enum_param) {
    case OnChangedCause::kEvicted:
      return "evicted";
    case OnChangedCause::kExpired:
      return "expired";
    case OnChangedCause::kExplicit:
      return "explicit";
    case OnChangedCause::kExpiredOverwrite:
      return "expired_overwrite";
    case OnChangedCause::kOverwrite:
      return "overwrite";
    case OnChangedCause::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnChangedCause ParseOnChangedCause(base::StringPiece enum_string) {
  if (enum_string == "evicted")
    return OnChangedCause::kEvicted;
  if (enum_string == "expired")
    return OnChangedCause::kExpired;
  if (enum_string == "explicit")
    return OnChangedCause::kExplicit;
  if (enum_string == "expired_overwrite")
    return OnChangedCause::kExpiredOverwrite;
  if (enum_string == "overwrite")
    return OnChangedCause::kOverwrite;
  return OnChangedCause::kNone;
}

std::u16string GetOnChangedCauseParseError(base::StringPiece enum_string) {
  return u"expected \"evicted\" or \"expired\" or \"explicit\" or \"expired_overwrite\" or \"overwrite\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CookieDetails::CookieDetails()
 {}

CookieDetails::~CookieDetails() = default;
CookieDetails::CookieDetails(CookieDetails&& rhs) noexcept = default;
CookieDetails& CookieDetails::operator=(CookieDetails&& rhs) noexcept = default;
CookieDetails CookieDetails::Clone() const {
  CookieDetails out;
  out.url = url;
  out.name = name;
  out.store_id = store_id;
  if (partition_key) {
    out.partition_key = partition_key->Clone();
  }
  return out;
}

// static
bool CookieDetails::Populate(
    const base::Value::Dict& dict, CookieDetails& out) {
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

  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* store_id_value = dict.Find("storeId");
  if (store_id_value) {
    {
      auto* temp = (*store_id_value).GetIfString();
      if (!temp) {
        out.store_id = std::nullopt;
        return false;
      }
      out.store_id = *temp;
    }
  }

  const base::Value* partition_key_value = dict.Find("partitionKey");
  if (partition_key_value) {
    {
      if (!(*partition_key_value).is_dict()) {
        return false;
      }
      else {
        CookiePartitionKey temp;
        if (!CookiePartitionKey::Populate((*partition_key_value).GetDict(), temp))
          return false;
        out.partition_key = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool CookieDetails::Populate(
    const base::Value& value, CookieDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CookieDetails> CookieDetails::FromValue(const base::Value::Dict& value) {
  CookieDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CookieDetails> CookieDetails::FromValue(const base::Value& value) {
  CookieDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CookieDetails::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("name", this->name);

  if (this->store_id) {
    to_value_result.Set("storeId", *this->store_id);

  }
  if (this->partition_key) {
    to_value_result.Set("partitionKey", (this->partition_key)->ToValue());

  }

  return to_value_result;
}



//
// Functions
//

namespace Get {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!CookieDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Cookie& cookie) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((cookie).ToValue());

  return create_results;
}
}  // namespace Get

namespace GetAll {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.url = url;
  out.name = name;
  out.domain = domain;
  out.path = path;
  out.secure = secure;
  out.session = session;
  out.store_id = store_id;
  if (partition_key) {
    out.partition_key = partition_key->Clone();
  }
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
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

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* domain_value = dict.Find("domain");
  if (domain_value) {
    {
      auto* temp = (*domain_value).GetIfString();
      if (!temp) {
        out.domain = std::nullopt;
        return false;
      }
      out.domain = *temp;
    }
  }

  const base::Value* path_value = dict.Find("path");
  if (path_value) {
    {
      auto* temp = (*path_value).GetIfString();
      if (!temp) {
        out.path = std::nullopt;
        return false;
      }
      out.path = *temp;
    }
  }

  const base::Value* secure_value = dict.Find("secure");
  if (secure_value) {
    {
      auto temp = (*secure_value).GetIfBool();
      if (!temp.has_value()) {
        out.secure = std::nullopt;
        return false;
      }
      out.secure = *temp;
    }
  }

  const base::Value* session_value = dict.Find("session");
  if (session_value) {
    {
      auto temp = (*session_value).GetIfBool();
      if (!temp.has_value()) {
        out.session = std::nullopt;
        return false;
      }
      out.session = *temp;
    }
  }

  const base::Value* store_id_value = dict.Find("storeId");
  if (store_id_value) {
    {
      auto* temp = (*store_id_value).GetIfString();
      if (!temp) {
        out.store_id = std::nullopt;
        return false;
      }
      out.store_id = *temp;
    }
  }

  const base::Value* partition_key_value = dict.Find("partitionKey");
  if (partition_key_value) {
    {
      if (!(*partition_key_value).is_dict()) {
        return false;
      }
      else {
        CookiePartitionKey temp;
        if (!CookiePartitionKey::Populate((*partition_key_value).GetDict(), temp))
          return false;
        out.partition_key = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<Cookie>& cookies) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(cookies));

  return create_results;
}
}  // namespace GetAll

namespace Set {

Params::Details::Details()
: same_site() {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.url = url;
  out.name = name;
  out.value = value;
  out.domain = domain;
  out.path = path;
  out.secure = secure;
  out.http_only = http_only;
  out.same_site = same_site;
  out.expiration_date = expiration_date;
  out.store_id = store_id;
  if (partition_key) {
    out.partition_key = partition_key->Clone();
  }
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  out.same_site = SameSiteStatus();
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

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* value_value = dict.Find("value");
  if (value_value) {
    {
      auto* temp = (*value_value).GetIfString();
      if (!temp) {
        out.value = std::nullopt;
        return false;
      }
      out.value = *temp;
    }
  }

  const base::Value* domain_value = dict.Find("domain");
  if (domain_value) {
    {
      auto* temp = (*domain_value).GetIfString();
      if (!temp) {
        out.domain = std::nullopt;
        return false;
      }
      out.domain = *temp;
    }
  }

  const base::Value* path_value = dict.Find("path");
  if (path_value) {
    {
      auto* temp = (*path_value).GetIfString();
      if (!temp) {
        out.path = std::nullopt;
        return false;
      }
      out.path = *temp;
    }
  }

  const base::Value* secure_value = dict.Find("secure");
  if (secure_value) {
    {
      auto temp = (*secure_value).GetIfBool();
      if (!temp.has_value()) {
        out.secure = std::nullopt;
        return false;
      }
      out.secure = *temp;
    }
  }

  const base::Value* http_only_value = dict.Find("httpOnly");
  if (http_only_value) {
    {
      auto temp = (*http_only_value).GetIfBool();
      if (!temp.has_value()) {
        out.http_only = std::nullopt;
        return false;
      }
      out.http_only = *temp;
    }
  }

  const base::Value* same_site_value = dict.Find("sameSite");
  if (same_site_value) {
    {
      const std::string* same_site_status_as_string = (*same_site_value).GetIfString();
      if (!same_site_status_as_string) {
        return false;
      }
      out.same_site = ParseSameSiteStatus(*same_site_status_as_string);
      if (out.same_site == SameSiteStatus()) {
        return false;
      }
    }
    } else {
    out.same_site = SameSiteStatus();
  }

  const base::Value* expiration_date_value = dict.Find("expirationDate");
  if (expiration_date_value) {
    {
      auto temp = (*expiration_date_value).GetIfDouble();
      if (!temp.has_value()) {
        out.expiration_date = std::nullopt;
        return false;
      }
      out.expiration_date = *temp;
    }
  }

  const base::Value* store_id_value = dict.Find("storeId");
  if (store_id_value) {
    {
      auto* temp = (*store_id_value).GetIfString();
      if (!temp) {
        out.store_id = std::nullopt;
        return false;
      }
      out.store_id = *temp;
    }
  }

  const base::Value* partition_key_value = dict.Find("partitionKey");
  if (partition_key_value) {
    {
      if (!(*partition_key_value).is_dict()) {
        return false;
      }
      else {
        CookiePartitionKey temp;
        if (!CookiePartitionKey::Populate((*partition_key_value).GetDict(), temp))
          return false;
        out.partition_key = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Params::Details::Populate(
    const base::Value& value, Details& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}


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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Cookie& cookie) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((cookie).ToValue());

  return create_results;
}
}  // namespace Set

namespace Remove {

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
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return std::nullopt;
      }
      if (!CookieDetails::Populate(details_value.GetDict(), params.details)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


Results::Details::Details()
 {}

Results::Details::~Details() = default;
Results::Details::Details(Details&& rhs) noexcept = default;
Results::Details& Results::Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Results::Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("name", this->name);

  to_value_result.Set("storeId", this->store_id);

  if (this->partition_key) {
    to_value_result.Set("partitionKey", (this->partition_key)->ToValue());

  }

  return to_value_result;
}


base::Value::List Results::Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace Remove

namespace GetAllCookieStores {

base::Value::List Results::Create(const std::vector<CookieStore>& cookie_stores) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(cookie_stores));

  return create_results;
}
}  // namespace GetAllCookieStores

//
// Events
//

namespace OnChanged {

const char kEventName[] = "cookies.onChanged";

ChangeInfo::ChangeInfo()
: removed(false),
cause() {}

ChangeInfo::~ChangeInfo() = default;
ChangeInfo::ChangeInfo(ChangeInfo&& rhs) noexcept = default;
ChangeInfo& ChangeInfo::operator=(ChangeInfo&& rhs) noexcept = default;
base::Value::Dict ChangeInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("removed", this->removed);

  to_value_result.Set("cookie", (this->cookie).ToValue());

  to_value_result.Set("cause", cookies::ToString(this->cause));


  return to_value_result;
}


base::Value::List Create(const ChangeInfo& change_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((change_info).ToValue());

  return create_results;
}

}  // namespace OnChanged

}  // namespace cookies
}  // namespace api
}  // namespace extensions

