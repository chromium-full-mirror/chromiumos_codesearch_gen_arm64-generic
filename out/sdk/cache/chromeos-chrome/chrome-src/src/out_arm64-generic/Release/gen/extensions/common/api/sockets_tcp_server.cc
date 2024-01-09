// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/sockets_tcp_server.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/sockets_tcp_server.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace sockets_tcp_server {
//
// Types
//

SocketProperties::SocketProperties()
 {}

SocketProperties::~SocketProperties() = default;
SocketProperties::SocketProperties(SocketProperties&& rhs) noexcept = default;
SocketProperties& SocketProperties::operator=(SocketProperties&& rhs) noexcept = default;
SocketProperties SocketProperties::Clone() const {
  SocketProperties out;
  out.persistent = persistent;
  out.name = name;
  return out;
}

// static
bool SocketProperties::Populate(
    const base::Value::Dict& dict, SocketProperties& out) {
  const base::Value* persistent_value = dict.Find("persistent");
  if (persistent_value) {
    {
      auto temp = (*persistent_value).GetIfBool();
      if (!temp.has_value()) {
        out.persistent = std::nullopt;
        return false;
      }
      out.persistent = *temp;
    }
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  return true;
}

// static
bool SocketProperties::Populate(
    const base::Value& value, SocketProperties& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SocketProperties> SocketProperties::FromValue(const base::Value::Dict& value) {
  SocketProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SocketProperties> SocketProperties::FromValue(const base::Value& value) {
  SocketProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SocketProperties::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->persistent) {
    to_value_result.Set("persistent", *this->persistent);

  }
  if (this->name) {
    to_value_result.Set("name", *this->name);

  }

  return to_value_result;
}


CreateInfo::CreateInfo()
: socket_id(0) {}

CreateInfo::~CreateInfo() = default;
CreateInfo::CreateInfo(CreateInfo&& rhs) noexcept = default;
CreateInfo& CreateInfo::operator=(CreateInfo&& rhs) noexcept = default;
CreateInfo CreateInfo::Clone() const {
  CreateInfo out;
  out.socket_id = socket_id;
  return out;
}

// static
bool CreateInfo::Populate(
    const base::Value::Dict& dict, CreateInfo& out) {
  const base::Value* socket_id_value = dict.Find("socketId");
  if (!socket_id_value) {
    return false;
  }
  {
    auto temp = (*socket_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.socket_id = *temp;
  }

  return true;
}

// static
bool CreateInfo::Populate(
    const base::Value& value, CreateInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CreateInfo> CreateInfo::FromValue(const base::Value::Dict& value) {
  CreateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CreateInfo> CreateInfo::FromValue(const base::Value& value) {
  CreateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CreateInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketId", this->socket_id);


  return to_value_result;
}


SocketInfo::SocketInfo()
: socket_id(0),
persistent(false),
paused(false) {}

SocketInfo::~SocketInfo() = default;
SocketInfo::SocketInfo(SocketInfo&& rhs) noexcept = default;
SocketInfo& SocketInfo::operator=(SocketInfo&& rhs) noexcept = default;
SocketInfo SocketInfo::Clone() const {
  SocketInfo out;
  out.socket_id = socket_id;
  out.persistent = persistent;
  out.name = name;
  out.paused = paused;
  out.local_address = local_address;
  out.local_port = local_port;
  return out;
}

// static
bool SocketInfo::Populate(
    const base::Value::Dict& dict, SocketInfo& out) {
  const base::Value* socket_id_value = dict.Find("socketId");
  if (!socket_id_value) {
    return false;
  }
  {
    auto temp = (*socket_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.socket_id = *temp;
  }

  const base::Value* persistent_value = dict.Find("persistent");
  if (!persistent_value) {
    return false;
  }
  {
    auto temp = (*persistent_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.persistent = *temp;
  }

  const base::Value* name_value = dict.Find("name");
  if (name_value) {
    {
      auto* temp = (*name_value).GetIfString();
      if (!temp) {
        out.name = std::nullopt;
        return false;
      }
      out.name = *temp;
    }
  }

  const base::Value* paused_value = dict.Find("paused");
  if (!paused_value) {
    return false;
  }
  {
    auto temp = (*paused_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.paused = *temp;
  }

  const base::Value* local_address_value = dict.Find("localAddress");
  if (local_address_value) {
    {
      auto* temp = (*local_address_value).GetIfString();
      if (!temp) {
        out.local_address = std::nullopt;
        return false;
      }
      out.local_address = *temp;
    }
  }

  const base::Value* local_port_value = dict.Find("localPort");
  if (local_port_value) {
    {
      auto temp = (*local_port_value).GetIfInt();
      if (!temp.has_value()) {
        out.local_port = std::nullopt;
        return false;
      }
      out.local_port = *temp;
    }
  }

  return true;
}

// static
bool SocketInfo::Populate(
    const base::Value& value, SocketInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SocketInfo> SocketInfo::FromValue(const base::Value::Dict& value) {
  SocketInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SocketInfo> SocketInfo::FromValue(const base::Value& value) {
  SocketInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SocketInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketId", this->socket_id);

  to_value_result.Set("persistent", this->persistent);

  if (this->name) {
    to_value_result.Set("name", *this->name);

  }
  to_value_result.Set("paused", this->paused);

  if (this->local_address) {
    to_value_result.Set("localAddress", *this->local_address);

  }
  if (this->local_port) {
    to_value_result.Set("localPort", *this->local_port);

  }

  return to_value_result;
}


AcceptInfo::AcceptInfo()
: socket_id(0),
client_socket_id(0) {}

AcceptInfo::~AcceptInfo() = default;
AcceptInfo::AcceptInfo(AcceptInfo&& rhs) noexcept = default;
AcceptInfo& AcceptInfo::operator=(AcceptInfo&& rhs) noexcept = default;
AcceptInfo AcceptInfo::Clone() const {
  AcceptInfo out;
  out.socket_id = socket_id;
  out.client_socket_id = client_socket_id;
  return out;
}

// static
bool AcceptInfo::Populate(
    const base::Value::Dict& dict, AcceptInfo& out) {
  const base::Value* socket_id_value = dict.Find("socketId");
  if (!socket_id_value) {
    return false;
  }
  {
    auto temp = (*socket_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.socket_id = *temp;
  }

  const base::Value* client_socket_id_value = dict.Find("clientSocketId");
  if (!client_socket_id_value) {
    return false;
  }
  {
    auto temp = (*client_socket_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.client_socket_id = *temp;
  }

  return true;
}

// static
bool AcceptInfo::Populate(
    const base::Value& value, AcceptInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AcceptInfo> AcceptInfo::FromValue(const base::Value::Dict& value) {
  AcceptInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AcceptInfo> AcceptInfo::FromValue(const base::Value& value) {
  AcceptInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AcceptInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketId", this->socket_id);

  to_value_result.Set("clientSocketId", this->client_socket_id);


  return to_value_result;
}


AcceptErrorInfo::AcceptErrorInfo()
: socket_id(0),
result_code(0) {}

AcceptErrorInfo::~AcceptErrorInfo() = default;
AcceptErrorInfo::AcceptErrorInfo(AcceptErrorInfo&& rhs) noexcept = default;
AcceptErrorInfo& AcceptErrorInfo::operator=(AcceptErrorInfo&& rhs) noexcept = default;
AcceptErrorInfo AcceptErrorInfo::Clone() const {
  AcceptErrorInfo out;
  out.socket_id = socket_id;
  out.result_code = result_code;
  return out;
}

// static
bool AcceptErrorInfo::Populate(
    const base::Value::Dict& dict, AcceptErrorInfo& out) {
  const base::Value* socket_id_value = dict.Find("socketId");
  if (!socket_id_value) {
    return false;
  }
  {
    auto temp = (*socket_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.socket_id = *temp;
  }

  const base::Value* result_code_value = dict.Find("resultCode");
  if (!result_code_value) {
    return false;
  }
  {
    auto temp = (*result_code_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.result_code = *temp;
  }

  return true;
}

// static
bool AcceptErrorInfo::Populate(
    const base::Value& value, AcceptErrorInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AcceptErrorInfo> AcceptErrorInfo::FromValue(const base::Value::Dict& value) {
  AcceptErrorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AcceptErrorInfo> AcceptErrorInfo::FromValue(const base::Value& value) {
  AcceptErrorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AcceptErrorInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketId", this->socket_id);

  to_value_result.Set("resultCode", this->result_code);


  return to_value_result;
}



//
// Functions
//

namespace Create {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return std::nullopt;
      }
      else {
        SocketProperties temp;
        if (!SocketProperties::Populate(properties_value.GetDict(), temp))
          return std::nullopt;
        params.properties = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const CreateInfo& create_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((create_info).ToValue());

  return create_results;
}
}  // namespace Create

namespace Update {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& properties_value = args[1];
    {
      if (!properties_value.is_dict()) {
        return std::nullopt;
      }
      if (!SocketProperties::Populate(properties_value.GetDict(), params.properties)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Update

namespace SetPaused {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& paused_value = args[1];
    {
      auto temp = paused_value.GetIfBool();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.paused = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SetPaused

namespace Listen {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 3 || args.size() > 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& address_value = args[1];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.address = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& port_value = args[2];
    {
      auto temp = port_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.port = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& backlog_value = args[3];
    {
      auto temp = backlog_value.GetIfInt();
      if (!temp.has_value()) {
        params.backlog = std::nullopt;
        return std::nullopt;
      }
      params.backlog = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(int result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace Listen

namespace Disconnect {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Disconnect

namespace Close {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace Close

namespace GetInfo {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const SocketInfo& socket_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((socket_info).ToValue());

  return create_results;
}
}  // namespace GetInfo

namespace GetSockets {

base::Value::List Results::Create(const std::vector<SocketInfo>& socket_infos) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(socket_infos));

  return create_results;
}
}  // namespace GetSockets

//
// Events
//

namespace OnAccept {

const char kEventName[] = "sockets.tcpServer.onAccept";

base::Value::List Create(const AcceptInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnAccept

namespace OnAcceptError {

const char kEventName[] = "sockets.tcpServer.onAcceptError";

base::Value::List Create(const AcceptErrorInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnAcceptError

}  // namespace sockets_tcp_server
}  // namespace api
}  // namespace extensions

