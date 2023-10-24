// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/desktop_capture.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "chrome/common/extensions/api/desktop_capture.h"

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
#include "chrome/common/extensions/api/tabs.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace desktop_capture {
//
// Types
//

const char* ToString(DesktopCaptureSourceType enum_param) {
  switch (enum_param) {
    case DESKTOP_CAPTURE_SOURCE_TYPE_SCREEN:
      return "screen";
    case DESKTOP_CAPTURE_SOURCE_TYPE_WINDOW:
      return "window";
    case DESKTOP_CAPTURE_SOURCE_TYPE_TAB:
      return "tab";
    case DESKTOP_CAPTURE_SOURCE_TYPE_AUDIO:
      return "audio";
    case DESKTOP_CAPTURE_SOURCE_TYPE_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

DesktopCaptureSourceType ParseDesktopCaptureSourceType(base::StringPiece enum_string) {
  if (enum_string == "screen")
    return DESKTOP_CAPTURE_SOURCE_TYPE_SCREEN;
  if (enum_string == "window")
    return DESKTOP_CAPTURE_SOURCE_TYPE_WINDOW;
  if (enum_string == "tab")
    return DESKTOP_CAPTURE_SOURCE_TYPE_TAB;
  if (enum_string == "audio")
    return DESKTOP_CAPTURE_SOURCE_TYPE_AUDIO;
  return DESKTOP_CAPTURE_SOURCE_TYPE_NONE;
}

std::u16string GetDesktopCaptureSourceTypeParseError(base::StringPiece enum_string) {
  return u"expected \"screen\" or \"window\" or \"tab\" or \"audio\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SystemAudioPreferenceEnum enum_param) {
  switch (enum_param) {
    case SYSTEM_AUDIO_PREFERENCE_ENUM_INCLUDE:
      return "include";
    case SYSTEM_AUDIO_PREFERENCE_ENUM_EXCLUDE:
      return "exclude";
    case SYSTEM_AUDIO_PREFERENCE_ENUM_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SystemAudioPreferenceEnum ParseSystemAudioPreferenceEnum(base::StringPiece enum_string) {
  if (enum_string == "include")
    return SYSTEM_AUDIO_PREFERENCE_ENUM_INCLUDE;
  if (enum_string == "exclude")
    return SYSTEM_AUDIO_PREFERENCE_ENUM_EXCLUDE;
  return SYSTEM_AUDIO_PREFERENCE_ENUM_NONE;
}

std::u16string GetSystemAudioPreferenceEnumParseError(base::StringPiece enum_string) {
  return u"expected \"include\" or \"exclude\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SelfCapturePreferenceEnum enum_param) {
  switch (enum_param) {
    case SELF_CAPTURE_PREFERENCE_ENUM_INCLUDE:
      return "include";
    case SELF_CAPTURE_PREFERENCE_ENUM_EXCLUDE:
      return "exclude";
    case SELF_CAPTURE_PREFERENCE_ENUM_NONE:
      return "";
  }
  NOTREACHED();
  return "";
}

SelfCapturePreferenceEnum ParseSelfCapturePreferenceEnum(base::StringPiece enum_string) {
  if (enum_string == "include")
    return SELF_CAPTURE_PREFERENCE_ENUM_INCLUDE;
  if (enum_string == "exclude")
    return SELF_CAPTURE_PREFERENCE_ENUM_EXCLUDE;
  return SELF_CAPTURE_PREFERENCE_ENUM_NONE;
}

std::u16string GetSelfCapturePreferenceEnumParseError(base::StringPiece enum_string) {
  return u"expected \"include\" or \"exclude\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



//
// Functions
//

namespace ChooseDesktopMedia {

Params::Options::Options()
: system_audio(),
self_browser_surface() {}

Params::Options::~Options() = default;
Params::Options::Options(Options&& rhs) = default;
Params::Options& Params::Options::operator=(Options&& rhs) = default;
Params::Options Params::Options::Clone() const {
  Options out;
  out.system_audio = system_audio;
  out.self_browser_surface = self_browser_surface;
  out.suppress_local_audio_playback_intended = suppress_local_audio_playback_intended;
  return out;
}

// static
bool Params::Options::Populate(
    const base::Value::Dict& dict, Options& out) {
  out.system_audio = SystemAudioPreferenceEnum();
  out.self_browser_surface = SelfCapturePreferenceEnum();
  const base::Value* system_audio_value = dict.Find("systemAudio");
  if (system_audio_value) {
    {
      const std::string* system_audio_preference_enum_as_string = (*system_audio_value).GetIfString();
      if (!system_audio_preference_enum_as_string) {
        return false;
      }
      out.system_audio = ParseSystemAudioPreferenceEnum(*system_audio_preference_enum_as_string);
      if (out.system_audio == SystemAudioPreferenceEnum()) {
        return false;
      }
    }
    } else {
    out.system_audio = SystemAudioPreferenceEnum();
  }

  const base::Value* self_browser_surface_value = dict.Find("selfBrowserSurface");
  if (self_browser_surface_value) {
    {
      const std::string* self_capture_preference_enum_as_string = (*self_browser_surface_value).GetIfString();
      if (!self_capture_preference_enum_as_string) {
        return false;
      }
      out.self_browser_surface = ParseSelfCapturePreferenceEnum(*self_capture_preference_enum_as_string);
      if (out.self_browser_surface == SelfCapturePreferenceEnum()) {
        return false;
      }
    }
    } else {
    out.self_browser_surface = SelfCapturePreferenceEnum();
  }

  const base::Value* suppress_local_audio_playback_intended_value = dict.Find("suppressLocalAudioPlaybackIntended");
  if (suppress_local_audio_playback_intended_value) {
    {
      auto temp = (*suppress_local_audio_playback_intended_value).GetIfBool();
      if (!temp.has_value()) {
        out.suppress_local_audio_playback_intended = absl::nullopt;
        return false;
      }
      out.suppress_local_audio_playback_intended = *temp;
    }
  }

  return true;
}

// static
bool Params::Options::Populate(
    const base::Value& value, Options& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
absl::optional<Params::Options> Params::Options::FromValue(const base::Value::Dict& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}

// static
absl::optional<Params::Options> Params::Options::FromValue(const base::Value& value) {
  Options out;
  bool result = Populate(value, out);
  if (!result) {
    return absl::nullopt;
  }
  return out;
}


Params::Params() = default;
Params::~Params() = default;
Params::Params(Params&& rhs) = default;
Params& Params::operator=(Params&& rhs) = default;

// static
absl::optional<Params> Params::Create(const base::Value::List& args) {
  if (args.size() < 1 || args.size() > 3) {
    return absl::nullopt;
  }
  Params params;

  if (0 < args.size() &&
      !args[0].is_none()) {
    const base::Value& sources_value = args[0];
    {
      if (!sources_value.is_list()) {
        return absl::nullopt;
      }
      else {
        for (const auto& it : (sources_value).GetList()) {
          DesktopCaptureSourceType tmp;
          const std::string* desktop_capture_source_type_as_string = (it).GetIfString();
          if (!desktop_capture_source_type_as_string) {
            return absl::nullopt;
          }
          tmp = ParseDesktopCaptureSourceType(*desktop_capture_source_type_as_string);
          if (tmp == DesktopCaptureSourceType()) {
            return absl::nullopt;
          }
          params.sources.push_back(tmp);
        }
      }
    }
  }
  else {
    return absl::nullopt;
  }

  if (1 < args.size() &&
      !args[1].is_none()) {
    const base::Value& target_tab_value = args[1];
    {
      if (!target_tab_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        extensions::api::tabs::Tab temp;
        if (!extensions::api::tabs::Tab::Populate(target_tab_value.GetDict(), temp))
          return absl::nullopt;
        params.target_tab = std::move(temp);
      }
    }
  }

  if (2 < args.size() &&
      !args[2].is_none()) {
    const base::Value& options_value = args[2];
    {
      if (!options_value.is_dict()) {
        return absl::nullopt;
      }
      else {
        Options temp;
        if (!Options::Populate(options_value.GetDict(), temp))
          return absl::nullopt;
        params.options = std::move(temp);
      }
    }
  }

  return params;
}


Results::Options::Options()
: can_request_audio_track(false) {}

Results::Options::~Options() = default;
Results::Options::Options(Options&& rhs) = default;
Results::Options& Results::Options::operator=(Options&& rhs) = default;
base::Value::Dict Results::Options::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("canRequestAudioTrack", this->can_request_audio_track);


  return to_value_result;
}


base::Value::List Results::Create(const std::string& stream_id, const Options& options) {
  base::Value::List create_results;
  create_results.reserve(2);
  create_results.Append(stream_id);

  create_results.Append((options).ToValue());

  return create_results;
}
}  // namespace ChooseDesktopMedia

namespace CancelChooseDesktopMedia {

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
    const base::Value& desktop_media_request_id_value = args[0];
    {
      auto temp = desktop_media_request_id_value.GetIfInt();
      if (!temp.has_value()) {
        return absl::nullopt;
      }
      params.desktop_media_request_id = *temp;
    }
  }
  else {
    return absl::nullopt;
  }

  return params;
}


}  // namespace CancelChooseDesktopMedia

}  // namespace desktop_capture
}  // namespace api
}  // namespace extensions

