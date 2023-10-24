// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/test.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/test.h"

#include <memory>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"

using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace test {
//
// Functions
//

namespace GetConfig {

Results::TestConfig::FtpServer::FtpServer()
: port(0) {}

Results::TestConfig::FtpServer::~FtpServer() = default;
Results::TestConfig::FtpServer::FtpServer(FtpServer&& rhs) = default;
Results::TestConfig::FtpServer& Results::TestConfig::FtpServer::operator=(FtpServer&& rhs) = default;
base::Value::Dict Results::TestConfig::FtpServer::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("port", this->port);


  return to_value_result;
}


Results::TestConfig::TestServer::TestServer()
: port(0) {}

Results::TestConfig::TestServer::~TestServer() = default;
Results::TestConfig::TestServer::TestServer(TestServer&& rhs) = default;
Results::TestConfig::TestServer& Results::TestConfig::TestServer::operator=(TestServer&& rhs) = default;
base::Value::Dict Results::TestConfig::TestServer::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("port", this->port);


  return to_value_result;
}


Results::TestConfig::LoginStatus::LoginStatus()
 {}

Results::TestConfig::LoginStatus::~LoginStatus() = default;
Results::TestConfig::LoginStatus::LoginStatus(LoginStatus&& rhs) = default;
Results::TestConfig::LoginStatus& Results::TestConfig::LoginStatus::operator=(LoginStatus&& rhs) = default;
base::Value::Dict Results::TestConfig::LoginStatus::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->is_logged_in) {
    to_value_result.Set("isLoggedIn", *this->is_logged_in);

  }
  if (this->is_screen_locked) {
    to_value_result.Set("isScreenLocked", *this->is_screen_locked);

  }

  return to_value_result;
}



Results::TestConfig::TestConfig()
 {}

Results::TestConfig::~TestConfig() = default;
Results::TestConfig::TestConfig(TestConfig&& rhs) = default;
Results::TestConfig& Results::TestConfig::operator=(TestConfig&& rhs) = default;
base::Value::Dict Results::TestConfig::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->custom_arg) {
    to_value_result.Set("customArg", *this->custom_arg);

  }
  if (this->ftp_server) {
    to_value_result.Set("ftpServer", (this->ftp_server)->ToValue());

  }
  if (this->test_server) {
    to_value_result.Set("testServer", (this->test_server)->ToValue());

  }
  if (this->test_data_directory) {
    to_value_result.Set("testDataDirectory", *this->test_data_directory);

  }
  if (this->test_web_socket_port) {
    to_value_result.Set("testWebSocketPort", *this->test_web_socket_port);

  }
  if (this->test_web_transport_port) {
    to_value_result.Set("testWebTransportPort", *this->test_web_transport_port);

  }
  if (this->login_status) {
    to_value_result.Set("loginStatus", (this->login_status)->ToValue());

  }

  return to_value_result;
}


base::Value::List Results::Create(const TestConfig& test_config) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((test_config).ToValue());

  return create_results;
}
}  // namespace GetConfig

namespace NotifyFail {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.message = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace NotifyFail

namespace NotifyPass {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() > 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        params.message = absl::nullopt;
        return absl::nullopt;
      }
      params.message = *temp;
    }
  }

  return params;
}


}  // namespace NotifyPass

namespace Log {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.message = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace Log

namespace OpenFileUrl {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& url_value = args[0];
    {
      auto* temp = url_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.url = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace OpenFileUrl

namespace PassMessage {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.message = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& response) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(response);

  return create_results;
}
}  // namespace PassMessage

namespace SendScriptResult {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& result_value = args[0];
    {
      params.result = result_value.Clone();
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace SendScriptResult

namespace WaitForRoundTrip {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& message_value = args[0];
    {
      auto* temp = message_value.GetIfString();
      if (!temp) {
        return absl::nullopt;
      }
      params.message = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& message) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(message);

  return create_results;
}
}  // namespace WaitForRoundTrip

//
// Events
//

namespace OnMessage {

const char kEventName[] = "test.onMessage";

Info::Info()
: last_message(false) {}

Info::~Info() = default;
Info::Info(Info&& rhs) = default;
Info& Info::operator=(Info&& rhs) = default;
base::Value::Dict Info::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("data", this->data);

  to_value_result.Set("lastMessage", this->last_message);


  return to_value_result;
}


base::Value::List Create(const Info& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnMessage

}  // namespace test
}  // namespace api
}  // namespace extensions

