// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_DEVICE_ACCESS_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_DEVICE_ACCESS_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_device_access.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {




template <>
struct FromValue<device_access::PromptDevice> {
  static std::unique_ptr<device_access::PromptDevice> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::PromptDevice::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::PromptDevice& value) {
  return value.Serialize();
}


template <>
struct FromValue<device_access::EnableParams> {
  static std::unique_ptr<device_access::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<device_access::EnableResult> {
  static std::unique_ptr<device_access::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<device_access::DisableParams> {
  static std::unique_ptr<device_access::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<device_access::DisableResult> {
  static std::unique_ptr<device_access::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::DisableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<device_access::SelectPromptParams> {
  static std::unique_ptr<device_access::SelectPromptParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::SelectPromptParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::SelectPromptParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<device_access::SelectPromptResult> {
  static std::unique_ptr<device_access::SelectPromptResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::SelectPromptResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::SelectPromptResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<device_access::CancelPromptParams> {
  static std::unique_ptr<device_access::CancelPromptParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::CancelPromptParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::CancelPromptParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<device_access::CancelPromptResult> {
  static std::unique_ptr<device_access::CancelPromptResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::CancelPromptResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::CancelPromptResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<device_access::DeviceRequestPromptedParams> {
  static std::unique_ptr<device_access::DeviceRequestPromptedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return device_access::DeviceRequestPromptedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const device_access::DeviceRequestPromptedParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_DEVICE_ACCESS_H_
