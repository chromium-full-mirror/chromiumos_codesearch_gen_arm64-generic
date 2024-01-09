// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/extension_types.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/extension_types.h"

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
namespace extension_types {
//
// Types
//

const char* ToString(ImageFormat enum_param) {
  switch (enum_param) {
    case ImageFormat::kJpeg:
      return "jpeg";
    case ImageFormat::kPng:
      return "png";
    case ImageFormat::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ImageFormat ParseImageFormat(base::StringPiece enum_string) {
  if (enum_string == "jpeg")
    return ImageFormat::kJpeg;
  if (enum_string == "png")
    return ImageFormat::kPng;
  return ImageFormat::kNone;
}

std::u16string GetImageFormatParseError(base::StringPiece enum_string) {
  return u"expected \"jpeg\" or \"png\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


ImageDetails::ImageDetails()
: format() {}

ImageDetails::~ImageDetails() = default;
ImageDetails::ImageDetails(ImageDetails&& rhs) noexcept = default;
ImageDetails& ImageDetails::operator=(ImageDetails&& rhs) noexcept = default;
ImageDetails ImageDetails::Clone() const {
  ImageDetails out;
  out.format = format;
  out.quality = quality;
  return out;
}

// static
bool ImageDetails::Populate(
    const base::Value::Dict& dict, ImageDetails& out) {
  out.format = ImageFormat();
  const base::Value* format_value = dict.Find("format");
  if (format_value) {
    {
      const std::string* image_format_as_string = (*format_value).GetIfString();
      if (!image_format_as_string) {
        return false;
      }
      out.format = ParseImageFormat(*image_format_as_string);
      if (out.format == ImageFormat()) {
        return false;
      }
    }
    } else {
    out.format = ImageFormat();
  }

  const base::Value* quality_value = dict.Find("quality");
  if (quality_value) {
    {
      auto temp = (*quality_value).GetIfInt();
      if (!temp.has_value()) {
        out.quality = std::nullopt;
        return false;
      }
      out.quality = *temp;
    }
  }

  return true;
}

// static
bool ImageDetails::Populate(
    const base::Value& value, ImageDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<ImageDetails> ImageDetails::FromValue(const base::Value::Dict& value) {
  ImageDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<ImageDetails> ImageDetails::FromValue(const base::Value& value) {
  ImageDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict ImageDetails::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->format != ImageFormat()) {
    to_value_result.Set("format", extension_types::ToString(this->format));

  }
  if (this->quality) {
    to_value_result.Set("quality", *this->quality);

  }

  return to_value_result;
}


const char* ToString(RunAt enum_param) {
  switch (enum_param) {
    case RunAt::kDocumentStart:
      return "document_start";
    case RunAt::kDocumentEnd:
      return "document_end";
    case RunAt::kDocumentIdle:
      return "document_idle";
    case RunAt::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RunAt ParseRunAt(base::StringPiece enum_string) {
  if (enum_string == "document_start")
    return RunAt::kDocumentStart;
  if (enum_string == "document_end")
    return RunAt::kDocumentEnd;
  if (enum_string == "document_idle")
    return RunAt::kDocumentIdle;
  return RunAt::kNone;
}

std::u16string GetRunAtParseError(base::StringPiece enum_string) {
  return u"expected \"document_start\" or \"document_end\" or \"document_idle\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(CSSOrigin enum_param) {
  switch (enum_param) {
    case CSSOrigin::kAuthor:
      return "author";
    case CSSOrigin::kUser:
      return "user";
    case CSSOrigin::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

CSSOrigin ParseCSSOrigin(base::StringPiece enum_string) {
  if (enum_string == "author")
    return CSSOrigin::kAuthor;
  if (enum_string == "user")
    return CSSOrigin::kUser;
  return CSSOrigin::kNone;
}

std::u16string GetCSSOriginParseError(base::StringPiece enum_string) {
  return u"expected \"author\" or \"user\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


InjectDetails::InjectDetails()
: run_at(),
css_origin() {}

InjectDetails::~InjectDetails() = default;
InjectDetails::InjectDetails(InjectDetails&& rhs) noexcept = default;
InjectDetails& InjectDetails::operator=(InjectDetails&& rhs) noexcept = default;
InjectDetails InjectDetails::Clone() const {
  InjectDetails out;
  out.code = code;
  out.file = file;
  out.all_frames = all_frames;
  out.frame_id = frame_id;
  out.match_about_blank = match_about_blank;
  out.run_at = run_at;
  out.css_origin = css_origin;
  return out;
}

// static
bool InjectDetails::Populate(
    const base::Value::Dict& dict, InjectDetails& out) {
  out.run_at = RunAt();
  out.css_origin = CSSOrigin();
  const base::Value* code_value = dict.Find("code");
  if (code_value) {
    {
      auto* temp = (*code_value).GetIfString();
      if (!temp) {
        out.code = std::nullopt;
        return false;
      }
      out.code = *temp;
    }
  }

  const base::Value* file_value = dict.Find("file");
  if (file_value) {
    {
      auto* temp = (*file_value).GetIfString();
      if (!temp) {
        out.file = std::nullopt;
        return false;
      }
      out.file = *temp;
    }
  }

  const base::Value* all_frames_value = dict.Find("allFrames");
  if (all_frames_value) {
    {
      auto temp = (*all_frames_value).GetIfBool();
      if (!temp.has_value()) {
        out.all_frames = std::nullopt;
        return false;
      }
      out.all_frames = *temp;
    }
  }

  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    {
      auto temp = (*frame_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.frame_id = std::nullopt;
        return false;
      }
      out.frame_id = *temp;
    }
  }

  const base::Value* match_about_blank_value = dict.Find("matchAboutBlank");
  if (match_about_blank_value) {
    {
      auto temp = (*match_about_blank_value).GetIfBool();
      if (!temp.has_value()) {
        out.match_about_blank = std::nullopt;
        return false;
      }
      out.match_about_blank = *temp;
    }
  }

  const base::Value* run_at_value = dict.Find("runAt");
  if (run_at_value) {
    {
      const std::string* run_at_as_string = (*run_at_value).GetIfString();
      if (!run_at_as_string) {
        return false;
      }
      out.run_at = ParseRunAt(*run_at_as_string);
      if (out.run_at == RunAt()) {
        return false;
      }
    }
    } else {
    out.run_at = RunAt();
  }

  const base::Value* css_origin_value = dict.Find("cssOrigin");
  if (css_origin_value) {
    {
      const std::string* css_origin_as_string = (*css_origin_value).GetIfString();
      if (!css_origin_as_string) {
        return false;
      }
      out.css_origin = ParseCSSOrigin(*css_origin_as_string);
      if (out.css_origin == CSSOrigin()) {
        return false;
      }
    }
    } else {
    out.css_origin = CSSOrigin();
  }

  return true;
}

// static
bool InjectDetails::Populate(
    const base::Value& value, InjectDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<InjectDetails> InjectDetails::FromValue(const base::Value::Dict& value) {
  InjectDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<InjectDetails> InjectDetails::FromValue(const base::Value& value) {
  InjectDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict InjectDetails::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->code) {
    to_value_result.Set("code", *this->code);

  }
  if (this->file) {
    to_value_result.Set("file", *this->file);

  }
  if (this->all_frames) {
    to_value_result.Set("allFrames", *this->all_frames);

  }
  if (this->frame_id) {
    to_value_result.Set("frameId", *this->frame_id);

  }
  if (this->match_about_blank) {
    to_value_result.Set("matchAboutBlank", *this->match_about_blank);

  }
  if (this->run_at != RunAt()) {
    to_value_result.Set("runAt", extension_types::ToString(this->run_at));

  }
  if (this->css_origin != CSSOrigin()) {
    to_value_result.Set("cssOrigin", extension_types::ToString(this->css_origin));

  }

  return to_value_result;
}


DeleteInjectionDetails::DeleteInjectionDetails()
: css_origin() {}

DeleteInjectionDetails::~DeleteInjectionDetails() = default;
DeleteInjectionDetails::DeleteInjectionDetails(DeleteInjectionDetails&& rhs) noexcept = default;
DeleteInjectionDetails& DeleteInjectionDetails::operator=(DeleteInjectionDetails&& rhs) noexcept = default;
DeleteInjectionDetails DeleteInjectionDetails::Clone() const {
  DeleteInjectionDetails out;
  out.code = code;
  out.file = file;
  out.all_frames = all_frames;
  out.frame_id = frame_id;
  out.match_about_blank = match_about_blank;
  out.css_origin = css_origin;
  return out;
}

// static
bool DeleteInjectionDetails::Populate(
    const base::Value::Dict& dict, DeleteInjectionDetails& out) {
  out.css_origin = CSSOrigin();
  const base::Value* code_value = dict.Find("code");
  if (code_value) {
    {
      auto* temp = (*code_value).GetIfString();
      if (!temp) {
        out.code = std::nullopt;
        return false;
      }
      out.code = *temp;
    }
  }

  const base::Value* file_value = dict.Find("file");
  if (file_value) {
    {
      auto* temp = (*file_value).GetIfString();
      if (!temp) {
        out.file = std::nullopt;
        return false;
      }
      out.file = *temp;
    }
  }

  const base::Value* all_frames_value = dict.Find("allFrames");
  if (all_frames_value) {
    {
      auto temp = (*all_frames_value).GetIfBool();
      if (!temp.has_value()) {
        out.all_frames = std::nullopt;
        return false;
      }
      out.all_frames = *temp;
    }
  }

  const base::Value* frame_id_value = dict.Find("frameId");
  if (frame_id_value) {
    {
      auto temp = (*frame_id_value).GetIfInt();
      if (!temp.has_value()) {
        out.frame_id = std::nullopt;
        return false;
      }
      out.frame_id = *temp;
    }
  }

  const base::Value* match_about_blank_value = dict.Find("matchAboutBlank");
  if (match_about_blank_value) {
    {
      auto temp = (*match_about_blank_value).GetIfBool();
      if (!temp.has_value()) {
        out.match_about_blank = std::nullopt;
        return false;
      }
      out.match_about_blank = *temp;
    }
  }

  const base::Value* css_origin_value = dict.Find("cssOrigin");
  if (css_origin_value) {
    {
      const std::string* css_origin_as_string = (*css_origin_value).GetIfString();
      if (!css_origin_as_string) {
        return false;
      }
      out.css_origin = ParseCSSOrigin(*css_origin_as_string);
      if (out.css_origin == CSSOrigin()) {
        return false;
      }
    }
    } else {
    out.css_origin = CSSOrigin();
  }

  return true;
}

// static
bool DeleteInjectionDetails::Populate(
    const base::Value& value, DeleteInjectionDetails& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<DeleteInjectionDetails> DeleteInjectionDetails::FromValue(const base::Value::Dict& value) {
  DeleteInjectionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<DeleteInjectionDetails> DeleteInjectionDetails::FromValue(const base::Value& value) {
  DeleteInjectionDetails out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict DeleteInjectionDetails::ToValue() const {
  base::Value::Dict to_value_result;

  if (this->code) {
    to_value_result.Set("code", *this->code);

  }
  if (this->file) {
    to_value_result.Set("file", *this->file);

  }
  if (this->all_frames) {
    to_value_result.Set("allFrames", *this->all_frames);

  }
  if (this->frame_id) {
    to_value_result.Set("frameId", *this->frame_id);

  }
  if (this->match_about_blank) {
    to_value_result.Set("matchAboutBlank", *this->match_about_blank);

  }
  if (this->css_origin != CSSOrigin()) {
    to_value_result.Set("cssOrigin", extension_types::ToString(this->css_origin));

  }

  return to_value_result;
}


const char* ToString(FrameType enum_param) {
  switch (enum_param) {
    case FrameType::kOutermostFrame:
      return "outermost_frame";
    case FrameType::kFencedFrame:
      return "fenced_frame";
    case FrameType::kSubFrame:
      return "sub_frame";
    case FrameType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

FrameType ParseFrameType(base::StringPiece enum_string) {
  if (enum_string == "outermost_frame")
    return FrameType::kOutermostFrame;
  if (enum_string == "fenced_frame")
    return FrameType::kFencedFrame;
  if (enum_string == "sub_frame")
    return FrameType::kSubFrame;
  return FrameType::kNone;
}

std::u16string GetFrameTypeParseError(base::StringPiece enum_string) {
  return u"expected \"outermost_frame\" or \"fenced_frame\" or \"sub_frame\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DocumentLifecycle enum_param) {
  switch (enum_param) {
    case DocumentLifecycle::kPrerender:
      return "prerender";
    case DocumentLifecycle::kActive:
      return "active";
    case DocumentLifecycle::kCached:
      return "cached";
    case DocumentLifecycle::kPendingDeletion:
      return "pending_deletion";
    case DocumentLifecycle::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DocumentLifecycle ParseDocumentLifecycle(base::StringPiece enum_string) {
  if (enum_string == "prerender")
    return DocumentLifecycle::kPrerender;
  if (enum_string == "active")
    return DocumentLifecycle::kActive;
  if (enum_string == "cached")
    return DocumentLifecycle::kCached;
  if (enum_string == "pending_deletion")
    return DocumentLifecycle::kPendingDeletion;
  return DocumentLifecycle::kNone;
}

std::u16string GetDocumentLifecycleParseError(base::StringPiece enum_string) {
  return u"expected \"prerender\" or \"active\" or \"cached\" or \"pending_deletion\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ExecutionWorld enum_param) {
  switch (enum_param) {
    case ExecutionWorld::kIsolated:
      return "ISOLATED";
    case ExecutionWorld::kMain:
      return "MAIN";
    case ExecutionWorld::kUserScript:
      return "USER_SCRIPT";
    case ExecutionWorld::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ExecutionWorld ParseExecutionWorld(base::StringPiece enum_string) {
  if (enum_string == "ISOLATED")
    return ExecutionWorld::kIsolated;
  if (enum_string == "MAIN")
    return ExecutionWorld::kMain;
  if (enum_string == "USER_SCRIPT")
    return ExecutionWorld::kUserScript;
  return ExecutionWorld::kNone;
}

std::u16string GetExecutionWorldParseError(base::StringPiece enum_string) {
  return u"expected \"ISOLATED\" or \"MAIN\" or \"USER_SCRIPT\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}



}  // namespace extension_types
}  // namespace api
}  // namespace extensions

