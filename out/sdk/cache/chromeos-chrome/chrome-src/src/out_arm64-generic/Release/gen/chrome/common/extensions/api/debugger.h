// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/debugger.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_DEBUGGER_H__
#define CHROME_COMMON_EXTENSIONS_API_DEBUGGER_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace debugger {

//
// Types
//

// Debuggee identifier. Either tabId or extensionId must be specified
struct Debuggee {
  Debuggee();
  ~Debuggee();
  Debuggee(const Debuggee&) = delete;
  Debuggee& operator=(const Debuggee&) = delete;
  Debuggee(Debuggee&& rhs) noexcept;
  Debuggee& operator=(Debuggee&& rhs) noexcept;

  // Populates a Debuggee object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Debuggee& out);

  // Populates a Debuggee object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Debuggee& out);

  // Creates a deep copy of Debuggee.
  Debuggee Clone() const;

  // Creates a Debuggee object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Debuggee> FromValue(const base::Value::Dict& value);

  // Creates a Debuggee object from a base::Value, or nullopt on failure.
  static std::optional<Debuggee> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDebuggee object.
  base::Value::Dict ToValue() const;

  // The id of the tab which you intend to debug.
  std::optional<int> tab_id;

  // The id of the extension which you intend to debug. Attaching to an extension
  // background page is only possible when the
  // <code>--silent-debugger-extension-api</code> command-line switch is used.
  std::optional<std::string> extension_id;

  // The opaque id of the debug target.
  std::optional<std::string> target_id;

};

// Target type.
enum class TargetInfoType {
  kNone = 0,
  kPage,
  kBackgroundPage,
  kWorker,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(TargetInfoType as_enum);
TargetInfoType ParseTargetInfoType(base::StringPiece as_string);
std::u16string GetTargetInfoTypeParseError(base::StringPiece as_string);

// Connection termination reason.
enum class DetachReason {
  kNone = 0,
  kTargetClosed,
  kCanceledByUser,
  kMaxValue = kCanceledByUser,
};


const char* ToString(DetachReason as_enum);
DetachReason ParseDetachReason(base::StringPiece as_string);
std::u16string GetDetachReasonParseError(base::StringPiece as_string);

// Debug target information
struct TargetInfo {
  TargetInfo();
  ~TargetInfo();
  TargetInfo(const TargetInfo&) = delete;
  TargetInfo& operator=(const TargetInfo&) = delete;
  TargetInfo(TargetInfo&& rhs) noexcept;
  TargetInfo& operator=(TargetInfo&& rhs) noexcept;

  // Populates a TargetInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, TargetInfo& out);

  // Populates a TargetInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, TargetInfo& out);

  // Creates a deep copy of TargetInfo.
  TargetInfo Clone() const;

  // Creates a TargetInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<TargetInfo> FromValue(const base::Value::Dict& value);

  // Creates a TargetInfo object from a base::Value, or nullopt on failure.
  static std::optional<TargetInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTargetInfo object.
  base::Value::Dict ToValue() const;

  // Target type.
  TargetInfoType type;

  // Target id.
  std::string id;

  // The tab id, defined if type == 'page'.
  std::optional<int> tab_id;

  // The extension id, defined if type = 'background_page'.
  std::optional<std::string> extension_id;

  // True if debugger is already attached.
  bool attached;

  // Target page title.
  std::string title;

  // Target URL.
  std::string url;

  // Target favicon URL.
  std::optional<std::string> favicon_url;

};


//
// Functions
//

namespace Attach {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Debugging target to which you want to attach.
  Debuggee target;

  // Required debugging protocol version ("0.1"). One can only attach to the
  // debuggee with matching major version and greater or equal minor version. List
  // of the protocol versions can be obtained <a
  // href='https://developer.chrome.com/devtools/docs/debugger-protocol'>here</a>.
  std::string required_version;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Attach

namespace Detach {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Debugging target from which you want to detach.
  Debuggee target;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Detach

namespace SendCommand {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // JSON object with request parameters. This object must conform to the remote
  // debugging params scheme for given method.
  struct CommandParams {
    CommandParams();
    ~CommandParams();
    CommandParams(const CommandParams&) = delete;
    CommandParams& operator=(const CommandParams&) = delete;
    CommandParams(CommandParams&& rhs) noexcept;
    CommandParams& operator=(CommandParams&& rhs) noexcept;

    // Populates a CommandParams object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, CommandParams& out);

    // Populates a CommandParams object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, CommandParams& out);

    // Creates a deep copy of CommandParams.
    CommandParams Clone() const;

    // Creates a CommandParams object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<CommandParams> FromValue(const base::Value::Dict& value);

    // Creates a CommandParams object from a base::Value, or nullopt on failure.
    static std::optional<CommandParams> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  // Debugging target to which you want to send the command.
  Debuggee target;

  // Method name. Should be one of the methods defined by the <a
  // href='https://developer.chrome.com/devtools/docs/debugger-protocol'>remote
  // debugging protocol</a>.
  std::string method;

  // JSON object with request parameters. This object must conform to the remote
  // debugging params scheme for given method.
  std::optional<CommandParams> command_params;


 private:
  Params();
};

namespace Results {

// JSON object with the response. Structure of the response varies depending on
// the method name and is defined by the 'returns' attribute of the command
// description in the remote debugging protocol.
struct Result {
  Result();
  ~Result();
  Result(const Result&) = delete;
  Result& operator=(const Result&) = delete;
  Result(Result&& rhs) noexcept;
  Result& operator=(Result&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisResult object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


// JSON object with the response. Structure of the response varies depending on
// the method name and is defined by the 'returns' attribute of the command
// description in the remote debugging protocol.
base::Value::List Create(const Result& result);
}  // namespace Results

}  // namespace SendCommand

namespace GetTargets {

namespace Results {

// Array of TargetInfo objects corresponding to the available debug targets.
base::Value::List Create(const std::vector<TargetInfo>& result);
}  // namespace Results

}  // namespace GetTargets

//
// Events
//

namespace OnEvent {

extern const char kEventName[];  // "debugger.onEvent"

// JSON object with the parameters. Structure of the parameters varies depending
// on the method name and is defined by the 'parameters' attribute of the event
// description in the remote debugging protocol.
struct Params {
  Params();
  ~Params();
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisParams object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


// The debuggee that generated this event.
// Method name. Should be one of the notifications defined by the <a
// href='https://developer.chrome.com/devtools/docs/debugger-protocol'>remote
// debugging protocol</a>.
// JSON object with the parameters. Structure of the parameters varies depending
// on the method name and is defined by the 'parameters' attribute of the event
// description in the remote debugging protocol.
base::Value::List Create(const Debuggee& source, const std::string& method, const Params& params);
}  // namespace OnEvent

namespace OnDetach {

extern const char kEventName[];  // "debugger.onDetach"

// The debuggee that was detached.
// Connection termination reason.
base::Value::List Create(const Debuggee& source, const DetachReason& reason);
}  // namespace OnDetach

}  // namespace debugger
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_DEBUGGER_H__
