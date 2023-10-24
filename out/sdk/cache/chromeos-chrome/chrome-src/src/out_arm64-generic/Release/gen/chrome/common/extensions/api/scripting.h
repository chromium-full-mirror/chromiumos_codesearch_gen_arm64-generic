// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/scripting.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SCRIPTING_H__
#define CHROME_COMMON_EXTENSIONS_API_SCRIPTING_H__

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
namespace scripting {

//
// Types
//

// The origin for a style change. See <a
// href="https://developer.mozilla.org/en-US/docs/Glossary/Style_origin">style
// origins</a> for more info.
enum  StyleOrigin {
  STYLE_ORIGIN_NONE = 0,
  STYLE_ORIGIN_AUTHOR,
  STYLE_ORIGIN_USER,
  STYLE_ORIGIN_LAST = STYLE_ORIGIN_USER,
};


const char* ToString(StyleOrigin as_enum);
StyleOrigin ParseStyleOrigin(base::StringPiece as_string);
std::u16string GetStyleOriginParseError(base::StringPiece as_string);

// The JavaScript world for a script to execute within.
enum  ExecutionWorld {
  EXECUTION_WORLD_NONE = 0,
  EXECUTION_WORLD_ISOLATED,
  EXECUTION_WORLD_MAIN,
  EXECUTION_WORLD_LAST = EXECUTION_WORLD_MAIN,
};


const char* ToString(ExecutionWorld as_enum);
ExecutionWorld ParseExecutionWorld(base::StringPiece as_string);
std::u16string GetExecutionWorldParseError(base::StringPiece as_string);

struct InjectionTarget {
  InjectionTarget();
  ~InjectionTarget();
  InjectionTarget(const InjectionTarget&) = delete;
  InjectionTarget& operator=(const InjectionTarget&) = delete;
  InjectionTarget(InjectionTarget&& rhs);
  InjectionTarget& operator=(InjectionTarget&& rhs);

  // Populates a InjectionTarget object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InjectionTarget& out);

  // Populates a InjectionTarget object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InjectionTarget& out);

  // Creates a deep copy of InjectionTarget.
  InjectionTarget Clone() const;

  // Creates a InjectionTarget object from a base::Value, or NULL on failure.
  static std::unique_ptr<InjectionTarget> FromValueDeprecated(const base::Value& value);

  // Creates a InjectionTarget object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<InjectionTarget> FromValue(const base::Value::Dict& value);

  // Creates a InjectionTarget object from a base::Value, or nullopt on failure.
  static absl::optional<InjectionTarget> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInjectionTarget object.
  base::Value::Dict ToValue() const;

  // The ID of the tab into which to inject.
  int tab_id;

  // The <a
  // href="https://developer.chrome.com/extensions/webNavigation#frame_ids">IDs</a> of specific frames to inject into.
  absl::optional<std::vector<int>> frame_ids;

  // The <a
  // href="https://developer.chrome.com/extensions/webNavigation#document_ids">IDs</a> of specific documentIds to inject into. This must not be set if <code>frameIds</code> is set.
  absl::optional<std::vector<std::string>> document_ids;

  // Whether the script should inject into all frames within the tab. Defaults to
  // false. This must not be true if <code>frameIds</code> is specified.
  absl::optional<bool> all_frames;

};

struct ScriptInjection {
  ScriptInjection();
  ~ScriptInjection();
  ScriptInjection(const ScriptInjection&) = delete;
  ScriptInjection& operator=(const ScriptInjection&) = delete;
  ScriptInjection(ScriptInjection&& rhs);
  ScriptInjection& operator=(ScriptInjection&& rhs);

  // Populates a ScriptInjection object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScriptInjection& out);

  // Populates a ScriptInjection object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScriptInjection& out);

  // Creates a deep copy of ScriptInjection.
  ScriptInjection Clone() const;

  // Creates a ScriptInjection object from a base::Value, or NULL on failure.
  static std::unique_ptr<ScriptInjection> FromValueDeprecated(const base::Value& value);

  // Creates a ScriptInjection object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ScriptInjection> FromValue(const base::Value::Dict& value);

  // Creates a ScriptInjection object from a base::Value, or nullopt on failure.
  static absl::optional<ScriptInjection> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScriptInjection object.
  base::Value::Dict ToValue() const;

  // A JavaScript function to inject. This function will be serialized, and then
  // deserialized for injection. This means that any bound parameters and
  // execution context will be lost. Exactly one of <code>files</code> and
  // <code>func</code> must be specified.
  absl::optional<std::string> func;

  // The arguments to curry into a provided function. This is only valid if the
  // <code>func</code> parameter is specified. These arguments must be
  // JSON-serializable.
  absl::optional<base::Value::List> args;

  // We used to call the injected function `function`, but this is incompatible
  // with JavaScript's object declaration shorthand (see
  // https://crbug.com/1166438). We leave this silently in for backwards
  // compatibility. TODO(devlin): Remove this in M95.
  absl::optional<std::string> function;

  // The path of the JS or CSS files to inject, relative to the extension's root
  // directory. Exactly one of <code>files</code> and <code>func</code> must be
  // specified.
  absl::optional<std::vector<std::string>> files;

  // Details specifying the target into which to inject the script.
  InjectionTarget target;

  // The JavaScript "world" to run the script in. Defaults to
  // <code>ISOLATED</code>.
  ExecutionWorld world;

  // Whether the injection should be triggered in the target as soon as possible.
  // Note that this is not a guarantee that injection will occur prior to page
  // load, as the page may have already loaded by the time the script reaches the
  // target.
  absl::optional<bool> inject_immediately;

};

struct CSSInjection {
  CSSInjection();
  ~CSSInjection();
  CSSInjection(const CSSInjection&) = delete;
  CSSInjection& operator=(const CSSInjection&) = delete;
  CSSInjection(CSSInjection&& rhs);
  CSSInjection& operator=(CSSInjection&& rhs);

  // Populates a CSSInjection object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CSSInjection& out);

  // Populates a CSSInjection object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CSSInjection& out);

  // Creates a deep copy of CSSInjection.
  CSSInjection Clone() const;

  // Creates a CSSInjection object from a base::Value, or NULL on failure.
  static std::unique_ptr<CSSInjection> FromValueDeprecated(const base::Value& value);

  // Creates a CSSInjection object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CSSInjection> FromValue(const base::Value::Dict& value);

  // Creates a CSSInjection object from a base::Value, or nullopt on failure.
  static absl::optional<CSSInjection> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCSSInjection object.
  base::Value::Dict ToValue() const;

  // Details specifying the target into which to insert the CSS.
  InjectionTarget target;

  // A string containing the CSS to inject. Exactly one of <code>files</code> and
  // <code>css</code> must be specified.
  absl::optional<std::string> css;

  // The path of the CSS files to inject, relative to the extension's root
  // directory. Exactly one of <code>files</code> and <code>css</code> must be
  // specified.
  absl::optional<std::vector<std::string>> files;

  // The style origin for the injection. Defaults to <code>'AUTHOR'</code>.
  StyleOrigin origin;

};

struct InjectionResult {
  InjectionResult();
  ~InjectionResult();
  InjectionResult(const InjectionResult&) = delete;
  InjectionResult& operator=(const InjectionResult&) = delete;
  InjectionResult(InjectionResult&& rhs);
  InjectionResult& operator=(InjectionResult&& rhs);

  // Populates a InjectionResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InjectionResult& out);

  // Populates a InjectionResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InjectionResult& out);

  // Creates a deep copy of InjectionResult.
  InjectionResult Clone() const;

  // Creates a InjectionResult object from a base::Value, or NULL on failure.
  static std::unique_ptr<InjectionResult> FromValueDeprecated(const base::Value& value);

  // Creates a InjectionResult object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<InjectionResult> FromValue(const base::Value::Dict& value);

  // Creates a InjectionResult object from a base::Value, or nullopt on failure.
  static absl::optional<InjectionResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInjectionResult object.
  base::Value::Dict ToValue() const;

  // The result of the script execution.
  absl::optional<base::Value> result;

  // The frame associated with the injection.
  int frame_id;

  // The document associated with the injection.
  std::string document_id;

};

struct RegisteredContentScript {
  RegisteredContentScript();
  ~RegisteredContentScript();
  RegisteredContentScript(const RegisteredContentScript&) = delete;
  RegisteredContentScript& operator=(const RegisteredContentScript&) = delete;
  RegisteredContentScript(RegisteredContentScript&& rhs);
  RegisteredContentScript& operator=(RegisteredContentScript&& rhs);

  // Populates a RegisteredContentScript object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RegisteredContentScript& out);

  // Populates a RegisteredContentScript object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RegisteredContentScript& out);

  // Creates a deep copy of RegisteredContentScript.
  RegisteredContentScript Clone() const;

  // Creates a RegisteredContentScript object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<RegisteredContentScript> FromValueDeprecated(const base::Value& value);

  // Creates a RegisteredContentScript object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<RegisteredContentScript> FromValue(const base::Value::Dict& value);

  // Creates a RegisteredContentScript object from a base::Value, or nullopt on
  // failure.
  static absl::optional<RegisteredContentScript> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRegisteredContentScript object.
  base::Value::Dict ToValue() const;

  // The id of the content script, specified in the API call. Must not start with
  // a '_' as it's reserved as a prefix for generated script IDs.
  std::string id;

  // Specifies which pages this content script will be injected into. See <a
  // href="match_patterns">Match Patterns</a> for more details on the syntax of
  // these strings. Must be specified for $(ref:registerContentScripts).
  absl::optional<std::vector<std::string>> matches;

  // Excludes pages that this content script would otherwise be injected into. See
  // <a href="match_patterns">Match Patterns</a> for more details on the syntax of
  // these strings.
  absl::optional<std::vector<std::string>> exclude_matches;

  // The list of CSS files to be injected into matching pages. These are injected
  // in the order they appear in this array, before any DOM is constructed or
  // displayed for the page.
  absl::optional<std::vector<std::string>> css;

  // The list of JavaScript files to be injected into matching pages. These are
  // injected in the order they appear in this array.
  absl::optional<std::vector<std::string>> js;

  // If specified true, it will inject into all frames, even if the frame is not
  // the top-most frame in the tab. Each frame is checked independently for URL
  // requirements; it will not inject into child frames if the URL requirements
  // are not met. Defaults to false, meaning that only the top frame is matched.
  absl::optional<bool> all_frames;

  // Whether the script should inject into any frames where the URL belongs to a
  // scheme that would never match a specified Match Pattern, including about:,
  // data:, blob:, and filesystem: schemes. In these cases, in order to determine
  // if the script should inject, the origin of the URL is checked. If the origin
  // is `null` (as is the case for data: URLs), then the "initiator" or "creator"
  // origin is used (i.e., the origin of the frame that created or navigated this
  // frame). Note that this may not be the parent frame, if the frame was
  // navigated by another frame in the document hierarchy.
  absl::optional<bool> match_origin_as_fallback;

  // Specifies when JavaScript files are injected into the web page. The preferred
  // and default value is <code>document_idle</code>.
  extensions::api::extension_types::RunAt run_at;

  // Specifies if this content script will persist into future sessions. The
  // default is true.
  absl::optional<bool> persist_across_sessions;

  // The JavaScript "world" to run the script in. Defaults to
  // <code>ISOLATED</code>.
  ExecutionWorld world;

};

struct ContentScriptFilter {
  ContentScriptFilter();
  ~ContentScriptFilter();
  ContentScriptFilter(const ContentScriptFilter&) = delete;
  ContentScriptFilter& operator=(const ContentScriptFilter&) = delete;
  ContentScriptFilter(ContentScriptFilter&& rhs);
  ContentScriptFilter& operator=(ContentScriptFilter&& rhs);

  // Populates a ContentScriptFilter object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContentScriptFilter& out);

  // Populates a ContentScriptFilter object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContentScriptFilter& out);

  // Creates a deep copy of ContentScriptFilter.
  ContentScriptFilter Clone() const;

  // Creates a ContentScriptFilter object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<ContentScriptFilter> FromValueDeprecated(const base::Value& value);

  // Creates a ContentScriptFilter object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<ContentScriptFilter> FromValue(const base::Value::Dict& value);

  // Creates a ContentScriptFilter object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ContentScriptFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContentScriptFilter object.
  base::Value::Dict ToValue() const;

  // If specified, $(ref:getRegisteredContentScripts) will only return scripts
  // with an id specified in this list.
  absl::optional<std::vector<std::string>> ids;

};


//
// Functions
//

namespace ExecuteScript {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The details of the script which to inject.
  ScriptInjection injection;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<InjectionResult>& results);
}  // namespace Results

}  // namespace ExecuteScript

namespace InsertCSS {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The details of the styles to insert.
  CSSInjection injection;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace InsertCSS

namespace RemoveCSS {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The details of the styles to remove. Note that the <code>css</code>,
  // <code>files</code>, and <code>origin</code> properties must exactly match the
  // stylesheet inserted through $(ref:insertCSS). Attempting to remove a
  // non-existent stylesheet is a no-op.
  CSSInjection injection;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveCSS

namespace RegisterContentScripts {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Contains a list of scripts to be registered. If there are errors during
  // script parsing/file validation, or if the IDs specified already exist, then
  // no scripts are registered.
  std::vector<RegisteredContentScript> scripts;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RegisterContentScripts

namespace GetRegisteredContentScripts {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // An object to filter the extension's dynamically registered scripts.
  absl::optional<ContentScriptFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<RegisteredContentScript>& scripts);
}  // namespace Results

}  // namespace GetRegisteredContentScripts

namespace UnregisterContentScripts {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // If specified, only unregisters dynamic content scripts which match the
  // filter. Otherwise, all of the extension's dynamic content scripts are
  // unregistered.
  absl::optional<ContentScriptFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnregisterContentScripts

namespace UpdateContentScripts {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Contains a list of scripts to be updated. A property is only updated for the
  // existing script if it is specified in this object. If there are errors during
  // script parsing/file validation, or if the IDs specified do not correspond to
  // a fully registered script, then no scripts are updated.
  std::vector<RegisteredContentScript> scripts;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateContentScripts

}  // namespace scripting
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SCRIPTING_H__
