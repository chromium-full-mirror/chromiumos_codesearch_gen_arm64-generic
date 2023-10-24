// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/user_scripts.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_USER_SCRIPTS_H__
#define EXTENSIONS_COMMON_API_USER_SCRIPTS_H__

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
namespace user_scripts {

//
// Types
//

// The JavaScript world for a user script to execute within.
enum  ExecutionWorld {
  EXECUTION_WORLD_NONE = 0,
  EXECUTION_WORLD_MAIN,
  EXECUTION_WORLD_USER_SCRIPT,
  EXECUTION_WORLD_LAST = EXECUTION_WORLD_USER_SCRIPT,
};


const char* ToString(ExecutionWorld as_enum);
ExecutionWorld ParseExecutionWorld(base::StringPiece as_string);
std::u16string GetExecutionWorldParseError(base::StringPiece as_string);

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

struct RegisteredUserScript {
  RegisteredUserScript();
  ~RegisteredUserScript();
  RegisteredUserScript(const RegisteredUserScript&) = delete;
  RegisteredUserScript& operator=(const RegisteredUserScript&) = delete;
  RegisteredUserScript(RegisteredUserScript&& rhs);
  RegisteredUserScript& operator=(RegisteredUserScript&& rhs);

  // Populates a RegisteredUserScript object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RegisteredUserScript& out);

  // Populates a RegisteredUserScript object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RegisteredUserScript& out);

  // Creates a deep copy of RegisteredUserScript.
  RegisteredUserScript Clone() const;

  // Creates a RegisteredUserScript object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RegisteredUserScript> FromValueDeprecated(const base::Value& value);

  // Creates a RegisteredUserScript object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<RegisteredUserScript> FromValue(const base::Value::Dict& value);

  // Creates a RegisteredUserScript object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RegisteredUserScript> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRegisteredUserScript object.
  base::Value::Dict ToValue() const;

  // If true, it will inject into all frames, even if the frame is not the
  // top-most frame in the tab. Each frame is checked independently for URL
  // requirements; it will not inject into child frames if the URL requirements
  // are not met. Defaults to false, meaning that only the top frame is matched.
  absl::optional<bool> all_frames;

  // Excludes pages that this user script would otherwise be injected into. See <a
  // href="match_patterns">Match Patterns</a> for more details on the syntax of
  // these strings.
  absl::optional<std::vector<std::string>> exclude_matches;

  // The ID of the user script specified in the API call. This property must not
  // start with a '_' as it's reserved as a prefix for generated script IDs.
  std::string id;

  // Specifies wildcard patterns for pages this user script will be injected into.
  absl::optional<std::vector<std::string>> include_globs;

  // Specifies wildcard patterns for pages this user script will NOT be injected
  // into.
  absl::optional<std::vector<std::string>> exclude_globs;

  // The list of ScriptSource objects defining sources of scripts to be injected
  // into matching pages.
  std::vector<ScriptSource> js;

  // Specifies which pages this user script will be injected into. See <a
  // href="match_patterns">Match Patterns</a> for more details on the syntax of
  // these strings. This property must be specified for ${ref:register}.
  absl::optional<std::vector<std::string>> matches;

  // Specifies when JavaScript files are injected into the web page. The preferred
  // and default value is <code>document_idle</code>.
  extensions::api::extension_types::RunAt run_at;

  // The JavaScript execution environment to run the script in. The default is
  // <code>`USER_SCRIPT`</code>.
  ExecutionWorld world;

};

struct UserScriptFilter {
  UserScriptFilter();
  ~UserScriptFilter();
  UserScriptFilter(const UserScriptFilter&) = delete;
  UserScriptFilter& operator=(const UserScriptFilter&) = delete;
  UserScriptFilter(UserScriptFilter&& rhs);
  UserScriptFilter& operator=(UserScriptFilter&& rhs);

  // Populates a UserScriptFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UserScriptFilter& out);

  // Populates a UserScriptFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UserScriptFilter& out);

  // Creates a deep copy of UserScriptFilter.
  UserScriptFilter Clone() const;

  // Creates a UserScriptFilter object from a base::Value, or NULL on failure.
  static std::unique_ptr<UserScriptFilter> FromValueDeprecated(const base::Value& value);

  // Creates a UserScriptFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<UserScriptFilter> FromValue(const base::Value::Dict& value);

  // Creates a UserScriptFilter object from a base::Value, or nullopt on
  // failure.
  static absl::optional<UserScriptFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUserScriptFilter object.
  base::Value::Dict ToValue() const;

  // $(ref:getScripts) only returns scripts with the IDs specified in this list.
  absl::optional<std::vector<std::string>> ids;

};


//
// Functions
//

namespace Register {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Contains a list of user scripts to be registered.
  std::vector<RegisteredUserScript> scripts;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Register

namespace GetScripts {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // If specified, this method returns only the user scripts that match it.
  absl::optional<UserScriptFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<RegisteredUserScript>& scripts);
}  // namespace Results

}  // namespace GetScripts

namespace Unregister {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // If specified, this method unregisters only the user scripts that match it.
  absl::optional<UserScriptFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Unregister

namespace Update {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Contains a list of user scripts to be updated. A property is only updated for
  // the existing script if it is specified in this object. If there are errors
  // during script parsing/file validation, or if the IDs specified do not
  // correspond to a fully registered script, then no scripts are updated.
  std::vector<RegisteredUserScript> scripts;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Update

}  // namespace user_scripts
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_USER_SCRIPTS_H__
