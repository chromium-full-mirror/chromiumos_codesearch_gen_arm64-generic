// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/lock_screen_data.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_LOCK_SCREEN_DATA_H__
#define EXTENSIONS_COMMON_API_LOCK_SCREEN_DATA_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace lock_screen_data {

//
// Types
//

struct DataItemInfo {
  DataItemInfo();
  ~DataItemInfo();
  DataItemInfo(const DataItemInfo&) = delete;
  DataItemInfo& operator=(const DataItemInfo&) = delete;
  DataItemInfo(DataItemInfo&& rhs) noexcept;
  DataItemInfo& operator=(DataItemInfo&& rhs) noexcept;

  // Populates a DataItemInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DataItemInfo& out);

  // Populates a DataItemInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DataItemInfo& out);

  // Creates a deep copy of DataItemInfo.
  DataItemInfo Clone() const;

  // Creates a DataItemInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DataItemInfo> FromValue(const base::Value::Dict& value);

  // Creates a DataItemInfo object from a base::Value, or nullopt on failure.
  static std::optional<DataItemInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDataItemInfo object.
  base::Value::Dict ToValue() const;

  // The data item ID that can later be used to retrieve and update the associated
  // lock screen data.
  std::string id;

};

struct DataItemsAvailableEvent {
  DataItemsAvailableEvent();
  ~DataItemsAvailableEvent();
  DataItemsAvailableEvent(const DataItemsAvailableEvent&) = delete;
  DataItemsAvailableEvent& operator=(const DataItemsAvailableEvent&) = delete;
  DataItemsAvailableEvent(DataItemsAvailableEvent&& rhs) noexcept;
  DataItemsAvailableEvent& operator=(DataItemsAvailableEvent&& rhs) noexcept;

  // Populates a DataItemsAvailableEvent object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DataItemsAvailableEvent& out);

  // Populates a DataItemsAvailableEvent object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DataItemsAvailableEvent& out);

  // Creates a deep copy of DataItemsAvailableEvent.
  DataItemsAvailableEvent Clone() const;

  // Creates a DataItemsAvailableEvent object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<DataItemsAvailableEvent> FromValue(const base::Value::Dict& value);

  // Creates a DataItemsAvailableEvent object from a base::Value, or nullopt on
  // failure.
  static std::optional<DataItemsAvailableEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDataItemsAvailableEvent object.
  base::Value::Dict ToValue() const;

  // <p>Whether the event was dispatched as a result of the user session
  // getting unlocked.    </p> <p>For example:   <ul>     <li>If the app creates
  // new data items while shown on         the lock screen, when the user unlocks
  // the screen,         $(ref:onDataItemsAvailable) event will be dispatched with
  // this         property set to <code>true</code>.         </li>     <li>When
  // the user logs in, if not previously reported lock screen         data items
  // are found, which could happen if the user session had         been closed
  // while it was locked, $(ref:onDataItemsAvailable) will         be dispatched
  // with this property set to <code>false</code>.         </li>   </ul> </p>
  bool was_locked;

};


//
// Functions
//

namespace Create {

namespace Results {

base::Value::List Create(const DataItemInfo& item);
}  // namespace Results

}  // namespace Create

namespace GetAll {

namespace Results {

base::Value::List Create(const std::vector<DataItemInfo>& items);
}  // namespace Results

}  // namespace GetAll

namespace GetContent {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<uint8_t>& data);
}  // namespace Results

}  // namespace GetContent

namespace SetContent {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;

  std::vector<uint8_t> data;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetContent

namespace Delete {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Delete

//
// Events
//

namespace OnDataItemsAvailable {

extern const char kEventName[];  // "lockScreen.data.onDataItemsAvailable"

base::Value::List Create(const DataItemsAvailableEvent& event);
}  // namespace OnDataItemsAvailable

}  // namespace lock_screen_data
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_LOCK_SCREEN_DATA_H__
