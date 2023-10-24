// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/runtime.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/runtime.h"

#include <memory>
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
namespace runtime {
//
// Properties
//

//
// Types
//

const char* ToString(PlatformOs enum_param) {
  switch (enum_param) {
    case PlatformOs::kMac:
      return "mac";
    case PlatformOs::kWin:
      return "win";
    case PlatformOs::kAndroid:
      return "android";
    case PlatformOs::kCros:
      return "cros";
    case PlatformOs::kLinux:
      return "linux";
    case PlatformOs::kOpenbsd:
      return "openbsd";
    case PlatformOs::kFuchsia:
      return "fuchsia";
    case PlatformOs::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PlatformOs ParsePlatformOs(base::StringPiece enum_string) {
  if (enum_string == "mac")
    return PlatformOs::kMac;
  if (enum_string == "win")
    return PlatformOs::kWin;
  if (enum_string == "android")
    return PlatformOs::kAndroid;
  if (enum_string == "cros")
    return PlatformOs::kCros;
  if (enum_string == "linux")
    return PlatformOs::kLinux;
  if (enum_string == "openbsd")
    return PlatformOs::kOpenbsd;
  if (enum_string == "fuchsia")
    return PlatformOs::kFuchsia;
  return PlatformOs::kNone;
}

std::u16string GetPlatformOsParseError(base::StringPiece enum_string) {
  return u"expected \"mac\" or \"win\" or \"android\" or \"cros\" or \"linux\" or \"openbsd\" or \"fuchsia\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PlatformArch enum_param) {
  switch (enum_param) {
    case PlatformArch::kArm:
      return "arm";
    case PlatformArch::kArm64:
      return "arm64";
    case PlatformArch::kX86_32:
      return "x86-32";
    case PlatformArch::kX86_64:
      return "x86-64";
    case PlatformArch::kMips:
      return "mips";
    case PlatformArch::kMips64:
      return "mips64";
    case PlatformArch::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PlatformArch ParsePlatformArch(base::StringPiece enum_string) {
  if (enum_string == "arm")
    return PlatformArch::kArm;
  if (enum_string == "arm64")
    return PlatformArch::kArm64;
  if (enum_string == "x86-32")
    return PlatformArch::kX86_32;
  if (enum_string == "x86-64")
    return PlatformArch::kX86_64;
  if (enum_string == "mips")
    return PlatformArch::kMips;
  if (enum_string == "mips64")
    return PlatformArch::kMips64;
  return PlatformArch::kNone;
}

std::u16string GetPlatformArchParseError(base::StringPiece enum_string) {
  return u"expected \"arm\" or \"arm64\" or \"x86-32\" or \"x86-64\" or \"mips\" or \"mips64\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PlatformNaclArch enum_param) {
  switch (enum_param) {
    case PlatformNaclArch::kArm:
      return "arm";
    case PlatformNaclArch::kX86_32:
      return "x86-32";
    case PlatformNaclArch::kX86_64:
      return "x86-64";
    case PlatformNaclArch::kMips:
      return "mips";
    case PlatformNaclArch::kMips64:
      return "mips64";
    case PlatformNaclArch::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PlatformNaclArch ParsePlatformNaclArch(base::StringPiece enum_string) {
  if (enum_string == "arm")
    return PlatformNaclArch::kArm;
  if (enum_string == "x86-32")
    return PlatformNaclArch::kX86_32;
  if (enum_string == "x86-64")
    return PlatformNaclArch::kX86_64;
  if (enum_string == "mips")
    return PlatformNaclArch::kMips;
  if (enum_string == "mips64")
    return PlatformNaclArch::kMips64;
  return PlatformNaclArch::kNone;
}

std::u16string GetPlatformNaclArchParseError(base::StringPiece enum_string) {
  return u"expected \"arm\" or \"x86-32\" or \"x86-64\" or \"mips\" or \"mips64\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PlatformInfo::PlatformInfo()
: os(),
arch(),
nacl_arch() {}

PlatformInfo::~PlatformInfo() = default;
PlatformInfo::PlatformInfo(PlatformInfo&& rhs) = default;
PlatformInfo& PlatformInfo::operator=(PlatformInfo&& rhs) = default;
PlatformInfo PlatformInfo::Clone() const {
  PlatformInfo out;
  out.os = os;
  out.arch = arch;
  out.nacl_arch = nacl_arch;
  return out;
}

// static
bool PlatformInfo::Populate(
    const base::Value::Dict& dict, PlatformInfo& out) {
  const base::Value* os_value = dict.Find("os");
  if (!os_value) {
    return false;
  }
  {
    const std::string* platform_os_as_string = (*os_value).GetIfString();
    if (!platform_os_as_string) {
      return false;
    }
    out.os = ParsePlatformOs(*platform_os_as_string);
    if (out.os == PlatformOs()) {
      return false;
    }
  }

  const base::Value* arch_value = dict.Find("arch");
  if (!arch_value) {
    return false;
  }
  {
    const std::string* platform_arch_as_string = (*arch_value).GetIfString();
    if (!platform_arch_as_string) {
      return false;
    }
    out.arch = ParsePlatformArch(*platform_arch_as_string);
    if (out.arch == PlatformArch()) {
      return false;
    }
  }

  const base::Value* nacl_arch_value = dict.Find("nacl_arch");
  if (!nacl_arch_value) {
    return false;
  }
  {
    const std::string* platform_nacl_arch_as_string = (*nacl_arch_value).GetIfString();
    if (!platform_nacl_arch_as_string) {
      return false;
    }
    out.nacl_arch = ParsePlatformNaclArch(*platform_nacl_arch_as_string);
    if (out.nacl_arch == PlatformNaclArch()) {
      return false;
    }
  }

  return true;
}

// static
bool PlatformInfo::Populate(
    const base::Value& value, PlatformInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<PlatformInfo> PlatformInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<PlatformInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<PlatformInfo> PlatformInfo::FromValue(const base::Value::Dict& value) {
  PlatformInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<PlatformInfo> PlatformInfo::FromValue(const base::Value& value) {
  PlatformInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict PlatformInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("os", runtime::ToString(this->os));

  to_value_result.Set("arch", runtime::ToString(this->arch));

  to_value_result.Set("nacl_arch", runtime::ToString(this->nacl_arch));


  return to_value_result;
}


const char* ToString(RequestUpdateCheckStatus enum_param) {
  switch (enum_param) {
    case RequestUpdateCheckStatus::kThrottled:
      return "throttled";
    case RequestUpdateCheckStatus::kNoUpdate:
      return "no_update";
    case RequestUpdateCheckStatus::kUpdateAvailable:
      return "update_available";
    case RequestUpdateCheckStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RequestUpdateCheckStatus ParseRequestUpdateCheckStatus(base::StringPiece enum_string) {
  if (enum_string == "throttled")
    return RequestUpdateCheckStatus::kThrottled;
  if (enum_string == "no_update")
    return RequestUpdateCheckStatus::kNoUpdate;
  if (enum_string == "update_available")
    return RequestUpdateCheckStatus::kUpdateAvailable;
  return RequestUpdateCheckStatus::kNone;
}

std::u16string GetRequestUpdateCheckStatusParseError(base::StringPiece enum_string) {
  return u"expected \"throttled\" or \"no_update\" or \"update_available\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnInstalledReason enum_param) {
  switch (enum_param) {
    case OnInstalledReason::kInstall:
      return "install";
    case OnInstalledReason::kUpdate:
      return "update";
    case OnInstalledReason::kChromeUpdate:
      return "chrome_update";
    case OnInstalledReason::kSharedModuleUpdate:
      return "shared_module_update";
    case OnInstalledReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnInstalledReason ParseOnInstalledReason(base::StringPiece enum_string) {
  if (enum_string == "install")
    return OnInstalledReason::kInstall;
  if (enum_string == "update")
    return OnInstalledReason::kUpdate;
  if (enum_string == "chrome_update")
    return OnInstalledReason::kChromeUpdate;
  if (enum_string == "shared_module_update")
    return OnInstalledReason::kSharedModuleUpdate;
  return OnInstalledReason::kNone;
}

std::u16string GetOnInstalledReasonParseError(base::StringPiece enum_string) {
  return u"expected \"install\" or \"update\" or \"chrome_update\" or \"shared_module_update\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(OnRestartRequiredReason enum_param) {
  switch (enum_param) {
    case OnRestartRequiredReason::kAppUpdate:
      return "app_update";
    case OnRestartRequiredReason::kOsUpdate:
      return "os_update";
    case OnRestartRequiredReason::kPeriodic:
      return "periodic";
    case OnRestartRequiredReason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

OnRestartRequiredReason ParseOnRestartRequiredReason(base::StringPiece enum_string) {
  if (enum_string == "app_update")
    return OnRestartRequiredReason::kAppUpdate;
  if (enum_string == "os_update")
    return OnRestartRequiredReason::kOsUpdate;
  if (enum_string == "periodic")
    return OnRestartRequiredReason::kPeriodic;
  return OnRestartRequiredReason::kNone;
}

std::u16string GetOnRestartRequiredReasonParseError(base::StringPiece enum_string) {
  return u"expected \"app_update\" or \"os_update\" or \"periodic\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ContextType enum_param) {
  switch (enum_param) {
    case ContextType::kTab:
      return "TAB";
    case ContextType::kPopup:
      return "POPUP";
    case ContextType::kBackground:
      return "BACKGROUND";
    case ContextType::kOffscreenDocument:
      return "OFFSCREEN_DOCUMENT";
    case ContextType::kSidePanel:
      return "SIDE_PANEL";
    case ContextType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ContextType ParseContextType(base::StringPiece enum_string) {
  if (enum_string == "TAB")
    return ContextType::kTab;
  if (enum_string == "POPUP")
    return ContextType::kPopup;
  if (enum_string == "BACKGROUND")
    return ContextType::kBackground;
  if (enum_string == "OFFSCREEN_DOCUMENT")
    return ContextType::kOffscreenDocument;
  if (enum_string == "SIDE_PANEL")
    return ContextType::kSidePanel;
  return ContextType::kNone;
}

std::u16string GetContextTypeParseError(base::StringPiece enum_string) {
  return u"expected \"TAB\" or \"POPUP\" or \"BACKGROUND\" or \"OFFSCREEN_DOCUMENT\" or \"SIDE_PANEL\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ExtensionContext::ExtensionContext()
: context_type(),
tab_id(0),
window_id(0),
frame_id(0),
incognito(false) {}

ExtensionContext::~ExtensionContext() = default;
ExtensionContext::ExtensionContext(ExtensionContext&& rhs) = default;
ExtensionContext& ExtensionContext::operator=(ExtensionContext&& rhs) = default;
ExtensionContext ExtensionContext::Clone() const {
  ExtensionContext out;
  out.context_type = context_type;
  out.context_id = context_id;
  out.tab_id = tab_id;
  out.window_id = window_id;
  out.document_id = document_id;
  out.frame_id = frame_id;
  out.document_url = document_url;
  out.document_origin = document_origin;
  out.incognito = incognito;
  return out;
}

// static
bool ExtensionContext::Populate(
    const base::Value::Dict& dict, ExtensionContext& out) {
  const base::Value* context_type_value = dict.Find("contextType");
  if (!context_type_value) {
    return false;
  }
  {
    const std::string* context_type_as_string = (*context_type_value).GetIfString();
    if (!context_type_as_string) {
      return false;
    }
    out.context_type = ParseContextType(*context_type_as_string);
    if (out.context_type == ContextType()) {
      return false;
    }
  }

  const base::Value* context_id_value = dict.Find("contextId");
  if (!context_id_value) {
    return false;
  }
  {
    auto* temp = (*context_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.context_id = *temp;
  }

  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.tab_id = *temp;
  }

  const base::Value* window_id_value = dict.Find("windowId");
  if (!window_id_value) {
    return false;
  }
  {
    auto temp = (*window_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.window_id = *temp;
  }

  const base::Value* document_id_value = dict.Find("documentId");
  if (document_id_value) {
    {
      auto* temp = (*document_id_value).GetIfString();
      if (!temp) {
        out.document_id = absl::nullopt;
        return false;
      }
      out.document_id = *temp;
    }
  }

  const base::Value* frame_id_value = dict.Find("frameId");
  if (!frame_id_value) {
    return false;
  }
  {
    auto temp = (*frame_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.frame_id = *temp;
  }

  const base::Value* document_url_value = dict.Find("documentUrl");
  if (document_url_value) {
    {
      auto* temp = (*document_url_value).GetIfString();
      if (!temp) {
        out.document_url = absl::nullopt;
        return false;
      }
      out.document_url = *temp;
    }
  }

  const base::Value* document_origin_value = dict.Find("documentOrigin");
  if (document_origin_value) {
    {
      auto* temp = (*document_origin_value).GetIfString();
      if (!temp) {
        out.document_origin = absl::nullopt;
        return false;
      }
      out.document_origin = *temp;
    }
  }

  const base::Value* incognito_value = dict.Find("incognito");
  if (!incognito_value) {
    return false;
  }
  {
    auto temp = (*incognito_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.incognito = *temp;
  }

  return true;
}

// static
bool ExtensionContext::Populate(
    const base::Value& value, ExtensionContext& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ExtensionContext> ExtensionContext::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ExtensionContext>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<ExtensionContext> ExtensionContext::FromValue(const base::Value::Dict& value) {
  ExtensionContext out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ExtensionContext> ExtensionContext::FromValue(const base::Value& value) {
  ExtensionContext out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionContext::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("contextType", runtime::ToString(this->context_type));

  to_value_result.Set("contextId", this->context_id);

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("windowId", this->window_id);

  if (this->document_id) {
    to_value_result.Set("documentId", *this->document_id);

  }
  to_value_result.Set("frameId", this->frame_id);

  if (this->document_url) {
    to_value_result.Set("documentUrl", *this->document_url);

  }
  if (this->document_origin) {
    to_value_result.Set("documentOrigin", *this->document_origin);

  }
  to_value_result.Set("incognito", this->incognito);


  return to_value_result;
}


ContextFilter::ContextFilter()
 {}

ContextFilter::~ContextFilter() = default;
ContextFilter::ContextFilter(ContextFilter&& rhs) = default;
ContextFilter& ContextFilter::operator=(ContextFilter&& rhs) = default;
ContextFilter ContextFilter::Clone() const {
  ContextFilter out;
  out.context_types = context_types;
  out.context_ids = context_ids;
  out.tab_ids = tab_ids;
  out.window_ids = window_ids;
  out.document_ids = document_ids;
  out.frame_ids = frame_ids;
  out.document_urls = document_urls;
  out.document_origins = document_origins;
  out.incognito = incognito;
  return out;
}

// static
bool ContextFilter::Populate(
    const base::Value::Dict& dict, ContextFilter& out) {
  const base::Value* context_types_value = dict.Find("contextTypes");
  if (context_types_value) {
    {
      if (!(*context_types_value).is_list()) {
        return false;
      }
      else {
        out.context_types.emplace();
        for (const auto& it : ((*context_types_value)).GetList()) {
          ContextType tmp;
          const std::string* context_type_as_string = (it).GetIfString();
          if (!context_type_as_string) {
            return false;
          }
          tmp = ParseContextType(*context_type_as_string);
          if (tmp == ContextType()) {
            return false;
          }
          out.context_types->push_back(tmp);
        }
      }
    }
  }

  const base::Value* context_ids_value = dict.Find("contextIds");
  if (context_ids_value) {
    {
      if (!(*context_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*context_ids_value).GetList(), out.context_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* tab_ids_value = dict.Find("tabIds");
  if (tab_ids_value) {
    {
      if (!(*tab_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*tab_ids_value).GetList(), out.tab_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* window_ids_value = dict.Find("windowIds");
  if (window_ids_value) {
    {
      if (!(*window_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*window_ids_value).GetList(), out.window_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* document_ids_value = dict.Find("documentIds");
  if (document_ids_value) {
    {
      if (!(*document_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*document_ids_value).GetList(), out.document_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* frame_ids_value = dict.Find("frameIds");
  if (frame_ids_value) {
    {
      if (!(*frame_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*frame_ids_value).GetList(), out.frame_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* document_urls_value = dict.Find("documentUrls");
  if (document_urls_value) {
    {
      if (!(*document_urls_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*document_urls_value).GetList(), out.document_urls)) {
          return false;
        }
      }
    }
  }

  const base::Value* document_origins_value = dict.Find("documentOrigins");
  if (document_origins_value) {
    {
      if (!(*document_origins_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*document_origins_value).GetList(), out.document_origins)) {
          return false;
        }
      }
    }
  }

  const base::Value* incognito_value = dict.Find("incognito");
  if (incognito_value) {
    {
      auto temp = (*incognito_value).GetIfBool();
      if (!temp.has_value()) {
        out.incognito = absl::nullopt;
        return false;
      }
      out.incognito = *temp;
    }
  }

  return true;
}

// static
bool ContextFilter::Populate(
    const base::Value& value, ContextFilter& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ContextFilter> ContextFilter::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ContextFilter>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<ContextFilter> ContextFilter::FromValue(const base::Value::Dict& value) {
  ContextFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ContextFilter> ContextFilter::FromValue(const base::Value& value) {
  ContextFilter out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ContextFilter::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->context_types) {
    {
      std::vector<std::string> contextTypes_list;
      for (const auto& it : *(this->context_types)) {
        contextTypes_list.emplace_back(runtime::ToString(it));
      }
      to_value_result.Set("contextTypes", json_schema_compiler::util::CreateValueFromArray(contextTypes_list));
    }

  }
  if (this->context_ids) {
    to_value_result.Set("contextIds", json_schema_compiler::util::CreateValueFromArray(*this->context_ids));

  }
  if (this->tab_ids) {
    to_value_result.Set("tabIds", json_schema_compiler::util::CreateValueFromArray(*this->tab_ids));

  }
  if (this->window_ids) {
    to_value_result.Set("windowIds", json_schema_compiler::util::CreateValueFromArray(*this->window_ids));

  }
  if (this->document_ids) {
    to_value_result.Set("documentIds", json_schema_compiler::util::CreateValueFromArray(*this->document_ids));

  }
  if (this->frame_ids) {
    to_value_result.Set("frameIds", json_schema_compiler::util::CreateValueFromArray(*this->frame_ids));

  }
  if (this->document_urls) {
    to_value_result.Set("documentUrls", json_schema_compiler::util::CreateValueFromArray(*this->document_urls));

  }
  if (this->document_origins) {
    to_value_result.Set("documentOrigins", json_schema_compiler::util::CreateValueFromArray(*this->document_origins));

  }
  if (this->incognito) {
    to_value_result.Set("incognito", *this->incognito);

  }

  return to_value_result;
}



//
// Functions
//

namespace GetBackgroundPage {

Results::BackgroundPage::BackgroundPage()
 {}

Results::BackgroundPage::~BackgroundPage() = default;
Results::BackgroundPage::BackgroundPage(BackgroundPage&& rhs) = default;
Results::BackgroundPage& Results::BackgroundPage::operator=(BackgroundPage&& rhs) = default;
base::Value::Dict Results::BackgroundPage::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const BackgroundPage& background_page) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((background_page).ToValue());

  return create_results;
}
}  // namespace GetBackgroundPage

namespace OpenOptionsPage {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace OpenOptionsPage

namespace SetUninstallURL {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetUninstallURL

namespace Reload {

}  // namespace Reload

namespace RequestUpdateCheck {

Results::Result::Result()
: status() {}

Results::Result::~Result() = default;
Results::Result::Result(Result&& rhs) = default;
Results::Result& Results::Result::operator=(Result&& rhs) = default;
base::Value::Dict Results::Result::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("status", runtime::ToString(this->status));

  if (this->version) {
    to_value_result.Set("version", *this->version);

  }

  return to_value_result;
}


base::Value::List Results::Create(const Result& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace RequestUpdateCheck

namespace Restart {

}  // namespace Restart

namespace RestartAfterDelay {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& seconds_value = args[0];
    {
      auto temp = seconds_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.seconds = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace RestartAfterDelay

namespace GetPlatformInfo {

base::Value::List Results::Create(const PlatformInfo& platform_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((platform_info).ToValue());

  return create_results;
}
}  // namespace GetPlatformInfo

namespace GetPackageDirectoryEntry {

Results::DirectoryEntry::DirectoryEntry()
 {}

Results::DirectoryEntry::~DirectoryEntry() = default;
Results::DirectoryEntry::DirectoryEntry(DirectoryEntry&& rhs) = default;
Results::DirectoryEntry& Results::DirectoryEntry::operator=(DirectoryEntry&& rhs) = default;
base::Value::Dict Results::DirectoryEntry::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const DirectoryEntry& directory_entry) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((directory_entry).ToValue());

  return create_results;
}
}  // namespace GetPackageDirectoryEntry

namespace GetContexts {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& filter_value = args[0];
    {
      if (!filter_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ContextFilter::Populate(filter_value.GetDict(), params.filter)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<ExtensionContext>& contexts) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(contexts));

  return create_results;
}
}  // namespace GetContexts

//
// Events
//

namespace OnStartup {

const char kEventName[] = "runtime.onStartup";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnStartup

namespace OnInstalled {

const char kEventName[] = "runtime.onInstalled";

Details::Details()
: reason() {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("reason", runtime::ToString(this->reason));

  if (this->previous_version) {
    to_value_result.Set("previousVersion", *this->previous_version);

  }
  if (this->id) {
    to_value_result.Set("id", *this->id);

  }

  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnInstalled

namespace OnSuspend {

const char kEventName[] = "runtime.onSuspend";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnSuspend

namespace OnSuspendCanceled {

const char kEventName[] = "runtime.onSuspendCanceled";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnSuspendCanceled

namespace OnUpdateAvailable {

const char kEventName[] = "runtime.onUpdateAvailable";

Details::Details()
 {}

Details::~Details() = default;
Details::Details(Details&& rhs) = default;
Details& Details::operator=(Details&& rhs) = default;
base::Value::Dict Details::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("version", this->version);

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Create(const Details& details) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((details).ToValue());

  return create_results;
}

}  // namespace OnUpdateAvailable

namespace OnBrowserUpdateAvailable {

const char kEventName[] = "runtime.onBrowserUpdateAvailable";

base::Value::List Create() {
  base::Value::List create_results;

  return create_results;
}

}  // namespace OnBrowserUpdateAvailable

namespace OnRestartRequired {

const char kEventName[] = "runtime.onRestartRequired";

base::Value::List Create(const OnRestartRequiredReason& reason) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(runtime::ToString(reason));

  return create_results;
}

}  // namespace OnRestartRequired

}  // namespace runtime
}  // namespace api
}  // namespace extensions

