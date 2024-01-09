// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/bluetooth_socket.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_BLUETOOTH_SOCKET_H__
#define EXTENSIONS_COMMON_API_BLUETOOTH_SOCKET_H__

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
namespace bluetooth_socket {

//
// Types
//

struct SocketProperties {
  SocketProperties();
  ~SocketProperties();
  SocketProperties(const SocketProperties&) = delete;
  SocketProperties& operator=(const SocketProperties&) = delete;
  SocketProperties(SocketProperties&& rhs) noexcept;
  SocketProperties& operator=(SocketProperties&& rhs) noexcept;

  // Populates a SocketProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SocketProperties& out);

  // Populates a SocketProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SocketProperties& out);

  // Creates a deep copy of SocketProperties.
  SocketProperties Clone() const;

  // Creates a SocketProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SocketProperties> FromValue(const base::Value::Dict& value);

  // Creates a SocketProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<SocketProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSocketProperties object.
  base::Value::Dict ToValue() const;

  // Flag indicating whether the socket is left open when the event page of the
  // application is unloaded (see <a
  // href="http://developer.chrome.com/apps/app_lifecycle.html">Manage App
  // Lifecycle</a>). The default value is <code>false.</code> When the application
  // is loaded, any sockets previously opened with persistent=true can be fetched
  // with $ref:getSockets.
  std::optional<bool> persistent;

  // An application-defined string associated with the socket.
  std::optional<std::string> name;

  // The size of the buffer used to receive data. The default value is 4096.
  std::optional<int> buffer_size;

};

struct CreateInfo {
  CreateInfo();
  ~CreateInfo();
  CreateInfo(const CreateInfo&) = delete;
  CreateInfo& operator=(const CreateInfo&) = delete;
  CreateInfo(CreateInfo&& rhs) noexcept;
  CreateInfo& operator=(CreateInfo&& rhs) noexcept;

  // Populates a CreateInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateInfo& out);

  // Populates a CreateInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateInfo& out);

  // Creates a deep copy of CreateInfo.
  CreateInfo Clone() const;

  // Creates a CreateInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CreateInfo> FromValue(const base::Value::Dict& value);

  // Creates a CreateInfo object from a base::Value, or nullopt on failure.
  static std::optional<CreateInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateInfo object.
  base::Value::Dict ToValue() const;

  // The ID of the newly created socket. Note that socket IDs created from this
  // API are not compatible with socket IDs created from other APIs, such as the
  // <code>$(ref:sockets.tcp)</code> API.
  int socket_id;

};

struct ListenOptions {
  ListenOptions();
  ~ListenOptions();
  ListenOptions(const ListenOptions&) = delete;
  ListenOptions& operator=(const ListenOptions&) = delete;
  ListenOptions(ListenOptions&& rhs) noexcept;
  ListenOptions& operator=(ListenOptions&& rhs) noexcept;

  // Populates a ListenOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ListenOptions& out);

  // Populates a ListenOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ListenOptions& out);

  // Creates a deep copy of ListenOptions.
  ListenOptions Clone() const;

  // Creates a ListenOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ListenOptions> FromValue(const base::Value::Dict& value);

  // Creates a ListenOptions object from a base::Value, or nullopt on failure.
  static std::optional<ListenOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisListenOptions object.
  base::Value::Dict ToValue() const;

  // The RFCOMM Channel used by <code>listenUsingRfcomm</code>. If specified, this
  // channel must not be previously in use or the method call will fail. When not
  // specified, an unused channel will be automatically allocated.
  std::optional<int> channel;

  // The L2CAP PSM used by <code>listenUsingL2cap</code>. If specified, this PSM
  // must not be previously in use or the method call with fail. When not
  // specified, an unused PSM will be automatically allocated.
  std::optional<int> psm;

  // Length of the socket's listen queue. The default value depends on the
  // operating system's host subsystem.
  std::optional<int> backlog;

};

struct SocketInfo {
  SocketInfo();
  ~SocketInfo();
  SocketInfo(const SocketInfo&) = delete;
  SocketInfo& operator=(const SocketInfo&) = delete;
  SocketInfo(SocketInfo&& rhs) noexcept;
  SocketInfo& operator=(SocketInfo&& rhs) noexcept;

  // Populates a SocketInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SocketInfo& out);

  // Populates a SocketInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SocketInfo& out);

  // Creates a deep copy of SocketInfo.
  SocketInfo Clone() const;

  // Creates a SocketInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SocketInfo> FromValue(const base::Value::Dict& value);

  // Creates a SocketInfo object from a base::Value, or nullopt on failure.
  static std::optional<SocketInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSocketInfo object.
  base::Value::Dict ToValue() const;

  // The socket identifier.
  int socket_id;

  // Flag indicating if the socket remains open when the event page of the
  // application is unloaded (see <code>SocketProperties.persistent</code>). The
  // default value is "false".
  bool persistent;

  // Application-defined string associated with the socket.
  std::optional<std::string> name;

  // The size of the buffer used to receive data. If no buffer size has been
  // specified explictly, the value is not provided.
  std::optional<int> buffer_size;

  // Flag indicating whether a connected socket blocks its peer from sending more
  // data, or whether connection requests on a listening socket are dispatched
  // through the <code>onAccept</code> event or queued up in the listen queue
  // backlog. See <code>setPaused</code>. The default value is "false".
  bool paused;

  // Flag indicating whether the socket is connected to a remote peer.
  bool connected;

  // If the underlying socket is connected, contains the Bluetooth address of the
  // device it is connected to.
  std::optional<std::string> address;

  // If the underlying socket is connected, contains information about the service
  // UUID it is connected to, otherwise if the underlying socket is listening,
  // contains information about the service UUID it is listening on.
  std::optional<std::string> uuid;

};

struct AcceptInfo {
  AcceptInfo();
  ~AcceptInfo();
  AcceptInfo(const AcceptInfo&) = delete;
  AcceptInfo& operator=(const AcceptInfo&) = delete;
  AcceptInfo(AcceptInfo&& rhs) noexcept;
  AcceptInfo& operator=(AcceptInfo&& rhs) noexcept;

  // Populates a AcceptInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AcceptInfo& out);

  // Populates a AcceptInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, AcceptInfo& out);

  // Creates a deep copy of AcceptInfo.
  AcceptInfo Clone() const;

  // Creates a AcceptInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AcceptInfo> FromValue(const base::Value::Dict& value);

  // Creates a AcceptInfo object from a base::Value, or nullopt on failure.
  static std::optional<AcceptInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAcceptInfo object.
  base::Value::Dict ToValue() const;

  // The server socket identifier.
  int socket_id;

  // The client socket identifier, i.e. the socket identifier of the newly
  // established connection. This socket identifier should be used only with
  // functions from the <code>chrome.bluetoothSocket</code> namespace. Note the
  // client socket is initially paused and must be explictly un-paused by the
  // application to start receiving data.
  int client_socket_id;

};

enum class AcceptError {
  kNone = 0,
  kSystemError,
  kNotListening,
  kMaxValue = kNotListening,
};


const char* ToString(AcceptError as_enum);
AcceptError ParseAcceptError(base::StringPiece as_string);
std::u16string GetAcceptErrorParseError(base::StringPiece as_string);

struct AcceptErrorInfo {
  AcceptErrorInfo();
  ~AcceptErrorInfo();
  AcceptErrorInfo(const AcceptErrorInfo&) = delete;
  AcceptErrorInfo& operator=(const AcceptErrorInfo&) = delete;
  AcceptErrorInfo(AcceptErrorInfo&& rhs) noexcept;
  AcceptErrorInfo& operator=(AcceptErrorInfo&& rhs) noexcept;

  // Populates a AcceptErrorInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AcceptErrorInfo& out);

  // Populates a AcceptErrorInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AcceptErrorInfo& out);

  // Creates a deep copy of AcceptErrorInfo.
  AcceptErrorInfo Clone() const;

  // Creates a AcceptErrorInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AcceptErrorInfo> FromValue(const base::Value::Dict& value);

  // Creates a AcceptErrorInfo object from a base::Value, or nullopt on failure.
  static std::optional<AcceptErrorInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAcceptErrorInfo object.
  base::Value::Dict ToValue() const;

  // The server socket identifier.
  int socket_id;

  // The error message.
  std::string error_message;

  // An error code indicating what went wrong.
  AcceptError error;

};

struct ReceiveInfo {
  ReceiveInfo();
  ~ReceiveInfo();
  ReceiveInfo(const ReceiveInfo&) = delete;
  ReceiveInfo& operator=(const ReceiveInfo&) = delete;
  ReceiveInfo(ReceiveInfo&& rhs) noexcept;
  ReceiveInfo& operator=(ReceiveInfo&& rhs) noexcept;

  // Populates a ReceiveInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReceiveInfo& out);

  // Populates a ReceiveInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReceiveInfo& out);

  // Creates a deep copy of ReceiveInfo.
  ReceiveInfo Clone() const;

  // Creates a ReceiveInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ReceiveInfo> FromValue(const base::Value::Dict& value);

  // Creates a ReceiveInfo object from a base::Value, or nullopt on failure.
  static std::optional<ReceiveInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReceiveInfo object.
  base::Value::Dict ToValue() const;

  // The socket identifier.
  int socket_id;

  // The data received, with a maxium size of <code>bufferSize</code>.
  std::vector<uint8_t> data;

};

enum class ReceiveError {
  kNone = 0,
  kDisconnected,
  kSystemError,
  kNotConnected,
  kMaxValue = kNotConnected,
};


const char* ToString(ReceiveError as_enum);
ReceiveError ParseReceiveError(base::StringPiece as_string);
std::u16string GetReceiveErrorParseError(base::StringPiece as_string);

struct ReceiveErrorInfo {
  ReceiveErrorInfo();
  ~ReceiveErrorInfo();
  ReceiveErrorInfo(const ReceiveErrorInfo&) = delete;
  ReceiveErrorInfo& operator=(const ReceiveErrorInfo&) = delete;
  ReceiveErrorInfo(ReceiveErrorInfo&& rhs) noexcept;
  ReceiveErrorInfo& operator=(ReceiveErrorInfo&& rhs) noexcept;

  // Populates a ReceiveErrorInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReceiveErrorInfo& out);

  // Populates a ReceiveErrorInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReceiveErrorInfo& out);

  // Creates a deep copy of ReceiveErrorInfo.
  ReceiveErrorInfo Clone() const;

  // Creates a ReceiveErrorInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ReceiveErrorInfo> FromValue(const base::Value::Dict& value);

  // Creates a ReceiveErrorInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<ReceiveErrorInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReceiveErrorInfo object.
  base::Value::Dict ToValue() const;

  // The socket identifier.
  int socket_id;

  // The error message.
  std::string error_message;

  // An error code indicating what went wrong.
  ReceiveError error;

};


//
// Functions
//

namespace Create {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket properties (optional).
  std::optional<SocketProperties> properties;


 private:
  Params();
};

namespace Results {

// The result of the socket creation.
base::Value::List Create(const CreateInfo& create_info);
}  // namespace Results

}  // namespace Create

namespace Update {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket identifier.
  int socket_id;

  // The properties to update.
  SocketProperties properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Update

namespace SetPaused {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int socket_id;

  bool paused;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetPaused

namespace ListenUsingRfcomm {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket identifier.
  int socket_id;

  // Service UUID to listen on.
  std::string uuid;

  // Optional additional options for the service.
  std::optional<ListenOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ListenUsingRfcomm

namespace ListenUsingL2cap {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket identifier.
  int socket_id;

  // Service UUID to listen on.
  std::string uuid;

  // Optional additional options for the service.
  std::optional<ListenOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ListenUsingL2cap

namespace Connect {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket identifier.
  int socket_id;

  // The address of the Bluetooth device.
  std::string address;

  // The UUID of the service to connect to.
  std::string uuid;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Connect

namespace Disconnect {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket identifier.
  int socket_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Disconnect

namespace Close {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket identifier.
  int socket_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Close

namespace Send {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket identifier.
  int socket_id;

  // The data to send.
  std::vector<uint8_t> data;


 private:
  Params();
};

namespace Results {

// The number of bytes sent.
base::Value::List Create(int bytes_sent);
}  // namespace Results

}  // namespace Send

namespace GetInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket identifier.
  int socket_id;


 private:
  Params();
};

namespace Results {

// Object containing the socket information.
base::Value::List Create(const SocketInfo& socket_info);
}  // namespace Results

}  // namespace GetInfo

namespace GetSockets {

namespace Results {

base::Value::List Create(const std::vector<SocketInfo>& sockets);
}  // namespace Results

}  // namespace GetSockets

//
// Events
//

namespace OnAccept {

extern const char kEventName[];  // "bluetoothSocket.onAccept"

// The event data.
base::Value::List Create(const AcceptInfo& info);
}  // namespace OnAccept

namespace OnAcceptError {

extern const char kEventName[];  // "bluetoothSocket.onAcceptError"

// The event data.
base::Value::List Create(const AcceptErrorInfo& info);
}  // namespace OnAcceptError

namespace OnReceive {

extern const char kEventName[];  // "bluetoothSocket.onReceive"

// The event data.
base::Value::List Create(const ReceiveInfo& info);
}  // namespace OnReceive

namespace OnReceiveError {

extern const char kEventName[];  // "bluetoothSocket.onReceiveError"

// The event data.
base::Value::List Create(const ReceiveErrorInfo& info);
}  // namespace OnReceiveError

}  // namespace bluetooth_socket
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_BLUETOOTH_SOCKET_H__
