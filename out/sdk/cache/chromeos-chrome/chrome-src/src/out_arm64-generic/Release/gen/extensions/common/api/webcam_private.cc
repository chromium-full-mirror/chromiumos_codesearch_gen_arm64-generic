// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/webcam_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/webcam_private.h"

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
namespace webcam_private {
//
// Types
//

const char* ToString(PanDirection enum_param) {
  switch (enum_param) {
    case PanDirection::kStop:
      return "stop";
    case PanDirection::kRight:
      return "right";
    case PanDirection::kLeft:
      return "left";
    case PanDirection::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PanDirection ParsePanDirection(base::StringPiece enum_string) {
  if (enum_string == "stop")
    return PanDirection::kStop;
  if (enum_string == "right")
    return PanDirection::kRight;
  if (enum_string == "left")
    return PanDirection::kLeft;
  return PanDirection::kNone;
}

std::u16string GetPanDirectionParseError(base::StringPiece enum_string) {
  return u"expected \"stop\" or \"right\" or \"left\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TiltDirection enum_param) {
  switch (enum_param) {
    case TiltDirection::kStop:
      return "stop";
    case TiltDirection::kUp:
      return "up";
    case TiltDirection::kDown:
      return "down";
    case TiltDirection::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TiltDirection ParseTiltDirection(base::StringPiece enum_string) {
  if (enum_string == "stop")
    return TiltDirection::kStop;
  if (enum_string == "up")
    return TiltDirection::kUp;
  if (enum_string == "down")
    return TiltDirection::kDown;
  return TiltDirection::kNone;
}

std::u16string GetTiltDirectionParseError(base::StringPiece enum_string) {
  return u"expected \"stop\" or \"up\" or \"down\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Protocol enum_param) {
  switch (enum_param) {
    case Protocol::kVisca:
      return "visca";
    case Protocol::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Protocol ParseProtocol(base::StringPiece enum_string) {
  if (enum_string == "visca")
    return Protocol::kVisca;
  return Protocol::kNone;
}

std::u16string GetProtocolParseError(base::StringPiece enum_string) {
  return u"expected \"visca\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AutofocusState enum_param) {
  switch (enum_param) {
    case AutofocusState::kOn:
      return "on";
    case AutofocusState::kOff:
      return "off";
    case AutofocusState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AutofocusState ParseAutofocusState(base::StringPiece enum_string) {
  if (enum_string == "on")
    return AutofocusState::kOn;
  if (enum_string == "off")
    return AutofocusState::kOff;
  return AutofocusState::kNone;
}

std::u16string GetAutofocusStateParseError(base::StringPiece enum_string) {
  return u"expected \"on\" or \"off\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ProtocolConfiguration::ProtocolConfiguration()
: protocol() {}

ProtocolConfiguration::~ProtocolConfiguration() = default;
ProtocolConfiguration::ProtocolConfiguration(ProtocolConfiguration&& rhs) noexcept = default;
ProtocolConfiguration& ProtocolConfiguration::operator=(ProtocolConfiguration&& rhs) noexcept = default;
ProtocolConfiguration ProtocolConfiguration::Clone() const {
  ProtocolConfiguration out;
  out.protocol = protocol;
  return out;
}

// static
bool ProtocolConfiguration::Populate(
    const base::Value::Dict& dict, ProtocolConfiguration& out) {
  out.protocol = Protocol();
  const base::Value* protocol_value = dict.Find("protocol");
  if (protocol_value) {
    {
      const std::string* protocol_as_string = (*protocol_value).GetIfString();
      if (!protocol_as_string) {
        return false;
      }
      out.protocol = ParseProtocol(*protocol_as_string);
      if (out.protocol == Protocol()) {
        return false;
      }
    }
    } else {
    out.protocol = Protocol();
  }

  return true;
}

// static
bool ProtocolConfiguration::Populate(
    const base::Value& value, ProtocolConfiguration& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ProtocolConfiguration> ProtocolConfiguration::FromValue(const base::Value::Dict& value) {
  ProtocolConfiguration out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ProtocolConfiguration> ProtocolConfiguration::FromValue(const base::Value& value) {
  ProtocolConfiguration out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ProtocolConfiguration::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->protocol != Protocol()) {
    to_value_result.Set("protocol", webcam_private::ToString(this->protocol));

  }

  return to_value_result;
}


WebcamConfiguration::WebcamConfiguration()
: pan_direction(),
tilt_direction(),
autofocus_state() {}

WebcamConfiguration::~WebcamConfiguration() = default;
WebcamConfiguration::WebcamConfiguration(WebcamConfiguration&& rhs) noexcept = default;
WebcamConfiguration& WebcamConfiguration::operator=(WebcamConfiguration&& rhs) noexcept = default;
WebcamConfiguration WebcamConfiguration::Clone() const {
  WebcamConfiguration out;
  out.pan = pan;
  out.pan_speed = pan_speed;
  out.pan_direction = pan_direction;
  out.tilt = tilt;
  out.tilt_speed = tilt_speed;
  out.tilt_direction = tilt_direction;
  out.zoom = zoom;
  out.autofocus_state = autofocus_state;
  out.focus = focus;
  return out;
}

// static
bool WebcamConfiguration::Populate(
    const base::Value::Dict& dict, WebcamConfiguration& out) {
  out.pan_direction = PanDirection();
  out.tilt_direction = TiltDirection();
  out.autofocus_state = AutofocusState();
  const base::Value* pan_value = dict.Find("pan");
  if (pan_value) {
    {
      auto temp = (*pan_value).GetIfDouble();
      if (!temp.has_value()) {
        out.pan = std::nullopt;
        return false;
      }
      out.pan = *temp;
    }
  }

  const base::Value* pan_speed_value = dict.Find("panSpeed");
  if (pan_speed_value) {
    {
      auto temp = (*pan_speed_value).GetIfDouble();
      if (!temp.has_value()) {
        out.pan_speed = std::nullopt;
        return false;
      }
      out.pan_speed = *temp;
    }
  }

  const base::Value* pan_direction_value = dict.Find("panDirection");
  if (pan_direction_value) {
    {
      const std::string* pan_direction_as_string = (*pan_direction_value).GetIfString();
      if (!pan_direction_as_string) {
        return false;
      }
      out.pan_direction = ParsePanDirection(*pan_direction_as_string);
      if (out.pan_direction == PanDirection()) {
        return false;
      }
    }
    } else {
    out.pan_direction = PanDirection();
  }

  const base::Value* tilt_value = dict.Find("tilt");
  if (tilt_value) {
    {
      auto temp = (*tilt_value).GetIfDouble();
      if (!temp.has_value()) {
        out.tilt = std::nullopt;
        return false;
      }
      out.tilt = *temp;
    }
  }

  const base::Value* tilt_speed_value = dict.Find("tiltSpeed");
  if (tilt_speed_value) {
    {
      auto temp = (*tilt_speed_value).GetIfDouble();
      if (!temp.has_value()) {
        out.tilt_speed = std::nullopt;
        return false;
      }
      out.tilt_speed = *temp;
    }
  }

  const base::Value* tilt_direction_value = dict.Find("tiltDirection");
  if (tilt_direction_value) {
    {
      const std::string* tilt_direction_as_string = (*tilt_direction_value).GetIfString();
      if (!tilt_direction_as_string) {
        return false;
      }
      out.tilt_direction = ParseTiltDirection(*tilt_direction_as_string);
      if (out.tilt_direction == TiltDirection()) {
        return false;
      }
    }
    } else {
    out.tilt_direction = TiltDirection();
  }

  const base::Value* zoom_value = dict.Find("zoom");
  if (zoom_value) {
    {
      auto temp = (*zoom_value).GetIfDouble();
      if (!temp.has_value()) {
        out.zoom = std::nullopt;
        return false;
      }
      out.zoom = *temp;
    }
  }

  const base::Value* autofocus_state_value = dict.Find("autofocusState");
  if (autofocus_state_value) {
    {
      const std::string* autofocus_state_as_string = (*autofocus_state_value).GetIfString();
      if (!autofocus_state_as_string) {
        return false;
      }
      out.autofocus_state = ParseAutofocusState(*autofocus_state_as_string);
      if (out.autofocus_state == AutofocusState()) {
        return false;
      }
    }
    } else {
    out.autofocus_state = AutofocusState();
  }

  const base::Value* focus_value = dict.Find("focus");
  if (focus_value) {
    {
      auto temp = (*focus_value).GetIfDouble();
      if (!temp.has_value()) {
        out.focus = std::nullopt;
        return false;
      }
      out.focus = *temp;
    }
  }

  return true;
}

// static
bool WebcamConfiguration::Populate(
    const base::Value& value, WebcamConfiguration& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<WebcamConfiguration> WebcamConfiguration::FromValue(const base::Value::Dict& value) {
  WebcamConfiguration out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<WebcamConfiguration> WebcamConfiguration::FromValue(const base::Value& value) {
  WebcamConfiguration out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict WebcamConfiguration::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->pan) {
    to_value_result.Set("pan", *this->pan);

  }
  if (this->pan_speed) {
    to_value_result.Set("panSpeed", *this->pan_speed);

  }
  if (this->pan_direction != PanDirection()) {
    to_value_result.Set("panDirection", webcam_private::ToString(this->pan_direction));

  }
  if (this->tilt) {
    to_value_result.Set("tilt", *this->tilt);

  }
  if (this->tilt_speed) {
    to_value_result.Set("tiltSpeed", *this->tilt_speed);

  }
  if (this->tilt_direction != TiltDirection()) {
    to_value_result.Set("tiltDirection", webcam_private::ToString(this->tilt_direction));

  }
  if (this->zoom) {
    to_value_result.Set("zoom", *this->zoom);

  }
  if (this->autofocus_state != AutofocusState()) {
    to_value_result.Set("autofocusState", webcam_private::ToString(this->autofocus_state));

  }
  if (this->focus) {
    to_value_result.Set("focus", *this->focus);

  }

  return to_value_result;
}


Range::Range()
: min(0.0),
max(0.0) {}

Range::~Range() = default;
Range::Range(Range&& rhs) noexcept = default;
Range& Range::operator=(Range&& rhs) noexcept = default;
Range Range::Clone() const {
  Range out;
  out.min = min;
  out.max = max;
  return out;
}

// static
bool Range::Populate(
    const base::Value::Dict& dict, Range& out) {
  const base::Value* min_value = dict.Find("min");
  if (!min_value) {
    return false;
  }
  {
    auto temp = (*min_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.min = *temp;
  }

  const base::Value* max_value = dict.Find("max");
  if (!max_value) {
    return false;
  }
  {
    auto temp = (*max_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.max = *temp;
  }

  return true;
}

// static
bool Range::Populate(
    const base::Value& value, Range& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Range> Range::FromValue(const base::Value::Dict& value) {
  Range out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Range> Range::FromValue(const base::Value& value) {
  Range out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Range::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("min", this->min);

  to_value_result.Set("max", this->max);


  return to_value_result;
}


WebcamCurrentConfiguration::WebcamCurrentConfiguration()
: pan(0.0),
tilt(0.0),
zoom(0.0),
focus(0.0) {}

WebcamCurrentConfiguration::~WebcamCurrentConfiguration() = default;
WebcamCurrentConfiguration::WebcamCurrentConfiguration(WebcamCurrentConfiguration&& rhs) noexcept = default;
WebcamCurrentConfiguration& WebcamCurrentConfiguration::operator=(WebcamCurrentConfiguration&& rhs) noexcept = default;
WebcamCurrentConfiguration WebcamCurrentConfiguration::Clone() const {
  WebcamCurrentConfiguration out;
  out.pan = pan;
  out.tilt = tilt;
  out.zoom = zoom;
  out.focus = focus;
  if (pan_range) {
    out.pan_range = pan_range->Clone();
  }
  if (tilt_range) {
    out.tilt_range = tilt_range->Clone();
  }
  if (zoom_range) {
    out.zoom_range = zoom_range->Clone();
  }
  if (focus_range) {
    out.focus_range = focus_range->Clone();
  }
  return out;
}

// static
bool WebcamCurrentConfiguration::Populate(
    const base::Value::Dict& dict, WebcamCurrentConfiguration& out) {
  const base::Value* pan_value = dict.Find("pan");
  if (!pan_value) {
    return false;
  }
  {
    auto temp = (*pan_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.pan = *temp;
  }

  const base::Value* tilt_value = dict.Find("tilt");
  if (!tilt_value) {
    return false;
  }
  {
    auto temp = (*tilt_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.tilt = *temp;
  }

  const base::Value* zoom_value = dict.Find("zoom");
  if (!zoom_value) {
    return false;
  }
  {
    auto temp = (*zoom_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.zoom = *temp;
  }

  const base::Value* focus_value = dict.Find("focus");
  if (!focus_value) {
    return false;
  }
  {
    auto temp = (*focus_value).GetIfDouble();
    if (!temp.has_value()) {
      return false;
    }
    out.focus = *temp;
  }

  const base::Value* pan_range_value = dict.Find("panRange");
  if (pan_range_value) {
    {
      if (!(*pan_range_value).is_dict()) {
        return false;
      }
      else {
        Range temp;
        if (!Range::Populate((*pan_range_value).GetDict(), temp))
          return false;
        out.pan_range = std::move(temp);
      }
    }
  }

  const base::Value* tilt_range_value = dict.Find("tiltRange");
  if (tilt_range_value) {
    {
      if (!(*tilt_range_value).is_dict()) {
        return false;
      }
      else {
        Range temp;
        if (!Range::Populate((*tilt_range_value).GetDict(), temp))
          return false;
        out.tilt_range = std::move(temp);
      }
    }
  }

  const base::Value* zoom_range_value = dict.Find("zoomRange");
  if (zoom_range_value) {
    {
      if (!(*zoom_range_value).is_dict()) {
        return false;
      }
      else {
        Range temp;
        if (!Range::Populate((*zoom_range_value).GetDict(), temp))
          return false;
        out.zoom_range = std::move(temp);
      }
    }
  }

  const base::Value* focus_range_value = dict.Find("focusRange");
  if (focus_range_value) {
    {
      if (!(*focus_range_value).is_dict()) {
        return false;
      }
      else {
        Range temp;
        if (!Range::Populate((*focus_range_value).GetDict(), temp))
          return false;
        out.focus_range = std::move(temp);
      }
    }
  }

  return true;
}

// static
bool WebcamCurrentConfiguration::Populate(
    const base::Value& value, WebcamCurrentConfiguration& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<WebcamCurrentConfiguration> WebcamCurrentConfiguration::FromValue(const base::Value::Dict& value) {
  WebcamCurrentConfiguration out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<WebcamCurrentConfiguration> WebcamCurrentConfiguration::FromValue(const base::Value& value) {
  WebcamCurrentConfiguration out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict WebcamCurrentConfiguration::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("pan", this->pan);

  to_value_result.Set("tilt", this->tilt);

  to_value_result.Set("zoom", this->zoom);

  to_value_result.Set("focus", this->focus);

  if (this->pan_range) {
    to_value_result.Set("panRange", (this->pan_range)->ToValue());

  }
  if (this->tilt_range) {
    to_value_result.Set("tiltRange", (this->tilt_range)->ToValue());

  }
  if (this->zoom_range) {
    to_value_result.Set("zoomRange", (this->zoom_range)->ToValue());

  }
  if (this->focus_range) {
    to_value_result.Set("focusRange", (this->focus_range)->ToValue());

  }

  return to_value_result;
}



//
// Functions
//

namespace OpenSerialWebcam {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& path_value = args[0];
    {
      auto* temp = path_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.path = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& protocol_value = args[1];
    {
      if (!protocol_value.is_dict()) {
        return std::nullopt;
      }
      if (!ProtocolConfiguration::Populate(protocol_value.GetDict(), params.protocol)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& webcam_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(webcam_id);

  return create_results;
}
}  // namespace OpenSerialWebcam

namespace CloseWebcam {

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
    const base::Value& webcam_id_value = args[0];
    {
      auto* temp = webcam_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.webcam_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace CloseWebcam

namespace Get {

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
    const base::Value& webcam_id_value = args[0];
    {
      auto* temp = webcam_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.webcam_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const WebcamCurrentConfiguration& configuration) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((configuration).ToValue());

  return create_results;
}
}  // namespace Get

namespace Set {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& webcam_id_value = args[0];
    {
      auto* temp = webcam_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.webcam_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& config_value = args[1];
    {
      if (!config_value.is_dict()) {
        return std::nullopt;
      }
      if (!WebcamConfiguration::Populate(config_value.GetDict(), params.config)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const WebcamCurrentConfiguration& configuration) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((configuration).ToValue());

  return create_results;
}
}  // namespace Set

namespace Reset {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& webcam_id_value = args[0];
    {
      auto* temp = webcam_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.webcam_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& config_value = args[1];
    {
      if (!config_value.is_dict()) {
        return std::nullopt;
      }
      if (!WebcamConfiguration::Populate(config_value.GetDict(), params.config)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const WebcamCurrentConfiguration& configuration) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((configuration).ToValue());

  return create_results;
}
}  // namespace Reset

namespace SetHome {

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
    const base::Value& webcam_id_value = args[0];
    {
      auto* temp = webcam_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.webcam_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const WebcamCurrentConfiguration& configuration) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((configuration).ToValue());

  return create_results;
}
}  // namespace SetHome

namespace RestoreCameraPreset {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& webcam_id_value = args[0];
    {
      auto* temp = webcam_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.webcam_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& preset_number_value = args[1];
    {
      auto temp = preset_number_value.GetIfDouble();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.preset_number = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const WebcamCurrentConfiguration& configuration) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((configuration).ToValue());

  return create_results;
}
}  // namespace RestoreCameraPreset

namespace SetCameraPreset {

Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) noexcept = default;
Params& Params::operator=(Params&& rhs) noexcept = default;

// static
std::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() != 2) {
    return std::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& webcam_id_value = args[0];
    {
      auto* temp = webcam_id_value.GetIfString();
      if (!temp) {
        return std::nullopt;
      }
      params.webcam_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& preset_number_value = args[1];
    {
      auto temp = preset_number_value.GetIfDouble();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.preset_number = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const WebcamCurrentConfiguration& configuration) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append((configuration).ToValue());

  return create_results;
}
}  // namespace SetCameraPreset

}  // namespace webcam_private
}  // namespace api
}  // namespace extensions

