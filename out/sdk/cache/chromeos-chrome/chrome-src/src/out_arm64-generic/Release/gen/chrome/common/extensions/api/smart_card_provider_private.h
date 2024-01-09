// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/smart_card_provider_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SMART_CARD_PROVIDER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_SMART_CARD_PROVIDER_PRIVATE_H__

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
namespace smart_card_provider_private {

//
// Types
//

// PC/SC error codes we can expect to hit (thus a non-exhaustive list). UNKNOWN
// means an SCARD error code that is not mapped in this enum (and thus should
// probably be added here).
enum class ResultCode {
  kNone = 0,
  kSuccess,
  kRemovedCard,
  kResetCard,
  kUnpoweredCard,
  kUnresponsiveCard,
  kUnsupportedCard,
  kReaderUnavailable,
  kSharingViolation,
  kNotTransacted,
  kNoSmartcard,
  kProtoMismatch,
  kSystemCancelled,
  kNotReady,
  kCancelled,
  kInsufficientBuffer,
  kInvalidHandle,
  kInvalidParameter,
  kInvalidValue,
  kNoMemory,
  kTimeout,
  kUnknownReader,
  kUnsupportedFeature,
  kNoReadersAvailable,
  kServiceStopped,
  kNoService,
  kCommError,
  kInternalError,
  kUnknownError,
  kServerTooBusy,
  kUnexpected,
  kShutdown,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(ResultCode as_enum);
ResultCode ParseResultCode(base::StringPiece as_string);
std::u16string GetResultCodeParseError(base::StringPiece as_string);

// Maps to the SCARD_SHARE_* values defined in the winscard.h API.
enum class ShareMode {
  kNone = 0,
  kShared,
  kExclusive,
  kDirect,
  kMaxValue = kDirect,
};


const char* ToString(ShareMode as_enum);
ShareMode ParseShareMode(base::StringPiece as_string);
std::u16string GetShareModeParseError(base::StringPiece as_string);

// What the reader should do with the card inserted in it.
enum class Disposition {
  kNone = 0,
  kLeaveCard,
  kResetCard,
  kUnpowerCard,
  kEjectCard,
  kMaxValue = kEjectCard,
};


const char* ToString(Disposition as_enum);
Disposition ParseDisposition(base::StringPiece as_string);
std::u16string GetDispositionParseError(base::StringPiece as_string);

enum class ConnectionState {
  kNone = 0,
  kAbsent,
  kPresent,
  kSwallowed,
  kPowered,
  kNegotiable,
  kSpecific,
  kMaxValue = kSpecific,
};


const char* ToString(ConnectionState as_enum);
ConnectionState ParseConnectionState(base::StringPiece as_string);
std::u16string GetConnectionStateParseError(base::StringPiece as_string);

struct ReaderStateFlags {
  ReaderStateFlags();
  ~ReaderStateFlags();
  ReaderStateFlags(const ReaderStateFlags&) = delete;
  ReaderStateFlags& operator=(const ReaderStateFlags&) = delete;
  ReaderStateFlags(ReaderStateFlags&& rhs) noexcept;
  ReaderStateFlags& operator=(ReaderStateFlags&& rhs) noexcept;

  // Populates a ReaderStateFlags object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReaderStateFlags& out);

  // Populates a ReaderStateFlags object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReaderStateFlags& out);

  // Creates a deep copy of ReaderStateFlags.
  ReaderStateFlags Clone() const;

  // Creates a ReaderStateFlags object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ReaderStateFlags> FromValue(const base::Value::Dict& value);

  // Creates a ReaderStateFlags object from a base::Value, or nullopt on
  // failure.
  static std::optional<ReaderStateFlags> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReaderStateFlags object.
  base::Value::Dict ToValue() const;

  std::optional<bool> unaware;

  std::optional<bool> ignore;

  std::optional<bool> changed;

  std::optional<bool> unknown;

  std::optional<bool> unavailable;

  std::optional<bool> empty;

  std::optional<bool> present;

  std::optional<bool> exclusive;

  std::optional<bool> inuse;

  std::optional<bool> mute;

  std::optional<bool> unpowered;

};

struct Protocols {
  Protocols();
  ~Protocols();
  Protocols(const Protocols&) = delete;
  Protocols& operator=(const Protocols&) = delete;
  Protocols(Protocols&& rhs) noexcept;
  Protocols& operator=(Protocols&& rhs) noexcept;

  // Populates a Protocols object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Protocols& out);

  // Populates a Protocols object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Protocols& out);

  // Creates a deep copy of Protocols.
  Protocols Clone() const;

  // Creates a Protocols object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Protocols> FromValue(const base::Value::Dict& value);

  // Creates a Protocols object from a base::Value, or nullopt on failure.
  static std::optional<Protocols> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProtocols object.
  base::Value::Dict ToValue() const;

  std::optional<bool> t0;

  std::optional<bool> t1;

  std::optional<bool> raw;

};

// Maps to the SCARD_PROTOCOL_* values defined in the winscard.h API.
enum class Protocol {
  kNone = 0,
  kUndefined,
  kT0,
  kT1,
  kRaw,
  kMaxValue = kRaw,
};


const char* ToString(Protocol as_enum);
Protocol ParseProtocol(base::StringPiece as_string);
std::u16string GetProtocolParseError(base::StringPiece as_string);

struct ReaderStateIn {
  ReaderStateIn();
  ~ReaderStateIn();
  ReaderStateIn(const ReaderStateIn&) = delete;
  ReaderStateIn& operator=(const ReaderStateIn&) = delete;
  ReaderStateIn(ReaderStateIn&& rhs) noexcept;
  ReaderStateIn& operator=(ReaderStateIn&& rhs) noexcept;

  // Populates a ReaderStateIn object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReaderStateIn& out);

  // Populates a ReaderStateIn object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReaderStateIn& out);

  // Creates a deep copy of ReaderStateIn.
  ReaderStateIn Clone() const;

  // Creates a ReaderStateIn object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ReaderStateIn> FromValue(const base::Value::Dict& value);

  // Creates a ReaderStateIn object from a base::Value, or nullopt on failure.
  static std::optional<ReaderStateIn> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReaderStateIn object.
  base::Value::Dict ToValue() const;

  std::string reader;

  ReaderStateFlags current_state;

  // Number of card insertion and removal events that happened in this reader, as
  // known by the application.
  int current_count;

};

struct ReaderStateOut {
  ReaderStateOut();
  ~ReaderStateOut();
  ReaderStateOut(const ReaderStateOut&) = delete;
  ReaderStateOut& operator=(const ReaderStateOut&) = delete;
  ReaderStateOut(ReaderStateOut&& rhs) noexcept;
  ReaderStateOut& operator=(ReaderStateOut&& rhs) noexcept;

  // Populates a ReaderStateOut object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReaderStateOut& out);

  // Populates a ReaderStateOut object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReaderStateOut& out);

  // Creates a deep copy of ReaderStateOut.
  ReaderStateOut Clone() const;

  // Creates a ReaderStateOut object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ReaderStateOut> FromValue(const base::Value::Dict& value);

  // Creates a ReaderStateOut object from a base::Value, or nullopt on failure.
  static std::optional<ReaderStateOut> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReaderStateOut object.
  base::Value::Dict ToValue() const;

  std::string reader;

  ReaderStateFlags event_state;

  // The actual number of card insertion and removal events that happened in this
  // reader. Set to zero if not supported.
  int event_count;

  std::vector<uint8_t> atr;

};

struct Timeout {
  Timeout();
  ~Timeout();
  Timeout(const Timeout&) = delete;
  Timeout& operator=(const Timeout&) = delete;
  Timeout(Timeout&& rhs) noexcept;
  Timeout& operator=(Timeout&& rhs) noexcept;

  // Populates a Timeout object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Timeout& out);

  // Populates a Timeout object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Timeout& out);

  // Creates a deep copy of Timeout.
  Timeout Clone() const;

  // Creates a Timeout object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Timeout> FromValue(const base::Value::Dict& value);

  // Creates a Timeout object from a base::Value, or nullopt on failure.
  static std::optional<Timeout> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTimeout object.
  base::Value::Dict ToValue() const;

  // If absent, it means "infinite" or "never timeout"
  std::optional<int> milliseconds;

};


//
// Functions
//

namespace ReportEstablishContextResult {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  int scard_context;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportEstablishContextResult

namespace ReportReleaseContextResult {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportReleaseContextResult

namespace ReportListReadersResult {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  std::vector<std::string> readers;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportListReadersResult

namespace ReportGetStatusChangeResult {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  std::vector<ReaderStateOut> reader_states;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportGetStatusChangeResult

namespace ReportPlainResult {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportPlainResult

namespace ReportConnectResult {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  int scard_handle;

  Protocol active_protocol;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportConnectResult

namespace ReportDataResult {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  std::vector<uint8_t> data;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportDataResult

namespace ReportStatusResult {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int request_id;

  std::string reader_name;

  ConnectionState state;

  Protocol protocol;

  std::vector<uint8_t> atr;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportStatusResult

//
// Events
//

namespace OnEstablishContextRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onEstablishContextRequested"

base::Value::List Create(int request_id);
}  // namespace OnEstablishContextRequested

namespace OnReleaseContextRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onReleaseContextRequested"

base::Value::List Create(int request_id, int scard_context);
}  // namespace OnReleaseContextRequested

namespace OnListReadersRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onListReadersRequested"

base::Value::List Create(int request_id, int scard_context);
}  // namespace OnListReadersRequested

namespace OnGetStatusChangeRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onGetStatusChangeRequested"

base::Value::List Create(int request_id, int scard_context, const Timeout& timeout, const std::vector<ReaderStateIn>& reader_states);
}  // namespace OnGetStatusChangeRequested

namespace OnCancelRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onCancelRequested"

base::Value::List Create(int request_id, int scard_context);
}  // namespace OnCancelRequested

namespace OnConnectRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onConnectRequested"

base::Value::List Create(int request_id, int scard_context, const std::string& reader, const ShareMode& share_mode, const Protocols& preferred_protocols);
}  // namespace OnConnectRequested

namespace OnDisconnectRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onDisconnectRequested"

base::Value::List Create(int request_id, int scard_handle, const Disposition& disposition);
}  // namespace OnDisconnectRequested

namespace OnTransmitRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onTransmitRequested"

base::Value::List Create(int request_id, int scard_handle, const Protocol& protocol, const std::vector<uint8_t>& data);
}  // namespace OnTransmitRequested

namespace OnControlRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onControlRequested"

base::Value::List Create(int request_id, int scard_handle, int control_code, const std::vector<uint8_t>& data);
}  // namespace OnControlRequested

namespace OnGetAttribRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onGetAttribRequested"

base::Value::List Create(int request_id, int scard_handle, int attrib_id);
}  // namespace OnGetAttribRequested

namespace OnSetAttribRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onSetAttribRequested"

base::Value::List Create(int request_id, int scard_handle, int attrib_id, const std::vector<uint8_t>& data);
}  // namespace OnSetAttribRequested

namespace OnStatusRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onStatusRequested"

base::Value::List Create(int request_id, int scard_handle);
}  // namespace OnStatusRequested

namespace OnBeginTransactionRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onBeginTransactionRequested"

base::Value::List Create(int request_id, int scard_handle);
}  // namespace OnBeginTransactionRequested

namespace OnEndTransactionRequested {

extern const char kEventName[];  // "smartCardProviderPrivate.onEndTransactionRequested"

base::Value::List Create(int request_id, int scard_handle, const Disposition& disposition);
}  // namespace OnEndTransactionRequested

}  // namespace smart_card_provider_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SMART_CARD_PROVIDER_PRIVATE_H__
