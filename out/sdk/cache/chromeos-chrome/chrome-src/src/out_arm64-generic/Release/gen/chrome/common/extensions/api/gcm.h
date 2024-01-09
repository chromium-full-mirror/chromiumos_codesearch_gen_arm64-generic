// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/gcm.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_GCM_H__
#define CHROME_COMMON_EXTENSIONS_API_GCM_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace gcm {

//
// Properties
//

// The maximum size (in bytes) of all key/value pairs in a message.
extern const int MAX_MESSAGE_SIZE;

//
// Functions
//

namespace Register {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // A list of server IDs that are allowed to send messages to the application. It
  // should contain at least one and no more than 100 sender IDs.
  std::vector<std::string> sender_ids;


 private:
  Params();
};

namespace Results {

// A registration ID assigned to the application by the FCM.
base::Value::List Create(const std::string& registration_id);
}  // namespace Results

}  // namespace Register

namespace Unregister {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Unregister

namespace Send {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // A message to send to the other party via FCM.
  struct Message {
    Message();
    ~Message();
    Message(const Message&) = delete;
    Message& operator=(const Message&) = delete;
    Message(Message&& rhs) noexcept;
    Message& operator=(Message&& rhs) noexcept;

    // Populates a Message object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Message& out);

    // Populates a Message object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Message& out);

    // Creates a deep copy of Message.
    Message Clone() const;

    // Creates a Message object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Message> FromValue(const base::Value::Dict& value);

    // Creates a Message object from a base::Value, or nullopt on failure.
    static std::optional<Message> FromValue(const base::Value& value);

    // Message data to send to the server. Case-insensitive <code>goog.</code> and
    // <code>google</code>, as well as case-sensitive <code>collapse_key</code> are
    // disallowed as key prefixes. Sum of all key/value pairs should not exceed
    // $(ref:gcm.MAX_MESSAGE_SIZE).
    struct Data {
      Data();
      ~Data();
      Data(const Data&) = delete;
      Data& operator=(const Data&) = delete;
      Data(Data&& rhs) noexcept;
      Data& operator=(Data&& rhs) noexcept;

      // Populates a Data object from a base::Value& instance. Returns whether |out|
      // was successfully populated.
      static bool Populate(const base::Value& value, Data& out);

      // Populates a Data object from a Dict& instance. Returns whether |out| was
      // successfully populated.
      static bool Populate(const base::Value::Dict& value, Data& out);

      // Creates a deep copy of Data.
      Data Clone() const;

      // Creates a Data object from a base::Value::Dict, or nullopt on failure.
      static std::optional<Data> FromValue(const base::Value::Dict& value);

      // Creates a Data object from a base::Value, or nullopt on failure.
      static std::optional<Data> FromValue(const base::Value& value);

      std::map<std::string, std::string> additional_properties;
    };


    // The ID of the server to send the message to as assigned by <a
    // href='https://console.cloud.google.com/apis/dashboard'>Google API
    // Console</a>.
    std::string destination_id;

    // The ID of the message. It must be unique for each message in scope of the
    // applications. See the <a
    // href='https://firebase.google.com/docs/cloud-messaging/js/client'>Cloud
    // Messaging documentation</a> for advice for picking and handling an ID.
    std::string message_id;

    // Time-to-live of the message in seconds. If it is not possible to send the
    // message within that time, an onSendError event will be raised. A time-to-live
    // of 0 indicates that the message should be sent immediately or fail if it's
    // not possible. The default value of time-to-live is 86,400 seconds (1 day) and
    // the maximum value is 2,419,200 seconds (28 days).
    std::optional<int> time_to_live;

    // Message data to send to the server. Case-insensitive <code>goog.</code> and
    // <code>google</code>, as well as case-sensitive <code>collapse_key</code> are
    // disallowed as key prefixes. Sum of all key/value pairs should not exceed
    // $(ref:gcm.MAX_MESSAGE_SIZE).
    Data data;

  };


  // A message to send to the other party via FCM.
  Message message;


 private:
  Params();
};

namespace Results {

// The ID of the message that the callback was issued for.
base::Value::List Create(const std::string& message_id);
}  // namespace Results

}  // namespace Send

//
// Events
//

namespace OnMessage {

extern const char kEventName[];  // "gcm.onMessage"

// A message received from another party via FCM.
struct Message {
  Message();
  ~Message();
  Message(const Message&) = delete;
  Message& operator=(const Message&) = delete;
  Message(Message&& rhs) noexcept;
  Message& operator=(Message&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMessage object.
  base::Value::Dict ToValue() const;

  // The message data.
  struct Data {
    Data();
    ~Data();
    Data(const Data&) = delete;
    Data& operator=(const Data&) = delete;
    Data(Data&& rhs) noexcept;
    Data& operator=(Data&& rhs) noexcept;

    // Returns a new base::Value::Dict representing the serialized form of
    // thisData object.
    base::Value::Dict ToValue() const;

    std::map<std::string, std::string> additional_properties;
  };


  // The message data.
  Data data;

  // The sender who issued the message.
  std::optional<std::string> from;

  // The collapse key of a message. See the <a
  // href='https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_and_non-collapsible_messages'>Non-collapsible and collapsible messages</a> for details.
  std::optional<std::string> collapse_key;

};


// A message received from another party via FCM.
base::Value::List Create(const Message& message);
}  // namespace OnMessage

namespace OnMessagesDeleted {

extern const char kEventName[];  // "gcm.onMessagesDeleted"

base::Value::List Create();
}  // namespace OnMessagesDeleted

namespace OnSendError {

extern const char kEventName[];  // "gcm.onSendError"

// An error that occured while trying to send the message either in Chrome or on
// the FCM server. Application can retry sending the message with a reasonable
// backoff and possibly longer time-to-live.
struct Error {
  Error();
  ~Error();
  Error(const Error&) = delete;
  Error& operator=(const Error&) = delete;
  Error(Error&& rhs) noexcept;
  Error& operator=(Error&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisError object.
  base::Value::Dict ToValue() const;

  // Additional details related to the error, when available.
  struct Details {
    Details();
    ~Details();
    Details(const Details&) = delete;
    Details& operator=(const Details&) = delete;
    Details(Details&& rhs) noexcept;
    Details& operator=(Details&& rhs) noexcept;

    // Returns a new base::Value::Dict representing the serialized form of
    // thisDetails object.
    base::Value::Dict ToValue() const;

    std::map<std::string, std::string> additional_properties;
  };


  // The error message describing the problem.
  std::string error_message;

  // The ID of the message with this error, if error is related to a specific
  // message.
  std::optional<std::string> message_id;

  // Additional details related to the error, when available.
  Details details;

};


// An error that occured while trying to send the message either in Chrome or on
// the FCM server. Application can retry sending the message with a reasonable
// backoff and possibly longer time-to-live.
base::Value::List Create(const Error& error);
}  // namespace OnSendError

}  // namespace gcm
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_GCM_H__
