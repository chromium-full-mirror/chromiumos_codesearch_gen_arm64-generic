// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_HEADLESS_EXPERIMENTAL_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_HEADLESS_EXPERIMENTAL_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_headless_experimental.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<headless_experimental::ScreenshotParams> {
  static std::unique_ptr<headless_experimental::ScreenshotParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return headless_experimental::ScreenshotParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const headless_experimental::ScreenshotParams& value) {
  return value.Serialize();
}

template <>
struct FromValue<headless_experimental::ScreenshotParamsFormat> {
  static headless_experimental::ScreenshotParamsFormat Parse(const base::Value& value, ErrorReporter* errors) {
    if (!value.is_string()) {
      errors->AddError("string enum value expected");
      return headless_experimental::ScreenshotParamsFormat::JPEG;
    }
    if (value.GetString() == "jpeg")
      return headless_experimental::ScreenshotParamsFormat::JPEG;
    if (value.GetString() == "png")
      return headless_experimental::ScreenshotParamsFormat::PNG;
    if (value.GetString() == "webp")
      return headless_experimental::ScreenshotParamsFormat::WEBP;
    errors->AddError("invalid enum value");
    return headless_experimental::ScreenshotParamsFormat::JPEG;
  }
};

template <>
inline base::Value ToValue(const headless_experimental::ScreenshotParamsFormat& value) {
  switch (value) {
    case headless_experimental::ScreenshotParamsFormat::JPEG:
      return base::Value("jpeg");
    case headless_experimental::ScreenshotParamsFormat::PNG:
      return base::Value("png");
    case headless_experimental::ScreenshotParamsFormat::WEBP:
      return base::Value("webp");
  };
  NOTREACHED();
  return base::Value();
}

template <>
struct FromValue<headless_experimental::BeginFrameParams> {
  static std::unique_ptr<headless_experimental::BeginFrameParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return headless_experimental::BeginFrameParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const headless_experimental::BeginFrameParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<headless_experimental::BeginFrameResult> {
  static std::unique_ptr<headless_experimental::BeginFrameResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return headless_experimental::BeginFrameResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const headless_experimental::BeginFrameResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<headless_experimental::DisableParams> {
  static std::unique_ptr<headless_experimental::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return headless_experimental::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const headless_experimental::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<headless_experimental::DisableResult> {
  static std::unique_ptr<headless_experimental::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return headless_experimental::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const headless_experimental::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<headless_experimental::EnableParams> {
  static std::unique_ptr<headless_experimental::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return headless_experimental::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const headless_experimental::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<headless_experimental::EnableResult> {
  static std::unique_ptr<headless_experimental::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return headless_experimental::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const headless_experimental::EnableResult& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_HEADLESS_EXPERIMENTAL_H_
