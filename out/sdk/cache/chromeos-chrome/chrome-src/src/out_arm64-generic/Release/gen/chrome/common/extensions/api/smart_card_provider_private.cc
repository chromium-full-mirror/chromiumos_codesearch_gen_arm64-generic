// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/smart_card_provider_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/smart_card_provider_private.h"

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
namespace smart_card_provider_private {
//
// Types
//

const char* ToString(ResultCode enum_param) {
  switch (enum_param) {
    case ResultCode::kSuccess:
      return "SUCCESS";
    case ResultCode::kRemovedCard:
      return "REMOVED_CARD";
    case ResultCode::kResetCard:
      return "RESET_CARD";
    case ResultCode::kUnpoweredCard:
      return "UNPOWERED_CARD";
    case ResultCode::kUnresponsiveCard:
      return "UNRESPONSIVE_CARD";
    case ResultCode::kUnsupportedCard:
      return "UNSUPPORTED_CARD";
    case ResultCode::kReaderUnavailable:
      return "READER_UNAVAILABLE";
    case ResultCode::kSharingViolation:
      return "SHARING_VIOLATION";
    case ResultCode::kNotTransacted:
      return "NOT_TRANSACTED";
    case ResultCode::kNoSmartcard:
      return "NO_SMARTCARD";
    case ResultCode::kProtoMismatch:
      return "PROTO_MISMATCH";
    case ResultCode::kSystemCancelled:
      return "SYSTEM_CANCELLED";
    case ResultCode::kNotReady:
      return "NOT_READY";
    case ResultCode::kCancelled:
      return "CANCELLED";
    case ResultCode::kInsufficientBuffer:
      return "INSUFFICIENT_BUFFER";
    case ResultCode::kInvalidHandle:
      return "INVALID_HANDLE";
    case ResultCode::kInvalidParameter:
      return "INVALID_PARAMETER";
    case ResultCode::kInvalidValue:
      return "INVALID_VALUE";
    case ResultCode::kNoMemory:
      return "NO_MEMORY";
    case ResultCode::kTimeout:
      return "TIMEOUT";
    case ResultCode::kUnknownReader:
      return "UNKNOWN_READER";
    case ResultCode::kUnsupportedFeature:
      return "UNSUPPORTED_FEATURE";
    case ResultCode::kNoReadersAvailable:
      return "NO_READERS_AVAILABLE";
    case ResultCode::kServiceStopped:
      return "SERVICE_STOPPED";
    case ResultCode::kNoService:
      return "NO_SERVICE";
    case ResultCode::kCommError:
      return "COMM_ERROR";
    case ResultCode::kInternalError:
      return "INTERNAL_ERROR";
    case ResultCode::kUnknownError:
      return "UNKNOWN_ERROR";
    case ResultCode::kServerTooBusy:
      return "SERVER_TOO_BUSY";
    case ResultCode::kUnexpected:
      return "UNEXPECTED";
    case ResultCode::kShutdown:
      return "SHUTDOWN";
    case ResultCode::kUnknown:
      return "UNKNOWN";
    case ResultCode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ResultCode ParseResultCode(base::StringPiece enum_string) {
  if (enum_string == "SUCCESS")
    return ResultCode::kSuccess;
  if (enum_string == "REMOVED_CARD")
    return ResultCode::kRemovedCard;
  if (enum_string == "RESET_CARD")
    return ResultCode::kResetCard;
  if (enum_string == "UNPOWERED_CARD")
    return ResultCode::kUnpoweredCard;
  if (enum_string == "UNRESPONSIVE_CARD")
    return ResultCode::kUnresponsiveCard;
  if (enum_string == "UNSUPPORTED_CARD")
    return ResultCode::kUnsupportedCard;
  if (enum_string == "READER_UNAVAILABLE")
    return ResultCode::kReaderUnavailable;
  if (enum_string == "SHARING_VIOLATION")
    return ResultCode::kSharingViolation;
  if (enum_string == "NOT_TRANSACTED")
    return ResultCode::kNotTransacted;
  if (enum_string == "NO_SMARTCARD")
    return ResultCode::kNoSmartcard;
  if (enum_string == "PROTO_MISMATCH")
    return ResultCode::kProtoMismatch;
  if (enum_string == "SYSTEM_CANCELLED")
    return ResultCode::kSystemCancelled;
  if (enum_string == "NOT_READY")
    return ResultCode::kNotReady;
  if (enum_string == "CANCELLED")
    return ResultCode::kCancelled;
  if (enum_string == "INSUFFICIENT_BUFFER")
    return ResultCode::kInsufficientBuffer;
  if (enum_string == "INVALID_HANDLE")
    return ResultCode::kInvalidHandle;
  if (enum_string == "INVALID_PARAMETER")
    return ResultCode::kInvalidParameter;
  if (enum_string == "INVALID_VALUE")
    return ResultCode::kInvalidValue;
  if (enum_string == "NO_MEMORY")
    return ResultCode::kNoMemory;
  if (enum_string == "TIMEOUT")
    return ResultCode::kTimeout;
  if (enum_string == "UNKNOWN_READER")
    return ResultCode::kUnknownReader;
  if (enum_string == "UNSUPPORTED_FEATURE")
    return ResultCode::kUnsupportedFeature;
  if (enum_string == "NO_READERS_AVAILABLE")
    return ResultCode::kNoReadersAvailable;
  if (enum_string == "SERVICE_STOPPED")
    return ResultCode::kServiceStopped;
  if (enum_string == "NO_SERVICE")
    return ResultCode::kNoService;
  if (enum_string == "COMM_ERROR")
    return ResultCode::kCommError;
  if (enum_string == "INTERNAL_ERROR")
    return ResultCode::kInternalError;
  if (enum_string == "UNKNOWN_ERROR")
    return ResultCode::kUnknownError;
  if (enum_string == "SERVER_TOO_BUSY")
    return ResultCode::kServerTooBusy;
  if (enum_string == "UNEXPECTED")
    return ResultCode::kUnexpected;
  if (enum_string == "SHUTDOWN")
    return ResultCode::kShutdown;
  if (enum_string == "UNKNOWN")
    return ResultCode::kUnknown;
  return ResultCode::kNone;
}

std::u16string GetResultCodeParseError(base::StringPiece enum_string) {
  return u"expected \"SUCCESS\" or \"REMOVED_CARD\" or \"RESET_CARD\" or \"UNPOWERED_CARD\" or \"UNRESPONSIVE_CARD\" or \"UNSUPPORTED_CARD\" or \"READER_UNAVAILABLE\" or \"SHARING_VIOLATION\" or \"NOT_TRANSACTED\" or \"NO_SMARTCARD\" or \"PROTO_MISMATCH\" or \"SYSTEM_CANCELLED\" or \"NOT_READY\" or \"CANCELLED\" or \"INSUFFICIENT_BUFFER\" or \"INVALID_HANDLE\" or \"INVALID_PARAMETER\" or \"INVALID_VALUE\" or \"NO_MEMORY\" or \"TIMEOUT\" or \"UNKNOWN_READER\" or \"UNSUPPORTED_FEATURE\" or \"NO_READERS_AVAILABLE\" or \"SERVICE_STOPPED\" or \"NO_SERVICE\" or \"COMM_ERROR\" or \"INTERNAL_ERROR\" or \"UNKNOWN_ERROR\" or \"SERVER_TOO_BUSY\" or \"UNEXPECTED\" or \"SHUTDOWN\" or \"UNKNOWN\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ShareMode enum_param) {
  switch (enum_param) {
    case ShareMode::kShared:
      return "SHARED";
    case ShareMode::kExclusive:
      return "EXCLUSIVE";
    case ShareMode::kDirect:
      return "DIRECT";
    case ShareMode::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ShareMode ParseShareMode(base::StringPiece enum_string) {
  if (enum_string == "SHARED")
    return ShareMode::kShared;
  if (enum_string == "EXCLUSIVE")
    return ShareMode::kExclusive;
  if (enum_string == "DIRECT")
    return ShareMode::kDirect;
  return ShareMode::kNone;
}

std::u16string GetShareModeParseError(base::StringPiece enum_string) {
  return u"expected \"SHARED\" or \"EXCLUSIVE\" or \"DIRECT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Disposition enum_param) {
  switch (enum_param) {
    case Disposition::kLeaveCard:
      return "LEAVE_CARD";
    case Disposition::kResetCard:
      return "RESET_CARD";
    case Disposition::kUnpowerCard:
      return "UNPOWER_CARD";
    case Disposition::kEjectCard:
      return "EJECT_CARD";
    case Disposition::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Disposition ParseDisposition(base::StringPiece enum_string) {
  if (enum_string == "LEAVE_CARD")
    return Disposition::kLeaveCard;
  if (enum_string == "RESET_CARD")
    return Disposition::kResetCard;
  if (enum_string == "UNPOWER_CARD")
    return Disposition::kUnpowerCard;
  if (enum_string == "EJECT_CARD")
    return Disposition::kEjectCard;
  return Disposition::kNone;
}

std::u16string GetDispositionParseError(base::StringPiece enum_string) {
  return u"expected \"LEAVE_CARD\" or \"RESET_CARD\" or \"UNPOWER_CARD\" or \"EJECT_CARD\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ConnectionState enum_param) {
  switch (enum_param) {
    case ConnectionState::kAbsent:
      return "ABSENT";
    case ConnectionState::kPresent:
      return "PRESENT";
    case ConnectionState::kSwallowed:
      return "SWALLOWED";
    case ConnectionState::kPowered:
      return "POWERED";
    case ConnectionState::kNegotiable:
      return "NEGOTIABLE";
    case ConnectionState::kSpecific:
      return "SPECIFIC";
    case ConnectionState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ConnectionState ParseConnectionState(base::StringPiece enum_string) {
  if (enum_string == "ABSENT")
    return ConnectionState::kAbsent;
  if (enum_string == "PRESENT")
    return ConnectionState::kPresent;
  if (enum_string == "SWALLOWED")
    return ConnectionState::kSwallowed;
  if (enum_string == "POWERED")
    return ConnectionState::kPowered;
  if (enum_string == "NEGOTIABLE")
    return ConnectionState::kNegotiable;
  if (enum_string == "SPECIFIC")
    return ConnectionState::kSpecific;
  return ConnectionState::kNone;
}

std::u16string GetConnectionStateParseError(base::StringPiece enum_string) {
  return u"expected \"ABSENT\" or \"PRESENT\" or \"SWALLOWED\" or \"POWERED\" or \"NEGOTIABLE\" or \"SPECIFIC\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ReaderStateFlags::ReaderStateFlags()
 {}

ReaderStateFlags::~ReaderStateFlags() = default;
ReaderStateFlags::ReaderStateFlags(ReaderStateFlags&& rhs) noexcept = default;
ReaderStateFlags& ReaderStateFlags::operator=(ReaderStateFlags&& rhs) noexcept = default;
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
        out.unaware = std::nullopt;
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
        out.ignore = std::nullopt;
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
        out.changed = std::nullopt;
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
        out.unknown = std::nullopt;
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
        out.unavailable = std::nullopt;
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
        out.empty = std::nullopt;
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
        out.present = std::nullopt;
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
        out.exclusive = std::nullopt;
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
        out.inuse = std::nullopt;
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
        out.mute = std::nullopt;
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
        out.unpowered = std::nullopt;
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
std::optional<ReaderStateFlags> ReaderStateFlags::FromValue(const base::Value::Dict& value) {
  ReaderStateFlags out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReaderStateFlags> ReaderStateFlags::FromValue(const base::Value& value) {
  ReaderStateFlags out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
Protocols::Protocols(Protocols&& rhs) noexcept = default;
Protocols& Protocols::operator=(Protocols&& rhs) noexcept = default;
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
        out.t0 = std::nullopt;
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
        out.t1 = std::nullopt;
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
        out.raw = std::nullopt;
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
std::optional<Protocols> Protocols::FromValue(const base::Value::Dict& value) {
  Protocols out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Protocols> Protocols::FromValue(const base::Value& value) {
  Protocols out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    case Protocol::kUndefined:
      return "UNDEFINED";
    case Protocol::kT0:
      return "T0";
    case Protocol::kT1:
      return "T1";
    case Protocol::kRaw:
      return "RAW";
    case Protocol::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Protocol ParseProtocol(base::StringPiece enum_string) {
  if (enum_string == "UNDEFINED")
    return Protocol::kUndefined;
  if (enum_string == "T0")
    return Protocol::kT0;
  if (enum_string == "T1")
    return Protocol::kT1;
  if (enum_string == "RAW")
    return Protocol::kRaw;
  return Protocol::kNone;
}

std::u16string GetProtocolParseError(base::StringPiece enum_string) {
  return u"expected \"UNDEFINED\" or \"T0\" or \"T1\" or \"RAW\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ReaderStateIn::ReaderStateIn()
: current_count(0) {}

ReaderStateIn::~ReaderStateIn() = default;
ReaderStateIn::ReaderStateIn(ReaderStateIn&& rhs) noexcept = default;
ReaderStateIn& ReaderStateIn::operator=(ReaderStateIn&& rhs) noexcept = default;
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
std::optional<ReaderStateIn> ReaderStateIn::FromValue(const base::Value::Dict& value) {
  ReaderStateIn out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReaderStateIn> ReaderStateIn::FromValue(const base::Value& value) {
  ReaderStateIn out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
ReaderStateOut::ReaderStateOut(ReaderStateOut&& rhs) noexcept = default;
ReaderStateOut& ReaderStateOut::operator=(ReaderStateOut&& rhs) noexcept = default;
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
std::optional<ReaderStateOut> ReaderStateOut::FromValue(const base::Value::Dict& value) {
  ReaderStateOut out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ReaderStateOut> ReaderStateOut::FromValue(const base::Value& value) {
  ReaderStateOut out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
Timeout::Timeout(Timeout&& rhs) noexcept = default;
Timeout& Timeout::operator=(Timeout&& rhs) noexcept = default;
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
        out.milliseconds = std::nullopt;
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
std::optional<Timeout> Timeout::FromValue(const base::Value::Dict& value) {
  Timeout out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Timeout> Timeout::FromValue(const base::Value& value) {
  Timeout out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& scard_context_value = args[1];
    {
      auto temp = scard_context_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.scard_context = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& result_code_value = args[2];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return std::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ReportEstablishContextResult

namespace ReportReleaseContextResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& result_code_value = args[1];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return std::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ReportReleaseContextResult

namespace ReportListReadersResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& readers_value = args[1];
    {
      if (!readers_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(readers_value.GetList(), params.readers)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& result_code_value = args[2];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return std::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ReportListReadersResult

namespace ReportGetStatusChangeResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& reader_states_value = args[1];
    {
      if (!reader_states_value.is_list()) {
        return std::nullopt;
      }
      else {
        if (!json_schema_compiler::util::PopulateArrayFromList(reader_states_value.GetList(), params.reader_states)) {
          return std::nullopt;
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& result_code_value = args[2];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return std::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ReportGetStatusChangeResult

namespace ReportPlainResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& result_code_value = args[1];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return std::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ReportPlainResult

namespace ReportConnectResult {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 4) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& scard_handle_value = args[1];
    {
      auto temp = scard_handle_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.scard_handle = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& active_protocol_value = args[2];
    {
      const std::string* protocol_as_string = active_protocol_value.GetIfString();
      if (!protocol_as_string) {
        return std::nullopt;
      }
      params.active_protocol = ParseProtocol(*protocol_as_string);
      if (params.active_protocol == Protocol()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& result_code_value = args[3];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return std::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ReportConnectResult

namespace ReportDataResult {

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
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
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

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& result_code_value = args[2];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return std::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace ReportDataResult

namespace ReportStatusResult {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 6) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& request_id_value = args[0];
    {
      auto temp = request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& reader_name_value = args[1];
    {
      auto* temp = reader_name_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.reader_name = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& state_value = args[2];
    {
      const std::string* connection_state_as_string = state_value.GetIfString();
      if (!connection_state_as_string) {
        return std::nullopt;
      }
      params.state = ParseConnectionState(*connection_state_as_string);
      if (params.state == ConnectionState()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (3 < args.size() &&
      !args[3].is_none()) {
    const base::Value& protocol_value = args[3];
    {
      const std::string* protocol_as_string = protocol_value.GetIfString();
      if (!protocol_as_string) {
        return std::nullopt;
      }
      params.protocol = ParseProtocol(*protocol_as_string);
      if (params.protocol == Protocol()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (4 < args.size() &&
      !args[4].is_none()) {
    const base::Value& atr_value = args[4];
    {
      if (!atr_value.is_blob()) {
        return std::nullopt;
      }
      else {
        params.atr = atr_value.GetBlob();
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (5 < args.size() &&
      !args[5].is_none()) {
    const base::Value& result_code_value = args[5];
    {
      const std::string* result_code_as_string = result_code_value.GetIfString();
      if (!result_code_as_string) {
        return std::nullopt;
      }
      params.result_code = ParseResultCode(*result_code_as_string);
      if (params.result_code == ResultCode()) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
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

