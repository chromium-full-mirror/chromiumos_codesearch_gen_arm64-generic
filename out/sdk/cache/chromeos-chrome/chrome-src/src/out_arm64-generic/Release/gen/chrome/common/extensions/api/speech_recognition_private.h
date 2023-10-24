// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/speech_recognition_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SPEECH_RECOGNITION_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_SPEECH_RECOGNITION_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace speech_recognition_private {

//
// Types
//

// Possible types of speech recognition.
enum  SpeechRecognitionType {
  SPEECH_RECOGNITION_TYPE_NONE = 0,
  SPEECH_RECOGNITION_TYPE_ONDEVICE,
  SPEECH_RECOGNITION_TYPE_NETWORK,
  SPEECH_RECOGNITION_TYPE_LAST = SPEECH_RECOGNITION_TYPE_NETWORK,
};


const char* ToString(SpeechRecognitionType as_enum);
SpeechRecognitionType ParseSpeechRecognitionType(base::StringPiece as_string);
std::u16string GetSpeechRecognitionTypeParseError(base::StringPiece as_string);

struct SpeechRecognitionStopEvent {
  SpeechRecognitionStopEvent();
  ~SpeechRecognitionStopEvent();
  SpeechRecognitionStopEvent(const SpeechRecognitionStopEvent&) = delete;
  SpeechRecognitionStopEvent& operator=(const SpeechRecognitionStopEvent&) = delete;
  SpeechRecognitionStopEvent(SpeechRecognitionStopEvent&& rhs);
  SpeechRecognitionStopEvent& operator=(SpeechRecognitionStopEvent&& rhs);

  // Populates a SpeechRecognitionStopEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SpeechRecognitionStopEvent& out);

  // Populates a SpeechRecognitionStopEvent object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SpeechRecognitionStopEvent& out);

  // Creates a deep copy of SpeechRecognitionStopEvent.
  SpeechRecognitionStopEvent Clone() const;

  // Creates a SpeechRecognitionStopEvent object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SpeechRecognitionStopEvent> FromValueDeprecated(const base::Value& value);

  // Creates a SpeechRecognitionStopEvent object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<SpeechRecognitionStopEvent> FromValue(const base::Value::Dict& value);

  // Creates a SpeechRecognitionStopEvent object from a base::Value, or nullopt
  // on failure.
  static absl::optional<SpeechRecognitionStopEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSpeechRecognitionStopEvent object.
  base::Value::Dict ToValue() const;

  // Optional client ID.
  absl::optional<int> client_id;

};

struct SpeechRecognitionResultEvent {
  SpeechRecognitionResultEvent();
  ~SpeechRecognitionResultEvent();
  SpeechRecognitionResultEvent(const SpeechRecognitionResultEvent&) = delete;
  SpeechRecognitionResultEvent& operator=(const SpeechRecognitionResultEvent&) = delete;
  SpeechRecognitionResultEvent(SpeechRecognitionResultEvent&& rhs);
  SpeechRecognitionResultEvent& operator=(SpeechRecognitionResultEvent&& rhs);

  // Populates a SpeechRecognitionResultEvent object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SpeechRecognitionResultEvent& out);

  // Populates a SpeechRecognitionResultEvent object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SpeechRecognitionResultEvent& out);

  // Creates a deep copy of SpeechRecognitionResultEvent.
  SpeechRecognitionResultEvent Clone() const;

  // Creates a SpeechRecognitionResultEvent object from a base::Value, or NULL
  // on failure.
  static std::unique_ptr<SpeechRecognitionResultEvent> FromValueDeprecated(const base::Value& value);

  // Creates a SpeechRecognitionResultEvent object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<SpeechRecognitionResultEvent> FromValue(const base::Value::Dict& value);

  // Creates a SpeechRecognitionResultEvent object from a base::Value, or
  // nullopt on failure.
  static absl::optional<SpeechRecognitionResultEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSpeechRecognitionResultEvent object.
  base::Value::Dict ToValue() const;

  // Optional client ID.
  absl::optional<int> client_id;

  // The recognized phrase or sentence.
  std::string transcript;

  // Whether the result is a final or an interim result.
  bool is_final;

};

struct SpeechRecognitionErrorEvent {
  SpeechRecognitionErrorEvent();
  ~SpeechRecognitionErrorEvent();
  SpeechRecognitionErrorEvent(const SpeechRecognitionErrorEvent&) = delete;
  SpeechRecognitionErrorEvent& operator=(const SpeechRecognitionErrorEvent&) = delete;
  SpeechRecognitionErrorEvent(SpeechRecognitionErrorEvent&& rhs);
  SpeechRecognitionErrorEvent& operator=(SpeechRecognitionErrorEvent&& rhs);

  // Populates a SpeechRecognitionErrorEvent object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SpeechRecognitionErrorEvent& out);

  // Populates a SpeechRecognitionErrorEvent object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SpeechRecognitionErrorEvent& out);

  // Creates a deep copy of SpeechRecognitionErrorEvent.
  SpeechRecognitionErrorEvent Clone() const;

  // Creates a SpeechRecognitionErrorEvent object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<SpeechRecognitionErrorEvent> FromValueDeprecated(const base::Value& value);

  // Creates a SpeechRecognitionErrorEvent object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<SpeechRecognitionErrorEvent> FromValue(const base::Value::Dict& value);

  // Creates a SpeechRecognitionErrorEvent object from a base::Value, or nullopt
  // on failure.
  static absl::optional<SpeechRecognitionErrorEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSpeechRecognitionErrorEvent object.
  base::Value::Dict ToValue() const;

  // Optional client ID.
  absl::optional<int> client_id;

  // A message describing the error.
  std::string message;

};

struct StartOptions {
  StartOptions();
  ~StartOptions();
  StartOptions(const StartOptions&) = delete;
  StartOptions& operator=(const StartOptions&) = delete;
  StartOptions(StartOptions&& rhs);
  StartOptions& operator=(StartOptions&& rhs);

  // Populates a StartOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StartOptions& out);

  // Populates a StartOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, StartOptions& out);

  // Creates a deep copy of StartOptions.
  StartOptions Clone() const;

  // Creates a StartOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<StartOptions> FromValueDeprecated(const base::Value& value);

  // Creates a StartOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<StartOptions> FromValue(const base::Value::Dict& value);

  // Creates a StartOptions object from a base::Value, or nullopt on failure.
  static absl::optional<StartOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStartOptions object.
  base::Value::Dict ToValue() const;

  // An optional ID to specify the client.
  absl::optional<int> client_id;

  // The locale, in BCP-47 format e.g. "en-US", to use for speech recognition.
  absl::optional<std::string> locale;

  // Whether interim speech results should be returned.
  absl::optional<bool> interim_results;

};

struct StopOptions {
  StopOptions();
  ~StopOptions();
  StopOptions(const StopOptions&) = delete;
  StopOptions& operator=(const StopOptions&) = delete;
  StopOptions(StopOptions&& rhs);
  StopOptions& operator=(StopOptions&& rhs);

  // Populates a StopOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, StopOptions& out);

  // Populates a StopOptions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, StopOptions& out);

  // Creates a deep copy of StopOptions.
  StopOptions Clone() const;

  // Creates a StopOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<StopOptions> FromValueDeprecated(const base::Value& value);

  // Creates a StopOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<StopOptions> FromValue(const base::Value::Dict& value);

  // Creates a StopOptions object from a base::Value, or nullopt on failure.
  static absl::optional<StopOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStopOptions object.
  base::Value::Dict ToValue() const;

  // An optional ID to specify the client. This must match the clientId used when
  // starting speech recognition to work as intended.
  absl::optional<int> client_id;

};


//
// Functions
//

namespace Start {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  StartOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const SpeechRecognitionType& type);
}  // namespace Results

}  // namespace Start

namespace Stop {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  StopOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Stop

//
// Events
//

namespace OnStop {

extern const char kEventName[];  // "speechRecognitionPrivate.onStop"

base::Value::List Create(const SpeechRecognitionStopEvent& event);
}  // namespace OnStop

namespace OnResult {

extern const char kEventName[];  // "speechRecognitionPrivate.onResult"

base::Value::List Create(const SpeechRecognitionResultEvent& event);
}  // namespace OnResult

namespace OnError {

extern const char kEventName[];  // "speechRecognitionPrivate.onError"

base::Value::List Create(const SpeechRecognitionErrorEvent& event);
}  // namespace OnError

}  // namespace speech_recognition_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SPEECH_RECOGNITION_PRIVATE_H__
