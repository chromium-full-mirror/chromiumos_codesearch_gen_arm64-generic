// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/speech_recognition_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/speech_recognition_private.h"

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
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace speech_recognition_private {
//
// Types
//

const char* ToString(SpeechRecognitionType enum_param) {
  switch (enum_param) {
    case SPEECH_RECOGNITION_TYPE_ONDEVICE:
      return "onDevice";
    case SPEECH_RECOGNITION_TYPE_NETWORK:
      return "network";
    case SPEECH_RECOGNITION_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SpeechRecognitionType ParseSpeechRecognitionType(base::StringPiece enum_string) {
  if (enum_string == "onDevice")
    return SPEECH_RECOGNITION_TYPE_ONDEVICE;
  if (enum_string == "network")
    return SPEECH_RECOGNITION_TYPE_NETWORK;
  return SPEECH_RECOGNITION_TYPE_NONE;
}

std::u16string GetSpeechRecognitionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"onDevice\" or \"network\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SpeechRecognitionStopEvent::SpeechRecognitionStopEvent()
 {}

SpeechRecognitionStopEvent::~SpeechRecognitionStopEvent() = default;
SpeechRecognitionStopEvent::SpeechRecognitionStopEvent(SpeechRecognitionStopEvent&& rhs) = default;
SpeechRecognitionStopEvent& SpeechRecognitionStopEvent::operator=(SpeechRecognitionStopEvent&& rhs) = default;
SpeechRecognitionStopEvent SpeechRecognitionStopEvent::Clone() const {
  SpeechRecognitionStopEvent out;
  out.client_id = client_id;
  return out;
}

// static
bool SpeechRecognitionStopEvent::Populate(
    const base::Value::Dict& dict, SpeechRecognitionStopEvent& out) {
  const base::Value* client_id_value = dict.Find("clientId");
  if (client_id_value) {
    {
      auto temp = (*client_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.client_id = absl::nullopt;
        return false;
      }
      out.client_id = *temp;
    }
  }

  return true;
}

// static
bool SpeechRecognitionStopEvent::Populate(
    const base::Value& value, SpeechRecognitionStopEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SpeechRecognitionStopEvent> SpeechRecognitionStopEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SpeechRecognitionStopEvent>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<SpeechRecognitionStopEvent> SpeechRecognitionStopEvent::FromValue(const base::Value::Dict& value) {
  SpeechRecognitionStopEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SpeechRecognitionStopEvent> SpeechRecognitionStopEvent::FromValue(const base::Value& value) {
  SpeechRecognitionStopEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SpeechRecognitionStopEvent::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->client_id) {
    to_value_result.Set("clientId", *this->client_id);

  }

  return to_value_result;
}


SpeechRecognitionResultEvent::SpeechRecognitionResultEvent()
: is_final(false) {}

SpeechRecognitionResultEvent::~SpeechRecognitionResultEvent() = default;
SpeechRecognitionResultEvent::SpeechRecognitionResultEvent(SpeechRecognitionResultEvent&& rhs) = default;
SpeechRecognitionResultEvent& SpeechRecognitionResultEvent::operator=(SpeechRecognitionResultEvent&& rhs) = default;
SpeechRecognitionResultEvent SpeechRecognitionResultEvent::Clone() const {
  SpeechRecognitionResultEvent out;
  out.client_id = client_id;
  out.transcript = transcript;
  out.is_final = is_final;
  return out;
}

// static
bool SpeechRecognitionResultEvent::Populate(
    const base::Value::Dict& dict, SpeechRecognitionResultEvent& out) {
  const base::Value* client_id_value = dict.Find("clientId");
  if (client_id_value) {
    {
      auto temp = (*client_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.client_id = absl::nullopt;
        return false;
      }
      out.client_id = *temp;
    }
  }

  const base::Value* transcript_value = dict.Find("transcript");
  if (!transcript_value) {
    return false;
  }
  {
    auto* temp = (*transcript_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.transcript = *temp;
  }

  const base::Value* is_final_value = dict.Find("isFinal");
  if (!is_final_value) {
    return false;
  }
  {
    auto temp = (*is_final_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.is_final = *temp;
  }

  return true;
}

// static
bool SpeechRecognitionResultEvent::Populate(
    const base::Value& value, SpeechRecognitionResultEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SpeechRecognitionResultEvent> SpeechRecognitionResultEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SpeechRecognitionResultEvent>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<SpeechRecognitionResultEvent> SpeechRecognitionResultEvent::FromValue(const base::Value::Dict& value) {
  SpeechRecognitionResultEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SpeechRecognitionResultEvent> SpeechRecognitionResultEvent::FromValue(const base::Value& value) {
  SpeechRecognitionResultEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SpeechRecognitionResultEvent::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->client_id) {
    to_value_result.Set("clientId", *this->client_id);

  }
  to_value_result.Set("transcript", this->transcript);

  to_value_result.Set("isFinal", this->is_final);


  return to_value_result;
}


SpeechRecognitionErrorEvent::SpeechRecognitionErrorEvent()
 {}

SpeechRecognitionErrorEvent::~SpeechRecognitionErrorEvent() = default;
SpeechRecognitionErrorEvent::SpeechRecognitionErrorEvent(SpeechRecognitionErrorEvent&& rhs) = default;
SpeechRecognitionErrorEvent& SpeechRecognitionErrorEvent::operator=(SpeechRecognitionErrorEvent&& rhs) = default;
SpeechRecognitionErrorEvent SpeechRecognitionErrorEvent::Clone() const {
  SpeechRecognitionErrorEvent out;
  out.client_id = client_id;
  out.message = message;
  return out;
}

// static
bool SpeechRecognitionErrorEvent::Populate(
    const base::Value::Dict& dict, SpeechRecognitionErrorEvent& out) {
  const base::Value* client_id_value = dict.Find("clientId");
  if (client_id_value) {
    {
      auto temp = (*client_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.client_id = absl::nullopt;
        return false;
      }
      out.client_id = *temp;
    }
  }

  const base::Value* message_value = dict.Find("message");
  if (!message_value) {
    return false;
  }
  {
    auto* temp = (*message_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.message = *temp;
  }

  return true;
}

// static
bool SpeechRecognitionErrorEvent::Populate(
    const base::Value& value, SpeechRecognitionErrorEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<SpeechRecognitionErrorEvent> SpeechRecognitionErrorEvent::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<SpeechRecognitionErrorEvent>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<SpeechRecognitionErrorEvent> SpeechRecognitionErrorEvent::FromValue(const base::Value::Dict& value) {
  SpeechRecognitionErrorEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<SpeechRecognitionErrorEvent> SpeechRecognitionErrorEvent::FromValue(const base::Value& value) {
  SpeechRecognitionErrorEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict SpeechRecognitionErrorEvent::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->client_id) {
    to_value_result.Set("clientId", *this->client_id);

  }
  to_value_result.Set("message", this->message);


  return to_value_result;
}


StartOptions::StartOptions()
 {}

StartOptions::~StartOptions() = default;
StartOptions::StartOptions(StartOptions&& rhs) = default;
StartOptions& StartOptions::operator=(StartOptions&& rhs) = default;
StartOptions StartOptions::Clone() const {
  StartOptions out;
  out.client_id = client_id;
  out.locale = locale;
  out.interim_results = interim_results;
  return out;
}

// static
bool StartOptions::Populate(
    const base::Value::Dict& dict, StartOptions& out) {
  const base::Value* client_id_value = dict.Find("clientId");
  if (client_id_value) {
    {
      auto temp = (*client_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.client_id = absl::nullopt;
        return false;
      }
      out.client_id = *temp;
    }
  }

  const base::Value* locale_value = dict.Find("locale");
  if (locale_value) {
    {
      auto* temp = (*locale_value).GetIfString();
      if (!temp) {
        out.locale = absl::nullopt;
        return false;
      }
      out.locale = *temp;
    }
  }

  const base::Value* interim_results_value = dict.Find("interimResults");
  if (interim_results_value) {
    {
      auto temp = (*interim_results_value).GetIfBool();
      if (!temp.has_value()) {
        out.interim_results = absl::nullopt;
        return false;
      }
      out.interim_results = *temp;
    }
  }

  return true;
}

// static
bool StartOptions::Populate(
    const base::Value& value, StartOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<StartOptions> StartOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StartOptions>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<StartOptions> StartOptions::FromValue(const base::Value::Dict& value) {
  StartOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StartOptions> StartOptions::FromValue(const base::Value& value) {
  StartOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StartOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->client_id) {
    to_value_result.Set("clientId", *this->client_id);

  }
  if (this->locale) {
    to_value_result.Set("locale", *this->locale);

  }
  if (this->interim_results) {
    to_value_result.Set("interimResults", *this->interim_results);

  }

  return to_value_result;
}


StopOptions::StopOptions()
 {}

StopOptions::~StopOptions() = default;
StopOptions::StopOptions(StopOptions&& rhs) = default;
StopOptions& StopOptions::operator=(StopOptions&& rhs) = default;
StopOptions StopOptions::Clone() const {
  StopOptions out;
  out.client_id = client_id;
  return out;
}

// static
bool StopOptions::Populate(
    const base::Value::Dict& dict, StopOptions& out) {
  const base::Value* client_id_value = dict.Find("clientId");
  if (client_id_value) {
    {
      auto temp = (*client_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.client_id = absl::nullopt;
        return false;
      }
      out.client_id = *temp;
    }
  }

  return true;
}

// static
bool StopOptions::Populate(
    const base::Value& value, StopOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<StopOptions> StopOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<StopOptions>();
  if (!value.is_dict()) {
    return nullptr;
  }
  bool result = Populate(value.GetDict(), *out);
  if (!result) {
    return nullptr;
  }
  return out;
}

// static
absl::optional<StopOptions> StopOptions::FromValue(const base::Value::Dict& value) {
  StopOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<StopOptions> StopOptions::FromValue(const base::Value& value) {
  StopOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict StopOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->client_id) {
    to_value_result.Set("clientId", *this->client_id);

  }

  return to_value_result;
}



//
// Functions
//

namespace Start {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!StartOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const SpeechRecognitionType& type) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(speech_recognition_private::ToString(type));

  return create_results;
}
}  // namespace Start

namespace Stop {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      if (!StopOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
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
}  // namespace Stop

//
// Events
//

namespace OnStop {

const char kEventName[] = "speechRecognitionPrivate.onStop";

base::Value::List Create(const SpeechRecognitionStopEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnStop

namespace OnResult {

const char kEventName[] = "speechRecognitionPrivate.onResult";

base::Value::List Create(const SpeechRecognitionResultEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnResult

namespace OnError {

const char kEventName[] = "speechRecognitionPrivate.onError";

base::Value::List Create(const SpeechRecognitionErrorEvent& event) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((event).ToValue());

  return create_results;
}

}  // namespace OnError

}  // namespace speech_recognition_private
}  // namespace api
}  // namespace extensions

