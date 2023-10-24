// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_EVENT_BREAKPOINTS_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_EVENT_BREAKPOINTS_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_event_breakpoints.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace event_breakpoints {

// Parameters for the SetInstrumentationBreakpoint command.
class HEADLESS_EXPORT SetInstrumentationBreakpointParams {
 public:
  static std::unique_ptr<SetInstrumentationBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetInstrumentationBreakpointParams(const SetInstrumentationBreakpointParams&) = delete;
  SetInstrumentationBreakpointParams& operator=(const SetInstrumentationBreakpointParams&) = delete;

  ~SetInstrumentationBreakpointParams() { }


  // Instrumentation name to stop on.
  std::string GetEventName() const { return event_name_; }
  void SetEventName(const std::string& value) { event_name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetInstrumentationBreakpointParams> Clone() const;

  template<int STATE>
  class SetInstrumentationBreakpointParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEventNameSet = 1 << 1,
      kAllRequiredFieldsSet = (kEventNameSet | 0)
    };

    SetInstrumentationBreakpointParamsBuilder<STATE | kEventNameSet>& SetEventName(const std::string& value) {
      static_assert(!(STATE & kEventNameSet), "property eventName should not have already been set");
      result_->SetEventName(value);
      return CastState<kEventNameSet>();
    }

    std::unique_ptr<SetInstrumentationBreakpointParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetInstrumentationBreakpointParams;
    SetInstrumentationBreakpointParamsBuilder() : result_(new SetInstrumentationBreakpointParams()) { }

    template<int STEP> SetInstrumentationBreakpointParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetInstrumentationBreakpointParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetInstrumentationBreakpointParams> result_;
  };

  static SetInstrumentationBreakpointParamsBuilder<0> Builder() {
    return SetInstrumentationBreakpointParamsBuilder<0>();
  }

 private:
  SetInstrumentationBreakpointParams() { }

  std::string event_name_;
};


// Result for the SetInstrumentationBreakpoint command.
class HEADLESS_EXPORT SetInstrumentationBreakpointResult {
 public:
  static std::unique_ptr<SetInstrumentationBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetInstrumentationBreakpointResult(const SetInstrumentationBreakpointResult&) = delete;
  SetInstrumentationBreakpointResult& operator=(const SetInstrumentationBreakpointResult&) = delete;

  ~SetInstrumentationBreakpointResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetInstrumentationBreakpointResult> Clone() const;

  template<int STATE>
  class SetInstrumentationBreakpointResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetInstrumentationBreakpointResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetInstrumentationBreakpointResult;
    SetInstrumentationBreakpointResultBuilder() : result_(new SetInstrumentationBreakpointResult()) { }

    template<int STEP> SetInstrumentationBreakpointResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetInstrumentationBreakpointResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetInstrumentationBreakpointResult> result_;
  };

  static SetInstrumentationBreakpointResultBuilder<0> Builder() {
    return SetInstrumentationBreakpointResultBuilder<0>();
  }

 private:
  SetInstrumentationBreakpointResult() { }

};


// Parameters for the RemoveInstrumentationBreakpoint command.
class HEADLESS_EXPORT RemoveInstrumentationBreakpointParams {
 public:
  static std::unique_ptr<RemoveInstrumentationBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors);

  RemoveInstrumentationBreakpointParams(const RemoveInstrumentationBreakpointParams&) = delete;
  RemoveInstrumentationBreakpointParams& operator=(const RemoveInstrumentationBreakpointParams&) = delete;

  ~RemoveInstrumentationBreakpointParams() { }


  // Instrumentation name to stop on.
  std::string GetEventName() const { return event_name_; }
  void SetEventName(const std::string& value) { event_name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<RemoveInstrumentationBreakpointParams> Clone() const;

  template<int STATE>
  class RemoveInstrumentationBreakpointParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEventNameSet = 1 << 1,
      kAllRequiredFieldsSet = (kEventNameSet | 0)
    };

    RemoveInstrumentationBreakpointParamsBuilder<STATE | kEventNameSet>& SetEventName(const std::string& value) {
      static_assert(!(STATE & kEventNameSet), "property eventName should not have already been set");
      result_->SetEventName(value);
      return CastState<kEventNameSet>();
    }

    std::unique_ptr<RemoveInstrumentationBreakpointParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RemoveInstrumentationBreakpointParams;
    RemoveInstrumentationBreakpointParamsBuilder() : result_(new RemoveInstrumentationBreakpointParams()) { }

    template<int STEP> RemoveInstrumentationBreakpointParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RemoveInstrumentationBreakpointParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RemoveInstrumentationBreakpointParams> result_;
  };

  static RemoveInstrumentationBreakpointParamsBuilder<0> Builder() {
    return RemoveInstrumentationBreakpointParamsBuilder<0>();
  }

 private:
  RemoveInstrumentationBreakpointParams() { }

  std::string event_name_;
};


// Result for the RemoveInstrumentationBreakpoint command.
class HEADLESS_EXPORT RemoveInstrumentationBreakpointResult {
 public:
  static std::unique_ptr<RemoveInstrumentationBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors);

  RemoveInstrumentationBreakpointResult(const RemoveInstrumentationBreakpointResult&) = delete;
  RemoveInstrumentationBreakpointResult& operator=(const RemoveInstrumentationBreakpointResult&) = delete;

  ~RemoveInstrumentationBreakpointResult() { }


  base::Value Serialize() const;
  std::unique_ptr<RemoveInstrumentationBreakpointResult> Clone() const;

  template<int STATE>
  class RemoveInstrumentationBreakpointResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<RemoveInstrumentationBreakpointResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RemoveInstrumentationBreakpointResult;
    RemoveInstrumentationBreakpointResultBuilder() : result_(new RemoveInstrumentationBreakpointResult()) { }

    template<int STEP> RemoveInstrumentationBreakpointResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RemoveInstrumentationBreakpointResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RemoveInstrumentationBreakpointResult> result_;
  };

  static RemoveInstrumentationBreakpointResultBuilder<0> Builder() {
    return RemoveInstrumentationBreakpointResultBuilder<0>();
  }

 private:
  RemoveInstrumentationBreakpointResult() { }

};


// Parameters for the Disable command.
class HEADLESS_EXPORT DisableParams {
 public:
  static std::unique_ptr<DisableParams> Parse(const base::Value& value, ErrorReporter* errors);

  DisableParams(const DisableParams&) = delete;
  DisableParams& operator=(const DisableParams&) = delete;

  ~DisableParams() { }


  base::Value Serialize() const;
  std::unique_ptr<DisableParams> Clone() const;

  template<int STATE>
  class DisableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DisableParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DisableParams;
    DisableParamsBuilder() : result_(new DisableParams()) { }

    template<int STEP> DisableParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DisableParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DisableParams> result_;
  };

  static DisableParamsBuilder<0> Builder() {
    return DisableParamsBuilder<0>();
  }

 private:
  DisableParams() { }

};


// Result for the Disable command.
class HEADLESS_EXPORT DisableResult {
 public:
  static std::unique_ptr<DisableResult> Parse(const base::Value& value, ErrorReporter* errors);

  DisableResult(const DisableResult&) = delete;
  DisableResult& operator=(const DisableResult&) = delete;

  ~DisableResult() { }


  base::Value Serialize() const;
  std::unique_ptr<DisableResult> Clone() const;

  template<int STATE>
  class DisableResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<DisableResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DisableResult;
    DisableResultBuilder() : result_(new DisableResult()) { }

    template<int STEP> DisableResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DisableResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DisableResult> result_;
  };

  static DisableResultBuilder<0> Builder() {
    return DisableResultBuilder<0>();
  }

 private:
  DisableResult() { }

};


}  // namespace event_breakpoints

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_EVENT_BREAKPOINTS_H_
