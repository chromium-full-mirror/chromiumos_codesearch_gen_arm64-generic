// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_PERFORMANCE_TIMELINE_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_PERFORMANCE_TIMELINE_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_performance_timeline.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<performance_timeline::LargestContentfulPaint> {
  static std::unique_ptr<performance_timeline::LargestContentfulPaint> Parse(const base::Value& value, ErrorReporter* errors) {
    return performance_timeline::LargestContentfulPaint::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const performance_timeline::LargestContentfulPaint& value) {
  return value.Serialize();
}


template <>
struct FromValue<performance_timeline::LayoutShiftAttribution> {
  static std::unique_ptr<performance_timeline::LayoutShiftAttribution> Parse(const base::Value& value, ErrorReporter* errors) {
    return performance_timeline::LayoutShiftAttribution::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const performance_timeline::LayoutShiftAttribution& value) {
  return value.Serialize();
}


template <>
struct FromValue<performance_timeline::LayoutShift> {
  static std::unique_ptr<performance_timeline::LayoutShift> Parse(const base::Value& value, ErrorReporter* errors) {
    return performance_timeline::LayoutShift::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const performance_timeline::LayoutShift& value) {
  return value.Serialize();
}


template <>
struct FromValue<performance_timeline::TimelineEvent> {
  static std::unique_ptr<performance_timeline::TimelineEvent> Parse(const base::Value& value, ErrorReporter* errors) {
    return performance_timeline::TimelineEvent::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const performance_timeline::TimelineEvent& value) {
  return value.Serialize();
}


template <>
struct FromValue<performance_timeline::EnableParams> {
  static std::unique_ptr<performance_timeline::EnableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return performance_timeline::EnableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const performance_timeline::EnableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<performance_timeline::EnableResult> {
  static std::unique_ptr<performance_timeline::EnableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return performance_timeline::EnableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const performance_timeline::EnableResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<performance_timeline::TimelineEventAddedParams> {
  static std::unique_ptr<performance_timeline::TimelineEventAddedParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return performance_timeline::TimelineEventAddedParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const performance_timeline::TimelineEventAddedParams& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_PERFORMANCE_TIMELINE_H_
