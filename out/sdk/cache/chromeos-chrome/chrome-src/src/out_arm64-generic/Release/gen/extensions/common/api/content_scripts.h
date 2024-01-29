// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/content_scripts.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_CONTENT_SCRIPTS_H__
#define EXTENSIONS_COMMON_API_CONTENT_SCRIPTS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "base/types/expected.h"
#include "extensions/common/api/extension_types.h"


namespace extensions {
namespace api {
namespace content_scripts {

//
// Types
//

// The stage in the document lifecycle when the javascript file is injected.
enum class RunAt {
  kNone = 0,
  kDocumentIdle,
  kDocumentStart,
  kDocumentEnd,
  kMaxValue = kDocumentEnd,
};


const char* ToString(RunAt as_enum);
RunAt ParseRunAt(base::StringPiece as_string);
std::u16string GetRunAtParseError(base::StringPiece as_string);

struct ContentScript {
  ContentScript();
  ~ContentScript();
  ContentScript(const ContentScript&) = delete;
  ContentScript& operator=(const ContentScript&) = delete;
  ContentScript(ContentScript&& rhs) noexcept;
  ContentScript& operator=(ContentScript&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kMatches[] = "matches";
  static constexpr char kExcludeMatches[] = "exclude_matches";
  static constexpr char kCss[] = "css";
  static constexpr char kJs[] = "js";
  static constexpr char kAllFrames[] = "all_frames";
  static constexpr char kMatchOriginAsFallback[] = "match_origin_as_fallback";
  static constexpr char kMatchAboutBlank[] = "match_about_blank";
  static constexpr char kIncludeGlobs[] = "include_globs";
  static constexpr char kExcludeGlobs[] = "exclude_globs";
  static constexpr char kRunAt[] = "run_at";
  static constexpr char kWorld[] = "world";

  // Populates a ContentScript object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContentScript& out, std::u16string& error);

  // Populates a ContentScript object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContentScript& out, std::u16string& error);

  // Creates a deep copy of ContentScript.
  ContentScript Clone() const;

  // Creates a ContentScript object from a base::Value::Dict, or unexpected on
  // failure.
  static base::expected<ContentScript, std::u16string> FromValue(const base::Value::Dict& value);

  // Creates a ContentScript object from a base::Value, or unexpected on
  // failure.
  static base::expected<ContentScript, std::u16string> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContentScript object.
  base::Value::Dict ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, ContentScript& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


  // Specifies which pages this content script will be injected into. See <a
  // href="develop/concepts/match-patterns">Match Patterns</a> for more details on
  // the syntax of these strings.
  std::vector<std::string> matches;

  // Excludes pages that this content script would otherwise be injected into. See
  // <a href="develop/concepts/match-patterns">Match Patterns</a> for more details
  // on the syntax of these strings.
  std::optional<std::vector<std::string>> exclude_matches;

  // The list of CSS files to be injected into matching pages. These are injected
  // in the order they appear in this array, before any DOM is constructed or
  // displayed for the page.
  std::optional<std::vector<std::string>> css;

  // The list of JavaScript files to be injected into matching pages. These are
  // injected in the order they appear in this array.
  std::optional<std::vector<std::string>> js;

  // If specified true, it will inject into all frames, even if the frame is not
  // the top-most frame in the tab. Each frame is checked independently for URL
  // requirements; it will not inject into child frames if the URL requirements
  // are not met. Defaults to false, meaning that only the top frame is matched.
  std::optional<bool> all_frames;

  // Whether the script should inject into any frames where the URL belongs to a
  // scheme that would never match a specified Match Pattern, including about:,
  // data:, blob:, and filesystem: schemes. In these cases, in order to determine
  // if the script should inject, the origin of the URL is checked. If the origin
  // is `null` (as is the case for data: URLs), then the "initiator" or "creator"
  // origin is used (i.e., the origin of the frame that created or navigated this
  // frame). Note that this may not be the parent frame, if the frame was
  // navigated by another frame in the document hierarchy.
  std::optional<bool> match_origin_as_fallback;

  // Whether the script should inject into an about:blank frame where the parent
  // or opener frame matches one of the patterns declared in matches. Defaults to
  // false.
  std::optional<bool> match_about_blank;

  // Applied after matches to include only those URLs that also match this glob.
  // Intended to emulate the <a
  // href="http://wiki.greasespot.net/Metadata_Block#.40include">@include </a>
  // Greasemonkey keyword.
  std::optional<std::vector<std::string>> include_globs;

  // Applied after matches to exclude URLs that match this glob. Intended to
  // emulate the <a
  // href="https://wiki.greasespot.net/Metadata_Block#.40exclude">@exclude </a>
  // Greasemonkey keyword.
  std::optional<std::vector<std::string>> exclude_globs;

  // Specifies when JavaScript files are injected into the web page. The preferred
  // and default value is <code>document_idle</code>.
  RunAt run_at;

  // The JavaScript "world" to run the script in. Defaults to
  // <code>ISOLATED</code>. Only available in Manifest V3 extensions.
  extensions::api::extension_types::ExecutionWorld world;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs) noexcept;
  ManifestKeys& operator=(ManifestKeys&& rhs) noexcept;

  // Manifest key constants.
  static constexpr char kContentScripts[] = "content_scripts";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  std::vector<ContentScript> content_scripts;

};

}  // namespace content_scripts
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_CONTENT_SCRIPTS_H__
