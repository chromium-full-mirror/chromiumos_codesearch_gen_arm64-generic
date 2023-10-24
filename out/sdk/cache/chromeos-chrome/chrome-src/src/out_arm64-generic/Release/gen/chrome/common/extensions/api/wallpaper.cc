// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/wallpaper.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/wallpaper.h"

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
namespace wallpaper {
//
// Types
//

const char* ToString(WallpaperLayout enum_param) {
  switch (enum_param) {
    case WALLPAPER_LAYOUT_STRETCH:
      return "STRETCH";
    case WALLPAPER_LAYOUT_CENTER:
      return "CENTER";
    case WALLPAPER_LAYOUT_CENTER_CROPPED:
      return "CENTER_CROPPED";
    case WALLPAPER_LAYOUT_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

WallpaperLayout ParseWallpaperLayout(base::StringPiece enum_string) {
  if (enum_string == "STRETCH")
    return WALLPAPER_LAYOUT_STRETCH;
  if (enum_string == "CENTER")
    return WALLPAPER_LAYOUT_CENTER;
  if (enum_string == "CENTER_CROPPED")
    return WALLPAPER_LAYOUT_CENTER_CROPPED;
  return WALLPAPER_LAYOUT_NONE;
}

std::u16string GetWallpaperLayoutParseError(base::StringPiece enum_string) {
  return u"expected \"STRETCH\" or \"CENTER\" or \"CENTER_CROPPED\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace SetWallpaper {

Params::Details::Details()
: layout() {}

Params::Details::~Details() = default;
Params::Details::Details(Details&& rhs) = default;
Params::Details& Params::Details::operator=(Details&& rhs) = default;
Params::Details Params::Details::Clone() const {
  Details out;
  out.data = data;
  out.url = url;
  out.layout = layout;
  out.filename = filename;
  out.thumbnail = thumbnail;
  return out;
}

// static
bool Params::Details::Populate(
    const base::Value::Dict& dict, Details& out) {
  const base::Value* data_value = dict.Find("data");
  if (data_value) {
    {
      if (!(*data_value).is_blob()) {
        return false;
      }
      else {
        out.data = (*data_value).GetBlob();
      }
    }
  }

  const base::Value* url_value = dict.Find("url");
  if (url_value) {
    {
      auto* temp = (*url_value).GetIfString();
      if (!temp) {
        out.url = absl::nullopt;
        return false;
      }
      out.url = *temp;
    }
  }

  const base::Value* layout_value = dict.Find("layout");
  if (!layout_value) {
    return false;
  }
  {
    const std::string* wallpaper_layout_as_string = (*layout_value).GetIfString();
    if (!wallpaper_layout_as_string) {
      return false;
    }
    out.layout = ParseWallpaperLayout(*wallpaper_layout_as_string);
    if (out.layout == WallpaperLayout()) {
      return false;
    }
  }

  const base::Value* filename_value = dict.Find("filename");
  if (!filename_value) {
    return false;
  }
  {
    auto* temp = (*filename_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.filename = *temp;
  }

  const base::Value* thumbnail_value = dict.Find("thumbnail");
  if (thumbnail_value) {
    {
      auto temp = (*thumbnail_value).GetIfBool();
      if (!temp.has_value()) {
        out.thumbnail = absl::nullopt;
        return false;
      }
      out.thumbnail = *temp;
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


base::Value::List Results::Create(const std::vector<uint8_t>& thumbnail) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(base::Value(thumbnail));

  return create_results;
}
}  // namespace SetWallpaper

}  // namespace wallpaper
}  // namespace api
}  // namespace extensions

