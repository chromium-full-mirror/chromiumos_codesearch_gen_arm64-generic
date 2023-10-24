// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/quick_unlock_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/quick_unlock_private.h"

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
namespace quick_unlock_private {
//
// Types
//

TokenInfo::TokenInfo()
: lifetime_seconds(0) {}

TokenInfo::~TokenInfo() = default;
TokenInfo::TokenInfo(TokenInfo&& rhs) = default;
TokenInfo& TokenInfo::operator=(TokenInfo&& rhs) = default;
TokenInfo TokenInfo::Clone() const {
  TokenInfo out;
  out.token = token;
  out.lifetime_seconds = lifetime_seconds;
  return out;
}

// static
bool TokenInfo::Populate(
    const base::Value::Dict& dict, TokenInfo& out) {
  const base::Value* token_value = dict.Find("token");
  if (!token_value) {
    return false;
  }
  {
    auto* temp = (*token_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.token = *temp;
  }

  const base::Value* lifetime_seconds_value = dict.Find("lifetimeSeconds");
  if (!lifetime_seconds_value) {
    return false;
  }
  {
    auto temp = (*lifetime_seconds_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.lifetime_seconds = *temp;
  }

  return true;
}

// static
bool TokenInfo::Populate(
    const base::Value& value, TokenInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<TokenInfo> TokenInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<TokenInfo>();
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
absl::optional<TokenInfo> TokenInfo::FromValue(const base::Value::Dict& value) {
  TokenInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<TokenInfo> TokenInfo::FromValue(const base::Value& value) {
  TokenInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict TokenInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("token", this->token);

  to_value_result.Set("lifetimeSeconds", this->lifetime_seconds);


  return to_value_result;
}


const char* ToString(QuickUnlockMode enum_param) {
  switch (enum_param) {
    case QUICK_UNLOCK_MODE_PIN:
      return "PIN";
    case QUICK_UNLOCK_MODE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

QuickUnlockMode ParseQuickUnlockMode(base::StringPiece enum_string) {
  if (enum_string == "PIN")
    return QUICK_UNLOCK_MODE_PIN;
  return QUICK_UNLOCK_MODE_NONE;
}

std::u16string GetQuickUnlockModeParseError(base::StringPiece enum_string) {
  return u"expected \"PIN\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CredentialProblem enum_param) {
  switch (enum_param) {
    case CREDENTIAL_PROBLEM_TOO_SHORT:
      return "TOO_SHORT";
    case CREDENTIAL_PROBLEM_TOO_LONG:
      return "TOO_LONG";
    case CREDENTIAL_PROBLEM_TOO_WEAK:
      return "TOO_WEAK";
    case CREDENTIAL_PROBLEM_CONTAINS_NONDIGIT:
      return "CONTAINS_NONDIGIT";
    case CREDENTIAL_PROBLEM_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

CredentialProblem ParseCredentialProblem(base::StringPiece enum_string) {
  if (enum_string == "TOO_SHORT")
    return CREDENTIAL_PROBLEM_TOO_SHORT;
  if (enum_string == "TOO_LONG")
    return CREDENTIAL_PROBLEM_TOO_LONG;
  if (enum_string == "TOO_WEAK")
    return CREDENTIAL_PROBLEM_TOO_WEAK;
  if (enum_string == "CONTAINS_NONDIGIT")
    return CREDENTIAL_PROBLEM_CONTAINS_NONDIGIT;
  return CREDENTIAL_PROBLEM_NONE;
}

std::u16string GetCredentialProblemParseError(base::StringPiece enum_string) {
  return u"expected \"TOO_SHORT\" or \"TOO_LONG\" or \"TOO_WEAK\" or \"CONTAINS_NONDIGIT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CredentialCheck::CredentialCheck()
 {}

CredentialCheck::~CredentialCheck() = default;
CredentialCheck::CredentialCheck(CredentialCheck&& rhs) = default;
CredentialCheck& CredentialCheck::operator=(CredentialCheck&& rhs) = default;
CredentialCheck CredentialCheck::Clone() const {
  CredentialCheck out;
  out.errors = errors;
  out.warnings = warnings;
  return out;
}

// static
bool CredentialCheck::Populate(
    const base::Value::Dict& dict, CredentialCheck& out) {
  const base::Value* errors_value = dict.Find("errors");
  if (!errors_value) {
    return false;
  }
  {
    if (!(*errors_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*errors_value)).GetList()) {
        CredentialProblem tmp;
        const std::string* credential_problem_as_string = (it).GetIfString();
        if (!credential_problem_as_string) {
          return false;
        }
        tmp = ParseCredentialProblem(*credential_problem_as_string);
        if (tmp == CredentialProblem()) {
          return false;
        }
        out.errors.push_back(tmp);
      }
    }
  }

  const base::Value* warnings_value = dict.Find("warnings");
  if (!warnings_value) {
    return false;
  }
  {
    if (!(*warnings_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*warnings_value)).GetList()) {
        CredentialProblem tmp;
        const std::string* credential_problem_as_string = (it).GetIfString();
        if (!credential_problem_as_string) {
          return false;
        }
        tmp = ParseCredentialProblem(*credential_problem_as_string);
        if (tmp == CredentialProblem()) {
          return false;
        }
        out.warnings.push_back(tmp);
      }
    }
  }

  return true;
}

// static
bool CredentialCheck::Populate(
    const base::Value& value, CredentialCheck& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CredentialCheck> CredentialCheck::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CredentialCheck>();
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
absl::optional<CredentialCheck> CredentialCheck::FromValue(const base::Value::Dict& value) {
  CredentialCheck out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CredentialCheck> CredentialCheck::FromValue(const base::Value& value) {
  CredentialCheck out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CredentialCheck::ToValue() const {
  base::Value::Dict to_value_result;

  {
    std::vector<std::string> errors_list;
    for (const auto& it : (this->errors)) {
      errors_list.emplace_back(quick_unlock_private::ToString(it));
    }
    to_value_result.Set("errors", json_schema_compiler::util::CreateValueFromArray(errors_list));
  }

  {
    std::vector<std::string> warnings_list;
    for (const auto& it : (this->warnings)) {
      warnings_list.emplace_back(quick_unlock_private::ToString(it));
    }
    to_value_result.Set("warnings", json_schema_compiler::util::CreateValueFromArray(warnings_list));
  }


  return to_value_result;
}


CredentialRequirements::CredentialRequirements()
: min_length(0),
max_length(0) {}

CredentialRequirements::~CredentialRequirements() = default;
CredentialRequirements::CredentialRequirements(CredentialRequirements&& rhs) = default;
CredentialRequirements& CredentialRequirements::operator=(CredentialRequirements&& rhs) = default;
CredentialRequirements CredentialRequirements::Clone() const {
  CredentialRequirements out;
  out.min_length = min_length;
  out.max_length = max_length;
  return out;
}

// static
bool CredentialRequirements::Populate(
    const base::Value::Dict& dict, CredentialRequirements& out) {
  const base::Value* min_length_value = dict.Find("minLength");
  if (!min_length_value) {
    return false;
  }
  {
    auto temp = (*min_length_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.min_length = *temp;
  }

  const base::Value* max_length_value = dict.Find("maxLength");
  if (!max_length_value) {
    return false;
  }
  {
    auto temp = (*max_length_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.max_length = *temp;
  }

  return true;
}

// static
bool CredentialRequirements::Populate(
    const base::Value& value, CredentialRequirements& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CredentialRequirements> CredentialRequirements::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CredentialRequirements>();
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
absl::optional<CredentialRequirements> CredentialRequirements::FromValue(const base::Value::Dict& value) {
  CredentialRequirements out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CredentialRequirements> CredentialRequirements::FromValue(const base::Value& value) {
  CredentialRequirements out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CredentialRequirements::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("minLength", this->min_length);

  to_value_result.Set("maxLength", this->max_length);


  return to_value_result;
}



//
// Functions
//

namespace GetAuthToken {

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
    const base::Value& account_password_value = args[0];
    {
      auto* temp = account_password_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.account_password = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const TokenInfo& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetAuthToken

namespace SetLockScreenEnabled {

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
    const base::Value& token_value = args[0];
    {
      auto* temp = token_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.token = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& enabled_value = args[1];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
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
}  // namespace SetLockScreenEnabled

namespace SetPinAutosubmitEnabled {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& token_value = args[0];
    {
      auto* temp = token_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.token = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& pin_value = args[1];
    {
      auto* temp = pin_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.pin = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& enabled_value = args[2];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool value) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(value);

  return create_results;
}
}  // namespace SetPinAutosubmitEnabled

namespace CanAuthenticatePin {

base::Value::List Results::Create(bool value) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(value);

  return create_results;
}
}  // namespace CanAuthenticatePin

namespace GetAvailableModes {

base::Value::List Results::Create(const std::vector<QuickUnlockMode>& modes) {
  base::Value::List create_results;
  create_results.reserve(1);
  {
    std::vector<std::string> modes_list;
    for (const auto& it : (modes)) {
      modes_list.emplace_back(quick_unlock_private::ToString(it));
    }
    create_results.Append(json_schema_compiler::util::CreateValueFromArray(modes_list));
  }

  return create_results;
}
}  // namespace GetAvailableModes

namespace GetActiveModes {

base::Value::List Results::Create(const std::vector<QuickUnlockMode>& modes) {
  base::Value::List create_results;
  create_results.reserve(1);
  {
    std::vector<std::string> modes_list;
    for (const auto& it : (modes)) {
      modes_list.emplace_back(quick_unlock_private::ToString(it));
    }
    create_results.Append(json_schema_compiler::util::CreateValueFromArray(modes_list));
  }

  return create_results;
}
}  // namespace GetActiveModes

namespace CheckCredential {

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
    const base::Value& mode_value = args[0];
    {
      const std::string* quick_unlock_mode_as_string = mode_value.GetIfString();
      if (!quick_unlock_mode_as_string) {
        return absl::nullopt;
      }
      params.mode = ParseQuickUnlockMode(*quick_unlock_mode_as_string);
      if (params.mode == QuickUnlockMode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& credential_value = args[1];
    {
      auto* temp = credential_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.credential = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CredentialCheck& check) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((check).ToValue());

  return create_results;
}
}  // namespace CheckCredential

namespace GetCredentialRequirements {

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
    const base::Value& mode_value = args[0];
    {
      const std::string* quick_unlock_mode_as_string = mode_value.GetIfString();
      if (!quick_unlock_mode_as_string) {
        return absl::nullopt;
      }
      params.mode = ParseQuickUnlockMode(*quick_unlock_mode_as_string);
      if (params.mode == QuickUnlockMode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const CredentialRequirements& requirements) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((requirements).ToValue());

  return create_results;
}
}  // namespace GetCredentialRequirements

namespace SetModes {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& token_value = args[0];
    {
      auto* temp = token_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.token = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& modes_value = args[1];
    {
      if (!modes_value.is_list()) {
        return absl::nullopt;
      }
      else {
        for (const auto& it : (modes_value).GetList()) {
          QuickUnlockMode tmp;
          const std::string* quick_unlock_mode_as_string = (it).GetIfString();
          if (!quick_unlock_mode_as_string) {
            return absl::nullopt;
          }
          tmp = ParseQuickUnlockMode(*quick_unlock_mode_as_string);
          if (tmp == QuickUnlockMode()) {
            return absl::nullopt;
          }
          params.modes.push_back(tmp);
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& credentials_value = args[2];
    {
      if (!credentials_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(credentials_value.GetList(), params.credentials)) {
          return absl::nullopt;
        }
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
}  // namespace SetModes

//
// Events
//

namespace OnActiveModesChanged {

const char kEventName[] = "quickUnlockPrivate.onActiveModesChanged";

base::Value::List Create(const std::vector<QuickUnlockMode>& active_modes) {
  base::Value::List create_results;
  create_results.reserve(1);
  {
    std::vector<std::string> activeModes_list;
    for (const auto& it : (active_modes)) {
      activeModes_list.emplace_back(quick_unlock_private::ToString(it));
    }
    create_results.Append(json_schema_compiler::util::CreateValueFromArray(activeModes_list));
  }

  return create_results;
}

}  // namespace OnActiveModesChanged

}  // namespace quick_unlock_private
}  // namespace api
}  // namespace extensions

