// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/dashboard_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/dashboard_private.h"

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
namespace dashboard_private {
//
// Types
//

const char* ToString(Result enum_param) {
  switch (enum_param) {
    case Result::kEmptyString:
      return "";
    case Result::kUnknownError:
      return "unknown_error";
    case Result::kUserCancelled:
      return "user_cancelled";
    case Result::kInvalidId:
      return "invalid_id";
    case Result::kManifestError:
      return "manifest_error";
    case Result::kIconError:
      return "icon_error";
    case Result::kInvalidIconUrl:
      return "invalid_icon_url";
    case Result::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Result ParseResult(base::StringPiece enum_string) {
  if (enum_string == "")
    return Result::kEmptyString;
  if (enum_string == "unknown_error")
    return Result::kUnknownError;
  if (enum_string == "user_cancelled")
    return Result::kUserCancelled;
  if (enum_string == "invalid_id")
    return Result::kInvalidId;
  if (enum_string == "manifest_error")
    return Result::kManifestError;
  if (enum_string == "icon_error")
    return Result::kIconError;
  if (enum_string == "invalid_icon_url")
    return Result::kInvalidIconUrl;
  return Result::kNone;
}

std::u16string GetResultParseError(base::StringPiece enum_string) {
  return u"expected \"\" or \"unknown_error\" or \"user_cancelled\" or \"invalid_id\" or \"manifest_error\" or \"icon_error\" or \"invalid_icon_url\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace ShowPermissionPromptForDelegatedInstall {

Params::Details::Details()
 {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.id = id;
  out.manifest = manifest;
  out.delegated_user = delegated_user;
  out.icon_url = icon_url;
  out.localized_name = localized_name;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
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

  const base::Value* manifest_value = dict.Find("manifest");
  if (!manifest_value) {
    return false;
  }
  {
    auto* temp = (*manifest_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.manifest = *temp;
  }

  const base::Value* delegated_user_value = dict.Find("delegatedUser");
  if (!delegated_user_value) {
    return false;
  }
  {
    auto* temp = (*delegated_user_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.delegated_user = *temp;
  }

  const base::Value* icon_url_value = dict.Find("iconUrl");
  if (icon_url_value) {
    {
      auto* temp = (*icon_url_value).GetIfString();
      if (!temp) {
        out.icon_url = absl::nullopt;
        return false;
      }
      out.icon_url = *temp;
    }
  }

  const base::Value* localized_name_value = dict.Find("localizedName");
  if (localized_name_value) {
    {
      auto* temp = (*localized_name_value).GetIfString();
      if (!temp) {
        out.localized_name = absl::nullopt;
        return false;
      }
      out.localized_name = *temp;
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
absl::optional<Params::Details> Params::Details::FromValue(const base::Value::Dict& value) {
  Details out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Details> Params::Details::FromValue(const base::Value& value) {
  Details out;
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
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& details_value = args[0];
    {
      if (!details_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Details::Populate(details_value.GetDict(), params.details)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const Result& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(dashboard_private::ToString(result));

  return create_results;
}
}  // namespace ShowPermissionPromptForDelegatedInstall

}  // namespace dashboard_private
}  // namespace api
}  // namespace extensions

