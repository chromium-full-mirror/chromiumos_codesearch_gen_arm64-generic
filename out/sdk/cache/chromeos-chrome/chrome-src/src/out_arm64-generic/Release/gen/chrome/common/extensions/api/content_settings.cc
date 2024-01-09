// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/content_settings.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/content_settings.h"

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
namespace content_settings {
//
// Properties
//

//
// Types
//

ResourceIdentifier::ResourceIdentifier()
 {}

ResourceIdentifier::~ResourceIdentifier() = default;
ResourceIdentifier::ResourceIdentifier(ResourceIdentifier&& rhs) noexcept = default;
ResourceIdentifier& ResourceIdentifier::operator=(ResourceIdentifier&& rhs) noexcept = default;
ResourceIdentifier ResourceIdentifier::Clone() const {
  ResourceIdentifier out;
  out.id = id;
  out.description = description;
  return out;
}

// static
bool ResourceIdentifier::Populate(
    const base::Value::Dict& dict, ResourceIdentifier& out) {
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

  const base::Value* description_value = dict.Find("description");
  if (description_value) {
    {
      auto* temp = (*description_value).GetIfString();
      if (!temp) {
        out.description = std::nullopt;
        return false;
      }
      out.description = *temp;
    }
  }

  return true;
}

// static
bool ResourceIdentifier::Populate(
    const base::Value& value, ResourceIdentifier& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ResourceIdentifier> ResourceIdentifier::FromValue(const base::Value::Dict& value) {
  ResourceIdentifier out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ResourceIdentifier> ResourceIdentifier::FromValue(const base::Value& value) {
  ResourceIdentifier out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ResourceIdentifier::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->description) {
    to_value_result.Set("description", *this->description);

  }

  return to_value_result;
}


const char* ToString(Scope enum_param) {
  switch (enum_param) {
    case Scope::kRegular:
      return "regular";
    case Scope::kIncognitoSessionOnly:
      return "incognito_session_only";
    case Scope::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Scope ParseScope(base::StringPiece enum_string) {
  if (enum_string == "regular")
    return Scope::kRegular;
  if (enum_string == "incognito_session_only")
    return Scope::kIncognitoSessionOnly;
  return Scope::kNone;
}

std::u16string GetScopeParseError(base::StringPiece enum_string) {
  return u"expected \"regular\" or \"incognito_session_only\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


namespace ContentSetting {

namespace Clear {

Params::Details::Details()
: scope() {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.scope = scope;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  out.scope = Scope();
  const base::Value* scope_value = dict.Find("scope");
  if (scope_value) {
    {
      const std::string* scope_as_string = (*scope_value).GetIfString();
      if (!scope_as_string) {
        return false;
      }
      out.scope = ParseScope(*scope_as_string);
      if (out.scope == Scope()) {
        return false;
      }
    }
    } else {
    out.scope = Scope();
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


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Clear

namespace Get {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.primary_url = primary_url;
  out.secondary_url = secondary_url;
  if (resource_identifier) {
    out.resource_identifier = resource_identifier->Clone();
  }
  out.incognito = incognito;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  const base::Value* primary_url_value = dict.Find("primaryUrl");
  if (!primary_url_value) {
    return false;
  }
  {
    auto* temp = (*primary_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.primary_url = *temp;
  }

  const base::Value* secondary_url_value = dict.Find("secondaryUrl");
  if (secondary_url_value) {
    {
      auto* temp = (*secondary_url_value).GetIfString();
      if (!temp) {
        out.secondary_url = std::nullopt;
        return false;
      }
      out.secondary_url = *temp;
    }
  }

  const base::Value* resource_identifier_value = dict.Find("resourceIdentifier");
  if (resource_identifier_value) {
    {
      if (!(*resource_identifier_value).is_dict()) {
        return false;
      }
      else {
        ResourceIdentifier temp;
        if (!ResourceIdentifier::Populate((*resource_identifier_value).GetDict(), temp))
          return false;
        out.resource_identifier = std::move(temp);
      }
    }
  }

  const base::Value* incognito_value = dict.Find("incognito");
  if (incognito_value) {
    {
      auto temp = (*incognito_value).GetIfBool();
      if (!temp.has_value()) {
        out.incognito = std::nullopt;
        return false;
      }
      out.incognito = *temp;
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


Results::Details::Details()
 {}

Results::Details::~Details() = default;
Results::Details::Details(Details&& rhs) noexcept = default;
Results::Details& Results::Details::operator=(Details&& rhs) noexcept = default;
base::Value::Dict Results::Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("setting", (this->setting).Clone());


  return to_value_result;
}


base::Value::List Results::Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}
}  // namespace Get

namespace Set {

Params::Details::Details()
: scope() {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) noexcept = default;
Params::Details& Params::Details::operator=(Details&& rhs) noexcept = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.primary_pattern = primary_pattern;
  out.secondary_pattern = secondary_pattern;
  if (resource_identifier) {
    out.resource_identifier = resource_identifier->Clone();
  }
  out.setting = setting.Clone();
  out.scope = scope;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  out.scope = Scope();
  const base::Value* primary_pattern_value = dict.Find("primaryPattern");
  if (!primary_pattern_value) {
    return false;
  }
  {
    auto* temp = (*primary_pattern_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.primary_pattern = *temp;
  }

  const base::Value* secondary_pattern_value = dict.Find("secondaryPattern");
  if (secondary_pattern_value) {
    {
      auto* temp = (*secondary_pattern_value).GetIfString();
      if (!temp) {
        out.secondary_pattern = std::nullopt;
        return false;
      }
      out.secondary_pattern = *temp;
    }
  }

  const base::Value* resource_identifier_value = dict.Find("resourceIdentifier");
  if (resource_identifier_value) {
    {
      if (!(*resource_identifier_value).is_dict()) {
        return false;
      }
      else {
        ResourceIdentifier temp;
        if (!ResourceIdentifier::Populate((*resource_identifier_value).GetDict(), temp))
          return false;
        out.resource_identifier = std::move(temp);
      }
    }
  }

  const base::Value* setting_value = dict.Find("setting");
  if (!setting_value) {
    return false;
  }
  {
    out.setting = (*setting_value).Clone();
  }

  const base::Value* scope_value = dict.Find("scope");
  if (scope_value) {
    {
      const std::string* scope_as_string = (*scope_value).GetIfString();
      if (!scope_as_string) {
        return false;
      }
      out.scope = ParseScope(*scope_as_string);
      if (out.scope == Scope()) {
        return false;
      }
    }
    } else {
    out.scope = Scope();
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


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Set

namespace GetResourceIdentifiers {

base::Value::List Results::Create(const std::vector<ResourceIdentifier>& resource_identifiers) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(resource_identifiers));

  return create_results;
}
}  // namespace GetResourceIdentifiers

}  // namespace ContentSetting

const char* ToString(AutoVerifyContentSetting enum_param) {
  switch (enum_param) {
    case AutoVerifyContentSetting::kAllow:
      return "allow";
    case AutoVerifyContentSetting::kBlock:
      return "block";
    case AutoVerifyContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AutoVerifyContentSetting ParseAutoVerifyContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return AutoVerifyContentSetting::kAllow;
  if (enum_string == "block")
    return AutoVerifyContentSetting::kBlock;
  return AutoVerifyContentSetting::kNone;
}

std::u16string GetAutoVerifyContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ClipboardContentSetting enum_param) {
  switch (enum_param) {
    case ClipboardContentSetting::kAllow:
      return "allow";
    case ClipboardContentSetting::kBlock:
      return "block";
    case ClipboardContentSetting::kAsk:
      return "ask";
    case ClipboardContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ClipboardContentSetting ParseClipboardContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return ClipboardContentSetting::kAllow;
  if (enum_string == "block")
    return ClipboardContentSetting::kBlock;
  if (enum_string == "ask")
    return ClipboardContentSetting::kAsk;
  return ClipboardContentSetting::kNone;
}

std::u16string GetClipboardContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\" or \"ask\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CookiesContentSetting enum_param) {
  switch (enum_param) {
    case CookiesContentSetting::kAllow:
      return "allow";
    case CookiesContentSetting::kBlock:
      return "block";
    case CookiesContentSetting::kSessionOnly:
      return "session_only";
    case CookiesContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CookiesContentSetting ParseCookiesContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return CookiesContentSetting::kAllow;
  if (enum_string == "block")
    return CookiesContentSetting::kBlock;
  if (enum_string == "session_only")
    return CookiesContentSetting::kSessionOnly;
  return CookiesContentSetting::kNone;
}

std::u16string GetCookiesContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\" or \"session_only\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ImagesContentSetting enum_param) {
  switch (enum_param) {
    case ImagesContentSetting::kAllow:
      return "allow";
    case ImagesContentSetting::kBlock:
      return "block";
    case ImagesContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ImagesContentSetting ParseImagesContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return ImagesContentSetting::kAllow;
  if (enum_string == "block")
    return ImagesContentSetting::kBlock;
  return ImagesContentSetting::kNone;
}

std::u16string GetImagesContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(JavascriptContentSetting enum_param) {
  switch (enum_param) {
    case JavascriptContentSetting::kAllow:
      return "allow";
    case JavascriptContentSetting::kBlock:
      return "block";
    case JavascriptContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

JavascriptContentSetting ParseJavascriptContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return JavascriptContentSetting::kAllow;
  if (enum_string == "block")
    return JavascriptContentSetting::kBlock;
  return JavascriptContentSetting::kNone;
}

std::u16string GetJavascriptContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(LocationContentSetting enum_param) {
  switch (enum_param) {
    case LocationContentSetting::kAllow:
      return "allow";
    case LocationContentSetting::kBlock:
      return "block";
    case LocationContentSetting::kAsk:
      return "ask";
    case LocationContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

LocationContentSetting ParseLocationContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return LocationContentSetting::kAllow;
  if (enum_string == "block")
    return LocationContentSetting::kBlock;
  if (enum_string == "ask")
    return LocationContentSetting::kAsk;
  return LocationContentSetting::kNone;
}

std::u16string GetLocationContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\" or \"ask\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PluginsContentSetting enum_param) {
  switch (enum_param) {
    case PluginsContentSetting::kBlock:
      return "block";
    case PluginsContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PluginsContentSetting ParsePluginsContentSetting(base::StringPiece enum_string) {
  if (enum_string == "block")
    return PluginsContentSetting::kBlock;
  return PluginsContentSetting::kNone;
}

std::u16string GetPluginsContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"block\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PopupsContentSetting enum_param) {
  switch (enum_param) {
    case PopupsContentSetting::kAllow:
      return "allow";
    case PopupsContentSetting::kBlock:
      return "block";
    case PopupsContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PopupsContentSetting ParsePopupsContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return PopupsContentSetting::kAllow;
  if (enum_string == "block")
    return PopupsContentSetting::kBlock;
  return PopupsContentSetting::kNone;
}

std::u16string GetPopupsContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(NotificationsContentSetting enum_param) {
  switch (enum_param) {
    case NotificationsContentSetting::kAllow:
      return "allow";
    case NotificationsContentSetting::kBlock:
      return "block";
    case NotificationsContentSetting::kAsk:
      return "ask";
    case NotificationsContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

NotificationsContentSetting ParseNotificationsContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return NotificationsContentSetting::kAllow;
  if (enum_string == "block")
    return NotificationsContentSetting::kBlock;
  if (enum_string == "ask")
    return NotificationsContentSetting::kAsk;
  return NotificationsContentSetting::kNone;
}

std::u16string GetNotificationsContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\" or \"ask\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FullscreenContentSetting enum_param) {
  switch (enum_param) {
    case FullscreenContentSetting::kAllow:
      return "allow";
    case FullscreenContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FullscreenContentSetting ParseFullscreenContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return FullscreenContentSetting::kAllow;
  return FullscreenContentSetting::kNone;
}

std::u16string GetFullscreenContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MouselockContentSetting enum_param) {
  switch (enum_param) {
    case MouselockContentSetting::kAllow:
      return "allow";
    case MouselockContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MouselockContentSetting ParseMouselockContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return MouselockContentSetting::kAllow;
  return MouselockContentSetting::kNone;
}

std::u16string GetMouselockContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MicrophoneContentSetting enum_param) {
  switch (enum_param) {
    case MicrophoneContentSetting::kAllow:
      return "allow";
    case MicrophoneContentSetting::kBlock:
      return "block";
    case MicrophoneContentSetting::kAsk:
      return "ask";
    case MicrophoneContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MicrophoneContentSetting ParseMicrophoneContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return MicrophoneContentSetting::kAllow;
  if (enum_string == "block")
    return MicrophoneContentSetting::kBlock;
  if (enum_string == "ask")
    return MicrophoneContentSetting::kAsk;
  return MicrophoneContentSetting::kNone;
}

std::u16string GetMicrophoneContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\" or \"ask\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CameraContentSetting enum_param) {
  switch (enum_param) {
    case CameraContentSetting::kAllow:
      return "allow";
    case CameraContentSetting::kBlock:
      return "block";
    case CameraContentSetting::kAsk:
      return "ask";
    case CameraContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CameraContentSetting ParseCameraContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return CameraContentSetting::kAllow;
  if (enum_string == "block")
    return CameraContentSetting::kBlock;
  if (enum_string == "ask")
    return CameraContentSetting::kAsk;
  return CameraContentSetting::kNone;
}

std::u16string GetCameraContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\" or \"ask\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PpapiBrokerContentSetting enum_param) {
  switch (enum_param) {
    case PpapiBrokerContentSetting::kBlock:
      return "block";
    case PpapiBrokerContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PpapiBrokerContentSetting ParsePpapiBrokerContentSetting(base::StringPiece enum_string) {
  if (enum_string == "block")
    return PpapiBrokerContentSetting::kBlock;
  return PpapiBrokerContentSetting::kNone;
}

std::u16string GetPpapiBrokerContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"block\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MultipleAutomaticDownloadsContentSetting enum_param) {
  switch (enum_param) {
    case MultipleAutomaticDownloadsContentSetting::kAllow:
      return "allow";
    case MultipleAutomaticDownloadsContentSetting::kBlock:
      return "block";
    case MultipleAutomaticDownloadsContentSetting::kAsk:
      return "ask";
    case MultipleAutomaticDownloadsContentSetting::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MultipleAutomaticDownloadsContentSetting ParseMultipleAutomaticDownloadsContentSetting(base::StringPiece enum_string) {
  if (enum_string == "allow")
    return MultipleAutomaticDownloadsContentSetting::kAllow;
  if (enum_string == "block")
    return MultipleAutomaticDownloadsContentSetting::kBlock;
  if (enum_string == "ask")
    return MultipleAutomaticDownloadsContentSetting::kAsk;
  return MultipleAutomaticDownloadsContentSetting::kNone;
}

std::u16string GetMultipleAutomaticDownloadsContentSettingParseError(base::StringPiece enum_string) {
  return u"expected \"allow\" or \"block\" or \"ask\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



}  // namespace content_settings
}  // namespace api
}  // namespace extensions

