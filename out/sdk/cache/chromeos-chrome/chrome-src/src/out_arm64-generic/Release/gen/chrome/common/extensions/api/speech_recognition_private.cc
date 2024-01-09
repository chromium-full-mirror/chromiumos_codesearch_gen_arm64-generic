// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/speech_recognition_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/speech_recognition_private.h"

#include <memory>
#include <optional>
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
    case SpeechRecognitionType::kOnDevice:
      return "onDevice";
    case SpeechRecognitionType::kNetwork:
      return "network";
    case SpeechRecognitionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SpeechRecognitionType ParseSpeechRecognitionType(base::StringPiece enum_string) {
  if (enum_string == "onDevice")
    return SpeechRecognitionType::kOnDevice;
  if (enum_string == "network")
    return SpeechRecognitionType::kNetwork;
  return SpeechRecognitionType::kNone;
}

std::u16string GetSpeechRecognitionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"onDevice\" or \"network\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


SpeechRecognitionStopEvent::SpeechRecognitionStopEvent()
 {}

SpeechRecognitionStopEvent::~SpeechRecognitionStopEvent() = default;
SpeechRecognitionStopEvent::SpeechRecognitionStopEvent(SpeechRecognitionStopEvent&& rhs) noexcept = default;
SpeechRecognitionStopEvent& SpeechRecognitionStopEvent::operator=(SpeechRecognitionStopEvent&& rhs) noexcept = default;
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
        out.client_id = std::nullopt;
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
std::optional<SpeechRecognitionStopEvent> SpeechRecognitionStopEvent::FromValue(const base::Value::Dict& value) {
  SpeechRecognitionStopEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SpeechRecognitionStopEvent> SpeechRecognitionStopEvent::FromValue(const base::Value& value) {
  SpeechRecognitionStopEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
SpeechRecognitionResultEvent::SpeechRecognitionResultEvent(SpeechRecognitionResultEvent&& rhs) noexcept = default;
SpeechRecognitionResultEvent& SpeechRecognitionResultEvent::operator=(SpeechRecognitionResultEvent&& rhs) noexcept = default;
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
        out.client_id = std::nullopt;
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
std::optional<SpeechRecognitionResultEvent> SpeechRecognitionResultEvent::FromValue(const base::Value::Dict& value) {
  SpeechRecognitionResultEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SpeechRecognitionResultEvent> SpeechRecognitionResultEvent::FromValue(const base::Value& value) {
  SpeechRecognitionResultEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
SpeechRecognitionErrorEvent::SpeechRecognitionErrorEvent(SpeechRecognitionErrorEvent&& rhs) noexcept = default;
SpeechRecognitionErrorEvent& SpeechRecognitionErrorEvent::operator=(SpeechRecognitionErrorEvent&& rhs) noexcept = default;
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
        out.client_id = std::nullopt;
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
std::optional<SpeechRecognitionErrorEvent> SpeechRecognitionErrorEvent::FromValue(const base::Value::Dict& value) {
  SpeechRecognitionErrorEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SpeechRecognitionErrorEvent> SpeechRecognitionErrorEvent::FromValue(const base::Value& value) {
  SpeechRecognitionErrorEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
StartOptions::StartOptions(StartOptions&& rhs) noexcept = default;
StartOptions& StartOptions::operator=(StartOptions&& rhs) noexcept = default;
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
        out.client_id = std::nullopt;
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
        out.locale = std::nullopt;
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
        out.interim_results = std::nullopt;
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
std::optional<StartOptions> StartOptions::FromValue(const base::Value::Dict& value) {
  StartOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StartOptions> StartOptions::FromValue(const base::Value& value) {
  StartOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
StopOptions::StopOptions(StopOptions&& rhs) noexcept = default;
StopOptions& StopOptions::operator=(StopOptions&& rhs) noexcept = default;
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
        out.client_id = std::nullopt;
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
std::optional<StopOptions> StopOptions::FromValue(const base::Value::Dict& value) {
  StopOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<StopOptions> StopOptions::FromValue(const base::Value& value) {
  StopOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!StartOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
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
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 1) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return std::nullopt;
      }
      if (!StopOptions::Populate(options_value.GetDict(), params.options)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
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

