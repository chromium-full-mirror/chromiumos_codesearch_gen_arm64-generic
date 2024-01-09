// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/sockets_tcp_server.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SOCKETS_TCP_SERVER_H__
#define EXTENSIONS_COMMON_API_SOCKETS_TCP_SERVER_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace sockets_tcp_server {

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

  // Flag indicating if the socket remains open when the event page of the
  // application is unloaded (see <a
  // href="http://developer.chrome.com/apps/app_lifecycle.html">Manage App
  // Lifecycle</a>). The default value is "false." When the application is loaded,
  // any sockets previously opened with persistent=true can be fetched with
  // <code>getSockets</code>.
  std::optional<bool> persistent;

  // An application-defined string associated with the socket.
  std::optional<std::string> name;

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

  // The ID of the newly created server socket. Note that socket IDs created from
  // this API are not compatible with socket IDs created from other APIs, such as
  // the deprecated <code>$(ref:socket)</code> API.
  int socket_id;

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

  // Flag indicating whether connection requests on a listening socket are
  // dispatched through the <code>onAccept</code> event or queued up in the listen
  // queue backlog. See <code>setPaused</code>. The default value is "false".
  bool paused;

  // If the socket is listening, contains its local IPv4/6 address.
  std::optional<std::string> local_address;

  // If the socket is listening, contains its local port.
  std::optional<int> local_port;

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
  // functions from the <code>chrome.sockets.tcp</code> namespace. Note the client
  // socket is initially paused and must be explictly un-paused by the application
  // to start receiving data.
  int client_socket_id;

};

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

  // The result code returned from the underlying network call.
  int result_code;

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

namespace Listen {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The socket identifier.
  int socket_id;

  // The address of the local machine.
  std::string address;

  // The port of the local machine. When set to <code>0</code>, a free port is
  // chosen dynamically. The dynamically allocated port can be found by calling
  // <code>getInfo</code>.
  int port;

  // Length of the socket's listen queue. The default value depends on the
  // Operating System (SOMAXCONN), which ensures a reasonable queue length for
  // most applications.
  std::optional<int> backlog;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call. A negative value
// indicates an error.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace Listen

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

// Array of object containing socket information.
base::Value::List Create(const std::vector<SocketInfo>& socket_infos);
}  // namespace Results

}  // namespace GetSockets

//
// Events
//

namespace OnAccept {

extern const char kEventName[];  // "sockets.tcpServer.onAccept"

// The event data.
base::Value::List Create(const AcceptInfo& info);
}  // namespace OnAccept

namespace OnAcceptError {

extern const char kEventName[];  // "sockets.tcpServer.onAcceptError"

// The event data.
base::Value::List Create(const AcceptErrorInfo& info);
}  // namespace OnAcceptError

}  // namespace sockets_tcp_server
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SOCKETS_TCP_SERVER_H__
