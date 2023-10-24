// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/serial.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SERIAL_H__
#define EXTENSIONS_COMMON_API_SERIAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace serial {

//
// Types
//

struct DeviceInfo {
  DeviceInfo();
  ~DeviceInfo();
  DeviceInfo(const DeviceInfo&) = delete;
  DeviceInfo& operator=(const DeviceInfo&) = delete;
  DeviceInfo(DeviceInfo&& rhs);
  DeviceInfo& operator=(DeviceInfo&& rhs);

  // Populates a DeviceInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceInfo& out);

  // Populates a DeviceInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceInfo& out);

  // Creates a deep copy of DeviceInfo.
  DeviceInfo Clone() const;

  // Creates a DeviceInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<DeviceInfo> FromValueDeprecated(const base::Value& value);

  // Creates a DeviceInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<DeviceInfo> FromValue(const base::Value::Dict& value);

  // Creates a DeviceInfo object from a base::Value, or nullopt on failure.
  static absl::optional<DeviceInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceInfo object.
  base::Value::Dict ToValue() const;

  // The device's system path. This should be passed as the <code>path</code>
  // argument to <code>chrome.serial.connect</code> in order to connect to this
  // device.
  std::string path;

  // A PCI or USB vendor ID if one can be determined for the underlying device.
  absl::optional<int> vendor_id;

  // A USB product ID if one can be determined for the underlying device.
  absl::optional<int> product_id;

  // A human-readable display name for the underlying device if one can be queried
  // from the host driver.
  absl::optional<std::string> display_name;

};

enum class DataBits {
  kNone = 0,
  kSeven,
  kEight,
  kMaxValue = kEight,
};


const char* ToString(DataBits as_enum);
DataBits ParseDataBits(base::StringPiece as_string);
std::u16string GetDataBitsParseError(base::StringPiece as_string);

enum class ParityBit {
  kNone = 0,
  kNo,
  kOdd,
  kEven,
  kMaxValue = kEven,
};


const char* ToString(ParityBit as_enum);
ParityBit ParseParityBit(base::StringPiece as_string);
std::u16string GetParityBitParseError(base::StringPiece as_string);

enum class StopBits {
  kNone = 0,
  kOne,
  kTwo,
  kMaxValue = kTwo,
};


const char* ToString(StopBits as_enum);
StopBits ParseStopBits(base::StringPiece as_string);
std::u16string GetStopBitsParseError(base::StringPiece as_string);

struct ConnectionOptions {
  ConnectionOptions();
  ~ConnectionOptions();
  ConnectionOptions(const ConnectionOptions&) = delete;
  ConnectionOptions& operator=(const ConnectionOptions&) = delete;
  ConnectionOptions(ConnectionOptions&& rhs);
  ConnectionOptions& operator=(ConnectionOptions&& rhs);

  // Populates a ConnectionOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ConnectionOptions& out);

  // Populates a ConnectionOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ConnectionOptions& out);

  // Creates a deep copy of ConnectionOptions.
  ConnectionOptions Clone() const;

  // Creates a ConnectionOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<ConnectionOptions> FromValueDeprecated(const base::Value& value);

  // Creates a ConnectionOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ConnectionOptions> FromValue(const base::Value::Dict& value);

  // Creates a ConnectionOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ConnectionOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisConnectionOptions object.
  base::Value::Dict ToValue() const;

  // Flag indicating whether or not the connection should be left open when the
  // application is suspended (see <a
  // href="http://developer.chrome.com/apps/app_lifecycle.html">Manage App
  // Lifecycle</a>). The default value is "false." When the application is loaded,
  // any serial connections previously opened with persistent=true can be fetched
  // with <code>getConnections</code>.
  absl::optional<bool> persistent;

  // An application-defined string to associate with the connection.
  absl::optional<std::string> name;

  // The size of the buffer used to receive data. The default value is 4096.
  absl::optional<int> buffer_size;

  // The requested bitrate of the connection to be opened. For compatibility with
  // the widest range of hardware, this number should match one of
  // commonly-available bitrates, such as 110, 300, 1200, 2400, 4800, 9600, 14400,
  // 19200, 38400, 57600, 115200. There is no guarantee, of course, that the
  // device connected to the serial port will support the requested bitrate, even
  // if the port itself supports that bitrate. <code>9600</code> will be passed by
  // default.
  absl::optional<int> bitrate;

  // <code>"eight"</code> will be passed by default.
  DataBits data_bits;

  // <code>"no"</code> will be passed by default.
  ParityBit parity_bit;

  // <code>"one"</code> will be passed by default.
  StopBits stop_bits;

  // Flag indicating whether or not to enable RTS/CTS hardware flow control.
  // Defaults to false.
  absl::optional<bool> cts_flow_control;

  // The maximum amount of time (in milliseconds) to wait for new data before
  // raising an <code>onReceiveError</code> event with a "timeout" error. If zero,
  // receive timeout errors will not be raised for the connection. Defaults to 0.
  absl::optional<int> receive_timeout;

  // The maximum amount of time (in milliseconds) to wait for a <code>send</code>
  // operation to complete before calling the callback with a "timeout" error. If
  // zero, send timeout errors will not be triggered. Defaults to 0.
  absl::optional<int> send_timeout;

};

struct ConnectionInfo {
  ConnectionInfo();
  ~ConnectionInfo();
  ConnectionInfo(const ConnectionInfo&) = delete;
  ConnectionInfo& operator=(const ConnectionInfo&) = delete;
  ConnectionInfo(ConnectionInfo&& rhs);
  ConnectionInfo& operator=(ConnectionInfo&& rhs);

  // Populates a ConnectionInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ConnectionInfo& out);

  // Populates a ConnectionInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ConnectionInfo& out);

  // Creates a deep copy of ConnectionInfo.
  ConnectionInfo Clone() const;

  // Creates a ConnectionInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<ConnectionInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ConnectionInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ConnectionInfo> FromValue(const base::Value::Dict& value);

  // Creates a ConnectionInfo object from a base::Value, or nullopt on failure.
  static absl::optional<ConnectionInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisConnectionInfo object.
  base::Value::Dict ToValue() const;

  // The id of the serial port connection.
  int connection_id;

  // Flag indicating whether the connection is blocked from firing onReceive
  // events.
  bool paused;

  // See <code>ConnectionOptions.persistent</code>
  bool persistent;

  // See <code>ConnectionOptions.name</code>
  std::string name;

  // See <code>ConnectionOptions.bufferSize</code>
  int buffer_size;

  // See <code>ConnectionOptions.receiveTimeout</code>
  int receive_timeout;

  // See <code>ConnectionOptions.sendTimeout</code>
  int send_timeout;

  // See <code>ConnectionOptions.bitrate</code>. This field may be omitted or
  // inaccurate if a non-standard bitrate is in use, or if an error occurred while
  // querying the underlying device.
  absl::optional<int> bitrate;

  // See <code>ConnectionOptions.dataBits</code>. This field may be omitted if an
  // error occurred while querying the underlying device.
  DataBits data_bits;

  // See <code>ConnectionOptions.parityBit</code>. This field may be omitted if an
  // error occurred while querying the underlying device.
  ParityBit parity_bit;

  // See <code>ConnectionOptions.stopBits</code>. This field may be omitted if an
  // error occurred while querying the underlying device.
  StopBits stop_bits;

  // See <code>ConnectionOptions.ctsFlowControl</code>. This field may be omitted
  // if an error occurred while querying the underlying device.
  absl::optional<bool> cts_flow_control;

};

enum class SendError {
  kNone = 0,
  kDisconnected,
  kPending,
  kTimeout,
  kSystemError,
  kMaxValue = kSystemError,
};


const char* ToString(SendError as_enum);
SendError ParseSendError(base::StringPiece as_string);
std::u16string GetSendErrorParseError(base::StringPiece as_string);

struct SendInfo {
  SendInfo();
  ~SendInfo();
  SendInfo(const SendInfo&) = delete;
  SendInfo& operator=(const SendInfo&) = delete;
  SendInfo(SendInfo&& rhs);
  SendInfo& operator=(SendInfo&& rhs);

  // Populates a SendInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SendInfo& out);

  // Populates a SendInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SendInfo& out);

  // Creates a deep copy of SendInfo.
  SendInfo Clone() const;

  // Creates a SendInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<SendInfo> FromValueDeprecated(const base::Value& value);

  // Creates a SendInfo object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<SendInfo> FromValue(const base::Value::Dict& value);

  // Creates a SendInfo object from a base::Value, or nullopt on failure.
  static absl::optional<SendInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSendInfo object.
  base::Value::Dict ToValue() const;

  // The number of bytes sent.
  int bytes_sent;

  // An error code if an error occurred.
  SendError error;

};

struct HostControlSignals {
  HostControlSignals();
  ~HostControlSignals();
  HostControlSignals(const HostControlSignals&) = delete;
  HostControlSignals& operator=(const HostControlSignals&) = delete;
  HostControlSignals(HostControlSignals&& rhs);
  HostControlSignals& operator=(HostControlSignals&& rhs);

  // Populates a HostControlSignals object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HostControlSignals& out);

  // Populates a HostControlSignals object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HostControlSignals& out);

  // Creates a deep copy of HostControlSignals.
  HostControlSignals Clone() const;

  // Creates a HostControlSignals object from a base::Value, or NULL on failure.
  static std::unique_ptr<HostControlSignals> FromValueDeprecated(const base::Value& value);

  // Creates a HostControlSignals object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<HostControlSignals> FromValue(const base::Value::Dict& value);

  // Creates a HostControlSignals object from a base::Value, or nullopt on
  // failure.
  static absl::optional<HostControlSignals> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHostControlSignals object.
  base::Value::Dict ToValue() const;

  // DTR (Data Terminal Ready).
  absl::optional<bool> dtr;

  // RTS (Request To Send).
  absl::optional<bool> rts;

};

struct DeviceControlSignals {
  DeviceControlSignals();
  ~DeviceControlSignals();
  DeviceControlSignals(const DeviceControlSignals&) = delete;
  DeviceControlSignals& operator=(const DeviceControlSignals&) = delete;
  DeviceControlSignals(DeviceControlSignals&& rhs);
  DeviceControlSignals& operator=(DeviceControlSignals&& rhs);

  // Populates a DeviceControlSignals object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeviceControlSignals& out);

  // Populates a DeviceControlSignals object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeviceControlSignals& out);

  // Creates a deep copy of DeviceControlSignals.
  DeviceControlSignals Clone() const;

  // Creates a DeviceControlSignals object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<DeviceControlSignals> FromValueDeprecated(const base::Value& value);

  // Creates a DeviceControlSignals object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<DeviceControlSignals> FromValue(const base::Value::Dict& value);

  // Creates a DeviceControlSignals object from a base::Value, or nullopt on
  // failure.
  static absl::optional<DeviceControlSignals> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeviceControlSignals object.
  base::Value::Dict ToValue() const;

  // DCD (Data Carrier Detect) or RLSD (Receive Line Signal/ Detect).
  bool dcd;

  // CTS (Clear To Send).
  bool cts;

  // RI (Ring Indicator).
  bool ri;

  // DSR (Data Set Ready).
  bool dsr;

};

struct ReceiveInfo {
  ReceiveInfo();
  ~ReceiveInfo();
  ReceiveInfo(const ReceiveInfo&) = delete;
  ReceiveInfo& operator=(const ReceiveInfo&) = delete;
  ReceiveInfo(ReceiveInfo&& rhs);
  ReceiveInfo& operator=(ReceiveInfo&& rhs);

  // Populates a ReceiveInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReceiveInfo& out);

  // Populates a ReceiveInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReceiveInfo& out);

  // Creates a deep copy of ReceiveInfo.
  ReceiveInfo Clone() const;

  // Creates a ReceiveInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<ReceiveInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ReceiveInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ReceiveInfo> FromValue(const base::Value::Dict& value);

  // Creates a ReceiveInfo object from a base::Value, or nullopt on failure.
  static absl::optional<ReceiveInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReceiveInfo object.
  base::Value::Dict ToValue() const;

  // The connection identifier.
  int connection_id;

  // The data received.
  std::vector<uint8_t> data;

};

enum class ReceiveError {
  kNone = 0,
  kDisconnected,
  kTimeout,
  kDeviceLost,
  kBreak,
  kFrameError,
  kOverrun,
  kBufferOverflow,
  kParityError,
  kSystemError,
  kMaxValue = kSystemError,
};


const char* ToString(ReceiveError as_enum);
ReceiveError ParseReceiveError(base::StringPiece as_string);
std::u16string GetReceiveErrorParseError(base::StringPiece as_string);

struct ReceiveErrorInfo {
  ReceiveErrorInfo();
  ~ReceiveErrorInfo();
  ReceiveErrorInfo(const ReceiveErrorInfo&) = delete;
  ReceiveErrorInfo& operator=(const ReceiveErrorInfo&) = delete;
  ReceiveErrorInfo(ReceiveErrorInfo&& rhs);
  ReceiveErrorInfo& operator=(ReceiveErrorInfo&& rhs);

  // Populates a ReceiveErrorInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReceiveErrorInfo& out);

  // Populates a ReceiveErrorInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReceiveErrorInfo& out);

  // Creates a deep copy of ReceiveErrorInfo.
  ReceiveErrorInfo Clone() const;

  // Creates a ReceiveErrorInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<ReceiveErrorInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ReceiveErrorInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ReceiveErrorInfo> FromValue(const base::Value::Dict& value);

  // Creates a ReceiveErrorInfo object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ReceiveErrorInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReceiveErrorInfo object.
  base::Value::Dict ToValue() const;

  // The connection identifier.
  int connection_id;

  // An error code indicating what went wrong.
  ReceiveError error;

};


//
// Functions
//

namespace GetDevices {

namespace Results {

base::Value::List Create(const std::vector<DeviceInfo>& ports);
}  // namespace Results

}  // namespace GetDevices

namespace Connect {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The system path of the serial port to open.
  std::string path;

  // Port configuration options.
  absl::optional<ConnectionOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ConnectionInfo& connection_info);
}  // namespace Results

}  // namespace Connect

namespace Update {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the opened connection.
  int connection_id;

  // Port configuration options.
  ConnectionOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace Update

namespace Disconnect {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the opened connection.
  int connection_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace Disconnect

namespace SetPaused {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the opened connection.
  int connection_id;

  // Flag to indicate whether to pause or unpause.
  bool paused;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetPaused

namespace GetInfo {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the opened connection.
  int connection_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ConnectionInfo& connection_info);
}  // namespace Results

}  // namespace GetInfo

namespace GetConnections {

namespace Results {

base::Value::List Create(const std::vector<ConnectionInfo>& connection_infos);
}  // namespace Results

}  // namespace GetConnections

namespace Send {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the connection.
  int connection_id;

  // The data to send.
  std::vector<uint8_t> data;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const SendInfo& send_info);
}  // namespace Results

}  // namespace Send

namespace Flush {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int connection_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace Flush

namespace GetControlSignals {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the connection.
  int connection_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const DeviceControlSignals& signals);
}  // namespace Results

}  // namespace GetControlSignals

namespace SetControlSignals {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the connection.
  int connection_id;

  // The set of signal changes to send to the device.
  HostControlSignals signals;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace SetControlSignals

namespace SetBreak {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the connection.
  int connection_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace SetBreak

namespace ClearBreak {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The id of the connection.
  int connection_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace ClearBreak

//
// Events
//

namespace OnReceive {

extern const char kEventName[];  // "serial.onReceive"

// Event data.
base::Value::List Create(const ReceiveInfo& info);
}  // namespace OnReceive

namespace OnReceiveError {

extern const char kEventName[];  // "serial.onReceiveError"

base::Value::List Create(const ReceiveErrorInfo& info);
}  // namespace OnReceiveError

}  // namespace serial
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SERIAL_H__
