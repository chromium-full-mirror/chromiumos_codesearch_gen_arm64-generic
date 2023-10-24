// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/smart_card_provider_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/smart_card_provider_private.h"

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
namespace smart_card_provider_private {
//
// Types
//

const char* ToString(ResultCode enum_param) {
  switch (enum_param) {
    case RESULT_CODE_SUCCESS:
      return "SUCCESS";
    case RESULT_CODE_REMOVED_CARD:
      return "REMOVED_CARD";
    case RESULT_CODE_RESET_CARD:
      return "RESET_CARD";
    case RESULT_CODE_UNPOWERED_CARD:
      return "UNPOWERED_CARD";
    case RESULT_CODE_UNRESPONSIVE_CARD:
      return "UNRESPONSIVE_CARD";
    case RESULT_CODE_UNSUPPORTED_CARD:
      return "UNSUPPORTED_CARD";
    case RESULT_CODE_READER_UNAVAILABLE:
      return "READER_UNAVAILABLE";
    case RESULT_CODE_SHARING_VIOLATION:
      return "SHARING_VIOLATION";
    case RESULT_CODE_NOT_TRANSACTED:
      return "NOT_TRANSACTED";
    case RESULT_CODE_NO_SMARTCARD:
      return "NO_SMARTCARD";
    case RESULT_CODE_PROTO_MISMATCH:
      return "PROTO_MISMATCH";
    case RESULT_CODE_SYSTEM_CANCELLED:
      return "SYSTEM_CANCELLED";
    case RESULT_CODE_NOT_READY:
      return "NOT_READY";
    case RESULT_CODE_CANCELLED:
      return "CANCELLED";
    case RESULT_CODE_INSUFFICIENT_BUFFER:
      return "INSUFFICIENT_BUFFER";
    case RESULT_CODE_INVALID_HANDLE:
      return "INVALID_HANDLE";
    case RESULT_CODE_INVALID_PARAMETER:
      return "INVALID_PARAMETER";
    case RESULT_CODE_INVALID_VALUE:
      return "INVALID_VALUE";
    case RESULT_CODE_NO_MEMORY:
      return "NO_MEMORY";
    case RESULT_CODE_TIMEOUT:
      return "TIMEOUT";
    case RESULT_CODE_UNKNOWN_READER:
      return "UNKNOWN_READER";
    case RESULT_CODE_UNSUPPORTED_FEATURE:
      return "UNSUPPORTED_FEATURE";
    case RESULT_CODE_NO_READERS_AVAILABLE:
      return "NO_READERS_AVAILABLE";
    case RESULT_CODE_SERVICE_STOPPED:
      return "SERVICE_STOPPED";
    case RESULT_CODE_NO_SERVICE:
      return "NO_SERVICE";
    case RESULT_CODE_COMM_ERROR:
      return "COMM_ERROR";
    case RESULT_CODE_INTERNAL_ERROR:
      return "INTERNAL_ERROR";
    case RESULT_CODE_UNKNOWN_ERROR:
      return "UNKNOWN_ERROR";
    case RESULT_CODE_SERVER_TOO_BUSY:
      return "SERVER_TOO_BUSY";
    case RESULT_CODE_UNEXPECTED:
      return "UNEXPECTED";
    case RESULT_CODE_SHUTDOWN:
      return "SHUTDOWN";
    case RESULT_CODE_UNKNOWN:
      return "UNKNOWN";
    case RESULT_CODE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ResultCode ParseResultCode(base::StringPiece enum_string) {
  if (enum_string == "SUCCESS")
    return RESULT_CODE_SUCCESS;
  if (enum_string == "REMOVED_CARD")
    return RESULT_CODE_REMOVED_CARD;
  if (enum_string == "RESET_CARD")
    return RESULT_CODE_RESET_CARD;
  if (enum_string == "UNPOWERED_CARD")
    return RESULT_CODE_UNPOWERED_CARD;
  if (enum_string == "UNRESPONSIVE_CARD")
    return RESULT_CODE_UNRESPONSIVE_CARD;
  if (enum_string == "UNSUPPORTED_CARD")
    return RESULT_CODE_UNSUPPORTED_CARD;
  if (enum_string == "READER_UNAVAILABLE")
    return RESULT_CODE_READER_UNAVAILABLE;
  if (enum_string == "SHARING_VIOLATION")
    return RESULT_CODE_SHARING_VIOLATION;
  if (enum_string == "NOT_TRANSACTED")
    return RESULT_CODE_NOT_TRANSACTED;
  if (enum_string == "NO_SMARTCARD")
    return RESULT_CODE_NO_SMARTCARD;
  if (enum_string == "PROTO_MISMATCH")
    return RESULT_CODE_PROTO_MISMATCH;
  if (enum_string == "SYSTEM_CANCELLED")
    return RESULT_CODE_SYSTEM_CANCELLED;
  if (enum_string == "NOT_READY")
    return RESULT_CODE_NOT_READY;
  if (enum_string == "CANCELLED")
    return RESULT_CODE_CANCELLED;
  if (enum_string == "INSUFFICIENT_BUFFER")
    return RESULT_CODE_INSUFFICIENT_BUFFER;
  if (enum_string == "INVALID_HANDLE")
    return RESULT_CODE_INVALID_HANDLE;
  if (enum_string == "INVALID_PARAMETER")
    return RESULT_CODE_INVALID_PARAMETER;
  if (enum_string == "INVALID_VALUE")
    return RESULT_CODE_INVALID_VALUE;
  if (enum_string == "NO_MEMORY")
    return RESULT_CODE_NO_MEMORY;
  if (enum_string == "TIMEOUT")
    return RESULT_CODE_TIMEOUT;
  if (enum_string == "UNKNOWN_READER")
    return RESULT_CODE_UNKNOWN_READER;
  if (enum_string == "UNSUPPORTED_FEATURE")
    return RESULT_CODE_UNSUPPORTED_FEATURE;
  if (enum_string == "NO_READERS_AVAILABLE")
    return RESULT_CODE_NO_READERS_AVAILABLE;
  if (enum_string == "SERVICE_STOPPED")
    return RESULT_CODE_SERVICE_STOPPED;
  if (enum_string == "NO_SERVICE")
    return RESULT_CODE_NO_SERVICE;
  if (enum_string == "COMM_ERROR")
    return RESULT_CODE_COMM_ERROR;
  if (enum_string == "INTERNAL_ERROR")
    return RESULT_CODE_INTERNAL_ERROR;
  if (enum_string == "UNKNOWN_ERROR")
    return RESULT_CODE_UNKNOWN_ERROR;
  if (enum_string == "SERVER_TOO_BUSY")
    return RESULT_CODE_SERVER_TOO_BUSY;
  if (enum_string == "UNEXPECTED")
    return RESULT_CODE_UNEXPECTED;
  if (enum_string == "SHUTDOWN")
    return RESULT_CODE_SHUTDOWN;
  if (enum_string == "UNKNOWN")
    return RESULT_CODE_UNKNOWN;
  return RESULT_CODE_NONE;
}

std::u16string GetResultCodeParseError(base::StringPiece enum_string) {
  return u"expected \"SUCCESS\" or \"REMOVED_CARD\" or \"RESET_CARD\" or \"UNPOWERED_CARD\" or \"UNRESPONSIVE_CARD\" or \"UNSUPPORTED_CARD\" or \"READER_UNAVAILABLE\" or \"SHARING_VIOLATION\" or \"NOT_TRANSACTED\" or \"NO_SMARTCARD\" or \"PROTO_MISMATCH\" or \"SYSTEM_CANCELLED\" or \"NOT_READY\" or \"CANCELLED\" or \"INSUFFICIENT_BUFFER\" or \"INVALID_HANDLE\" or \"INVALID_PARAMETER\" or \"INVALID_VALUE\" or \"NO_MEMORY\" or \"TIMEOUT\" or \"UNKNOWN_READER\" or \"UNSUPPORTED_FEATURE\" or \"NO_READERS_AVAILABLE\" or \"SERVICE_STOPPED\" or \"NO_SERVICE\" or \"COMM_ERROR\" or \"INTERNAL_ERROR\" or \"UNKNOWN_ERROR\" or \"SERVER_TOO_BUSY\" or \"UNEXPECTED\" or \"SHUTDOWN\" or \"UNKNOWN\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ShareMode enum_param) {
  switch (enum_param) {
    case SHARE_MODE_SHARED:
      return "SHARED";
    case SHARE_MODE_EXCLUSIVE:
      return "EXCLUSIVE";
    case SHARE_MODE_DIRECT:
      return "DIRECT";
    case SHARE_MODE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ShareMode ParseShareMode(base::StringPiece enum_string) {
  if (enum_string == "SHARED")
    return SHARE_MODE_SHARED;
  if (enum_string == "EXCLUSIVE")
    return SHARE_MODE_EXCLUSIVE;
  if (enum_string == "DIRECT")
    return SHARE_MODE_DIRECT;
  return SHARE_MODE_NONE;
}

std::u16string GetShareModeParseError(base::StringPiece enum_string) {
  return u"expected \"SHARED\" or \"EXCLUSIVE\" or \"DIRECT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Disposition enum_param) {
  switch (enum_param) {
    case DISPOSITION_LEAVE_CARD:
      return "LEAVE_CARD";
    case DISPOSITION_RESET_CARD:
      return "RESET_CARD";
    case DISPOSITION_UNPOWER_CARD:
      return "UNPOWER_CARD";
    case DISPOSITION_EJECT_CARD:
      return "EJECT_CARD";
    case DISPOSITION_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Disposition ParseDisposition(base::StringPiece enum_string) {
  if (enum_string == "LEAVE_CARD")
    return DISPOSITION_LEAVE_CARD;
  if (enum_string == "RESET_CARD")
    return DISPOSITION_RESET_CARD;
  if (enum_string == "UNPOWER_CARD")
    return DISPOSITION_UNPOWER_CARD;
  if (enum_string == "EJECT_CARD")
    return DISPOSITION_EJECT_CARD;
  return DISPOSITION_NONE;
}

std::u16string GetDispositionParseError(base::StringPiece enum_string) {
  return u"expected \"LEAVE_CARD\" or \"RESET_CARD\" or \"UNPOWER_CARD\" or \"EJECT_CARD\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ConnectionState enum_param) {
  switch (enum_param) {
    case CONNECTION_STATE_ABSENT:
      return "ABSENT";
    case CONNECTION_STATE_PRESENT:
      return "PRESENT";
    case CONNECTION_STATE_SWALLOWED:
      return "SWALLOWED";
    case CONNECTION_STATE_POWERED:
      return "POWERED";
    case CONNECTION_STATE_NEGOTIABLE:
      return "NEGOTIABLE";
    case CONNECTION_STATE_SPECIFIC:
      return "SPECIFIC";
    case CONNECTION_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

ConnectionState ParseConnectionState(base::StringPiece enum_string) {
  if (enum_string == "ABSENT")
    return CONNECTION_STATE_ABSENT;
  if (enum_string == "PRESENT")
    return CONNECTION_STATE_PRESENT;
  if (enum_string == "SWALLOWED")
    return CONNECTION_STATE_SWALLOWED;
  if (enum_string == "POWERED")
    return CONNECTION_STATE_POWERED;
  if (enum_string == "NEGOTIABLE")
    return CONNECTION_STATE_NEGOTIABLE;
  if (enum_string == "SPECIFIC")
    return CONNECTION_STATE_SPECIFIC;
  return CONNECTION_STATE_NONE;
}

std::u16string GetConnectionStateParseError(base::StringPiece enum_string) {
  return u"expected \"ABSENT\" or \"PRESENT\" or \"SWALLOWED\" or \"POWERED\" or \"NEGOTIABLE\" or \"SPECIFIC\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ReaderStateFlags::ReaderStateFlags()
 {}

ReaderStateFlags::~ReaderStateFlags() = default;
ReaderStateFlags::ReaderStateFlags(ReaderStateFlags&& rhs) = default;
ReaderStateFlags& ReaderStateFlags::operator=(ReaderStateFlags&& rhs) = default;
ReaderStateFlags ReaderStateFlags::Clone() const {
  ReaderStateFlags out;
  out.unaware = unaware;
  out.ignore = ignore;
  out.changed = changed;
  out.unknown = unknown;
  out.unavailable = unavailable;
  out.empty = empty;
  out.present = present;
  out.exclusive = exclusive;
  out.inuse = inuse;
  out.mute = mute;
  out.unpowered = unpowered;
  return out;
}

// static
bool ReaderStateFlags::Populate(
    const base::Value::Dict& dict, ReaderStateFlags& out) {
  const base::Value* unaware_value = dict.Find("unaware");
  if (unaware_value) {
    {
      auto temp = (*unaware_value).GetIfBool();
      if (!temp.has_value()) {
        out.unaware = absl::nullopt;
        return false;
      }
      out.unaware = *temp;
    }
  }

  const base::Value* ignore_value = dict.Find("ignore");
  if (ignore_value) {
    {
      auto temp = (*ignore_value).GetIfBool();
      if (!temp.has_value()) {
        out.ignore = absl::nullopt;
        return false;
      }
      out.ignore = *temp;
    }
  }

  const base::Value* changed_value = dict.Find("changed");
  if (changed_value) {
    {
      auto temp = (*changed_value).GetIfBool();
      if (!temp.has_value()) {
        out.changed = absl::nullopt;
        return false;
      }
      out.changed = *temp;
    }
  }

  const base::Value* unknown_value = dict.Find("unknown");
  if (unknown_value) {
    {
      auto temp = (*unknown_value).GetIfBool();
      if (!temp.has_value()) {
        out.unknown = absl::nullopt;
        return false;
      }
      out.unknown = *temp;
    }
  }

  const base::Value* unavailable_value = dict.Find("unavailable");
  if (unavailable_value) {
    {
      auto temp = (*unavailable_value).GetIfBool();
      if (!temp.has_value()) {
        out.unavailable = absl::nullopt;
        return false;
      }
      out.unavailable = *temp;
    }
  }

  const base::Value* empty_value = dict.Find("empty");
  if (empty_value) {
    {
      auto temp = (*empty_value).GetIfBool();
      if (!temp.has_value()) {
        out.empty = absl::nullopt;
        return false;
      }
      out.empty = *temp;
    }
  }

  const base::Value* present_value = dict.Find("present");
  if (present_value) {
    {
      auto temp = (*present_value).GetIfBool();
      if (!temp.has_value()) {
        out.present = absl::nullopt;
        return false;
      }
      out.present = *temp;
    }
  }

  const base::Value* exclusive_value = dict.Find("exclusive");
  if (exclusive_value) {
    {
      auto temp = (*exclusive_value).GetIfBool();
      if (!temp.has_value()) {
        out.exclusive = absl::nullopt;
        return false;
      }
      out.exclusive = *temp;
    }
  }

  const base::Value* inuse_value = dict.Find("inuse");
  if (inuse_value) {
    {
      auto temp = (*inuse_value).GetIfBool();
      if (!temp.has_value()) {
        out.inuse = absl::nullopt;
        return false;
      }
      out.inuse = *temp;
    }
  }

  const base::Value* mute_value = dict.Find("mute");
  if (mute_value) {
    {
      auto temp = (*mute_value).GetIfBool();
      if (!temp.has_value()) {
        out.mute = absl::nullopt;
        return false;
      }
      out.mute = *temp;
    }
  }

  const base::Value* unpowered_value = dict.Find("unpowered");
  if (unpowered_value) {
    {
      auto temp = (*unpowered_value).GetIfBool();
      if (!temp.has_value()) {
        out.unpowered = absl::nullopt;
        return false;
      }
      out.unpowered = *temp;
    }
  }

  return true;
}

// static
bool ReaderStateFlags::Populate(
    const base::Value& value, ReaderStateFlags& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReaderStateFlags> ReaderStateFlags::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReaderStateFlags>();
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
absl::optional<ReaderStateFlags> ReaderStateFlags::FromValue(const base::Value::Dict& value) {
  ReaderStateFlags out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReaderStateFlags> ReaderStateFlags::FromValue(const base::Value& value) {
  ReaderStateFlags out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReaderStateFlags::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->unaware) {
    to_value_result.Set("unaware", *this->unaware);

  }
  if (this->ignore) {
    to_value_result.Set("ignore", *this->ignore);

  }
  if (this->changed) {
    to_value_result.Set("changed", *this->changed);

  }
  if (this->unknown) {
    to_value_result.Set("unknown", *this->unknown);

  }
  if (this->unavailable) {
    to_value_result.Set("unavailable", *this->unavailable);

  }
  if (this->empty) {
    to_value_result.Set("empty", *this->empty);

  }
  if (this->present) {
    to_value_result.Set("present", *this->present);

  }
  if (this->exclusive) {
    to_value_result.Set("exclusive", *this->exclusive);

  }
  if (this->inuse) {
    to_value_result.Set("inuse", *this->inuse);

  }
  if (this->mute) {
    to_value_result.Set("mute", *this->mute);

  }
  if (this->unpowered) {
    to_value_result.Set("unpowered", *this->unpowered);

  }

  return to_value_result;
}


Protocols::Protocols()
 {}

Protocols::~Protocols() = default;
Protocols::Protocols(Protocols&& rhs) = default;
Protocols& Protocols::operator=(Protocols&& rhs) = default;
Protocols Protocols::Clone() const {
  Protocols out;
  out.t0 = t0;
  out.t1 = t1;
  out.raw = raw;
  return out;
}

// static
bool Protocols::Populate(
    const base::Value::Dict& dict, Protocols& out) {
  const base::Value* t0_value = dict.Find("t0");
  if (t0_value) {
    {
      auto temp = (*t0_value).GetIfBool();
      if (!temp.has_value()) {
        out.t0 = absl::nullopt;
        return false;
      }
      out.t0 = *temp;
    }
  }

  const base::Value* t1_value = dict.Find("t1");
  if (t1_value) {
    {
      auto temp = (*t1_value).GetIfBool();
      if (!temp.has_value()) {
        out.t1 = absl::nullopt;
        return false;
      }
      out.t1 = *temp;
    }
  }

  const base::Value* raw_value = dict.Find("raw");
  if (raw_value) {
    {
      auto temp = (*raw_value).GetIfBool();
      if (!temp.has_value()) {
        out.raw = absl::nullopt;
        return false;
      }
      out.raw = *temp;
    }
  }

  return true;
}

// static
bool Protocols::Populate(
    const base::Value& value, Protocols& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Protocols> Protocols::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Protocols>();
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
absl::optional<Protocols> Protocols::FromValue(const base::Value::Dict& value) {
  Protocols out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Protocols> Protocols::FromValue(const base::Value& value) {
  Protocols out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Protocols::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->t0) {
    to_value_result.Set("t0", *this->t0);

  }
  if (this->t1) {
    to_value_result.Set("t1", *this->t1);

  }
  if (this->raw) {
    to_value_result.Set("raw", *this->raw);

  }

  return to_value_result;
}


const char* ToString(Protocol enum_param) {
  switch (enum_param) {
    case PROTOCOL_UNDEFINED:
      return "UNDEFINED";
    case PROTOCOL_T0:
      return "T0";
    case PROTOCOL_T1:
      return "T1";
    case PROTOCOL_RAW:
      return "RAW";
    case PROTOCOL_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

Protocol ParseProtocol(base::StringPiece enum_string) {
  if (enum_string == "UNDEFINED")
    return PROTOCOL_UNDEFINED;
  if (enum_string == "T0")
    return PROTOCOL_T0;
  if (enum_string == "T1")
    return PROTOCOL_T1;
  if (enum_string == "RAW")
    return PROTOCOL_RAW;
  return PROTOCOL_NONE;
}

std::u16string GetProtocolParseError(base::StringPiece enum_string) {
  return u"expected \"UNDEFINED\" or \"T0\" or \"T1\" or \"RAW\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ReaderStateIn::ReaderStateIn()
: current_count(0) {}

ReaderStateIn::~ReaderStateIn() = default;
ReaderStateIn::ReaderStateIn(ReaderStateIn&& rhs) = default;
ReaderStateIn& ReaderStateIn::operator=(ReaderStateIn&& rhs) = default;
ReaderStateIn ReaderStateIn::Clone() const {
  ReaderStateIn out;
  out.reader = reader;
  out.current_state = current_state.Clone();
  out.current_count = current_count;
  return out;
}

// static
bool ReaderStateIn::Populate(
    const base::Value::Dict& dict, ReaderStateIn& out) {
  const base::Value* reader_value = dict.Find("reader");
  if (!reader_value) {
    return false;
  }
  {
    auto* temp = (*reader_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.reader = *temp;
  }

  const base::Value* current_state_value = dict.Find("currentState");
  if (!current_state_value) {
    return false;
  }
  {
    if (!(*current_state_value).is_dict()) {
      return false;
    }
    if (!ReaderStateFlags::Populate((*current_state_value).GetDict(), out.current_state)) {
      return false;
    }
  }

  const base::Value* current_count_value = dict.Find("currentCount");
  if (!current_count_value) {
    return false;
  }
  {
    auto temp = (*current_count_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.current_count = *temp;
  }

  return true;
}

// static
bool ReaderStateIn::Populate(
    const base::Value& value, ReaderStateIn& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReaderStateIn> ReaderStateIn::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReaderStateIn>();
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
absl::optional<ReaderStateIn> ReaderStateIn::FromValue(const base::Value::Dict& value) {
  ReaderStateIn out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReaderStateIn> ReaderStateIn::FromValue(const base::Value& value) {
  ReaderStateIn out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReaderStateIn::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("reader", this->reader);

  to_value_result.Set("currentState", (this->current_state).ToValue());

  to_value_result.Set("currentCount", this->current_count);


  return to_value_result;
}


ReaderStateOut::ReaderStateOut()
: event_count(0) {}

ReaderStateOut::~ReaderStateOut() = default;
ReaderStateOut::ReaderStateOut(ReaderStateOut&& rhs) = default;
ReaderStateOut& ReaderStateOut::operator=(ReaderStateOut&& rhs) = default;
ReaderStateOut ReaderStateOut::Clone() const {
  ReaderStateOut out;
  out.reader = reader;
  out.event_state = event_state.Clone();
  out.event_count = event_count;
  out.atr = atr;
  return out;
}

// static
bool ReaderStateOut::Populate(
    const base::Value::Dict& dict, ReaderStateOut& out) {
  const base::Value* reader_value = dict.Find("reader");
  if (!reader_value) {
    return false;
  }
  {
    auto* temp = (*reader_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.reader = *temp;
  }

  const base::Value* event_state_value = dict.Find("eventState");
  if (!event_state_value) {
    return false;
  }
  {
    if (!(*event_state_value).is_dict()) {
      return false;
    }
    if (!ReaderStateFlags::Populate((*event_state_value).GetDict(), out.event_state)) {
      return false;
    }
  }

  const base::Value* event_count_value = dict.Find("eventCount");
  if (!event_count_value) {
    return false;
  }
  {
    auto temp = (*event_count_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.event_count = *temp;
  }

  const base::Value* atr_value = dict.Find("atr");
  if (!atr_value) {
    return false;
  }
  {
    if (!(*atr_value).is_blob()) {
      return false;
    }
    else {
      out.atr = (*atr_value).GetBlob();
    }
  }

  return true;
}

// static
bool ReaderStateOut::Populate(
    const base::Value& value, ReaderStateOut& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<ReaderStateOut> ReaderStateOut::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<ReaderStateOut>();
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
absl::optional<ReaderStateOut> ReaderStateOut::FromValue(const base::Value::Dict& value) {
  ReaderStateOut out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<ReaderStateOut> ReaderStateOut::FromValue(const base::Value& value) {
  ReaderStateOut out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict ReaderStateOut::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("reader", this->reader);

  to_value_result.Set("eventState", (this->event_state).ToValue());

  to_value_result.Set("eventCount", this->event_count);

  to_value_result.Set("atr", base::Value(this->atr));


  return to_value_result;
}


Timeout::Timeout()
 {}

Timeout::~Timeout() = default;
Timeout::Timeout(Timeout&& rhs) = default;
Timeout& Timeout::operator=(Timeout&& rhs) = default;
Timeout Timeout::Clone() const {
  Timeout out;
  out.milliseconds = milliseconds;
  return out;
}

// static
bool Timeout::Populate(
    const base::Value::Dict& dict, Timeout& out) {
  const base::Value* milliseconds_value = dict.Find("milliseconds");
  if (milliseconds_value) {
    {
      auto temp = (*milliseconds_value).GetIfInt();
      if (!temp.has_value()) {
        out.milliseconds = absl::nullopt;
        return false;
      }
      out.milliseconds = *temp;
    }
  }

  return true;
}

// static
bool Timeout::Populate(
    const base::Value& value, Timeout& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<Timeout> Timeout::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<Timeout>();
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
absl::optional<Timeout> Timeout::FromValue(const base::Value::Dict& value) {
  Timeout out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Timeout> Timeout::FromValue(const base::Value& value) {
  Timeout out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict Timeout::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->milliseconds) {
    to_value_result.Set("milliseconds", *this->milliseconds);

  }

  return to_value_result;
}



//
// Functions
//

namespace ReportEstablishContextResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& scard_context_value = args[1];
    {
      auto temp = scard_context_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.scard_context = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& result_code_value = args[2];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return absl::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ReportEstablishContextResult

namespace ReportReleaseContextResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& result_code_value = args[1];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return absl::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ReportReleaseContextResult

namespace ReportListReadersResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& readers_value = args[1];
    {
      if (!readers_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(readers_value.GetList(), params.readers)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& result_code_value = args[2];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return absl::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ReportListReadersResult

namespace ReportGetStatusChangeResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& reader_states_value = args[1];
    {
      if (!reader_states_value.is_list()) {
        return absl::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(reader_states_value.GetList(), params.reader_states)) {
          return absl::nullopt;
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& result_code_value = args[2];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return absl::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ReportGetStatusChangeResult

namespace ReportPlainResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& result_code_value = args[1];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return absl::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ReportPlainResult

namespace ReportConnectResult {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& scard_handle_value = args[1];
    {
      auto temp = scard_handle_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.scard_handle = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& active_protocol_value = args[2];
    {
      const std::string* protocol_as_string = active_protocol_value.GetIfString();
      if (!protocol_as_string) {
        return absl::nullopt;
      }
      params.active_protocol = ParseProtocol(*protocol_as_string);
      if (params.active_protocol == Protocol()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& result_code_value = args[3];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return absl::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ReportConnectResult

namespace ReportDataResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
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
    const base::Value& result_code_value = args[2];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return absl::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ReportDataResult

namespace ReportStatusResult {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 6) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& reader_name_value = args[1];
    {
      auto* temp = reader_name_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.reader_name = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& state_value = args[2];
    {
      const std::string* connection_state_as_string = state_value.GetIfString();
      if (!connection_state_as_string) {
        return absl::nullopt;
      }
      params.state = ParseConnectionState(*connection_state_as_string);
      if (params.state == ConnectionState()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& protocol_value = args[3];
    {
      const std::string* protocol_as_string = protocol_value.GetIfString();
      if (!protocol_as_string) {
        return absl::nullopt;
      }
      params.protocol = ParseProtocol(*protocol_as_string);
      if (params.protocol == Protocol()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& atr_value = args[4];
    {
      if (!atr_value.is_blob()) {
        return absl::nullopt;
      }
      else {
        params.atr = atr_value.GetBlob();
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (5 < args.size() &&
      !args[5].is_none()) {
    const base::Value& result_code_value = args[5];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return absl::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace ReportStatusResult

//
// Events
//

namespace OnEstablishContextRequested {

const char kEventName[] = "smartCardProviderPrivate.onEstablishContextRequested";

base::Value::List Create(int request_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(request_id);

  return create_results;
}

}  // namespace OnEstablishContextRequested

namespace OnReleaseContextRequested {

const char kEventName[] = "smartCardProviderPrivate.onReleaseContextRequested";

base::Value::List Create(int request_id, int scard_context) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(request_id);

  create_results.Append(scard_context);

  return create_results;
}

}  // namespace OnReleaseContextRequested

namespace OnListReadersRequested {

const char kEventName[] = "smartCardProviderPrivate.onListReadersRequested";

base::Value::List Create(int request_id, int scard_context) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(request_id);

  create_results.Append(scard_context);

  return create_results;
}

}  // namespace OnListReadersRequested

namespace OnGetStatusChangeRequested {

const char kEventName[] = "smartCardProviderPrivate.onGetStatusChangeRequested";

base::Value::List Create(int request_id, int scard_context, const Timeout& timeout, const std::vector<ReaderStateIn>& reader_states) {
  base::Value::List create_results;
  create_results.reserve(4);
  create_results.Append(request_id);

  create_results.Append(scard_context);

  create_results.Append((timeout).ToValue());

  create_results.Append(json_schema_compiler::util::CreateValueFromArray(reader_states));

  return create_results;
}

}  // namespace OnGetStatusChangeRequested

namespace OnCancelRequested {

const char kEventName[] = "smartCardProviderPrivate.onCancelRequested";

base::Value::List Create(int request_id, int scard_context) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(request_id);

  create_results.Append(scard_context);

  return create_results;
}

}  // namespace OnCancelRequested

namespace OnConnectRequested {

const char kEventName[] = "smartCardProviderPrivate.onConnectRequested";

base::Value::List Create(int request_id, int scard_context, const std::string& reader, const ShareMode& share_mode, const Protocols& preferred_protocols) {
  base::Value::List create_results;
  create_results.reserve(5);
  create_results.Append(request_id);

  create_results.Append(scard_context);

  create_results.Append(reader);

  create_results.Append(smart_card_provider_private::ToString(share_mode));

  create_results.Append((preferred_protocols).ToValue());

  return create_results;
}

}  // namespace OnConnectRequested

namespace OnDisconnectRequested {

const char kEventName[] = "smartCardProviderPrivate.onDisconnectRequested";

base::Value::List Create(int request_id, int scard_handle, const Disposition& disposition) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(request_id);

  create_results.Append(scard_handle);

  create_results.Append(smart_card_provider_private::ToString(disposition));

  return create_results;
}

}  // namespace OnDisconnectRequested

namespace OnTransmitRequested {

const char kEventName[] = "smartCardProviderPrivate.onTransmitRequested";

base::Value::List Create(int request_id, int scard_handle, const Protocol& protocol, const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(4);
  create_results.Append(request_id);

  create_results.Append(scard_handle);

  create_results.Append(smart_card_provider_private::ToString(protocol));

  create_results.Append(base::Value(data));

  return create_results;
}

}  // namespace OnTransmitRequested

namespace OnControlRequested {

const char kEventName[] = "smartCardProviderPrivate.onControlRequested";

base::Value::List Create(int request_id, int scard_handle, int control_code, const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(4);
  create_results.Append(request_id);

  create_results.Append(scard_handle);

  create_results.Append(control_code);

  create_results.Append(base::Value(data));

  return create_results;
}

}  // namespace OnControlRequested

namespace OnGetAttribRequested {

const char kEventName[] = "smartCardProviderPrivate.onGetAttribRequested";

base::Value::List Create(int request_id, int scard_handle, int attrib_id) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(request_id);

  create_results.Append(scard_handle);

  create_results.Append(attrib_id);

  return create_results;
}

}  // namespace OnGetAttribRequested

namespace OnSetAttribRequested {

const char kEventName[] = "smartCardProviderPrivate.onSetAttribRequested";

base::Value::List Create(int request_id, int scard_handle, int attrib_id, const std::vector<uint8_t>& data) {
  base::Value::List create_results;
  create_results.reserve(4);
  create_results.Append(request_id);

  create_results.Append(scard_handle);

  create_results.Append(attrib_id);

  create_results.Append(base::Value(data));

  return create_results;
}

}  // namespace OnSetAttribRequested

namespace OnStatusRequested {

const char kEventName[] = "smartCardProviderPrivate.onStatusRequested";

base::Value::List Create(int request_id, int scard_handle) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(request_id);

  create_results.Append(scard_handle);

  return create_results;
}

}  // namespace OnStatusRequested

namespace OnBeginTransactionRequested {

const char kEventName[] = "smartCardProviderPrivate.onBeginTransactionRequested";

base::Value::List Create(int request_id, int scard_handle) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(request_id);

  create_results.Append(scard_handle);

  return create_results;
}

}  // namespace OnBeginTransactionRequested

namespace OnEndTransactionRequested {

const char kEventName[] = "smartCardProviderPrivate.onEndTransactionRequested";

base::Value::List Create(int request_id, int scard_handle, const Disposition& disposition) {
  base::Value::List create_results;
  create_results.reserve(3);
  create_results.Append(request_id);

  create_results.Append(scard_handle);

  create_results.Append(smart_card_provider_private::ToString(disposition));

  return create_results;
}

}  // namespace OnEndTransactionRequested

}  // namespace smart_card_provider_private
}  // namespace api
}  // namespace extensions

