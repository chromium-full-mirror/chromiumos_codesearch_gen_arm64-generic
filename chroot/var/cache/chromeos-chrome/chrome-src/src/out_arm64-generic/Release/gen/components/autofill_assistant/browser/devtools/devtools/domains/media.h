// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copied and modified from
// https://chromium.googlesource.com/chromium/src/+/a3f9d4fac81fc86065d867ab08fa4912ddf662c7/headless/lib/browser/devtools_api/domain_h.template
// Modifications include namespace and path.

#ifndef COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_MEDIA_H_
#define COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_MEDIA_H_

#include "base/callback.h"
#include "base/observer_list.h"
#include "base/values.h"
#include "components/autofill_assistant/browser/devtools/devtools/domains/types_media.h"
#include "components/autofill_assistant/browser/devtools/message_dispatcher.h"


namespace autofill_assistant {
namespace media {
class ExperimentalDomain;
class ExperimentalObserver;

class ExperimentalObserver {
 public:
  virtual ~ExperimentalObserver() {}
  // This can be called multiple times, and can be used to set / override /
  // remove player properties. A null propValue indicates removal.
  virtual void OnPlayerPropertiesChanged(const PlayerPropertiesChangedParams& params) {}
  // Send events as a list, allowing them to be batched on the browser for less
  // congestion. If batched, events must ALWAYS be in chronological order.
  virtual void OnPlayerEventsAdded(const PlayerEventsAddedParams& params) {}
  // Send a list of any messages that need to be delivered.
  virtual void OnPlayerMessagesLogged(const PlayerMessagesLoggedParams& params) {}
  // Send a list of any errors that need to be delivered.
  virtual void OnPlayerErrorsRaised(const PlayerErrorsRaisedParams& params) {}
  // Called whenever a player is created, or when a new agent joins and receives
  // a list of active players. If an agent is restored, it will receive the full
  // list of player ids and all events again.
  virtual void OnPlayersCreated(const PlayersCreatedParams& params) {}
};

class Observer : public ExperimentalObserver {
 public:
  virtual ~Observer() {}
  // Experimental: This can be called multiple times, and can be used to set / override /
  // remove player properties. A null propValue indicates removal.
  virtual void OnPlayerPropertiesChanged(const PlayerPropertiesChangedParams& params) final {}
  // Experimental: Send events as a list, allowing them to be batched on the browser for less
  // congestion. If batched, events must ALWAYS be in chronological order.
  virtual void OnPlayerEventsAdded(const PlayerEventsAddedParams& params) final {}
  // Experimental: Send a list of any messages that need to be delivered.
  virtual void OnPlayerMessagesLogged(const PlayerMessagesLoggedParams& params) final {}
  // Experimental: Send a list of any errors that need to be delivered.
  virtual void OnPlayerErrorsRaised(const PlayerErrorsRaisedParams& params) final {}
  // Experimental: Called whenever a player is created, or when a new agent joins and receives
  // a list of active players. If an agent is restored, it will receive the full
  // list of player ids and all events again.
  virtual void OnPlayersCreated(const PlayersCreatedParams& params) final {}
};

// This domain allows detailed inspection of media elements
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

 protected:
  Domain(MessageDispatcher* dispatcher);
  ~Domain();

  static void HandleEnableResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);
  static void HandleDisableResponse(
      base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)> callback,
      const MessageDispatcher::ReplyStatus& reply_status,
      const base::Value& response);

  void DispatchPlayerPropertiesChangedEvent(const base::Value& params);
  void DispatchPlayerEventsAddedEvent(const base::Value& params);
  void DispatchPlayerMessagesLoggedEvent(const base::Value& params);
  void DispatchPlayerErrorsRaisedEvent(const base::Value& params);
  void DispatchPlayersCreatedEvent(const base::Value& params);

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

  // Enables the Media domain
  void Enable(std::unique_ptr<EnableParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<EnableResult>)>());

  // Disables the Media domain.
  void Disable(std::unique_ptr<DisableParams> params, const std::string& optional_node_frame_id, base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)> callback = base::OnceCallback<void(const MessageDispatcher::ReplyStatus&, std::unique_ptr<DisableResult>)>());

};

}  // namespace media
}  // namespace autofill_assistant

#endif  // COMPONENTS_AUTOFILL_ASSISTANT_BROWSER_DEVTOOLS_DEVTOOLS_DOMAINS_MEDIA_H_
