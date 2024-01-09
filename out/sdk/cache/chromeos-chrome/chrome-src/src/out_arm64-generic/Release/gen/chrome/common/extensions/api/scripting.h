// Copyright 2024 The Chromium Authors
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
#include <optional>
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
enum class StyleOrigin {
  kNone = 0,
  kAuthor,
  kUser,
  kMaxValue = kUser,
};


const char* ToString(StyleOrigin as_enum);
StyleOrigin ParseStyleOrigin(base::StringPiece as_string);
std::u16string GetStyleOriginParseError(base::StringPiece as_string);

// The JavaScript world for a script to execute within.
enum class ExecutionWorld {
  kNone = 0,
  kIsolated,
  kMain,
  kMaxValue = kMain,
};


const char* ToString(ExecutionWorld as_enum);
ExecutionWorld ParseExecutionWorld(base::StringPiece as_string);
std::u16string GetExecutionWorldParseError(base::StringPiece as_string);

struct InjectionTarget {
  InjectionTarget();
  ~InjectionTarget();
  InjectionTarget(const InjectionTarget&) = delete;
  InjectionTarget& operator=(const InjectionTarget&) = delete;
  InjectionTarget(InjectionTarget&& rhs) noexcept;
  InjectionTarget& operator=(InjectionTarget&& rhs) noexcept;

  // Populates a InjectionTarget object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InjectionTarget& out);

  // Populates a InjectionTarget object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InjectionTarget& out);

  // Creates a deep copy of InjectionTarget.
  InjectionTarget Clone() const;

  // Creates a InjectionTarget object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<InjectionTarget> FromValue(const base::Value::Dict& value);

  // Creates a InjectionTarget object from a base::Value, or nullopt on failure.
  static std::optional<InjectionTarget> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInjectionTarget object.
  base::Value::Dict ToValue() const;

  // The ID of the tab into which to inject.
  int tab_id;

  // The <a
  // href="https://developer.chrome.com/extensions/webNavigation#frame_ids">IDs</a> of specific frames to inject into.
  std::optional<std::vector<int>> frame_ids;

  // The <a
  // href="https://developer.chrome.com/extensions/webNavigation#document_ids">IDs</a> of specific documentIds to inject into. This must not be set if <code>frameIds</code> is set.
  std::optional<std::vector<std::string>> document_ids;

  // Whether the script should inject into all frames within the tab. Defaults to
  // false. This must not be true if <code>frameIds</code> is specified.
  std::optional<bool> all_frames;

};

struct ScriptInjection {
  ScriptInjection();
  ~ScriptInjection();
  ScriptInjection(const ScriptInjection&) = delete;
  ScriptInjection& operator=(const ScriptInjection&) = delete;
  ScriptInjection(ScriptInjection&& rhs) noexcept;
  ScriptInjection& operator=(ScriptInjection&& rhs) noexcept;

  // Populates a ScriptInjection object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScriptInjection& out);

  // Populates a ScriptInjection object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScriptInjection& out);

  // Creates a deep copy of ScriptInjection.
  ScriptInjection Clone() const;

  // Creates a ScriptInjection object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ScriptInjection> FromValue(const base::Value::Dict& value);

  // Creates a ScriptInjection object from a base::Value, or nullopt on failure.
  static std::optional<ScriptInjection> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScriptInjection object.
  base::Value::Dict ToValue() const;

  // A JavaScript function to inject. This function will be serialized, and then
  // deserialized for injection. This means that any bound parameters and
  // execution context will be lost. Exactly one of <code>files</code> or
  // <code>func</code> must be specified.
  std::optional<std::string> func;

  // The arguments to curry into a provided function. This is only valid if the
  // <code>func</code> parameter is specified. These arguments must be
  // JSON-serializable.
  std::optional<base::Value::List> args;

  // We used to call the injected function `function`, but this is incompatible
  // with JavaScript's object declaration shorthand (see
  // https://crbug.com/1166438). We leave this silently in for backwards
  // compatibility. TODO(devlin): Remove this in M95.
  std::optional<std::string> function;

  // The path of the JS or CSS files to inject, relative to the extension's root
  // directory. Exactly one of <code>files</code> or <code>func</code> must be
  // specified.
  std::optional<std::vector<std::string>> files;

  // Details specifying the target into which to inject the script.
  InjectionTarget target;

  // The JavaScript "world" to run the script in. Defaults to
  // <code>ISOLATED</code>.
  ExecutionWorld world;

  // Whether the injection should be triggered in the target as soon as possible.
  // Note that this is not a guarantee that injection will occur prior to page
  // load, as the page may have already loaded by the time the script reaches the
  // target.
  std::optional<bool> inject_immediately;

};

struct CSSInjection {
  CSSInjection();
  ~CSSInjection();
  CSSInjection(const CSSInjection&) = delete;
  CSSInjection& operator=(const CSSInjection&) = delete;
  CSSInjection(CSSInjection&& rhs) noexcept;
  CSSInjection& operator=(CSSInjection&& rhs) noexcept;

  // Populates a CSSInjection object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CSSInjection& out);

  // Populates a CSSInjection object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CSSInjection& out);

  // Creates a deep copy of CSSInjection.
  CSSInjection Clone() const;

  // Creates a CSSInjection object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CSSInjection> FromValue(const base::Value::Dict& value);

  // Creates a CSSInjection object from a base::Value, or nullopt on failure.
  static std::optional<CSSInjection> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCSSInjection object.
  base::Value::Dict ToValue() const;

  // Details specifying the target into which to insert the CSS.
  InjectionTarget target;

  // A string containing the CSS to inject. Exactly one of <code>files</code> and
  // <code>css</code> must be specified.
  std::optional<std::string> css;

  // The path of the CSS files to inject, relative to the extension's root
  // directory. Exactly one of <code>files</code> and <code>css</code> must be
  // specified.
  std::optional<std::vector<std::string>> files;

  // The style origin for the injection. Defaults to <code>'AUTHOR'</code>.
  StyleOrigin origin;

};

struct InjectionResult {
  InjectionResult();
  ~InjectionResult();
  InjectionResult(const InjectionResult&) = delete;
  InjectionResult& operator=(const InjectionResult&) = delete;
  InjectionResult(InjectionResult&& rhs) noexcept;
  InjectionResult& operator=(InjectionResult&& rhs) noexcept;

  // Populates a InjectionResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InjectionResult& out);

  // Populates a InjectionResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InjectionResult& out);

  // Creates a deep copy of InjectionResult.
  InjectionResult Clone() const;

  // Creates a InjectionResult object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<InjectionResult> FromValue(const base::Value::Dict& value);

  // Creates a InjectionResult object from a base::Value, or nullopt on failure.
  static std::optional<InjectionResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInjectionResult object.
  base::Value::Dict ToValue() const;

  // The result of the script execution.
  std::optional<base::Value> result;

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
  RegisteredContentScript(RegisteredContentScript&& rhs) noexcept;
  RegisteredContentScript& operator=(RegisteredContentScript&& rhs) noexcept;

  // Populates a RegisteredContentScript object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RegisteredContentScript& out);

  // Populates a RegisteredContentScript object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RegisteredContentScript& out);

  // Creates a deep copy of RegisteredContentScript.
  RegisteredContentScript Clone() const;

  // Creates a RegisteredContentScript object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<RegisteredContentScript> FromValue(const base::Value::Dict& value);

  // Creates a RegisteredContentScript object from a base::Value, or nullopt on
  // failure.
  static std::optional<RegisteredContentScript> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRegisteredContentScript object.
  base::Value::Dict ToValue() const;

  // The id of the content script, specified in the API call. Must not start with
  // a '_' as it's reserved as a prefix for generated script IDs.
  std::string id;

  // Specifies which pages this content script will be injected into. See <a
  // href="match_patterns">Match Patterns</a> for more details on the syntax of
  // these strings. Must be specified for $(ref:registerContentScripts).
  std::optional<std::vector<std::string>> matches;

  // Excludes pages that this content script would otherwise be injected into. See
  // <a href="match_patterns">Match Patterns</a> for more details on the syntax of
  // these strings.
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

  // Indicates whether the script can be injected into frames where the URL
  // contains an unsupported scheme; specifically: about:, data:, blob:, or
  // filesystem:. In these cases, the URL's origin is checked to determine if the
  // script should be injected. If the origin is `null` (as is the case for data:
  // URLs) then the used origin is either the frame that created the current frame
  // or the frame that initiated the navigation to this frame. Note that this may
  // not be the parent frame.
  std::optional<bool> match_origin_as_fallback;

  // Specifies when JavaScript files are injected into the web page. The preferred
  // and default value is <code>document_idle</code>.
  extensions::api::extension_types::RunAt run_at;

  // Specifies if this content script will persist into future sessions. The
  // default is true.
  std::optional<bool> persist_across_sessions;

  // The JavaScript "world" to run the script in. Defaults to
  // <code>ISOLATED</code>.
  ExecutionWorld world;

};

struct ContentScriptFilter {
  ContentScriptFilter();
  ~ContentScriptFilter();
  ContentScriptFilter(const ContentScriptFilter&) = delete;
  ContentScriptFilter& operator=(const ContentScriptFilter&) = delete;
  ContentScriptFilter(ContentScriptFilter&& rhs) noexcept;
  ContentScriptFilter& operator=(ContentScriptFilter&& rhs) noexcept;

  // Populates a ContentScriptFilter object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContentScriptFilter& out);

  // Populates a ContentScriptFilter object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContentScriptFilter& out);

  // Creates a deep copy of ContentScriptFilter.
  ContentScriptFilter Clone() const;

  // Creates a ContentScriptFilter object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ContentScriptFilter> FromValue(const base::Value::Dict& value);

  // Creates a ContentScriptFilter object from a base::Value, or nullopt on
  // failure.
  static std::optional<ContentScriptFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContentScriptFilter object.
  base::Value::Dict ToValue() const;

  // If specified, $(ref:getRegisteredContentScripts) will only return scripts
  // with an id specified in this list.
  std::optional<std::vector<std::string>> ids;

};


//
// Functions
//

namespace ExecuteScript {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // An object to filter the extension's dynamically registered scripts.
  std::optional<ContentScriptFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<RegisteredContentScript>& scripts);
}  // namespace Results

}  // namespace GetRegisteredContentScripts

namespace UnregisterContentScripts {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // If specified, only unregisters dynamic content scripts which match the
  // filter. Otherwise, all of the extension's dynamic content scripts are
  // unregistered.
  std::optional<ContentScriptFilter> filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UnregisterContentScripts

namespace UpdateContentScripts {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
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
