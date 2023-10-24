// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/sockets_udp.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SOCKETS_UDP_H__
#define EXTENSIONS_COMMON_API_SOCKETS_UDP_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace sockets_udp {

//
// Types
//

struct SocketProperties {
  SocketProperties();
  ~SocketProperties();
  SocketProperties(const SocketProperties&) = delete;
  SocketProperties& operator=(const SocketProperties&) = delete;
  SocketProperties(SocketProperties&& rhs);
  SocketProperties& operator=(SocketProperties&& rhs);

  // Populates a SocketProperties object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SocketProperties& out);

  // Populates a SocketProperties object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SocketProperties& out);

  // Creates a deep copy of SocketProperties.
  SocketProperties Clone() const;

  // Creates a SocketProperties object from a base::Value, or NULL on failure.
  static std::unique_ptr<SocketProperties> FromValueDeprecated(const base::Value& value);

  // Creates a SocketProperties object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SocketProperties> FromValue(const base::Value::Dict& value);

  // Creates a SocketProperties object from a base::Value, or nullopt on
  // failure.
  static absl::optional<SocketProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSocketProperties object.
  base::Value::Dict ToValue() const;

  // Flag indicating if the socket is left open when the event page of the
  // application is unloaded (see <a
  // href="http://developer.chrome.com/apps/app_lifecycle.html">Manage App
  // Lifecycle</a>). The default value is "false." When the application is loaded,
  // any sockets previously opened with persistent=true can be fetched with
  // <code>getSockets</code>.
  absl::optional<bool> persistent;

  // An application-defined string associated with the socket.
  absl::optional<std::string> name;

  // The size of the buffer used to receive data. If the buffer is too small to
  // receive the UDP packet, data is lost. The default value is 4096.
  absl::optional<int> buffer_size;

};

struct CreateInfo {
  CreateInfo();
  ~CreateInfo();
  CreateInfo(const CreateInfo&) = delete;
  CreateInfo& operator=(const CreateInfo&) = delete;
  CreateInfo(CreateInfo&& rhs);
  CreateInfo& operator=(CreateInfo&& rhs);

  // Populates a CreateInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateInfo& out);

  // Populates a CreateInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateInfo& out);

  // Creates a deep copy of CreateInfo.
  CreateInfo Clone() const;

  // Creates a CreateInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<CreateInfo> FromValueDeprecated(const base::Value& value);

  // Creates a CreateInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CreateInfo> FromValue(const base::Value::Dict& value);

  // Creates a CreateInfo object from a base::Value, or nullopt on failure.
  static absl::optional<CreateInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateInfo object.
  base::Value::Dict ToValue() const;

  // The ID of the newly created socket. Note that socket IDs created from this
  // API are not compatible with socket IDs created from other APIs, such as the
  // deprecated <code>$(ref:socket)</code> API.
  int socket_id;

};

// DNS resolution preferences. The default is <code>any</code> and uses the
// current OS config which may return IPv4 or IPv6. <code>ipv4</code> forces
// IPv4, and <code>ipv6</code> forces IPv6.
enum class DnsQueryType {
  kNone = 0,
  kAny,
  kIpv4,
  kIpv6,
  kMaxValue = kIpv6,
};


const char* ToString(DnsQueryType as_enum);
DnsQueryType ParseDnsQueryType(base::StringPiece as_string);
std::u16string GetDnsQueryTypeParseError(base::StringPiece as_string);

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

  // The result code returned from the underlying network call. A negative value
  // indicates an error.
  int result_code;

  // The number of bytes sent (if result == 0)
  absl::optional<int> bytes_sent;

};

struct SocketInfo {
  SocketInfo();
  ~SocketInfo();
  SocketInfo(const SocketInfo&) = delete;
  SocketInfo& operator=(const SocketInfo&) = delete;
  SocketInfo(SocketInfo&& rhs);
  SocketInfo& operator=(SocketInfo&& rhs);

  // Populates a SocketInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SocketInfo& out);

  // Populates a SocketInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SocketInfo& out);

  // Creates a deep copy of SocketInfo.
  SocketInfo Clone() const;

  // Creates a SocketInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<SocketInfo> FromValueDeprecated(const base::Value& value);

  // Creates a SocketInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SocketInfo> FromValue(const base::Value::Dict& value);

  // Creates a SocketInfo object from a base::Value, or nullopt on failure.
  static absl::optional<SocketInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSocketInfo object.
  base::Value::Dict ToValue() const;

  // The socket identifier.
  int socket_id;

  // Flag indicating whether the socket is left open when the application is
  // suspended (see <code>SocketProperties.persistent</code>).
  bool persistent;

  // Application-defined string associated with the socket.
  absl::optional<std::string> name;

  // The size of the buffer used to receive data. If no buffer size has been
  // specified explictly, the value is not provided.
  absl::optional<int> buffer_size;

  // Flag indicating whether the socket is blocked from firing onReceive events.
  bool paused;

  // If the underlying socket is bound, contains its local IPv4/6 address.
  absl::optional<std::string> local_address;

  // If the underlying socket is bound, contains its local port.
  absl::optional<int> local_port;

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

  // The socket ID.
  int socket_id;

  // The UDP packet content (truncated to the current buffer size).
  std::vector<uint8_t> data;

  // The address of the host the packet comes from.
  std::string remote_address;

  // The port of the host the packet comes from.
  int remote_port;

};

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

  // The socket ID.
  int socket_id;

  // The result code returned from the underlying recvfrom() call.
  int result_code;

};


//
// Functions
//

namespace Create {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket properties (optional).
  absl::optional<SocketProperties> properties;


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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int socket_id;

  // Flag to indicate whether to pause or unpause.
  bool paused;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetPaused

namespace Bind {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
  int socket_id;

  // The address of the local machine. DNS name, IPv4 and IPv6 formats are
  // supported. Use "0.0.0.0" to accept packets from all local available network
  // interfaces.
  std::string address;

  // The port of the local machine. Use "0" to bind to a free port.
  int port;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call. A negative value
// indicates an error.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace Bind

namespace Send {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
  int socket_id;

  // The data to send.
  std::vector<uint8_t> data;

  // The address of the remote machine.
  std::string address;

  // The port of the remote machine.
  int port;

  // The address resolution preference.
  DnsQueryType dns_query_type;


 private:
  Params();
};

namespace Results {

// Result of the <code>send</code> method.
base::Value::List Create(const SendInfo& send_info);
}  // namespace Results

}  // namespace Send

namespace Close {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
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

namespace JoinGroup {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
  int socket_id;

  // The group address to join. Domain names are not supported.
  std::string address;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call. A negative value
// indicates an error.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace JoinGroup

namespace LeaveGroup {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
  int socket_id;

  // The group address to leave. Domain names are not supported.
  std::string address;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call. A negative value
// indicates an error.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace LeaveGroup

namespace SetMulticastTimeToLive {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
  int socket_id;

  // The time-to-live value.
  int ttl;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call. A negative value
// indicates an error.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace SetMulticastTimeToLive

namespace SetMulticastLoopbackMode {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
  int socket_id;

  // Indicate whether to enable loopback mode.
  bool enabled;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call. A negative value
// indicates an error.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace SetMulticastLoopbackMode

namespace GetJoinedGroups {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
  int socket_id;


 private:
  Params();
};

namespace Results {

// Array of groups the socket joined.
base::Value::List Create(const std::vector<std::string>& groups);
}  // namespace Results

}  // namespace GetJoinedGroups

namespace SetBroadcast {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket ID.
  int socket_id;

  // <code>true</code> to enable broadcast packets, <code>false</code> to disable
  // them.
  bool enabled;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace SetBroadcast

//
// Events
//

namespace OnReceive {

extern const char kEventName[];  // "sockets.udp.onReceive"

// The event data.
base::Value::List Create(const ReceiveInfo& info);
}  // namespace OnReceive

namespace OnReceiveError {

extern const char kEventName[];  // "sockets.udp.onReceiveError"

// The event data.
base::Value::List Create(const ReceiveErrorInfo& info);
}  // namespace OnReceiveError

}  // namespace sockets_udp
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SOCKETS_UDP_H__
