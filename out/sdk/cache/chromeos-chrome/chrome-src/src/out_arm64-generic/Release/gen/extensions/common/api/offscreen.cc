// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/offscreen.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/offscreen.h"

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
namespace offscreen {
//
// Types
//

const char* ToString(Reason enum_param) {
  switch (enum_param) {
    case Reason::kTesting:
      return "TESTING";
    case Reason::kAudioPlayback:
      return "AUDIO_PLAYBACK";
    case Reason::kIframeScripting:
      return "IFRAME_SCRIPTING";
    case Reason::kDomScraping:
      return "DOM_SCRAPING";
    case Reason::kBlobs:
      return "BLOBS";
    case Reason::kDomParser:
      return "DOM_PARSER";
    case Reason::kUserMedia:
      return "USER_MEDIA";
    case Reason::kDisplayMedia:
      return "DISPLAY_MEDIA";
    case Reason::kWebRtc:
      return "WEB_RTC";
    case Reason::kClipboard:
      return "CLIPBOARD";
    case Reason::kLocalStorage:
      return "LOCAL_STORAGE";
    case Reason::kWorkers:
      return "WORKERS";
    case Reason::kBatteryStatus:
      return "BATTERY_STATUS";
    case Reason::kMatchMedia:
      return "MATCH_MEDIA";
    case Reason::kGeolocation:
      return "GEOLOCATION";
    case Reason::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Reason ParseReason(base::StringPiece enum_string) {
  if (enum_string == "TESTING")
    return Reason::kTesting;
  if (enum_string == "AUDIO_PLAYBACK")
    return Reason::kAudioPlayback;
  if (enum_string == "IFRAME_SCRIPTING")
    return Reason::kIframeScripting;
  if (enum_string == "DOM_SCRAPING")
    return Reason::kDomScraping;
  if (enum_string == "BLOBS")
    return Reason::kBlobs;
  if (enum_string == "DOM_PARSER")
    return Reason::kDomParser;
  if (enum_string == "USER_MEDIA")
    return Reason::kUserMedia;
  if (enum_string == "DISPLAY_MEDIA")
    return Reason::kDisplayMedia;
  if (enum_string == "WEB_RTC")
    return Reason::kWebRtc;
  if (enum_string == "CLIPBOARD")
    return Reason::kClipboard;
  if (enum_string == "LOCAL_STORAGE")
    return Reason::kLocalStorage;
  if (enum_string == "WORKERS")
    return Reason::kWorkers;
  if (enum_string == "BATTERY_STATUS")
    return Reason::kBatteryStatus;
  if (enum_string == "MATCH_MEDIA")
    return Reason::kMatchMedia;
  if (enum_string == "GEOLOCATION")
    return Reason::kGeolocation;
  return Reason::kNone;
}

std::u16string GetReasonParseError(base::StringPiece enum_string) {
  return u"expected \"TESTING\" or \"AUDIO_PLAYBACK\" or \"IFRAME_SCRIPTING\" or \"DOM_SCRAPING\" or \"BLOBS\" or \"DOM_PARSER\" or \"USER_MEDIA\" or \"DISPLAY_MEDIA\" or \"WEB_RTC\" or \"CLIPBOARD\" or \"LOCAL_STORAGE\" or \"WORKERS\" or \"BATTERY_STATUS\" or \"MATCH_MEDIA\" or \"GEOLOCATION\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CreateParameters::CreateParameters()
 {}

CreateParameters::~CreateParameters() = default;
CreateParameters::CreateParameters(CreateParameters&& rhs) = default;
CreateParameters& CreateParameters::operator=(CreateParameters&& rhs) = default;
CreateParameters CreateParameters::Clone() const {
  CreateParameters out;
  out.reasons = reasons;
  out.url = url;
  out.justification = justification;
  return out;
}

// static
bool CreateParameters::Populate(
    const base::Value::Dict& dict, CreateParameters& out) {
  const base::Value* reasons_value = dict.Find("reasons");
  if (!reasons_value) {
    return false;
  }
  {
    if (!(*reasons_value).is_list()) {
      return false;
    }
    else {
      for (const auto& it : ((*reasons_value)).GetList()) {
        Reason tmp;
        const std::string* reason_as_string = (it).GetIfString();
        if (!reason_as_string) {
          return false;
        }
        tmp = ParseReason(*reason_as_string);
        if (tmp == Reason()) {
          return false;
        }
        out.reasons.push_back(tmp);
      }
    }
  }

  const base::Value* url_value = dict.Find("url");
  if (!url_value) {
    return false;
  }
  {
    auto* temp = (*url_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.url = *temp;
  }

  const base::Value* justification_value = dict.Find("justification");
  if (!justification_value) {
    return false;
  }
  {
    auto* temp = (*justification_value).GetIfString();
    if (!temp) {
      return false;
    }
    out.justification = *temp;
  }

  return true;
}

// static
bool CreateParameters::Populate(
    const base::Value& value, CreateParameters& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CreateParameters> CreateParameters::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CreateParameters>();
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
absl::optional<CreateParameters> CreateParameters::FromValue(const base::Value::Dict& value) {
  CreateParameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CreateParameters> CreateParameters::FromValue(const base::Value& value) {
  CreateParameters out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CreateParameters::ToValue() const {
  base::Value::Dict to_value_result;

  {
    std::vector<std::string> reasons_list;
    for (const auto& it : (this->reasons)) {
      reasons_list.emplace_back(offscreen::ToString(it));
    }
    to_value_result.Set("reasons", json_schema_compiler::util::CreateValueFromArray(reasons_list));
  }

  to_value_result.Set("url", this->url);

  to_value_result.Set("justification", this->justification);


  return to_value_result;
}



//
// Functions
//

namespace CreateDocument {

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
    const base::Value& parameters_value = args[0];
    {
      if (!parameters_value.is_dict()) {
        return absl::nullopt;
      }
      if (!CreateParameters::Populate(parameters_value.GetDict(), params.parameters)) {
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
}  // namespace CreateDocument

namespace CloseDocument {

base::Value::List Results::Create() {
  base::Value::List create_results;

  return create_results;
}
}  // namespace CloseDocument

namespace HasDocument {

base::Value::List Results::Create(bool result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(result);

  return create_results;
}
}  // namespace HasDocument

}  // namespace offscreen
}  // namespace api
}  // namespace extensions

