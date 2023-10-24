// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/test.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_TEST_H__
#define EXTENSIONS_COMMON_API_TEST_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace test {

//
// Functions
//

namespace GetConfig {

namespace Results {

struct TestConfig {
  TestConfig();
  ~TestConfig();
  TestConfig(const TestConfig&) = delete;
  TestConfig& operator=(const TestConfig&) = delete;
  TestConfig(TestConfig&& rhs);
  TestConfig& operator=(TestConfig&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTestConfig object.
  base::Value::Dict ToValue() const;

  // Details on the FTP server used to mock network responses.  Will be set only
  // if test calls ExtensionApiTest::StartFTPServer().
  struct FtpServer {
    FtpServer();
    ~FtpServer();
    FtpServer(const FtpServer&) = delete;
    FtpServer& operator=(const FtpServer&) = delete;
    FtpServer(FtpServer&& rhs);
    FtpServer& operator=(FtpServer&& rhs);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisFtpServer object.
    base::Value::Dict ToValue() const;

    // The port on which the FTP server is listening.
    int port;

  };

  // Details on the test server used to mock network responses.  Will be set only
  // if test calls ExtensionApiTest::StartEmbeddedTestServer().
  struct TestServer {
    TestServer();
    ~TestServer();
    TestServer(const TestServer&) = delete;
    TestServer& operator=(const TestServer&) = delete;
    TestServer(TestServer&& rhs);
    TestServer& operator=(TestServer&& rhs);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisTestServer object.
    base::Value::Dict ToValue() const;

    // The port on which the test server is listening.
    int port;

  };

  // Login status.
  struct LoginStatus {
    LoginStatus();
    ~LoginStatus();
    LoginStatus(const LoginStatus&) = delete;
    LoginStatus& operator=(const LoginStatus&) = delete;
    LoginStatus(LoginStatus&& rhs);
    LoginStatus& operator=(LoginStatus&& rhs);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisLoginStatus object.
    base::Value::Dict ToValue() const;

    // Whether there's a logged-in user.
    absl::optional<bool> is_logged_in;

    // Whether the screen is locked.
    absl::optional<bool> is_screen_locked;

  };


  // Additional string argument to pass to test.
  absl::optional<std::string> custom_arg;

  // Details on the FTP server used to mock network responses.  Will be set only
  // if test calls ExtensionApiTest::StartFTPServer().
  absl::optional<FtpServer> ftp_server;

  // Details on the test server used to mock network responses.  Will be set only
  // if test calls ExtensionApiTest::StartEmbeddedTestServer().
  absl::optional<TestServer> test_server;

  // file:/// URL for the API test data directory.
  absl::optional<std::string> test_data_directory;

  // The port on which the test WebSocket server is listening.
  absl::optional<int> test_web_socket_port;

  // The port on which the test WebTransport server is listening.
  absl::optional<int> test_web_transport_port;

  // Login status.
  absl::optional<LoginStatus> login_status;

};


base::Value::List Create(const TestConfig& test_config);
}  // namespace Results

}  // namespace GetConfig

namespace NotifyFail {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string message;


 private:
  Params();
};

}  // namespace NotifyFail

namespace NotifyPass {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<std::string> message;


 private:
  Params();
};

}  // namespace NotifyPass

namespace Log {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string message;


 private:
  Params();
};

}  // namespace Log

namespace OpenFileUrl {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string url;


 private:
  Params();
};

}  // namespace OpenFileUrl

namespace PassMessage {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string message;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& response);
}  // namespace Results

}  // namespace PassMessage

namespace SendScriptResult {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  base::Value result;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SendScriptResult

namespace WaitForRoundTrip {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string message;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& message);
}  // namespace Results

}  // namespace WaitForRoundTrip

//
// Events
//

namespace OnMessage {

extern const char kEventName[];  // "test.onMessage"

struct Info {
  Info();
  ~Info();
  Info(const Info&) = delete;
  Info& operator=(const Info&) = delete;
  Info(Info&& rhs);
  Info& operator=(Info&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInfo object.
  base::Value::Dict ToValue() const;

  // Additional information.
  std::string data;

  // True if this was the last message for this test
  bool last_message;

};


base::Value::List Create(const Info& info);
}  // namespace OnMessage

}  // namespace test
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_TEST_H__
