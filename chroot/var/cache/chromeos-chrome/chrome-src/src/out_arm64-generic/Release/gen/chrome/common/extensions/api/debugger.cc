// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/debugger.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/debugger.h"

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
namespace debugger {
//
// Types
//

Debuggee::Debuggee()
 {}

Debuggee::~Debuggee() = default;
Debuggee::Debuggee(Debuggee&& rhs) = default;
Debuggee& Debuggee::operator=(Debuggee&& rhs) = default;
Debuggee Debuggee::Clone() const {
  Debuggee out;
  out.tab_id = tab_id;
  out.extension_id = extension_id;
  out.target_id = target_id;
  return out;
}

// static
bool Debuggee::Populate(
    const base::Value::Dict& dict, Debuggee& out) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tab_id = absl::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  const base::Value* extension_id_value = dict.Find("extensionId");
  if (extension_id_value) {
    {
      auto* temp = (*extension_id_value).GetIfString();
      if (!temp) {
        out.extension_id = absl::nullopt;
        return false;
      }
      out.extension_id = *temp;
    }
  }

  const base::Value* target_id_value = dict.Find("targetId");
  if (target_id_value) {
    {
      auto* temp = (*target_id_value).GetIfString();
      if (!temp) {
        out.target_id = absl::nullopt;
        return false;
      }
      out.target_id = *temp;
    }
  }

  return true;
}

// static
bool Debuggee::Populate(
    const base::Value& value, Debuggee& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Debuggee> Debuggee::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Debuggee>();
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
absl::optional<Debuggee> Debuggee::FromValue(const base::Value::Dict& value) {
  Debuggee out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Debuggee> Debuggee::FromValue(const base::Value& value) {
  Debuggee out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Debuggee::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }
  if (this->extension_id) {
    to_value_result.Set("extensionId", *this->extension_id);

  }
  if (this->target_id) {
    to_value_result.Set("targetId", *this->target_id);

  }

  return to_value_result;
}


const char* ToString(TargetInfoType enum_param) {
  switch (enum_param) {
    case TARGET_INFO_TYPE_PAGE:
      return "page";
    case TARGET_INFO_TYPE_BACKGROUND_PAGE:
      return "background_page";
    case TARGET_INFO_TYPE_WORKER:
      return "worker";
    case TARGET_INFO_TYPE_OTHER:
      return "other";
    case TARGET_INFO_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

TargetInfoType ParseTargetInfoType(base::StringPiece enum_string) {
  if (enum_string == "page")
    return TARGET_INFO_TYPE_PAGE;
  if (enum_string == "background_page")
    return TARGET_INFO_TYPE_BACKGROUND_PAGE;
  if (enum_string == "worker")
    return TARGET_INFO_TYPE_WORKER;
  if (enum_string == "other")
    return TARGET_INFO_TYPE_OTHER;
  return TARGET_INFO_TYPE_NONE;
}


const char* ToString(DetachReason enum_param) {
  switch (enum_param) {
    case DETACH_REASON_TARGET_CLOSED:
      return "target_closed";
    case DETACH_REASON_CANCELED_BY_USER:
      return "canceled_by_user";
    case DETACH_REASON_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DetachReason ParseDetachReason(base::StringPiece enum_string) {
  if (enum_string == "target_closed")
    return DETACH_REASON_TARGET_CLOSED;
  if (enum_string == "canceled_by_user")
    return DETACH_REASON_CANCELED_BY_USER;
  return DETACH_REASON_NONE;
}


TargetInfo::TargetInfo()
: type(),
attached(false) {}

TargetInfo::~TargetInfo() = default;
TargetInfo::TargetInfo(TargetInfo&& rhs) = default;
TargetInfo& TargetInfo::operator=(TargetInfo&& rhs) = default;
TargetInfo TargetInfo::Clone() const {
  TargetInfo out;
  out.type = type;
  out.id = id;
  out.tab_id = tab_id;
  out.extension_id = extension_id;
  out.attached = attached;
  out.title = title;
  out.url = url;
  out.favicon_url = favicon_url;
  return out;
}

// static
bool TargetInfo::Populate(
    const base::Value::Dict& dict, TargetInfo& out) {
  const base::Value* type_value = dict.Find("type");
  if (!type_value) {
    return false;
  }
  {
    const std::string* target_info_type_as_string = (*type_value).GetIfString();
    if (!target_info_type_as_string) {
      return false;
    }
    out.type = ParseTargetInfoType(*target_info_type_as_string);
    if (out.type == TargetInfoType()) {
      return false;
    }
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

  const base::Value* tab_id_value = dict.Find("tabId");
  if (tab_id_value) {
    {
      auto temp = (*tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.tab_id = absl::nullopt;
        return false;
      }
      out.tab_id = *temp;
    }
  }

  const base::Value* extension_id_value = dict.Find("extensionId");
  if (extension_id_value) {
    {
      auto* temp = (*extension_id_value).GetIfString();
      if (!temp) {
        out.extension_id = absl::nullopt;
        return false;
      }
      out.extension_id = *temp;
    }
  }

  const base::Value* attached_value = dict.Find("attached");
  if (!attached_value) {
    return false;
  }
  {
    auto temp = (*attached_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.attached = *temp;
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

  const base::Value* favicon_url_value = dict.Find("faviconUrl");
  if (favicon_url_value) {
    {
      auto* temp = (*favicon_url_value).GetIfString();
      if (!temp) {
        out.favicon_url = absl::nullopt;
        return false;
      }
      out.favicon_url = *temp;
    }
  }

  return true;
}

// static
bool TargetInfo::Populate(
    const base::Value& value, TargetInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TargetInfo> TargetInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TargetInfo>();
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
absl::optional<TargetInfo> TargetInfo::FromValue(const base::Value::Dict& value) {
  TargetInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TargetInfo> TargetInfo::FromValue(const base::Value& value) {
  TargetInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TargetInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("type", debugger::ToString(this->type));

  to_value_result.Set("id", this->id);

  if (this->tab_id) {
    to_value_result.Set("tabId", *this->tab_id);

  }
  if (this->extension_id) {
    to_value_result.Set("extensionId", *this->extension_id);

  }
  to_value_result.Set("attached", this->attached);

  to_value_result.Set("title", this->title);

  to_value_result.Set("url", this->url);

  if (this->favicon_url) {
    to_value_result.Set("faviconUrl", *this->favicon_url);

  }

  return to_value_result;
}



//
// Functions
//

namespace Attach {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& target_value = args[0];
    {
      if (!target_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Debuggee::Populate(target_value.GetDict(), params.target)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& required_version_value = args[1];
    {
      auto* temp = required_version_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.required_version = *temp;
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
}  // namespace Attach

namespace Detach {

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
    const base::Value& target_value = args[0];
    {
      if (!target_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Debuggee::Populate(target_value.GetDict(), params.target)) {
        return absl::nullopt;
      }
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
}  // namespace Detach

namespace SendCommand {

Params::CommandParams::CommandParams()
 {}

Params::CommandParams::~CommandParams() = default;
Params::CommandParams::CommandParams(CommandParams&& rhs) = default;
Params::CommandParams& Params::CommandParams::operator=(CommandParams&& rhs) = default;
Params::CommandParams Params::CommandParams::Clone() const {
  CommandParams out;
  return out;
}

// static
bool Params::CommandParams::Populate(
    const base::Value::Dict& dict, CommandParams& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::CommandParams::Populate(
    const base::Value& value, CommandParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::CommandParams> Params::CommandParams::FromValue(const base::Value::Dict& value) {
  CommandParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::CommandParams> Params::CommandParams::FromValue(const base::Value& value) {
  CommandParams out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& target_value = args[0];
    {
      if (!target_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Debuggee::Populate(target_value.GetDict(), params.target)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& method_value = args[1];
    {
      auto* temp = method_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.method = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& command_params_value = args[2];
    {
      if (!command_params_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        CommandParams temp;
        if (!CommandParams::Populate(command_params_value.GetDict(), temp))
          return absl::nullopt;
        params.command_params = std::move(temp);
      }
    }
  }

  return params;
}


Results::Result::Result()
 {}

Results::Result::~Result() = default;
Results::Result::Result(Result&& rhs) = default;
Results::Result& Results::Result::operator=(Result&& rhs) = default;
base::Value::Dict Results::Result::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Result& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace SendCommand

namespace GetTargets {

base::Value::List Results::Create(const std::vector<TargetInfo>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetTargets

//
// Events
//

namespace OnEvent {

const char kEventName[] = "debugger.onEvent";

Params::Params()
 {}

Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;
base::Value::Dict Params::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Create(const Debuggee& source, const std::string& method, const Params& params) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append((source).ToValue());

  create_results.Append(method);

  create_results.Append((params).ToValue());

  return create_results;
}

}  // namespace OnEvent

namespace OnDetach {

const char kEventName[] = "debugger.onDetach";

base::Value::List Create(const Debuggee& source, const DetachReason& reason) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append((source).ToValue());

  create_results.Append(debugger::ToString(reason));

  return create_results;
}

}  // namespace OnDetach

}  // namespace debugger
}  // namespace api
}  // namespace extensions

