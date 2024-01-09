// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webrtc_desktop_capture_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/webrtc_desktop_capture_private.h"

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
namespace webrtc_desktop_capture_private {
//
// Types
//

RequestInfo::RequestInfo()
: guest_process_id(0),
guest_render_frame_id(0) {}

RequestInfo::~RequestInfo() = default;
RequestInfo::RequestInfo(RequestInfo&& rhs) noexcept = default;
RequestInfo& RequestInfo::operator=(RequestInfo&& rhs) noexcept = default;
RequestInfo RequestInfo::Clone() const {
  RequestInfo out;
  out.guest_process_id = guest_process_id;
  out.guest_render_frame_id = guest_render_frame_id;
  return out;
}

// static
bool RequestInfo::Populate(
    const base::Value::Dict& dict, RequestInfo& out) {
  const base::Value* guest_process_id_value = dict.Find("guestProcessId");
  if (!guest_process_id_value) {
    return false;
  }
  {
    auto temp = (*guest_process_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.guest_process_id = *temp;
  }

  const base::Value* guest_render_frame_id_value = dict.Find("guestRenderFrameId");
  if (!guest_render_frame_id_value) {
    return false;
  }
  {
    auto temp = (*guest_render_frame_id_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.guest_render_frame_id = *temp;
  }

  return true;
}

// static
bool RequestInfo::Populate(
    const base::Value& value, RequestInfo& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<RequestInfo> RequestInfo::FromValue(const base::Value::Dict& value) {
  RequestInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<RequestInfo> RequestInfo::FromValue(const base::Value& value) {
  RequestInfo out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict RequestInfo::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("guestProcessId", this->guest_process_id);

  to_value_result.Set("guestRenderFrameId", this->guest_render_frame_id);


  return to_value_result;
}


const char* ToString(DesktopCaptureSourceType enum_param) {
  switch (enum_param) {
    case DesktopCaptureSourceType::kScreen:
      return "screen";
    case DesktopCaptureSourceType::kWindow:
      return "window";
    case DesktopCaptureSourceType::kTab:
      return "tab";
    case DesktopCaptureSourceType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DesktopCaptureSourceType ParseDesktopCaptureSourceType(base::StringPiece enum_string) {
  if (enum_string == "screen")
    return DesktopCaptureSourceType::kScreen;
  if (enum_string == "window")
    return DesktopCaptureSourceType::kWindow;
  if (enum_string == "tab")
    return DesktopCaptureSourceType::kTab;
  return DesktopCaptureSourceType::kNone;
}

std::u16string GetDesktopCaptureSourceTypeParseError(base::StringPiece enum_string) {
  return u"expected \"screen\" or \"window\" or \"tab\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace ChooseDesktopMedia {

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
    const base::Value& sources_value = args[0];
    {
      if (!sources_value.is_list()) {
        return std::nullopt;
      }
      else {
        for (const auto& it : (sources_value).GetList()) {
          DesktopCaptureSourceType tmp;
          const std::string* desktop_capture_source_type_as_string = (it).GetIfString();
          if (!desktop_capture_source_type_as_string) {
            return std::nullopt;
          }
          tmp = ParseDesktopCaptureSourceType(*desktop_capture_source_type_as_string);
          if (tmp == DesktopCaptureSourceType()) {
            return std::nullopt;
          }
          params.sources.push_back(tmp);
        }
      }
    }
  }
  else {
    return std::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& request_value = args[1];
    {
      if (!request_value.is_dict()) {
        return std::nullopt;
      }
      if (!RequestInfo::Populate(request_value.GetDict(), params.request)) {
        return std::nullopt;
      }
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


base::Value::List Results::Create(const std::string& stream_id) {
  base::Value::List create_results;
  create_results.reserve(1);
  create_results.Append(stream_id);

  return create_results;
}
}  // namespace ChooseDesktopMedia

namespace CancelChooseDesktopMedia {

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
    const base::Value& desktop_media_request_id_value = args[0];
    {
      auto temp = desktop_media_request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return std::nullopt;
      }
      params.desktop_media_request_id = *temp;
    }
  }
  else {
    return std::nullopt;
  }

  return params;
}


}  // namespace CancelChooseDesktopMedia

}  // namespace webrtc_desktop_capture_private
}  // namespace api
}  // namespace extensions

