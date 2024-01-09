// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/desktop_capture.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_DESKTOP_CAPTURE_H__
#define CHROME_COMMON_EXTENSIONS_API_DESKTOP_CAPTURE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "chrome/common/extensions/api/tabs.h"


namespace extensions {
namespace api {
namespace desktop_capture {

//
// Types
//

// Enum used to define set of desktop media sources used in
// chooseDesktopMedia().
enum class DesktopCaptureSourceType {
  kNone = 0,
  kScreen,
  kWindow,
  kTab,
  kAudio,
  kMaxValue = kAudio,
};


const char* ToString(DesktopCaptureSourceType as_enum);
DesktopCaptureSourceType ParseDesktopCaptureSourceType(base::StringPiece as_string);
std::u16string GetDesktopCaptureSourceTypeParseError(base::StringPiece as_string);

// Mirrors <a
// href="https://w3c.github.io/mediacapture-screen-share/#dom-systemaudiopreferenceenum">SystemAudioPreferenceEnum</a>.
enum class SystemAudioPreferenceEnum {
  kNone = 0,
  kInclude,
  kExclude,
  kMaxValue = kExclude,
};


const char* ToString(SystemAudioPreferenceEnum as_enum);
SystemAudioPreferenceEnum ParseSystemAudioPreferenceEnum(base::StringPiece as_string);
std::u16string GetSystemAudioPreferenceEnumParseError(base::StringPiece as_string);

// Mirrors <a
// href="https://w3c.github.io/mediacapture-screen-share/#dom-selfcapturepreferenceenum">SelfCapturePreferenceEnum</a>.
enum class SelfCapturePreferenceEnum {
  kNone = 0,
  kInclude,
  kExclude,
  kMaxValue = kExclude,
};


const char* ToString(SelfCapturePreferenceEnum as_enum);
SelfCapturePreferenceEnum ParseSelfCapturePreferenceEnum(base::StringPiece as_string);
std::u16string GetSelfCapturePreferenceEnumParseError(base::StringPiece as_string);


//
// Functions
//

namespace ChooseDesktopMedia {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Mirrors members of <a
  // href="https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamconstraints">DisplayMediaStreamConstraints</a> which need to be applied before the user makes their selection, and must therefore be provided to chooseDesktopMedia() rather than be deferred to getUserMedia().
  struct Options {
    Options();
    ~Options();
    Options(const Options&) = delete;
    Options& operator=(const Options&) = delete;
    Options(Options&& rhs) noexcept;
    Options& operator=(Options&& rhs) noexcept;

    // Populates a Options object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Options& out);

    // Populates a Options object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Options& out);

    // Creates a deep copy of Options.
    Options Clone() const;

    // Creates a Options object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Options> FromValue(const base::Value::Dict& value);

    // Creates a Options object from a base::Value, or nullopt on failure.
    static std::optional<Options> FromValue(const base::Value& value);

    // Mirrors <a
    // href="https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamconstraints-systemaudio">systemAudio</a>.
    SystemAudioPreferenceEnum system_audio;

    // Mirrors <a
    // href="https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamconstraints-selfbrowsersurface">selfBrowserSurface</a>.
    SelfCapturePreferenceEnum self_browser_surface;

    // Indicates that the caller intends to perform local audio suppression, and
    // that the media picker shown to the user should therefore reflect that with
    // the appropriate warnings, as it does when getDisplayMedia() is invoked.
    std::optional<bool> suppress_local_audio_playback_intended;

  };


  // Set of sources that should be shown to the user. The sources order in the set
  // decides the tab order in the picker.
  std::vector<DesktopCaptureSourceType> sources;

  // Optional tab for which the stream is created. If not specified then the
  // resulting stream can be used only by the calling extension. The stream can
  // only be used by frames in the given tab whose security origin matches
  // <code>tab.url</code>. The tab's origin must be a secure origin, e.g. HTTPS.
  std::optional<extensions::api::tabs::Tab> target_tab;

  // Mirrors members of <a
  // href="https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamconstraints">DisplayMediaStreamConstraints</a> which need to be applied before the user makes their selection, and must therefore be provided to chooseDesktopMedia() rather than be deferred to getUserMedia().
  std::optional<Options> options;


 private:
  Params();
};

namespace Results {

// Contains properties that describe the stream.
struct Options {
  Options();
  ~Options();
  Options(const Options&) = delete;
  Options& operator=(const Options&) = delete;
  Options(Options&& rhs) noexcept;
  Options& operator=(Options&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOptions object.
  base::Value::Dict ToValue() const;

  // True if "audio" is included in parameter sources, and the end user does not
  // uncheck the "Share audio" checkbox. Otherwise false, and in this case, one
  // should not ask for audio stream through getUserMedia call.
  bool can_request_audio_track;

};


// An opaque string that can be passed to <code>getUserMedia()</code> API to
// generate media stream that corresponds to the source selected by the user. If
// user didn't select any source (i.e. canceled the prompt) then the callback is
// called with an empty <code>streamId</code>. The created <code>streamId</code>
// can be used only once and expires after a few seconds when it is not used.
// Contains properties that describe the stream.
base::Value::List Create(const std::string& stream_id, const Options& options);
}  // namespace Results

}  // namespace ChooseDesktopMedia

namespace CancelChooseDesktopMedia {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Id returned by chooseDesktopMedia()
  int desktop_media_request_id;


 private:
  Params();
};

}  // namespace CancelChooseDesktopMedia

}  // namespace desktop_capture
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_DESKTOP_CAPTURE_H__
