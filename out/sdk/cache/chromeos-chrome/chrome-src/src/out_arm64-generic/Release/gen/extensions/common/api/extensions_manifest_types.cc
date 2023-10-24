// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/extensions_manifest_types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/extensions_manifest_types.h"

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
#include "base/types/expected.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace extensions_manifest_types {
//
// Types
//

Automation::Object::Object()
 {}

Automation::Object::~Object() = default;
Automation::Object::Object(Object&& rhs) = default;
Automation::Object& Automation::Object::operator=(Object&& rhs) = default;
Automation::Object Automation::Object::Clone() const {
  Object out;
  out.desktop = desktop;
  out.matches = matches;
  out.interact = interact;
  return out;
}

// static
bool Automation::Object::Populate(
    const base::Value::Dict& dict, Object& out, std::u16string& error) {
  const base::Value* desktop_value = dict.Find("desktop");
  if (desktop_value) {
    {
      auto temp = (*desktop_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'desktop': expected desktop, got " + UTF8ToUTF16(base::Value::GetTypeName((*desktop_value).type()));
        out.desktop = absl::nullopt;
        return false;
      }
      out.desktop = *temp;
    }
  }

  const base::Value* matches_value = dict.Find("matches");
  if (matches_value) {
    {
      if (!(*matches_value).is_list()) {
        DCHECK(error.empty());
        error = u"'matches': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*matches_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*matches_value).GetList(), out.matches, array_parse_error)) {
          array_parse_error = u"Error at key 'matches': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* interact_value = dict.Find("interact");
  if (interact_value) {
    {
      auto temp = (*interact_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'interact': expected interact, got " + UTF8ToUTF16(base::Value::GetTypeName((*interact_value).type()));
        out.interact = absl::nullopt;
        return false;
      }
      out.interact = *temp;
    }
  }

  return true;
}

// static
bool Automation::Object::Populate(
    const base::Value& value, Object& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Automation::Object, std::u16string> Automation::Object::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Object out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Automation::Object, std::u16string> Automation::Object::FromValue(const base::Value& value) {
  std::u16string error;
  Object out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Automation::Object::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->desktop) {
    to_value_result.Set("desktop", *this->desktop);

  }
  if (this->matches) {
    to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(*this->matches));

  }
  if (this->interact) {
    to_value_result.Set("interact", *this->interact);

  }

  return to_value_result;
}



Automation::Automation()
 {}

Automation::~Automation() = default;
Automation::Automation(Automation&& rhs) = default;
Automation& Automation::operator=(Automation&& rhs) = default;
Automation Automation::Clone() const {
  Automation out;
  out.as_boolean = as_boolean;
  if (as_object) {
    out.as_object = as_object->Clone();
  }
  return out;
}

// static
bool Automation::Populate(
    const base::Value& value, Automation& out, std::u16string& error) {
  if (value.type() == base::Value::Type::BOOLEAN) {
    {
      auto temp = value.GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'boolean': expected boolean, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
        out.as_boolean = absl::nullopt;
        return false;
      }
      out.as_boolean = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::DICT) {
    {
      if (!value.is_dict()) {
        DCHECK(error.empty());
        error = u"'object': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
        return false;
      }
      else {
        Object temp;
        if (!Object::Populate(value.GetDict(), temp, error))
          return false;
        out.as_object = std::move(temp);
      }
    }
    return true;
  }
  DCHECK(error.empty());
  error = u"expected boolean or object, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
  return false;
}

// static
std::unique_ptr<Automation> Automation::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<Automation>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  bool result = Populate(value, *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<Automation, std::u16string> Automation::FromValue(const base::Value& value) {
  std::u16string error;
  Automation out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value Automation::ToValue() const {
  base::Value result;
  if (as_boolean) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for automation";
    result = base::Value(*as_boolean);

  }
  if (as_object) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for automation";
    result = base::Value((as_object)->ToValue());

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for automation";
  return result;
}


ContentCapabilities::ContentCapabilities()
 {}

ContentCapabilities::~ContentCapabilities() = default;
ContentCapabilities::ContentCapabilities(ContentCapabilities&& rhs) = default;
ContentCapabilities& ContentCapabilities::operator=(ContentCapabilities&& rhs) = default;
ContentCapabilities ContentCapabilities::Clone() const {
  ContentCapabilities out;
  out.matches = matches;
  out.permissions = permissions;
  return out;
}

// static
bool ContentCapabilities::Populate(
    const base::Value::Dict& dict, ContentCapabilities& out, std::u16string& error) {
  const base::Value* matches_value = dict.Find("matches");
  if (!matches_value) {
    DCHECK(error.empty());
    error = u"'matches' is required";
    return false;
  }
  {
    if (!(*matches_value).is_list()) {
      DCHECK(error.empty());
      error = u"'matches': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*matches_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*matches_value).GetList(), out.matches, array_parse_error)) {
        array_parse_error = u"Error at key 'matches': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  const base::Value* permissions_value = dict.Find("permissions");
  if (!permissions_value) {
    DCHECK(error.empty());
    error = u"'permissions' is required";
    return false;
  }
  {
    if (!(*permissions_value).is_list()) {
      DCHECK(error.empty());
      error = u"'permissions': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*permissions_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*permissions_value).GetList(), out.permissions, array_parse_error)) {
        array_parse_error = u"Error at key 'permissions': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  return true;
}

// static
bool ContentCapabilities::Populate(
    const base::Value& value, ContentCapabilities& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
std::unique_ptr<ContentCapabilities> ContentCapabilities::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<ContentCapabilities>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<ContentCapabilities, std::u16string> ContentCapabilities::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  ContentCapabilities out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ContentCapabilities, std::u16string> ContentCapabilities::FromValue(const base::Value& value) {
  std::u16string error;
  ContentCapabilities out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict ContentCapabilities::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(this->matches));

  to_value_result.Set("permissions", json_schema_compiler::util::CreateValueFromArray(this->permissions));


  return to_value_result;
}


ExternallyConnectable::ExternallyConnectable()
 {}

ExternallyConnectable::~ExternallyConnectable() = default;
ExternallyConnectable::ExternallyConnectable(ExternallyConnectable&& rhs) = default;
ExternallyConnectable& ExternallyConnectable::operator=(ExternallyConnectable&& rhs) = default;
ExternallyConnectable ExternallyConnectable::Clone() const {
  ExternallyConnectable out;
  out.ids = ids;
  out.matches = matches;
  out.accepts_tls_channel_id = accepts_tls_channel_id;
  return out;
}

// static
bool ExternallyConnectable::Populate(
    const base::Value::Dict& dict, ExternallyConnectable& out, std::u16string& error) {
  const base::Value* ids_value = dict.Find("ids");
  if (ids_value) {
    {
      if (!(*ids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'ids': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*ids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*ids_value).GetList(), out.ids, array_parse_error)) {
          array_parse_error = u"Error at key 'ids': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* matches_value = dict.Find("matches");
  if (matches_value) {
    {
      if (!(*matches_value).is_list()) {
        DCHECK(error.empty());
        error = u"'matches': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*matches_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*matches_value).GetList(), out.matches, array_parse_error)) {
          array_parse_error = u"Error at key 'matches': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* accepts_tls_channel_id_value = dict.Find("accepts_tls_channel_id");
  if (accepts_tls_channel_id_value) {
    {
      auto temp = (*accepts_tls_channel_id_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'accepts_tls_channel_id': expected accepts_tls_channel_id, got " + UTF8ToUTF16(base::Value::GetTypeName((*accepts_tls_channel_id_value).type()));
        out.accepts_tls_channel_id = absl::nullopt;
        return false;
      }
      out.accepts_tls_channel_id = *temp;
    }
  }

  return true;
}

// static
bool ExternallyConnectable::Populate(
    const base::Value& value, ExternallyConnectable& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
std::unique_ptr<ExternallyConnectable> ExternallyConnectable::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<ExternallyConnectable>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<ExternallyConnectable, std::u16string> ExternallyConnectable::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  ExternallyConnectable out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ExternallyConnectable, std::u16string> ExternallyConnectable::FromValue(const base::Value& value) {
  std::u16string error;
  ExternallyConnectable out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict ExternallyConnectable::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->ids) {
    to_value_result.Set("ids", json_schema_compiler::util::CreateValueFromArray(*this->ids));

  }
  if (this->matches) {
    to_value_result.Set("matches", json_schema_compiler::util::CreateValueFromArray(*this->matches));

  }
  if (this->accepts_tls_channel_id) {
    to_value_result.Set("accepts_tls_channel_id", *this->accepts_tls_channel_id);

  }

  return to_value_result;
}


OptionsUI::OptionsUI()
 {}

OptionsUI::~OptionsUI() = default;
OptionsUI::OptionsUI(OptionsUI&& rhs) = default;
OptionsUI& OptionsUI::operator=(OptionsUI&& rhs) = default;
OptionsUI OptionsUI::Clone() const {
  OptionsUI out;
  out.page = page;
  out.chrome_style = chrome_style;
  out.open_in_tab = open_in_tab;
  return out;
}

// static
bool OptionsUI::Populate(
    const base::Value::Dict& dict, OptionsUI& out, std::u16string& error) {
  const base::Value* page_value = dict.Find("page");
  if (!page_value) {
    DCHECK(error.empty());
    error = u"'page' is required";
    return false;
  }
  {
    auto* temp = (*page_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'page': expected page, got " + UTF8ToUTF16(base::Value::GetTypeName((*page_value).type()));
      return false;
    }
    out.page = *temp;
  }

  const base::Value* chrome_style_value = dict.Find("chrome_style");
  if (chrome_style_value) {
    {
      auto temp = (*chrome_style_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'chrome_style': expected chrome_style, got " + UTF8ToUTF16(base::Value::GetTypeName((*chrome_style_value).type()));
        out.chrome_style = absl::nullopt;
        return false;
      }
      out.chrome_style = *temp;
    }
  }

  const base::Value* open_in_tab_value = dict.Find("open_in_tab");
  if (open_in_tab_value) {
    {
      auto temp = (*open_in_tab_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'open_in_tab': expected open_in_tab, got " + UTF8ToUTF16(base::Value::GetTypeName((*open_in_tab_value).type()));
        out.open_in_tab = absl::nullopt;
        return false;
      }
      out.open_in_tab = *temp;
    }
  }

  return true;
}

// static
bool OptionsUI::Populate(
    const base::Value& value, OptionsUI& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
std::unique_ptr<OptionsUI> OptionsUI::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<OptionsUI>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<OptionsUI, std::u16string> OptionsUI::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  OptionsUI out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<OptionsUI, std::u16string> OptionsUI::FromValue(const base::Value& value) {
  std::u16string error;
  OptionsUI out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict OptionsUI::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("page", this->page);

  if (this->chrome_style) {
    to_value_result.Set("chrome_style", *this->chrome_style);

  }
  if (this->open_in_tab) {
    to_value_result.Set("open_in_tab", *this->open_in_tab);

  }

  return to_value_result;
}


SocketHostPatterns::SocketHostPatterns()
 {}

SocketHostPatterns::~SocketHostPatterns() = default;
SocketHostPatterns::SocketHostPatterns(SocketHostPatterns&& rhs) = default;
SocketHostPatterns& SocketHostPatterns::operator=(SocketHostPatterns&& rhs) = default;
SocketHostPatterns SocketHostPatterns::Clone() const {
  SocketHostPatterns out;
  out.as_string = as_string;
  out.as_strings = as_strings;
  return out;
}

// static
bool SocketHostPatterns::Populate(
    const base::Value& value, SocketHostPatterns& out, std::u16string& error) {
  if (value.type() == base::Value::Type::STRING) {
    {
      auto* temp = value.GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'string': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
        out.as_string = absl::nullopt;
        return false;
      }
      out.as_string = *temp;
    }
    return true;
  }
  if (value.type() == base::Value::Type::LIST) {
    {
      if (!value.is_list()) {
        DCHECK(error.empty());
        error = u"'strings': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(value.GetList(), out.as_strings, array_parse_error)) {
          array_parse_error = u"Error at key 'strings': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
    return true;
  }
  DCHECK(error.empty());
  error = u"expected string or strings, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
  return false;
}

// static
std::unique_ptr<SocketHostPatterns> SocketHostPatterns::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<SocketHostPatterns>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  bool result = Populate(value, *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<SocketHostPatterns, std::u16string> SocketHostPatterns::FromValue(const base::Value& value) {
  std::u16string error;
  SocketHostPatterns out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value SocketHostPatterns::ToValue() const {
  base::Value result;
  if (as_string) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for socket_host_patterns";
    result = base::Value(*as_string);

  }
  if (as_strings) {
    DCHECK(result.is_none()) << "Cannot set multiple choices for socket_host_patterns";
    result = base::Value(json_schema_compiler::util::CreateValueFromArray(*as_strings));

  }
  DCHECK(!result.is_none()) << "Must set at least one choice for socket_host_patterns";
  return result;
}


Sockets::Udp::Udp()
 {}

Sockets::Udp::~Udp() = default;
Sockets::Udp::Udp(Udp&& rhs) = default;
Sockets::Udp& Sockets::Udp::operator=(Udp&& rhs) = default;
Sockets::Udp Sockets::Udp::Clone() const {
  Udp out;
  if (bind) {
    out.bind = bind->Clone();
  }
  if (send) {
    out.send = send->Clone();
  }
  if (multicast_membership) {
    out.multicast_membership = multicast_membership->Clone();
  }
  return out;
}

// static
bool Sockets::Udp::Populate(
    const base::Value::Dict& dict, Udp& out, std::u16string& error) {
  const base::Value* bind_value = dict.Find("bind");
  if (bind_value) {
    {
      SocketHostPatterns temp;
      if (!SocketHostPatterns::Populate((*bind_value), temp, error))
        return false;
      out.bind = std::move(temp);
    }
  }

  const base::Value* send_value = dict.Find("send");
  if (send_value) {
    {
      SocketHostPatterns temp;
      if (!SocketHostPatterns::Populate((*send_value), temp, error))
        return false;
      out.send = std::move(temp);
    }
  }

  const base::Value* multicast_membership_value = dict.Find("multicastMembership");
  if (multicast_membership_value) {
    {
      SocketHostPatterns temp;
      if (!SocketHostPatterns::Populate((*multicast_membership_value), temp, error))
        return false;
      out.multicast_membership = std::move(temp);
    }
  }

  return true;
}

// static
bool Sockets::Udp::Populate(
    const base::Value& value, Udp& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Sockets::Udp, std::u16string> Sockets::Udp::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Udp out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Sockets::Udp, std::u16string> Sockets::Udp::FromValue(const base::Value& value) {
  std::u16string error;
  Udp out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Sockets::Udp::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->bind) {
    to_value_result.Set("bind", (this->bind)->ToValue());

  }
  if (this->send) {
    to_value_result.Set("send", (this->send)->ToValue());

  }
  if (this->multicast_membership) {
    to_value_result.Set("multicastMembership", (this->multicast_membership)->ToValue());

  }

  return to_value_result;
}


Sockets::Tcp::Tcp()
 {}

Sockets::Tcp::~Tcp() = default;
Sockets::Tcp::Tcp(Tcp&& rhs) = default;
Sockets::Tcp& Sockets::Tcp::operator=(Tcp&& rhs) = default;
Sockets::Tcp Sockets::Tcp::Clone() const {
  Tcp out;
  if (connect) {
    out.connect = connect->Clone();
  }
  return out;
}

// static
bool Sockets::Tcp::Populate(
    const base::Value::Dict& dict, Tcp& out, std::u16string& error) {
  const base::Value* connect_value = dict.Find("connect");
  if (connect_value) {
    {
      SocketHostPatterns temp;
      if (!SocketHostPatterns::Populate((*connect_value), temp, error))
        return false;
      out.connect = std::move(temp);
    }
  }

  return true;
}

// static
bool Sockets::Tcp::Populate(
    const base::Value& value, Tcp& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Sockets::Tcp, std::u16string> Sockets::Tcp::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Tcp out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Sockets::Tcp, std::u16string> Sockets::Tcp::FromValue(const base::Value& value) {
  std::u16string error;
  Tcp out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Sockets::Tcp::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->connect) {
    to_value_result.Set("connect", (this->connect)->ToValue());

  }

  return to_value_result;
}


Sockets::TcpServer::TcpServer()
 {}

Sockets::TcpServer::~TcpServer() = default;
Sockets::TcpServer::TcpServer(TcpServer&& rhs) = default;
Sockets::TcpServer& Sockets::TcpServer::operator=(TcpServer&& rhs) = default;
Sockets::TcpServer Sockets::TcpServer::Clone() const {
  TcpServer out;
  if (listen) {
    out.listen = listen->Clone();
  }
  return out;
}

// static
bool Sockets::TcpServer::Populate(
    const base::Value::Dict& dict, TcpServer& out, std::u16string& error) {
  const base::Value* listen_value = dict.Find("listen");
  if (listen_value) {
    {
      SocketHostPatterns temp;
      if (!SocketHostPatterns::Populate((*listen_value), temp, error))
        return false;
      out.listen = std::move(temp);
    }
  }

  return true;
}

// static
bool Sockets::TcpServer::Populate(
    const base::Value& value, TcpServer& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<Sockets::TcpServer, std::u16string> Sockets::TcpServer::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  TcpServer out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Sockets::TcpServer, std::u16string> Sockets::TcpServer::FromValue(const base::Value& value) {
  std::u16string error;
  TcpServer out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Sockets::TcpServer::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->listen) {
    to_value_result.Set("listen", (this->listen)->ToValue());

  }

  return to_value_result;
}



Sockets::Sockets()
 {}

Sockets::~Sockets() = default;
Sockets::Sockets(Sockets&& rhs) = default;
Sockets& Sockets::operator=(Sockets&& rhs) = default;
Sockets Sockets::Clone() const {
  Sockets out;
  if (udp) {
    out.udp = udp->Clone();
  }
  if (tcp) {
    out.tcp = tcp->Clone();
  }
  if (tcp_server) {
    out.tcp_server = tcp_server->Clone();
  }
  return out;
}

// static
bool Sockets::Populate(
    const base::Value::Dict& dict, Sockets& out, std::u16string& error) {
  const base::Value* udp_value = dict.Find("udp");
  if (udp_value) {
    {
      if (!(*udp_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'udp': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*udp_value).type()));
        return false;
      }
      else {
        Udp temp;
        if (!Udp::Populate((*udp_value).GetDict(), temp, error))
          return false;
        out.udp = std::move(temp);
      }
    }
  }

  const base::Value* tcp_value = dict.Find("tcp");
  if (tcp_value) {
    {
      if (!(*tcp_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'tcp': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*tcp_value).type()));
        return false;
      }
      else {
        Tcp temp;
        if (!Tcp::Populate((*tcp_value).GetDict(), temp, error))
          return false;
        out.tcp = std::move(temp);
      }
    }
  }

  const base::Value* tcp_server_value = dict.Find("tcpServer");
  if (tcp_server_value) {
    {
      if (!(*tcp_server_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'tcpServer': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*tcp_server_value).type()));
        return false;
      }
      else {
        TcpServer temp;
        if (!TcpServer::Populate((*tcp_server_value).GetDict(), temp, error))
          return false;
        out.tcp_server = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool Sockets::Populate(
    const base::Value& value, Sockets& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
std::unique_ptr<Sockets> Sockets::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<Sockets>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<Sockets, std::u16string> Sockets::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Sockets out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Sockets, std::u16string> Sockets::FromValue(const base::Value& value) {
  std::u16string error;
  Sockets out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Sockets::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->udp) {
    to_value_result.Set("udp", (this->udp)->ToValue());

  }
  if (this->tcp) {
    to_value_result.Set("tcp", (this->tcp)->ToValue());

  }
  if (this->tcp_server) {
    to_value_result.Set("tcpServer", (this->tcp_server)->ToValue());

  }

  return to_value_result;
}


Bluetooth::Bluetooth()
 {}

Bluetooth::~Bluetooth() = default;
Bluetooth::Bluetooth(Bluetooth&& rhs) = default;
Bluetooth& Bluetooth::operator=(Bluetooth&& rhs) = default;
Bluetooth Bluetooth::Clone() const {
  Bluetooth out;
  out.uuids = uuids;
  out.socket = socket;
  out.low_energy = low_energy;
  out.peripheral = peripheral;
  return out;
}

// static
bool Bluetooth::Populate(
    const base::Value::Dict& dict, Bluetooth& out, std::u16string& error) {
  const base::Value* uuids_value = dict.Find("uuids");
  if (uuids_value) {
    {
      if (!(*uuids_value).is_list()) {
        DCHECK(error.empty());
        error = u"'uuids': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*uuids_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*uuids_value).GetList(), out.uuids, array_parse_error)) {
          array_parse_error = u"Error at key 'uuids': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* socket_value = dict.Find("socket");
  if (socket_value) {
    {
      auto temp = (*socket_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'socket': expected socket, got " + UTF8ToUTF16(base::Value::GetTypeName((*socket_value).type()));
        out.socket = absl::nullopt;
        return false;
      }
      out.socket = *temp;
    }
  }

  const base::Value* low_energy_value = dict.Find("low_energy");
  if (low_energy_value) {
    {
      auto temp = (*low_energy_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'low_energy': expected low_energy, got " + UTF8ToUTF16(base::Value::GetTypeName((*low_energy_value).type()));
        out.low_energy = absl::nullopt;
        return false;
      }
      out.low_energy = *temp;
    }
  }

  const base::Value* peripheral_value = dict.Find("peripheral");
  if (peripheral_value) {
    {
      auto temp = (*peripheral_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'peripheral': expected peripheral, got " + UTF8ToUTF16(base::Value::GetTypeName((*peripheral_value).type()));
        out.peripheral = absl::nullopt;
        return false;
      }
      out.peripheral = *temp;
    }
  }

  return true;
}

// static
bool Bluetooth::Populate(
    const base::Value& value, Bluetooth& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
std::unique_ptr<Bluetooth> Bluetooth::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<Bluetooth>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<Bluetooth, std::u16string> Bluetooth::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  Bluetooth out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<Bluetooth, std::u16string> Bluetooth::FromValue(const base::Value& value) {
  std::u16string error;
  Bluetooth out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict Bluetooth::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->uuids) {
    to_value_result.Set("uuids", json_schema_compiler::util::CreateValueFromArray(*this->uuids));

  }
  if (this->socket) {
    to_value_result.Set("socket", *this->socket);

  }
  if (this->low_energy) {
    to_value_result.Set("low_energy", *this->low_energy);

  }
  if (this->peripheral) {
    to_value_result.Set("peripheral", *this->peripheral);

  }

  return to_value_result;
}


UsbPrinters::FiltersType::FiltersType()
: vendor_id(0) {}

UsbPrinters::FiltersType::~FiltersType() = default;
UsbPrinters::FiltersType::FiltersType(FiltersType&& rhs) = default;
UsbPrinters::FiltersType& UsbPrinters::FiltersType::operator=(FiltersType&& rhs) = default;
UsbPrinters::FiltersType UsbPrinters::FiltersType::Clone() const {
  FiltersType out;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  out.interface_class = interface_class;
  out.interface_subclass = interface_subclass;
  out.interface_protocol = interface_protocol;
  return out;
}

// static
bool UsbPrinters::FiltersType::Populate(
    const base::Value::Dict& dict, FiltersType& out, std::u16string& error) {
  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (!vendor_id_value) {
    DCHECK(error.empty());
    error = u"'vendorId' is required";
    return false;
  }
  {
    auto temp = (*vendor_id_value).GetIfInt();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'vendorId': expected vendorId, got " + UTF8ToUTF16(base::Value::GetTypeName((*vendor_id_value).type()));
      return false;
    }
    out.vendor_id = *temp;
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (product_id_value) {
    {
      auto temp = (*product_id_value).GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'productId': expected productId, got " + UTF8ToUTF16(base::Value::GetTypeName((*product_id_value).type()));
        out.product_id = absl::nullopt;
        return false;
      }
      out.product_id = *temp;
    }
  }

  const base::Value* interface_class_value = dict.Find("interfaceClass");
  if (interface_class_value) {
    {
      auto temp = (*interface_class_value).GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'interfaceClass': expected interfaceClass, got " + UTF8ToUTF16(base::Value::GetTypeName((*interface_class_value).type()));
        out.interface_class = absl::nullopt;
        return false;
      }
      out.interface_class = *temp;
    }
  }

  const base::Value* interface_subclass_value = dict.Find("interfaceSubclass");
  if (interface_subclass_value) {
    {
      auto temp = (*interface_subclass_value).GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'interfaceSubclass': expected interfaceSubclass, got " + UTF8ToUTF16(base::Value::GetTypeName((*interface_subclass_value).type()));
        out.interface_subclass = absl::nullopt;
        return false;
      }
      out.interface_subclass = *temp;
    }
  }

  const base::Value* interface_protocol_value = dict.Find("interfaceProtocol");
  if (interface_protocol_value) {
    {
      auto temp = (*interface_protocol_value).GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'interfaceProtocol': expected interfaceProtocol, got " + UTF8ToUTF16(base::Value::GetTypeName((*interface_protocol_value).type()));
        out.interface_protocol = absl::nullopt;
        return false;
      }
      out.interface_protocol = *temp;
    }
  }

  return true;
}

// static
bool UsbPrinters::FiltersType::Populate(
    const base::Value& value, FiltersType& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<UsbPrinters::FiltersType, std::u16string> UsbPrinters::FiltersType::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  FiltersType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<UsbPrinters::FiltersType, std::u16string> UsbPrinters::FiltersType::FromValue(const base::Value& value) {
  std::u16string error;
  FiltersType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict UsbPrinters::FiltersType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("vendorId", this->vendor_id);

  if (this->product_id) {
    to_value_result.Set("productId", *this->product_id);

  }
  if (this->interface_class) {
    to_value_result.Set("interfaceClass", *this->interface_class);

  }
  if (this->interface_subclass) {
    to_value_result.Set("interfaceSubclass", *this->interface_subclass);

  }
  if (this->interface_protocol) {
    to_value_result.Set("interfaceProtocol", *this->interface_protocol);

  }

  return to_value_result;
}




UsbPrinters::UsbPrinters()
 {}

UsbPrinters::~UsbPrinters() = default;
UsbPrinters::UsbPrinters(UsbPrinters&& rhs) = default;
UsbPrinters& UsbPrinters::operator=(UsbPrinters&& rhs) = default;
UsbPrinters UsbPrinters::Clone() const {
  UsbPrinters out;
  out.filters.reserve(filters.size());
  for (const auto& element : filters) {
    json_schema_compiler::util::AppendToContainer(out.filters, element.Clone());
  }
  return out;
}

// static
bool UsbPrinters::Populate(
    const base::Value::Dict& dict, UsbPrinters& out, std::u16string& error) {
  const base::Value* filters_value = dict.Find("filters");
  if (!filters_value) {
    DCHECK(error.empty());
    error = u"'filters' is required";
    return false;
  }
  {
    if (!(*filters_value).is_list()) {
      DCHECK(error.empty());
      error = u"'filters': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*filters_value).type()));
      return false;
    }
    else {
      std::u16string array_parse_error;
      if (!json_schema_compiler::util::PopulateArrayFromList((*filters_value).GetList(), out.filters, array_parse_error)) {
        array_parse_error = u"Error at key 'filters': " + array_parse_error;
        DCHECK(error.empty());
        error = array_parse_error;
        return false;
      }
    }
  }

  return true;
}

// static
bool UsbPrinters::Populate(
    const base::Value& value, UsbPrinters& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
std::unique_ptr<UsbPrinters> UsbPrinters::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<UsbPrinters>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<UsbPrinters, std::u16string> UsbPrinters::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  UsbPrinters out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<UsbPrinters, std::u16string> UsbPrinters::FromValue(const base::Value& value) {
  std::u16string error;
  UsbPrinters out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict UsbPrinters::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("filters", json_schema_compiler::util::CreateValueFromArray(this->filters));


  return to_value_result;
}


KioskSecondaryAppsType::KioskSecondaryAppsType()
 {}

KioskSecondaryAppsType::~KioskSecondaryAppsType() = default;
KioskSecondaryAppsType::KioskSecondaryAppsType(KioskSecondaryAppsType&& rhs) = default;
KioskSecondaryAppsType& KioskSecondaryAppsType::operator=(KioskSecondaryAppsType&& rhs) = default;
KioskSecondaryAppsType KioskSecondaryAppsType::Clone() const {
  KioskSecondaryAppsType out;
  out.id = id;
  out.enabled_on_launch = enabled_on_launch;
  return out;
}

// static
bool KioskSecondaryAppsType::Populate(
    const base::Value::Dict& dict, KioskSecondaryAppsType& out, std::u16string& error) {
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

  const base::Value* enabled_on_launch_value = dict.Find("enabled_on_launch");
  if (enabled_on_launch_value) {
    {
      auto temp = (*enabled_on_launch_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'enabled_on_launch': expected enabled_on_launch, got " + UTF8ToUTF16(base::Value::GetTypeName((*enabled_on_launch_value).type()));
        out.enabled_on_launch = absl::nullopt;
        return false;
      }
      out.enabled_on_launch = *temp;
    }
  }

  return true;
}

// static
bool KioskSecondaryAppsType::Populate(
    const base::Value& value, KioskSecondaryAppsType& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
std::unique_ptr<KioskSecondaryAppsType> KioskSecondaryAppsType::FromValueDeprecated(const base::Value& value, std::u16string* error_ptr) {
  auto out = std::make_unique<KioskSecondaryAppsType>();
  DCHECK(error_ptr);
  auto& error = *error_ptr;
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out, error);
  DCHECK_EQ(result, error.empty());
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
base::expected<KioskSecondaryAppsType, std::u16string> KioskSecondaryAppsType::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  KioskSecondaryAppsType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<KioskSecondaryAppsType, std::u16string> KioskSecondaryAppsType::FromValue(const base::Value& value) {
  std::u16string error;
  KioskSecondaryAppsType out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict KioskSecondaryAppsType::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("id", this->id);

  if (this->enabled_on_launch) {
    to_value_result.Set("enabled_on_launch", *this->enabled_on_launch);

  }

  return to_value_result;
}




}  // namespace extensions_manifest_types
}  // namespace api
}  // namespace extensions

