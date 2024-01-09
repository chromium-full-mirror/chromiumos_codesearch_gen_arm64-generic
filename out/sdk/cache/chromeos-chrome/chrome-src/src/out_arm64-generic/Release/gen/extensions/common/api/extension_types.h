// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/extension_types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_EXTENSION_TYPES_H__
#define EXTENSIONS_COMMON_API_EXTENSION_TYPES_H__

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
namespace extension_types {

//
// Types
//

// The format of an image.
enum class ImageFormat {
  kNone = 0,
  kJpeg,
  kPng,
  kMaxValue = kPng,
};


const char* ToString(ImageFormat as_enum);
ImageFormat ParseImageFormat(base::StringPiece as_string);
std::u16string GetImageFormatParseError(base::StringPiece as_string);

// Details about the format and quality of an image.
struct ImageDetails {
  ImageDetails();
  ~ImageDetails();
  ImageDetails(const ImageDetails&) = delete;
  ImageDetails& operator=(const ImageDetails&) = delete;
  ImageDetails(ImageDetails&& rhs) noexcept;
  ImageDetails& operator=(ImageDetails&& rhs) noexcept;

  // Populates a ImageDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ImageDetails& out);

  // Populates a ImageDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ImageDetails& out);

  // Creates a deep copy of ImageDetails.
  ImageDetails Clone() const;

  // Creates a ImageDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ImageDetails> FromValue(const base::Value::Dict& value);

  // Creates a ImageDetails object from a base::Value, or nullopt on failure.
  static std::optional<ImageDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisImageDetails object.
  base::Value::Dict ToValue() const;

  // The format of the resulting image.  Default is <code>"jpeg"</code>.
  ImageFormat format;

  // When format is <code>"jpeg"</code>, controls the quality of the resulting
  // image.  This value is ignored for PNG images.  As quality is decreased, the
  // resulting image will have more visual artifacts, and the number of bytes
  // needed to store it will decrease.
  std::optional<int> quality;

};

// The soonest that the JavaScript or CSS will be injected into the tab.
enum class RunAt {
  kNone = 0,
  kDocumentStart,
  kDocumentEnd,
  kDocumentIdle,
  kMaxValue = kDocumentIdle,
};


const char* ToString(RunAt as_enum);
RunAt ParseRunAt(base::StringPiece as_string);
std::u16string GetRunAtParseError(base::StringPiece as_string);

// The <a
// href="https://www.w3.org/TR/css3-cascade/#cascading-origins">origin</a> of
// injected CSS.
enum class CSSOrigin {
  kNone = 0,
  kAuthor,
  kUser,
  kMaxValue = kUser,
};


const char* ToString(CSSOrigin as_enum);
CSSOrigin ParseCSSOrigin(base::StringPiece as_string);
std::u16string GetCSSOriginParseError(base::StringPiece as_string);

// Details of the script or CSS to inject. Either the code or the file property
// must be set, but both may not be set at the same time.
struct InjectDetails {
  InjectDetails();
  ~InjectDetails();
  InjectDetails(const InjectDetails&) = delete;
  InjectDetails& operator=(const InjectDetails&) = delete;
  InjectDetails(InjectDetails&& rhs) noexcept;
  InjectDetails& operator=(InjectDetails&& rhs) noexcept;

  // Populates a InjectDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InjectDetails& out);

  // Populates a InjectDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InjectDetails& out);

  // Creates a deep copy of InjectDetails.
  InjectDetails Clone() const;

  // Creates a InjectDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<InjectDetails> FromValue(const base::Value::Dict& value);

  // Creates a InjectDetails object from a base::Value, or nullopt on failure.
  static std::optional<InjectDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInjectDetails object.
  base::Value::Dict ToValue() const;

  // JavaScript or CSS code to inject.<br><br><b>Warning:</b><br>Be careful using
  // the <code>code</code> parameter. Incorrect use of it may open your extension
  // to <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">cross site
  // scripting</a> attacks.
  std::optional<std::string> code;

  // JavaScript or CSS file to inject.
  std::optional<std::string> file;

  // If allFrames is <code>true</code>, implies that the JavaScript or CSS should
  // be injected into all frames of current page. By default, it's
  // <code>false</code> and is only injected into the top frame. If
  // <code>true</code> and <code>frameId</code> is set, then the code is inserted
  // in the selected frame and all of its child frames.
  std::optional<bool> all_frames;

  // The <a href='webNavigation#frame_ids'>frame</a> where the script or CSS
  // should be injected. Defaults to 0 (the top-level frame).
  std::optional<int> frame_id;

  // If matchAboutBlank is true, then the code is also injected in about:blank and
  // about:srcdoc frames if your extension has access to its parent document. Code
  // cannot be inserted in top-level about:-frames. By default it is
  // <code>false</code>.
  std::optional<bool> match_about_blank;

  // The soonest that the JavaScript or CSS will be injected into the tab.
  // Defaults to "document_idle".
  RunAt run_at;

  // The <a
  // href="https://www.w3.org/TR/css3-cascade/#cascading-origins">origin</a> of
  // the CSS to inject. This may only be specified for CSS, not JavaScript.
  // Defaults to <code>"author"</code>.
  CSSOrigin css_origin;

};

// Details of the CSS to remove. Either the code or the file property must be
// set, but both may not be set at the same time.
struct DeleteInjectionDetails {
  DeleteInjectionDetails();
  ~DeleteInjectionDetails();
  DeleteInjectionDetails(const DeleteInjectionDetails&) = delete;
  DeleteInjectionDetails& operator=(const DeleteInjectionDetails&) = delete;
  DeleteInjectionDetails(DeleteInjectionDetails&& rhs) noexcept;
  DeleteInjectionDetails& operator=(DeleteInjectionDetails&& rhs) noexcept;

  // Populates a DeleteInjectionDetails object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeleteInjectionDetails& out);

  // Populates a DeleteInjectionDetails object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeleteInjectionDetails& out);

  // Creates a deep copy of DeleteInjectionDetails.
  DeleteInjectionDetails Clone() const;

  // Creates a DeleteInjectionDetails object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<DeleteInjectionDetails> FromValue(const base::Value::Dict& value);

  // Creates a DeleteInjectionDetails object from a base::Value, or nullopt on
  // failure.
  static std::optional<DeleteInjectionDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeleteInjectionDetails object.
  base::Value::Dict ToValue() const;

  // CSS code to remove.
  std::optional<std::string> code;

  // CSS file to remove.
  std::optional<std::string> file;

  // If allFrames is <code>true</code>, implies that the CSS should be removed
  // from all frames of current page. By default, it's <code>false</code> and is
  // only removed from the top frame. If <code>true</code> and
  // <code>frameId</code> is set, then the code is removed from the selected frame
  // and all of its child frames.
  std::optional<bool> all_frames;

  // The <a href='webNavigation#frame_ids'>frame</a> from where the CSS should be
  // removed. Defaults to 0 (the top-level frame).
  std::optional<int> frame_id;

  // If matchAboutBlank is true, then the code is also removed from about:blank
  // and about:srcdoc frames if your extension has access to its parent document.
  // By default it is <code>false</code>.
  std::optional<bool> match_about_blank;

  // The <a
  // href="https://www.w3.org/TR/css3-cascade/#cascading-origins">origin</a> of
  // the CSS to remove. Defaults to <code>"author"</code>.
  CSSOrigin css_origin;

};

// The type of frame.
enum class FrameType {
  kNone = 0,
  kOutermostFrame,
  kFencedFrame,
  kSubFrame,
  kMaxValue = kSubFrame,
};


const char* ToString(FrameType as_enum);
FrameType ParseFrameType(base::StringPiece as_string);
std::u16string GetFrameTypeParseError(base::StringPiece as_string);

// The document lifecycle of the frame.
enum class DocumentLifecycle {
  kNone = 0,
  kPrerender,
  kActive,
  kCached,
  kPendingDeletion,
  kMaxValue = kPendingDeletion,
};


const char* ToString(DocumentLifecycle as_enum);
DocumentLifecycle ParseDocumentLifecycle(base::StringPiece as_string);
std::u16string GetDocumentLifecycleParseError(base::StringPiece as_string);

// The JavaScript world for a script to execute within. Can either be an
// isolated world unique to this extension, the main world of the DOM which is
// shared with the page's JavaScript, or a user scripts world that is only
// available for scripts registered with the User Scripts API.
enum class ExecutionWorld {
  kNone = 0,
  kIsolated,
  kMain,
  kUserScript,
  kMaxValue = kUserScript,
};


const char* ToString(ExecutionWorld as_enum);
ExecutionWorld ParseExecutionWorld(base::StringPiece as_string);
std::u16string GetExecutionWorldParseError(base::StringPiece as_string);


}  // namespace extension_types
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_EXTENSION_TYPES_H__
