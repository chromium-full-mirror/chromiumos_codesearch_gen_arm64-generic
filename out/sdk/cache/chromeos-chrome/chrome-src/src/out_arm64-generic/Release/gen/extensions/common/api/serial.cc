// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/serial.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/serial.h"

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
namespace serial {
//
// Types
//

DeviceInfo::DeviceInfo()
 {}

DeviceInfo::~DeviceInfo() = default;
DeviceInfo::DeviceInfo(DeviceInfo&& rhs) = default;
DeviceInfo& DeviceInfo::operator=(DeviceInfo&& rhs) = default;
DeviceInfo DeviceInfo::Clone() const {
  DeviceInfo out;
  out.path = path;
  out.vendor_id = vendor_id;
  out.product_id = product_id;
  out.display_name = display_name;
  return out;
}

// static
bool DeviceInfo::Populate(
    const base::Value::Dict& dict, DeviceInfo& out) {
  const base::Value* path_value = dict.Find("path");
  if (!path_value) {
    return false;
  }
  {
    auto* temp = (*path_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.path = *temp;
  }

  const base::Value* vendor_id_value = dict.Find("vendorId");
  if (vendor_id_value) {
    {
      auto temp = (*vendor_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.vendor_id = absl::nullopt;
        return false;
      }
      out.vendor_id = *temp;
    }
  }

  const base::Value* product_id_value = dict.Find("productId");
  if (product_id_value) {
    {
      auto temp = (*product_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.product_id = absl::nullopt;
        return false;
      }
      out.product_id = *temp;
    }
  }

  const base::Value* display_name_value = dict.Find("displayName");
  if (display_name_value) {
    {
      auto* temp = (*display_name_value).GetIfString();
      if (!temp) {
        out.display_name = absl::nullopt;
        return false;
      }
      out.display_name = *temp;
    }
  }

  return true;
}

// static
bool DeviceInfo::Populate(
    const base::Value& value, DeviceInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DeviceInfo> DeviceInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeviceInfo>();
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
absl::optional<DeviceInfo> DeviceInfo::FromValue(const base::Value::Dict& value) {
  DeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeviceInfo> DeviceInfo::FromValue(const base::Value& value) {
  DeviceInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DeviceInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("path", this->path);

  if (this->vendor_id) {
    to_value_result.Set("vendorId", *this->vendor_id);

  }
  if (this->product_id) {
    to_value_result.Set("productId", *this->product_id);

  }
  if (this->display_name) {
    to_value_result.Set("displayName", *this->display_name);

  }

  return to_value_result;
}


const char* ToString(DataBits enum_param) {
  switch (enum_param) {
    case DataBits::kSeven:
      return "seven";
    case DataBits::kEight:
      return "eight";
    case DataBits::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DataBits ParseDataBits(base::StringPiece enum_string) {
  if (enum_string == "seven")
    return DataBits::kSeven;
  if (enum_string == "eight")
    return DataBits::kEight;
  return DataBits::kNone;
}

std::u16string GetDataBitsParseError(base::StringPiece enum_string) {
  return u"expected \"seven\" or \"eight\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ParityBit enum_param) {
  switch (enum_param) {
    case ParityBit::kNo:
      return "no";
    case ParityBit::kOdd:
      return "odd";
    case ParityBit::kEven:
      return "even";
    case ParityBit::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ParityBit ParseParityBit(base::StringPiece enum_string) {
  if (enum_string == "no")
    return ParityBit::kNo;
  if (enum_string == "odd")
    return ParityBit::kOdd;
  if (enum_string == "even")
    return ParityBit::kEven;
  return ParityBit::kNone;
}

std::u16string GetParityBitParseError(base::StringPiece enum_string) {
  return u"expected \"no\" or \"odd\" or \"even\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(StopBits enum_param) {
  switch (enum_param) {
    case StopBits::kOne:
      return "one";
    case StopBits::kTwo:
      return "two";
    case StopBits::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

StopBits ParseStopBits(base::StringPiece enum_string) {
  if (enum_string == "one")
    return StopBits::kOne;
  if (enum_string == "two")
    return StopBits::kTwo;
  return StopBits::kNone;
}

std::u16string GetStopBitsParseError(base::StringPiece enum_string) {
  return u"expected \"one\" or \"two\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ConnectionOptions::ConnectionOptions()
: data_bits(),
parity_bit(),
stop_bits() {}

ConnectionOptions::~ConnectionOptions() = default;
ConnectionOptions::ConnectionOptions(ConnectionOptions&& rhs) = default;
ConnectionOptions& ConnectionOptions::operator=(ConnectionOptions&& rhs) = default;
ConnectionOptions ConnectionOptions::Clone() const {
  ConnectionOptions out;
  out.persistent = persistent;
  out.name = name;
  out.buffer_size = buffer_size;
  out.bitrate = bitrate;
  out.data_bits = data_bits;
  out.parity_bit = parity_bit;
  out.stop_bits = stop_bits;
  out.cts_flow_control = cts_flow_control;
  out.receive_timeout = receive_timeout;
  out.send_timeout = send_timeout;
  return out;
}

// static
bool ConnectionOptions::Populate(
    const base::Value::Dict& dict, ConnectionOptions& out) {
  out.data_bits = DataBits();
  out.parity_bit = ParityBit();
  out.stop_bits = StopBits();
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

  const base::Value* bitrate_value = dict.Find("bitrate");
  if (bitrate_value) {
    {
      auto temp = (*bitrate_value).GetIfInt();
      if (!temp.has_value()) {
        out.bitrate = absl::nullopt;
        return false;
      }
      out.bitrate = *temp;
    }
  }

  const base::Value* data_bits_value = dict.Find("dataBits");
  if (data_bits_value) {
    {
      const std::string* data_bits_as_string = (*data_bits_value).GetIfString();
      if (!data_bits_as_string) {
        return false;
      }
      out.data_bits = ParseDataBits(*data_bits_as_string);
      if (out.data_bits == DataBits()) {
        return false;
      }
    }
    } else {
    out.data_bits = DataBits();
  }

  const base::Value* parity_bit_value = dict.Find("parityBit");
  if (parity_bit_value) {
    {
      const std::string* parity_bit_as_string = (*parity_bit_value).GetIfString();
      if (!parity_bit_as_string) {
        return false;
      }
      out.parity_bit = ParseParityBit(*parity_bit_as_string);
      if (out.parity_bit == ParityBit()) {
        return false;
      }
    }
    } else {
    out.parity_bit = ParityBit();
  }

  const base::Value* stop_bits_value = dict.Find("stopBits");
  if (stop_bits_value) {
    {
      const std::string* stop_bits_as_string = (*stop_bits_value).GetIfString();
      if (!stop_bits_as_string) {
        return false;
      }
      out.stop_bits = ParseStopBits(*stop_bits_as_string);
      if (out.stop_bits == StopBits()) {
        return false;
      }
    }
    } else {
    out.stop_bits = StopBits();
  }

  const base::Value* cts_flow_control_value = dict.Find("ctsFlowControl");
  if (cts_flow_control_value) {
    {
      auto temp = (*cts_flow_control_value).GetIfBool();
      if (!temp.has_value()) {
        out.cts_flow_control = absl::nullopt;
        return false;
      }
      out.cts_flow_control = *temp;
    }
  }

  const base::Value* receive_timeout_value = dict.Find("receiveTimeout");
  if (receive_timeout_value) {
    {
      auto temp = (*receive_timeout_value).GetIfInt();
      if (!temp.has_value()) {
        out.receive_timeout = absl::nullopt;
        return false;
      }
      out.receive_timeout = *temp;
    }
  }

  const base::Value* send_timeout_value = dict.Find("sendTimeout");
  if (send_timeout_value) {
    {
      auto temp = (*send_timeout_value).GetIfInt();
      if (!temp.has_value()) {
        out.send_timeout = absl::nullopt;
        return false;
      }
      out.send_timeout = *temp;
    }
  }

  return true;
}

// static
bool ConnectionOptions::Populate(
    const base::Value& value, ConnectionOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ConnectionOptions> ConnectionOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ConnectionOptions>();
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
absl::optional<ConnectionOptions> ConnectionOptions::FromValue(const base::Value::Dict& value) {
  ConnectionOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ConnectionOptions> ConnectionOptions::FromValue(const base::Value& value) {
  ConnectionOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ConnectionOptions::ToValue() const {
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
  if (this->bitrate) {
    to_value_result.Set("bitrate", *this->bitrate);

  }
  if (this->data_bits != DataBits()) {
    to_value_result.Set("dataBits", serial::ToString(this->data_bits));

  }
  if (this->parity_bit != ParityBit()) {
    to_value_result.Set("parityBit", serial::ToString(this->parity_bit));

  }
  if (this->stop_bits != StopBits()) {
    to_value_result.Set("stopBits", serial::ToString(this->stop_bits));

  }
  if (this->cts_flow_control) {
    to_value_result.Set("ctsFlowControl", *this->cts_flow_control);

  }
  if (this->receive_timeout) {
    to_value_result.Set("receiveTimeout", *this->receive_timeout);

  }
  if (this->send_timeout) {
    to_value_result.Set("sendTimeout", *this->send_timeout);

  }

  return to_value_result;
}


ConnectionInfo::ConnectionInfo()
: connection_id(0),
paused(false),
persistent(false),
buffer_size(0),
receive_timeout(0),
send_timeout(0),
data_bits(),
parity_bit(),
stop_bits() {}

ConnectionInfo::~ConnectionInfo() = default;
ConnectionInfo::ConnectionInfo(ConnectionInfo&& rhs) = default;
ConnectionInfo& ConnectionInfo::operator=(ConnectionInfo&& rhs) = default;
ConnectionInfo ConnectionInfo::Clone() const {
  ConnectionInfo out;
  out.connection_id = connection_id;
  out.paused = paused;
  out.persistent = persistent;
  out.name = name;
  out.buffer_size = buffer_size;
  out.receive_timeout = receive_timeout;
  out.send_timeout = send_timeout;
  out.bitrate = bitrate;
  out.data_bits = data_bits;
  out.parity_bit = parity_bit;
  out.stop_bits = stop_bits;
  out.cts_flow_control = cts_flow_control;
  return out;
}

// static
bool ConnectionInfo::Populate(
    const base::Value::Dict& dict, ConnectionInfo& out) {
  out.data_bits = DataBits();
  out.parity_bit = ParityBit();
  out.stop_bits = StopBits();
  const base::Value* connection_id_value = dict.Find("connectionId");
  if (!connection_id_value) {
    return false;
  }
  {
    auto temp = (*connection_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.connection_id = *temp;
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
  if (!name_value) {
    return false;
  }
  {
    auto* temp = (*name_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.name = *temp;
  }

  const base::Value* buffer_size_value = dict.Find("bufferSize");
  if (!buffer_size_value) {
    return false;
  }
  {
    auto temp = (*buffer_size_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.buffer_size = *temp;
  }

  const base::Value* receive_timeout_value = dict.Find("receiveTimeout");
  if (!receive_timeout_value) {
    return false;
  }
  {
    auto temp = (*receive_timeout_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.receive_timeout = *temp;
  }

  const base::Value* send_timeout_value = dict.Find("sendTimeout");
  if (!send_timeout_value) {
    return false;
  }
  {
    auto temp = (*send_timeout_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.send_timeout = *temp;
  }

  const base::Value* bitrate_value = dict.Find("bitrate");
  if (bitrate_value) {
    {
      auto temp = (*bitrate_value).GetIfInt();
      if (!temp.has_value()) {
        out.bitrate = absl::nullopt;
        return false;
      }
      out.bitrate = *temp;
    }
  }

  const base::Value* data_bits_value = dict.Find("dataBits");
  if (data_bits_value) {
    {
      const std::string* data_bits_as_string = (*data_bits_value).GetIfString();
      if (!data_bits_as_string) {
        return false;
      }
      out.data_bits = ParseDataBits(*data_bits_as_string);
      if (out.data_bits == DataBits()) {
        return false;
      }
    }
    } else {
    out.data_bits = DataBits();
  }

  const base::Value* parity_bit_value = dict.Find("parityBit");
  if (parity_bit_value) {
    {
      const std::string* parity_bit_as_string = (*parity_bit_value).GetIfString();
      if (!parity_bit_as_string) {
        return false;
      }
      out.parity_bit = ParseParityBit(*parity_bit_as_string);
      if (out.parity_bit == ParityBit()) {
        return false;
      }
    }
    } else {
    out.parity_bit = ParityBit();
  }

  const base::Value* stop_bits_value = dict.Find("stopBits");
  if (stop_bits_value) {
    {
      const std::string* stop_bits_as_string = (*stop_bits_value).GetIfString();
      if (!stop_bits_as_string) {
        return false;
      }
      out.stop_bits = ParseStopBits(*stop_bits_as_string);
      if (out.stop_bits == StopBits()) {
        return false;
      }
    }
    } else {
    out.stop_bits = StopBits();
  }

  const base::Value* cts_flow_control_value = dict.Find("ctsFlowControl");
  if (cts_flow_control_value) {
    {
      auto temp = (*cts_flow_control_value).GetIfBool();
      if (!temp.has_value()) {
        out.cts_flow_control = absl::nullopt;
        return false;
      }
      out.cts_flow_control = *temp;
    }
  }

  return true;
}

// static
bool ConnectionInfo::Populate(
    const base::Value& value, ConnectionInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ConnectionInfo> ConnectionInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ConnectionInfo>();
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
absl::optional<ConnectionInfo> ConnectionInfo::FromValue(const base::Value::Dict& value) {
  ConnectionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ConnectionInfo> ConnectionInfo::FromValue(const base::Value& value) {
  ConnectionInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ConnectionInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("connectionId", this->connection_id);

  to_value_result.Set("paused", this->paused);

  to_value_result.Set("persistent", this->persistent);

  to_value_result.Set("name", this->name);

  to_value_result.Set("bufferSize", this->buffer_size);

  to_value_result.Set("receiveTimeout", this->receive_timeout);

  to_value_result.Set("sendTimeout", this->send_timeout);

  if (this->bitrate) {
    to_value_result.Set("bitrate", *this->bitrate);

  }
  if (this->data_bits != DataBits()) {
    to_value_result.Set("dataBits", serial::ToString(this->data_bits));

  }
  if (this->parity_bit != ParityBit()) {
    to_value_result.Set("parityBit", serial::ToString(this->parity_bit));

  }
  if (this->stop_bits != StopBits()) {
    to_value_result.Set("stopBits", serial::ToString(this->stop_bits));

  }
  if (this->cts_flow_control) {
    to_value_result.Set("ctsFlowControl", *this->cts_flow_control);

  }

  return to_value_result;
}


const char* ToString(SendError enum_param) {
  switch (enum_param) {
    case SendError::kDisconnected:
      return "disconnected";
    case SendError::kPending:
      return "pending";
    case SendError::kTimeout:
      return "timeout";
    case SendError::kSystemError:
      return "system_error";
    case SendError::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SendError ParseSendError(base::StringPiece enum_string) {
  if (enum_string == "disconnected")
    return SendError::kDisconnected;
  if (enum_string == "pending")
    return SendError::kPending;
  if (enum_string == "timeout")
    return SendError::kTimeout;
  if (enum_string == "system_error")
    return SendError::kSystemError;
  return SendError::kNone;
}

std::u16string GetSendErrorParseError(base::StringPiece enum_string) {
  return u"expected \"disconnected\" or \"pending\" or \"timeout\" or \"system_error\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SendInfo::SendInfo()
: bytes_sent(0),
error() {}

SendInfo::~SendInfo() = default;
SendInfo::SendInfo(SendInfo&& rhs) = default;
SendInfo& SendInfo::operator=(SendInfo&& rhs) = default;
SendInfo SendInfo::Clone() const {
  SendInfo out;
  out.bytes_sent = bytes_sent;
  out.error = error;
  return out;
}

// static
bool SendInfo::Populate(
    const base::Value::Dict& dict, SendInfo& out) {
  out.error = SendError();
  const base::Value* bytes_sent_value = dict.Find("bytesSent");
  if (!bytes_sent_value) {
    return false;
  }
  {
    auto temp = (*bytes_sent_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.bytes_sent = *temp;
  }

  const base::Value* error_value = dict.Find("error");
  if (error_value) {
    {
      const std::string* send_error_as_string = (*error_value).GetIfString();
      if (!send_error_as_string) {
        return false;
      }
      out.error = ParseSendError(*send_error_as_string);
      if (out.error == SendError()) {
        return false;
      }
    }
    } else {
    out.error = SendError();
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

  to_value_result.Set("bytesSent", this->bytes_sent);

  if (this->error != SendError()) {
    to_value_result.Set("error", serial::ToString(this->error));

  }

  return to_value_result;
}


HostControlSignals::HostControlSignals()
 {}

HostControlSignals::~HostControlSignals() = default;
HostControlSignals::HostControlSignals(HostControlSignals&& rhs) = default;
HostControlSignals& HostControlSignals::operator=(HostControlSignals&& rhs) = default;
HostControlSignals HostControlSignals::Clone() const {
  HostControlSignals out;
  out.dtr = dtr;
  out.rts = rts;
  return out;
}

// static
bool HostControlSignals::Populate(
    const base::Value::Dict& dict, HostControlSignals& out) {
  const base::Value* dtr_value = dict.Find("dtr");
  if (dtr_value) {
    {
      auto temp = (*dtr_value).GetIfBool();
      if (!temp.has_value()) {
        out.dtr = absl::nullopt;
        return false;
      }
      out.dtr = *temp;
    }
  }

  const base::Value* rts_value = dict.Find("rts");
  if (rts_value) {
    {
      auto temp = (*rts_value).GetIfBool();
      if (!temp.has_value()) {
        out.rts = absl::nullopt;
        return false;
      }
      out.rts = *temp;
    }
  }

  return true;
}

// static
bool HostControlSignals::Populate(
    const base::Value& value, HostControlSignals& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<HostControlSignals> HostControlSignals::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<HostControlSignals>();
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
absl::optional<HostControlSignals> HostControlSignals::FromValue(const base::Value::Dict& value) {
  HostControlSignals out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<HostControlSignals> HostControlSignals::FromValue(const base::Value& value) {
  HostControlSignals out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict HostControlSignals::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->dtr) {
    to_value_result.Set("dtr", *this->dtr);

  }
  if (this->rts) {
    to_value_result.Set("rts", *this->rts);

  }

  return to_value_result;
}


DeviceControlSignals::DeviceControlSignals()
: dcd(false),
cts(false),
ri(false),
dsr(false) {}

DeviceControlSignals::~DeviceControlSignals() = default;
DeviceControlSignals::DeviceControlSignals(DeviceControlSignals&& rhs) = default;
DeviceControlSignals& DeviceControlSignals::operator=(DeviceControlSignals&& rhs) = default;
DeviceControlSignals DeviceControlSignals::Clone() const {
  DeviceControlSignals out;
  out.dcd = dcd;
  out.cts = cts;
  out.ri = ri;
  out.dsr = dsr;
  return out;
}

// static
bool DeviceControlSignals::Populate(
    const base::Value::Dict& dict, DeviceControlSignals& out) {
  const base::Value* dcd_value = dict.Find("dcd");
  if (!dcd_value) {
    return false;
  }
  {
    auto temp = (*dcd_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.dcd = *temp;
  }

  const base::Value* cts_value = dict.Find("cts");
  if (!cts_value) {
    return false;
  }
  {
    auto temp = (*cts_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.cts = *temp;
  }

  const base::Value* ri_value = dict.Find("ri");
  if (!ri_value) {
    return false;
  }
  {
    auto temp = (*ri_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.ri = *temp;
  }

  const base::Value* dsr_value = dict.Find("dsr");
  if (!dsr_value) {
    return false;
  }
  {
    auto temp = (*dsr_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.dsr = *temp;
  }

  return true;
}

// static
bool DeviceControlSignals::Populate(
    const base::Value& value, DeviceControlSignals& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<DeviceControlSignals> DeviceControlSignals::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<DeviceControlSignals>();
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
absl::optional<DeviceControlSignals> DeviceControlSignals::FromValue(const base::Value::Dict& value) {
  DeviceControlSignals out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<DeviceControlSignals> DeviceControlSignals::FromValue(const base::Value& value) {
  DeviceControlSignals out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict DeviceControlSignals::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("dcd", this->dcd);

  to_value_result.Set("cts", this->cts);

  to_value_result.Set("ri", this->ri);

  to_value_result.Set("dsr", this->dsr);


  return to_value_result;
}


ReceiveInfo::ReceiveInfo()
: connection_id(0) {}

ReceiveInfo::~ReceiveInfo() = default;
ReceiveInfo::ReceiveInfo(ReceiveInfo&& rhs) = default;
ReceiveInfo& ReceiveInfo::operator=(ReceiveInfo&& rhs) = default;
ReceiveInfo ReceiveInfo::Clone() const {
  ReceiveInfo out;
  out.connection_id = connection_id;
  out.data = data;
  return out;
}

// static
bool ReceiveInfo::Populate(
    const base::Value::Dict& dict, ReceiveInfo& out) {
  const base::Value* connection_id_value = dict.Find("connectionId");
  if (!connection_id_value) {
    return false;
  }
  {
    auto temp = (*connection_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.connection_id = *temp;
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

  to_value_result.Set("connectionId", this->connection_id);

  to_value_result.Set("data", base::Value(this->data));


  return to_value_result;
}


const char* ToString(ReceiveError enum_param) {
  switch (enum_param) {
    case ReceiveError::kDisconnected:
      return "disconnected";
    case ReceiveError::kTimeout:
      return "timeout";
    case ReceiveError::kDeviceLost:
      return "device_lost";
    case ReceiveError::kBreak:
      return "break";
    case ReceiveError::kFrameError:
      return "frame_error";
    case ReceiveError::kOverrun:
      return "overrun";
    case ReceiveError::kBufferOverflow:
      return "buffer_overflow";
    case ReceiveError::kParityError:
      return "parity_error";
    case ReceiveError::kSystemError:
      return "system_error";
    case ReceiveError::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ReceiveError ParseReceiveError(base::StringPiece enum_string) {
  if (enum_string == "disconnected")
    return ReceiveError::kDisconnected;
  if (enum_string == "timeout")
    return ReceiveError::kTimeout;
  if (enum_string == "device_lost")
    return ReceiveError::kDeviceLost;
  if (enum_string == "break")
    return ReceiveError::kBreak;
  if (enum_string == "frame_error")
    return ReceiveError::kFrameError;
  if (enum_string == "overrun")
    return ReceiveError::kOverrun;
  if (enum_string == "buffer_overflow")
    return ReceiveError::kBufferOverflow;
  if (enum_string == "parity_error")
    return ReceiveError::kParityError;
  if (enum_string == "system_error")
    return ReceiveError::kSystemError;
  return ReceiveError::kNone;
}

std::u16string GetReceiveErrorParseError(base::StringPiece enum_string) {
  return u"expected \"disconnected\" or \"timeout\" or \"device_lost\" or \"break\" or \"frame_error\" or \"overrun\" or \"buffer_overflow\" or \"parity_error\" or \"system_error\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ReceiveErrorInfo::ReceiveErrorInfo()
: connection_id(0),
error() {}

ReceiveErrorInfo::~ReceiveErrorInfo() = default;
ReceiveErrorInfo::ReceiveErrorInfo(ReceiveErrorInfo&& rhs) = default;
ReceiveErrorInfo& ReceiveErrorInfo::operator=(ReceiveErrorInfo&& rhs) = default;
ReceiveErrorInfo ReceiveErrorInfo::Clone() const {
  ReceiveErrorInfo out;
  out.connection_id = connection_id;
  out.error = error;
  return out;
}

// static
bool ReceiveErrorInfo::Populate(
    const base::Value::Dict& dict, ReceiveErrorInfo& out) {
  const base::Value* connection_id_value = dict.Find("connectionId");
  if (!connection_id_value) {
    return false;
  }
  {
    auto temp = (*connection_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.connection_id = *temp;
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

  to_value_result.Set("connectionId", this->connection_id);

  to_value_result.Set("error", serial::ToString(this->error));


  return to_value_result;
}



//
// Functions
//

namespace GetDevices {

base::Value::List Results::Create(const std::vector<DeviceInfo>& ports) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(ports));

  return create_results;
}
}  // namespace GetDevices

namespace Connect {

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
    const base::Value& path_value = args[0];
    {
      auto* temp = path_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.path = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        ConnectionOptions temp;
        if (!ConnectionOptions::Populate(options_value.GetDict(), temp))
          return absl::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const ConnectionInfo& connection_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((connection_info).ToValue());

  return create_results;
}
}  // namespace Connect

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& options_value = args[1];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!ConnectionOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace Update

namespace Disconnect {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace Disconnect

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const ConnectionInfo& connection_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((connection_info).ToValue());

  return create_results;
}
}  // namespace GetInfo

namespace GetConnections {

base::Value::List Results::Create(const std::vector<ConnectionInfo>& connection_infos) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(connection_infos));

  return create_results;
}
}  // namespace GetConnections

namespace Send {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
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

  return params;
}


base::Value::List Results::Create(const SendInfo& send_info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((send_info).ToValue());

  return create_results;
}
}  // namespace Send

namespace Flush {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace Flush

namespace GetControlSignals {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const DeviceControlSignals& signals) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((signals).ToValue());

  return create_results;
}
}  // namespace GetControlSignals

namespace SetControlSignals {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& signals_value = args[1];
    {
      if (!signals_value.is_dict()) {
        return absl::nullopt;
      }
      if (!HostControlSignals::Populate(signals_value.GetDict(), params.signals)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SetControlSignals

namespace SetBreak {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace SetBreak

namespace ClearBreak {

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
    const base::Value& connection_id_value = args[0];
    {
      auto temp = connection_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.connection_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace ClearBreak

//
// Events
//

namespace OnReceive {

const char kEventName[] = "serial.onReceive";

base::Value::List Create(const ReceiveInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnReceive

namespace OnReceiveError {

const char kEventName[] = "serial.onReceiveError";

base::Value::List Create(const ReceiveErrorInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnReceiveError

}  // namespace serial
}  // namespace api
}  // namespace extensions

