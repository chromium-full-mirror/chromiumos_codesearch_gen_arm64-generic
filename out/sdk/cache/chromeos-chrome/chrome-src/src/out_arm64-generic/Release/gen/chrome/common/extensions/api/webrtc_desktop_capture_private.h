// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/webrtc_desktop_capture_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_WEBRTC_DESKTOP_CAPTURE_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_WEBRTC_DESKTOP_CAPTURE_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace webrtc_desktop_capture_private {

//
// Types
//

struct RequestInfo {
  RequestInfo();
  ~RequestInfo();
  RequestInfo(const RequestInfo&) = delete;
  RequestInfo& operator=(const RequestInfo&) = delete;
  RequestInfo(RequestInfo&& rhs);
  RequestInfo& operator=(RequestInfo&& rhs);

  // Populates a RequestInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestInfo& out);

  // Populates a RequestInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, RequestInfo& out);

  // Creates a deep copy of RequestInfo.
  RequestInfo Clone() const;

  // Creates a RequestInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<RequestInfo> FromValueDeprecated(const base::Value& value);

  // Creates a RequestInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RequestInfo> FromValue(const base::Value::Dict& value);

  // Creates a RequestInfo object from a base::Value, or nullopt on failure.
  static absl::optional<RequestInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRequestInfo object.
  base::Value::Dict ToValue() const;

  // The guest process id for the requester.
  int guest_process_id;

  // The webview render frame id for the requester.
  int guest_render_frame_id;

};

enum  DesktopCaptureSourceType {
  DESKTOP_CAPTURE_SOURCE_TYPE_NONE = 0,
  DESKTOP_CAPTURE_SOURCE_TYPE_SCREEN,
  DESKTOP_CAPTURE_SOURCE_TYPE_WINDOW,
  DESKTOP_CAPTURE_SOURCE_TYPE_TAB,
  DESKTOP_CAPTURE_SOURCE_TYPE_LAST = DESKTOP_CAPTURE_SOURCE_TYPE_TAB,
};


const char* ToString(DesktopCaptureSourceType as_enum);
DesktopCaptureSourceType ParseDesktopCaptureSourceType(base::StringPiece as_string);
std::u16string GetDesktopCaptureSourceTypeParseError(base::StringPiece as_string);


//
// Functions
//

namespace ChooseDesktopMedia {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::vector<DesktopCaptureSourceType> sources;

  RequestInfo request;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& stream_id);
}  // namespace Results

}  // namespace ChooseDesktopMedia

namespace CancelChooseDesktopMedia {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int desktop_media_request_id;


 private:
  Params();
};

}  // namespace CancelChooseDesktopMedia

}  // namespace webrtc_desktop_capture_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_WEBRTC_DESKTOP_CAPTURE_PRIVATE_H__
