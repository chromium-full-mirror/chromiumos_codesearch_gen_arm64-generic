// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/tab_capture.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_TAB_CAPTURE_H__
#define CHROME_COMMON_EXTENSIONS_API_TAB_CAPTURE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace tab_capture {

//
// Types
//

enum class TabCaptureState {
  kNone = 0,
  kPending,
  kActive,
  kStopped,
  kError,
  kMaxValue = kError,
};


const char* ToString(TabCaptureState as_enum);
TabCaptureState ParseTabCaptureState(base::StringPiece as_string);
std::u16string GetTabCaptureStateParseError(base::StringPiece as_string);

struct CaptureInfo {
  CaptureInfo();
  ~CaptureInfo();
  CaptureInfo(const CaptureInfo&) = delete;
  CaptureInfo& operator=(const CaptureInfo&) = delete;
  CaptureInfo(CaptureInfo&& rhs) noexcept;
  CaptureInfo& operator=(CaptureInfo&& rhs) noexcept;

  // Populates a CaptureInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CaptureInfo& out);

  // Populates a CaptureInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, CaptureInfo& out);

  // Creates a deep copy of CaptureInfo.
  CaptureInfo Clone() const;

  // Creates a CaptureInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CaptureInfo> FromValue(const base::Value::Dict& value);

  // Creates a CaptureInfo object from a base::Value, or nullopt on failure.
  static std::optional<CaptureInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCaptureInfo object.
  base::Value::Dict ToValue() const;

  // The id of the tab whose status changed.
  int tab_id;

  // The new capture status of the tab.
  TabCaptureState status;

  // Whether an element in the tab being captured is in fullscreen mode.
  bool fullscreen;

};

struct MediaStreamConstraint {
  MediaStreamConstraint();
  ~MediaStreamConstraint();
  MediaStreamConstraint(const MediaStreamConstraint&) = delete;
  MediaStreamConstraint& operator=(const MediaStreamConstraint&) = delete;
  MediaStreamConstraint(MediaStreamConstraint&& rhs) noexcept;
  MediaStreamConstraint& operator=(MediaStreamConstraint&& rhs) noexcept;

  // Populates a MediaStreamConstraint object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MediaStreamConstraint& out);

  // Populates a MediaStreamConstraint object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MediaStreamConstraint& out);

  // Creates a deep copy of MediaStreamConstraint.
  MediaStreamConstraint Clone() const;

  // Creates a MediaStreamConstraint object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<MediaStreamConstraint> FromValue(const base::Value::Dict& value);

  // Creates a MediaStreamConstraint object from a base::Value, or nullopt on
  // failure.
  static std::optional<MediaStreamConstraint> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMediaStreamConstraint object.
  base::Value::Dict ToValue() const;

  struct Mandatory {
    Mandatory();
    ~Mandatory();
    Mandatory(const Mandatory&) = delete;
    Mandatory& operator=(const Mandatory&) = delete;
    Mandatory(Mandatory&& rhs) noexcept;
    Mandatory& operator=(Mandatory&& rhs) noexcept;

    // Populates a Mandatory object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Mandatory& out);

    // Populates a Mandatory object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Mandatory& out);

    // Creates a deep copy of Mandatory.
    Mandatory Clone() const;

    // Creates a Mandatory object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Mandatory> FromValue(const base::Value::Dict& value);

    // Creates a Mandatory object from a base::Value, or nullopt on failure.
    static std::optional<Mandatory> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisMandatory object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };

  struct Optional {
    Optional();
    ~Optional();
    Optional(const Optional&) = delete;
    Optional& operator=(const Optional&) = delete;
    Optional(Optional&& rhs) noexcept;
    Optional& operator=(Optional&& rhs) noexcept;

    // Populates a Optional object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Optional& out);

    // Populates a Optional object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Optional& out);

    // Creates a deep copy of Optional.
    Optional Clone() const;

    // Creates a Optional object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Optional> FromValue(const base::Value::Dict& value);

    // Creates a Optional object from a base::Value, or nullopt on failure.
    static std::optional<Optional> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisOptional object.
    base::Value::Dict ToValue() const;

    base::Value::Dict additional_properties;
  };


  Mandatory mandatory;

  std::optional<Optional> optional;

};

struct CaptureOptions {
  CaptureOptions();
  ~CaptureOptions();
  CaptureOptions(const CaptureOptions&) = delete;
  CaptureOptions& operator=(const CaptureOptions&) = delete;
  CaptureOptions(CaptureOptions&& rhs) noexcept;
  CaptureOptions& operator=(CaptureOptions&& rhs) noexcept;

  // Populates a CaptureOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CaptureOptions& out);

  // Populates a CaptureOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CaptureOptions& out);

  // Creates a deep copy of CaptureOptions.
  CaptureOptions Clone() const;

  // Creates a CaptureOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CaptureOptions> FromValue(const base::Value::Dict& value);

  // Creates a CaptureOptions object from a base::Value, or nullopt on failure.
  static std::optional<CaptureOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCaptureOptions object.
  base::Value::Dict ToValue() const;

  std::optional<bool> audio;

  std::optional<bool> video;

  std::optional<MediaStreamConstraint> audio_constraints;

  std::optional<MediaStreamConstraint> video_constraints;

  std::optional<std::string> presentation_id;

};

struct GetMediaStreamOptions {
  GetMediaStreamOptions();
  ~GetMediaStreamOptions();
  GetMediaStreamOptions(const GetMediaStreamOptions&) = delete;
  GetMediaStreamOptions& operator=(const GetMediaStreamOptions&) = delete;
  GetMediaStreamOptions(GetMediaStreamOptions&& rhs) noexcept;
  GetMediaStreamOptions& operator=(GetMediaStreamOptions&& rhs) noexcept;

  // Populates a GetMediaStreamOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetMediaStreamOptions& out);

  // Populates a GetMediaStreamOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetMediaStreamOptions& out);

  // Creates a deep copy of GetMediaStreamOptions.
  GetMediaStreamOptions Clone() const;

  // Creates a GetMediaStreamOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<GetMediaStreamOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetMediaStreamOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetMediaStreamOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetMediaStreamOptions object.
  base::Value::Dict ToValue() const;

  // Optional tab id of the tab which will later invoke
  // <code>getUserMedia()</code> to consume the stream. If not specified then the
  // resulting stream can be used only by the calling extension. The stream can
  // only be used by frames in the given tab whose security origin matches the
  // consumber tab's origin. The tab's origin must be a secure origin, e.g. HTTPS.
  std::optional<int> consumer_tab_id;

  // Optional tab id of the tab which will be captured. If not specified then the
  // current active tab will be selected. Only tabs for which the extension has
  // been granted the <code>activeTab</code> permission can be used as the target
  // tab.
  std::optional<int> target_tab_id;

};


//
// Functions
//

namespace Capture {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Configures the returned media stream.
  CaptureOptions options;


 private:
  Params();
};

namespace Results {

struct Stream {
  Stream();
  ~Stream();
  Stream(const Stream&) = delete;
  Stream& operator=(const Stream&) = delete;
  Stream(Stream&& rhs) noexcept;
  Stream& operator=(Stream&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStream object.
  base::Value::Dict ToValue() const;

  base::Value::Dict additional_properties;
};


base::Value::List Create(const Stream& stream);
}  // namespace Results

}  // namespace Capture

namespace GetCapturedTabs {

namespace Results {

base::Value::List Create(const std::vector<CaptureInfo>& result);
}  // namespace Results

}  // namespace GetCapturedTabs

namespace GetMediaStreamId {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::optional<GetMediaStreamOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& stream_id);
}  // namespace Results

}  // namespace GetMediaStreamId

//
// Events
//

namespace OnStatusChanged {

extern const char kEventName[];  // "tabCapture.onStatusChanged"

// CaptureInfo with new capture status for the tab.
base::Value::List Create(const CaptureInfo& info);
}  // namespace OnStatusChanged

}  // namespace tab_capture
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_TAB_CAPTURE_H__
