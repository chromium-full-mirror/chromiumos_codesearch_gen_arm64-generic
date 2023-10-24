// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/socket.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_SOCKET_H__
#define EXTENSIONS_COMMON_API_SOCKET_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace socket {

//
// Types
//

enum class SocketType {
  kNone = 0,
  kTcp,
  kUdp,
  kMaxValue = kUdp,
};


const char* ToString(SocketType as_enum);
SocketType ParseSocketType(base::StringPiece as_string);
std::u16string GetSocketTypeParseError(base::StringPiece as_string);

struct CreateOptions {
  CreateOptions();
  ~CreateOptions();
  CreateOptions(const CreateOptions&) = delete;
  CreateOptions& operator=(const CreateOptions&) = delete;
  CreateOptions(CreateOptions&& rhs);
  CreateOptions& operator=(CreateOptions&& rhs);

  // Populates a CreateOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateOptions& out);

  // Populates a CreateOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateOptions& out);

  // Creates a deep copy of CreateOptions.
  CreateOptions Clone() const;

  // Creates a CreateOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<CreateOptions> FromValueDeprecated(const base::Value& value);

  // Creates a CreateOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CreateOptions> FromValue(const base::Value::Dict& value);

  // Creates a CreateOptions object from a base::Value, or nullopt on failure.
  static absl::optional<CreateOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateOptions object.
  base::Value::Dict ToValue() const;

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

  // The id of the newly created socket.
  int socket_id;

};

struct AcceptInfo {
  AcceptInfo();
  ~AcceptInfo();
  AcceptInfo(const AcceptInfo&) = delete;
  AcceptInfo& operator=(const AcceptInfo&) = delete;
  AcceptInfo(AcceptInfo&& rhs);
  AcceptInfo& operator=(AcceptInfo&& rhs);

  // Populates a AcceptInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, AcceptInfo& out);

  // Populates a AcceptInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, AcceptInfo& out);

  // Creates a deep copy of AcceptInfo.
  AcceptInfo Clone() const;

  // Creates a AcceptInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<AcceptInfo> FromValueDeprecated(const base::Value& value);

  // Creates a AcceptInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AcceptInfo> FromValue(const base::Value::Dict& value);

  // Creates a AcceptInfo object from a base::Value, or nullopt on failure.
  static absl::optional<AcceptInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAcceptInfo object.
  base::Value::Dict ToValue() const;

  int result_code;

  // The id of the accepted socket.
  absl::optional<int> socket_id;

};

struct ReadInfo {
  ReadInfo();
  ~ReadInfo();
  ReadInfo(const ReadInfo&) = delete;
  ReadInfo& operator=(const ReadInfo&) = delete;
  ReadInfo(ReadInfo&& rhs);
  ReadInfo& operator=(ReadInfo&& rhs);

  // Populates a ReadInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ReadInfo& out);

  // Populates a ReadInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReadInfo& out);

  // Creates a deep copy of ReadInfo.
  ReadInfo Clone() const;

  // Creates a ReadInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<ReadInfo> FromValueDeprecated(const base::Value& value);

  // Creates a ReadInfo object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<ReadInfo> FromValue(const base::Value::Dict& value);

  // Creates a ReadInfo object from a base::Value, or nullopt on failure.
  static absl::optional<ReadInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReadInfo object.
  base::Value::Dict ToValue() const;

  // The resultCode returned from the underlying read() call.
  int result_code;

  std::vector<uint8_t> data;

};

struct WriteInfo {
  WriteInfo();
  ~WriteInfo();
  WriteInfo(const WriteInfo&) = delete;
  WriteInfo& operator=(const WriteInfo&) = delete;
  WriteInfo(WriteInfo&& rhs);
  WriteInfo& operator=(WriteInfo&& rhs);

  // Populates a WriteInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, WriteInfo& out);

  // Populates a WriteInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, WriteInfo& out);

  // Creates a deep copy of WriteInfo.
  WriteInfo Clone() const;

  // Creates a WriteInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<WriteInfo> FromValueDeprecated(const base::Value& value);

  // Creates a WriteInfo object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<WriteInfo> FromValue(const base::Value::Dict& value);

  // Creates a WriteInfo object from a base::Value, or nullopt on failure.
  static absl::optional<WriteInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWriteInfo object.
  base::Value::Dict ToValue() const;

  // The number of bytes sent, or a negative error code.
  int bytes_written;

};

struct RecvFromInfo {
  RecvFromInfo();
  ~RecvFromInfo();
  RecvFromInfo(const RecvFromInfo&) = delete;
  RecvFromInfo& operator=(const RecvFromInfo&) = delete;
  RecvFromInfo(RecvFromInfo&& rhs);
  RecvFromInfo& operator=(RecvFromInfo&& rhs);

  // Populates a RecvFromInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RecvFromInfo& out);

  // Populates a RecvFromInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RecvFromInfo& out);

  // Creates a deep copy of RecvFromInfo.
  RecvFromInfo Clone() const;

  // Creates a RecvFromInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<RecvFromInfo> FromValueDeprecated(const base::Value& value);

  // Creates a RecvFromInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RecvFromInfo> FromValue(const base::Value::Dict& value);

  // Creates a RecvFromInfo object from a base::Value, or nullopt on failure.
  static absl::optional<RecvFromInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRecvFromInfo object.
  base::Value::Dict ToValue() const;

  // The resultCode returned from the underlying recvfrom() call.
  int result_code;

  std::vector<uint8_t> data;

  // The address of the remote machine.
  std::string address;

  int port;

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

  // The type of the passed socket. This will be <code>tcp</code> or
  // <code>udp</code>.
  SocketType socket_type;

  // <p>Whether or not the underlying socket is connected.</p><p>For
  // <code>tcp</code> sockets, this will remain true even if the remote peer has
  // disconnected. Reading or writing to the socket may then result in an error,
  // hinting that this socket should be disconnected via
  // <code>disconnect()</code>.</p><p>For <code>udp</code> sockets, this just
  // represents whether a default remote address has been specified for reading
  // and writing packets.</p>
  bool connected;

  // If the underlying socket is connected, contains the IPv4/6 address of the
  // peer.
  absl::optional<std::string> peer_address;

  // If the underlying socket is connected, contains the port of the connected
  // peer.
  absl::optional<int> peer_port;

  // If the underlying socket is bound or connected, contains its local IPv4/6
  // address.
  absl::optional<std::string> local_address;

  // If the underlying socket is bound or connected, contains its local port.
  absl::optional<int> local_port;

};

struct NetworkInterface {
  NetworkInterface();
  ~NetworkInterface();
  NetworkInterface(const NetworkInterface&) = delete;
  NetworkInterface& operator=(const NetworkInterface&) = delete;
  NetworkInterface(NetworkInterface&& rhs);
  NetworkInterface& operator=(NetworkInterface&& rhs);

  // Populates a NetworkInterface object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, NetworkInterface& out);

  // Populates a NetworkInterface object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, NetworkInterface& out);

  // Creates a deep copy of NetworkInterface.
  NetworkInterface Clone() const;

  // Creates a NetworkInterface object from a base::Value, or NULL on failure.
  static std::unique_ptr<NetworkInterface> FromValueDeprecated(const base::Value& value);

  // Creates a NetworkInterface object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<NetworkInterface> FromValue(const base::Value::Dict& value);

  // Creates a NetworkInterface object from a base::Value, or nullopt on
  // failure.
  static absl::optional<NetworkInterface> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisNetworkInterface object.
  base::Value::Dict ToValue() const;

  // The underlying name of the adapter. On *nix, this will typically be "eth0",
  // "lo", etc.
  std::string name;

  // The available IPv4/6 address.
  std::string address;

  // The prefix length
  int prefix_length;

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

  // The type of socket to create. Must be <code>tcp</code> or <code>udp</code>.
  SocketType type;

  // The socket options.
  absl::optional<CreateOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const CreateInfo& create_info);
}  // namespace Results

}  // namespace Create

namespace Destroy {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;


 private:
  Params();
};

}  // namespace Destroy

namespace Connect {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;

  // The hostname or IP address of the remote machine.
  std::string hostname;

  // The port of the remote machine.
  int port;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int result);
}  // namespace Results

}  // namespace Connect

namespace Bind {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;

  // The address of the local machine.
  std::string address;

  // The port of the local machine.
  int port;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int result);
}  // namespace Results

}  // namespace Bind

namespace Disconnect {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;


 private:
  Params();
};

}  // namespace Disconnect

namespace Read {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;

  // The read buffer size.
  absl::optional<int> buffer_size;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ReadInfo& read_info);
}  // namespace Results

}  // namespace Read

namespace Write {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;

  // The data to write.
  std::vector<uint8_t> data;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const WriteInfo& write_info);
}  // namespace Results

}  // namespace Write

namespace RecvFrom {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;

  // The receive buffer size.
  absl::optional<int> buffer_size;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RecvFromInfo& recv_from_info);
}  // namespace Results

}  // namespace RecvFrom

namespace SendTo {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;

  // The data to write.
  std::vector<uint8_t> data;

  // The address of the remote machine.
  std::string address;

  // The port of the remote machine.
  int port;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const WriteInfo& write_info);
}  // namespace Results

}  // namespace SendTo

namespace Listen {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;

  // The address of the local machine.
  std::string address;

  // The port of the local machine.
  int port;

  // Length of the socket's listen queue.
  absl::optional<int> backlog;


 private:
  Params();
};

namespace Results {

base::Value::List Create(int result);
}  // namespace Results

}  // namespace Listen

namespace Accept {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const AcceptInfo& accept_info);
}  // namespace Results

}  // namespace Accept

namespace SetKeepAlive {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
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

base::Value::List Create(bool result);
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

  // The socketId.
  int socket_id;

  // If true, disables Nagle's algorithm.
  bool no_delay;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace SetNoDelay

namespace GetInfo {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const SocketInfo& result);
}  // namespace Results

}  // namespace GetInfo

namespace GetNetworkList {

namespace Results {

base::Value::List Create(const std::vector<NetworkInterface>& result);
}  // namespace Results

}  // namespace GetNetworkList

namespace JoinGroup {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The socketId.
  int socket_id;

  // The group address to join. Domain names are not supported.
  std::string address;


 private:
  Params();
};

namespace Results {

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

  // The socketId.
  int socket_id;

  // The group address to leave. Domain names are not supported.
  std::string address;


 private:
  Params();
};

namespace Results {

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

  // The socketId.
  int socket_id;

  // The time-to-live value.
  int ttl;


 private:
  Params();
};

namespace Results {

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

  // The socketId.
  int socket_id;

  // Indicate whether to enable loopback mode.
  bool enabled;


 private:
  Params();
};

namespace Results {

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

  // The socketId.
  int socket_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<std::string>& groups);
}  // namespace Results

}  // namespace GetJoinedGroups

namespace Secure {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The connected socket to use.
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

}  // namespace socket
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_SOCKET_H__
