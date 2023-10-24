// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/tab_capture.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/tab_capture.h"

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
namespace tab_capture {
//
// Types
//

const char* ToString(TabCaptureState enum_param) {
  switch (enum_param) {
    case TAB_CAPTURE_STATE_PENDING:
      return "pending";
    case TAB_CAPTURE_STATE_ACTIVE:
      return "active";
    case TAB_CAPTURE_STATE_STOPPED:
      return "stopped";
    case TAB_CAPTURE_STATE_ERROR:
      return "error";
    case TAB_CAPTURE_STATE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

TabCaptureState ParseTabCaptureState(base::StringPiece enum_string) {
  if (enum_string == "pending")
    return TAB_CAPTURE_STATE_PENDING;
  if (enum_string == "active")
    return TAB_CAPTURE_STATE_ACTIVE;
  if (enum_string == "stopped")
    return TAB_CAPTURE_STATE_STOPPED;
  if (enum_string == "error")
    return TAB_CAPTURE_STATE_ERROR;
  return TAB_CAPTURE_STATE_NONE;
}

std::u16string GetTabCaptureStateParseError(base::StringPiece enum_string) {
  return u"expected \"pending\" or \"active\" or \"stopped\" or \"error\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CaptureInfo::CaptureInfo()
: tab_id(0),
status(),
fullscreen(false) {}

CaptureInfo::~CaptureInfo() = default;
CaptureInfo::CaptureInfo(CaptureInfo&& rhs) = default;
CaptureInfo& CaptureInfo::operator=(CaptureInfo&& rhs) = default;
CaptureInfo CaptureInfo::Clone() const {
  CaptureInfo out;
  out.tab_id = tab_id;
  out.status = status;
  out.fullscreen = fullscreen;
  return out;
}

// static
bool CaptureInfo::Populate(
    const base::Value::Dict& dict, CaptureInfo& out) {
  const base::Value* tab_id_value = dict.Find("tabId");
  if (!tab_id_value) {
    return false;
  }
  {
    auto temp = (*tab_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.tab_id = *temp;
  }

  const base::Value* status_value = dict.Find("status");
  if (!status_value) {
    return false;
  }
  {
    const std::string* tab_capture_state_as_string = (*status_value).GetIfString();
    if (!tab_capture_state_as_string) {
      return false;
    }
    out.status = ParseTabCaptureState(*tab_capture_state_as_string);
    if (out.status == TabCaptureState()) {
      return false;
    }
  }

  const base::Value* fullscreen_value = dict.Find("fullscreen");
  if (!fullscreen_value) {
    return false;
  }
  {
    auto temp = (*fullscreen_value).GetIfBool();
    if (!temp.has_value()) {
      return false;
    }
    out.fullscreen = *temp;
  }

  return true;
}

// static
bool CaptureInfo::Populate(
    const base::Value& value, CaptureInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CaptureInfo> CaptureInfo::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CaptureInfo>();
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
absl::optional<CaptureInfo> CaptureInfo::FromValue(const base::Value::Dict& value) {
  CaptureInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CaptureInfo> CaptureInfo::FromValue(const base::Value& value) {
  CaptureInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CaptureInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("tabId", this->tab_id);

  to_value_result.Set("status", tab_capture::ToString(this->status));

  to_value_result.Set("fullscreen", this->fullscreen);


  return to_value_result;
}


MediaStreamConstraint::Mandatory::Mandatory()
 {}

MediaStreamConstraint::Mandatory::~Mandatory() = default;
MediaStreamConstraint::Mandatory::Mandatory(Mandatory&& rhs) = default;
MediaStreamConstraint::Mandatory& MediaStreamConstraint::Mandatory::operator=(Mandatory&& rhs) = default;
MediaStreamConstraint::Mandatory MediaStreamConstraint::Mandatory::Clone() const {
  Mandatory out;
  return out;
}

// static
bool MediaStreamConstraint::Mandatory::Populate(
    const base::Value::Dict& dict, Mandatory& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool MediaStreamConstraint::Mandatory::Populate(
    const base::Value& value, Mandatory& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<MediaStreamConstraint::Mandatory> MediaStreamConstraint::Mandatory::FromValue(const base::Value::Dict& value) {
  Mandatory out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MediaStreamConstraint::Mandatory> MediaStreamConstraint::Mandatory::FromValue(const base::Value& value) {
  Mandatory out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MediaStreamConstraint::Mandatory::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


MediaStreamConstraint::Optional::Optional()
 {}

MediaStreamConstraint::Optional::~Optional() = default;
MediaStreamConstraint::Optional::Optional(Optional&& rhs) = default;
MediaStreamConstraint::Optional& MediaStreamConstraint::Optional::operator=(Optional&& rhs) = default;
MediaStreamConstraint::Optional MediaStreamConstraint::Optional::Clone() const {
  Optional out;
  return out;
}

// static
bool MediaStreamConstraint::Optional::Populate(
    const base::Value::Dict& dict, Optional& out) {
  out.additional_properties.Merge(dict.Clone());
  return true;
}

// static
bool MediaStreamConstraint::Optional::Populate(
    const base::Value& value, Optional& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<MediaStreamConstraint::Optional> MediaStreamConstraint::Optional::FromValue(const base::Value::Dict& value) {
  Optional out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MediaStreamConstraint::Optional> MediaStreamConstraint::Optional::FromValue(const base::Value& value) {
  Optional out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MediaStreamConstraint::Optional::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}



MediaStreamConstraint::MediaStreamConstraint()
 {}

MediaStreamConstraint::~MediaStreamConstraint() = default;
MediaStreamConstraint::MediaStreamConstraint(MediaStreamConstraint&& rhs) = default;
MediaStreamConstraint& MediaStreamConstraint::operator=(MediaStreamConstraint&& rhs) = default;
MediaStreamConstraint MediaStreamConstraint::Clone() const {
  MediaStreamConstraint out;
  out.mandatory = mandatory.Clone();
  if (optional) {
    out.optional = optional->Clone();
  }
  return out;
}

// static
bool MediaStreamConstraint::Populate(
    const base::Value::Dict& dict, MediaStreamConstraint& out) {
  const base::Value* mandatory_value = dict.Find("mandatory");
  if (!mandatory_value) {
    return false;
  }
  {
    if (!(*mandatory_value).is_dict()) {
      return false;
    }
    if (!Mandatory::Populate((*mandatory_value).GetDict(), out.mandatory)) {
      return false;
    }
  }

  const base::Value* optional_value = dict.Find("optional");
  if (optional_value) {
    {
      if (!(*optional_value).is_dict()) {
        return false;
      }
      else {
        Optional temp;
        if (!Optional::Populate((*optional_value).GetDict(), temp))
          return false;
        out.optional = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool MediaStreamConstraint::Populate(
    const base::Value& value, MediaStreamConstraint& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<MediaStreamConstraint> MediaStreamConstraint::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<MediaStreamConstraint>();
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
absl::optional<MediaStreamConstraint> MediaStreamConstraint::FromValue(const base::Value::Dict& value) {
  MediaStreamConstraint out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<MediaStreamConstraint> MediaStreamConstraint::FromValue(const base::Value& value) {
  MediaStreamConstraint out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict MediaStreamConstraint::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("mandatory", (this->mandatory).ToValue());

  if (this->optional) {
    to_value_result.Set("optional", (this->optional)->ToValue());

  }

  return to_value_result;
}


CaptureOptions::CaptureOptions()
 {}

CaptureOptions::~CaptureOptions() = default;
CaptureOptions::CaptureOptions(CaptureOptions&& rhs) = default;
CaptureOptions& CaptureOptions::operator=(CaptureOptions&& rhs) = default;
CaptureOptions CaptureOptions::Clone() const {
  CaptureOptions out;
  out.audio = audio;
  out.video = video;
  if (audio_constraints) {
    out.audio_constraints = audio_constraints->Clone();
  }
  if (video_constraints) {
    out.video_constraints = video_constraints->Clone();
  }
  out.presentation_id = presentation_id;
  return out;
}

// static
bool CaptureOptions::Populate(
    const base::Value::Dict& dict, CaptureOptions& out) {
  const base::Value* audio_value = dict.Find("audio");
  if (audio_value) {
    {
      auto temp = (*audio_value).GetIfBool();
      if (!temp.has_value()) {
        out.audio = absl::nullopt;
        return false;
      }
      out.audio = *temp;
    }
  }

  const base::Value* video_value = dict.Find("video");
  if (video_value) {
    {
      auto temp = (*video_value).GetIfBool();
      if (!temp.has_value()) {
        out.video = absl::nullopt;
        return false;
      }
      out.video = *temp;
    }
  }

  const base::Value* audio_constraints_value = dict.Find("audioConstraints");
  if (audio_constraints_value) {
    {
      if (!(*audio_constraints_value).is_dict()) {
        return false;
      }
      else {
        MediaStreamConstraint temp;
        if (!MediaStreamConstraint::Populate((*audio_constraints_value).GetDict(), temp))
          return false;
        out.audio_constraints = std::move(temp);
      }
    }
  }

  const base::Value* video_constraints_value = dict.Find("videoConstraints");
  if (video_constraints_value) {
    {
      if (!(*video_constraints_value).is_dict()) {
        return false;
      }
      else {
        MediaStreamConstraint temp;
        if (!MediaStreamConstraint::Populate((*video_constraints_value).GetDict(), temp))
          return false;
        out.video_constraints = std::move(temp);
      }
    }
  }

  const base::Value* presentation_id_value = dict.Find("presentationId");
  if (presentation_id_value) {
    {
      auto* temp = (*presentation_id_value).GetIfString();
      if (!temp) {
        out.presentation_id = absl::nullopt;
        return false;
      }
      out.presentation_id = *temp;
    }
  }

  return true;
}

// static
bool CaptureOptions::Populate(
    const base::Value& value, CaptureOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<CaptureOptions> CaptureOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<CaptureOptions>();
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
absl::optional<CaptureOptions> CaptureOptions::FromValue(const base::Value::Dict& value) {
  CaptureOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<CaptureOptions> CaptureOptions::FromValue(const base::Value& value) {
  CaptureOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict CaptureOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->audio) {
    to_value_result.Set("audio", *this->audio);

  }
  if (this->video) {
    to_value_result.Set("video", *this->video);

  }
  if (this->audio_constraints) {
    to_value_result.Set("audioConstraints", (this->audio_constraints)->ToValue());

  }
  if (this->video_constraints) {
    to_value_result.Set("videoConstraints", (this->video_constraints)->ToValue());

  }
  if (this->presentation_id) {
    to_value_result.Set("presentationId", *this->presentation_id);

  }

  return to_value_result;
}


GetMediaStreamOptions::GetMediaStreamOptions()
 {}

GetMediaStreamOptions::~GetMediaStreamOptions() = default;
GetMediaStreamOptions::GetMediaStreamOptions(GetMediaStreamOptions&& rhs) = default;
GetMediaStreamOptions& GetMediaStreamOptions::operator=(GetMediaStreamOptions&& rhs) = default;
GetMediaStreamOptions GetMediaStreamOptions::Clone() const {
  GetMediaStreamOptions out;
  out.consumer_tab_id = consumer_tab_id;
  out.target_tab_id = target_tab_id;
  return out;
}

// static
bool GetMediaStreamOptions::Populate(
    const base::Value::Dict& dict, GetMediaStreamOptions& out) {
  const base::Value* consumer_tab_id_value = dict.Find("consumerTabId");
  if (consumer_tab_id_value) {
    {
      auto temp = (*consumer_tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.consumer_tab_id = absl::nullopt;
        return false;
      }
      out.consumer_tab_id = *temp;
    }
  }

  const base::Value* target_tab_id_value = dict.Find("targetTabId");
  if (target_tab_id_value) {
    {
      auto temp = (*target_tab_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.target_tab_id = absl::nullopt;
        return false;
      }
      out.target_tab_id = *temp;
    }
  }

  return true;
}

// static
bool GetMediaStreamOptions::Populate(
    const base::Value& value, GetMediaStreamOptions& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::unique_ptr<GetMediaStreamOptions> GetMediaStreamOptions::FromValueDeprecated(const base::Value& value) {
  auto out = std::make_unique<GetMediaStreamOptions>();
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
absl::optional<GetMediaStreamOptions> GetMediaStreamOptions::FromValue(const base::Value::Dict& value) {
  GetMediaStreamOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<GetMediaStreamOptions> GetMediaStreamOptions::FromValue(const base::Value& value) {
  GetMediaStreamOptions out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

base::Value::Dict GetMediaStreamOptions::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->consumer_tab_id) {
    to_value_result.Set("consumerTabId", *this->consumer_tab_id);

  }
  if (this->target_tab_id) {
    to_value_result.Set("targetTabId", *this->target_tab_id);

  }

  return to_value_result;
}



//
// Functions
//

namespace Capture {

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
      if (!CaptureOptions::Populate(options_value.GetDict(), params.options)) {
        return absl::nullopt;
      }
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


Results::Stream::Stream()
 {}

Results::Stream::~Stream() = default;
Results::Stream::Stream(Stream&& rhs) = default;
Results::Stream& Results::Stream::operator=(Stream&& rhs) = default;
base::Value::Dict Results::Stream::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Merge(additional_properties.Clone());

  return to_value_result;
}


base::Value::List Results::Create(const Stream& stream) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((stream).ToValue());

  return create_results;
}
}  // namespace Capture

namespace GetCapturedTabs {

base::Value::List Results::Create(const std::vector<CaptureInfo>& result) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(json_schema_compiler::util::CreateValueFromArray(result));

  return create_results;
}
}  // namespace GetCapturedTabs

namespace GetMediaStreamId {

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
    const base::Value& options_value = args[0];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        GetMediaStreamOptions temp;
        if (!GetMediaStreamOptions::Populate(options_value.GetDict(), temp))
          return absl::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


base::Value::List Results::Create(const std::string& stream_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(stream_id);

  return create_results;
}
}  // namespace GetMediaStreamId

//
// Events
//

namespace OnStatusChanged {

const char kEventName[] = "tabCapture.onStatusChanged";

base::Value::List Create(const CaptureInfo& info) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((info).ToValue());

  return create_results;
}

}  // namespace OnStatusChanged

}  // namespace tab_capture
}  // namespace api
}  // namespace extensions

