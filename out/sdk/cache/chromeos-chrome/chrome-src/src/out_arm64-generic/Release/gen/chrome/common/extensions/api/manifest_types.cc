// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/manifest_types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/manifest_types.h"

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
#include "base/types/expected.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace manifest_types {
//
// Types
//

ChromeSettingsOverrides::SearchProvider::SearchProvider()
: is_default(false) {}

ChromeSettingsOverrides::SearchProvider::~SearchProvider() = default;
ChromeSettingsOverrides::SearchProvider::SearchProvider(SearchProvider&& rhs) noexcept = default;
ChromeSettingsOverrides::SearchProvider& ChromeSettingsOverrides::SearchProvider::operator=(SearchProvider&& rhs) noexcept = default;
ChromeSettingsOverrides::SearchProvider ChromeSettingsOverrides::SearchProvider::Clone() const {
  SearchProvider out;
  out.name = name;
  out.keyword = keyword;
  out.favicon_url = favicon_url;
  out.search_url = search_url;
  out.encoding = encoding;
  out.suggest_url = suggest_url;
  out.image_url = image_url;
  out.search_url_post_params = search_url_post_params;
  out.suggest_url_post_params = suggest_url_post_params;
  out.image_url_post_params = image_url_post_params;
  out.alternate_urls = alternate_urls;
  out.prepopulated_id = prepopulated_id;
  out.is_default = is_default;
  return out;
}

// static
bool ChromeSettingsOverrides::SearchProvider::Populate(
    const base::Value::Dict& dict, SearchProvider& out, std::u16string& error) {
  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'name': expected name, got " + UTF8ToUTF16(base::Value::GetTypeName((*name_value).type()));
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* keyword_value = dict.Find("keyword");
  if (keyword_value) {
    {
      auto* temp = (*keyword_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'keyword': expected keyword, got " + UTF8ToUTF16(base::Value::GetTypeName((*keyword_value).type()));
        out.keyword = std::nullopt;
        return false;
      }
      out.keyword = *temp;
    }
  }

  const base::Value* favicon_url_value = dict.Find("favicon_url");
  if (favicon_url_value) {
    {
      auto* temp = (*favicon_url_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'favicon_url': expected favicon_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*favicon_url_value).type()));
        out.favicon_url = std::nullopt;
        return false;
      }
      out.favicon_url = *temp;
    }
  }

  const base::Value* search_url_value = dict.Find("search_url");
  if (!search_url_value) {
    DCHECK(error.empty());
    error = u"'search_url' is required";
    return false;
  }
  {
    auto* temp = (*search_url_value).GetIfString();
    if (!temp) {
      DCHECK(error.empty());
      error = u"'search_url': expected search_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*search_url_value).type()));
      return false;
    }
    out.search_url = *temp;
  }

  const base::Value* encoding_value = dict.Find("encoding");
  if (encoding_value) {
    {
      auto* temp = (*encoding_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'encoding': expected encoding, got " + UTF8ToUTF16(base::Value::GetTypeName((*encoding_value).type()));
        out.encoding = std::nullopt;
        return false;
      }
      out.encoding = *temp;
    }
  }

  const base::Value* suggest_url_value = dict.Find("suggest_url");
  if (suggest_url_value) {
    {
      auto* temp = (*suggest_url_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'suggest_url': expected suggest_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*suggest_url_value).type()));
        out.suggest_url = std::nullopt;
        return false;
      }
      out.suggest_url = *temp;
    }
  }

  const base::Value* image_url_value = dict.Find("image_url");
  if (image_url_value) {
    {
      auto* temp = (*image_url_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'image_url': expected image_url, got " + UTF8ToUTF16(base::Value::GetTypeName((*image_url_value).type()));
        out.image_url = std::nullopt;
        return false;
      }
      out.image_url = *temp;
    }
  }

  const base::Value* search_url_post_params_value = dict.Find("search_url_post_params");
  if (search_url_post_params_value) {
    {
      auto* temp = (*search_url_post_params_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'search_url_post_params': expected search_url_post_params, got " + UTF8ToUTF16(base::Value::GetTypeName((*search_url_post_params_value).type()));
        out.search_url_post_params = std::nullopt;
        return false;
      }
      out.search_url_post_params = *temp;
    }
  }

  const base::Value* suggest_url_post_params_value = dict.Find("suggest_url_post_params");
  if (suggest_url_post_params_value) {
    {
      auto* temp = (*suggest_url_post_params_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'suggest_url_post_params': expected suggest_url_post_params, got " + UTF8ToUTF16(base::Value::GetTypeName((*suggest_url_post_params_value).type()));
        out.suggest_url_post_params = std::nullopt;
        return false;
      }
      out.suggest_url_post_params = *temp;
    }
  }

  const base::Value* image_url_post_params_value = dict.Find("image_url_post_params");
  if (image_url_post_params_value) {
    {
      auto* temp = (*image_url_post_params_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'image_url_post_params': expected image_url_post_params, got " + UTF8ToUTF16(base::Value::GetTypeName((*image_url_post_params_value).type()));
        out.image_url_post_params = std::nullopt;
        return false;
      }
      out.image_url_post_params = *temp;
    }
  }

  const base::Value* alternate_urls_value = dict.Find("alternate_urls");
  if (alternate_urls_value) {
    {
      if (!(*alternate_urls_value).is_list()) {
        DCHECK(error.empty());
        error = u"'alternate_urls': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*alternate_urls_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*alternate_urls_value).GetList(), out.alternate_urls, array_parse_error)) {
          array_parse_error = u"Error at key 'alternate_urls': " + array_parse_error;
          DCHECK(error.empty());
          error = array_parse_error;
          return false;
        }
      }
    }
  }

  const base::Value* prepopulated_id_value = dict.Find("prepopulated_id");
  if (prepopulated_id_value) {
    {
      auto temp = (*prepopulated_id_value).GetIfInt();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'prepopulated_id': expected prepopulated_id, got " + UTF8ToUTF16(base::Value::GetTypeName((*prepopulated_id_value).type()));
        out.prepopulated_id = std::nullopt;
        return false;
      }
      out.prepopulated_id = *temp;
    }
  }

  const base::Value* is_default_value = dict.Find("is_default");
  if (!is_default_value) {
    DCHECK(error.empty());
    error = u"'is_default' is required";
    return false;
  }
  {
    auto temp = (*is_default_value).GetIfBool();
    if (!temp.has_value()) {
      DCHECK(error.empty());
      error = u"'is_default': expected is_default, got " + UTF8ToUTF16(base::Value::GetTypeName((*is_default_value).type()));
      return false;
    }
    out.is_default = *temp;
  }

  return true;
}

// static
bool ChromeSettingsOverrides::SearchProvider::Populate(
    const base::Value& value, SearchProvider& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ChromeSettingsOverrides::SearchProvider, std::u16string> ChromeSettingsOverrides::SearchProvider::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  SearchProvider out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ChromeSettingsOverrides::SearchProvider, std::u16string> ChromeSettingsOverrides::SearchProvider::FromValue(const base::Value& value) {
  std::u16string error;
  SearchProvider out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict ChromeSettingsOverrides::SearchProvider::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  if (this->keyword) {
    to_value_result.Set("keyword", *this->keyword);

  }
  if (this->favicon_url) {
    to_value_result.Set("favicon_url", *this->favicon_url);

  }
  to_value_result.Set("search_url", this->search_url);

  if (this->encoding) {
    to_value_result.Set("encoding", *this->encoding);

  }
  if (this->suggest_url) {
    to_value_result.Set("suggest_url", *this->suggest_url);

  }
  if (this->image_url) {
    to_value_result.Set("image_url", *this->image_url);

  }
  if (this->search_url_post_params) {
    to_value_result.Set("search_url_post_params", *this->search_url_post_params);

  }
  if (this->suggest_url_post_params) {
    to_value_result.Set("suggest_url_post_params", *this->suggest_url_post_params);

  }
  if (this->image_url_post_params) {
    to_value_result.Set("image_url_post_params", *this->image_url_post_params);

  }
  if (this->alternate_urls) {
    to_value_result.Set("alternate_urls", json_schema_compiler::util::CreateValueFromArray(*this->alternate_urls));

  }
  if (this->prepopulated_id) {
    to_value_result.Set("prepopulated_id", *this->prepopulated_id);

  }
  to_value_result.Set("is_default", this->is_default);


  return to_value_result;
}



ChromeSettingsOverrides::ChromeSettingsOverrides()
 {}

ChromeSettingsOverrides::~ChromeSettingsOverrides() = default;
ChromeSettingsOverrides::ChromeSettingsOverrides(ChromeSettingsOverrides&& rhs) noexcept = default;
ChromeSettingsOverrides& ChromeSettingsOverrides::operator=(ChromeSettingsOverrides&& rhs) noexcept = default;
ChromeSettingsOverrides ChromeSettingsOverrides::Clone() const {
  ChromeSettingsOverrides out;
  out.homepage = homepage;
  if (search_provider) {
    out.search_provider = search_provider->Clone();
  }
  out.startup_pages = startup_pages;
  return out;
}

// static
bool ChromeSettingsOverrides::Populate(
    const base::Value::Dict& dict, ChromeSettingsOverrides& out, std::u16string& error) {
  const base::Value* homepage_value = dict.Find("homepage");
  if (homepage_value) {
    {
      auto* temp = (*homepage_value).GetIfString();
      if (!temp) {
        DCHECK(error.empty());
        error = u"'homepage': expected homepage, got " + UTF8ToUTF16(base::Value::GetTypeName((*homepage_value).type()));
        out.homepage = std::nullopt;
        return false;
      }
      out.homepage = *temp;
    }
  }

  const base::Value* search_provider_value = dict.Find("search_provider");
  if (search_provider_value) {
    {
      if (!(*search_provider_value).is_dict()) {
        DCHECK(error.empty());
        error = u"'search_provider': expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName((*search_provider_value).type()));
        return false;
      }
      else {
        SearchProvider temp;
        if (!SearchProvider::Populate((*search_provider_value).GetDict(), temp, error))
          return false;
        out.search_provider = std::move(temp);
      }
    }
  }

  const base::Value* startup_pages_value = dict.Find("startup_pages");
  if (startup_pages_value) {
    {
      if (!(*startup_pages_value).is_list()) {
        DCHECK(error.empty());
        error = u"'startup_pages': expected list, got " + UTF8ToUTF16(base::Value::GetTypeName((*startup_pages_value).type()));
        return false;
      }
      else {
        std::u16string array_parse_error;
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList((*startup_pages_value).GetList(), out.startup_pages, array_parse_error)) {
          array_parse_error = u"Error at key 'startup_pages': " + array_parse_error;
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
bool ChromeSettingsOverrides::Populate(
    const base::Value& value, ChromeSettingsOverrides& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<ChromeSettingsOverrides, std::u16string> ChromeSettingsOverrides::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  ChromeSettingsOverrides out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<ChromeSettingsOverrides, std::u16string> ChromeSettingsOverrides::FromValue(const base::Value& value) {
  std::u16string error;
  ChromeSettingsOverrides out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict ChromeSettingsOverrides::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->homepage) {
    to_value_result.Set("homepage", *this->homepage);

  }
  if (this->search_provider) {
    to_value_result.Set("search_provider", (this->search_provider)->ToValue());

  }
  if (this->startup_pages) {
    to_value_result.Set("startup_pages", json_schema_compiler::util::CreateValueFromArray(*this->startup_pages));

  }

  return to_value_result;
}


const char* ToString(FileSystemProviderSource enum_param) {
  switch (enum_param) {
    case FileSystemProviderSource::kFile:
      return "file";
    case FileSystemProviderSource::kDevice:
      return "device";
    case FileSystemProviderSource::kNetwork:
      return "network";
    case FileSystemProviderSource::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FileSystemProviderSource ParseFileSystemProviderSource(base::StringPiece enum_string) {
  if (enum_string == "file")
    return FileSystemProviderSource::kFile;
  if (enum_string == "device")
    return FileSystemProviderSource::kDevice;
  if (enum_string == "network")
    return FileSystemProviderSource::kNetwork;
  return FileSystemProviderSource::kNone;
}

std::u16string GetFileSystemProviderSourceParseError(base::StringPiece enum_string) {
  return u"expected \"file\" or \"device\" or \"network\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


FileSystemProviderCapabilities::FileSystemProviderCapabilities()
: source() {}

FileSystemProviderCapabilities::~FileSystemProviderCapabilities() = default;
FileSystemProviderCapabilities::FileSystemProviderCapabilities(FileSystemProviderCapabilities&& rhs) noexcept = default;
FileSystemProviderCapabilities& FileSystemProviderCapabilities::operator=(FileSystemProviderCapabilities&& rhs) noexcept = default;
FileSystemProviderCapabilities FileSystemProviderCapabilities::Clone() const {
  FileSystemProviderCapabilities out;
  out.configurable = configurable;
  out.multiple_mounts = multiple_mounts;
  out.watchable = watchable;
  out.source = source;
  return out;
}

// static
bool FileSystemProviderCapabilities::Populate(
    const base::Value::Dict& dict, FileSystemProviderCapabilities& out, std::u16string& error) {
  const base::Value* configurable_value = dict.Find("configurable");
  if (configurable_value) {
    {
      auto temp = (*configurable_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'configurable': expected configurable, got " + UTF8ToUTF16(base::Value::GetTypeName((*configurable_value).type()));
        out.configurable = std::nullopt;
        return false;
      }
      out.configurable = *temp;
    }
  }

  const base::Value* multiple_mounts_value = dict.Find("multiple_mounts");
  if (multiple_mounts_value) {
    {
      auto temp = (*multiple_mounts_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'multiple_mounts': expected multiple_mounts, got " + UTF8ToUTF16(base::Value::GetTypeName((*multiple_mounts_value).type()));
        out.multiple_mounts = std::nullopt;
        return false;
      }
      out.multiple_mounts = *temp;
    }
  }

  const base::Value* watchable_value = dict.Find("watchable");
  if (watchable_value) {
    {
      auto temp = (*watchable_value).GetIfBool();
      if (!temp.has_value()) {
        DCHECK(error.empty());
        error = u"'watchable': expected watchable, got " + UTF8ToUTF16(base::Value::GetTypeName((*watchable_value).type()));
        out.watchable = std::nullopt;
        return false;
      }
      out.watchable = *temp;
    }
  }

  const base::Value* source_value = dict.Find("source");
  if (!source_value) {
    DCHECK(error.empty());
    error = u"'source' is required";
    return false;
  }
  {
    const std::string* file_system_provider_source_as_string = (*source_value).GetIfString();
    if (!file_system_provider_source_as_string) {
      DCHECK(error.empty());
      error = u"'FileSystemProviderSource': expected string, got " + UTF8ToUTF16(base::Value::GetTypeName((*source_value).type()));
      return false;
    }
    out.source = ParseFileSystemProviderSource(*file_system_provider_source_as_string);
    if (out.source == FileSystemProviderSource()) {
      DCHECK(error.empty());
      error = u"'FileSystemProviderSource': " + GetFileSystemProviderSourceParseError(*file_system_provider_source_as_string);
      return false;
    }
  }

  return true;
}

// static
bool FileSystemProviderCapabilities::Populate(
    const base::Value& value, FileSystemProviderCapabilities& out, std::u16string& error) {
  if (!value.is_dict()) {
    DCHECK(error.empty());
    error = u"expected dictionary, got " + UTF8ToUTF16(base::Value::GetTypeName(value.type()));
    return false;
  }
  return Populate(value.GetDict(), out, error);
}

// static
base::expected<FileSystemProviderCapabilities, std::u16string> FileSystemProviderCapabilities::FromValue(const base::Value::Dict& value) {
  std::u16string error;
  FileSystemProviderCapabilities out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

// static
base::expected<FileSystemProviderCapabilities, std::u16string> FileSystemProviderCapabilities::FromValue(const base::Value& value) {
  std::u16string error;
  FileSystemProviderCapabilities out;
  bool result = Populate(value, out, error);
  if (!result) {
    DCHECK(!error.empty());
    return base::unexpected(std::move(error));
  }
  return out;
}

base::Value::Dict FileSystemProviderCapabilities::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->configurable) {
    to_value_result.Set("configurable", *this->configurable);

  }
  if (this->multiple_mounts) {
    to_value_result.Set("multiple_mounts", *this->multiple_mounts);

  }
  if (this->watchable) {
    to_value_result.Set("watchable", *this->watchable);

  }
  to_value_result.Set("source", manifest_types::ToString(this->source));


  return to_value_result;
}



}  // namespace manifest_types
}  // namespace api
}  // namespace extensions

