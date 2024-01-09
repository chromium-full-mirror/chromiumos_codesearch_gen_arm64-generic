// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/bluetooth_socket.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/bluetooth_socket.h"

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
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace bluetooth_socket {
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
  out.buffer_size = buffer_size;
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

  const base::Value* buffer_size_value = dict.Find("bufferSize");
  if (buffer_size_value) {
    {
      auto temp = (*buffer_size_value).GetIfInt();
      if (!temp.has_value()) {
        out.buffer_size = std::nullopt;
        return false;
      }
      out.buffer_size = *temp;
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
  if (this->buffer_size) {
    to_value_result.Set("bufferSize", *this->buffer_size);

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


ListenOptions::ListenOptions()
 {}

ListenOptions::~ListenOptions() = default;
ListenOptions::ListenOptions(ListenOptions&& rhs) noexcept = default;
ListenOptions& ListenOptions::operator=(ListenOptions&& rhs) noexcept = default;
ListenOptions ListenOptions::Clone() const {
  ListenOptions out;
  out.channel = channel;
  out.psm = psm;
  out.backlog = backlog;
  return out;
}

// static
bool ListenOptions::Populate(
    const base::Value::Dict& dict, ListenOptions& out) {
  const base::Value* channel_value = dict.Find("channel");
  if (channel_value) {
    {
      auto temp = (*channel_value).GetIfInt();
      if (!temp.has_value()) {
        out.channel = std::nullopt;
        return false;
      }
      out.channel = *temp;
    }
  }

  const base::Value* psm_value = dict.Find("psm");
  if (psm_value) {
    {
      auto temp = (*psm_value).GetIfInt();
      if (!temp.has_value()) {
        out.psm = std::nullopt;
        return false;
      }
      out.psm = *temp;
    }
  }

  const base::Value* backlog_value = dict.Find("backlog");
  if (backlog_value) {
    {
      auto temp = (*backlog_value).GetIfInt();
      if (!temp.has_value()) {
        out.backlog = std::nullopt;
        return false;
      }
      out.backlog = *temp;
    }
  }

  return true;
}

// static
bool ListenOptions::Populate(
    const base::Value& value, ListenOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ListenOptions> ListenOptions::FromValue(const base::Value::Dict& value) {
  ListenOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ListenOptions> ListenOptions::FromValue(const base::Value& value) {
  ListenOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ListenOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->channel) {
    to_value_result.Set("channel", *this->channel);

  }
  if (this->psm) {
    to_value_result.Set("psm", *this->psm);

  }
  if (this->backlog) {
    to_value_result.Set("backlog", *this->backlog);

  }

  return to_value_result;
}


SocketInfo::SocketInfo()
: socket_id(0),
persistent(false),
paused(false),
connected(false) {}

SocketInfo::~SocketInfo() = default;
SocketInfo::SocketInfo(SocketInfo&& rhs) noexcept = default;
SocketInfo& SocketInfo::operator=(SocketInfo&& rhs) noexcept = default;
SocketInfo SocketInfo::Clone() const {
  SocketInfo out;
  out.socket_id = socket_id;
  out.persistent = persistent;
  out.name = name;
  out.buffer_size = buffer_size;
  out.paused = paused;
  out.connected = connected;
  out.address = address;
  out.uuid = uuid;
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

  const base::Value* buffer_size_value = dict.Find("bufferSize");
  if (buffer_size_value) {
    {
      auto temp = (*buffer_size_value).GetIfInt();
      if (!temp.has_value()) {
        out.buffer_size = std::nullopt;
        return false;
      }
      out.buffer_size = *temp;
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

  const base::Value* connected_value = dict.Find("connected");
  if (!connected_value) {
    return false;
  }
  {
    auto temp = (*connected_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.connected = *temp;
  }

  const base::Value* address_value = dict.Find("address");
  if (address_value) {
    {
      auto* temp = (*address_value).GetIfString();
      if (!temp) {
        out.address = std::nullopt;
        return false;
      }
      out.address = *temp;
    }
  }

  const base::Value* uuid_value = dict.Find("uuid");
  if (uuid_value) {
    {
      auto* temp = (*uuid_value).GetIfString();
      if (!temp) {
        out.uuid = std::nullopt;
        return false;
      }
      out.uuid = *temp;
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
  if (this->buffer_size) {
    to_value_result.Set("bufferSize", *this->buffer_size);

  }
  to_value_result.Set("paused", this->paused);

  to_value_result.Set("connected", this->connected);

  if (this->address) {
    to_value_result.Set("address", *this->address);

  }
  if (this->uuid) {
    to_value_result.Set("uuid", *this->uuid);

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


const char* ToString(AcceptError enum_param) {
  switch (enum_param) {
    case AcceptError::kSystemError:
      return "system_error";
    case AcceptError::kNotListening:
      return "not_listening";
    case AcceptError::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AcceptError ParseAcceptError(base::StringPiece enum_string) {
  if (enum_string == "system_error")
    return AcceptError::kSystemError;
  if (enum_string == "not_listening")
    return AcceptError::kNotListening;
  return AcceptError::kNone;
}

std::u16string GetAcceptErrorParseError(base::StringPiece enum_string) {
  return u"expected \"system_error\" or \"not_listening\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


AcceptErrorInfo::AcceptErrorInfo()
: socket_id(0),
error() {}

AcceptErrorInfo::~AcceptErrorInfo() = default;
AcceptErrorInfo::AcceptErrorInfo(AcceptErrorInfo&& rhs) noexcept = default;
AcceptErrorInfo& AcceptErrorInfo::operator=(AcceptErrorInfo&& rhs) noexcept = default;
AcceptErrorInfo AcceptErrorInfo::Clone() const {
  AcceptErrorInfo out;
  out.socket_id = socket_id;
  out.error_message = error_message;
  out.error = error;
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

  const base::Value* error_message_value = dict.Find("errorMessage");
  if (!error_message_value) {
    return false;
  }
  {
    auto* temp = (*error_message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.error_message = *temp;
  }

  const base::Value* error_value = dict.Find("error");
  if (!error_value) {
    return false;
  }
  {
    const std::string* accept_error_as_string = (*error_value).GetIfString();
    if (!accept_error_as_string) {
      return false;
    }
    out.error = ParseAcceptError(*accept_error_as_string);
    if (out.error == AcceptError()) {
      return false;
    }
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

  to_value_result.Set("errorMessage", this->error_message);

  to_value_result.Set("error", bluetooth_socket::ToString(this->error));


  return to_value_result;
}


ReceiveInfo::ReceiveInfo()
: socket_id(0) {}

ReceiveInfo::~ReceiveInfo() = default;
ReceiveInfo::ReceiveInfo(ReceiveInfo&& rhs) noexcept = default;
ReceiveInfo& ReceiveInfo::operator=(ReceiveInfo&& rhs) noexcept = default;
ReceiveInfo ReceiveInfo::Clone() const {
  ReceiveInfo out;
  out.socket_id = socket_id;
  out.data = data;
  return out;
}

// static
bool ReceiveInfo::Populate(
    const base::Value::Dict& dict, ReceiveInfo& out) {
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

  const base::Value* data_value = dict.Find("data");
  if (!data_value) {
    return false;
  }
  {
    if (!(*data_value).is_blob()) {
      return false;
    }
    else {
      out.data = (*data_value).GetBlob();
    }
  }

  return true;
}

// static
bool ReceiveInfo::Populate(
    const base::Value& value, ReceiveInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ReceiveInfo> ReceiveInfo::FromValue(const base::Value::Dict& value) {
  ReceiveInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReceiveInfo> ReceiveInfo::FromValue(const base::Value& value) {
  ReceiveInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ReceiveInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketId", this->socket_id);

  to_value_result.Set("data", base::Value(this->data));


  return to_value_result;
}


const char* ToString(ReceiveError enum_param) {
  switch (enum_param) {
    case ReceiveError::kDisconnected:
      return "disconnected";
    case ReceiveError::kSystemError:
      return "system_error";
    case ReceiveError::kNotConnected:
      return "not_connected";
    case ReceiveError::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ReceiveError ParseReceiveError(base::StringPiece enum_string) {
  if (enum_string == "disconnected")
    return ReceiveError::kDisconnected;
  if (enum_string == "system_error")
    return ReceiveError::kSystemError;
  if (enum_string == "not_connected")
    return ReceiveError::kNotConnected;
  return ReceiveError::kNone;
}

std::u16string GetReceiveErrorParseError(base::StringPiece enum_string) {
  return u"expected \"disconnected\" or \"system_error\" or \"not_connected\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ReceiveErrorInfo::ReceiveErrorInfo()
: socket_id(0),
error() {}

ReceiveErrorInfo::~ReceiveErrorInfo() = default;
ReceiveErrorInfo::ReceiveErrorInfo(ReceiveErrorInfo&& rhs) noexcept = default;
ReceiveErrorInfo& ReceiveErrorInfo::operator=(ReceiveErrorInfo&& rhs) noexcept = default;
ReceiveErrorInfo ReceiveErrorInfo::Clone() const {
  ReceiveErrorInfo out;
  out.socket_id = socket_id;
  out.error_message = error_message;
  out.error = error;
  return out;
}

// static
bool ReceiveErrorInfo::Populate(
    const base::Value::Dict& dict, ReceiveErrorInfo& out) {
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

  const base::Value* error_message_value = dict.Find("errorMessage");
  if (!error_message_value) {
    return false;
  }
  {
    auto* temp = (*error_message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.error_message = *temp;
  }

  const base::Value* error_value = dict.Find("error");
  if (!error_value) {
    return false;
  }
  {
    const std::string* receive_error_as_string = (*error_value).GetIfString();
    if (!receive_error_as_string) {
      return false;
    }
    out.error = ParseReceiveError(*receive_error_as_string);
    if (out.error == ReceiveError()) {
      return false;
    }
  }

  return true;
}

// static
bool ReceiveErrorInfo::Populate(
    const base::Value& value, ReceiveErrorInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ReceiveErrorInfo> ReceiveErrorInfo::FromValue(const base::Value::Dict& value) {
  ReceiveErrorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReceiveErrorInfo> ReceiveErrorInfo::FromValue(const base::Value& value) {
  ReceiveErrorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ReceiveErrorInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketId", this->socket_id);

  to_value_result.Set("errorMessage", this->error_message);

  to_value_result.Set("error", bluetooth_socket::ToString(this->error));


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

namespace ListenUsingRfcomm {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
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
    const base::Value& uuid_value = args[1];
    {
      auto* temp = uuid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.uuid = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& options_value = args[2];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        ListenOptions temp;
        if (!ListenOptions::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ListenUsingRfcomm

namespace ListenUsingL2cap {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
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
    const base::Value& uuid_value = args[1];
    {
      auto* temp = uuid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.uuid = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& options_value = args[2];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      else {
        ListenOptions temp;
        if (!ListenOptions::Populate(options_value.GetDict(), temp))
          return std::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace ListenUsingL2cap

namespace Connect {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
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
    const base::Value& uuid_value = args[2];
    {
      auto* temp = uuid_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.uuid = *temp;
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
}  // namespace Connect

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

namespace Send {

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
    const base::Value& data_value = args[1];
    {
      if (!data_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(int bytes_sent) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(bytes_sent);

  return create_results;
}
}  // namespace Send

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

base::Value::List Results::Create(const std::vector<SocketInfo>& sockets) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(sockets));

  return create_results;
}
}  // namespace GetSockets

//
// Events
//

namespace OnAccept {

const char kEventName[] = "bluetoothSocket.onAccept";

base::Value::List Create(const AcceptInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnAccept

namespace OnAcceptError {

const char kEventName[] = "bluetoothSocket.onAcceptError";

base::Value::List Create(const AcceptErrorInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnAcceptError

namespace OnReceive {

const char kEventName[] = "bluetoothSocket.onReceive";

base::Value::List Create(const ReceiveInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnReceive

namespace OnReceiveError {

const char kEventName[] = "bluetoothSocket.onReceiveError";

base::Value::List Create(const ReceiveErrorInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnReceiveError

}  // namespace bluetooth_socket
}  // namespace api
}  // namespace extensions

