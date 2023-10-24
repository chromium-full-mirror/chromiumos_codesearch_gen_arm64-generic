// Copyright 2023 The Chromium Authors
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
enum  ResultCode {
  RESULT_CODE_NONE = 0,
  RESULT_CODE_SUCCESS,
  RESULT_CODE_REMOVED_CARD,
  RESULT_CODE_RESET_CARD,
  RESULT_CODE_UNPOWERED_CARD,
  RESULT_CODE_UNRESPONSIVE_CARD,
  RESULT_CODE_UNSUPPORTED_CARD,
  RESULT_CODE_READER_UNAVAILABLE,
  RESULT_CODE_SHARING_VIOLATION,
  RESULT_CODE_NOT_TRANSACTED,
  RESULT_CODE_NO_SMARTCARD,
  RESULT_CODE_PROTO_MISMATCH,
  RESULT_CODE_SYSTEM_CANCELLED,
  RESULT_CODE_NOT_READY,
  RESULT_CODE_CANCELLED,
  RESULT_CODE_INSUFFICIENT_BUFFER,
  RESULT_CODE_INVALID_HANDLE,
  RESULT_CODE_INVALID_PARAMETER,
  RESULT_CODE_INVALID_VALUE,
  RESULT_CODE_NO_MEMORY,
  RESULT_CODE_TIMEOUT,
  RESULT_CODE_UNKNOWN_READER,
  RESULT_CODE_UNSUPPORTED_FEATURE,
  RESULT_CODE_NO_READERS_AVAILABLE,
  RESULT_CODE_SERVICE_STOPPED,
  RESULT_CODE_NO_SERVICE,
  RESULT_CODE_COMM_ERROR,
  RESULT_CODE_INTERNAL_ERROR,
  RESULT_CODE_UNKNOWN_ERROR,
  RESULT_CODE_SERVER_TOO_BUSY,
  RESULT_CODE_UNEXPECTED,
  RESULT_CODE_SHUTDOWN,
  RESULT_CODE_UNKNOWN,
  RESULT_CODE_LAST = RESULT_CODE_UNKNOWN,
};


const char* ToString(ResultCode as_enum);
ResultCode ParseResultCode(base::StringPiece as_string);
std::u16string GetResultCodeParseError(base::StringPiece as_string);

// Maps to the SCARD_SHARE_* values defined in the winscard.h API.
enum  ShareMode {
  SHARE_MODE_NONE = 0,
  SHARE_MODE_SHARED,
  SHARE_MODE_EXCLUSIVE,
  SHARE_MODE_DIRECT,
  SHARE_MODE_LAST = SHARE_MODE_DIRECT,
};


const char* ToString(ShareMode as_enum);
ShareMode ParseShareMode(base::StringPiece as_string);
std::u16string GetShareModeParseError(base::StringPiece as_string);

// What the reader should do with the card inserted in it.
enum  Disposition {
  DISPOSITION_NONE = 0,
  DISPOSITION_LEAVE_CARD,
  DISPOSITION_RESET_CARD,
  DISPOSITION_UNPOWER_CARD,
  DISPOSITION_EJECT_CARD,
  DISPOSITION_LAST = DISPOSITION_EJECT_CARD,
};


const char* ToString(Disposition as_enum);
Disposition ParseDisposition(base::StringPiece as_string);
std::u16string GetDispositionParseError(base::StringPiece as_string);

enum  ConnectionState {
  CONNECTION_STATE_NONE = 0,
  CONNECTION_STATE_ABSENT,
  CONNECTION_STATE_PRESENT,
  CONNECTION_STATE_SWALLOWED,
  CONNECTION_STATE_POWERED,
  CONNECTION_STATE_NEGOTIABLE,
  CONNECTION_STATE_SPECIFIC,
  CONNECTION_STATE_LAST = CONNECTION_STATE_SPECIFIC,
};


const char* ToString(ConnectionState as_enum);
ConnectionState ParseConnectionState(base::StringPiece as_string);
std::u16string GetConnectionStateParseError(base::StringPiece as_string);

struct ReaderStateFlags {
  ReaderStateFlags();
  ~ReaderStateFlags();
  ReaderStateFlags(const ReaderStateFlags&) = delete;
  ReaderStateFlags& operator=(const ReaderStateFlags&) = delete;
  ReaderStateFlags(ReaderStateFlags&& rhs);
  ReaderStateFlags& operator=(ReaderStateFlags&& rhs);

  // Populates a ReaderStateFlags object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReaderStateFlags& out);

  // Populates a ReaderStateFlags object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReaderStateFlags& out);

  // Creates a deep copy of ReaderStateFlags.
  ReaderStateFlags Clone() const;

  // Creates a ReaderStateFlags object from a base::Value, or NULL on failure.
  static std::unique_ptr<ReaderStateFlags> FromValueDeprecated(const base::Value& value);

  // Creates a ReaderStateFlags object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ReaderStateFlags> FromValue(const base::Value::Dict& value);

  // Creates a ReaderStateFlags object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ReaderStateFlags> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReaderStateFlags object.
  base::Value::Dict ToValue() const;

  absl::optional<bool> unaware;

  absl::optional<bool> ignore;

  absl::optional<bool> changed;

  absl::optional<bool> unknown;

  absl::optional<bool> unavailable;

  absl::optional<bool> empty;

  absl::optional<bool> present;

  absl::optional<bool> exclusive;

  absl::optional<bool> inuse;

  absl::optional<bool> mute;

  absl::optional<bool> unpowered;

};

struct Protocols {
  Protocols();
  ~Protocols();
  Protocols(const Protocols&) = delete;
  Protocols& operator=(const Protocols&) = delete;
  Protocols(Protocols&& rhs);
  Protocols& operator=(Protocols&& rhs);

  // Populates a Protocols object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Protocols& out);

  // Populates a Protocols object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Protocols& out);

  // Creates a deep copy of Protocols.
  Protocols Clone() const;

  // Creates a Protocols object from a base::Value, or NULL on failure.
  static std::unique_ptr<Protocols> FromValueDeprecated(const base::Value& value);

  // Creates a Protocols object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Protocols> FromValue(const base::Value::Dict& value);

  // Creates a Protocols object from a base::Value, or nullopt on failure.
  static absl::optional<Protocols> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProtocols object.
  base::Value::Dict ToValue() const;

  absl::optional<bool> t0;

  absl::optional<bool> t1;

  absl::optional<bool> raw;

};

// Maps to the SCARD_PROTOCOL_* values defined in the winscard.h API.
enum  Protocol {
  PROTOCOL_NONE = 0,
  PROTOCOL_UNDEFINED,
  PROTOCOL_T0,
  PROTOCOL_T1,
  PROTOCOL_RAW,
  PROTOCOL_LAST = PROTOCOL_RAW,
};


const char* ToString(Protocol as_enum);
Protocol ParseProtocol(base::StringPiece as_string);
std::u16string GetProtocolParseError(base::StringPiece as_string);

struct ReaderStateIn {
  ReaderStateIn();
  ~ReaderStateIn();
  ReaderStateIn(const ReaderStateIn&) = delete;
  ReaderStateIn& operator=(const ReaderStateIn&) = delete;
  ReaderStateIn(ReaderStateIn&& rhs);
  ReaderStateIn& operator=(ReaderStateIn&& rhs);

  // Populates a ReaderStateIn object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReaderStateIn& out);

  // Populates a ReaderStateIn object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReaderStateIn& out);

  // Creates a deep copy of ReaderStateIn.
  ReaderStateIn Clone() const;

  // Creates a ReaderStateIn object from a base::Value, or NULL on failure.
  static std::unique_ptr<ReaderStateIn> FromValueDeprecated(const base::Value& value);

  // Creates a ReaderStateIn object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ReaderStateIn> FromValue(const base::Value::Dict& value);

  // Creates a ReaderStateIn object from a base::Value, or nullopt on failure.
  static absl::optional<ReaderStateIn> FromValue(const base::Value& value);

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
  ReaderStateOut(ReaderStateOut&& rhs);
  ReaderStateOut& operator=(ReaderStateOut&& rhs);

  // Populates a ReaderStateOut object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReaderStateOut& out);

  // Populates a ReaderStateOut object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReaderStateOut& out);

  // Creates a deep copy of ReaderStateOut.
  ReaderStateOut Clone() const;

  // Creates a ReaderStateOut object from a base::Value, or NULL on failure.
  static std::unique_ptr<ReaderStateOut> FromValueDeprecated(const base::Value& value);

  // Creates a ReaderStateOut object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ReaderStateOut> FromValue(const base::Value::Dict& value);

  // Creates a ReaderStateOut object from a base::Value, or nullopt on failure.
  static absl::optional<ReaderStateOut> FromValue(const base::Value& value);

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
  Timeout(Timeout&& rhs);
  Timeout& operator=(Timeout&& rhs);

  // Populates a Timeout object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Timeout& out);

  // Populates a Timeout object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Timeout& out);

  // Creates a deep copy of Timeout.
  Timeout Clone() const;

  // Creates a Timeout object from a base::Value, or NULL on failure.
  static std::unique_ptr<Timeout> FromValueDeprecated(const base::Value& value);

  // Creates a Timeout object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Timeout> FromValue(const base::Value::Dict& value);

  // Creates a Timeout object from a base::Value, or nullopt on failure.
  static absl::optional<Timeout> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTimeout object.
  base::Value::Dict ToValue() const;

  // If absent, it means "infinite" or "never timeout"
  absl::optional<int> milliseconds;

};


//
// Functions
//

namespace ReportEstablishContextResult {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int request_id;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportReleaseContextResult

namespace ReportListReadersResult {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int request_id;

  ResultCode result_code;


 private:
  Params();
};

}  // namespace ReportPlainResult

namespace ReportConnectResult {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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
