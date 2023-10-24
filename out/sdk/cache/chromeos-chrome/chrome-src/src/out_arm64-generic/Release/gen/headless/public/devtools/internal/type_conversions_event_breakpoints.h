// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_EVENT_BREAKPOINTS_H_
#define HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_EVENT_BREAKPOINTS_H_

#include "base/notreached.h"
#include "base/values.h"
#include "headless/public/devtools/domains/types_event_breakpoints.h"
#include "headless/public/internal/value_conversions.h"

namespace headless {
namespace internal {


template <>
struct FromValue<event_breakpoints::SetInstrumentationBreakpointParams> {
  static std::unique_ptr<event_breakpoints::SetInstrumentationBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return event_breakpoints::SetInstrumentationBreakpointParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const event_breakpoints::SetInstrumentationBreakpointParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<event_breakpoints::SetInstrumentationBreakpointResult> {
  static std::unique_ptr<event_breakpoints::SetInstrumentationBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return event_breakpoints::SetInstrumentationBreakpointResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const event_breakpoints::SetInstrumentationBreakpointResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<event_breakpoints::RemoveInstrumentationBreakpointParams> {
  static std::unique_ptr<event_breakpoints::RemoveInstrumentationBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return event_breakpoints::RemoveInstrumentationBreakpointParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const event_breakpoints::RemoveInstrumentationBreakpointParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<event_breakpoints::RemoveInstrumentationBreakpointResult> {
  static std::unique_ptr<event_breakpoints::RemoveInstrumentationBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return event_breakpoints::RemoveInstrumentationBreakpointResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const event_breakpoints::RemoveInstrumentationBreakpointResult& value) {
  return value.Serialize();
}


template <>
struct FromValue<event_breakpoints::DisableParams> {
  static std::unique_ptr<event_breakpoints::DisableParams> Parse(const base::Value& value, ErrorReporter* errors) {
    return event_breakpoints::DisableParams::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const event_breakpoints::DisableParams& value) {
  return value.Serialize();
}


template <>
struct FromValue<event_breakpoints::DisableResult> {
  static std::unique_ptr<event_breakpoints::DisableResult> Parse(const base::Value& value, ErrorReporter* errors) {
    return event_breakpoints::DisableResult::Parse(value, errors);
  }
};

template <>
inline base::Value ToValue(const event_breakpoints::DisableResult& value) {
  return value.Serialize();
}


}  // namespace internal
}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_INTERNAL_TYPE_CONVERSIONS_EVENT_BREAKPOINTS_H_
