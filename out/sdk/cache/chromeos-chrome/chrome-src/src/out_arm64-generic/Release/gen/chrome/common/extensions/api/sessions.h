// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/sessions.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SESSIONS_H__
#define CHROME_COMMON_EXTENSIONS_API_SESSIONS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "chrome/common/extensions/api/tabs.h"
#include "chrome/common/extensions/api/windows.h"


namespace extensions {
namespace api {
namespace sessions {

//
// Properties
//

// The maximum number of $(ref:sessions.Session) that will be included in a
// requested list.
extern const int MAX_SESSION_RESULTS;

//
// Types
//

struct Filter {
  Filter();
  ~Filter();
  Filter(const Filter&) = delete;
  Filter& operator=(const Filter&) = delete;
  Filter(Filter&& rhs);
  Filter& operator=(Filter&& rhs);

  // Populates a Filter object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Filter& out);

  // Populates a Filter object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Filter& out);

  // Creates a deep copy of Filter.
  Filter Clone() const;

  // Creates a Filter object from a base::Value, or NULL on failure.
  static std::unique_ptr<Filter> FromValueDeprecated(const base::Value& value);

  // Creates a Filter object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Filter> FromValue(const base::Value::Dict& value);

  // Creates a Filter object from a base::Value, or nullopt on failure.
  static absl::optional<Filter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFilter object.
  base::Value::Dict ToValue() const;

  // The maximum number of entries to be fetched in the requested list. Omit this
  // parameter to fetch the maximum number of entries
  // ($(ref:sessions.MAX_SESSION_RESULTS)).
  absl::optional<int> max_results;

};

struct Session {
  Session();
  ~Session();
  Session(const Session&) = delete;
  Session& operator=(const Session&) = delete;
  Session(Session&& rhs);
  Session& operator=(Session&& rhs);

  // Populates a Session object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Session& out);

  // Populates a Session object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Session& out);

  // Creates a deep copy of Session.
  Session Clone() const;

  // Creates a Session object from a base::Value, or NULL on failure.
  static std::unique_ptr<Session> FromValueDeprecated(const base::Value& value);

  // Creates a Session object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Session> FromValue(const base::Value::Dict& value);

  // Creates a Session object from a base::Value, or nullopt on failure.
  static absl::optional<Session> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSession object.
  base::Value::Dict ToValue() const;

  // The time when the window or tab was closed or modified, represented in
  // milliseconds since the epoch.
  int last_modified;

  // The $(ref:tabs.Tab), if this entry describes a tab. Either this or
  // $(ref:sessions.Session.window) will be set.
  absl::optional<extensions::api::tabs::Tab> tab;

  // The $(ref:windows.Window), if this entry describes a window. Either this or
  // $(ref:sessions.Session.tab) will be set.
  absl::optional<extensions::api::windows::Window> window;

};

struct Device {
  Device();
  ~Device();
  Device(const Device&) = delete;
  Device& operator=(const Device&) = delete;
  Device(Device&& rhs);
  Device& operator=(Device&& rhs);

  // Populates a Device object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Device& out);

  // Populates a Device object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Device& out);

  // Creates a deep copy of Device.
  Device Clone() const;

  // Creates a Device object from a base::Value, or NULL on failure.
  static std::unique_ptr<Device> FromValueDeprecated(const base::Value& value);

  // Creates a Device object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<Device> FromValue(const base::Value::Dict& value);

  // Creates a Device object from a base::Value, or nullopt on failure.
  static absl::optional<Device> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDevice object.
  base::Value::Dict ToValue() const;

  std::string info;

  // The name of the foreign device.
  std::string device_name;

  // A list of open window sessions for the foreign device, sorted from most
  // recently to least recently modified session.
  std::vector<Session> sessions;

};


//
// Functions
//

namespace GetRecentlyClosed {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<Filter> filter;


 private:
  Params();
};

namespace Results {

// The list of closed entries in reverse order that they were closed (the most
// recently closed tab or window will be at index <code>0</code>). The entries
// may contain either tabs or windows.
base::Value::List Create(const std::vector<Session>& sessions);
}  // namespace Results

}  // namespace GetRecentlyClosed

namespace GetDevices {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  absl::optional<Filter> filter;


 private:
  Params();
};

namespace Results {

// The list of $(ref:sessions.Device) objects for each synced session, sorted in
// order from device with most recently modified session to device with least
// recently modified session. $(ref:tabs.Tab) objects are sorted by recency in
// the $(ref:windows.Window) of the $(ref:sessions.Session) objects.
base::Value::List Create(const std::vector<Device>& devices);
}  // namespace Results

}  // namespace GetDevices

namespace Restore {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The $(ref:windows.Window.sessionId), or $(ref:tabs.Tab.sessionId) to restore.
  // If this parameter is not specified, the most recently closed session is
  // restored.
  absl::optional<std::string> session_id;


 private:
  Params();
};

namespace Results {

// A $(ref:sessions.Session) containing the restored $(ref:windows.Window) or
// $(ref:tabs.Tab) object.
base::Value::List Create(const Session& restored_session);
}  // namespace Results

}  // namespace Restore

//
// Events
//

namespace OnChanged {

extern const char kEventName[];  // "sessions.onChanged"

base::Value::List Create();
}  // namespace OnChanged

}  // namespace sessions
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SESSIONS_H__
