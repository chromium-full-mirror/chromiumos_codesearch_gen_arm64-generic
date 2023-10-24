// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_PERFORMANCE_TIMELINE_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_PERFORMANCE_TIMELINE_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_dom.h"
#include "headless/public/devtools/internal/types_forward_declarations_debugger.h"
#include "headless/public/devtools/internal/types_forward_declarations_emulation.h"
#include "headless/public/devtools/internal/types_forward_declarations_io.h"
#include "headless/public/devtools/internal/types_forward_declarations_network.h"
#include "headless/public/devtools/internal/types_forward_declarations_page.h"
#include "headless/public/devtools/internal/types_forward_declarations_performance_timeline.h"
#include "headless/public/devtools/internal/types_forward_declarations_runtime.h"
#include "headless/public/devtools/internal/types_forward_declarations_security.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace performance_timeline {

// See https://github.com/WICG/LargestContentfulPaint and largest_contentful_paint.idl
class HEADLESS_EXPORT LargestContentfulPaint {
 public:
  static std::unique_ptr<LargestContentfulPaint> Parse(const base::Value& value, ErrorReporter* errors);

  LargestContentfulPaint(const LargestContentfulPaint&) = delete;
  LargestContentfulPaint& operator=(const LargestContentfulPaint&) = delete;

  ~LargestContentfulPaint() { }


  double GetRenderTime() const { return render_time_; }
  void SetRenderTime(double value) { render_time_ = value; }

  double GetLoadTime() const { return load_time_; }
  void SetLoadTime(double value) { load_time_ = value; }

  // The number of pixels being painted.
  double GetSize() const { return size_; }
  void SetSize(double value) { size_ = value; }

  // The id attribute of the element, if available.
  bool HasElementId() const { return !!element_id_; }
  std::string GetElementId() const { DCHECK(HasElementId()); return element_id_.value(); }
  void SetElementId(const std::string& value) { element_id_ = value; }

  // The URL of the image (may be trimmed).
  bool HasUrl() const { return !!url_; }
  std::string GetUrl() const { DCHECK(HasUrl()); return url_.value(); }
  void SetUrl(const std::string& value) { url_ = value; }

  bool HasNodeId() const { return !!node_id_; }
  int GetNodeId() const { DCHECK(HasNodeId()); return node_id_.value(); }
  void SetNodeId(int value) { node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<LargestContentfulPaint> Clone() const;

  template<int STATE>
  class LargestContentfulPaintBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kRenderTimeSet = 1 << 1,
    kLoadTimeSet = 1 << 2,
    kSizeSet = 1 << 3,
      kAllRequiredFieldsSet = (kRenderTimeSet | kLoadTimeSet | kSizeSet | 0)
    };

    LargestContentfulPaintBuilder<STATE | kRenderTimeSet>& SetRenderTime(double value) {
      static_assert(!(STATE & kRenderTimeSet), "property renderTime should not have already been set");
      result_->SetRenderTime(value);
      return CastState<kRenderTimeSet>();
    }

    LargestContentfulPaintBuilder<STATE | kLoadTimeSet>& SetLoadTime(double value) {
      static_assert(!(STATE & kLoadTimeSet), "property loadTime should not have already been set");
      result_->SetLoadTime(value);
      return CastState<kLoadTimeSet>();
    }

    LargestContentfulPaintBuilder<STATE | kSizeSet>& SetSize(double value) {
      static_assert(!(STATE & kSizeSet), "property size should not have already been set");
      result_->SetSize(value);
      return CastState<kSizeSet>();
    }

    LargestContentfulPaintBuilder<STATE>& SetElementId(const std::string& value) {
      result_->SetElementId(value);
      return *this;
    }

    LargestContentfulPaintBuilder<STATE>& SetUrl(const std::string& value) {
      result_->SetUrl(value);
      return *this;
    }

    LargestContentfulPaintBuilder<STATE>& SetNodeId(int value) {
      result_->SetNodeId(value);
      return *this;
    }

    std::unique_ptr<LargestContentfulPaint> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class LargestContentfulPaint;
    LargestContentfulPaintBuilder() : result_(new LargestContentfulPaint()) { }

    template<int STEP> LargestContentfulPaintBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<LargestContentfulPaintBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<LargestContentfulPaint> result_;
  };

  static LargestContentfulPaintBuilder<0> Builder() {
    return LargestContentfulPaintBuilder<0>();
  }

 private:
  LargestContentfulPaint() { }

  double render_time_;
  double load_time_;
  double size_;
  absl::optional<std::string> element_id_;
  absl::optional<std::string> url_;
  absl::optional<int> node_id_;
};


class HEADLESS_EXPORT LayoutShiftAttribution {
 public:
  static std::unique_ptr<LayoutShiftAttribution> Parse(const base::Value& value, ErrorReporter* errors);

  LayoutShiftAttribution(const LayoutShiftAttribution&) = delete;
  LayoutShiftAttribution& operator=(const LayoutShiftAttribution&) = delete;

  ~LayoutShiftAttribution() { }


  const ::headless::dom::Rect* GetPreviousRect() const { return previous_rect_.get(); }
  void SetPreviousRect(std::unique_ptr<::headless::dom::Rect> value) { previous_rect_ = std::move(value); }

  const ::headless::dom::Rect* GetCurrentRect() const { return current_rect_.get(); }
  void SetCurrentRect(std::unique_ptr<::headless::dom::Rect> value) { current_rect_ = std::move(value); }

  bool HasNodeId() const { return !!node_id_; }
  int GetNodeId() const { DCHECK(HasNodeId()); return node_id_.value(); }
  void SetNodeId(int value) { node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<LayoutShiftAttribution> Clone() const;

  template<int STATE>
  class LayoutShiftAttributionBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kPreviousRectSet = 1 << 1,
    kCurrentRectSet = 1 << 2,
      kAllRequiredFieldsSet = (kPreviousRectSet | kCurrentRectSet | 0)
    };

    LayoutShiftAttributionBuilder<STATE | kPreviousRectSet>& SetPreviousRect(std::unique_ptr<::headless::dom::Rect> value) {
      static_assert(!(STATE & kPreviousRectSet), "property previousRect should not have already been set");
      result_->SetPreviousRect(std::move(value));
      return CastState<kPreviousRectSet>();
    }

    LayoutShiftAttributionBuilder<STATE | kCurrentRectSet>& SetCurrentRect(std::unique_ptr<::headless::dom::Rect> value) {
      static_assert(!(STATE & kCurrentRectSet), "property currentRect should not have already been set");
      result_->SetCurrentRect(std::move(value));
      return CastState<kCurrentRectSet>();
    }

    LayoutShiftAttributionBuilder<STATE>& SetNodeId(int value) {
      result_->SetNodeId(value);
      return *this;
    }

    std::unique_ptr<LayoutShiftAttribution> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class LayoutShiftAttribution;
    LayoutShiftAttributionBuilder() : result_(new LayoutShiftAttribution()) { }

    template<int STEP> LayoutShiftAttributionBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<LayoutShiftAttributionBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<LayoutShiftAttribution> result_;
  };

  static LayoutShiftAttributionBuilder<0> Builder() {
    return LayoutShiftAttributionBuilder<0>();
  }

 private:
  LayoutShiftAttribution() { }

  std::unique_ptr<::headless::dom::Rect> previous_rect_;
  std::unique_ptr<::headless::dom::Rect> current_rect_;
  absl::optional<int> node_id_;
};


// See https://wicg.github.io/layout-instability/#sec-layout-shift and layout_shift.idl
class HEADLESS_EXPORT LayoutShift {
 public:
  static std::unique_ptr<LayoutShift> Parse(const base::Value& value, ErrorReporter* errors);

  LayoutShift(const LayoutShift&) = delete;
  LayoutShift& operator=(const LayoutShift&) = delete;

  ~LayoutShift() { }


  // Score increment produced by this event.
  double GetValue() const { return value_; }
  void SetValue(double value) { value_ = value; }

  bool GetHadRecentInput() const { return had_recent_input_; }
  void SetHadRecentInput(bool value) { had_recent_input_ = value; }

  double GetLastInputTime() const { return last_input_time_; }
  void SetLastInputTime(double value) { last_input_time_ = value; }

  const std::vector<std::unique_ptr<::headless::performance_timeline::LayoutShiftAttribution>>* GetSources() const { return &sources_; }
  void SetSources(std::vector<std::unique_ptr<::headless::performance_timeline::LayoutShiftAttribution>> value) { sources_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<LayoutShift> Clone() const;

  template<int STATE>
  class LayoutShiftBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kValueSet = 1 << 1,
    kHadRecentInputSet = 1 << 2,
    kLastInputTimeSet = 1 << 3,
    kSourcesSet = 1 << 4,
      kAllRequiredFieldsSet = (kValueSet | kHadRecentInputSet | kLastInputTimeSet | kSourcesSet | 0)
    };

    LayoutShiftBuilder<STATE | kValueSet>& SetValue(double value) {
      static_assert(!(STATE & kValueSet), "property value should not have already been set");
      result_->SetValue(value);
      return CastState<kValueSet>();
    }

    LayoutShiftBuilder<STATE | kHadRecentInputSet>& SetHadRecentInput(bool value) {
      static_assert(!(STATE & kHadRecentInputSet), "property hadRecentInput should not have already been set");
      result_->SetHadRecentInput(value);
      return CastState<kHadRecentInputSet>();
    }

    LayoutShiftBuilder<STATE | kLastInputTimeSet>& SetLastInputTime(double value) {
      static_assert(!(STATE & kLastInputTimeSet), "property lastInputTime should not have already been set");
      result_->SetLastInputTime(value);
      return CastState<kLastInputTimeSet>();
    }

    LayoutShiftBuilder<STATE | kSourcesSet>& SetSources(std::vector<std::unique_ptr<::headless::performance_timeline::LayoutShiftAttribution>> value) {
      static_assert(!(STATE & kSourcesSet), "property sources should not have already been set");
      result_->SetSources(std::move(value));
      return CastState<kSourcesSet>();
    }

    std::unique_ptr<LayoutShift> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class LayoutShift;
    LayoutShiftBuilder() : result_(new LayoutShift()) { }

    template<int STEP> LayoutShiftBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<LayoutShiftBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<LayoutShift> result_;
  };

  static LayoutShiftBuilder<0> Builder() {
    return LayoutShiftBuilder<0>();
  }

 private:
  LayoutShift() { }

  double value_;
  bool had_recent_input_;
  double last_input_time_;
  std::vector<std::unique_ptr<::headless::performance_timeline::LayoutShiftAttribution>> sources_;
};


class HEADLESS_EXPORT TimelineEvent {
 public:
  static std::unique_ptr<TimelineEvent> Parse(const base::Value& value, ErrorReporter* errors);

  TimelineEvent(const TimelineEvent&) = delete;
  TimelineEvent& operator=(const TimelineEvent&) = delete;

  ~TimelineEvent() { }


  // Identifies the frame that this event is related to. Empty for non-frame targets.
  std::string GetFrameId() const { return frame_id_; }
  void SetFrameId(const std::string& value) { frame_id_ = value; }

  // The event type, as specified in https://w3c.github.io/performance-timeline/#dom-performanceentry-entrytype
  // This determines which of the optional "details" fiedls is present.
  std::string GetType() const { return type_; }
  void SetType(const std::string& value) { type_ = value; }

  // Name may be empty depending on the type.
  std::string GetName() const { return name_; }
  void SetName(const std::string& value) { name_ = value; }

  // Time in seconds since Epoch, monotonically increasing within document lifetime.
  double GetTime() const { return time_; }
  void SetTime(double value) { time_ = value; }

  // Event duration, if applicable.
  bool HasDuration() const { return !!duration_; }
  double GetDuration() const { DCHECK(HasDuration()); return duration_.value(); }
  void SetDuration(double value) { duration_ = value; }

  bool HasLcpDetails() const { return !!lcp_details_; }
  const ::headless::performance_timeline::LargestContentfulPaint* GetLcpDetails() const { DCHECK(HasLcpDetails()); return lcp_details_.value().get(); }
  void SetLcpDetails(std::unique_ptr<::headless::performance_timeline::LargestContentfulPaint> value) { lcp_details_ = std::move(value); }

  bool HasLayoutShiftDetails() const { return !!layout_shift_details_; }
  const ::headless::performance_timeline::LayoutShift* GetLayoutShiftDetails() const { DCHECK(HasLayoutShiftDetails()); return layout_shift_details_.value().get(); }
  void SetLayoutShiftDetails(std::unique_ptr<::headless::performance_timeline::LayoutShift> value) { layout_shift_details_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<TimelineEvent> Clone() const;

  template<int STATE>
  class TimelineEventBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kFrameIdSet = 1 << 1,
    kTypeSet = 1 << 2,
    kNameSet = 1 << 3,
    kTimeSet = 1 << 4,
      kAllRequiredFieldsSet = (kFrameIdSet | kTypeSet | kNameSet | kTimeSet | 0)
    };

    TimelineEventBuilder<STATE | kFrameIdSet>& SetFrameId(const std::string& value) {
      static_assert(!(STATE & kFrameIdSet), "property frameId should not have already been set");
      result_->SetFrameId(value);
      return CastState<kFrameIdSet>();
    }

    TimelineEventBuilder<STATE | kTypeSet>& SetType(const std::string& value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    TimelineEventBuilder<STATE | kNameSet>& SetName(const std::string& value) {
      static_assert(!(STATE & kNameSet), "property name should not have already been set");
      result_->SetName(value);
      return CastState<kNameSet>();
    }

    TimelineEventBuilder<STATE | kTimeSet>& SetTime(double value) {
      static_assert(!(STATE & kTimeSet), "property time should not have already been set");
      result_->SetTime(value);
      return CastState<kTimeSet>();
    }

    TimelineEventBuilder<STATE>& SetDuration(double value) {
      result_->SetDuration(value);
      return *this;
    }

    TimelineEventBuilder<STATE>& SetLcpDetails(std::unique_ptr<::headless::performance_timeline::LargestContentfulPaint> value) {
      result_->SetLcpDetails(std::move(value));
      return *this;
    }

    TimelineEventBuilder<STATE>& SetLayoutShiftDetails(std::unique_ptr<::headless::performance_timeline::LayoutShift> value) {
      result_->SetLayoutShiftDetails(std::move(value));
      return *this;
    }

    std::unique_ptr<TimelineEvent> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TimelineEvent;
    TimelineEventBuilder() : result_(new TimelineEvent()) { }

    template<int STEP> TimelineEventBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TimelineEventBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TimelineEvent> result_;
  };

  static TimelineEventBuilder<0> Builder() {
    return TimelineEventBuilder<0>();
  }

 private:
  TimelineEvent() { }

  std::string frame_id_;
  std::string type_;
  std::string name_;
  double time_;
  absl::optional<double> duration_;
  absl::optional<std::unique_ptr<::headless::performance_timeline::LargestContentfulPaint>> lcp_details_;
  absl::optional<std::unique_ptr<::headless::performance_timeline::LayoutShift>> layout_shift_details_;
};


// Parameters for the Enable command.
class HEADLESS_EXPORT EnableParams {
 public:
  static std::unique_ptr<EnableParams> Parse(const base::Value& value, ErrorReporter* errors);

  EnableParams(const EnableParams&) = delete;
  EnableParams& operator=(const EnableParams&) = delete;

  ~EnableParams() { }


  // The types of event to report, as specified in
  // https://w3c.github.io/performance-timeline/#dom-performanceentry-entrytype
  // The specified filter overrides any previous filters, passing empty
  // filter disables recording.
  // Note that not all types exposed to the web platform are currently supported.
  const std::vector<std::string>* GetEventTypes() const { return &event_types_; }
  void SetEventTypes(std::vector<std::string> value) { event_types_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<EnableParams> Clone() const;

  template<int STATE>
  class EnableParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEventTypesSet = 1 << 1,
      kAllRequiredFieldsSet = (kEventTypesSet | 0)
    };

    EnableParamsBuilder<STATE | kEventTypesSet>& SetEventTypes(std::vector<std::string> value) {
      static_assert(!(STATE & kEventTypesSet), "property eventTypes should not have already been set");
      result_->SetEventTypes(std::move(value));
      return CastState<kEventTypesSet>();
    }

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

  std::vector<std::string> event_types_;
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


// Parameters for the TimelineEventAdded event.
class HEADLESS_EXPORT TimelineEventAddedParams {
 public:
  static std::unique_ptr<TimelineEventAddedParams> Parse(const base::Value& value, ErrorReporter* errors);

  TimelineEventAddedParams(const TimelineEventAddedParams&) = delete;
  TimelineEventAddedParams& operator=(const TimelineEventAddedParams&) = delete;

  ~TimelineEventAddedParams() { }


  const ::headless::performance_timeline::TimelineEvent* GetEvent() const { return event_.get(); }
  void SetEvent(std::unique_ptr<::headless::performance_timeline::TimelineEvent> value) { event_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<TimelineEventAddedParams> Clone() const;

  template<int STATE>
  class TimelineEventAddedParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEventSet = 1 << 1,
      kAllRequiredFieldsSet = (kEventSet | 0)
    };

    TimelineEventAddedParamsBuilder<STATE | kEventSet>& SetEvent(std::unique_ptr<::headless::performance_timeline::TimelineEvent> value) {
      static_assert(!(STATE & kEventSet), "property event should not have already been set");
      result_->SetEvent(std::move(value));
      return CastState<kEventSet>();
    }

    std::unique_ptr<TimelineEventAddedParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class TimelineEventAddedParams;
    TimelineEventAddedParamsBuilder() : result_(new TimelineEventAddedParams()) { }

    template<int STEP> TimelineEventAddedParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<TimelineEventAddedParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<TimelineEventAddedParams> result_;
  };

  static TimelineEventAddedParamsBuilder<0> Builder() {
    return TimelineEventAddedParamsBuilder<0>();
  }

 private:
  TimelineEventAddedParams() { }

  std::unique_ptr<::headless::performance_timeline::TimelineEvent> event_;
};


}  // namespace performance_timeline

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_PERFORMANCE_TIMELINE_H_
