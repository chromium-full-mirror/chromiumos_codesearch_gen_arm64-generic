// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/terminal_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/terminal_private.h"

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
namespace terminal_private {
//
// Types
//

const char* ToString(OutputType enum_param) {
  switch (enum_param) {
    case OUTPUT_TYPE_STDOUT:
      return "stdout";
    case OUTPUT_TYPE_STDERR:
      return "stderr";
    case OUTPUT_TYPE_EXIT:
      return "exit";
    case OUTPUT_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

OutputType ParseOutputType(base::StringPiece enum_string) {
  if (enum_string == "stdout")
    return OUTPUT_TYPE_STDOUT;
  if (enum_string == "stderr")
    return OUTPUT_TYPE_STDERR;
  if (enum_string == "exit")
    return OUTPUT_TYPE_EXIT;
  return OUTPUT_TYPE_NONE;
}

std::u16string GetOutputTypeParseError(base::StringPiece enum_string) {
  return u"expected \"stdout\" or \"stderr\" or \"exit\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace OpenTerminalProcess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& process_name_value = args[0];
    {
      auto* temp = process_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.process_name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& args_value = args[1];
    {
      if (!args_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(args_value.GetList(), params.args)) {
          return absl::nullopt;
        }
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(id);

  return create_results;
}
}  // namespace OpenTerminalProcess

namespace OpenVmshellProcess {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& args_value = args[0];
    {
      if (!args_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateOptionalArrayFromList(args_value.GetList(), params.args)) {
          return absl::nullopt;
        }
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::string& id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(id);

  return create_results;
}
}  // namespace OpenVmshellProcess

namespace CloseTerminalProcess {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace CloseTerminalProcess

namespace SendInput {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& input_value = args[1];
    {
      auto* temp = input_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.input = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace SendInput

namespace OnTerminalResize {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& width_value = args[1];
    {
      auto temp = width_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.width = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& height_value = args[2];
    {
      auto temp = height_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.height = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool success) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(success);

  return create_results;
}
}  // namespace OnTerminalResize

namespace AckOutput {

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
    const base::Value& id_value = args[0];
    {
      auto* temp = id_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace AckOutput

namespace OpenWindow {

Params::Data::Data()
 {}

Params::Data::~Data() = default;
Params::Data::Data(Data&& rhs) = default;
Params::Data& Params::Data::operator=(Data&& rhs) = default;
Params::Data Params::Data::Clone() const {
  Data out;
  out.url = url;
  out.as_tab = as_tab;
  return out;
}

// static
bool Params::Data::Populate(
    const base::Value::Dict& dict, Data& out) {
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

  const base::Value* as_tab_value = dict.Find("asTab");
  if (as_tab_value) {
    {
      auto temp = (*as_tab_value).GetIfBool();
      if (!temp.has_value()) {
        out.as_tab = absl::nullopt;
        return false;
      }
      out.as_tab = *temp;
    }
  }

  return true;
}

// static
bool Params::Data::Populate(
    const base::Value& value, Data& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Data> Params::Data::FromValue(const base::Value::Dict& value) {
  Data out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Data> Params::Data::FromValue(const base::Value& value) {
  Data out;
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
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& data_value = args[0];
    {
      if (!data_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        Data temp;
        if (!Data::Populate(data_value.GetDict(), temp))
          return absl::nullopt;
        params.data = std::move(temp);
      }
    }
  }

  return params;
}


}  // namespace OpenWindow

namespace OpenOptionsPage {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace OpenOptionsPage

namespace OpenSettingsSubpage {

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
    const base::Value& subpage_value = args[0];
    {
      auto* temp = subpage_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.subpage = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace OpenSettingsSubpage

namespace GetOSInfo {

Results::Info::Info()
: alternative_emulator(false),
tast(false) {}

Results::Info::~Info() = default;
Results::Info::Info(Info&& rhs) = default;
Results::Info& Results::Info::operator=(Info&& rhs) = default;
base::Value::Dict Results::Info::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("alternative_emulator", this->alternative_emulator);

  to_value_result.Set("tast", this->tast);


  return to_value_result;
}


base::Value::List Results::Create(const Info& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}
}  // namespace GetOSInfo

namespace GetPrefs {

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
    const base::Value& paths_value = args[0];
    {
      if (!paths_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(paths_value.GetList(), params.paths)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::Prefs::Prefs()
 {}

Results::Prefs::~Prefs() = default;
Results::Prefs::Prefs(Prefs&& rhs) = default;
Results::Prefs& Results::Prefs::operator=(Prefs&& rhs) = default;
base::Value::Dict Results::Prefs::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Prefs& prefs) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((prefs).ToValue());

  return create_results;
}
}  // namespace GetPrefs

namespace SetPrefs {

Params::Prefs::Prefs()
 {}

Params::Prefs::~Prefs() = default;
Params::Prefs::Prefs(Prefs&& rhs) = default;
Params::Prefs& Params::Prefs::operator=(Prefs&& rhs) = default;
Params::Prefs Params::Prefs::Clone() const {
  Prefs out;
  return out;
}

// static
bool Params::Prefs::Populate(
    const base::Value::Dict& dict, Prefs& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool Params::Prefs::Populate(
    const base::Value& value, Prefs& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Prefs> Params::Prefs::FromValue(const base::Value::Dict& value) {
  Prefs out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Prefs> Params::Prefs::FromValue(const base::Value& value) {
  Prefs out;
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
    const base::Value& prefs_value = args[0];
    {
      if (!prefs_value.is_dict()) {
        return absl::nullopt;
      }
      if (!Prefs::Populate(prefs_value.GetDict(), params.prefs)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetPrefs

//
// Events
//

namespace OnProcessOutput {

const char kEventName[] = "terminalPrivate.onProcessOutput";

base::Value::List Create(const std::string& id, const OutputType& type, const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(id);

  create_results.Append(terminal_private::ToString(type));

  create_results.Append(base::Value(data));

  return create_results;
}

}  // namespace OnProcessOutput

namespace OnPrefChanged {

const char kEventName[] = "terminalPrivate.onPrefChanged";

Prefs::Prefs()
 {}

Prefs::~Prefs() = default;
Prefs::Prefs(Prefs&& rhs) = default;
Prefs& Prefs::operator=(Prefs&& rhs) = default;
base::Value::Dict Prefs::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Create(const Prefs& prefs) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((prefs).ToValue());

  return create_results;
}

}  // namespace OnPrefChanged

}  // namespace terminal_private
}  // namespace api
}  // namespace extensions

