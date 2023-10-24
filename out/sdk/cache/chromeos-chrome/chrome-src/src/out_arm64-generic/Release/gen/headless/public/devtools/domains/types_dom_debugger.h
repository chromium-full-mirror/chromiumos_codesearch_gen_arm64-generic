// This file is generated

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_DOM_DEBUGGER_H_
#define HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_DOM_DEBUGGER_H_

#include "base/values.h"
#include "third_party/abseil-cpp/absl/types/optional.h"
#include "third_party/inspector_protocol/crdtp/chromium/protocol_traits.h"

#include "headless/public/devtools/internal/types_forward_declarations_dom.h"
#include "headless/public/devtools/internal/types_forward_declarations_dom_debugger.h"
#include "headless/public/devtools/internal/types_forward_declarations_debugger.h"
#include "headless/public/devtools/internal/types_forward_declarations_emulation.h"
#include "headless/public/devtools/internal/types_forward_declarations_io.h"
#include "headless/public/devtools/internal/types_forward_declarations_network.h"
#include "headless/public/devtools/internal/types_forward_declarations_page.h"
#include "headless/public/devtools/internal/types_forward_declarations_runtime.h"
#include "headless/public/devtools/internal/types_forward_declarations_security.h"
#include "headless/public/headless_export.h"

namespace headless {
namespace protocol {
using Binary = crdtp::Binary;
}

class ErrorReporter;

namespace dom_debugger {

// Object event listener.
class HEADLESS_EXPORT EventListener {
 public:
  static std::unique_ptr<EventListener> Parse(const base::Value& value, ErrorReporter* errors);

  EventListener(const EventListener&) = delete;
  EventListener& operator=(const EventListener&) = delete;

  ~EventListener() { }


  // `EventListener`'s type.
  std::string GetType() const { return type_; }
  void SetType(const std::string& value) { type_ = value; }

  // `EventListener`'s useCapture.
  bool GetUseCapture() const { return use_capture_; }
  void SetUseCapture(bool value) { use_capture_ = value; }

  // `EventListener`'s passive flag.
  bool GetPassive() const { return passive_; }
  void SetPassive(bool value) { passive_ = value; }

  // `EventListener`'s once flag.
  bool GetOnce() const { return once_; }
  void SetOnce(bool value) { once_ = value; }

  // Script id of the handler code.
  std::string GetScriptId() const { return script_id_; }
  void SetScriptId(const std::string& value) { script_id_ = value; }

  // Line number in the script (0-based).
  int GetLineNumber() const { return line_number_; }
  void SetLineNumber(int value) { line_number_ = value; }

  // Column number in the script (0-based).
  int GetColumnNumber() const { return column_number_; }
  void SetColumnNumber(int value) { column_number_ = value; }

  // Event handler function value.
  bool HasHandler() const { return !!handler_; }
  const ::headless::runtime::RemoteObject* GetHandler() const { DCHECK(HasHandler()); return handler_.value().get(); }
  void SetHandler(std::unique_ptr<::headless::runtime::RemoteObject> value) { handler_ = std::move(value); }

  // Event original handler function value.
  bool HasOriginalHandler() const { return !!original_handler_; }
  const ::headless::runtime::RemoteObject* GetOriginalHandler() const { DCHECK(HasOriginalHandler()); return original_handler_.value().get(); }
  void SetOriginalHandler(std::unique_ptr<::headless::runtime::RemoteObject> value) { original_handler_ = std::move(value); }

  // Node the listener is added to (if any).
  bool HasBackendNodeId() const { return !!backend_node_id_; }
  int GetBackendNodeId() const { DCHECK(HasBackendNodeId()); return backend_node_id_.value(); }
  void SetBackendNodeId(int value) { backend_node_id_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<EventListener> Clone() const;

  template<int STATE>
  class EventListenerBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kTypeSet = 1 << 1,
    kUseCaptureSet = 1 << 2,
    kPassiveSet = 1 << 3,
    kOnceSet = 1 << 4,
    kScriptIdSet = 1 << 5,
    kLineNumberSet = 1 << 6,
    kColumnNumberSet = 1 << 7,
      kAllRequiredFieldsSet = (kTypeSet | kUseCaptureSet | kPassiveSet | kOnceSet | kScriptIdSet | kLineNumberSet | kColumnNumberSet | 0)
    };

    EventListenerBuilder<STATE | kTypeSet>& SetType(const std::string& value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    EventListenerBuilder<STATE | kUseCaptureSet>& SetUseCapture(bool value) {
      static_assert(!(STATE & kUseCaptureSet), "property useCapture should not have already been set");
      result_->SetUseCapture(value);
      return CastState<kUseCaptureSet>();
    }

    EventListenerBuilder<STATE | kPassiveSet>& SetPassive(bool value) {
      static_assert(!(STATE & kPassiveSet), "property passive should not have already been set");
      result_->SetPassive(value);
      return CastState<kPassiveSet>();
    }

    EventListenerBuilder<STATE | kOnceSet>& SetOnce(bool value) {
      static_assert(!(STATE & kOnceSet), "property once should not have already been set");
      result_->SetOnce(value);
      return CastState<kOnceSet>();
    }

    EventListenerBuilder<STATE | kScriptIdSet>& SetScriptId(const std::string& value) {
      static_assert(!(STATE & kScriptIdSet), "property scriptId should not have already been set");
      result_->SetScriptId(value);
      return CastState<kScriptIdSet>();
    }

    EventListenerBuilder<STATE | kLineNumberSet>& SetLineNumber(int value) {
      static_assert(!(STATE & kLineNumberSet), "property lineNumber should not have already been set");
      result_->SetLineNumber(value);
      return CastState<kLineNumberSet>();
    }

    EventListenerBuilder<STATE | kColumnNumberSet>& SetColumnNumber(int value) {
      static_assert(!(STATE & kColumnNumberSet), "property columnNumber should not have already been set");
      result_->SetColumnNumber(value);
      return CastState<kColumnNumberSet>();
    }

    EventListenerBuilder<STATE>& SetHandler(std::unique_ptr<::headless::runtime::RemoteObject> value) {
      result_->SetHandler(std::move(value));
      return *this;
    }

    EventListenerBuilder<STATE>& SetOriginalHandler(std::unique_ptr<::headless::runtime::RemoteObject> value) {
      result_->SetOriginalHandler(std::move(value));
      return *this;
    }

    EventListenerBuilder<STATE>& SetBackendNodeId(int value) {
      result_->SetBackendNodeId(value);
      return *this;
    }

    std::unique_ptr<EventListener> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class EventListener;
    EventListenerBuilder() : result_(new EventListener()) { }

    template<int STEP> EventListenerBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<EventListenerBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<EventListener> result_;
  };

  static EventListenerBuilder<0> Builder() {
    return EventListenerBuilder<0>();
  }

 private:
  EventListener() { }

  std::string type_;
  bool use_capture_;
  bool passive_;
  bool once_;
  std::string script_id_;
  int line_number_;
  int column_number_;
  absl::optional<std::unique_ptr<::headless::runtime::RemoteObject>> handler_;
  absl::optional<std::unique_ptr<::headless::runtime::RemoteObject>> original_handler_;
  absl::optional<int> backend_node_id_;
};


// Parameters for the GetEventListeners command.
class HEADLESS_EXPORT GetEventListenersParams {
 public:
  static std::unique_ptr<GetEventListenersParams> Parse(const base::Value& value, ErrorReporter* errors);

  GetEventListenersParams(const GetEventListenersParams&) = delete;
  GetEventListenersParams& operator=(const GetEventListenersParams&) = delete;

  ~GetEventListenersParams() { }


  // Identifier of the object to return listeners for.
  std::string GetObjectId() const { return object_id_; }
  void SetObjectId(const std::string& value) { object_id_ = value; }

  // The maximum depth at which Node children should be retrieved, defaults to 1. Use -1 for the
  // entire subtree or provide an integer larger than 0.
  bool HasDepth() const { return !!depth_; }
  int GetDepth() const { DCHECK(HasDepth()); return depth_.value(); }
  void SetDepth(int value) { depth_ = value; }

  // Whether or not iframes and shadow roots should be traversed when returning the subtree
  // (default is false). Reports listeners for all contexts if pierce is enabled.
  bool HasPierce() const { return !!pierce_; }
  bool GetPierce() const { DCHECK(HasPierce()); return pierce_.value(); }
  void SetPierce(bool value) { pierce_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<GetEventListenersParams> Clone() const;

  template<int STATE>
  class GetEventListenersParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kObjectIdSet = 1 << 1,
      kAllRequiredFieldsSet = (kObjectIdSet | 0)
    };

    GetEventListenersParamsBuilder<STATE | kObjectIdSet>& SetObjectId(const std::string& value) {
      static_assert(!(STATE & kObjectIdSet), "property objectId should not have already been set");
      result_->SetObjectId(value);
      return CastState<kObjectIdSet>();
    }

    GetEventListenersParamsBuilder<STATE>& SetDepth(int value) {
      result_->SetDepth(value);
      return *this;
    }

    GetEventListenersParamsBuilder<STATE>& SetPierce(bool value) {
      result_->SetPierce(value);
      return *this;
    }

    std::unique_ptr<GetEventListenersParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetEventListenersParams;
    GetEventListenersParamsBuilder() : result_(new GetEventListenersParams()) { }

    template<int STEP> GetEventListenersParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetEventListenersParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetEventListenersParams> result_;
  };

  static GetEventListenersParamsBuilder<0> Builder() {
    return GetEventListenersParamsBuilder<0>();
  }

 private:
  GetEventListenersParams() { }

  std::string object_id_;
  absl::optional<int> depth_;
  absl::optional<bool> pierce_;
};


// Result for the GetEventListeners command.
class HEADLESS_EXPORT GetEventListenersResult {
 public:
  static std::unique_ptr<GetEventListenersResult> Parse(const base::Value& value, ErrorReporter* errors);

  GetEventListenersResult(const GetEventListenersResult&) = delete;
  GetEventListenersResult& operator=(const GetEventListenersResult&) = delete;

  ~GetEventListenersResult() { }


  // Array of relevant listeners.
  const std::vector<std::unique_ptr<::headless::dom_debugger::EventListener>>* GetListeners() const { return &listeners_; }
  void SetListeners(std::vector<std::unique_ptr<::headless::dom_debugger::EventListener>> value) { listeners_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<GetEventListenersResult> Clone() const;

  template<int STATE>
  class GetEventListenersResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kListenersSet = 1 << 1,
      kAllRequiredFieldsSet = (kListenersSet | 0)
    };

    GetEventListenersResultBuilder<STATE | kListenersSet>& SetListeners(std::vector<std::unique_ptr<::headless::dom_debugger::EventListener>> value) {
      static_assert(!(STATE & kListenersSet), "property listeners should not have already been set");
      result_->SetListeners(std::move(value));
      return CastState<kListenersSet>();
    }

    std::unique_ptr<GetEventListenersResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class GetEventListenersResult;
    GetEventListenersResultBuilder() : result_(new GetEventListenersResult()) { }

    template<int STEP> GetEventListenersResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<GetEventListenersResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<GetEventListenersResult> result_;
  };

  static GetEventListenersResultBuilder<0> Builder() {
    return GetEventListenersResultBuilder<0>();
  }

 private:
  GetEventListenersResult() { }

  std::vector<std::unique_ptr<::headless::dom_debugger::EventListener>> listeners_;
};


// Parameters for the RemoveDOMBreakpoint command.
class HEADLESS_EXPORT RemoveDOMBreakpointParams {
 public:
  static std::unique_ptr<RemoveDOMBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors);

  RemoveDOMBreakpointParams(const RemoveDOMBreakpointParams&) = delete;
  RemoveDOMBreakpointParams& operator=(const RemoveDOMBreakpointParams&) = delete;

  ~RemoveDOMBreakpointParams() { }


  // Identifier of the node to remove breakpoint from.
  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  // Type of the breakpoint to remove.
  ::headless::dom_debugger::DOMBreakpointType GetType() const { return type_; }
  void SetType(::headless::dom_debugger::DOMBreakpointType value) { type_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<RemoveDOMBreakpointParams> Clone() const;

  template<int STATE>
  class RemoveDOMBreakpointParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNodeIdSet = 1 << 1,
    kTypeSet = 1 << 2,
      kAllRequiredFieldsSet = (kNodeIdSet | kTypeSet | 0)
    };

    RemoveDOMBreakpointParamsBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    RemoveDOMBreakpointParamsBuilder<STATE | kTypeSet>& SetType(::headless::dom_debugger::DOMBreakpointType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    std::unique_ptr<RemoveDOMBreakpointParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RemoveDOMBreakpointParams;
    RemoveDOMBreakpointParamsBuilder() : result_(new RemoveDOMBreakpointParams()) { }

    template<int STEP> RemoveDOMBreakpointParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RemoveDOMBreakpointParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RemoveDOMBreakpointParams> result_;
  };

  static RemoveDOMBreakpointParamsBuilder<0> Builder() {
    return RemoveDOMBreakpointParamsBuilder<0>();
  }

 private:
  RemoveDOMBreakpointParams() { }

  int node_id_;
  ::headless::dom_debugger::DOMBreakpointType type_;
};


// Result for the RemoveDOMBreakpoint command.
class HEADLESS_EXPORT RemoveDOMBreakpointResult {
 public:
  static std::unique_ptr<RemoveDOMBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors);

  RemoveDOMBreakpointResult(const RemoveDOMBreakpointResult&) = delete;
  RemoveDOMBreakpointResult& operator=(const RemoveDOMBreakpointResult&) = delete;

  ~RemoveDOMBreakpointResult() { }


  base::Value Serialize() const;
  std::unique_ptr<RemoveDOMBreakpointResult> Clone() const;

  template<int STATE>
  class RemoveDOMBreakpointResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<RemoveDOMBreakpointResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RemoveDOMBreakpointResult;
    RemoveDOMBreakpointResultBuilder() : result_(new RemoveDOMBreakpointResult()) { }

    template<int STEP> RemoveDOMBreakpointResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RemoveDOMBreakpointResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RemoveDOMBreakpointResult> result_;
  };

  static RemoveDOMBreakpointResultBuilder<0> Builder() {
    return RemoveDOMBreakpointResultBuilder<0>();
  }

 private:
  RemoveDOMBreakpointResult() { }

};


// Parameters for the RemoveEventListenerBreakpoint command.
class HEADLESS_EXPORT RemoveEventListenerBreakpointParams {
 public:
  static std::unique_ptr<RemoveEventListenerBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors);

  RemoveEventListenerBreakpointParams(const RemoveEventListenerBreakpointParams&) = delete;
  RemoveEventListenerBreakpointParams& operator=(const RemoveEventListenerBreakpointParams&) = delete;

  ~RemoveEventListenerBreakpointParams() { }


  // Event name.
  std::string GetEventName() const { return event_name_; }
  void SetEventName(const std::string& value) { event_name_ = value; }

  // EventTarget interface name.
  bool HasTargetName() const { return !!target_name_; }
  std::string GetTargetName() const { DCHECK(HasTargetName()); return target_name_.value(); }
  void SetTargetName(const std::string& value) { target_name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<RemoveEventListenerBreakpointParams> Clone() const;

  template<int STATE>
  class RemoveEventListenerBreakpointParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEventNameSet = 1 << 1,
      kAllRequiredFieldsSet = (kEventNameSet | 0)
    };

    RemoveEventListenerBreakpointParamsBuilder<STATE | kEventNameSet>& SetEventName(const std::string& value) {
      static_assert(!(STATE & kEventNameSet), "property eventName should not have already been set");
      result_->SetEventName(value);
      return CastState<kEventNameSet>();
    }

    RemoveEventListenerBreakpointParamsBuilder<STATE>& SetTargetName(const std::string& value) {
      result_->SetTargetName(value);
      return *this;
    }

    std::unique_ptr<RemoveEventListenerBreakpointParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RemoveEventListenerBreakpointParams;
    RemoveEventListenerBreakpointParamsBuilder() : result_(new RemoveEventListenerBreakpointParams()) { }

    template<int STEP> RemoveEventListenerBreakpointParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RemoveEventListenerBreakpointParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RemoveEventListenerBreakpointParams> result_;
  };

  static RemoveEventListenerBreakpointParamsBuilder<0> Builder() {
    return RemoveEventListenerBreakpointParamsBuilder<0>();
  }

 private:
  RemoveEventListenerBreakpointParams() { }

  std::string event_name_;
  absl::optional<std::string> target_name_;
};


// Result for the RemoveEventListenerBreakpoint command.
class HEADLESS_EXPORT RemoveEventListenerBreakpointResult {
 public:
  static std::unique_ptr<RemoveEventListenerBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors);

  RemoveEventListenerBreakpointResult(const RemoveEventListenerBreakpointResult&) = delete;
  RemoveEventListenerBreakpointResult& operator=(const RemoveEventListenerBreakpointResult&) = delete;

  ~RemoveEventListenerBreakpointResult() { }


  base::Value Serialize() const;
  std::unique_ptr<RemoveEventListenerBreakpointResult> Clone() const;

  template<int STATE>
  class RemoveEventListenerBreakpointResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<RemoveEventListenerBreakpointResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RemoveEventListenerBreakpointResult;
    RemoveEventListenerBreakpointResultBuilder() : result_(new RemoveEventListenerBreakpointResult()) { }

    template<int STEP> RemoveEventListenerBreakpointResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RemoveEventListenerBreakpointResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RemoveEventListenerBreakpointResult> result_;
  };

  static RemoveEventListenerBreakpointResultBuilder<0> Builder() {
    return RemoveEventListenerBreakpointResultBuilder<0>();
  }

 private:
  RemoveEventListenerBreakpointResult() { }

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


// Parameters for the RemoveXHRBreakpoint command.
class HEADLESS_EXPORT RemoveXHRBreakpointParams {
 public:
  static std::unique_ptr<RemoveXHRBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors);

  RemoveXHRBreakpointParams(const RemoveXHRBreakpointParams&) = delete;
  RemoveXHRBreakpointParams& operator=(const RemoveXHRBreakpointParams&) = delete;

  ~RemoveXHRBreakpointParams() { }


  // Resource URL substring.
  std::string GetUrl() const { return url_; }
  void SetUrl(const std::string& value) { url_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<RemoveXHRBreakpointParams> Clone() const;

  template<int STATE>
  class RemoveXHRBreakpointParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kUrlSet = 1 << 1,
      kAllRequiredFieldsSet = (kUrlSet | 0)
    };

    RemoveXHRBreakpointParamsBuilder<STATE | kUrlSet>& SetUrl(const std::string& value) {
      static_assert(!(STATE & kUrlSet), "property url should not have already been set");
      result_->SetUrl(value);
      return CastState<kUrlSet>();
    }

    std::unique_ptr<RemoveXHRBreakpointParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RemoveXHRBreakpointParams;
    RemoveXHRBreakpointParamsBuilder() : result_(new RemoveXHRBreakpointParams()) { }

    template<int STEP> RemoveXHRBreakpointParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RemoveXHRBreakpointParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RemoveXHRBreakpointParams> result_;
  };

  static RemoveXHRBreakpointParamsBuilder<0> Builder() {
    return RemoveXHRBreakpointParamsBuilder<0>();
  }

 private:
  RemoveXHRBreakpointParams() { }

  std::string url_;
};


// Result for the RemoveXHRBreakpoint command.
class HEADLESS_EXPORT RemoveXHRBreakpointResult {
 public:
  static std::unique_ptr<RemoveXHRBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors);

  RemoveXHRBreakpointResult(const RemoveXHRBreakpointResult&) = delete;
  RemoveXHRBreakpointResult& operator=(const RemoveXHRBreakpointResult&) = delete;

  ~RemoveXHRBreakpointResult() { }


  base::Value Serialize() const;
  std::unique_ptr<RemoveXHRBreakpointResult> Clone() const;

  template<int STATE>
  class RemoveXHRBreakpointResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<RemoveXHRBreakpointResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class RemoveXHRBreakpointResult;
    RemoveXHRBreakpointResultBuilder() : result_(new RemoveXHRBreakpointResult()) { }

    template<int STEP> RemoveXHRBreakpointResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<RemoveXHRBreakpointResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<RemoveXHRBreakpointResult> result_;
  };

  static RemoveXHRBreakpointResultBuilder<0> Builder() {
    return RemoveXHRBreakpointResultBuilder<0>();
  }

 private:
  RemoveXHRBreakpointResult() { }

};


// Parameters for the SetBreakOnCSPViolation command.
class HEADLESS_EXPORT SetBreakOnCSPViolationParams {
 public:
  static std::unique_ptr<SetBreakOnCSPViolationParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetBreakOnCSPViolationParams(const SetBreakOnCSPViolationParams&) = delete;
  SetBreakOnCSPViolationParams& operator=(const SetBreakOnCSPViolationParams&) = delete;

  ~SetBreakOnCSPViolationParams() { }


  // CSP Violations to stop upon.
  const std::vector<::headless::dom_debugger::CSPViolationType>* GetViolationTypes() const { return &violation_types_; }
  void SetViolationTypes(std::vector<::headless::dom_debugger::CSPViolationType> value) { violation_types_ = std::move(value); }

  base::Value Serialize() const;
  std::unique_ptr<SetBreakOnCSPViolationParams> Clone() const;

  template<int STATE>
  class SetBreakOnCSPViolationParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kViolationTypesSet = 1 << 1,
      kAllRequiredFieldsSet = (kViolationTypesSet | 0)
    };

    SetBreakOnCSPViolationParamsBuilder<STATE | kViolationTypesSet>& SetViolationTypes(std::vector<::headless::dom_debugger::CSPViolationType> value) {
      static_assert(!(STATE & kViolationTypesSet), "property violationTypes should not have already been set");
      result_->SetViolationTypes(std::move(value));
      return CastState<kViolationTypesSet>();
    }

    std::unique_ptr<SetBreakOnCSPViolationParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetBreakOnCSPViolationParams;
    SetBreakOnCSPViolationParamsBuilder() : result_(new SetBreakOnCSPViolationParams()) { }

    template<int STEP> SetBreakOnCSPViolationParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetBreakOnCSPViolationParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetBreakOnCSPViolationParams> result_;
  };

  static SetBreakOnCSPViolationParamsBuilder<0> Builder() {
    return SetBreakOnCSPViolationParamsBuilder<0>();
  }

 private:
  SetBreakOnCSPViolationParams() { }

  std::vector<::headless::dom_debugger::CSPViolationType> violation_types_;
};


// Result for the SetBreakOnCSPViolation command.
class HEADLESS_EXPORT SetBreakOnCSPViolationResult {
 public:
  static std::unique_ptr<SetBreakOnCSPViolationResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetBreakOnCSPViolationResult(const SetBreakOnCSPViolationResult&) = delete;
  SetBreakOnCSPViolationResult& operator=(const SetBreakOnCSPViolationResult&) = delete;

  ~SetBreakOnCSPViolationResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetBreakOnCSPViolationResult> Clone() const;

  template<int STATE>
  class SetBreakOnCSPViolationResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetBreakOnCSPViolationResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetBreakOnCSPViolationResult;
    SetBreakOnCSPViolationResultBuilder() : result_(new SetBreakOnCSPViolationResult()) { }

    template<int STEP> SetBreakOnCSPViolationResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetBreakOnCSPViolationResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetBreakOnCSPViolationResult> result_;
  };

  static SetBreakOnCSPViolationResultBuilder<0> Builder() {
    return SetBreakOnCSPViolationResultBuilder<0>();
  }

 private:
  SetBreakOnCSPViolationResult() { }

};


// Parameters for the SetDOMBreakpoint command.
class HEADLESS_EXPORT SetDOMBreakpointParams {
 public:
  static std::unique_ptr<SetDOMBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetDOMBreakpointParams(const SetDOMBreakpointParams&) = delete;
  SetDOMBreakpointParams& operator=(const SetDOMBreakpointParams&) = delete;

  ~SetDOMBreakpointParams() { }


  // Identifier of the node to set breakpoint on.
  int GetNodeId() const { return node_id_; }
  void SetNodeId(int value) { node_id_ = value; }

  // Type of the operation to stop upon.
  ::headless::dom_debugger::DOMBreakpointType GetType() const { return type_; }
  void SetType(::headless::dom_debugger::DOMBreakpointType value) { type_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetDOMBreakpointParams> Clone() const;

  template<int STATE>
  class SetDOMBreakpointParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kNodeIdSet = 1 << 1,
    kTypeSet = 1 << 2,
      kAllRequiredFieldsSet = (kNodeIdSet | kTypeSet | 0)
    };

    SetDOMBreakpointParamsBuilder<STATE | kNodeIdSet>& SetNodeId(int value) {
      static_assert(!(STATE & kNodeIdSet), "property nodeId should not have already been set");
      result_->SetNodeId(value);
      return CastState<kNodeIdSet>();
    }

    SetDOMBreakpointParamsBuilder<STATE | kTypeSet>& SetType(::headless::dom_debugger::DOMBreakpointType value) {
      static_assert(!(STATE & kTypeSet), "property type should not have already been set");
      result_->SetType(value);
      return CastState<kTypeSet>();
    }

    std::unique_ptr<SetDOMBreakpointParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetDOMBreakpointParams;
    SetDOMBreakpointParamsBuilder() : result_(new SetDOMBreakpointParams()) { }

    template<int STEP> SetDOMBreakpointParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetDOMBreakpointParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetDOMBreakpointParams> result_;
  };

  static SetDOMBreakpointParamsBuilder<0> Builder() {
    return SetDOMBreakpointParamsBuilder<0>();
  }

 private:
  SetDOMBreakpointParams() { }

  int node_id_;
  ::headless::dom_debugger::DOMBreakpointType type_;
};


// Result for the SetDOMBreakpoint command.
class HEADLESS_EXPORT SetDOMBreakpointResult {
 public:
  static std::unique_ptr<SetDOMBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetDOMBreakpointResult(const SetDOMBreakpointResult&) = delete;
  SetDOMBreakpointResult& operator=(const SetDOMBreakpointResult&) = delete;

  ~SetDOMBreakpointResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetDOMBreakpointResult> Clone() const;

  template<int STATE>
  class SetDOMBreakpointResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetDOMBreakpointResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetDOMBreakpointResult;
    SetDOMBreakpointResultBuilder() : result_(new SetDOMBreakpointResult()) { }

    template<int STEP> SetDOMBreakpointResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetDOMBreakpointResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetDOMBreakpointResult> result_;
  };

  static SetDOMBreakpointResultBuilder<0> Builder() {
    return SetDOMBreakpointResultBuilder<0>();
  }

 private:
  SetDOMBreakpointResult() { }

};


// Parameters for the SetEventListenerBreakpoint command.
class HEADLESS_EXPORT SetEventListenerBreakpointParams {
 public:
  static std::unique_ptr<SetEventListenerBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetEventListenerBreakpointParams(const SetEventListenerBreakpointParams&) = delete;
  SetEventListenerBreakpointParams& operator=(const SetEventListenerBreakpointParams&) = delete;

  ~SetEventListenerBreakpointParams() { }


  // DOM Event name to stop on (any DOM event will do).
  std::string GetEventName() const { return event_name_; }
  void SetEventName(const std::string& value) { event_name_ = value; }

  // EventTarget interface name to stop on. If equal to `"*"` or not provided, will stop on any
  // EventTarget.
  bool HasTargetName() const { return !!target_name_; }
  std::string GetTargetName() const { DCHECK(HasTargetName()); return target_name_.value(); }
  void SetTargetName(const std::string& value) { target_name_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetEventListenerBreakpointParams> Clone() const;

  template<int STATE>
  class SetEventListenerBreakpointParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kEventNameSet = 1 << 1,
      kAllRequiredFieldsSet = (kEventNameSet | 0)
    };

    SetEventListenerBreakpointParamsBuilder<STATE | kEventNameSet>& SetEventName(const std::string& value) {
      static_assert(!(STATE & kEventNameSet), "property eventName should not have already been set");
      result_->SetEventName(value);
      return CastState<kEventNameSet>();
    }

    SetEventListenerBreakpointParamsBuilder<STATE>& SetTargetName(const std::string& value) {
      result_->SetTargetName(value);
      return *this;
    }

    std::unique_ptr<SetEventListenerBreakpointParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetEventListenerBreakpointParams;
    SetEventListenerBreakpointParamsBuilder() : result_(new SetEventListenerBreakpointParams()) { }

    template<int STEP> SetEventListenerBreakpointParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetEventListenerBreakpointParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetEventListenerBreakpointParams> result_;
  };

  static SetEventListenerBreakpointParamsBuilder<0> Builder() {
    return SetEventListenerBreakpointParamsBuilder<0>();
  }

 private:
  SetEventListenerBreakpointParams() { }

  std::string event_name_;
  absl::optional<std::string> target_name_;
};


// Result for the SetEventListenerBreakpoint command.
class HEADLESS_EXPORT SetEventListenerBreakpointResult {
 public:
  static std::unique_ptr<SetEventListenerBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetEventListenerBreakpointResult(const SetEventListenerBreakpointResult&) = delete;
  SetEventListenerBreakpointResult& operator=(const SetEventListenerBreakpointResult&) = delete;

  ~SetEventListenerBreakpointResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetEventListenerBreakpointResult> Clone() const;

  template<int STATE>
  class SetEventListenerBreakpointResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetEventListenerBreakpointResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetEventListenerBreakpointResult;
    SetEventListenerBreakpointResultBuilder() : result_(new SetEventListenerBreakpointResult()) { }

    template<int STEP> SetEventListenerBreakpointResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetEventListenerBreakpointResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetEventListenerBreakpointResult> result_;
  };

  static SetEventListenerBreakpointResultBuilder<0> Builder() {
    return SetEventListenerBreakpointResultBuilder<0>();
  }

 private:
  SetEventListenerBreakpointResult() { }

};


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


// Parameters for the SetXHRBreakpoint command.
class HEADLESS_EXPORT SetXHRBreakpointParams {
 public:
  static std::unique_ptr<SetXHRBreakpointParams> Parse(const base::Value& value, ErrorReporter* errors);

  SetXHRBreakpointParams(const SetXHRBreakpointParams&) = delete;
  SetXHRBreakpointParams& operator=(const SetXHRBreakpointParams&) = delete;

  ~SetXHRBreakpointParams() { }


  // Resource URL substring. All XHRs having this substring in the URL will get stopped upon.
  std::string GetUrl() const { return url_; }
  void SetUrl(const std::string& value) { url_ = value; }

  base::Value Serialize() const;
  std::unique_ptr<SetXHRBreakpointParams> Clone() const;

  template<int STATE>
  class SetXHRBreakpointParamsBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
    kUrlSet = 1 << 1,
      kAllRequiredFieldsSet = (kUrlSet | 0)
    };

    SetXHRBreakpointParamsBuilder<STATE | kUrlSet>& SetUrl(const std::string& value) {
      static_assert(!(STATE & kUrlSet), "property url should not have already been set");
      result_->SetUrl(value);
      return CastState<kUrlSet>();
    }

    std::unique_ptr<SetXHRBreakpointParams> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetXHRBreakpointParams;
    SetXHRBreakpointParamsBuilder() : result_(new SetXHRBreakpointParams()) { }

    template<int STEP> SetXHRBreakpointParamsBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetXHRBreakpointParamsBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetXHRBreakpointParams> result_;
  };

  static SetXHRBreakpointParamsBuilder<0> Builder() {
    return SetXHRBreakpointParamsBuilder<0>();
  }

 private:
  SetXHRBreakpointParams() { }

  std::string url_;
};


// Result for the SetXHRBreakpoint command.
class HEADLESS_EXPORT SetXHRBreakpointResult {
 public:
  static std::unique_ptr<SetXHRBreakpointResult> Parse(const base::Value& value, ErrorReporter* errors);

  SetXHRBreakpointResult(const SetXHRBreakpointResult&) = delete;
  SetXHRBreakpointResult& operator=(const SetXHRBreakpointResult&) = delete;

  ~SetXHRBreakpointResult() { }


  base::Value Serialize() const;
  std::unique_ptr<SetXHRBreakpointResult> Clone() const;

  template<int STATE>
  class SetXHRBreakpointResultBuilder {
  public:
    enum {
      kNoFieldsSet = 0,
      kAllRequiredFieldsSet = (0)
    };

    std::unique_ptr<SetXHRBreakpointResult> Build() {
      static_assert(STATE == kAllRequiredFieldsSet, "all required fields should have been set");
      return std::move(result_);
    }

   private:
    friend class SetXHRBreakpointResult;
    SetXHRBreakpointResultBuilder() : result_(new SetXHRBreakpointResult()) { }

    template<int STEP> SetXHRBreakpointResultBuilder<STATE | STEP>& CastState() {
      return *reinterpret_cast<SetXHRBreakpointResultBuilder<STATE | STEP>*>(this);
    }

    std::unique_ptr<SetXHRBreakpointResult> result_;
  };

  static SetXHRBreakpointResultBuilder<0> Builder() {
    return SetXHRBreakpointResultBuilder<0>();
  }

 private:
  SetXHRBreakpointResult() { }

};


}  // namespace dom_debugger

}  // namespace headless

#endif  // HEADLESS_PUBLIC_DEVTOOLS_DOMAINS_TYPES_DOM_DEBUGGER_H_
