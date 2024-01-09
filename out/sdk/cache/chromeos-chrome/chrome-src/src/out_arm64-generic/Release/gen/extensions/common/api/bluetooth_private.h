// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/bluetooth_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_BLUETOOTH_PRIVATE_H__
#define EXTENSIONS_COMMON_API_BLUETOOTH_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "extensions/common/api/bluetooth.h"


namespace extensions {
namespace api {
namespace bluetooth_private {

//
// Types
//

// Events that can occur during pairing. The method used for pairing varies
// depending on the capability of the two devices.
enum class PairingEventType {
  kNone = 0,
  kRequestPincode,
  kDisplayPincode,
  kRequestPasskey,
  kDisplayPasskey,
  kKeysEntered,
  kConfirmPasskey,
  kRequestAuthorization,
  kComplete,
  kMaxValue = kComplete,
};


const char* ToString(PairingEventType as_enum);
PairingEventType ParsePairingEventType(base::StringPiece as_string);
std::u16string GetPairingEventTypeParseError(base::StringPiece as_string);

// Results for connect(). See function declaration for details.
enum class ConnectResultType {
  kNone = 0,
  kAlreadyConnected,
  kAuthCanceled,
  kAuthFailed,
  kAuthRejected,
  kAuthTimeout,
  kFailed,
  kInProgress,
  kSuccess,
  kUnknownError,
  kUnsupportedDevice,
  kNotReady,
  kAlreadyExists,
  kNotConnected,
  kDoesNotExist,
  kInvalidArgs,
  kMaxValue = kInvalidArgs,
};


const char* ToString(ConnectResultType as_enum);
ConnectResultType ParseConnectResultType(base::StringPiece as_string);
std::u16string GetConnectResultTypeParseError(base::StringPiece as_string);

// Valid pairing responses.
enum class PairingResponse {
  kNone = 0,
  kConfirm,
  kReject,
  kCancel,
  kMaxValue = kCancel,
};


const char* ToString(PairingResponse as_enum);
PairingResponse ParsePairingResponse(base::StringPiece as_string);
std::u16string GetPairingResponseParseError(base::StringPiece as_string);

enum class TransportType {
  kNone = 0,
  kLe,
  kBredr,
  kDual,
  kMaxValue = kDual,
};


const char* ToString(TransportType as_enum);
TransportType ParseTransportType(base::StringPiece as_string);
std::u16string GetTransportTypeParseError(base::StringPiece as_string);

struct PairingEvent {
  PairingEvent();
  ~PairingEvent();
  PairingEvent(const PairingEvent&) = delete;
  PairingEvent& operator=(const PairingEvent&) = delete;
  PairingEvent(PairingEvent&& rhs) noexcept;
  PairingEvent& operator=(PairingEvent&& rhs) noexcept;

  // Populates a PairingEvent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PairingEvent& out);

  // Populates a PairingEvent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PairingEvent& out);

  // Creates a deep copy of PairingEvent.
  PairingEvent Clone() const;

  // Creates a PairingEvent object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<PairingEvent> FromValue(const base::Value::Dict& value);

  // Creates a PairingEvent object from a base::Value, or nullopt on failure.
  static std::optional<PairingEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPairingEvent object.
  base::Value::Dict ToValue() const;

  PairingEventType pairing;

  extensions::api::bluetooth::Device device;

  std::optional<std::string> pincode;

  std::optional<int> passkey;

  std::optional<int> entered_key;

};

struct NewAdapterState {
  NewAdapterState();
  ~NewAdapterState();
  NewAdapterState(const NewAdapterState&) = delete;
  NewAdapterState& operator=(const NewAdapterState&) = delete;
  NewAdapterState(NewAdapterState&& rhs) noexcept;
  NewAdapterState& operator=(NewAdapterState&& rhs) noexcept;

  // Populates a NewAdapterState object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NewAdapterState& out);

  // Populates a NewAdapterState object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NewAdapterState& out);

  // Creates a deep copy of NewAdapterState.
  NewAdapterState Clone() const;

  // Creates a NewAdapterState object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<NewAdapterState> FromValue(const base::Value::Dict& value);

  // Creates a NewAdapterState object from a base::Value, or nullopt on failure.
  static std::optional<NewAdapterState> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNewAdapterState object.
  base::Value::Dict ToValue() const;

  // The human-readable name of the adapter.
  std::optional<std::string> name;

  // Whether or not the adapter has power.
  std::optional<bool> powered;

  // Whether the adapter is discoverable by other devices.
  std::optional<bool> discoverable;

};

struct SetPairingResponseOptions {
  SetPairingResponseOptions();
  ~SetPairingResponseOptions();
  SetPairingResponseOptions(const SetPairingResponseOptions&) = delete;
  SetPairingResponseOptions& operator=(const SetPairingResponseOptions&) = delete;
  SetPairingResponseOptions(SetPairingResponseOptions&& rhs) noexcept;
  SetPairingResponseOptions& operator=(SetPairingResponseOptions&& rhs) noexcept;

  // Populates a SetPairingResponseOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetPairingResponseOptions& out);

  // Populates a SetPairingResponseOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetPairingResponseOptions& out);

  // Creates a deep copy of SetPairingResponseOptions.
  SetPairingResponseOptions Clone() const;

  // Creates a SetPairingResponseOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<SetPairingResponseOptions> FromValue(const base::Value::Dict& value);

  // Creates a SetPairingResponseOptions object from a base::Value, or nullopt
  // on failure.
  static std::optional<SetPairingResponseOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetPairingResponseOptions object.
  base::Value::Dict ToValue() const;

  // The remote device to send the pairing response.
  extensions::api::bluetooth::Device device;

  // The response type.
  PairingResponse response;

  // A 1-16 character alphanumeric set in response to <code>requestPincode</code>.
  std::optional<std::string> pincode;

  // An integer between 0-999999 set in response to <code>requestPasskey</code>.
  std::optional<int> passkey;

};

struct DiscoveryFilter {
  DiscoveryFilter();
  ~DiscoveryFilter();
  DiscoveryFilter(const DiscoveryFilter&) = delete;
  DiscoveryFilter& operator=(const DiscoveryFilter&) = delete;
  DiscoveryFilter(DiscoveryFilter&& rhs) noexcept;
  DiscoveryFilter& operator=(DiscoveryFilter&& rhs) noexcept;

  // Populates a DiscoveryFilter object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DiscoveryFilter& out);

  // Populates a DiscoveryFilter object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DiscoveryFilter& out);

  // Creates a deep copy of DiscoveryFilter.
  DiscoveryFilter Clone() const;

  // Creates a DiscoveryFilter object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DiscoveryFilter> FromValue(const base::Value::Dict& value);

  // Creates a DiscoveryFilter object from a base::Value, or nullopt on failure.
  static std::optional<DiscoveryFilter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDiscoveryFilter object.
  base::Value::Dict ToValue() const;

  // uuid of service or array of uuids
  struct Uuids {
    Uuids();
    ~Uuids();
    Uuids(const Uuids&) = delete;
    Uuids& operator=(const Uuids&) = delete;
    Uuids(Uuids&& rhs) noexcept;
    Uuids& operator=(Uuids&& rhs) noexcept;

    // Populates a Uuids object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Uuids& out);

    // Creates a deep copy of Uuids.
    Uuids Clone() const;

    // Creates a Uuids object from a base::Value, or nullopt on failure.
    static std::optional<Uuids> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisUuids
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::string> as_string;
    std::optional<std::vector<std::string>> as_strings;
  };


  // Transport type.
  TransportType transport;

  // uuid of service or array of uuids
  std::optional<Uuids> uuids;

  // RSSI ranging value. Only devices with RSSI higher than this value will be
  // reported.
  std::optional<int> rssi;

  // Pathloss ranging value. Only devices with pathloss lower than this value will
  // be reported.
  std::optional<int> pathloss;

};


//
// Functions
//

namespace SetAdapterState {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The new state of the adapter.
  NewAdapterState adapter_state;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetAdapterState

namespace SetPairingResponse {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SetPairingResponseOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetPairingResponse

namespace DisconnectAll {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string device_address;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DisconnectAll

namespace ForgetDevice {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string device_address;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ForgetDevice

namespace SetDiscoveryFilter {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  DiscoveryFilter discovery_filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetDiscoveryFilter

namespace Connect {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string device_address;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ConnectResultType& result);
}  // namespace Results

}  // namespace Connect

namespace Pair {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string device_address;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Pair

namespace RecordPairing {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  extensions::api::bluetooth::Transport transport;

  int pairing_duration_ms;

  ConnectResultType result;


 private:
  Params();
};

}  // namespace RecordPairing

namespace RecordReconnection {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  ConnectResultType result;


 private:
  Params();
};

}  // namespace RecordReconnection

namespace RecordDeviceSelection {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int selection_duration_ms;

  bool was_paired;

  extensions::api::bluetooth::Transport transport;


 private:
  Params();
};

}  // namespace RecordDeviceSelection

//
// Events
//

namespace OnPairing {

extern const char kEventName[];  // "bluetoothPrivate.onPairing"

// A pairing event.
base::Value::List Create(const PairingEvent& pairing_event);
}  // namespace OnPairing

namespace OnDeviceAddressChanged {

extern const char kEventName[];  // "bluetoothPrivate.onDeviceAddressChanged"

base::Value::List Create(const extensions::api::bluetooth::Device& device, const std::string& old_address);
}  // namespace OnDeviceAddressChanged

}  // namespace bluetooth_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_BLUETOOTH_PRIVATE_H__
