// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_INSPECTOR_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_INSPECTOR_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_inspector.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace inspector {

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


// Parameters for the Enable command.
class HEADLESS_EXPORT EnableParams {
 public:
  static std::unique_ptr<EnableParams> Parse(const base::Value& value, ErrorReporter* errors);

  EnableParams(const EnableParams&) = delete;
  EnableParams& operator=(const EnableParams&) = delete;

  ~EnableParams() { }


  base::Value Serialize() const;
  std::unique_ptr<EnableParams> Clone() const;

  template<int STATE>
  class EnableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<EnableParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EnableParams;
    EnableParamsBuilder() : result_(new EnableParams()) { }

    template<int STEP> EnableParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EnableParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EnableParams> result_;
  };

  static EnableParamsBuilder<0> Builder() {
    return EnableParamsBuilder<0>();
  }

 private:
  EnableParams() { }

};


// Result for the Enable command.
class HEADLESS_EXPORT EnableResult {
 public:
  static std::unique_ptr<EnableResult> Parse(const base::Value& value, ErrorReporter* errors);

  EnableResult(const EnableResult&) = delete;
  EnableResult& operator=(const EnableResult&) = delete;

  ~EnableResult() { }


  base::Value Serialize() const;
  std::unique_ptr<EnableResult> Clone() const;

  template<int STATE>
  class EnableResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<EnableResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EnableResult;
    EnableResultBuilder() : result_(new EnableResult()) { }

    template<int STEP> EnableResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EnableResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EnableResult> result_;
  };

  static EnableResultBuilder<0> Builder() {
    return EnableResultBuilder<0>();
  }

 private:
  EnableResult() { }

};


// Parameters for the Detached event.
class HEADLESS_EXPORT DetachedParams {
 public:
  static std::unique_ptr<DetachedParams> Parse(const base::Value& value, ErrorReporter* errors);

  DetachedParams(const DetachedParams&) = delete;
  DetachedParams& operator=(const DetachedParams&) = delete;

  ~DetachedParams() { }


  // The reason why connection has been terminated.
  std::string GetReason() const { return reason_; }
  void SetReason(const std::string& value) { reason_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<DetachedParams> Clone() const;

  template<int STATE>
  class DetachedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kReasonSet = 1 << 1,
      kAllRequiredFieldsSet = (kReasonSet | 0)
    };

    DetachedParamsBuilder<STATE | kReasonSet>& SetReason(const std::string& value) {
      static_assert(!(STATE & kReasonSet), "property reason should not have already been set");
      result_->SetReason(value);
      return CastState<kReasonSet>();
    }

    std::unique_ptr<DetachedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class DetachedParams;
    DetachedParamsBuilder() : result_(new DetachedParams()) { }

    template<int STEP> DetachedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<DetachedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<DetachedParams> result_;
  };

  static DetachedParamsBuilder<0> Builder() {
    return DetachedParamsBuilder<0>();
  }

 private:
  DetachedParams() { }

  std::string reason_;
};


// Parameters for the TargetCrashed event.
class HEADLESS_EXPORT TargetCrashedParams {
 public:
  static std::unique_ptr<TargetCrashedParams> Parse(const base::Value& value, ErrorReporter* errors);

  TargetCrashedParams(const TargetCrashedParams&) = delete;
  TargetCrashedParams& operator=(const TargetCrashedParams&) = delete;

  ~TargetCrashedParams() { }


  base::Value Serialize() const;
  std::unique_ptr<TargetCrashedParams> Clone() const;

  template<int STATE>
  class TargetCrashedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<TargetCrashedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TargetCrashedParams;
    TargetCrashedParamsBuilder() : result_(new TargetCrashedParams()) { }

    template<int STEP> TargetCrashedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TargetCrashedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TargetCrashedParams> result_;
  };

  static TargetCrashedParamsBuilder<0> Builder() {
    return TargetCrashedParamsBuilder<0>();
  }

 private:
  TargetCrashedParams() { }

};


// Parameters for the TargetReloadedAfterCrash event.
class HEADLESS_EXPORT TargetReloadedAfterCrashParams {
 public:
  static std::unique_ptr<TargetReloadedAfterCrashParams> Parse(const base::Value& value, ErrorReporter* errors);

  TargetReloadedAfterCrashParams(const TargetReloadedAfterCrashParams&) = delete;
  TargetReloadedAfterCrashParams& operator=(const TargetReloadedAfterCrashParams&) = delete;

  ~TargetReloadedAfterCrashParams() { }


  base::Value Serialize() const;
  std::unique_ptr<TargetReloadedAfterCrashParams> Clone() const;

  template<int STATE>
  class TargetReloadedAfterCrashParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<TargetReloadedAfterCrashParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TargetReloadedAfterCrashParams;
    TargetReloadedAfterCrashParamsBuilder() : result_(new TargetReloadedAfterCrashParams()) { }

    template<int STEP> TargetReloadedAfterCrashParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TargetReloadedAfterCrashParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TargetReloadedAfterCrashParams> result_;
  };

  static TargetReloadedAfterCrashParamsBuilder<0> Builder() {
    return TargetReloadedAfterCrashParamsBuilder<0>();
  }

 private:
  TargetReloadedAfterCrashParams() { }

};


}  // namespace inspector

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_INSPECTOR_H_
