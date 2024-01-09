// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/diagnostics.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_DIAGNOSTICS_H__
#define EXTENSIONS_COMMON_API_DIAGNOSTICS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace diagnostics {

//
// Types
//

struct SendPacketOptions {
  SendPacketOptions();
  ~SendPacketOptions();
  SendPacketOptions(const SendPacketOptions&) = delete;
  SendPacketOptions& operator=(const SendPacketOptions&) = delete;
  SendPacketOptions(SendPacketOptions&& rhs) noexcept;
  SendPacketOptions& operator=(SendPacketOptions&& rhs) noexcept;

  // Populates a SendPacketOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SendPacketOptions& out);

  // Populates a SendPacketOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SendPacketOptions& out);

  // Creates a deep copy of SendPacketOptions.
  SendPacketOptions Clone() const;

  // Creates a SendPacketOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SendPacketOptions> FromValue(const base::Value::Dict& value);

  // Creates a SendPacketOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<SendPacketOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSendPacketOptions object.
  base::Value::Dict ToValue() const;

  // Target IP address.
  std::string ip;

  // Packet time to live value. If omitted, the system default value will be used.
  std::optional<int> ttl;

  // Packet timeout in seconds. If omitted, the system default value will be used.
  std::optional<int> timeout;

  // Size of the payload. If omitted, the system default value will be used.
  std::optional<int> size;

};

struct SendPacketResult {
  SendPacketResult();
  ~SendPacketResult();
  SendPacketResult(const SendPacketResult&) = delete;
  SendPacketResult& operator=(const SendPacketResult&) = delete;
  SendPacketResult(SendPacketResult&& rhs) noexcept;
  SendPacketResult& operator=(SendPacketResult&& rhs) noexcept;

  // Populates a SendPacketResult object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SendPacketResult& out);

  // Populates a SendPacketResult object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SendPacketResult& out);

  // Creates a deep copy of SendPacketResult.
  SendPacketResult Clone() const;

  // Creates a SendPacketResult object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SendPacketResult> FromValue(const base::Value::Dict& value);

  // Creates a SendPacketResult object from a base::Value, or nullopt on
  // failure.
  static std::optional<SendPacketResult> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSendPacketResult object.
  base::Value::Dict ToValue() const;

  // The IP of the host which we receives the ICMP reply from. The IP may differs
  // from our target IP if the packet's ttl is used up.
  std::string ip;

  // Latency in millisenconds.
  double latency;

};


//
// Functions
//

namespace SendPacket {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  SendPacketOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const SendPacketResult& result);
}  // namespace Results

}  // namespace SendPacket

}  // namespace diagnostics
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_DIAGNOSTICS_H__
