// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/scripts_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SCRIPTS_INTERNAL_H__
#define EXTENSIONS_COMMON_API_SCRIPTS_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/extension_types.h"


namespace extensions {
namespace api {
namespace scripts_internal {

//
// Types
//

// The source of the user script. This will also determine certain capabilities
// of the script (such as whether it can use globs, raw strings for code, etc).
enum class Source {
  kNone = 0,
  kDynamicContentScript,
  kDynamicUserScript,
  kMaxValue = kDynamicUserScript,
};


const char* ToString(Source as_enum);
Source ParseSource(base::StringPiece as_string);
std::u16string GetSourceParseError(base::StringPiece as_string);

struct ScriptSource {
  ScriptSource();
  ~ScriptSource();
  ScriptSource(const ScriptSource&) = delete;
  ScriptSource& operator=(const ScriptSource&) = delete;
  ScriptSource(ScriptSource&& rhs);
  ScriptSource& operator=(ScriptSource&& rhs);

  // Populates a ScriptSource object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScriptSource& out);

  // Populates a ScriptSource object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScriptSource& out);

  // Creates a deep copy of ScriptSource.
  ScriptSource Clone() const;

  // Creates a ScriptSource object from a base::Value, or NULL on failure.
  static std::unique_ptr<ScriptSource> FromValueDeprecated(const base::Value& value);

  // Creates a ScriptSource object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ScriptSource> FromValue(const base::Value::Dict& value);

  // Creates a ScriptSource object from a base::Value, or nullopt on failure.
  static absl::optional<ScriptSource> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScriptSource object.
  base::Value::Dict ToValue() const;

  // A string containing the JavaScript code to inject. Exactly one of
  // <code>file</code> or <code>code</code> must be specified.
  absl::optional<std::string> code;

  // The path of the JavaScript file to inject relative to the extension's root
  // directory. Exactly one of <code>file</code> or <code>code</code> must be
  // specified.
  absl::optional<std::string> file;

};

struct SerializedUserScript {
  SerializedUserScript();
  ~SerializedUserScript();
  SerializedUserScript(const SerializedUserScript&) = delete;
  SerializedUserScript& operator=(const SerializedUserScript&) = delete;
  SerializedUserScript(SerializedUserScript&& rhs);
  SerializedUserScript& operator=(SerializedUserScript&& rhs);

  // Populates a SerializedUserScript object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SerializedUserScript& out);

  // Populates a SerializedUserScript object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SerializedUserScript& out);

  // Creates a deep copy of SerializedUserScript.
  SerializedUserScript Clone() const;

  // Creates a SerializedUserScript object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SerializedUserScript> FromValueDeprecated(const base::Value& value);

  // Creates a SerializedUserScript object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<SerializedUserScript> FromValue(const base::Value::Dict& value);

  // Creates a SerializedUserScript object from a base::Value, or nullopt on
  // failure.
  static absl::optional<SerializedUserScript> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSerializedUserScript object.
  base::Value::Dict ToValue() const;

  // Whether the script will inject into all frames, regardless if it is not the
  // top-most frame in the tab.
  absl::optional<bool> all_frames;

  // The list of CSS files to be injected into matching pages. Note that, today,
  // we only expect these to contain files. It is represented as a ScriptSource
  // for compatibility and consistency with `js`.
  absl::optional<std::vector<ScriptSource>> css;

  // Excludes pages that this user script would otherwise be injected into.
  absl::optional<std::vector<std::string>> exclude_matches;

  // Specifies wildcard patterns for pages this user script will NOT be injected
  // into.
  absl::optional<std::vector<std::string>> exclude_globs;

  // The ID of the script.
  std::string id;

  // Specifies wildcard patterns for pages this user script will be injected into.
  absl::optional<std::vector<std::string>> include_globs;

  // The list of sources of javascript to be injected into matching pages.
  absl::optional<std::vector<ScriptSource>> js;

  // Specifies which pages this user script will be injected into.
  std::vector<std::string> matches;

  // Whether the script should inject into any frames where the URL belongs to a
  // scheme that would never match a specified Match Pattern, including about:,
  // data:, blob:, and filesystem: schemes.
  absl::optional<bool> match_origin_as_fallback;

  // Specifies when JavaScript files are injected into the web page.
  extensions::api::extension_types::RunAt run_at;

  // The "source" of the user script.
  Source source;

  // The JavaScript "world" to run the script in.
  extensions::api::extension_types::ExecutionWorld world;

};


}  // namespace scripts_internal
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SCRIPTS_INTERNAL_H__
