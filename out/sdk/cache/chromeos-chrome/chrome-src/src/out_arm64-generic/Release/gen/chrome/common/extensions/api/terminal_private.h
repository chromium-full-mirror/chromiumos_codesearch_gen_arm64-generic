// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/terminal_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_TERMINAL_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_TERMINAL_PRIVATE_H__

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
namespace terminal_private {

//
// Types
//

// Type of the output stream from which output came. When process exits, output
// type will be set to exit
enum class OutputType {
  kNone = 0,
  kStdout,
  kStderr,
  kExit,
  kMaxValue = kExit,
};


const char* ToString(OutputType as_enum);
OutputType ParseOutputType(base::StringPiece as_string);
std::u16string GetOutputTypeParseError(base::StringPiece as_string);


//
// Functions
//

namespace OpenTerminalProcess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Name of the process to open. May be 'crosh' or 'vmshell'.
  std::string process_name;

  // Command line arguments to pass to the process.
  std::optional<std::vector<std::string>> args;


 private:
  Params();
};

namespace Results {

// Id of the launched process.
base::Value::List Create(const std::string& id);
}  // namespace Results

}  // namespace OpenTerminalProcess

namespace OpenVmshellProcess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Command line arguments to pass to vmshell.
  std::optional<std::vector<std::string>> args;


 private:
  Params();
};

namespace Results {

// Id of the launched vmshell process.
base::Value::List Create(const std::string& id);
}  // namespace Results

}  // namespace OpenVmshellProcess

namespace CloseTerminalProcess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Unique id of the process we want to close.
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace CloseTerminalProcess

namespace SendInput {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the process to which we want to send input.
  std::string id;

  // Input we are sending to the process.
  std::string input;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace SendInput

namespace OnTerminalResize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the process.
  std::string id;

  // New window width (as column count).
  int width;

  // New window height (as row count).
  int height;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool success);
}  // namespace Results

}  // namespace OnTerminalResize

namespace AckOutput {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the process to which |onProcessOutput| was dispatched.
  std::string id;


 private:
  Params();
};

}  // namespace AckOutput

namespace OpenWindow {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Data {
    Data();
    ~Data();
    Data(const Data&) = delete;
    Data& operator=(const Data&) = delete;
    Data(Data&& rhs) noexcept;
    Data& operator=(Data&& rhs) noexcept;

    // Populates a Data object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Data& out);

    // Populates a Data object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Data& out);

    // Creates a deep copy of Data.
    Data Clone() const;

    // Creates a Data object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Data> FromValue(const base::Value::Dict& value);

    // Creates a Data object from a base::Value, or nullopt on failure.
    static std::optional<Data> FromValue(const base::Value& value);

    // The url for the new Terminal window.
    std::optional<std::string> url;

    // Instead of openning a new window, open it as a new tab in the current app
    // window.
    std::optional<bool> as_tab;

  };


  std::optional<Data> data;


 private:
  Params();
};

}  // namespace OpenWindow

namespace OpenOptionsPage {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace OpenOptionsPage

namespace OpenSettingsSubpage {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Name of subpage to open.  Currently only 'crostini' supported.
  std::string subpage;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace OpenSettingsSubpage

namespace GetOSInfo {

namespace Results {

// Information about which features are enabled.
struct Info {
  Info();
  ~Info();
  Info(const Info&) = delete;
  Info& operator=(const Info&) = delete;
  Info(Info&& rhs) noexcept;
  Info& operator=(Info&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInfo object.
  base::Value::Dict ToValue() const;

  // True if alternative emulator flag is enabled.
  bool alternative_emulator;

  // True if tast extension is installed.
  bool tast;

};


// Information about which features are enabled.
base::Value::List Create(const Info& info);
}  // namespace Results

}  // namespace GetOSInfo

namespace GetPrefs {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Paths of prefs to fetch.
  std::vector<std::string> paths;


 private:
  Params();
};

namespace Results {

// prefs keyed by paths.
struct Prefs {
  Prefs();
  ~Prefs();
  Prefs(const Prefs&) = delete;
  Prefs& operator=(const Prefs&) = delete;
  Prefs(Prefs&& rhs) noexcept;
  Prefs& operator=(Prefs&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrefs object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


// prefs keyed by paths.
base::Value::List Create(const Prefs& prefs);
}  // namespace Results

}  // namespace GetPrefs

namespace SetPrefs {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Prefs to update keyed by paths.
  struct Prefs {
    Prefs();
    ~Prefs();
    Prefs(const Prefs&) = delete;
    Prefs& operator=(const Prefs&) = delete;
    Prefs(Prefs&& rhs) noexcept;
    Prefs& operator=(Prefs&& rhs) noexcept;

    // Populates a Prefs object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Prefs& out);

    // Populates a Prefs object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Prefs& out);

    // Creates a deep copy of Prefs.
    Prefs Clone() const;

    // Creates a Prefs object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Prefs> FromValue(const base::Value::Dict& value);

    // Creates a Prefs object from a base::Value, or nullopt on failure.
    static std::optional<Prefs> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  // Prefs to update keyed by paths.
  Prefs prefs;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetPrefs

//
// Events
//

namespace OnProcessOutput {

extern const char kEventName[];  // "terminalPrivate.onProcessOutput"

// Id of the process from which the output came.
// Type of the output stream from which output came. When process exits, output
// type will be set to exit
// Data that was written to the output stream.
base::Value::List Create(const std::string& id, const OutputType& type, const std::vector<uint8_t>& data);
}  // namespace OnProcessOutput

namespace OnPrefChanged {

extern const char kEventName[];  // "terminalPrivate.onPrefChanged"

// Prefs keyed by paths.
struct Prefs {
  Prefs();
  ~Prefs();
  Prefs(const Prefs&) = delete;
  Prefs& operator=(const Prefs&) = delete;
  Prefs(Prefs&& rhs) noexcept;
  Prefs& operator=(Prefs&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPrefs object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


// Prefs keyed by paths.
base::Value::List Create(const Prefs& prefs);
}  // namespace OnPrefChanged

}  // namespace terminal_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_TERMINAL_PRIVATE_H__
