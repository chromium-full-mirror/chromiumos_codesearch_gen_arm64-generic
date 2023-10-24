// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/sockets_udp.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/sockets_udp.h"

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
namespace sockets_udp {
//
// Types
//

SocketProperties::SocketProperties()
 {}

SocketProperties::~SocketProperties() = default;
SocketProperties::SocketProperties(SocketProperties&& rhs) = default;
SocketProperties& SocketProperties::operator=(SocketProperties&& rhs) = default;
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
        out.persistent = absl::nullopt;
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
        out.name = absl::nullopt;
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
        out.buffer_size = absl::nullopt;
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
std::unique_ptr<SocketProperties> SocketProperties::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SocketProperties>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<SocketProperties> SocketProperties::FromValue(const base::Value::Dict& value) {
  SocketProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SocketProperties> SocketProperties::FromValue(const base::Value& value) {
  SocketProperties out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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
CreateInfo::CreateInfo(CreateInfo&& rhs) = default;
CreateInfo& CreateInfo::operator=(CreateInfo&& rhs) = default;
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
std::unique_ptr<CreateInfo> CreateInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CreateInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<CreateInfo> CreateInfo::FromValue(const base::Value::Dict& value) {
  CreateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CreateInfo> CreateInfo::FromValue(const base::Value& value) {
  CreateInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CreateInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketId", this->socket_id);


  return to_value_result;
}


const char* ToString(DnsQueryType enum_param) {
  switch (enum_param) {
    case DnsQueryType::kAny:
      return "any";
    case DnsQueryType::kIpv4:
      return "ipv4";
    case DnsQueryType::kIpv6:
      return "ipv6";
    case DnsQueryType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DnsQueryType ParseDnsQueryType(base::StringPiece enum_string) {
  if (enum_string == "any")
    return DnsQueryType::kAny;
  if (enum_string == "ipv4")
    return DnsQueryType::kIpv4;
  if (enum_string == "ipv6")
    return DnsQueryType::kIpv6;
  return DnsQueryType::kNone;
}

std::u16string GetDnsQueryTypeParseError(base::StringPiece enum_string) {
  return u"expected \"any\" or \"ipv4\" or \"ipv6\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SendInfo::SendInfo()
: result_code(0) {}

SendInfo::~SendInfo() = default;
SendInfo::SendInfo(SendInfo&& rhs) = default;
SendInfo& SendInfo::operator=(SendInfo&& rhs) = default;
SendInfo SendInfo::Clone() const {
  SendInfo out;
  out.result_code = result_code;
  out.bytes_sent = bytes_sent;
  return out;
}

// static
bool SendInfo::Populate(
    const base::Value::Dict& dict, SendInfo& out) {
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

  const base::Value* bytes_sent_value = dict.Find("bytesSent");
  if (bytes_sent_value) {
    {
      auto temp = (*bytes_sent_value).GetIfInt();
      if (!temp.has_value()) {
        out.bytes_sent = absl::nullopt;
        return false;
      }
      out.bytes_sent = *temp;
    }
  }

  return true;
}

// static
bool SendInfo::Populate(
    const base::Value& value, SendInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SendInfo> SendInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SendInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<SendInfo> SendInfo::FromValue(const base::Value::Dict& value) {
  SendInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SendInfo> SendInfo::FromValue(const base::Value& value) {
  SendInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SendInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("resultCode", this->result_code);

  if (this->bytes_sent) {
    to_value_result.Set("bytesSent", *this->bytes_sent);

  }

  return to_value_result;
}


SocketInfo::SocketInfo()
: socket_id(0),
persistent(false),
paused(false) {}

SocketInfo::~SocketInfo() = default;
SocketInfo::SocketInfo(SocketInfo&& rhs) = default;
SocketInfo& SocketInfo::operator=(SocketInfo&& rhs) = default;
SocketInfo SocketInfo::Clone() const {
  SocketInfo out;
  out.socket_id = socket_id;
  out.persistent = persistent;
  out.name = name;
  out.buffer_size = buffer_size;
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
        out.name = absl::nullopt;
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
        out.buffer_size = absl::nullopt;
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

  const base::Value* local_address_value = dict.Find("localAddress");
  if (local_address_value) {
    {
      auto* temp = (*local_address_value).GetIfString();
      if (!temp) {
        out.local_address = absl::nullopt;
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
        out.local_port = absl::nullopt;
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
std::unique_ptr<SocketInfo> SocketInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SocketInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<SocketInfo> SocketInfo::FromValue(const base::Value::Dict& value) {
  SocketInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SocketInfo> SocketInfo::FromValue(const base::Value& value) {
  SocketInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
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

  if (this->local_address) {
    to_value_result.Set("localAddress", *this->local_address);

  }
  if (this->local_port) {
    to_value_result.Set("localPort", *this->local_port);

  }

  return to_value_result;
}


ReceiveInfo::ReceiveInfo()
: socket_id(0),
remote_port(0) {}

ReceiveInfo::~ReceiveInfo() = default;
ReceiveInfo::ReceiveInfo(ReceiveInfo&& rhs) = default;
ReceiveInfo& ReceiveInfo::operator=(ReceiveInfo&& rhs) = default;
ReceiveInfo ReceiveInfo::Clone() const {
  ReceiveInfo out;
  out.socket_id = socket_id;
  out.data = data;
  out.remote_address = remote_address;
  out.remote_port = remote_port;
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

  const base::Value* remote_address_value = dict.Find("remoteAddress");
  if (!remote_address_value) {
    return false;
  }
  {
    auto* temp = (*remote_address_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.remote_address = *temp;
  }

  const base::Value* remote_port_value = dict.Find("remotePort");
  if (!remote_port_value) {
    return false;
  }
  {
    auto temp = (*remote_port_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.remote_port = *temp;
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
std::unique_ptr<ReceiveInfo> ReceiveInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReceiveInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<ReceiveInfo> ReceiveInfo::FromValue(const base::Value::Dict& value) {
  ReceiveInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReceiveInfo> ReceiveInfo::FromValue(const base::Value& value) {
  ReceiveInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReceiveInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("socketId", this->socket_id);

  to_value_result.Set("data", base::Value(this->data));

  to_value_result.Set("remoteAddress", this->remote_address);

  to_value_result.Set("remotePort", this->remote_port);


  return to_value_result;
}


ReceiveErrorInfo::ReceiveErrorInfo()
: socket_id(0),
result_code(0) {}

ReceiveErrorInfo::~ReceiveErrorInfo() = default;
ReceiveErrorInfo::ReceiveErrorInfo(ReceiveErrorInfo&& rhs) = default;
ReceiveErrorInfo& ReceiveErrorInfo::operator=(ReceiveErrorInfo&& rhs) = default;
ReceiveErrorInfo ReceiveErrorInfo::Clone() const {
  ReceiveErrorInfo out;
  out.socket_id = socket_id;
  out.result_code = result_code;
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
bool ReceiveErrorInfo::Populate(
    const base::Value& value, ReceiveErrorInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReceiveErrorInfo> ReceiveErrorInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReceiveErrorInfo>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<ReceiveErrorInfo> ReceiveErrorInfo::FromValue(const base::Value::Dict& value) {
  ReceiveErrorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReceiveErrorInfo> ReceiveErrorInfo::FromValue(const base::Value& value) {
  ReceiveErrorInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReceiveErrorInfo::ToValue() const {
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
    const base::Value& properties_value = args[0];
    {
      if (!properties_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        SocketProperties temp;
        if (!SocketProperties::Populate(properties_value.GetDict(), temp))
          return absl::nullopt;
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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& properties_value = args[1];
    {
      if (!properties_value.is_dict()) {
        return absl::nullopt;
      }
      if (!SocketProperties::Populate(properties_value.GetDict(), params.properties)) {
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
}  // namespace Update

namespace SetPaused {

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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& paused_value = args[1];
    {
      auto temp = paused_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.paused = *temp;
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
}  // namespace SetPaused

namespace Bind {

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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& address_value = args[1];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.address = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& port_value = args[2];
    {
      auto temp = port_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.port = *temp;
    }
  }
  else {
    return absl::nullopt;
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

namespace Send {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 4 || args.size() > 5) {
    return absl::nullopt;
  }
  Params params;
  params.dns_query_type = DnsQueryType();

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& data_value = args[1];
    {
      if (!data_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.data = data_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& address_value = args[2];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.address = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& port_value = args[3];
    {
      auto temp = port_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.port = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& dns_query_type_value = args[4];
    {
      const std::string* dns_query_type_as_string = dns_query_type_value.GetIfString();
      if (!dns_query_type_as_string) {
        return absl::nullopt;
      }
      params.dns_query_type = ParseDnsQueryType(*dns_query_type_as_string);
      if (params.dns_query_type == DnsQueryType()) {
        return absl::nullopt;
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const SendInfo& send_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((send_info).ToValue());

  return create_results;
}
}  // namespace Send

namespace Close {

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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
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
}  // namespace Close

namespace GetInfo {

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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
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

namespace JoinGroup {

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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& address_value = args[1];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.address = *temp;
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& address_value = args[1];
    {
      auto* temp = address_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.address = *temp;
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& ttl_value = args[1];
    {
      auto temp = ttl_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.ttl = *temp;
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& enabled_value = args[1];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return absl::nullopt;
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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
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

namespace SetBroadcast {

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
    const base::Value& socket_id_value = args[0];
    {
      auto temp = socket_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.socket_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& enabled_value = args[1];
    {
      auto temp = enabled_value.GetIfBool();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.enabled = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(int result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SetBroadcast

//
// Events
//

namespace OnReceive {

const char kEventName[] = "sockets.udp.onReceive";

base::Value::List Create(const ReceiveInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnReceive

namespace OnReceiveError {

const char kEventName[] = "sockets.udp.onReceiveError";

base::Value::List Create(const ReceiveErrorInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnReceiveError

}  // namespace sockets_udp
}  // namespace api
}  // namespace extensions

