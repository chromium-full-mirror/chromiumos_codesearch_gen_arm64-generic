// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/socket.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/socket.h"

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

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace socket {
//
// Types
//

const char* ToString(SocketType enum_param) {
  switch (enum_param) {
    case SOCKET_TYPE_TCP:
      return "tcp";
    case SOCKET_TYPE_UDP:
      return "udp";
    case SOCKET_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SocketType ParseSocketType(const std::string& enum_string) {
  if (enum_string == "tcp")
    return SOCKET_TYPE_TCP;
  if (enum_string == "udp")
    return SOCKET_TYPE_UDP;
  return SOCKET_TYPE_NONE;
}


CreateOptions::CreateOptions()
 {}

CreateOptions::~CreateOptions() = default;
CreateOptions::CreateOptions(CreateOptions&& rhs) = default;
CreateOptions& CreateOptions::operator=(CreateOptions&& rhs) = default;
// static
bool CreateOptions::Populate(
    const base::Value& value, CreateOptions* out) {
  if (!value.is_dict()) {
    return false;
  }
  return true;
}

// static
std::unique_ptr<CreateOptions> CreateOptions::FromValue(const base::Value& value) {
  auto out = std::make_unique<CreateOptions>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict CreateOptions::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


CreateInfo::CreateInfo()
: socket_id(0) {}

CreateInfo::~CreateInfo() = default;
CreateInfo::CreateInfo(CreateInfo&& rhs) = default;
CreateInfo& CreateInfo::operator=(CreateInfo&& rhs) = default;
// static
bool CreateInfo::Populate(
    const base::Value& value, CreateInfo* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* socket_id_value = dict.Find("socketId");
  if (!socket_id_value) {
    return false;
  }
  {
    auto temp = (*socket_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->socket_id = *temp;
  }

  return true;
}

// static
std::unique_ptr<CreateInfo> CreateInfo::FromValue(const base::Value& value) {
  auto out = std::make_unique<CreateInfo>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict CreateInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketId", this->socket_id);


  return to_value_result;
}


AcceptInfo::AcceptInfo()
: result_code(0) {}

AcceptInfo::~AcceptInfo() = default;
AcceptInfo::AcceptInfo(AcceptInfo&& rhs) = default;
AcceptInfo& AcceptInfo::operator=(AcceptInfo&& rhs) = default;
// static
bool AcceptInfo::Populate(
    const base::Value& value, AcceptInfo* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_code_value = dict.Find("resultCode");
  if (!result_code_value) {
    return false;
  }
  {
    auto temp = (*result_code_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->result_code = *temp;
  }

  const base::Value* socket_id_value = dict.Find("socketId");
  if (socket_id_value) {
    {
      auto temp = (*socket_id_value).GetIfInt();
      if (!temp.has_value()) {
        out->socket_id = absl::nullopt;
        return false;
      }
      out->socket_id = *temp;
    }
  }

  return true;
}

// static
std::unique_ptr<AcceptInfo> AcceptInfo::FromValue(const base::Value& value) {
  auto out = std::make_unique<AcceptInfo>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict AcceptInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("resultCode", this->result_code);

  if (this->socket_id) {
    to_value_result.Set("socketId", *this->socket_id);

  }

  return to_value_result;
}


ReadInfo::ReadInfo()
: result_code(0) {}

ReadInfo::~ReadInfo() = default;
ReadInfo::ReadInfo(ReadInfo&& rhs) = default;
ReadInfo& ReadInfo::operator=(ReadInfo&& rhs) = default;
// static
bool ReadInfo::Populate(
    const base::Value& value, ReadInfo* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_code_value = dict.Find("resultCode");
  if (!result_code_value) {
    return false;
  }
  {
    auto temp = (*result_code_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->result_code = *temp;
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
      out->data = (*data_value).GetBlob();
    }
  }

  return true;
}

// static
std::unique_ptr<ReadInfo> ReadInfo::FromValue(const base::Value& value) {
  auto out = std::make_unique<ReadInfo>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict ReadInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("resultCode", this->result_code);

  to_value_result.Set("data", base::Value(this->data));


  return to_value_result;
}


WriteInfo::WriteInfo()
: bytes_written(0) {}

WriteInfo::~WriteInfo() = default;
WriteInfo::WriteInfo(WriteInfo&& rhs) = default;
WriteInfo& WriteInfo::operator=(WriteInfo&& rhs) = default;
// static
bool WriteInfo::Populate(
    const base::Value& value, WriteInfo* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* bytes_written_value = dict.Find("bytesWritten");
  if (!bytes_written_value) {
    return false;
  }
  {
    auto temp = (*bytes_written_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->bytes_written = *temp;
  }

  return true;
}

// static
std::unique_ptr<WriteInfo> WriteInfo::FromValue(const base::Value& value) {
  auto out = std::make_unique<WriteInfo>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict WriteInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("bytesWritten", this->bytes_written);


  return to_value_result;
}


RecvFromInfo::RecvFromInfo()
: result_code(0),
port(0) {}

RecvFromInfo::~RecvFromInfo() = default;
RecvFromInfo::RecvFromInfo(RecvFromInfo&& rhs) = default;
RecvFromInfo& RecvFromInfo::operator=(RecvFromInfo&& rhs) = default;
// static
bool RecvFromInfo::Populate(
    const base::Value& value, RecvFromInfo* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* result_code_value = dict.Find("resultCode");
  if (!result_code_value) {
    return false;
  }
  {
    auto temp = (*result_code_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->result_code = *temp;
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
      out->data = (*data_value).GetBlob();
    }
  }

  const base::Value* address_value = dict.Find("address");
  if (!address_value) {
    return false;
  }
  {
    auto* temp = (*address_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->address = *temp;
  }

  const base::Value* port_value = dict.Find("port");
  if (!port_value) {
    return false;
  }
  {
    auto temp = (*port_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->port = *temp;
  }

  return true;
}

// static
std::unique_ptr<RecvFromInfo> RecvFromInfo::FromValue(const base::Value& value) {
  auto out = std::make_unique<RecvFromInfo>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict RecvFromInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("resultCode", this->result_code);

  to_value_result.Set("data", base::Value(this->data));

  to_value_result.Set("address", this->address);

  to_value_result.Set("port", this->port);


  return to_value_result;
}


SocketInfo::SocketInfo()
: socket_type(SOCKET_TYPE_NONE),
connected(false) {}

SocketInfo::~SocketInfo() = default;
SocketInfo::SocketInfo(SocketInfo&& rhs) = default;
SocketInfo& SocketInfo::operator=(SocketInfo&& rhs) = default;
// static
bool SocketInfo::Populate(
    const base::Value& value, SocketInfo* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* socket_type_value = dict.Find("socketType");
  if (!socket_type_value) {
    return false;
  }
  {
    const std::string* socket_type_as_string = (*socket_type_value).GetIfString();
    if (!socket_type_as_string) {
      return false;
    }
    out->socket_type = ParseSocketType(*socket_type_as_string);
    if (out->socket_type == SOCKET_TYPE_NONE) {
      return false;
    }
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
    out->connected = *temp;
  }

  const base::Value* peer_address_value = dict.Find("peerAddress");
  if (peer_address_value) {
    {
      auto* temp = (*peer_address_value).GetIfString();
      if (!temp) {
        out->peer_address = absl::nullopt;
        return false;
      }
      out->peer_address = *temp;
    }
  }

  const base::Value* peer_port_value = dict.Find("peerPort");
  if (peer_port_value) {
    {
      auto temp = (*peer_port_value).GetIfInt();
      if (!temp.has_value()) {
        out->peer_port = absl::nullopt;
        return false;
      }
      out->peer_port = *temp;
    }
  }

  const base::Value* local_address_value = dict.Find("localAddress");
  if (local_address_value) {
    {
      auto* temp = (*local_address_value).GetIfString();
      if (!temp) {
        out->local_address = absl::nullopt;
        return false;
      }
      out->local_address = *temp;
    }
  }

  const base::Value* local_port_value = dict.Find("localPort");
  if (local_port_value) {
    {
      auto temp = (*local_port_value).GetIfInt();
      if (!temp.has_value()) {
        out->local_port = absl::nullopt;
        return false;
      }
      out->local_port = *temp;
    }
  }

  return true;
}

// static
std::unique_ptr<SocketInfo> SocketInfo::FromValue(const base::Value& value) {
  auto out = std::make_unique<SocketInfo>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict SocketInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketType", socket::ToString(this->socket_type));

  to_value_result.Set("connected", this->connected);

  if (this->peer_address) {
    to_value_result.Set("peerAddress", *this->peer_address);

  }
  if (this->peer_port) {
    to_value_result.Set("peerPort", *this->peer_port);

  }
  if (this->local_address) {
    to_value_result.Set("localAddress", *this->local_address);

  }
  if (this->local_port) {
    to_value_result.Set("localPort", *this->local_port);

  }

  return to_value_result;
}


NetworkInterface::NetworkInterface()
: prefix_length(0) {}

NetworkInterface::~NetworkInterface() = default;
NetworkInterface::NetworkInterface(NetworkInterface&& rhs) = default;
NetworkInterface& NetworkInterface::operator=(NetworkInterface&& rhs) = default;
// static
bool NetworkInterface::Populate(
    const base::Value& value, NetworkInterface* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* name_value = dict.Find("name");
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->name = *temp;
  }

  const base::Value* address_value = dict.Find("address");
  if (!address_value) {
    return false;
  }
  {
    auto* temp = (*address_value).GetIfString();
    if (!temp) {
      return false;
    }
    out->address = *temp;
  }

  const base::Value* prefix_length_value = dict.Find("prefixLength");
  if (!prefix_length_value) {
    return false;
  }
  {
    auto temp = (*prefix_length_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out->prefix_length = *temp;
  }

  return true;
}

// static
std::unique_ptr<NetworkInterface> NetworkInterface::FromValue(const base::Value& value) {
  auto out = std::make_unique<NetworkInterface>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict NetworkInterface::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("name", this->name);

  to_value_result.Set("address", this->address);

  to_value_result.Set("prefixLength", this->prefix_length);


  return to_value_result;
}


TLSVersionConstraints::TLSVersionConstraints()
 {}

TLSVersionConstraints::~TLSVersionConstraints() = default;
TLSVersionConstraints::TLSVersionConstraints(TLSVersionConstraints&& rhs) = default;
TLSVersionConstraints& TLSVersionConstraints::operator=(TLSVersionConstraints&& rhs) = default;
// static
bool TLSVersionConstraints::Populate(
    const base::Value& value, TLSVersionConstraints* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* min_value = dict.Find("min");
  if (min_value) {
    {
      auto* temp = (*min_value).GetIfString();
      if (!temp) {
        out->min = absl::nullopt;
        return false;
      }
      out->min = *temp;
    }
  }

  const base::Value* max_value = dict.Find("max");
  if (max_value) {
    {
      auto* temp = (*max_value).GetIfString();
      if (!temp) {
        out->max = absl::nullopt;
        return false;
      }
      out->max = *temp;
    }
  }

  return true;
}

// static
std::unique_ptr<TLSVersionConstraints> TLSVersionConstraints::FromValue(const base::Value& value) {
  auto out = std::make_unique<TLSVersionConstraints>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict TLSVersionConstraints::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->min) {
    to_value_result.Set("min", *this->min);

  }
  if (this->max) {
    to_value_result.Set("max", *this->max);

  }

  return to_value_result;
}


SecureOptions::SecureOptions()
 {}

SecureOptions::~SecureOptions() = default;
SecureOptions::SecureOptions(SecureOptions&& rhs) = default;
SecureOptions& SecureOptions::operator=(SecureOptions&& rhs) = default;
// static
bool SecureOptions::Populate(
    const base::Value& value, SecureOptions* out) {
  if (!value.is_dict()) {
    return false;
  }
  const base::Value::Dict& dict = value.GetDict();
  const base::Value* tls_version_value = dict.Find("tlsVersion");
  if (tls_version_value) {
    {
      if (!(*tls_version_value).is_dict()) {
        return false;
      }
      else {
        TLSVersionConstraints temp;
        if (!TLSVersionConstraints::Populate((*tls_version_value), &temp))
          return false;
        out->tls_version = std::move(temp);
      }
    }
  }

  return true;
}

// static
std::unique_ptr<SecureOptions> SecureOptions::FromValue(const base::Value& value) {
  auto out = std::make_unique<SecureOptions>();
  bool result = Populate(value, out.get());
  if (!result)
    return nullptr;
  return out;
}

base::Value::Dict SecureOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->tls_version) {
    to_value_result.Set("tlsVersion", (this->tls_version)->ToValue());

  }

  return to_value_result;
}



//
// Functions
//

namespace Create {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& type_value = args[0];
    {
      const std::string* socket_type_as_string = type_value.GetIfString();
      if (!socket_type_as_string) {
        return std::unique_ptr<Params>();
      }
      params->type = ParseSocketType(*socket_type_as_string);
      if (params->type == SOCKET_TYPE_NONE) {
        return std::unique_ptr<Params>();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      else {
        CreateOptions temp;
        if (!CreateOptions::Populate(options_value, &temp))
          return std::unique_ptr<Params>();
        params->options = std::move(temp);
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

namespace Destroy {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


}  // namespace Destroy

namespace Connect {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& hostname_value = args[1];
    {
      auto* temp = hostname_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->hostname = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& port_value = args[2];
    {
      auto temp = port_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->port = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(int result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace Connect

namespace Bind {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 3) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& address_value = args[1];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->address = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& port_value = args[2];
    {
      auto temp = port_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->port = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(int result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace Bind

namespace Disconnect {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


}  // namespace Disconnect

namespace Read {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& buffer_size_value = args[1];
    {
      auto temp = buffer_size_value.GetIfInt();
      if (!temp.has_value()) {
        params->buffer_size = absl::nullopt;
        return std::unique_ptr<Params>();
      }
      params->buffer_size = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const ReadInfo& read_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((read_info).ToValue());

  return create_results;
}
}  // namespace Read

namespace Write {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& data_value = args[1];
    {
      if (!data_value.is_blob()) {
        return std::unique_ptr<Params>();
      }
      else {
        params->data = data_value.GetBlob();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(const WriteInfo& write_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((write_info).ToValue());

  return create_results;
}
}  // namespace Write

namespace RecvFrom {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& buffer_size_value = args[1];
    {
      auto temp = buffer_size_value.GetIfInt();
      if (!temp.has_value()) {
        params->buffer_size = absl::nullopt;
        return std::unique_ptr<Params>();
      }
      params->buffer_size = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(const RecvFromInfo& recv_from_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((recv_from_info).ToValue());

  return create_results;
}
}  // namespace RecvFrom

namespace SendTo {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& data_value = args[1];
    {
      if (!data_value.is_blob()) {
        return std::unique_ptr<Params>();
      }
      else {
        params->data = data_value.GetBlob();
      }
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& address_value = args[2];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->address = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& port_value = args[3];
    {
      auto temp = port_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->port = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(const WriteInfo& write_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((write_info).ToValue());

  return create_results;
}
}  // namespace SendTo

namespace Listen {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 3 || args.size() > 4) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& address_value = args[1];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->address = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& port_value = args[2];
    {
      auto temp = port_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->port = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& backlog_value = args[3];
    {
      auto temp = backlog_value.GetIfInt();
      if (!temp.has_value()) {
        params->backlog = absl::nullopt;
        return std::unique_ptr<Params>();
      }
      params->backlog = *temp;
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

namespace Accept {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(const AcceptInfo& accept_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((accept_info).ToValue());

  return create_results;
}
}  // namespace Accept

namespace SetKeepAlive {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 2 || args.size() > 3) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& enable_value = args[1];
    {
      auto temp = enable_value.GetIfBool();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->enable = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& delay_value = args[2];
    {
      auto temp = delay_value.GetIfInt();
      if (!temp.has_value()) {
        params->delay = absl::nullopt;
        return std::unique_ptr<Params>();
      }
      params->delay = *temp;
    }
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SetKeepAlive

namespace SetNoDelay {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& no_delay_value = args[1];
    {
      auto temp = no_delay_value.GetIfBool();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->no_delay = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SetNoDelay

namespace GetInfo {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(const SocketInfo& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((result).ToValue());

  return create_results;
}
}  // namespace GetInfo

namespace GetNetworkList {

base::Value::List Results::Create(const std::vector<NetworkInterface>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetNetworkList

namespace JoinGroup {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& address_value = args[1];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->address = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(int result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace JoinGroup

namespace LeaveGroup {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& address_value = args[1];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return std::unique_ptr<Params>();
      }
      params->address = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(int result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace LeaveGroup

namespace SetMulticastTimeToLive {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& ttl_value = args[1];
    {
      auto temp = ttl_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->ttl = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(int result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SetMulticastTimeToLive

namespace SetMulticastLoopbackMode {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& enabled_value = args[1];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->enabled = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(int result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SetMulticastLoopbackMode

namespace GetJoinedGroups {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  return params;
}


base::Value::List Results::Create(const std::vector<std::string>& groups) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(groups));

  return create_results;
}
}  // namespace GetJoinedGroups

namespace Secure {

Params::Params() = default;
Params::~Params() = default;

// static
std::unique_ptr<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 2) {
    return nullptr;
  }
  std::unique_ptr<Params> params(new Params());

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::unique_ptr<Params>();
      }
      params->socket_id = *temp;
    }
  }
  else {
    return std::unique_ptr<Params>();
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return std::unique_ptr<Params>();
      }
      else {
        SecureOptions temp;
        if (!SecureOptions::Populate(options_value, &temp))
          return std::unique_ptr<Params>();
        params->options = std::move(temp);
      }
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
}  // namespace Secure

}  // namespace socket
}  // namespace api
}  // namespace extensions

