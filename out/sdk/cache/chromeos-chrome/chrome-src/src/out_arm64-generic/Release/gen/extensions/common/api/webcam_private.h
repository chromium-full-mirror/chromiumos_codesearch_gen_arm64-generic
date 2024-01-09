// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/webcam_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_WEBCAM_PRIVATE_H__
#define EXTENSIONS_COMMON_API_WEBCAM_PRIVATE_H__

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
namespace webcam_private {

//
// Types
//

enum class PanDirection {
  kNone = 0,
  kStop,
  kRight,
  kLeft,
  kMaxValue = kLeft,
};


const char* ToString(PanDirection as_enum);
PanDirection ParsePanDirection(base::StringPiece as_string);
std::u16string GetPanDirectionParseError(base::StringPiece as_string);

enum class TiltDirection {
  kNone = 0,
  kStop,
  kUp,
  kDown,
  kMaxValue = kDown,
};


const char* ToString(TiltDirection as_enum);
TiltDirection ParseTiltDirection(base::StringPiece as_string);
std::u16string GetTiltDirectionParseError(base::StringPiece as_string);

enum class Protocol {
  kNone = 0,
  kVisca,
  kMaxValue = kVisca,
};


const char* ToString(Protocol as_enum);
Protocol ParseProtocol(base::StringPiece as_string);
std::u16string GetProtocolParseError(base::StringPiece as_string);

enum class AutofocusState {
  kNone = 0,
  kOn,
  kOff,
  kMaxValue = kOff,
};


const char* ToString(AutofocusState as_enum);
AutofocusState ParseAutofocusState(base::StringPiece as_string);
std::u16string GetAutofocusStateParseError(base::StringPiece as_string);

struct ProtocolConfiguration {
  ProtocolConfiguration();
  ~ProtocolConfiguration();
  ProtocolConfiguration(const ProtocolConfiguration&) = delete;
  ProtocolConfiguration& operator=(const ProtocolConfiguration&) = delete;
  ProtocolConfiguration(ProtocolConfiguration&& rhs) noexcept;
  ProtocolConfiguration& operator=(ProtocolConfiguration&& rhs) noexcept;

  // Populates a ProtocolConfiguration object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProtocolConfiguration& out);

  // Populates a ProtocolConfiguration object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProtocolConfiguration& out);

  // Creates a deep copy of ProtocolConfiguration.
  ProtocolConfiguration Clone() const;

  // Creates a ProtocolConfiguration object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ProtocolConfiguration> FromValue(const base::Value::Dict& value);

  // Creates a ProtocolConfiguration object from a base::Value, or nullopt on
  // failure.
  static std::optional<ProtocolConfiguration> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProtocolConfiguration object.
  base::Value::Dict ToValue() const;

  Protocol protocol;

};

struct WebcamConfiguration {
  WebcamConfiguration();
  ~WebcamConfiguration();
  WebcamConfiguration(const WebcamConfiguration&) = delete;
  WebcamConfiguration& operator=(const WebcamConfiguration&) = delete;
  WebcamConfiguration(WebcamConfiguration&& rhs) noexcept;
  WebcamConfiguration& operator=(WebcamConfiguration&& rhs) noexcept;

  // Populates a WebcamConfiguration object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WebcamConfiguration& out);

  // Populates a WebcamConfiguration object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WebcamConfiguration& out);

  // Creates a deep copy of WebcamConfiguration.
  WebcamConfiguration Clone() const;

  // Creates a WebcamConfiguration object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<WebcamConfiguration> FromValue(const base::Value::Dict& value);

  // Creates a WebcamConfiguration object from a base::Value, or nullopt on
  // failure.
  static std::optional<WebcamConfiguration> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWebcamConfiguration object.
  base::Value::Dict ToValue() const;

  std::optional<double> pan;

  std::optional<double> pan_speed;

  PanDirection pan_direction;

  std::optional<double> tilt;

  std::optional<double> tilt_speed;

  TiltDirection tilt_direction;

  std::optional<double> zoom;

  AutofocusState autofocus_state;

  std::optional<double> focus;

};

struct Range {
  Range();
  ~Range();
  Range(const Range&) = delete;
  Range& operator=(const Range&) = delete;
  Range(Range&& rhs) noexcept;
  Range& operator=(Range&& rhs) noexcept;

  // Populates a Range object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Range& out);

  // Populates a Range object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Range& out);

  // Creates a deep copy of Range.
  Range Clone() const;

  // Creates a Range object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Range> FromValue(const base::Value::Dict& value);

  // Creates a Range object from a base::Value, or nullopt on failure.
  static std::optional<Range> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRange object.
  base::Value::Dict ToValue() const;

  double min;

  double max;

};

struct WebcamCurrentConfiguration {
  WebcamCurrentConfiguration();
  ~WebcamCurrentConfiguration();
  WebcamCurrentConfiguration(const WebcamCurrentConfiguration&) = delete;
  WebcamCurrentConfiguration& operator=(const WebcamCurrentConfiguration&) = delete;
  WebcamCurrentConfiguration(WebcamCurrentConfiguration&& rhs) noexcept;
  WebcamCurrentConfiguration& operator=(WebcamCurrentConfiguration&& rhs) noexcept;

  // Populates a WebcamCurrentConfiguration object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, WebcamCurrentConfiguration& out);

  // Populates a WebcamCurrentConfiguration object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, WebcamCurrentConfiguration& out);

  // Creates a deep copy of WebcamCurrentConfiguration.
  WebcamCurrentConfiguration Clone() const;

  // Creates a WebcamCurrentConfiguration object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<WebcamCurrentConfiguration> FromValue(const base::Value::Dict& value);

  // Creates a WebcamCurrentConfiguration object from a base::Value, or nullopt
  // on failure.
  static std::optional<WebcamCurrentConfiguration> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisWebcamCurrentConfiguration object.
  base::Value::Dict ToValue() const;

  double pan;

  double tilt;

  double zoom;

  double focus;

  // Supported range of pan, tilt and zoom values.
  std::optional<Range> pan_range;

  std::optional<Range> tilt_range;

  std::optional<Range> zoom_range;

  std::optional<Range> focus_range;

};


//
// Functions
//

namespace OpenSerialWebcam {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string path;

  ProtocolConfiguration protocol;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& webcam_id);
}  // namespace Results

}  // namespace OpenSerialWebcam

namespace CloseWebcam {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string webcam_id;


 private:
  Params();
};

}  // namespace CloseWebcam

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string webcam_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const WebcamCurrentConfiguration& configuration);
}  // namespace Results

}  // namespace Get

namespace Set {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string webcam_id;

  WebcamConfiguration config;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const WebcamCurrentConfiguration& configuration);
}  // namespace Results

}  // namespace Set

namespace Reset {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string webcam_id;

  WebcamConfiguration config;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const WebcamCurrentConfiguration& configuration);
}  // namespace Results

}  // namespace Reset

namespace SetHome {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string webcam_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const WebcamCurrentConfiguration& configuration);
}  // namespace Results

}  // namespace SetHome

namespace RestoreCameraPreset {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string webcam_id;

  double preset_number;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const WebcamCurrentConfiguration& configuration);
}  // namespace Results

}  // namespace RestoreCameraPreset

namespace SetCameraPreset {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string webcam_id;

  double preset_number;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const WebcamCurrentConfiguration& configuration);
}  // namespace Results

}  // namespace SetCameraPreset

}  // namespace webcam_private
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_WEBCAM_PRIVATE_H__
