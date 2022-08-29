// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copied and modified from
// https://chromium.googlesource.com/chromium/src/+/a3f9d4fac81fc86065d867ab08fa4912ddf662c7/headless/lib/browser/devtools_api/domain_h.template
// Modifications include namespace and path.

#ifndef COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_INPUT_H_
#define COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_INPUT_H_

#include "base/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_input.h"
#include "components/autofill_assistant/browser/devtools/message_dispatcher.h"


namespace autofill_assistant {
namespace input {
class ExperimentalDomain;
class ExperimentalObserver;

class ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  // Emitted only when `Input.setInterceptDrags` is enabled. Use this data with `Input.dispatchDragEvent` to
  // restore normal drag and drop behavior.
  virtual void OnDragIntercepted(const DragInterceptedParams& params) {}
};

class Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  // Experimental: Emitted only when `Input.setInterceptDrags` is enabled. Use this data with `Input.dispatchDragEvent` to
  // restore normal drag and drop behavior.
  virtual void OnDragIntercepted(const DragInterceptedParams& params) final {}
};

class Domain {
 public:
  Domain(const Domain&) = delete;
  Domain& operator=(const Domain&) = delete;

  // Add or remove an observer. |observer| must be removed before being
  // destroyed.
  void AddObserver(Observer* observer);
  void RemoveObserver(Observer* observer);

  // Return the experimental interface for this domain. Note that experimental
  // commands may be changed or removed at any time.
  ExperimentalDomain* GetExperimental();

  // Dispatches a key event to the page.
  void DispatchKeyEvent(std::unique_ptr<DispatchKeyEventParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchKeyEventResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchKeyEventResult>)>());
  void DispatchKeyEvent(::autofill_assistant::input::DispatchKeyEventType type, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void DispatchKeyEvent(std::unique_ptr<DispatchKeyEventParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Dispatches a mouse event to the page.
  void DispatchMouseEvent(std::unique_ptr<DispatchMouseEventParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchMouseEventResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchMouseEventResult>)>());
  void DispatchMouseEvent(::autofill_assistant::input::DispatchMouseEventType type, double x, double y, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void DispatchMouseEvent(std::unique_ptr<DispatchMouseEventParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Dispatches a touch event to the page.
  void DispatchTouchEvent(std::unique_ptr<DispatchTouchEventParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchTouchEventResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchTouchEventResult>)>());
  void DispatchTouchEvent(::autofill_assistant::input::DispatchTouchEventType type, std::vector<std::unique_ptr<::autofill_assistant::input::TouchPoint>> touch_points, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void DispatchTouchEvent(std::unique_ptr<DispatchTouchEventParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

  // Ignores input events (useful while auditing page).
  void SetIgnoreInputEvents(std::unique_ptr<SetIgnoreInputEventsParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetIgnoreInputEventsResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetIgnoreInputEventsResult>)>());
  void SetIgnoreInputEvents(bool ignore, const std::string& optional_node_frame_id,
base::OnceClosure callback = base::OnceClosure());
  void SetIgnoreInputEvents(std::unique_ptr<SetIgnoreInputEventsParams> params, const std::string& optional_node_frame_id, base::OnceClosure callback);

 protected:
  Domain(MessageDispatcher* dispatcher);
  ~Domain();

  static void HandleDispatchDragEventResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchDragEventResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleDispatchKeyEventResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchKeyEventResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleInsertTextResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<InsertTextResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleImeSetCompositionResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ImeSetCompositionResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleDispatchMouseEventResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchMouseEventResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleDispatchTouchEventResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchTouchEventResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleEmulateTouchFromMouseEventResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EmulateTouchFromMouseEventResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetIgnoreInputEventsResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetIgnoreInputEventsResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSetInterceptDragsResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetInterceptDragsResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSynthesizePinchGestureResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SynthesizePinchGestureResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSynthesizeScrollGestureResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SynthesizeScrollGestureResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleSynthesizeTapGestureResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SynthesizeTapGestureResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);

  void DispatchDragInterceptedEvent(const base::Value& params);

  MessageDispatcher* dispatcher_;  // Not owned.
  base::ObserverList<ExperimentalObserver>::Unchecked observers_;

 protected:
  void RegisterEventHandlersIfNeeded();

 private:
  bool event_handlers_registered_ = false;

};

class ExperimentalDomain : public Domain {
 public:
  ExperimentalDomain(MessageDispatcher* dispatcher);

  ExperimentalDomain(const ExperimentalDomain&) = delete;
  ExperimentalDomain& operator=(const ExperimentalDomain&) = delete;

  ~ExperimentalDomain();

  // Add or remove an observer. |observer| must be removed before being
  // destroyed.
  void AddObserver(ExperimentalObserver* observer);
  void RemoveObserver(ExperimentalObserver* observer);

  // Dispatches a drag event into the page.
  void DispatchDragEvent(std::unique_ptr<DispatchDragEventParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchDragEventResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DispatchDragEventResult>)>());

  // This method emulates inserting text that doesn't come from a key press,
  // for example an emoji keyboard or an IME.
  void InsertText(std::unique_ptr<InsertTextParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<InsertTextResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<InsertTextResult>)>());

  // This method sets the current candidate text for ime.
  // Use imeCommitComposition to commit the final text.
  // Use imeSetComposition with empty string as text to cancel composition.
  void ImeSetComposition(std::unique_ptr<ImeSetCompositionParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ImeSetCompositionResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<ImeSetCompositionResult>)>());

  // Emulates touch event from the mouse event parameters.
  void EmulateTouchFromMouseEvent(std::unique_ptr<EmulateTouchFromMouseEventParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EmulateTouchFromMouseEventResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EmulateTouchFromMouseEventResult>)>());

  // Prevents default drag and drop behavior and instead emits `Input.dragIntercepted` events.
  // Drag and drop behavior can be directly controlled via `Input.dispatchDragEvent`.
  void SetInterceptDrags(std::unique_ptr<SetInterceptDragsParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetInterceptDragsResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SetInterceptDragsResult>)>());

  // Synthesizes a pinch gesture over a time period by issuing appropriate touch events.
  void SynthesizePinchGesture(std::unique_ptr<SynthesizePinchGestureParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SynthesizePinchGestureResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SynthesizePinchGestureResult>)>());

  // Synthesizes a scroll gesture over a time period by issuing appropriate touch events.
  void SynthesizeScrollGesture(std::unique_ptr<SynthesizeScrollGestureParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SynthesizeScrollGestureResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SynthesizeScrollGestureResult>)>());

  // Synthesizes a tap gesture over a time period by issuing appropriate touch events.
  void SynthesizeTapGesture(std::unique_ptr<SynthesizeTapGestureParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SynthesizeTapGestureResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<SynthesizeTapGestureResult>)>());

};

}  // namespace input
}  // namespace autofill_assistant

#endif  // COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_INPUT_H_
