// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/sockets_tcp.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SOCKETS_TCP_H__
#define EXTENSIONS_COMMON_API_SOCKETS_TCP_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace sockets_tcp {

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

  // The size of the buffer used to receive data. The default value is 4096.
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

struct TLSVersionConstraints {
  TLSVersionConstraints();
  ~TLSVersionConstraints();
  TLSVersionConstraints(const TLSVersionConstraints&) = delete;
  TLSVersionConstraints& operator=(const TLSVersionConstraints&) = delete;
  TLSVersionConstraints(TLSVersionConstraints&& rhs);
  TLSVersionConstraints& operator=(TLSVersionConstraints&& rhs);

  // Populates a TLSVersionConstraints object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, TLSVersionConstraints& out);

  // Populates a TLSVersionConstraints object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, TLSVersionConstraints& out);

  // Creates a deep copy of TLSVersionConstraints.
  TLSVersionConstraints Clone() const;

  // Creates a TLSVersionConstraints object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<TLSVersionConstraints> FromValueDeprecated(const base::Value& value);

  // Creates a TLSVersionConstraints object from a base::Value::Dict, or nullopt
  // on failure.
  static absl::optional<TLSVersionConstraints> FromValue(const base::Value::Dict& value);

  // Creates a TLSVersionConstraints object from a base::Value, or nullopt on
  // failure.
  static absl::optional<TLSVersionConstraints> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTLSVersionConstraints object.
  base::Value::Dict ToValue() const;

  // <p>The minimum and maximum acceptable versions of TLS. Supported values are
  // <code>tls1.2</code> or <code>tls1.3</code>.</p><p>The values
  // <code>tls1</code> and <code>tls1.1</code> are no longer supported. If |min|
  // is set to one of these values, it will be silently clamped to
  // <code>tls1.2</code>. If |max| is set to one of those values, or any other
  // unrecognized value, it will be silently ignored.</p>
  absl::optional<std::string> min;

  absl::optional<std::string> max;

};

struct SecureOptions {
  SecureOptions();
  ~SecureOptions();
  SecureOptions(const SecureOptions&) = delete;
  SecureOptions& operator=(const SecureOptions&) = delete;
  SecureOptions(SecureOptions&& rhs);
  SecureOptions& operator=(SecureOptions&& rhs);

  // Populates a SecureOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SecureOptions& out);

  // Populates a SecureOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SecureOptions& out);

  // Creates a deep copy of SecureOptions.
  SecureOptions Clone() const;

  // Creates a SecureOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<SecureOptions> FromValueDeprecated(const base::Value& value);

  // Creates a SecureOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<SecureOptions> FromValue(const base::Value::Dict& value);

  // Creates a SecureOptions object from a base::Value, or nullopt on failure.
  static absl::optional<SecureOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSecureOptions object.
  base::Value::Dict ToValue() const;

  absl::optional<TLSVersionConstraints> tls_version;

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

  // Flag indicating whether a connected socket blocks its peer from sending more
  // data (see <code>setPaused</code>).
  bool paused;

  // Flag indicating whether the socket is connected to a remote peer.
  bool connected;

  // If the underlying socket is connected, contains its local IPv4/6 address.
  absl::optional<std::string> local_address;

  // If the underlying socket is connected, contains its local port.
  absl::optional<int> local_port;

  // If the underlying socket is connected, contains the peer/ IPv4/6 address.
  absl::optional<std::string> peer_address;

  // If the underlying socket is connected, contains the peer port.
  absl::optional<int> peer_port;

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

  // The socket identifier.
  int socket_id;

  // The data received, with a maxium size of <code>bufferSize</code>.
  std::vector<uint8_t> data;

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

  // The socket identifier.
  int socket_id;

  // The result code returned from the underlying network call.
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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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

namespace SetKeepAlive {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket identifier.
  int socket_id;

  // If true, enable keep-alive functionality.
  bool enable;

  // Set the delay seconds between the last data packet received and the first
  // keepalive probe. Default is 0.
  absl::optional<int> delay;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call. A negative value
// indicates an error.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace SetKeepAlive

namespace SetNoDelay {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket identifier.
  int socket_id;

  // If true, disables Nagle's algorithm.
  bool no_delay;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call. A negative value
// indicates an error.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace SetNoDelay

namespace Connect {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket identifier.
  int socket_id;

  // The address of the remote machine. DNS name, IPv4 and  IPv6 formats are
  // supported.
  std::string peer_address;

  // The port of the remote machine.
  int peer_port;

  // The address resolution preference.
  DnsQueryType dns_query_type;


 private:
  Params();
};

namespace Results {

// The result code returned from the underlying network call. A negative value
// indicates an error.
base::Value::List Create(int result);
}  // namespace Results

}  // namespace Connect

namespace Disconnect {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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

namespace Secure {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The existing, connected socket to use.
  int socket_id;

  // Constraints and parameters for the TLS connection.
  absl::optional<SecureOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int result);
}  // namespace Results

}  // namespace Secure

namespace Send {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socket identifier.
  int socket_id;

  // The data to send.
  std::vector<uint8_t> data;


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
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
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

namespace OnReceive {

extern const char kEventName[];  // "sockets.tcp.onReceive"

// The event data.
base::Value::List Create(const ReceiveInfo& info);
}  // namespace OnReceive

namespace OnReceiveError {

extern const char kEventName[];  // "sockets.tcp.onReceiveError"

// The event data.
base::Value::List Create(const ReceiveErrorInfo& info);
}  // namespace OnReceiveError

}  // namespace sockets_tcp
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SOCKETS_TCP_H__
