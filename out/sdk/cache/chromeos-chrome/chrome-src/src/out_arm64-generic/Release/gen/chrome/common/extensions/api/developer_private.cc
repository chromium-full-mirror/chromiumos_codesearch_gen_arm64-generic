// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/developer_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/developer_private.h"

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
namespace developer_private {
//
// Types
//

const char* ToString(ItemType enum_param) {
  switch (enum_param) {
    case ItemType::kHostedApp:
      return "hosted_app";
    case ItemType::kPackagedApp:
      return "packaged_app";
    case ItemType::kLegacyPackagedApp:
      return "legacy_packaged_app";
    case ItemType::kExtension:
      return "extension";
    case ItemType::kTheme:
      return "theme";
    case ItemType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ItemType ParseItemType(base::StringPiece enum_string) {
  if (enum_string == "hosted_app")
    return ItemType::kHostedApp;
  if (enum_string == "packaged_app")
    return ItemType::kPackagedApp;
  if (enum_string == "legacy_packaged_app")
    return ItemType::kLegacyPackagedApp;
  if (enum_string == "extension")
    return ItemType::kExtension;
  if (enum_string == "theme")
    return ItemType::kTheme;
  return ItemType::kNone;
}

std::u16string GetItemTypeParseError(base::StringPiece enum_string) {
  return u"expected \"hosted_app\" or \"packaged_app\" or \"legacy_packaged_app\" or \"extension\" or \"theme\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ItemInspectView::ItemInspectView()
: render_process_id(0),
render_view_id(0),
incognito(false),
generated_background_page(false) {}

ItemInspectView::~ItemInspectView() = default;
ItemInspectView::ItemInspectView(ItemInspectView&& rhs) noexcept = default;
ItemInspectView& ItemInspectView::operator=(ItemInspectView&& rhs) noexcept = default;
ItemInspectView ItemInspectView::Clone() const {
  ItemInspectView out;
  out.path = path;
  out.render_process_id = render_process_id;
  out.render_view_id = render_view_id;
  out.incognito = incognito;
  out.generated_background_page = generated_background_page;
  return out;
}

// static
bool ItemInspectView::Populate(
    const base::Value::Dict& dict, ItemInspectView& out) {
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

  const base::Value* render_process_id_value = dict.Find("render_process_id");
  if (!render_process_id_value) {
    return false;
  }
  {
    auto temp = (*render_process_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.render_process_id = *temp;
  }

  const base::Value* render_view_id_value = dict.Find("render_view_id");
  if (!render_view_id_value) {
    return false;
  }
  {
    auto temp = (*render_view_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.render_view_id = *temp;
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

  const base::Value* generated_background_page_value = dict.Find("generatedBackgroundPage");
  if (!generated_background_page_value) {
    return false;
  }
  {
    auto temp = (*generated_background_page_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.generated_background_page = *temp;
  }

  return true;
}

// static
bool ItemInspectView::Populate(
    const base::Value& value, ItemInspectView& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ItemInspectView> ItemInspectView::FromValue(const base::Value::Dict& value) {
  ItemInspectView out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ItemInspectView> ItemInspectView::FromValue(const base::Value& value) {
  ItemInspectView out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ItemInspectView::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("path", this->path);

  to_value_result.Set("render_process_id", this->render_process_id);

  to_value_result.Set("render_view_id", this->render_view_id);

  to_value_result.Set("incognito", this->incognito);

  to_value_result.Set("generatedBackgroundPage", this->generated_background_page);


  return to_value_result;
}


InspectOptions::RenderProcessId::RenderProcessId()
 {}

InspectOptions::RenderProcessId::~RenderProcessId() = default;
InspectOptions::RenderProcessId::RenderProcessId(RenderProcessId&& rhs) noexcept = default;
InspectOptions::RenderProcessId& InspectOptions::RenderProcessId::operator=(RenderProcessId&& rhs) noexcept = default;
InspectOptions::RenderProcessId InspectOptions::RenderProcessId::Clone() const {
  RenderProcessId out;
  out.as_string = as_string;
  out.as_integer = as_integer;
  return out;
}

// static
bool InspectOptions::RenderProcessId::Populate(
    const base::Value& value, RenderProcessId& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<InspectOptions::RenderProcessId> InspectOptions::RenderProcessId::FromValue(const base::Value& value) {
  RenderProcessId out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value InspectOptions::RenderProcessId::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for render_process_id";
    result = base::Value(*as_string);

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for render_process_id";
    result = base::Value(*as_integer);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for render_process_id";
  return result;
}


InspectOptions::RenderViewId::RenderViewId()
 {}

InspectOptions::RenderViewId::~RenderViewId() = default;
InspectOptions::RenderViewId::RenderViewId(RenderViewId&& rhs) noexcept = default;
InspectOptions::RenderViewId& InspectOptions::RenderViewId::operator=(RenderViewId&& rhs) noexcept = default;
InspectOptions::RenderViewId InspectOptions::RenderViewId::Clone() const {
  RenderViewId out;
  out.as_string = as_string;
  out.as_integer = as_integer;
  return out;
}

// static
bool InspectOptions::RenderViewId::Populate(
    const base::Value& value, RenderViewId& out) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        out.as_string = std::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::INTEGER) {
    {
      auto temp = value.GetIfInt();
      if (!temp.has_value()) {
        out.as_integer = std::nullopt;
        return false;
      }
      out.as_integer = *temp;
    }
    return true;
  }
  return false;
}

// static
std::optional<InspectOptions::RenderViewId> InspectOptions::RenderViewId::FromValue(const base::Value& value) {
  RenderViewId out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value InspectOptions::RenderViewId::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for render_view_id";
    result = base::Value(*as_string);

  }
  if (as_integer) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for render_view_id";
    result = base::Value(*as_integer);

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for render_view_id";
  return result;
}



InspectOptions::InspectOptions()
: incognito(false) {}

InspectOptions::~InspectOptions() = default;
InspectOptions::InspectOptions(InspectOptions&& rhs) noexcept = default;
InspectOptions& InspectOptions::operator=(InspectOptions&& rhs) noexcept = default;
InspectOptions InspectOptions::Clone() const {
  InspectOptions out;
  out.extension_id = extension_id;
  out.render_process_id = render_process_id.Clone();
  out.render_view_id = render_view_id.Clone();
  out.incognito = incognito;
  return out;
}

// static
bool InspectOptions::Populate(
    const base::Value::Dict& dict, InspectOptions& out) {
  const base::Value* extension_id_value = dict.Find("extension_id");
  if (!extension_id_value) {
    return false;
  }
  {
    auto* temp = (*extension_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.extension_id = *temp;
  }

  const base::Value* render_process_id_value = dict.Find("render_process_id");
  if (!render_process_id_value) {
    return false;
  }
  {
    if (!RenderProcessId::Populate((*render_process_id_value), out.render_process_id))
      return false;
  }

  const base::Value* render_view_id_value = dict.Find("render_view_id");
  if (!render_view_id_value) {
    return false;
  }
  {
    if (!RenderViewId::Populate((*render_view_id_value), out.render_view_id))
      return false;
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
bool InspectOptions::Populate(
    const base::Value& value, InspectOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InspectOptions> InspectOptions::FromValue(const base::Value::Dict& value) {
  InspectOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InspectOptions> InspectOptions::FromValue(const base::Value& value) {
  InspectOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict InspectOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("extension_id", this->extension_id);

  to_value_result.Set("render_process_id", (this->render_process_id).ToValue());

  to_value_result.Set("render_view_id", (this->render_view_id).ToValue());

  to_value_result.Set("incognito", this->incognito);


  return to_value_result;
}


InstallWarning::InstallWarning()
 {}

InstallWarning::~InstallWarning() = default;
InstallWarning::InstallWarning(InstallWarning&& rhs) noexcept = default;
InstallWarning& InstallWarning::operator=(InstallWarning&& rhs) noexcept = default;
InstallWarning InstallWarning::Clone() const {
  InstallWarning out;
  out.message = message;
  return out;
}

// static
bool InstallWarning::Populate(
    const base::Value::Dict& dict, InstallWarning& out) {
  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool InstallWarning::Populate(
    const base::Value& value, InstallWarning& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InstallWarning> InstallWarning::FromValue(const base::Value::Dict& value) {
  InstallWarning out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InstallWarning> InstallWarning::FromValue(const base::Value& value) {
  InstallWarning out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict InstallWarning::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("message", this->message);


  return to_value_result;
}


const char* ToString(ExtensionType enum_param) {
  switch (enum_param) {
    case ExtensionType::kHostedApp:
      return "HOSTED_APP";
    case ExtensionType::kPlatformApp:
      return "PLATFORM_APP";
    case ExtensionType::kLegacyPackagedApp:
      return "LEGACY_PACKAGED_APP";
    case ExtensionType::kExtension:
      return "EXTENSION";
    case ExtensionType::kTheme:
      return "THEME";
    case ExtensionType::kSharedModule:
      return "SHARED_MODULE";
    case ExtensionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionType ParseExtensionType(base::StringPiece enum_string) {
  if (enum_string == "HOSTED_APP")
    return ExtensionType::kHostedApp;
  if (enum_string == "PLATFORM_APP")
    return ExtensionType::kPlatformApp;
  if (enum_string == "LEGACY_PACKAGED_APP")
    return ExtensionType::kLegacyPackagedApp;
  if (enum_string == "EXTENSION")
    return ExtensionType::kExtension;
  if (enum_string == "THEME")
    return ExtensionType::kTheme;
  if (enum_string == "SHARED_MODULE")
    return ExtensionType::kSharedModule;
  return ExtensionType::kNone;
}

std::u16string GetExtensionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"HOSTED_APP\" or \"PLATFORM_APP\" or \"LEGACY_PACKAGED_APP\" or \"EXTENSION\" or \"THEME\" or \"SHARED_MODULE\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Location enum_param) {
  switch (enum_param) {
    case Location::kFromStore:
      return "FROM_STORE";
    case Location::kUnpacked:
      return "UNPACKED";
    case Location::kThirdParty:
      return "THIRD_PARTY";
    case Location::kInstalledByDefault:
      return "INSTALLED_BY_DEFAULT";
    case Location::kUnknown:
      return "UNKNOWN";
    case Location::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Location ParseLocation(base::StringPiece enum_string) {
  if (enum_string == "FROM_STORE")
    return Location::kFromStore;
  if (enum_string == "UNPACKED")
    return Location::kUnpacked;
  if (enum_string == "THIRD_PARTY")
    return Location::kThirdParty;
  if (enum_string == "INSTALLED_BY_DEFAULT")
    return Location::kInstalledByDefault;
  if (enum_string == "UNKNOWN")
    return Location::kUnknown;
  return Location::kNone;
}

std::u16string GetLocationParseError(base::StringPiece enum_string) {
  return u"expected \"FROM_STORE\" or \"UNPACKED\" or \"THIRD_PARTY\" or \"INSTALLED_BY_DEFAULT\" or \"UNKNOWN\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ViewType enum_param) {
  switch (enum_param) {
    case ViewType::kAppWindow:
      return "APP_WINDOW";
    case ViewType::kBackgroundContents:
      return "BACKGROUND_CONTENTS";
    case ViewType::kComponent:
      return "COMPONENT";
    case ViewType::kExtensionBackgroundPage:
      return "EXTENSION_BACKGROUND_PAGE";
    case ViewType::kExtensionGuest:
      return "EXTENSION_GUEST";
    case ViewType::kExtensionPopup:
      return "EXTENSION_POPUP";
    case ViewType::kExtensionServiceWorkerBackground:
      return "EXTENSION_SERVICE_WORKER_BACKGROUND";
    case ViewType::kTabContents:
      return "TAB_CONTENTS";
    case ViewType::kOffscreenDocument:
      return "OFFSCREEN_DOCUMENT";
    case ViewType::kExtensionSidePanel:
      return "EXTENSION_SIDE_PANEL";
    case ViewType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ViewType ParseViewType(base::StringPiece enum_string) {
  if (enum_string == "APP_WINDOW")
    return ViewType::kAppWindow;
  if (enum_string == "BACKGROUND_CONTENTS")
    return ViewType::kBackgroundContents;
  if (enum_string == "COMPONENT")
    return ViewType::kComponent;
  if (enum_string == "EXTENSION_BACKGROUND_PAGE")
    return ViewType::kExtensionBackgroundPage;
  if (enum_string == "EXTENSION_GUEST")
    return ViewType::kExtensionGuest;
  if (enum_string == "EXTENSION_POPUP")
    return ViewType::kExtensionPopup;
  if (enum_string == "EXTENSION_SERVICE_WORKER_BACKGROUND")
    return ViewType::kExtensionServiceWorkerBackground;
  if (enum_string == "TAB_CONTENTS")
    return ViewType::kTabContents;
  if (enum_string == "OFFSCREEN_DOCUMENT")
    return ViewType::kOffscreenDocument;
  if (enum_string == "EXTENSION_SIDE_PANEL")
    return ViewType::kExtensionSidePanel;
  return ViewType::kNone;
}

std::u16string GetViewTypeParseError(base::StringPiece enum_string) {
  return u"expected \"APP_WINDOW\" or \"BACKGROUND_CONTENTS\" or \"COMPONENT\" or \"EXTENSION_BACKGROUND_PAGE\" or \"EXTENSION_GUEST\" or \"EXTENSION_POPUP\" or \"EXTENSION_SERVICE_WORKER_BACKGROUND\" or \"TAB_CONTENTS\" or \"OFFSCREEN_DOCUMENT\" or \"EXTENSION_SIDE_PANEL\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ErrorType enum_param) {
  switch (enum_param) {
    case ErrorType::kManifest:
      return "MANIFEST";
    case ErrorType::kRuntime:
      return "RUNTIME";
    case ErrorType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ErrorType ParseErrorType(base::StringPiece enum_string) {
  if (enum_string == "MANIFEST")
    return ErrorType::kManifest;
  if (enum_string == "RUNTIME")
    return ErrorType::kRuntime;
  return ErrorType::kNone;
}

std::u16string GetErrorTypeParseError(base::StringPiece enum_string) {
  return u"expected \"MANIFEST\" or \"RUNTIME\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ErrorLevel enum_param) {
  switch (enum_param) {
    case ErrorLevel::kLog:
      return "LOG";
    case ErrorLevel::kWarn:
      return "WARN";
    case ErrorLevel::kError:
      return "ERROR";
    case ErrorLevel::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ErrorLevel ParseErrorLevel(base::StringPiece enum_string) {
  if (enum_string == "LOG")
    return ErrorLevel::kLog;
  if (enum_string == "WARN")
    return ErrorLevel::kWarn;
  if (enum_string == "ERROR")
    return ErrorLevel::kError;
  return ErrorLevel::kNone;
}

std::u16string GetErrorLevelParseError(base::StringPiece enum_string) {
  return u"expected \"LOG\" or \"WARN\" or \"ERROR\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExtensionState enum_param) {
  switch (enum_param) {
    case ExtensionState::kEnabled:
      return "ENABLED";
    case ExtensionState::kDisabled:
      return "DISABLED";
    case ExtensionState::kTerminated:
      return "TERMINATED";
    case ExtensionState::kBlacklisted:
      return "BLACKLISTED";
    case ExtensionState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExtensionState ParseExtensionState(base::StringPiece enum_string) {
  if (enum_string == "ENABLED")
    return ExtensionState::kEnabled;
  if (enum_string == "DISABLED")
    return ExtensionState::kDisabled;
  if (enum_string == "TERMINATED")
    return ExtensionState::kTerminated;
  if (enum_string == "BLACKLISTED")
    return ExtensionState::kBlacklisted;
  return ExtensionState::kNone;
}

std::u16string GetExtensionStateParseError(base::StringPiece enum_string) {
  return u"expected \"ENABLED\" or \"DISABLED\" or \"TERMINATED\" or \"BLACKLISTED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CommandScope enum_param) {
  switch (enum_param) {
    case CommandScope::kGlobal:
      return "GLOBAL";
    case CommandScope::kChrome:
      return "CHROME";
    case CommandScope::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CommandScope ParseCommandScope(base::StringPiece enum_string) {
  if (enum_string == "GLOBAL")
    return CommandScope::kGlobal;
  if (enum_string == "CHROME")
    return CommandScope::kChrome;
  return CommandScope::kNone;
}

std::u16string GetCommandScopeParseError(base::StringPiece enum_string) {
  return u"expected \"GLOBAL\" or \"CHROME\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AccessModifier::AccessModifier()
: is_enabled(false),
is_active(false) {}

AccessModifier::~AccessModifier() = default;
AccessModifier::AccessModifier(AccessModifier&& rhs) noexcept = default;
AccessModifier& AccessModifier::operator=(AccessModifier&& rhs) noexcept = default;
AccessModifier AccessModifier::Clone() const {
  AccessModifier out;
  out.is_enabled = is_enabled;
  out.is_active = is_active;
  return out;
}

// static
bool AccessModifier::Populate(
    const base::Value::Dict& dict, AccessModifier& out) {
  const base::Value* is_enabled_value = dict.Find("isEnabled");
  if (!is_enabled_value) {
    return false;
  }
  {
    auto temp = (*is_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_enabled = *temp;
  }

  const base::Value* is_active_value = dict.Find("isActive");
  if (!is_active_value) {
    return false;
  }
  {
    auto temp = (*is_active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_active = *temp;
  }

  return true;
}

// static
bool AccessModifier::Populate(
    const base::Value& value, AccessModifier& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AccessModifier> AccessModifier::FromValue(const base::Value::Dict& value) {
  AccessModifier out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AccessModifier> AccessModifier::FromValue(const base::Value& value) {
  AccessModifier out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AccessModifier::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("isEnabled", this->is_enabled);

  to_value_result.Set("isActive", this->is_active);


  return to_value_result;
}


StackFrame::StackFrame()
: line_number(0),
column_number(0) {}

StackFrame::~StackFrame() = default;
StackFrame::StackFrame(StackFrame&& rhs) noexcept = default;
StackFrame& StackFrame::operator=(StackFrame&& rhs) noexcept = default;
StackFrame StackFrame::Clone() const {
  StackFrame out;
  out.line_number = line_number;
  out.column_number = column_number;
  out.url = url;
  out.function_name = function_name;
  return out;
}

// static
bool StackFrame::Populate(
    const base::Value::Dict& dict, StackFrame& out) {
  const base::Value* line_number_value = dict.Find("lineNumber");
  if (!line_number_value) {
    return false;
  }
  {
    auto temp = (*line_number_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.line_number = *temp;
  }

  const base::Value* column_number_value = dict.Find("columnNumber");
  if (!column_number_value) {
    return false;
  }
  {
    auto temp = (*column_number_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.column_number = *temp;
  }

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

  const base::Value* function_name_value = dict.Find("functionName");
  if (!function_name_value) {
    return false;
  }
  {
    auto* temp = (*function_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.function_name = *temp;
  }

  return true;
}

// static
bool StackFrame::Populate(
    const base::Value& value, StackFrame& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<StackFrame> StackFrame::FromValue(const base::Value::Dict& value) {
  StackFrame out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StackFrame> StackFrame::FromValue(const base::Value& value) {
  StackFrame out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict StackFrame::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("lineNumber", this->line_number);

  to_value_result.Set("columnNumber", this->column_number);

  to_value_result.Set("url", this->url);

  to_value_result.Set("functionName", this->function_name);


  return to_value_result;
}


ManifestError::ManifestError()
: type(),
from_incognito(false),
id(0) {}

ManifestError::~ManifestError() = default;
ManifestError::ManifestError(ManifestError&& rhs) noexcept = default;
ManifestError& ManifestError::operator=(ManifestError&& rhs) noexcept = default;
ManifestError ManifestError::Clone() const {
  ManifestError out;
  out.type = type;
  out.extension_id = extension_id;
  out.from_incognito = from_incognito;
  out.source = source;
  out.message = message;
  out.id = id;
  out.manifest_key = manifest_key;
  out.manifest_specific = manifest_specific;
  return out;
}

// static
bool ManifestError::Populate(
    const base::Value::Dict& dict, ManifestError& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* error_type_as_string = (*type_value).GetIfString();
    if (!error_type_as_string) {
      return false;
    }
    out.type = ParseErrorType(*error_type_as_string);
    if (out.type == ErrorType()) {
      return false;
    }
  }

  const base::Value* extension_id_value = dict.Find("extensionId");
  if (!extension_id_value) {
    return false;
  }
  {
    auto* temp = (*extension_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.extension_id = *temp;
  }

  const base::Value* from_incognito_value = dict.Find("fromIncognito");
  if (!from_incognito_value) {
    return false;
  }
  {
    auto temp = (*from_incognito_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.from_incognito = *temp;
  }

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    auto* temp = (*source_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.source = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* manifest_key_value = dict.Find("manifestKey");
  if (!manifest_key_value) {
    return false;
  }
  {
    auto* temp = (*manifest_key_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.manifest_key = *temp;
  }

  const base::Value* manifest_specific_value = dict.Find("manifestSpecific");
  if (manifest_specific_value) {
    {
      auto* temp = (*manifest_specific_value).GetIfString();
      if (!temp) {
        out.manifest_specific = std::nullopt;
        return false;
      }
      out.manifest_specific = *temp;
    }
  }

  return true;
}

// static
bool ManifestError::Populate(
    const base::Value& value, ManifestError& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ManifestError> ManifestError::FromValue(const base::Value::Dict& value) {
  ManifestError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ManifestError> ManifestError::FromValue(const base::Value& value) {
  ManifestError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ManifestError::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", developer_private::ToString(this->type));

  to_value_result.Set("extensionId", this->extension_id);

  to_value_result.Set("fromIncognito", this->from_incognito);

  to_value_result.Set("source", this->source);

  to_value_result.Set("message", this->message);

  to_value_result.Set("id", this->id);

  to_value_result.Set("manifestKey", this->manifest_key);

  if (this->manifest_specific) {
    to_value_result.Set("manifestSpecific", *this->manifest_specific);

  }

  return to_value_result;
}


RuntimeError::RuntimeError()
: type(),
from_incognito(false),
id(0),
severity(),
occurrences(0),
render_view_id(0),
render_process_id(0),
can_inspect(false) {}

RuntimeError::~RuntimeError() = default;
RuntimeError::RuntimeError(RuntimeError&& rhs) noexcept = default;
RuntimeError& RuntimeError::operator=(RuntimeError&& rhs) noexcept = default;
RuntimeError RuntimeError::Clone() const {
  RuntimeError out;
  out.type = type;
  out.extension_id = extension_id;
  out.from_incognito = from_incognito;
  out.source = source;
  out.message = message;
  out.id = id;
  out.severity = severity;
  out.context_url = context_url;
  out.occurrences = occurrences;
  out.render_view_id = render_view_id;
  out.render_process_id = render_process_id;
  out.can_inspect = can_inspect;
  out.stack_trace.reserve(stack_trace.size());
  for (const auto& element : stack_trace) {
    json_schema_compiler::util::AppendToContainer(out.stack_trace, element.Clone());
  }
  return out;
}

// static
bool RuntimeError::Populate(
    const base::Value::Dict& dict, RuntimeError& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* error_type_as_string = (*type_value).GetIfString();
    if (!error_type_as_string) {
      return false;
    }
    out.type = ParseErrorType(*error_type_as_string);
    if (out.type == ErrorType()) {
      return false;
    }
  }

  const base::Value* extension_id_value = dict.Find("extensionId");
  if (!extension_id_value) {
    return false;
  }
  {
    auto* temp = (*extension_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.extension_id = *temp;
  }

  const base::Value* from_incognito_value = dict.Find("fromIncognito");
  if (!from_incognito_value) {
    return false;
  }
  {
    auto temp = (*from_incognito_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.from_incognito = *temp;
  }

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    return false;
  }
  {
    auto* temp = (*source_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.source = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  const base::Value* id_value = dict.Find("id");
  if (!id_value) {
    return false;
  }
  {
    auto temp = (*id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.id = *temp;
  }

  const base::Value* severity_value = dict.Find("severity");
  if (!severity_value) {
    return false;
  }
  {
    const std::string* error_level_as_string = (*severity_value).GetIfString();
    if (!error_level_as_string) {
      return false;
    }
    out.severity = ParseErrorLevel(*error_level_as_string);
    if (out.severity == ErrorLevel()) {
      return false;
    }
  }

  const base::Value* context_url_value = dict.Find("contextUrl");
  if (!context_url_value) {
    return false;
  }
  {
    auto* temp = (*context_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.context_url = *temp;
  }

  const base::Value* occurrences_value = dict.Find("occurrences");
  if (!occurrences_value) {
    return false;
  }
  {
    auto temp = (*occurrences_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.occurrences = *temp;
  }

  const base::Value* render_view_id_value = dict.Find("renderViewId");
  if (!render_view_id_value) {
    return false;
  }
  {
    auto temp = (*render_view_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.render_view_id = *temp;
  }

  const base::Value* render_process_id_value = dict.Find("renderProcessId");
  if (!render_process_id_value) {
    return false;
  }
  {
    auto temp = (*render_process_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.render_process_id = *temp;
  }

  const base::Value* can_inspect_value = dict.Find("canInspect");
  if (!can_inspect_value) {
    return false;
  }
  {
    auto temp = (*can_inspect_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.can_inspect = *temp;
  }

  const base::Value* stack_trace_value = dict.Find("stackTrace");
  if (!stack_trace_value) {
    return false;
  }
  {
    if (!(*stack_trace_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*stack_trace_value).GetList(), out.stack_trace)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool RuntimeError::Populate(
    const base::Value& value, RuntimeError& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RuntimeError> RuntimeError::FromValue(const base::Value::Dict& value) {
  RuntimeError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RuntimeError> RuntimeError::FromValue(const base::Value& value) {
  RuntimeError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RuntimeError::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", developer_private::ToString(this->type));

  to_value_result.Set("extensionId", this->extension_id);

  to_value_result.Set("fromIncognito", this->from_incognito);

  to_value_result.Set("source", this->source);

  to_value_result.Set("message", this->message);

  to_value_result.Set("id", this->id);

  to_value_result.Set("severity", developer_private::ToString(this->severity));

  to_value_result.Set("contextUrl", this->context_url);

  to_value_result.Set("occurrences", this->occurrences);

  to_value_result.Set("renderViewId", this->render_view_id);

  to_value_result.Set("renderProcessId", this->render_process_id);

  to_value_result.Set("canInspect", this->can_inspect);

  to_value_result.Set("stackTrace", json_schema_compiler::util::CreateValueFromArray(this->stack_trace));


  return to_value_result;
}


DisableReasons::DisableReasons()
: suspicious_install(false),
corrupt_install(false),
update_required(false),
published_in_store_required(false),
blocked_by_policy(false),
reloading(false),
custodian_approval_required(false),
parent_disabled_permissions(false) {}

DisableReasons::~DisableReasons() = default;
DisableReasons::DisableReasons(DisableReasons&& rhs) noexcept = default;
DisableReasons& DisableReasons::operator=(DisableReasons&& rhs) noexcept = default;
DisableReasons DisableReasons::Clone() const {
  DisableReasons out;
  out.suspicious_install = suspicious_install;
  out.corrupt_install = corrupt_install;
  out.update_required = update_required;
  out.published_in_store_required = published_in_store_required;
  out.blocked_by_policy = blocked_by_policy;
  out.reloading = reloading;
  out.custodian_approval_required = custodian_approval_required;
  out.parent_disabled_permissions = parent_disabled_permissions;
  return out;
}

// static
bool DisableReasons::Populate(
    const base::Value::Dict& dict, DisableReasons& out) {
  const base::Value* suspicious_install_value = dict.Find("suspiciousInstall");
  if (!suspicious_install_value) {
    return false;
  }
  {
    auto temp = (*suspicious_install_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.suspicious_install = *temp;
  }

  const base::Value* corrupt_install_value = dict.Find("corruptInstall");
  if (!corrupt_install_value) {
    return false;
  }
  {
    auto temp = (*corrupt_install_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.corrupt_install = *temp;
  }

  const base::Value* update_required_value = dict.Find("updateRequired");
  if (!update_required_value) {
    return false;
  }
  {
    auto temp = (*update_required_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.update_required = *temp;
  }

  const base::Value* published_in_store_required_value = dict.Find("publishedInStoreRequired");
  if (!published_in_store_required_value) {
    return false;
  }
  {
    auto temp = (*published_in_store_required_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.published_in_store_required = *temp;
  }

  const base::Value* blocked_by_policy_value = dict.Find("blockedByPolicy");
  if (!blocked_by_policy_value) {
    return false;
  }
  {
    auto temp = (*blocked_by_policy_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.blocked_by_policy = *temp;
  }

  const base::Value* reloading_value = dict.Find("reloading");
  if (!reloading_value) {
    return false;
  }
  {
    auto temp = (*reloading_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.reloading = *temp;
  }

  const base::Value* custodian_approval_required_value = dict.Find("custodianApprovalRequired");
  if (!custodian_approval_required_value) {
    return false;
  }
  {
    auto temp = (*custodian_approval_required_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.custodian_approval_required = *temp;
  }

  const base::Value* parent_disabled_permissions_value = dict.Find("parentDisabledPermissions");
  if (!parent_disabled_permissions_value) {
    return false;
  }
  {
    auto temp = (*parent_disabled_permissions_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.parent_disabled_permissions = *temp;
  }

  return true;
}

// static
bool DisableReasons::Populate(
    const base::Value& value, DisableReasons& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DisableReasons> DisableReasons::FromValue(const base::Value::Dict& value) {
  DisableReasons out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DisableReasons> DisableReasons::FromValue(const base::Value& value) {
  DisableReasons out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DisableReasons::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("suspiciousInstall", this->suspicious_install);

  to_value_result.Set("corruptInstall", this->corrupt_install);

  to_value_result.Set("updateRequired", this->update_required);

  to_value_result.Set("publishedInStoreRequired", this->published_in_store_required);

  to_value_result.Set("blockedByPolicy", this->blocked_by_policy);

  to_value_result.Set("reloading", this->reloading);

  to_value_result.Set("custodianApprovalRequired", this->custodian_approval_required);

  to_value_result.Set("parentDisabledPermissions", this->parent_disabled_permissions);


  return to_value_result;
}


OptionsPage::OptionsPage()
: open_in_tab(false) {}

OptionsPage::~OptionsPage() = default;
OptionsPage::OptionsPage(OptionsPage&& rhs) noexcept = default;
OptionsPage& OptionsPage::operator=(OptionsPage&& rhs) noexcept = default;
OptionsPage OptionsPage::Clone() const {
  OptionsPage out;
  out.open_in_tab = open_in_tab;
  out.url = url;
  return out;
}

// static
bool OptionsPage::Populate(
    const base::Value::Dict& dict, OptionsPage& out) {
  const base::Value* open_in_tab_value = dict.Find("openInTab");
  if (!open_in_tab_value) {
    return false;
  }
  {
    auto temp = (*open_in_tab_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.open_in_tab = *temp;
  }

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

  return true;
}

// static
bool OptionsPage::Populate(
    const base::Value& value, OptionsPage& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OptionsPage> OptionsPage::FromValue(const base::Value::Dict& value) {
  OptionsPage out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OptionsPage> OptionsPage::FromValue(const base::Value& value) {
  OptionsPage out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OptionsPage::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("openInTab", this->open_in_tab);

  to_value_result.Set("url", this->url);


  return to_value_result;
}


HomePage::HomePage()
: specified(false) {}

HomePage::~HomePage() = default;
HomePage::HomePage(HomePage&& rhs) noexcept = default;
HomePage& HomePage::operator=(HomePage&& rhs) noexcept = default;
HomePage HomePage::Clone() const {
  HomePage out;
  out.url = url;
  out.specified = specified;
  return out;
}

// static
bool HomePage::Populate(
    const base::Value::Dict& dict, HomePage& out) {
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

  const base::Value* specified_value = dict.Find("specified");
  if (!specified_value) {
    return false;
  }
  {
    auto temp = (*specified_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.specified = *temp;
  }

  return true;
}

// static
bool HomePage::Populate(
    const base::Value& value, HomePage& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<HomePage> HomePage::FromValue(const base::Value::Dict& value) {
  HomePage out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<HomePage> HomePage::FromValue(const base::Value& value) {
  HomePage out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict HomePage::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("specified", this->specified);


  return to_value_result;
}


ExtensionView::ExtensionView()
: render_process_id(0),
render_view_id(0),
incognito(false),
is_iframe(false),
type() {}

ExtensionView::~ExtensionView() = default;
ExtensionView::ExtensionView(ExtensionView&& rhs) noexcept = default;
ExtensionView& ExtensionView::operator=(ExtensionView&& rhs) noexcept = default;
ExtensionView ExtensionView::Clone() const {
  ExtensionView out;
  out.url = url;
  out.render_process_id = render_process_id;
  out.render_view_id = render_view_id;
  out.incognito = incognito;
  out.is_iframe = is_iframe;
  out.type = type;
  return out;
}

// static
bool ExtensionView::Populate(
    const base::Value::Dict& dict, ExtensionView& out) {
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

  const base::Value* render_process_id_value = dict.Find("renderProcessId");
  if (!render_process_id_value) {
    return false;
  }
  {
    auto temp = (*render_process_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.render_process_id = *temp;
  }

  const base::Value* render_view_id_value = dict.Find("renderViewId");
  if (!render_view_id_value) {
    return false;
  }
  {
    auto temp = (*render_view_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.render_view_id = *temp;
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

  const base::Value* is_iframe_value = dict.Find("isIframe");
  if (!is_iframe_value) {
    return false;
  }
  {
    auto temp = (*is_iframe_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_iframe = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* view_type_as_string = (*type_value).GetIfString();
    if (!view_type_as_string) {
      return false;
    }
    out.type = ParseViewType(*view_type_as_string);
    if (out.type == ViewType()) {
      return false;
    }
  }

  return true;
}

// static
bool ExtensionView::Populate(
    const base::Value& value, ExtensionView& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExtensionView> ExtensionView::FromValue(const base::Value::Dict& value) {
  ExtensionView out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExtensionView> ExtensionView::FromValue(const base::Value& value) {
  ExtensionView out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionView::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("url", this->url);

  to_value_result.Set("renderProcessId", this->render_process_id);

  to_value_result.Set("renderViewId", this->render_view_id);

  to_value_result.Set("incognito", this->incognito);

  to_value_result.Set("isIframe", this->is_iframe);

  to_value_result.Set("type", developer_private::ToString(this->type));


  return to_value_result;
}


const char* ToString(HostAccess enum_param) {
  switch (enum_param) {
    case HostAccess::kOnClick:
      return "ON_CLICK";
    case HostAccess::kOnSpecificSites:
      return "ON_SPECIFIC_SITES";
    case HostAccess::kOnAllSites:
      return "ON_ALL_SITES";
    case HostAccess::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

HostAccess ParseHostAccess(base::StringPiece enum_string) {
  if (enum_string == "ON_CLICK")
    return HostAccess::kOnClick;
  if (enum_string == "ON_SPECIFIC_SITES")
    return HostAccess::kOnSpecificSites;
  if (enum_string == "ON_ALL_SITES")
    return HostAccess::kOnAllSites;
  return HostAccess::kNone;
}

std::u16string GetHostAccessParseError(base::StringPiece enum_string) {
  return u"expected \"ON_CLICK\" or \"ON_SPECIFIC_SITES\" or \"ON_ALL_SITES\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SafetyCheckStrings::SafetyCheckStrings()
 {}

SafetyCheckStrings::~SafetyCheckStrings() = default;
SafetyCheckStrings::SafetyCheckStrings(SafetyCheckStrings&& rhs) noexcept = default;
SafetyCheckStrings& SafetyCheckStrings::operator=(SafetyCheckStrings&& rhs) noexcept = default;
SafetyCheckStrings SafetyCheckStrings::Clone() const {
  SafetyCheckStrings out;
  out.panel_string = panel_string;
  out.detail_string = detail_string;
  return out;
}

// static
bool SafetyCheckStrings::Populate(
    const base::Value::Dict& dict, SafetyCheckStrings& out) {
  const base::Value* panel_string_value = dict.Find("panelString");
  if (panel_string_value) {
    {
      auto* temp = (*panel_string_value).GetIfString();
      if (!temp) {
        out.panel_string = std::nullopt;
        return false;
      }
      out.panel_string = *temp;
    }
  }

  const base::Value* detail_string_value = dict.Find("detailString");
  if (detail_string_value) {
    {
      auto* temp = (*detail_string_value).GetIfString();
      if (!temp) {
        out.detail_string = std::nullopt;
        return false;
      }
      out.detail_string = *temp;
    }
  }

  return true;
}

// static
bool SafetyCheckStrings::Populate(
    const base::Value& value, SafetyCheckStrings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SafetyCheckStrings> SafetyCheckStrings::FromValue(const base::Value::Dict& value) {
  SafetyCheckStrings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SafetyCheckStrings> SafetyCheckStrings::FromValue(const base::Value& value) {
  SafetyCheckStrings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SafetyCheckStrings::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->panel_string) {
    to_value_result.Set("panelString", *this->panel_string);

  }
  if (this->detail_string) {
    to_value_result.Set("detailString", *this->detail_string);

  }

  return to_value_result;
}


ControlledInfo::ControlledInfo()
 {}

ControlledInfo::~ControlledInfo() = default;
ControlledInfo::ControlledInfo(ControlledInfo&& rhs) noexcept = default;
ControlledInfo& ControlledInfo::operator=(ControlledInfo&& rhs) noexcept = default;
ControlledInfo ControlledInfo::Clone() const {
  ControlledInfo out;
  out.text = text;
  return out;
}

// static
bool ControlledInfo::Populate(
    const base::Value::Dict& dict, ControlledInfo& out) {
  const base::Value* text_value = dict.Find("text");
  if (!text_value) {
    return false;
  }
  {
    auto* temp = (*text_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.text = *temp;
  }

  return true;
}

// static
bool ControlledInfo::Populate(
    const base::Value& value, ControlledInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ControlledInfo> ControlledInfo::FromValue(const base::Value::Dict& value) {
  ControlledInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ControlledInfo> ControlledInfo::FromValue(const base::Value& value) {
  ControlledInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ControlledInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("text", this->text);


  return to_value_result;
}


Command::Command()
: is_active(false),
scope(),
is_extension_action(false) {}

Command::~Command() = default;
Command::Command(Command&& rhs) noexcept = default;
Command& Command::operator=(Command&& rhs) noexcept = default;
Command Command::Clone() const {
  Command out;
  out.description = description;
  out.keybinding = keybinding;
  out.name = name;
  out.is_active = is_active;
  out.scope = scope;
  out.is_extension_action = is_extension_action;
  return out;
}

// static
bool Command::Populate(
    const base::Value::Dict& dict, Command& out) {
  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* keybinding_value = dict.Find("keybinding");
  if (!keybinding_value) {
    return false;
  }
  {
    auto* temp = (*keybinding_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.keybinding = *temp;
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

  const base::Value* is_active_value = dict.Find("isActive");
  if (!is_active_value) {
    return false;
  }
  {
    auto temp = (*is_active_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_active = *temp;
  }

  const base::Value* scope_value = dict.Find("scope");
  if (!scope_value) {
    return false;
  }
  {
    const std::string* command_scope_as_string = (*scope_value).GetIfString();
    if (!command_scope_as_string) {
      return false;
    }
    out.scope = ParseCommandScope(*command_scope_as_string);
    if (out.scope == CommandScope()) {
      return false;
    }
  }

  const base::Value* is_extension_action_value = dict.Find("isExtensionAction");
  if (!is_extension_action_value) {
    return false;
  }
  {
    auto temp = (*is_extension_action_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_extension_action = *temp;
  }

  return true;
}

// static
bool Command::Populate(
    const base::Value& value, Command& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Command> Command::FromValue(const base::Value::Dict& value) {
  Command out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Command> Command::FromValue(const base::Value& value) {
  Command out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Command::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("description", this->description);

  to_value_result.Set("keybinding", this->keybinding);

  to_value_result.Set("name", this->name);

  to_value_result.Set("isActive", this->is_active);

  to_value_result.Set("scope", developer_private::ToString(this->scope));

  to_value_result.Set("isExtensionAction", this->is_extension_action);


  return to_value_result;
}


DependentExtension::DependentExtension()
 {}

DependentExtension::~DependentExtension() = default;
DependentExtension::DependentExtension(DependentExtension&& rhs) noexcept = default;
DependentExtension& DependentExtension::operator=(DependentExtension&& rhs) noexcept = default;
DependentExtension DependentExtension::Clone() const {
  DependentExtension out;
  out.id = id;
  out.name = name;
  return out;
}

// static
bool DependentExtension::Populate(
    const base::Value::Dict& dict, DependentExtension& out) {
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

  return true;
}

// static
bool DependentExtension::Populate(
    const base::Value& value, DependentExtension& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DependentExtension> DependentExtension::FromValue(const base::Value::Dict& value) {
  DependentExtension out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DependentExtension> DependentExtension::FromValue(const base::Value& value) {
  DependentExtension out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DependentExtension::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("name", this->name);


  return to_value_result;
}


Permission::Permission()
 {}

Permission::~Permission() = default;
Permission::Permission(Permission&& rhs) noexcept = default;
Permission& Permission::operator=(Permission&& rhs) noexcept = default;
Permission Permission::Clone() const {
  Permission out;
  out.message = message;
  out.submessages = submessages;
  return out;
}

// static
bool Permission::Populate(
    const base::Value::Dict& dict, Permission& out) {
  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  const base::Value* submessages_value = dict.Find("submessages");
  if (!submessages_value) {
    return false;
  }
  {
    if (!(*submessages_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*submessages_value).GetList(), out.submessages)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool Permission::Populate(
    const base::Value& value, Permission& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Permission> Permission::FromValue(const base::Value::Dict& value) {
  Permission out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Permission> Permission::FromValue(const base::Value& value) {
  Permission out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Permission::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("message", this->message);

  to_value_result.Set("submessages", json_schema_compiler::util::CreateValueFromArray(this->submessages));


  return to_value_result;
}


SiteControl::SiteControl()
: granted(false) {}

SiteControl::~SiteControl() = default;
SiteControl::SiteControl(SiteControl&& rhs) noexcept = default;
SiteControl& SiteControl::operator=(SiteControl&& rhs) noexcept = default;
SiteControl SiteControl::Clone() const {
  SiteControl out;
  out.host = host;
  out.granted = granted;
  return out;
}

// static
bool SiteControl::Populate(
    const base::Value::Dict& dict, SiteControl& out) {
  const base::Value* host_value = dict.Find("host");
  if (!host_value) {
    return false;
  }
  {
    auto* temp = (*host_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.host = *temp;
  }

  const base::Value* granted_value = dict.Find("granted");
  if (!granted_value) {
    return false;
  }
  {
    auto temp = (*granted_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.granted = *temp;
  }

  return true;
}

// static
bool SiteControl::Populate(
    const base::Value& value, SiteControl& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SiteControl> SiteControl::FromValue(const base::Value::Dict& value) {
  SiteControl out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SiteControl> SiteControl::FromValue(const base::Value& value) {
  SiteControl out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SiteControl::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("host", this->host);

  to_value_result.Set("granted", this->granted);


  return to_value_result;
}


RuntimeHostPermissions::RuntimeHostPermissions()
: has_all_hosts(false),
host_access() {}

RuntimeHostPermissions::~RuntimeHostPermissions() = default;
RuntimeHostPermissions::RuntimeHostPermissions(RuntimeHostPermissions&& rhs) noexcept = default;
RuntimeHostPermissions& RuntimeHostPermissions::operator=(RuntimeHostPermissions&& rhs) noexcept = default;
RuntimeHostPermissions RuntimeHostPermissions::Clone() const {
  RuntimeHostPermissions out;
  out.has_all_hosts = has_all_hosts;
  out.host_access = host_access;
  out.hosts.reserve(hosts.size());
  for (const auto& element : hosts) {
    json_schema_compiler::util::AppendToContainer(out.hosts, element.Clone());
  }
  return out;
}

// static
bool RuntimeHostPermissions::Populate(
    const base::Value::Dict& dict, RuntimeHostPermissions& out) {
  const base::Value* has_all_hosts_value = dict.Find("hasAllHosts");
  if (!has_all_hosts_value) {
    return false;
  }
  {
    auto temp = (*has_all_hosts_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.has_all_hosts = *temp;
  }

  const base::Value* host_access_value = dict.Find("hostAccess");
  if (!host_access_value) {
    return false;
  }
  {
    const std::string* host_access_as_string = (*host_access_value).GetIfString();
    if (!host_access_as_string) {
      return false;
    }
    out.host_access = ParseHostAccess(*host_access_as_string);
    if (out.host_access == HostAccess()) {
      return false;
    }
  }

  const base::Value* hosts_value = dict.Find("hosts");
  if (!hosts_value) {
    return false;
  }
  {
    if (!(*hosts_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*hosts_value).GetList(), out.hosts)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool RuntimeHostPermissions::Populate(
    const base::Value& value, RuntimeHostPermissions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RuntimeHostPermissions> RuntimeHostPermissions::FromValue(const base::Value::Dict& value) {
  RuntimeHostPermissions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RuntimeHostPermissions> RuntimeHostPermissions::FromValue(const base::Value& value) {
  RuntimeHostPermissions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RuntimeHostPermissions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("hasAllHosts", this->has_all_hosts);

  to_value_result.Set("hostAccess", developer_private::ToString(this->host_access));

  to_value_result.Set("hosts", json_schema_compiler::util::CreateValueFromArray(this->hosts));


  return to_value_result;
}


Permissions::Permissions()
: can_access_site_data(false) {}

Permissions::~Permissions() = default;
Permissions::Permissions(Permissions&& rhs) noexcept = default;
Permissions& Permissions::operator=(Permissions&& rhs) noexcept = default;
Permissions Permissions::Clone() const {
  Permissions out;
  out.simple_permissions.reserve(simple_permissions.size());
  for (const auto& element : simple_permissions) {
    json_schema_compiler::util::AppendToContainer(out.simple_permissions, element.Clone());
  }
  if (runtime_host_permissions) {
    out.runtime_host_permissions = runtime_host_permissions->Clone();
  }
  out.can_access_site_data = can_access_site_data;
  return out;
}

// static
bool Permissions::Populate(
    const base::Value::Dict& dict, Permissions& out) {
  const base::Value* simple_permissions_value = dict.Find("simplePermissions");
  if (!simple_permissions_value) {
    return false;
  }
  {
    if (!(*simple_permissions_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*simple_permissions_value).GetList(), out.simple_permissions)) {
        return false;
      }
    }
  }

  const base::Value* runtime_host_permissions_value = dict.Find("runtimeHostPermissions");
  if (runtime_host_permissions_value) {
    {
      if (!(*runtime_host_permissions_value).is_dict()) {
        return false;
      }
      else {
        RuntimeHostPermissions temp;
        if (!RuntimeHostPermissions::Populate((*runtime_host_permissions_value).GetDict(), temp))
          return false;
        out.runtime_host_permissions = std::move(temp);
      }
    }
  }

  const base::Value* can_access_site_data_value = dict.Find("canAccessSiteData");
  if (!can_access_site_data_value) {
    return false;
  }
  {
    auto temp = (*can_access_site_data_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.can_access_site_data = *temp;
  }

  return true;
}

// static
bool Permissions::Populate(
    const base::Value& value, Permissions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Permissions> Permissions::FromValue(const base::Value::Dict& value) {
  Permissions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Permissions> Permissions::FromValue(const base::Value& value) {
  Permissions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Permissions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("simplePermissions", json_schema_compiler::util::CreateValueFromArray(this->simple_permissions));

  if (this->runtime_host_permissions) {
    to_value_result.Set("runtimeHostPermissions", (this->runtime_host_permissions)->ToValue());

  }
  to_value_result.Set("canAccessSiteData", this->can_access_site_data);


  return to_value_result;
}


ExtensionInfo::ExtensionInfo()
: location(),
must_remain_installed(false),
offline_enabled(false),
state(),
type(),
user_may_modify(false),
show_safe_browsing_allowlist_warning(false),
show_access_requests_in_toolbar(false),
acknowledge_safety_check_warning(false) {}

ExtensionInfo::~ExtensionInfo() = default;
ExtensionInfo::ExtensionInfo(ExtensionInfo&& rhs) noexcept = default;
ExtensionInfo& ExtensionInfo::operator=(ExtensionInfo&& rhs) noexcept = default;
ExtensionInfo ExtensionInfo::Clone() const {
  ExtensionInfo out;
  out.blacklist_text = blacklist_text;
  if (safety_check_text) {
    out.safety_check_text = safety_check_text->Clone();
  }
  out.commands.reserve(commands.size());
  for (const auto& element : commands) {
    json_schema_compiler::util::AppendToContainer(out.commands, element.Clone());
  }
  if (controlled_info) {
    out.controlled_info = controlled_info->Clone();
  }
  out.dependent_extensions.reserve(dependent_extensions.size());
  for (const auto& element : dependent_extensions) {
    json_schema_compiler::util::AppendToContainer(out.dependent_extensions, element.Clone());
  }
  out.description = description;
  out.disable_reasons = disable_reasons.Clone();
  out.error_collection = error_collection.Clone();
  out.file_access = file_access.Clone();
  out.home_page = home_page.Clone();
  out.icon_url = icon_url;
  out.id = id;
  out.incognito_access = incognito_access.Clone();
  out.install_warnings = install_warnings;
  out.launch_url = launch_url;
  out.location = location;
  out.location_text = location_text;
  out.manifest_errors.reserve(manifest_errors.size());
  for (const auto& element : manifest_errors) {
    json_schema_compiler::util::AppendToContainer(out.manifest_errors, element.Clone());
  }
  out.manifest_home_page_url = manifest_home_page_url;
  out.must_remain_installed = must_remain_installed;
  out.name = name;
  out.offline_enabled = offline_enabled;
  if (options_page) {
    out.options_page = options_page->Clone();
  }
  out.path = path;
  out.permissions = permissions.Clone();
  out.prettified_path = prettified_path;
  out.runtime_errors.reserve(runtime_errors.size());
  for (const auto& element : runtime_errors) {
    json_schema_compiler::util::AppendToContainer(out.runtime_errors, element.Clone());
  }
  out.runtime_warnings = runtime_warnings;
  out.state = state;
  out.type = type;
  out.update_url = update_url;
  out.user_may_modify = user_may_modify;
  out.version = version;
  out.views.reserve(views.size());
  for (const auto& element : views) {
    json_schema_compiler::util::AppendToContainer(out.views, element.Clone());
  }
  out.web_store_url = web_store_url;
  out.show_safe_browsing_allowlist_warning = show_safe_browsing_allowlist_warning;
  out.show_access_requests_in_toolbar = show_access_requests_in_toolbar;
  out.acknowledge_safety_check_warning = acknowledge_safety_check_warning;
  out.pinned_to_toolbar = pinned_to_toolbar;
  return out;
}

// static
bool ExtensionInfo::Populate(
    const base::Value::Dict& dict, ExtensionInfo& out) {
  const base::Value* blacklist_text_value = dict.Find("blacklistText");
  if (blacklist_text_value) {
    {
      auto* temp = (*blacklist_text_value).GetIfString();
      if (!temp) {
        out.blacklist_text = std::nullopt;
        return false;
      }
      out.blacklist_text = *temp;
    }
  }

  const base::Value* safety_check_text_value = dict.Find("safetyCheckText");
  if (safety_check_text_value) {
    {
      if (!(*safety_check_text_value).is_dict()) {
        return false;
      }
      else {
        SafetyCheckStrings temp;
        if (!SafetyCheckStrings::Populate((*safety_check_text_value).GetDict(), temp))
          return false;
        out.safety_check_text = std::move(temp);
      }
    }
  }

  const base::Value* commands_value = dict.Find("commands");
  if (!commands_value) {
    return false;
  }
  {
    if (!(*commands_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*commands_value).GetList(), out.commands)) {
        return false;
      }
    }
  }

  const base::Value* controlled_info_value = dict.Find("controlledInfo");
  if (controlled_info_value) {
    {
      if (!(*controlled_info_value).is_dict()) {
        return false;
      }
      else {
        ControlledInfo temp;
        if (!ControlledInfo::Populate((*controlled_info_value).GetDict(), temp))
          return false;
        out.controlled_info = std::move(temp);
      }
    }
  }

  const base::Value* dependent_extensions_value = dict.Find("dependentExtensions");
  if (!dependent_extensions_value) {
    return false;
  }
  {
    if (!(*dependent_extensions_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*dependent_extensions_value).GetList(), out.dependent_extensions)) {
        return false;
      }
    }
  }

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* disable_reasons_value = dict.Find("disableReasons");
  if (!disable_reasons_value) {
    return false;
  }
  {
    if (!(*disable_reasons_value).is_dict()) {
      return false;
    }
    if (!DisableReasons::Populate((*disable_reasons_value).GetDict(), out.disable_reasons)) {
      return false;
    }
  }

  const base::Value* error_collection_value = dict.Find("errorCollection");
  if (!error_collection_value) {
    return false;
  }
  {
    if (!(*error_collection_value).is_dict()) {
      return false;
    }
    if (!AccessModifier::Populate((*error_collection_value).GetDict(), out.error_collection)) {
      return false;
    }
  }

  const base::Value* file_access_value = dict.Find("fileAccess");
  if (!file_access_value) {
    return false;
  }
  {
    if (!(*file_access_value).is_dict()) {
      return false;
    }
    if (!AccessModifier::Populate((*file_access_value).GetDict(), out.file_access)) {
      return false;
    }
  }

  const base::Value* home_page_value = dict.Find("homePage");
  if (!home_page_value) {
    return false;
  }
  {
    if (!(*home_page_value).is_dict()) {
      return false;
    }
    if (!HomePage::Populate((*home_page_value).GetDict(), out.home_page)) {
      return false;
    }
  }

  const base::Value* icon_url_value = dict.Find("iconUrl");
  if (!icon_url_value) {
    return false;
  }
  {
    auto* temp = (*icon_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.icon_url = *temp;
  }

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

  const base::Value* incognito_access_value = dict.Find("incognitoAccess");
  if (!incognito_access_value) {
    return false;
  }
  {
    if (!(*incognito_access_value).is_dict()) {
      return false;
    }
    if (!AccessModifier::Populate((*incognito_access_value).GetDict(), out.incognito_access)) {
      return false;
    }
  }

  const base::Value* install_warnings_value = dict.Find("installWarnings");
  if (!install_warnings_value) {
    return false;
  }
  {
    if (!(*install_warnings_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*install_warnings_value).GetList(), out.install_warnings)) {
        return false;
      }
    }
  }

  const base::Value* launch_url_value = dict.Find("launchUrl");
  if (launch_url_value) {
    {
      auto* temp = (*launch_url_value).GetIfString();
      if (!temp) {
        out.launch_url = std::nullopt;
        return false;
      }
      out.launch_url = *temp;
    }
  }

  const base::Value* location_value = dict.Find("location");
  if (!location_value) {
    return false;
  }
  {
    const std::string* location_as_string = (*location_value).GetIfString();
    if (!location_as_string) {
      return false;
    }
    out.location = ParseLocation(*location_as_string);
    if (out.location == Location()) {
      return false;
    }
  }

  const base::Value* location_text_value = dict.Find("locationText");
  if (location_text_value) {
    {
      auto* temp = (*location_text_value).GetIfString();
      if (!temp) {
        out.location_text = std::nullopt;
        return false;
      }
      out.location_text = *temp;
    }
  }

  const base::Value* manifest_errors_value = dict.Find("manifestErrors");
  if (!manifest_errors_value) {
    return false;
  }
  {
    if (!(*manifest_errors_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*manifest_errors_value).GetList(), out.manifest_errors)) {
        return false;
      }
    }
  }

  const base::Value* manifest_home_page_url_value = dict.Find("manifestHomePageUrl");
  if (!manifest_home_page_url_value) {
    return false;
  }
  {
    auto* temp = (*manifest_home_page_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.manifest_home_page_url = *temp;
  }

  const base::Value* must_remain_installed_value = dict.Find("mustRemainInstalled");
  if (!must_remain_installed_value) {
    return false;
  }
  {
    auto temp = (*must_remain_installed_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.must_remain_installed = *temp;
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

  const base::Value* offline_enabled_value = dict.Find("offlineEnabled");
  if (!offline_enabled_value) {
    return false;
  }
  {
    auto temp = (*offline_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.offline_enabled = *temp;
  }

  const base::Value* options_page_value = dict.Find("optionsPage");
  if (options_page_value) {
    {
      if (!(*options_page_value).is_dict()) {
        return false;
      }
      else {
        OptionsPage temp;
        if (!OptionsPage::Populate((*options_page_value).GetDict(), temp))
          return false;
        out.options_page = std::move(temp);
      }
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

  const base::Value* permissions_value = dict.Find("permissions");
  if (!permissions_value) {
    return false;
  }
  {
    if (!(*permissions_value).is_dict()) {
      return false;
    }
    if (!Permissions::Populate((*permissions_value).GetDict(), out.permissions)) {
      return false;
    }
  }

  const base::Value* prettified_path_value = dict.Find("prettifiedPath");
  if (prettified_path_value) {
    {
      auto* temp = (*prettified_path_value).GetIfString();
      if (!temp) {
        out.prettified_path = std::nullopt;
        return false;
      }
      out.prettified_path = *temp;
    }
  }

  const base::Value* runtime_errors_value = dict.Find("runtimeErrors");
  if (!runtime_errors_value) {
    return false;
  }
  {
    if (!(*runtime_errors_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*runtime_errors_value).GetList(), out.runtime_errors)) {
        return false;
      }
    }
  }

  const base::Value* runtime_warnings_value = dict.Find("runtimeWarnings");
  if (!runtime_warnings_value) {
    return false;
  }
  {
    if (!(*runtime_warnings_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*runtime_warnings_value).GetList(), out.runtime_warnings)) {
        return false;
      }
    }
  }

  const base::Value* state_value = dict.Find("state");
  if (!state_value) {
    return false;
  }
  {
    const std::string* extension_state_as_string = (*state_value).GetIfString();
    if (!extension_state_as_string) {
      return false;
    }
    out.state = ParseExtensionState(*extension_state_as_string);
    if (out.state == ExtensionState()) {
      return false;
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* extension_type_as_string = (*type_value).GetIfString();
    if (!extension_type_as_string) {
      return false;
    }
    out.type = ParseExtensionType(*extension_type_as_string);
    if (out.type == ExtensionType()) {
      return false;
    }
  }

  const base::Value* update_url_value = dict.Find("updateUrl");
  if (!update_url_value) {
    return false;
  }
  {
    auto* temp = (*update_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.update_url = *temp;
  }

  const base::Value* user_may_modify_value = dict.Find("userMayModify");
  if (!user_may_modify_value) {
    return false;
  }
  {
    auto temp = (*user_may_modify_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.user_may_modify = *temp;
  }

  const base::Value* version_value = dict.Find("version");
  if (!version_value) {
    return false;
  }
  {
    auto* temp = (*version_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.version = *temp;
  }

  const base::Value* views_value = dict.Find("views");
  if (!views_value) {
    return false;
  }
  {
    if (!(*views_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*views_value).GetList(), out.views)) {
        return false;
      }
    }
  }

  const base::Value* web_store_url_value = dict.Find("webStoreUrl");
  if (!web_store_url_value) {
    return false;
  }
  {
    auto* temp = (*web_store_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.web_store_url = *temp;
  }

  const base::Value* show_safe_browsing_allowlist_warning_value = dict.Find("showSafeBrowsingAllowlistWarning");
  if (!show_safe_browsing_allowlist_warning_value) {
    return false;
  }
  {
    auto temp = (*show_safe_browsing_allowlist_warning_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.show_safe_browsing_allowlist_warning = *temp;
  }

  const base::Value* show_access_requests_in_toolbar_value = dict.Find("showAccessRequestsInToolbar");
  if (!show_access_requests_in_toolbar_value) {
    return false;
  }
  {
    auto temp = (*show_access_requests_in_toolbar_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.show_access_requests_in_toolbar = *temp;
  }

  const base::Value* acknowledge_safety_check_warning_value = dict.Find("acknowledgeSafetyCheckWarning");
  if (!acknowledge_safety_check_warning_value) {
    return false;
  }
  {
    auto temp = (*acknowledge_safety_check_warning_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.acknowledge_safety_check_warning = *temp;
  }

  const base::Value* pinned_to_toolbar_value = dict.Find("pinnedToToolbar");
  if (pinned_to_toolbar_value) {
    {
      auto temp = (*pinned_to_toolbar_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinned_to_toolbar = std::nullopt;
        return false;
      }
      out.pinned_to_toolbar = *temp;
    }
  }

  return true;
}

// static
bool ExtensionInfo::Populate(
    const base::Value& value, ExtensionInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExtensionInfo> ExtensionInfo::FromValue(const base::Value::Dict& value) {
  ExtensionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExtensionInfo> ExtensionInfo::FromValue(const base::Value& value) {
  ExtensionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionInfo::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->blacklist_text) {
    to_value_result.Set("blacklistText", *this->blacklist_text);

  }
  if (this->safety_check_text) {
    to_value_result.Set("safetyCheckText", (this->safety_check_text)->ToValue());

  }
  to_value_result.Set("commands", json_schema_compiler::util::CreateValueFromArray(this->commands));

  if (this->controlled_info) {
    to_value_result.Set("controlledInfo", (this->controlled_info)->ToValue());

  }
  to_value_result.Set("dependentExtensions", json_schema_compiler::util::CreateValueFromArray(this->dependent_extensions));

  to_value_result.Set("description", this->description);

  to_value_result.Set("disableReasons", (this->disable_reasons).ToValue());

  to_value_result.Set("errorCollection", (this->error_collection).ToValue());

  to_value_result.Set("fileAccess", (this->file_access).ToValue());

  to_value_result.Set("homePage", (this->home_page).ToValue());

  to_value_result.Set("iconUrl", this->icon_url);

  to_value_result.Set("id", this->id);

  to_value_result.Set("incognitoAccess", (this->incognito_access).ToValue());

  to_value_result.Set("installWarnings", json_schema_compiler::util::CreateValueFromArray(this->install_warnings));

  if (this->launch_url) {
    to_value_result.Set("launchUrl", *this->launch_url);

  }
  to_value_result.Set("location", developer_private::ToString(this->location));

  if (this->location_text) {
    to_value_result.Set("locationText", *this->location_text);

  }
  to_value_result.Set("manifestErrors", json_schema_compiler::util::CreateValueFromArray(this->manifest_errors));

  to_value_result.Set("manifestHomePageUrl", this->manifest_home_page_url);

  to_value_result.Set("mustRemainInstalled", this->must_remain_installed);

  to_value_result.Set("name", this->name);

  to_value_result.Set("offlineEnabled", this->offline_enabled);

  if (this->options_page) {
    to_value_result.Set("optionsPage", (this->options_page)->ToValue());

  }
  if (this->path) {
    to_value_result.Set("path", *this->path);

  }
  to_value_result.Set("permissions", (this->permissions).ToValue());

  if (this->prettified_path) {
    to_value_result.Set("prettifiedPath", *this->prettified_path);

  }
  to_value_result.Set("runtimeErrors", json_schema_compiler::util::CreateValueFromArray(this->runtime_errors));

  to_value_result.Set("runtimeWarnings", json_schema_compiler::util::CreateValueFromArray(this->runtime_warnings));

  to_value_result.Set("state", developer_private::ToString(this->state));

  to_value_result.Set("type", developer_private::ToString(this->type));

  to_value_result.Set("updateUrl", this->update_url);

  to_value_result.Set("userMayModify", this->user_may_modify);

  to_value_result.Set("version", this->version);

  to_value_result.Set("views", json_schema_compiler::util::CreateValueFromArray(this->views));

  to_value_result.Set("webStoreUrl", this->web_store_url);

  to_value_result.Set("showSafeBrowsingAllowlistWarning", this->show_safe_browsing_allowlist_warning);

  to_value_result.Set("showAccessRequestsInToolbar", this->show_access_requests_in_toolbar);

  to_value_result.Set("acknowledgeSafetyCheckWarning", this->acknowledge_safety_check_warning);

  if (this->pinned_to_toolbar) {
    to_value_result.Set("pinnedToToolbar", *this->pinned_to_toolbar);

  }

  return to_value_result;
}


ProfileInfo::ProfileInfo()
: can_load_unpacked(false),
in_developer_mode(false),
is_developer_mode_controlled_by_policy(false),
is_incognito_available(false),
is_child_account(false) {}

ProfileInfo::~ProfileInfo() = default;
ProfileInfo::ProfileInfo(ProfileInfo&& rhs) noexcept = default;
ProfileInfo& ProfileInfo::operator=(ProfileInfo&& rhs) noexcept = default;
ProfileInfo ProfileInfo::Clone() const {
  ProfileInfo out;
  out.can_load_unpacked = can_load_unpacked;
  out.in_developer_mode = in_developer_mode;
  out.is_developer_mode_controlled_by_policy = is_developer_mode_controlled_by_policy;
  out.is_incognito_available = is_incognito_available;
  out.is_child_account = is_child_account;
  return out;
}

// static
bool ProfileInfo::Populate(
    const base::Value::Dict& dict, ProfileInfo& out) {
  const base::Value* can_load_unpacked_value = dict.Find("canLoadUnpacked");
  if (!can_load_unpacked_value) {
    return false;
  }
  {
    auto temp = (*can_load_unpacked_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.can_load_unpacked = *temp;
  }

  const base::Value* in_developer_mode_value = dict.Find("inDeveloperMode");
  if (!in_developer_mode_value) {
    return false;
  }
  {
    auto temp = (*in_developer_mode_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.in_developer_mode = *temp;
  }

  const base::Value* is_developer_mode_controlled_by_policy_value = dict.Find("isDeveloperModeControlledByPolicy");
  if (!is_developer_mode_controlled_by_policy_value) {
    return false;
  }
  {
    auto temp = (*is_developer_mode_controlled_by_policy_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_developer_mode_controlled_by_policy = *temp;
  }

  const base::Value* is_incognito_available_value = dict.Find("isIncognitoAvailable");
  if (!is_incognito_available_value) {
    return false;
  }
  {
    auto temp = (*is_incognito_available_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_incognito_available = *temp;
  }

  const base::Value* is_child_account_value = dict.Find("isChildAccount");
  if (!is_child_account_value) {
    return false;
  }
  {
    auto temp = (*is_child_account_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_child_account = *temp;
  }

  return true;
}

// static
bool ProfileInfo::Populate(
    const base::Value& value, ProfileInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProfileInfo> ProfileInfo::FromValue(const base::Value::Dict& value) {
  ProfileInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProfileInfo> ProfileInfo::FromValue(const base::Value& value) {
  ProfileInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProfileInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("canLoadUnpacked", this->can_load_unpacked);

  to_value_result.Set("inDeveloperMode", this->in_developer_mode);

  to_value_result.Set("isDeveloperModeControlledByPolicy", this->is_developer_mode_controlled_by_policy);

  to_value_result.Set("isIncognitoAvailable", this->is_incognito_available);

  to_value_result.Set("isChildAccount", this->is_child_account);


  return to_value_result;
}


ItemInfo::ItemInfo()
: may_disable(false),
enabled(false),
is_app(false),
type(),
allow_activity(false),
allow_file_access(false),
wants_file_access(false),
incognito_enabled(false),
is_unpacked(false),
allow_reload(false),
terminated(false),
allow_incognito(false),
offline_enabled(false) {}

ItemInfo::~ItemInfo() = default;
ItemInfo::ItemInfo(ItemInfo&& rhs) noexcept = default;
ItemInfo& ItemInfo::operator=(ItemInfo&& rhs) noexcept = default;
ItemInfo ItemInfo::Clone() const {
  ItemInfo out;
  out.id = id;
  out.name = name;
  out.version = version;
  out.description = description;
  out.may_disable = may_disable;
  out.enabled = enabled;
  out.is_app = is_app;
  out.type = type;
  out.allow_activity = allow_activity;
  out.allow_file_access = allow_file_access;
  out.wants_file_access = wants_file_access;
  out.incognito_enabled = incognito_enabled;
  out.is_unpacked = is_unpacked;
  out.allow_reload = allow_reload;
  out.terminated = terminated;
  out.allow_incognito = allow_incognito;
  out.icon_url = icon_url;
  out.path = path;
  out.options_url = options_url;
  out.app_launch_url = app_launch_url;
  out.homepage_url = homepage_url;
  out.update_url = update_url;
  out.install_warnings.reserve(install_warnings.size());
  for (const auto& element : install_warnings) {
    json_schema_compiler::util::AppendToContainer(out.install_warnings, element.Clone());
  }
  out.manifest_errors.reserve(manifest_errors.size());
  for (const auto& element : manifest_errors) {
    json_schema_compiler::util::AppendToContainer(out.manifest_errors, element.Clone());
  }
  out.runtime_errors.reserve(runtime_errors.size());
  for (const auto& element : runtime_errors) {
    json_schema_compiler::util::AppendToContainer(out.runtime_errors, element.Clone());
  }
  out.offline_enabled = offline_enabled;
  out.views.reserve(views.size());
  for (const auto& element : views) {
    json_schema_compiler::util::AppendToContainer(out.views, element.Clone());
  }
  return out;
}

// static
bool ItemInfo::Populate(
    const base::Value::Dict& dict, ItemInfo& out) {
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

  const base::Value* version_value = dict.Find("version");
  if (!version_value) {
    return false;
  }
  {
    auto* temp = (*version_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.version = *temp;
  }

  const base::Value* description_value = dict.Find("description");
  if (!description_value) {
    return false;
  }
  {
    auto* temp = (*description_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.description = *temp;
  }

  const base::Value* may_disable_value = dict.Find("may_disable");
  if (!may_disable_value) {
    return false;
  }
  {
    auto temp = (*may_disable_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.may_disable = *temp;
  }

  const base::Value* enabled_value = dict.Find("enabled");
  if (!enabled_value) {
    return false;
  }
  {
    auto temp = (*enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.enabled = *temp;
  }

  const base::Value* is_app_value = dict.Find("isApp");
  if (!is_app_value) {
    return false;
  }
  {
    auto temp = (*is_app_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_app = *temp;
  }

  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* item_type_as_string = (*type_value).GetIfString();
    if (!item_type_as_string) {
      return false;
    }
    out.type = ParseItemType(*item_type_as_string);
    if (out.type == ItemType()) {
      return false;
    }
  }

  const base::Value* allow_activity_value = dict.Find("allow_activity");
  if (!allow_activity_value) {
    return false;
  }
  {
    auto temp = (*allow_activity_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.allow_activity = *temp;
  }

  const base::Value* allow_file_access_value = dict.Find("allow_file_access");
  if (!allow_file_access_value) {
    return false;
  }
  {
    auto temp = (*allow_file_access_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.allow_file_access = *temp;
  }

  const base::Value* wants_file_access_value = dict.Find("wants_file_access");
  if (!wants_file_access_value) {
    return false;
  }
  {
    auto temp = (*wants_file_access_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.wants_file_access = *temp;
  }

  const base::Value* incognito_enabled_value = dict.Find("incognito_enabled");
  if (!incognito_enabled_value) {
    return false;
  }
  {
    auto temp = (*incognito_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.incognito_enabled = *temp;
  }

  const base::Value* is_unpacked_value = dict.Find("is_unpacked");
  if (!is_unpacked_value) {
    return false;
  }
  {
    auto temp = (*is_unpacked_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_unpacked = *temp;
  }

  const base::Value* allow_reload_value = dict.Find("allow_reload");
  if (!allow_reload_value) {
    return false;
  }
  {
    auto temp = (*allow_reload_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.allow_reload = *temp;
  }

  const base::Value* terminated_value = dict.Find("terminated");
  if (!terminated_value) {
    return false;
  }
  {
    auto temp = (*terminated_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.terminated = *temp;
  }

  const base::Value* allow_incognito_value = dict.Find("allow_incognito");
  if (!allow_incognito_value) {
    return false;
  }
  {
    auto temp = (*allow_incognito_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.allow_incognito = *temp;
  }

  const base::Value* icon_url_value = dict.Find("icon_url");
  if (!icon_url_value) {
    return false;
  }
  {
    auto* temp = (*icon_url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.icon_url = *temp;
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

  const base::Value* options_url_value = dict.Find("options_url");
  if (options_url_value) {
    {
      auto* temp = (*options_url_value).GetIfString();
      if (!temp) {
        out.options_url = std::nullopt;
        return false;
      }
      out.options_url = *temp;
    }
  }

  const base::Value* app_launch_url_value = dict.Find("app_launch_url");
  if (app_launch_url_value) {
    {
      auto* temp = (*app_launch_url_value).GetIfString();
      if (!temp) {
        out.app_launch_url = std::nullopt;
        return false;
      }
      out.app_launch_url = *temp;
    }
  }

  const base::Value* homepage_url_value = dict.Find("homepage_url");
  if (homepage_url_value) {
    {
      auto* temp = (*homepage_url_value).GetIfString();
      if (!temp) {
        out.homepage_url = std::nullopt;
        return false;
      }
      out.homepage_url = *temp;
    }
  }

  const base::Value* update_url_value = dict.Find("update_url");
  if (update_url_value) {
    {
      auto* temp = (*update_url_value).GetIfString();
      if (!temp) {
        out.update_url = std::nullopt;
        return false;
      }
      out.update_url = *temp;
    }
  }

  const base::Value* install_warnings_value = dict.Find("install_warnings");
  if (!install_warnings_value) {
    return false;
  }
  {
    if (!(*install_warnings_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*install_warnings_value).GetList(), out.install_warnings)) {
        return false;
      }
    }
  }

  const base::Value* manifest_errors_value = dict.Find("manifest_errors");
  if (!manifest_errors_value) {
    return false;
  }
  {
    if (!(*manifest_errors_value).is_list()) {
      return false;
    }
    else {
      out.manifest_errors = (*manifest_errors_value).GetList().Clone();
    }
  }

  const base::Value* runtime_errors_value = dict.Find("runtime_errors");
  if (!runtime_errors_value) {
    return false;
  }
  {
    if (!(*runtime_errors_value).is_list()) {
      return false;
    }
    else {
      out.runtime_errors = (*runtime_errors_value).GetList().Clone();
    }
  }

  const base::Value* offline_enabled_value = dict.Find("offline_enabled");
  if (!offline_enabled_value) {
    return false;
  }
  {
    auto temp = (*offline_enabled_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.offline_enabled = *temp;
  }

  const base::Value* views_value = dict.Find("views");
  if (!views_value) {
    return false;
  }
  {
    if (!(*views_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*views_value).GetList(), out.views)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool ItemInfo::Populate(
    const base::Value& value, ItemInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ItemInfo> ItemInfo::FromValue(const base::Value::Dict& value) {
  ItemInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ItemInfo> ItemInfo::FromValue(const base::Value& value) {
  ItemInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ItemInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("name", this->name);

  to_value_result.Set("version", this->version);

  to_value_result.Set("description", this->description);

  to_value_result.Set("may_disable", this->may_disable);

  to_value_result.Set("enabled", this->enabled);

  to_value_result.Set("isApp", this->is_app);

  to_value_result.Set("type", developer_private::ToString(this->type));

  to_value_result.Set("allow_activity", this->allow_activity);

  to_value_result.Set("allow_file_access", this->allow_file_access);

  to_value_result.Set("wants_file_access", this->wants_file_access);

  to_value_result.Set("incognito_enabled", this->incognito_enabled);

  to_value_result.Set("is_unpacked", this->is_unpacked);

  to_value_result.Set("allow_reload", this->allow_reload);

  to_value_result.Set("terminated", this->terminated);

  to_value_result.Set("allow_incognito", this->allow_incognito);

  to_value_result.Set("icon_url", this->icon_url);

  if (this->path) {
    to_value_result.Set("path", *this->path);

  }
  if (this->options_url) {
    to_value_result.Set("options_url", *this->options_url);

  }
  if (this->app_launch_url) {
    to_value_result.Set("app_launch_url", *this->app_launch_url);

  }
  if (this->homepage_url) {
    to_value_result.Set("homepage_url", *this->homepage_url);

  }
  if (this->update_url) {
    to_value_result.Set("update_url", *this->update_url);

  }
  to_value_result.Set("install_warnings", json_schema_compiler::util::CreateValueFromArray(this->install_warnings));

  to_value_result.Set("manifest_errors", (this->manifest_errors).Clone());

  to_value_result.Set("runtime_errors", (this->runtime_errors).Clone());

  to_value_result.Set("offline_enabled", this->offline_enabled);

  to_value_result.Set("views", json_schema_compiler::util::CreateValueFromArray(this->views));


  return to_value_result;
}


GetExtensionsInfoOptions::GetExtensionsInfoOptions()
 {}

GetExtensionsInfoOptions::~GetExtensionsInfoOptions() = default;
GetExtensionsInfoOptions::GetExtensionsInfoOptions(GetExtensionsInfoOptions&& rhs) noexcept = default;
GetExtensionsInfoOptions& GetExtensionsInfoOptions::operator=(GetExtensionsInfoOptions&& rhs) noexcept = default;
GetExtensionsInfoOptions GetExtensionsInfoOptions::Clone() const {
  GetExtensionsInfoOptions out;
  out.include_disabled = include_disabled;
  out.include_terminated = include_terminated;
  return out;
}

// static
bool GetExtensionsInfoOptions::Populate(
    const base::Value::Dict& dict, GetExtensionsInfoOptions& out) {
  const base::Value* include_disabled_value = dict.Find("includeDisabled");
  if (include_disabled_value) {
    {
      auto temp = (*include_disabled_value).GetIfBool();
      if (!temp.has_value()) {
        out.include_disabled = std::nullopt;
        return false;
      }
      out.include_disabled = *temp;
    }
  }

  const base::Value* include_terminated_value = dict.Find("includeTerminated");
  if (include_terminated_value) {
    {
      auto temp = (*include_terminated_value).GetIfBool();
      if (!temp.has_value()) {
        out.include_terminated = std::nullopt;
        return false;
      }
      out.include_terminated = *temp;
    }
  }

  return true;
}

// static
bool GetExtensionsInfoOptions::Populate(
    const base::Value& value, GetExtensionsInfoOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<GetExtensionsInfoOptions> GetExtensionsInfoOptions::FromValue(const base::Value::Dict& value) {
  GetExtensionsInfoOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<GetExtensionsInfoOptions> GetExtensionsInfoOptions::FromValue(const base::Value& value) {
  GetExtensionsInfoOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict GetExtensionsInfoOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->include_disabled) {
    to_value_result.Set("includeDisabled", *this->include_disabled);

  }
  if (this->include_terminated) {
    to_value_result.Set("includeTerminated", *this->include_terminated);

  }

  return to_value_result;
}


ExtensionConfigurationUpdate::ExtensionConfigurationUpdate()
: host_access() {}

ExtensionConfigurationUpdate::~ExtensionConfigurationUpdate() = default;
ExtensionConfigurationUpdate::ExtensionConfigurationUpdate(ExtensionConfigurationUpdate&& rhs) noexcept = default;
ExtensionConfigurationUpdate& ExtensionConfigurationUpdate::operator=(ExtensionConfigurationUpdate&& rhs) noexcept = default;
ExtensionConfigurationUpdate ExtensionConfigurationUpdate::Clone() const {
  ExtensionConfigurationUpdate out;
  out.extension_id = extension_id;
  out.file_access = file_access;
  out.incognito_access = incognito_access;
  out.error_collection = error_collection;
  out.host_access = host_access;
  out.show_access_requests_in_toolbar = show_access_requests_in_toolbar;
  out.acknowledge_safety_check_warning = acknowledge_safety_check_warning;
  out.pinned_to_toolbar = pinned_to_toolbar;
  return out;
}

// static
bool ExtensionConfigurationUpdate::Populate(
    const base::Value::Dict& dict, ExtensionConfigurationUpdate& out) {
  out.host_access = HostAccess();
  const base::Value* extension_id_value = dict.Find("extensionId");
  if (!extension_id_value) {
    return false;
  }
  {
    auto* temp = (*extension_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.extension_id = *temp;
  }

  const base::Value* file_access_value = dict.Find("fileAccess");
  if (file_access_value) {
    {
      auto temp = (*file_access_value).GetIfBool();
      if (!temp.has_value()) {
        out.file_access = std::nullopt;
        return false;
      }
      out.file_access = *temp;
    }
  }

  const base::Value* incognito_access_value = dict.Find("incognitoAccess");
  if (incognito_access_value) {
    {
      auto temp = (*incognito_access_value).GetIfBool();
      if (!temp.has_value()) {
        out.incognito_access = std::nullopt;
        return false;
      }
      out.incognito_access = *temp;
    }
  }

  const base::Value* error_collection_value = dict.Find("errorCollection");
  if (error_collection_value) {
    {
      auto temp = (*error_collection_value).GetIfBool();
      if (!temp.has_value()) {
        out.error_collection = std::nullopt;
        return false;
      }
      out.error_collection = *temp;
    }
  }

  const base::Value* host_access_value = dict.Find("hostAccess");
  if (host_access_value) {
    {
      const std::string* host_access_as_string = (*host_access_value).GetIfString();
      if (!host_access_as_string) {
        return false;
      }
      out.host_access = ParseHostAccess(*host_access_as_string);
      if (out.host_access == HostAccess()) {
        return false;
      }
    }
    } else {
    out.host_access = HostAccess();
  }

  const base::Value* show_access_requests_in_toolbar_value = dict.Find("showAccessRequestsInToolbar");
  if (show_access_requests_in_toolbar_value) {
    {
      auto temp = (*show_access_requests_in_toolbar_value).GetIfBool();
      if (!temp.has_value()) {
        out.show_access_requests_in_toolbar = std::nullopt;
        return false;
      }
      out.show_access_requests_in_toolbar = *temp;
    }
  }

  const base::Value* acknowledge_safety_check_warning_value = dict.Find("acknowledgeSafetyCheckWarning");
  if (acknowledge_safety_check_warning_value) {
    {
      auto temp = (*acknowledge_safety_check_warning_value).GetIfBool();
      if (!temp.has_value()) {
        out.acknowledge_safety_check_warning = std::nullopt;
        return false;
      }
      out.acknowledge_safety_check_warning = *temp;
    }
  }

  const base::Value* pinned_to_toolbar_value = dict.Find("pinnedToToolbar");
  if (pinned_to_toolbar_value) {
    {
      auto temp = (*pinned_to_toolbar_value).GetIfBool();
      if (!temp.has_value()) {
        out.pinned_to_toolbar = std::nullopt;
        return false;
      }
      out.pinned_to_toolbar = *temp;
    }
  }

  return true;
}

// static
bool ExtensionConfigurationUpdate::Populate(
    const base::Value& value, ExtensionConfigurationUpdate& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExtensionConfigurationUpdate> ExtensionConfigurationUpdate::FromValue(const base::Value::Dict& value) {
  ExtensionConfigurationUpdate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExtensionConfigurationUpdate> ExtensionConfigurationUpdate::FromValue(const base::Value& value) {
  ExtensionConfigurationUpdate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionConfigurationUpdate::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("extensionId", this->extension_id);

  if (this->file_access) {
    to_value_result.Set("fileAccess", *this->file_access);

  }
  if (this->incognito_access) {
    to_value_result.Set("incognitoAccess", *this->incognito_access);

  }
  if (this->error_collection) {
    to_value_result.Set("errorCollection", *this->error_collection);

  }
  if (this->host_access != HostAccess()) {
    to_value_result.Set("hostAccess", developer_private::ToString(this->host_access));

  }
  if (this->show_access_requests_in_toolbar) {
    to_value_result.Set("showAccessRequestsInToolbar", *this->show_access_requests_in_toolbar);

  }
  if (this->acknowledge_safety_check_warning) {
    to_value_result.Set("acknowledgeSafetyCheckWarning", *this->acknowledge_safety_check_warning);

  }
  if (this->pinned_to_toolbar) {
    to_value_result.Set("pinnedToToolbar", *this->pinned_to_toolbar);

  }

  return to_value_result;
}


ProfileConfigurationUpdate::ProfileConfigurationUpdate()
 {}

ProfileConfigurationUpdate::~ProfileConfigurationUpdate() = default;
ProfileConfigurationUpdate::ProfileConfigurationUpdate(ProfileConfigurationUpdate&& rhs) noexcept = default;
ProfileConfigurationUpdate& ProfileConfigurationUpdate::operator=(ProfileConfigurationUpdate&& rhs) noexcept = default;
ProfileConfigurationUpdate ProfileConfigurationUpdate::Clone() const {
  ProfileConfigurationUpdate out;
  out.in_developer_mode = in_developer_mode;
  return out;
}

// static
bool ProfileConfigurationUpdate::Populate(
    const base::Value::Dict& dict, ProfileConfigurationUpdate& out) {
  const base::Value* in_developer_mode_value = dict.Find("inDeveloperMode");
  if (in_developer_mode_value) {
    {
      auto temp = (*in_developer_mode_value).GetIfBool();
      if (!temp.has_value()) {
        out.in_developer_mode = std::nullopt;
        return false;
      }
      out.in_developer_mode = *temp;
    }
  }

  return true;
}

// static
bool ProfileConfigurationUpdate::Populate(
    const base::Value& value, ProfileConfigurationUpdate& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProfileConfigurationUpdate> ProfileConfigurationUpdate::FromValue(const base::Value::Dict& value) {
  ProfileConfigurationUpdate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProfileConfigurationUpdate> ProfileConfigurationUpdate::FromValue(const base::Value& value) {
  ProfileConfigurationUpdate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProfileConfigurationUpdate::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->in_developer_mode) {
    to_value_result.Set("inDeveloperMode", *this->in_developer_mode);

  }

  return to_value_result;
}


ExtensionCommandUpdate::ExtensionCommandUpdate()
: scope() {}

ExtensionCommandUpdate::~ExtensionCommandUpdate() = default;
ExtensionCommandUpdate::ExtensionCommandUpdate(ExtensionCommandUpdate&& rhs) noexcept = default;
ExtensionCommandUpdate& ExtensionCommandUpdate::operator=(ExtensionCommandUpdate&& rhs) noexcept = default;
ExtensionCommandUpdate ExtensionCommandUpdate::Clone() const {
  ExtensionCommandUpdate out;
  out.extension_id = extension_id;
  out.command_name = command_name;
  out.scope = scope;
  out.keybinding = keybinding;
  return out;
}

// static
bool ExtensionCommandUpdate::Populate(
    const base::Value::Dict& dict, ExtensionCommandUpdate& out) {
  out.scope = CommandScope();
  const base::Value* extension_id_value = dict.Find("extensionId");
  if (!extension_id_value) {
    return false;
  }
  {
    auto* temp = (*extension_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.extension_id = *temp;
  }

  const base::Value* command_name_value = dict.Find("commandName");
  if (!command_name_value) {
    return false;
  }
  {
    auto* temp = (*command_name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.command_name = *temp;
  }

  const base::Value* scope_value = dict.Find("scope");
  if (scope_value) {
    {
      const std::string* command_scope_as_string = (*scope_value).GetIfString();
      if (!command_scope_as_string) {
        return false;
      }
      out.scope = ParseCommandScope(*command_scope_as_string);
      if (out.scope == CommandScope()) {
        return false;
      }
    }
    } else {
    out.scope = CommandScope();
  }

  const base::Value* keybinding_value = dict.Find("keybinding");
  if (keybinding_value) {
    {
      auto* temp = (*keybinding_value).GetIfString();
      if (!temp) {
        out.keybinding = std::nullopt;
        return false;
      }
      out.keybinding = *temp;
    }
  }

  return true;
}

// static
bool ExtensionCommandUpdate::Populate(
    const base::Value& value, ExtensionCommandUpdate& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExtensionCommandUpdate> ExtensionCommandUpdate::FromValue(const base::Value::Dict& value) {
  ExtensionCommandUpdate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExtensionCommandUpdate> ExtensionCommandUpdate::FromValue(const base::Value& value) {
  ExtensionCommandUpdate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionCommandUpdate::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("extensionId", this->extension_id);

  to_value_result.Set("commandName", this->command_name);

  if (this->scope != CommandScope()) {
    to_value_result.Set("scope", developer_private::ToString(this->scope));

  }
  if (this->keybinding) {
    to_value_result.Set("keybinding", *this->keybinding);

  }

  return to_value_result;
}


ReloadOptions::ReloadOptions()
 {}

ReloadOptions::~ReloadOptions() = default;
ReloadOptions::ReloadOptions(ReloadOptions&& rhs) noexcept = default;
ReloadOptions& ReloadOptions::operator=(ReloadOptions&& rhs) noexcept = default;
ReloadOptions ReloadOptions::Clone() const {
  ReloadOptions out;
  out.fail_quietly = fail_quietly;
  out.populate_error_for_unpacked = populate_error_for_unpacked;
  return out;
}

// static
bool ReloadOptions::Populate(
    const base::Value::Dict& dict, ReloadOptions& out) {
  const base::Value* fail_quietly_value = dict.Find("failQuietly");
  if (fail_quietly_value) {
    {
      auto temp = (*fail_quietly_value).GetIfBool();
      if (!temp.has_value()) {
        out.fail_quietly = std::nullopt;
        return false;
      }
      out.fail_quietly = *temp;
    }
  }

  const base::Value* populate_error_for_unpacked_value = dict.Find("populateErrorForUnpacked");
  if (populate_error_for_unpacked_value) {
    {
      auto temp = (*populate_error_for_unpacked_value).GetIfBool();
      if (!temp.has_value()) {
        out.populate_error_for_unpacked = std::nullopt;
        return false;
      }
      out.populate_error_for_unpacked = *temp;
    }
  }

  return true;
}

// static
bool ReloadOptions::Populate(
    const base::Value& value, ReloadOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ReloadOptions> ReloadOptions::FromValue(const base::Value::Dict& value) {
  ReloadOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReloadOptions> ReloadOptions::FromValue(const base::Value& value) {
  ReloadOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ReloadOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->fail_quietly) {
    to_value_result.Set("failQuietly", *this->fail_quietly);

  }
  if (this->populate_error_for_unpacked) {
    to_value_result.Set("populateErrorForUnpacked", *this->populate_error_for_unpacked);

  }

  return to_value_result;
}


LoadUnpackedOptions::LoadUnpackedOptions()
 {}

LoadUnpackedOptions::~LoadUnpackedOptions() = default;
LoadUnpackedOptions::LoadUnpackedOptions(LoadUnpackedOptions&& rhs) noexcept = default;
LoadUnpackedOptions& LoadUnpackedOptions::operator=(LoadUnpackedOptions&& rhs) noexcept = default;
LoadUnpackedOptions LoadUnpackedOptions::Clone() const {
  LoadUnpackedOptions out;
  out.fail_quietly = fail_quietly;
  out.populate_error = populate_error;
  out.retry_guid = retry_guid;
  out.use_dragged_path = use_dragged_path;
  return out;
}

// static
bool LoadUnpackedOptions::Populate(
    const base::Value::Dict& dict, LoadUnpackedOptions& out) {
  const base::Value* fail_quietly_value = dict.Find("failQuietly");
  if (fail_quietly_value) {
    {
      auto temp = (*fail_quietly_value).GetIfBool();
      if (!temp.has_value()) {
        out.fail_quietly = std::nullopt;
        return false;
      }
      out.fail_quietly = *temp;
    }
  }

  const base::Value* populate_error_value = dict.Find("populateError");
  if (populate_error_value) {
    {
      auto temp = (*populate_error_value).GetIfBool();
      if (!temp.has_value()) {
        out.populate_error = std::nullopt;
        return false;
      }
      out.populate_error = *temp;
    }
  }

  const base::Value* retry_guid_value = dict.Find("retryGuid");
  if (retry_guid_value) {
    {
      auto* temp = (*retry_guid_value).GetIfString();
      if (!temp) {
        out.retry_guid = std::nullopt;
        return false;
      }
      out.retry_guid = *temp;
    }
  }

  const base::Value* use_dragged_path_value = dict.Find("useDraggedPath");
  if (use_dragged_path_value) {
    {
      auto temp = (*use_dragged_path_value).GetIfBool();
      if (!temp.has_value()) {
        out.use_dragged_path = std::nullopt;
        return false;
      }
      out.use_dragged_path = *temp;
    }
  }

  return true;
}

// static
bool LoadUnpackedOptions::Populate(
    const base::Value& value, LoadUnpackedOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LoadUnpackedOptions> LoadUnpackedOptions::FromValue(const base::Value::Dict& value) {
  LoadUnpackedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LoadUnpackedOptions> LoadUnpackedOptions::FromValue(const base::Value& value) {
  LoadUnpackedOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict LoadUnpackedOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->fail_quietly) {
    to_value_result.Set("failQuietly", *this->fail_quietly);

  }
  if (this->populate_error) {
    to_value_result.Set("populateError", *this->populate_error);

  }
  if (this->retry_guid) {
    to_value_result.Set("retryGuid", *this->retry_guid);

  }
  if (this->use_dragged_path) {
    to_value_result.Set("useDraggedPath", *this->use_dragged_path);

  }

  return to_value_result;
}


const char* ToString(SiteSet enum_param) {
  switch (enum_param) {
    case SiteSet::kUserPermitted:
      return "USER_PERMITTED";
    case SiteSet::kUserRestricted:
      return "USER_RESTRICTED";
    case SiteSet::kExtensionSpecified:
      return "EXTENSION_SPECIFIED";
    case SiteSet::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SiteSet ParseSiteSet(base::StringPiece enum_string) {
  if (enum_string == "USER_PERMITTED")
    return SiteSet::kUserPermitted;
  if (enum_string == "USER_RESTRICTED")
    return SiteSet::kUserRestricted;
  if (enum_string == "EXTENSION_SPECIFIED")
    return SiteSet::kExtensionSpecified;
  return SiteSet::kNone;
}

std::u16string GetSiteSetParseError(base::StringPiece enum_string) {
  return u"expected \"USER_PERMITTED\" or \"USER_RESTRICTED\" or \"EXTENSION_SPECIFIED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


UserSiteSettingsOptions::UserSiteSettingsOptions()
: site_set() {}

UserSiteSettingsOptions::~UserSiteSettingsOptions() = default;
UserSiteSettingsOptions::UserSiteSettingsOptions(UserSiteSettingsOptions&& rhs) noexcept = default;
UserSiteSettingsOptions& UserSiteSettingsOptions::operator=(UserSiteSettingsOptions&& rhs) noexcept = default;
UserSiteSettingsOptions UserSiteSettingsOptions::Clone() const {
  UserSiteSettingsOptions out;
  out.site_set = site_set;
  out.hosts = hosts;
  return out;
}

// static
bool UserSiteSettingsOptions::Populate(
    const base::Value::Dict& dict, UserSiteSettingsOptions& out) {
  const base::Value* site_set_value = dict.Find("siteSet");
  if (!site_set_value) {
    return false;
  }
  {
    const std::string* site_set_as_string = (*site_set_value).GetIfString();
    if (!site_set_as_string) {
      return false;
    }
    out.site_set = ParseSiteSet(*site_set_as_string);
    if (out.site_set == SiteSet()) {
      return false;
    }
  }

  const base::Value* hosts_value = dict.Find("hosts");
  if (!hosts_value) {
    return false;
  }
  {
    if (!(*hosts_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*hosts_value).GetList(), out.hosts)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool UserSiteSettingsOptions::Populate(
    const base::Value& value, UserSiteSettingsOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UserSiteSettingsOptions> UserSiteSettingsOptions::FromValue(const base::Value::Dict& value) {
  UserSiteSettingsOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UserSiteSettingsOptions> UserSiteSettingsOptions::FromValue(const base::Value& value) {
  UserSiteSettingsOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UserSiteSettingsOptions::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("siteSet", developer_private::ToString(this->site_set));

  to_value_result.Set("hosts", json_schema_compiler::util::CreateValueFromArray(this->hosts));


  return to_value_result;
}


UserSiteSettings::UserSiteSettings()
 {}

UserSiteSettings::~UserSiteSettings() = default;
UserSiteSettings::UserSiteSettings(UserSiteSettings&& rhs) noexcept = default;
UserSiteSettings& UserSiteSettings::operator=(UserSiteSettings&& rhs) noexcept = default;
UserSiteSettings UserSiteSettings::Clone() const {
  UserSiteSettings out;
  out.permitted_sites = permitted_sites;
  out.restricted_sites = restricted_sites;
  return out;
}

// static
bool UserSiteSettings::Populate(
    const base::Value::Dict& dict, UserSiteSettings& out) {
  const base::Value* permitted_sites_value = dict.Find("permittedSites");
  if (!permitted_sites_value) {
    return false;
  }
  {
    if (!(*permitted_sites_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*permitted_sites_value).GetList(), out.permitted_sites)) {
        return false;
      }
    }
  }

  const base::Value* restricted_sites_value = dict.Find("restrictedSites");
  if (!restricted_sites_value) {
    return false;
  }
  {
    if (!(*restricted_sites_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*restricted_sites_value).GetList(), out.restricted_sites)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool UserSiteSettings::Populate(
    const base::Value& value, UserSiteSettings& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<UserSiteSettings> UserSiteSettings::FromValue(const base::Value::Dict& value) {
  UserSiteSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<UserSiteSettings> UserSiteSettings::FromValue(const base::Value& value) {
  UserSiteSettings out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict UserSiteSettings::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("permittedSites", json_schema_compiler::util::CreateValueFromArray(this->permitted_sites));

  to_value_result.Set("restrictedSites", json_schema_compiler::util::CreateValueFromArray(this->restricted_sites));


  return to_value_result;
}


SiteInfo::SiteInfo()
: site_set(),
num_extensions(0) {}

SiteInfo::~SiteInfo() = default;
SiteInfo::SiteInfo(SiteInfo&& rhs) noexcept = default;
SiteInfo& SiteInfo::operator=(SiteInfo&& rhs) noexcept = default;
SiteInfo SiteInfo::Clone() const {
  SiteInfo out;
  out.site_set = site_set;
  out.num_extensions = num_extensions;
  out.site = site;
  return out;
}

// static
bool SiteInfo::Populate(
    const base::Value::Dict& dict, SiteInfo& out) {
  const base::Value* site_set_value = dict.Find("siteSet");
  if (!site_set_value) {
    return false;
  }
  {
    const std::string* site_set_as_string = (*site_set_value).GetIfString();
    if (!site_set_as_string) {
      return false;
    }
    out.site_set = ParseSiteSet(*site_set_as_string);
    if (out.site_set == SiteSet()) {
      return false;
    }
  }

  const base::Value* num_extensions_value = dict.Find("numExtensions");
  if (!num_extensions_value) {
    return false;
  }
  {
    auto temp = (*num_extensions_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.num_extensions = *temp;
  }

  const base::Value* site_value = dict.Find("site");
  if (!site_value) {
    return false;
  }
  {
    auto* temp = (*site_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.site = *temp;
  }

  return true;
}

// static
bool SiteInfo::Populate(
    const base::Value& value, SiteInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SiteInfo> SiteInfo::FromValue(const base::Value::Dict& value) {
  SiteInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SiteInfo> SiteInfo::FromValue(const base::Value& value) {
  SiteInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SiteInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("siteSet", developer_private::ToString(this->site_set));

  to_value_result.Set("numExtensions", this->num_extensions);

  to_value_result.Set("site", this->site);


  return to_value_result;
}


SiteGroup::SiteGroup()
: num_extensions(0) {}

SiteGroup::~SiteGroup() = default;
SiteGroup::SiteGroup(SiteGroup&& rhs) noexcept = default;
SiteGroup& SiteGroup::operator=(SiteGroup&& rhs) noexcept = default;
SiteGroup SiteGroup::Clone() const {
  SiteGroup out;
  out.etld_plus_one = etld_plus_one;
  out.num_extensions = num_extensions;
  out.sites.reserve(sites.size());
  for (const auto& element : sites) {
    json_schema_compiler::util::AppendToContainer(out.sites, element.Clone());
  }
  return out;
}

// static
bool SiteGroup::Populate(
    const base::Value::Dict& dict, SiteGroup& out) {
  const base::Value* etld_plus_one_value = dict.Find("etldPlusOne");
  if (!etld_plus_one_value) {
    return false;
  }
  {
    auto* temp = (*etld_plus_one_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.etld_plus_one = *temp;
  }

  const base::Value* num_extensions_value = dict.Find("numExtensions");
  if (!num_extensions_value) {
    return false;
  }
  {
    auto temp = (*num_extensions_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.num_extensions = *temp;
  }

  const base::Value* sites_value = dict.Find("sites");
  if (!sites_value) {
    return false;
  }
  {
    if (!(*sites_value).is_list()) {
      return false;
    }
    else {
      if (!json_schema_compiler::util::PopulateArrayFromList((*sites_value).GetList(), out.sites)) {
        return false;
      }
    }
  }

  return true;
}

// static
bool SiteGroup::Populate(
    const base::Value& value, SiteGroup& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SiteGroup> SiteGroup::FromValue(const base::Value::Dict& value) {
  SiteGroup out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SiteGroup> SiteGroup::FromValue(const base::Value& value) {
  SiteGroup out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SiteGroup::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("etldPlusOne", this->etld_plus_one);

  to_value_result.Set("numExtensions", this->num_extensions);

  to_value_result.Set("sites", json_schema_compiler::util::CreateValueFromArray(this->sites));


  return to_value_result;
}


MatchingExtensionInfo::MatchingExtensionInfo()
: site_access(),
can_request_all_sites(false) {}

MatchingExtensionInfo::~MatchingExtensionInfo() = default;
MatchingExtensionInfo::MatchingExtensionInfo(MatchingExtensionInfo&& rhs) noexcept = default;
MatchingExtensionInfo& MatchingExtensionInfo::operator=(MatchingExtensionInfo&& rhs) noexcept = default;
MatchingExtensionInfo MatchingExtensionInfo::Clone() const {
  MatchingExtensionInfo out;
  out.id = id;
  out.site_access = site_access;
  out.can_request_all_sites = can_request_all_sites;
  return out;
}

// static
bool MatchingExtensionInfo::Populate(
    const base::Value::Dict& dict, MatchingExtensionInfo& out) {
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

  const base::Value* site_access_value = dict.Find("siteAccess");
  if (!site_access_value) {
    return false;
  }
  {
    const std::string* host_access_as_string = (*site_access_value).GetIfString();
    if (!host_access_as_string) {
      return false;
    }
    out.site_access = ParseHostAccess(*host_access_as_string);
    if (out.site_access == HostAccess()) {
      return false;
    }
  }

  const base::Value* can_request_all_sites_value = dict.Find("canRequestAllSites");
  if (!can_request_all_sites_value) {
    return false;
  }
  {
    auto temp = (*can_request_all_sites_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.can_request_all_sites = *temp;
  }

  return true;
}

// static
bool MatchingExtensionInfo::Populate(
    const base::Value& value, MatchingExtensionInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<MatchingExtensionInfo> MatchingExtensionInfo::FromValue(const base::Value::Dict& value) {
  MatchingExtensionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<MatchingExtensionInfo> MatchingExtensionInfo::FromValue(const base::Value& value) {
  MatchingExtensionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict MatchingExtensionInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("siteAccess", developer_private::ToString(this->site_access));

  to_value_result.Set("canRequestAllSites", this->can_request_all_sites);


  return to_value_result;
}


ExtensionSiteAccessUpdate::ExtensionSiteAccessUpdate()
: site_access() {}

ExtensionSiteAccessUpdate::~ExtensionSiteAccessUpdate() = default;
ExtensionSiteAccessUpdate::ExtensionSiteAccessUpdate(ExtensionSiteAccessUpdate&& rhs) noexcept = default;
ExtensionSiteAccessUpdate& ExtensionSiteAccessUpdate::operator=(ExtensionSiteAccessUpdate&& rhs) noexcept = default;
ExtensionSiteAccessUpdate ExtensionSiteAccessUpdate::Clone() const {
  ExtensionSiteAccessUpdate out;
  out.id = id;
  out.site_access = site_access;
  return out;
}

// static
bool ExtensionSiteAccessUpdate::Populate(
    const base::Value::Dict& dict, ExtensionSiteAccessUpdate& out) {
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

  const base::Value* site_access_value = dict.Find("siteAccess");
  if (!site_access_value) {
    return false;
  }
  {
    const std::string* host_access_as_string = (*site_access_value).GetIfString();
    if (!host_access_as_string) {
      return false;
    }
    out.site_access = ParseHostAccess(*host_access_as_string);
    if (out.site_access == HostAccess()) {
      return false;
    }
  }

  return true;
}

// static
bool ExtensionSiteAccessUpdate::Populate(
    const base::Value& value, ExtensionSiteAccessUpdate& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ExtensionSiteAccessUpdate> ExtensionSiteAccessUpdate::FromValue(const base::Value::Dict& value) {
  ExtensionSiteAccessUpdate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ExtensionSiteAccessUpdate> ExtensionSiteAccessUpdate::FromValue(const base::Value& value) {
  ExtensionSiteAccessUpdate out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ExtensionSiteAccessUpdate::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  to_value_result.Set("siteAccess", developer_private::ToString(this->site_access));


  return to_value_result;
}


const char* ToString(PackStatus enum_param) {
  switch (enum_param) {
    case PackStatus::kSuccess:
      return "SUCCESS";
    case PackStatus::kError:
      return "ERROR";
    case PackStatus::kWarning:
      return "WARNING";
    case PackStatus::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PackStatus ParsePackStatus(base::StringPiece enum_string) {
  if (enum_string == "SUCCESS")
    return PackStatus::kSuccess;
  if (enum_string == "ERROR")
    return PackStatus::kError;
  if (enum_string == "WARNING")
    return PackStatus::kWarning;
  return PackStatus::kNone;
}

std::u16string GetPackStatusParseError(base::StringPiece enum_string) {
  return u"expected \"SUCCESS\" or \"ERROR\" or \"WARNING\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(FileType enum_param) {
  switch (enum_param) {
    case FileType::kLoad:
      return "LOAD";
    case FileType::kPem:
      return "PEM";
    case FileType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FileType ParseFileType(base::StringPiece enum_string) {
  if (enum_string == "LOAD")
    return FileType::kLoad;
  if (enum_string == "PEM")
    return FileType::kPem;
  return FileType::kNone;
}

std::u16string GetFileTypeParseError(base::StringPiece enum_string) {
  return u"expected \"LOAD\" or \"PEM\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SelectType enum_param) {
  switch (enum_param) {
    case SelectType::kFile:
      return "FILE";
    case SelectType::kFolder:
      return "FOLDER";
    case SelectType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SelectType ParseSelectType(base::StringPiece enum_string) {
  if (enum_string == "FILE")
    return SelectType::kFile;
  if (enum_string == "FOLDER")
    return SelectType::kFolder;
  return SelectType::kNone;
}

std::u16string GetSelectTypeParseError(base::StringPiece enum_string) {
  return u"expected \"FILE\" or \"FOLDER\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(EventType enum_param) {
  switch (enum_param) {
    case EventType::kInstalled:
      return "INSTALLED";
    case EventType::kUninstalled:
      return "UNINSTALLED";
    case EventType::kLoaded:
      return "LOADED";
    case EventType::kUnloaded:
      return "UNLOADED";
    case EventType::kViewRegistered:
      return "VIEW_REGISTERED";
    case EventType::kViewUnregistered:
      return "VIEW_UNREGISTERED";
    case EventType::kErrorAdded:
      return "ERROR_ADDED";
    case EventType::kErrorsRemoved:
      return "ERRORS_REMOVED";
    case EventType::kPrefsChanged:
      return "PREFS_CHANGED";
    case EventType::kWarningsChanged:
      return "WARNINGS_CHANGED";
    case EventType::kCommandAdded:
      return "COMMAND_ADDED";
    case EventType::kCommandRemoved:
      return "COMMAND_REMOVED";
    case EventType::kPermissionsChanged:
      return "PERMISSIONS_CHANGED";
    case EventType::kServiceWorkerStarted:
      return "SERVICE_WORKER_STARTED";
    case EventType::kServiceWorkerStopped:
      return "SERVICE_WORKER_STOPPED";
    case EventType::kConfigurationChanged:
      return "CONFIGURATION_CHANGED";
    case EventType::kPinnedActionsChanged:
      return "PINNED_ACTIONS_CHANGED";
    case EventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

EventType ParseEventType(base::StringPiece enum_string) {
  if (enum_string == "INSTALLED")
    return EventType::kInstalled;
  if (enum_string == "UNINSTALLED")
    return EventType::kUninstalled;
  if (enum_string == "LOADED")
    return EventType::kLoaded;
  if (enum_string == "UNLOADED")
    return EventType::kUnloaded;
  if (enum_string == "VIEW_REGISTERED")
    return EventType::kViewRegistered;
  if (enum_string == "VIEW_UNREGISTERED")
    return EventType::kViewUnregistered;
  if (enum_string == "ERROR_ADDED")
    return EventType::kErrorAdded;
  if (enum_string == "ERRORS_REMOVED")
    return EventType::kErrorsRemoved;
  if (enum_string == "PREFS_CHANGED")
    return EventType::kPrefsChanged;
  if (enum_string == "WARNINGS_CHANGED")
    return EventType::kWarningsChanged;
  if (enum_string == "COMMAND_ADDED")
    return EventType::kCommandAdded;
  if (enum_string == "COMMAND_REMOVED")
    return EventType::kCommandRemoved;
  if (enum_string == "PERMISSIONS_CHANGED")
    return EventType::kPermissionsChanged;
  if (enum_string == "SERVICE_WORKER_STARTED")
    return EventType::kServiceWorkerStarted;
  if (enum_string == "SERVICE_WORKER_STOPPED")
    return EventType::kServiceWorkerStopped;
  if (enum_string == "CONFIGURATION_CHANGED")
    return EventType::kConfigurationChanged;
  if (enum_string == "PINNED_ACTIONS_CHANGED")
    return EventType::kPinnedActionsChanged;
  return EventType::kNone;
}

std::u16string GetEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"INSTALLED\" or \"UNINSTALLED\" or \"LOADED\" or \"UNLOADED\" or \"VIEW_REGISTERED\" or \"VIEW_UNREGISTERED\" or \"ERROR_ADDED\" or \"ERRORS_REMOVED\" or \"PREFS_CHANGED\" or \"WARNINGS_CHANGED\" or \"COMMAND_ADDED\" or \"COMMAND_REMOVED\" or \"PERMISSIONS_CHANGED\" or \"SERVICE_WORKER_STARTED\" or \"SERVICE_WORKER_STOPPED\" or \"CONFIGURATION_CHANGED\" or \"PINNED_ACTIONS_CHANGED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


PackDirectoryResponse::PackDirectoryResponse()
: override_flags(0),
status() {}

PackDirectoryResponse::~PackDirectoryResponse() = default;
PackDirectoryResponse::PackDirectoryResponse(PackDirectoryResponse&& rhs) noexcept = default;
PackDirectoryResponse& PackDirectoryResponse::operator=(PackDirectoryResponse&& rhs) noexcept = default;
PackDirectoryResponse PackDirectoryResponse::Clone() const {
  PackDirectoryResponse out;
  out.message = message;
  out.item_path = item_path;
  out.pem_path = pem_path;
  out.override_flags = override_flags;
  out.status = status;
  return out;
}

// static
bool PackDirectoryResponse::Populate(
    const base::Value::Dict& dict, PackDirectoryResponse& out) {
  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  const base::Value* item_path_value = dict.Find("item_path");
  if (!item_path_value) {
    return false;
  }
  {
    auto* temp = (*item_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.item_path = *temp;
  }

  const base::Value* pem_path_value = dict.Find("pem_path");
  if (!pem_path_value) {
    return false;
  }
  {
    auto* temp = (*pem_path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.pem_path = *temp;
  }

  const base::Value* override_flags_value = dict.Find("override_flags");
  if (!override_flags_value) {
    return false;
  }
  {
    auto temp = (*override_flags_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.override_flags = *temp;
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* pack_status_as_string = (*status_value).GetIfString();
    if (!pack_status_as_string) {
      return false;
    }
    out.status = ParsePackStatus(*pack_status_as_string);
    if (out.status == PackStatus()) {
      return false;
    }
  }

  return true;
}

// static
bool PackDirectoryResponse::Populate(
    const base::Value& value, PackDirectoryResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<PackDirectoryResponse> PackDirectoryResponse::FromValue(const base::Value::Dict& value) {
  PackDirectoryResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<PackDirectoryResponse> PackDirectoryResponse::FromValue(const base::Value& value) {
  PackDirectoryResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict PackDirectoryResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("message", this->message);

  to_value_result.Set("item_path", this->item_path);

  to_value_result.Set("pem_path", this->pem_path);

  to_value_result.Set("override_flags", this->override_flags);

  to_value_result.Set("status", developer_private::ToString(this->status));


  return to_value_result;
}


ProjectInfo::ProjectInfo()
 {}

ProjectInfo::~ProjectInfo() = default;
ProjectInfo::ProjectInfo(ProjectInfo&& rhs) noexcept = default;
ProjectInfo& ProjectInfo::operator=(ProjectInfo&& rhs) noexcept = default;
ProjectInfo ProjectInfo::Clone() const {
  ProjectInfo out;
  out.name = name;
  return out;
}

// static
bool ProjectInfo::Populate(
    const base::Value::Dict& dict, ProjectInfo& out) {
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

  return true;
}

// static
bool ProjectInfo::Populate(
    const base::Value& value, ProjectInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProjectInfo> ProjectInfo::FromValue(const base::Value::Dict& value) {
  ProjectInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProjectInfo> ProjectInfo::FromValue(const base::Value& value) {
  ProjectInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProjectInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);


  return to_value_result;
}


EventData::EventData()
: event_type() {}

EventData::~EventData() = default;
EventData::EventData(EventData&& rhs) noexcept = default;
EventData& EventData::operator=(EventData&& rhs) noexcept = default;
EventData EventData::Clone() const {
  EventData out;
  out.event_type = event_type;
  out.item_id = item_id;
  if (extension_info) {
    out.extension_info = extension_info->Clone();
  }
  return out;
}

// static
bool EventData::Populate(
    const base::Value::Dict& dict, EventData& out) {
  const base::Value* event_type_value = dict.Find("event_type");
  if (!event_type_value) {
    return false;
  }
  {
    const std::string* event_type_as_string = (*event_type_value).GetIfString();
    if (!event_type_as_string) {
      return false;
    }
    out.event_type = ParseEventType(*event_type_as_string);
    if (out.event_type == EventType()) {
      return false;
    }
  }

  const base::Value* item_id_value = dict.Find("item_id");
  if (!item_id_value) {
    return false;
  }
  {
    auto* temp = (*item_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.item_id = *temp;
  }

  const base::Value* extension_info_value = dict.Find("extensionInfo");
  if (extension_info_value) {
    {
      if (!(*extension_info_value).is_dict()) {
        return false;
      }
      else {
        ExtensionInfo temp;
        if (!ExtensionInfo::Populate((*extension_info_value).GetDict(), temp))
          return false;
        out.extension_info = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool EventData::Populate(
    const base::Value& value, EventData& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<EventData> EventData::FromValue(const base::Value::Dict& value) {
  EventData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<EventData> EventData::FromValue(const base::Value& value) {
  EventData out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict EventData::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("event_type", developer_private::ToString(this->event_type));

  to_value_result.Set("item_id", this->item_id);

  if (this->extension_info) {
    to_value_result.Set("extensionInfo", (this->extension_info)->ToValue());

  }

  return to_value_result;
}


ErrorFileSource::ErrorFileSource()
 {}

ErrorFileSource::~ErrorFileSource() = default;
ErrorFileSource::ErrorFileSource(ErrorFileSource&& rhs) noexcept = default;
ErrorFileSource& ErrorFileSource::operator=(ErrorFileSource&& rhs) noexcept = default;
ErrorFileSource ErrorFileSource::Clone() const {
  ErrorFileSource out;
  out.before_highlight = before_highlight;
  out.highlight = highlight;
  out.after_highlight = after_highlight;
  return out;
}

// static
bool ErrorFileSource::Populate(
    const base::Value::Dict& dict, ErrorFileSource& out) {
  const base::Value* before_highlight_value = dict.Find("beforeHighlight");
  if (!before_highlight_value) {
    return false;
  }
  {
    auto* temp = (*before_highlight_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.before_highlight = *temp;
  }

  const base::Value* highlight_value = dict.Find("highlight");
  if (!highlight_value) {
    return false;
  }
  {
    auto* temp = (*highlight_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.highlight = *temp;
  }

  const base::Value* after_highlight_value = dict.Find("afterHighlight");
  if (!after_highlight_value) {
    return false;
  }
  {
    auto* temp = (*after_highlight_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.after_highlight = *temp;
  }

  return true;
}

// static
bool ErrorFileSource::Populate(
    const base::Value& value, ErrorFileSource& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ErrorFileSource> ErrorFileSource::FromValue(const base::Value::Dict& value) {
  ErrorFileSource out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ErrorFileSource> ErrorFileSource::FromValue(const base::Value& value) {
  ErrorFileSource out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ErrorFileSource::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("beforeHighlight", this->before_highlight);

  to_value_result.Set("highlight", this->highlight);

  to_value_result.Set("afterHighlight", this->after_highlight);


  return to_value_result;
}


LoadError::LoadError()
 {}

LoadError::~LoadError() = default;
LoadError::LoadError(LoadError&& rhs) noexcept = default;
LoadError& LoadError::operator=(LoadError&& rhs) noexcept = default;
LoadError LoadError::Clone() const {
  LoadError out;
  out.error = error;
  out.path = path;
  if (source) {
    out.source = source->Clone();
  }
  out.retry_guid = retry_guid;
  return out;
}

// static
bool LoadError::Populate(
    const base::Value::Dict& dict, LoadError& out) {
  const base::Value* error_value = dict.Find("error");
  if (!error_value) {
    return false;
  }
  {
    auto* temp = (*error_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.error = *temp;
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

  const base::Value* source_value = dict.Find("source");
  if (source_value) {
    {
      if (!(*source_value).is_dict()) {
        return false;
      }
      else {
        ErrorFileSource temp;
        if (!ErrorFileSource::Populate((*source_value).GetDict(), temp))
          return false;
        out.source = std::move(temp);
      }
    }
  }

  const base::Value* retry_guid_value = dict.Find("retryGuid");
  if (!retry_guid_value) {
    return false;
  }
  {
    auto* temp = (*retry_guid_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.retry_guid = *temp;
  }

  return true;
}

// static
bool LoadError::Populate(
    const base::Value& value, LoadError& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<LoadError> LoadError::FromValue(const base::Value::Dict& value) {
  LoadError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<LoadError> LoadError::FromValue(const base::Value& value) {
  LoadError out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict LoadError::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("error", this->error);

  to_value_result.Set("path", this->path);

  if (this->source) {
    to_value_result.Set("source", (this->source)->ToValue());

  }
  to_value_result.Set("retryGuid", this->retry_guid);


  return to_value_result;
}


RequestFileSourceProperties::RequestFileSourceProperties()
 {}

RequestFileSourceProperties::~RequestFileSourceProperties() = default;
RequestFileSourceProperties::RequestFileSourceProperties(RequestFileSourceProperties&& rhs) noexcept = default;
RequestFileSourceProperties& RequestFileSourceProperties::operator=(RequestFileSourceProperties&& rhs) noexcept = default;
RequestFileSourceProperties RequestFileSourceProperties::Clone() const {
  RequestFileSourceProperties out;
  out.extension_id = extension_id;
  out.path_suffix = path_suffix;
  out.message = message;
  out.manifest_key = manifest_key;
  out.manifest_specific = manifest_specific;
  out.line_number = line_number;
  return out;
}

// static
bool RequestFileSourceProperties::Populate(
    const base::Value::Dict& dict, RequestFileSourceProperties& out) {
  const base::Value* extension_id_value = dict.Find("extensionId");
  if (!extension_id_value) {
    return false;
  }
  {
    auto* temp = (*extension_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.extension_id = *temp;
  }

  const base::Value* path_suffix_value = dict.Find("pathSuffix");
  if (!path_suffix_value) {
    return false;
  }
  {
    auto* temp = (*path_suffix_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path_suffix = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  const base::Value* manifest_key_value = dict.Find("manifestKey");
  if (manifest_key_value) {
    {
      auto* temp = (*manifest_key_value).GetIfString();
      if (!temp) {
        out.manifest_key = std::nullopt;
        return false;
      }
      out.manifest_key = *temp;
    }
  }

  const base::Value* manifest_specific_value = dict.Find("manifestSpecific");
  if (manifest_specific_value) {
    {
      auto* temp = (*manifest_specific_value).GetIfString();
      if (!temp) {
        out.manifest_specific = std::nullopt;
        return false;
      }
      out.manifest_specific = *temp;
    }
  }

  const base::Value* line_number_value = dict.Find("lineNumber");
  if (line_number_value) {
    {
      auto temp = (*line_number_value).GetIfInt();
      if (!temp.has_value()) {
        out.line_number = std::nullopt;
        return false;
      }
      out.line_number = *temp;
    }
  }

  return true;
}

// static
bool RequestFileSourceProperties::Populate(
    const base::Value& value, RequestFileSourceProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RequestFileSourceProperties> RequestFileSourceProperties::FromValue(const base::Value::Dict& value) {
  RequestFileSourceProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RequestFileSourceProperties> RequestFileSourceProperties::FromValue(const base::Value& value) {
  RequestFileSourceProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RequestFileSourceProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("extensionId", this->extension_id);

  to_value_result.Set("pathSuffix", this->path_suffix);

  to_value_result.Set("message", this->message);

  if (this->manifest_key) {
    to_value_result.Set("manifestKey", *this->manifest_key);

  }
  if (this->manifest_specific) {
    to_value_result.Set("manifestSpecific", *this->manifest_specific);

  }
  if (this->line_number) {
    to_value_result.Set("lineNumber", *this->line_number);

  }

  return to_value_result;
}


RequestFileSourceResponse::RequestFileSourceResponse()
 {}

RequestFileSourceResponse::~RequestFileSourceResponse() = default;
RequestFileSourceResponse::RequestFileSourceResponse(RequestFileSourceResponse&& rhs) noexcept = default;
RequestFileSourceResponse& RequestFileSourceResponse::operator=(RequestFileSourceResponse&& rhs) noexcept = default;
RequestFileSourceResponse RequestFileSourceResponse::Clone() const {
  RequestFileSourceResponse out;
  out.highlight = highlight;
  out.before_highlight = before_highlight;
  out.after_highlight = after_highlight;
  out.title = title;
  out.message = message;
  return out;
}

// static
bool RequestFileSourceResponse::Populate(
    const base::Value::Dict& dict, RequestFileSourceResponse& out) {
  const base::Value* highlight_value = dict.Find("highlight");
  if (!highlight_value) {
    return false;
  }
  {
    auto* temp = (*highlight_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.highlight = *temp;
  }

  const base::Value* before_highlight_value = dict.Find("beforeHighlight");
  if (!before_highlight_value) {
    return false;
  }
  {
    auto* temp = (*before_highlight_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.before_highlight = *temp;
  }

  const base::Value* after_highlight_value = dict.Find("afterHighlight");
  if (!after_highlight_value) {
    return false;
  }
  {
    auto* temp = (*after_highlight_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.after_highlight = *temp;
  }

  const base::Value* title_value = dict.Find("title");
  if (!title_value) {
    return false;
  }
  {
    auto* temp = (*title_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.title = *temp;
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool RequestFileSourceResponse::Populate(
    const base::Value& value, RequestFileSourceResponse& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RequestFileSourceResponse> RequestFileSourceResponse::FromValue(const base::Value::Dict& value) {
  RequestFileSourceResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RequestFileSourceResponse> RequestFileSourceResponse::FromValue(const base::Value& value) {
  RequestFileSourceResponse out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RequestFileSourceResponse::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("highlight", this->highlight);

  to_value_result.Set("beforeHighlight", this->before_highlight);

  to_value_result.Set("afterHighlight", this->after_highlight);

  to_value_result.Set("title", this->title);

  to_value_result.Set("message", this->message);


  return to_value_result;
}


OpenDevToolsProperties::OpenDevToolsProperties()
: render_view_id(0),
render_process_id(0) {}

OpenDevToolsProperties::~OpenDevToolsProperties() = default;
OpenDevToolsProperties::OpenDevToolsProperties(OpenDevToolsProperties&& rhs) noexcept = default;
OpenDevToolsProperties& OpenDevToolsProperties::operator=(OpenDevToolsProperties&& rhs) noexcept = default;
OpenDevToolsProperties OpenDevToolsProperties::Clone() const {
  OpenDevToolsProperties out;
  out.extension_id = extension_id;
  out.render_view_id = render_view_id;
  out.render_process_id = render_process_id;
  out.is_service_worker = is_service_worker;
  out.incognito = incognito;
  out.url = url;
  out.line_number = line_number;
  out.column_number = column_number;
  return out;
}

// static
bool OpenDevToolsProperties::Populate(
    const base::Value::Dict& dict, OpenDevToolsProperties& out) {
  const base::Value* extension_id_value = dict.Find("extensionId");
  if (extension_id_value) {
    {
      auto* temp = (*extension_id_value).GetIfString();
      if (!temp) {
        out.extension_id = std::nullopt;
        return false;
      }
      out.extension_id = *temp;
    }
  }

  const base::Value* render_view_id_value = dict.Find("renderViewId");
  if (!render_view_id_value) {
    return false;
  }
  {
    auto temp = (*render_view_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.render_view_id = *temp;
  }

  const base::Value* render_process_id_value = dict.Find("renderProcessId");
  if (!render_process_id_value) {
    return false;
  }
  {
    auto temp = (*render_process_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.render_process_id = *temp;
  }

  const base::Value* is_service_worker_value = dict.Find("isServiceWorker");
  if (is_service_worker_value) {
    {
      auto temp = (*is_service_worker_value).GetIfBool();
      if (!temp.has_value()) {
        out.is_service_worker = std::nullopt;
        return false;
      }
      out.is_service_worker = *temp;
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

  const base::Value* line_number_value = dict.Find("lineNumber");
  if (line_number_value) {
    {
      auto temp = (*line_number_value).GetIfInt();
      if (!temp.has_value()) {
        out.line_number = std::nullopt;
        return false;
      }
      out.line_number = *temp;
    }
  }

  const base::Value* column_number_value = dict.Find("columnNumber");
  if (column_number_value) {
    {
      auto temp = (*column_number_value).GetIfInt();
      if (!temp.has_value()) {
        out.column_number = std::nullopt;
        return false;
      }
      out.column_number = *temp;
    }
  }

  return true;
}

// static
bool OpenDevToolsProperties::Populate(
    const base::Value& value, OpenDevToolsProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<OpenDevToolsProperties> OpenDevToolsProperties::FromValue(const base::Value::Dict& value) {
  OpenDevToolsProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<OpenDevToolsProperties> OpenDevToolsProperties::FromValue(const base::Value& value) {
  OpenDevToolsProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict OpenDevToolsProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->extension_id) {
    to_value_result.Set("extensionId", *this->extension_id);

  }
  to_value_result.Set("renderViewId", this->render_view_id);

  to_value_result.Set("renderProcessId", this->render_process_id);

  if (this->is_service_worker) {
    to_value_result.Set("isServiceWorker", *this->is_service_worker);

  }
  if (this->incognito) {
    to_value_result.Set("incognito", *this->incognito);

  }
  if (this->url) {
    to_value_result.Set("url", *this->url);

  }
  if (this->line_number) {
    to_value_result.Set("lineNumber", *this->line_number);

  }
  if (this->column_number) {
    to_value_result.Set("columnNumber", *this->column_number);

  }

  return to_value_result;
}


DeleteExtensionErrorsProperties::DeleteExtensionErrorsProperties()
: type() {}

DeleteExtensionErrorsProperties::~DeleteExtensionErrorsProperties() = default;
DeleteExtensionErrorsProperties::DeleteExtensionErrorsProperties(DeleteExtensionErrorsProperties&& rhs) noexcept = default;
DeleteExtensionErrorsProperties& DeleteExtensionErrorsProperties::operator=(DeleteExtensionErrorsProperties&& rhs) noexcept = default;
DeleteExtensionErrorsProperties DeleteExtensionErrorsProperties::Clone() const {
  DeleteExtensionErrorsProperties out;
  out.extension_id = extension_id;
  out.error_ids = error_ids;
  out.type = type;
  return out;
}

// static
bool DeleteExtensionErrorsProperties::Populate(
    const base::Value::Dict& dict, DeleteExtensionErrorsProperties& out) {
  out.type = ErrorType();
  const base::Value* extension_id_value = dict.Find("extensionId");
  if (!extension_id_value) {
    return false;
  }
  {
    auto* temp = (*extension_id_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.extension_id = *temp;
  }

  const base::Value* error_ids_value = dict.Find("errorIds");
  if (error_ids_value) {
    {
      if (!(*error_ids_value).is_list()) {
        return false;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*error_ids_value).GetList(), out.error_ids)) {
          return false;
        }
      }
    }
  }

  const base::Value* type_value = dict.Find("type");
  if (type_value) {
    {
      const std::string* error_type_as_string = (*type_value).GetIfString();
      if (!error_type_as_string) {
        return false;
      }
      out.type = ParseErrorType(*error_type_as_string);
      if (out.type == ErrorType()) {
        return false;
      }
    }
    } else {
    out.type = ErrorType();
  }

  return true;
}

// static
bool DeleteExtensionErrorsProperties::Populate(
    const base::Value& value, DeleteExtensionErrorsProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DeleteExtensionErrorsProperties> DeleteExtensionErrorsProperties::FromValue(const base::Value::Dict& value) {
  DeleteExtensionErrorsProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DeleteExtensionErrorsProperties> DeleteExtensionErrorsProperties::FromValue(const base::Value& value) {
  DeleteExtensionErrorsProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DeleteExtensionErrorsProperties::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("extensionId", this->extension_id);

  if (this->error_ids) {
    to_value_result.Set("errorIds", json_schema_compiler::util::CreateValueFromArray(*this->error_ids));

  }
  if (this->type != ErrorType()) {
    to_value_result.Set("type", developer_private::ToString(this->type));

  }

  return to_value_result;
}



//
// Functions
//

namespace AutoUpdate {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace AutoUpdate

namespace GetExtensionsInfo {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        GetExtensionsInfoOptions temp;
        if (!GetExtensionsInfoOptions::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::vector<ExtensionInfo>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetExtensionsInfo

namespace GetExtensionInfo {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ExtensionInfo& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetExtensionInfo

namespace GetExtensionSize {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& string) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(string);

  return create_results;
}
}  // namespace GetExtensionSize

namespace GetProfileConfiguration {

base::Value::List Results::Create(const ProfileInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetProfileConfiguration

namespace UpdateProfileConfiguration {

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
    const base::Value& update_value = args[0];
    {
      if (!update_value.is_dict()) {
        return std::nullopt;
      }
      if (!ProfileConfigurationUpdate::Populate(update_value.GetDict(), params.update)) {
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
}  // namespace UpdateProfileConfiguration

namespace Reload {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& extension_id_value = args[0];
    {
      auto* temp = extension_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.extension_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        ReloadOptions temp;
        if (!ReloadOptions::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const LoadError& error) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((error).ToValue());

  return create_results;
}
}  // namespace Reload

namespace UpdateExtensionConfiguration {

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
    const base::Value& update_value = args[0];
    {
      if (!update_value.is_dict()) {
        return std::nullopt;
      }
      if (!ExtensionConfigurationUpdate::Populate(update_value.GetDict(), params.update)) {
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
}  // namespace UpdateExtensionConfiguration

namespace LoadUnpacked {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        LoadUnpackedOptions temp;
        if (!LoadUnpackedOptions::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const LoadError& error) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((error).ToValue());

  return create_results;
}
}  // namespace LoadUnpacked

namespace InstallDroppedFile {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace InstallDroppedFile

namespace NotifyDragInstallInProgress {

}  // namespace NotifyDragInstallInProgress

namespace LoadDirectory {

Params::Directory::Directory()
 {}

Params::Directory::~Directory() = default;
Params::Directory::Directory(Directory&& rhs) noexcept = default;
Params::Directory& Params::Directory::operator=(Directory&& rhs) noexcept = default;
Params::Directory Params::Directory::Clone() const {
  Directory out;
  return out;
}

// static
bool Params::Directory::Populate(
    const base::Value::Dict& dict, Directory& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Directory::Populate(
    const base::Value& value, Directory& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Params::Directory> Params::Directory::FromValue(const base::Value::Dict& value) {
  Directory out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Params::Directory> Params::Directory::FromValue(const base::Value& value) {
  Directory out;
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
    const base::Value& directory_value = args[0];
    {
      if (!directory_value.is_dict()) {
        return std::nullopt;
      }
      if (!Directory::Populate(directory_value.GetDict(), params.directory)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& string) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(string);

  return create_results;
}
}  // namespace LoadDirectory

namespace ChoosePath {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& select_type_value = args[0];
    {
      const std::string* select_type_as_string = select_type_value.GetIfString();
      if (!select_type_as_string) {
        return std::nullopt;
      }
      params.select_type = ParseSelectType(*select_type_as_string);
      if (params.select_type == SelectType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& file_type_value = args[1];
    {
      const std::string* file_type_as_string = file_type_value.GetIfString();
      if (!file_type_as_string) {
        return std::nullopt;
      }
      params.file_type = ParseFileType(*file_type_as_string);
      if (params.file_type == FileType()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& string) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(string);

  return create_results;
}
}  // namespace ChoosePath

namespace PackDirectory {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 3) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& path_value = args[0];
    {
      auto* temp = path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& private_key_path_value = args[1];
    {
      auto* temp = private_key_path_value.GetIfString();
      if (!temp) {
        params.private_key_path = std::nullopt;
        return std::nullopt;
      }
      params.private_key_path = *temp;
    }
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& flags_value = args[2];
    {
      auto temp = flags_value.GetIfInt();
      if (!temp.has_value()) {
        params.flags = std::nullopt;
        return std::nullopt;
      }
      params.flags = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const PackDirectoryResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace PackDirectory

namespace IsProfileManaged {

base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace IsProfileManaged

namespace RequestFileSource {

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
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!RequestFileSourceProperties::Populate(properties_value.GetDict(), params.properties)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const RequestFileSourceResponse& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}
}  // namespace RequestFileSource

namespace OpenDevTools {

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
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!OpenDevToolsProperties::Populate(properties_value.GetDict(), params.properties)) {
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
}  // namespace OpenDevTools

namespace DeleteExtensionErrors {

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
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!DeleteExtensionErrorsProperties::Populate(properties_value.GetDict(), params.properties)) {
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
}  // namespace DeleteExtensionErrors

namespace RepairExtension {

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
    const base::Value& extension_id_value = args[0];
    {
      auto* temp = extension_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.extension_id = *temp;
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
}  // namespace RepairExtension

namespace ShowOptions {

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
    const base::Value& extension_id_value = args[0];
    {
      auto* temp = extension_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.extension_id = *temp;
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
}  // namespace ShowOptions

namespace ShowPath {

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
    const base::Value& extension_id_value = args[0];
    {
      auto* temp = extension_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.extension_id = *temp;
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
}  // namespace ShowPath

namespace SetShortcutHandlingSuspended {

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
    const base::Value& is_suspended_value = args[0];
    {
      auto temp = is_suspended_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.is_suspended = *temp;
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
}  // namespace SetShortcutHandlingSuspended

namespace UpdateExtensionCommand {

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
    const base::Value& update_value = args[0];
    {
      if (!update_value.is_dict()) {
        return std::nullopt;
      }
      if (!ExtensionCommandUpdate::Populate(update_value.GetDict(), params.update)) {
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
}  // namespace UpdateExtensionCommand

namespace AddHostPermission {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& extension_id_value = args[0];
    {
      auto* temp = extension_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.extension_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& host_value = args[1];
    {
      auto* temp = host_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.host = *temp;
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
}  // namespace AddHostPermission

namespace RemoveHostPermission {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& extension_id_value = args[0];
    {
      auto* temp = extension_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.extension_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& host_value = args[1];
    {
      auto* temp = host_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.host = *temp;
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
}  // namespace RemoveHostPermission

namespace GetUserSiteSettings {

base::Value::List Results::Create(const UserSiteSettings& settings) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((settings).ToValue());

  return create_results;
}
}  // namespace GetUserSiteSettings

namespace AddUserSpecifiedSites {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!UserSiteSettingsOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace AddUserSpecifiedSites

namespace RemoveUserSpecifiedSites {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!UserSiteSettingsOptions::Populate(options_value.GetDict(), params.options)) {
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
}  // namespace RemoveUserSpecifiedSites

namespace GetUserAndExtensionSitesByEtld {

base::Value::List Results::Create(const std::vector<SiteGroup>& site_groups) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(site_groups));

  return create_results;
}
}  // namespace GetUserAndExtensionSitesByEtld

namespace GetMatchingExtensionsForSite {

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
    const base::Value& site_value = args[0];
    {
      auto* temp = site_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.site = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::vector<MatchingExtensionInfo>& matching_extensions) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(matching_extensions));

  return create_results;
}
}  // namespace GetMatchingExtensionsForSite

namespace UpdateSiteAccess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& site_value = args[0];
    {
      auto* temp = site_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.site = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& updates_value = args[1];
    {
      if (!updates_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(updates_value.GetList(), params.updates)) {
          return std::nullopt;
        }
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
}  // namespace UpdateSiteAccess

namespace RemoveMultipleExtensions {

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
    const base::Value& extension_ids_value = args[0];
    {
      if (!extension_ids_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(extension_ids_value.GetList(), params.extension_ids)) {
          return std::nullopt;
        }
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
}  // namespace RemoveMultipleExtensions

namespace DismissSafetyHubExtensionsMenuNotification {

}  // namespace DismissSafetyHubExtensionsMenuNotification

//
// Events
//

namespace OnItemStateChanged {

const char kEventName[] = "developerPrivate.onItemStateChanged";

base::Value::List Create(const EventData& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((response).ToValue());

  return create_results;
}

}  // namespace OnItemStateChanged

namespace OnProfileStateChanged {

const char kEventName[] = "developerPrivate.onProfileStateChanged";

base::Value::List Create(const ProfileInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnProfileStateChanged

namespace OnUserSiteSettingsChanged {

const char kEventName[] = "developerPrivate.onUserSiteSettingsChanged";

base::Value::List Create(const UserSiteSettings& settings) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((settings).ToValue());

  return create_results;
}

}  // namespace OnUserSiteSettingsChanged

}  // namespace developer_private
}  // namespace api
}  // namespace extensions

