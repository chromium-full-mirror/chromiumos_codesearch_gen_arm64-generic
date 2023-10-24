// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/manifest_types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_MANIFEST_TYPES_H__
#define CHROME_COMMON_EXTENSIONS_API_MANIFEST_TYPES_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "base/types/expected.h"


namespace extensions {
namespace api {
namespace manifest_types {

//
// Types
//

// Chrome settings which can be overriden by an extension.
struct ChromeSettingsOverrides {
  ChromeSettingsOverrides();
  ~ChromeSettingsOverrides();
  ChromeSettingsOverrides(const ChromeSettingsOverrides&) = delete;
  ChromeSettingsOverrides& operator=(const ChromeSettingsOverrides&) = delete;
  ChromeSettingsOverrides(ChromeSettingsOverrides&& rhs);
  ChromeSettingsOverrides& operator=(ChromeSettingsOverrides&& rhs);

  // Populates a ChromeSettingsOverrides object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ChromeSettingsOverrides& out, std::u16string& error);

  // Populates a ChromeSettingsOverrides object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ChromeSettingsOverrides& out, std::u16string& error);

  // Creates a deep copy of ChromeSettingsOverrides.
  ChromeSettingsOverrides Clone() const;

  // Creates a ChromeSettingsOverrides object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ChromeSettingsOverrides> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a ChromeSettingsOverrides object from a base::Value::Dict, or
  // unexpected on failure.
  static base::expected<ChromeSettingsOverrides, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a ChromeSettingsOverrides object from a base::Value, or unexpected
  // on failure.
  static base::expected<ChromeSettingsOverrides, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisChromeSettingsOverrides object.
  base::Value::Dict ToValue() const;

  // A search engine
  struct SearchProvider {
    SearchProvider();
    ~SearchProvider();
    SearchProvider(const SearchProvider&) = delete;
    SearchProvider& operator=(const SearchProvider&) = delete;
    SearchProvider(SearchProvider&& rhs);
    SearchProvider& operator=(SearchProvider&& rhs);

    // Populates a SearchProvider object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, SearchProvider& out, std::u16string& error);

    // Populates a SearchProvider object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, SearchProvider& out, std::u16string& error);

    // Creates a deep copy of SearchProvider.
    SearchProvider Clone() const;

    // Creates a SearchProvider object from a base::Value::Dict, or unexpected on
    // failure.
    static base::expected<SearchProvider, std::u16string> FromValue(const base::Value::Dict& value);

    // Creates a SearchProvider object from a base::Value, or unexpected on
    // failure.
    static base::expected<SearchProvider, std::u16string> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisSearchProvider object.
    base::Value::Dict ToValue() const;

    // Name of the search engine displayed to user. This may only be omitted if
    // <em>prepopulated_id</em> is set.
    absl::optional<std::string> name;

    // Omnibox keyword for the search engine. This may only be omitted if
    // <em>prepopulated_id</em> is set.
    absl::optional<std::string> keyword;

    // An icon URL for the search engine. This may only be omitted if
    // <em>prepopulated_id</em> is set.
    absl::optional<std::string> favicon_url;

    // An search URL used by the search engine.
    std::string search_url;

    // Encoding of the search term. This may only be omitted if
    // <em>prepopulated_id</em> is set.
    absl::optional<std::string> encoding;

    // If omitted, this engine does not support suggestions.
    absl::optional<std::string> suggest_url;

    // If omitted, this engine does not support image search.
    absl::optional<std::string> image_url;

    // The string of post parameters to search_url
    absl::optional<std::string> search_url_post_params;

    // The string of post parameters to suggest_url
    absl::optional<std::string> suggest_url_post_params;

    // The string of post parameters to image_url
    absl::optional<std::string> image_url_post_params;

    // A list of URL patterns that can be used, in addition to |search_url|.
    absl::optional<std::vector<std::string>> alternate_urls;

    // An ID of the built-in search engine in Chrome.
    absl::optional<int> prepopulated_id;

    // Specifies if the search provider should be default.
    bool is_default;

  };


  // New value for the homepage.
  absl::optional<std::string> homepage;

  // A search engine
  absl::optional<SearchProvider> search_provider;

  // An array of length one containing a URL to be used as the startup page.
  absl::optional<std::vector<std::string>> startup_pages;

};

// For <code>"file"</code> the source is a file passed via
// <code>onLaunched</code> event. For <code>"device"</code> contents are fetched
// from an external device (eg. plugged via USB), without using
// <code>file_handlers</code>. Finally, for <code>"network"</code> source,
// contents should be fetched via network.
enum  FileSystemProviderSource {
  FILE_SYSTEM_PROVIDER_SOURCE_NONE = 0,
  FILE_SYSTEM_PROVIDER_SOURCE_FILE,
  FILE_SYSTEM_PROVIDER_SOURCE_DEVICE,
  FILE_SYSTEM_PROVIDER_SOURCE_NETWORK,
  FILE_SYSTEM_PROVIDER_SOURCE_LAST = FILE_SYSTEM_PROVIDER_SOURCE_NETWORK,
};


const char* ToString(FileSystemProviderSource as_enum);
FileSystemProviderSource ParseFileSystemProviderSource(base::StringPiece as_string);
std::u16string GetFileSystemProviderSourceParseError(base::StringPiece as_string);

// Represents capabilities of a providing extension.
struct FileSystemProviderCapabilities {
  FileSystemProviderCapabilities();
  ~FileSystemProviderCapabilities();
  FileSystemProviderCapabilities(const FileSystemProviderCapabilities&) = delete;
  FileSystemProviderCapabilities& operator=(const FileSystemProviderCapabilities&) = delete;
  FileSystemProviderCapabilities(FileSystemProviderCapabilities&& rhs);
  FileSystemProviderCapabilities& operator=(FileSystemProviderCapabilities&& rhs);

  // Populates a FileSystemProviderCapabilities object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, FileSystemProviderCapabilities& out, std::u16string& error);

  // Populates a FileSystemProviderCapabilities object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, FileSystemProviderCapabilities& out, std::u16string& error);

  // Creates a deep copy of FileSystemProviderCapabilities.
  FileSystemProviderCapabilities Clone() const;

  // Creates a FileSystemProviderCapabilities object from a base::Value, or NULL
  // on failure.
  static std::unique_ptr<FileSystemProviderCapabilities> FromValueDeprecated(const base::Value& value, std::u16string* error);

  // Creates a FileSystemProviderCapabilities object from a base::Value::Dict,
  // or unexpected on failure.
  static base::expected<FileSystemProviderCapabilities, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a FileSystemProviderCapabilities object from a base::Value, or
  // unexpected on failure.
  static base::expected<FileSystemProviderCapabilities, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFileSystemProviderCapabilities object.
  base::Value::Dict ToValue() const;

  // Whether configuring via <code>onConfigureRequested</code> is supported. By
  // default: <code>false</code>.
  absl::optional<bool> configurable;

  // Whether multiple (more than one) mounted file systems are supported. By
  // default: <code>false</code>.
  absl::optional<bool> multiple_mounts;

  // Whether setting watchers and notifying about changes is supported. By
  // default: <code>false</code>.
  absl::optional<bool> watchable;

  // Source of data for mounted file systems.
  FileSystemProviderSource source;

};


}  // namespace manifest_types
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_MANIFEST_TYPES_H__
