// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/reading_list.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_READING_LIST_H__
#define CHROME_COMMON_EXTENSIONS_API_READING_LIST_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace reading_list {

//
// Types
//

struct ReadingListEntry {
  ReadingListEntry();
  ~ReadingListEntry();
  ReadingListEntry(const ReadingListEntry&) = delete;
  ReadingListEntry& operator=(const ReadingListEntry&) = delete;
  ReadingListEntry(ReadingListEntry&& rhs);
  ReadingListEntry& operator=(ReadingListEntry&& rhs);

  // Populates a ReadingListEntry object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReadingListEntry& out);

  // Populates a ReadingListEntry object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReadingListEntry& out);

  // Creates a deep copy of ReadingListEntry.
  ReadingListEntry Clone() const;

  // Creates a ReadingListEntry object from a base::Value, or NULL on failure.
  static std::unique_ptr<ReadingListEntry> FromValueDeprecated(const base::Value& value);

  // Creates a ReadingListEntry object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ReadingListEntry> FromValue(const base::Value::Dict& value);

  // Creates a ReadingListEntry object from a base::Value, or nullopt on
  // failure.
  static absl::optional<ReadingListEntry> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReadingListEntry object.
  base::Value::Dict ToValue() const;

  // The url of the entry.
  std::string url;

  // The title of the entry.
  std::string title;

  // Will be <code>true</code> if the entry has been read.
  bool has_been_read;

  // The last time the entry was updated. This value is in milliseconds since Jan
  // 1, 1970.
  double last_update_time;

  // The time the entry was created. Recorded in milliseconds since Jan 1, 1970.
  double creation_time;

};

struct AddEntryOptions {
  AddEntryOptions();
  ~AddEntryOptions();
  AddEntryOptions(const AddEntryOptions&) = delete;
  AddEntryOptions& operator=(const AddEntryOptions&) = delete;
  AddEntryOptions(AddEntryOptions&& rhs);
  AddEntryOptions& operator=(AddEntryOptions&& rhs);

  // Populates a AddEntryOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AddEntryOptions& out);

  // Populates a AddEntryOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AddEntryOptions& out);

  // Creates a deep copy of AddEntryOptions.
  AddEntryOptions Clone() const;

  // Creates a AddEntryOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<AddEntryOptions> FromValueDeprecated(const base::Value& value);

  // Creates a AddEntryOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<AddEntryOptions> FromValue(const base::Value::Dict& value);

  // Creates a AddEntryOptions object from a base::Value, or nullopt on failure.
  static absl::optional<AddEntryOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAddEntryOptions object.
  base::Value::Dict ToValue() const;

  // The url of the entry.
  std::string url;

  // The title of the entry.
  std::string title;

  // Will be <code>true</code> if the entry has been read.
  bool has_been_read;

};

struct RemoveOptions {
  RemoveOptions();
  ~RemoveOptions();
  RemoveOptions(const RemoveOptions&) = delete;
  RemoveOptions& operator=(const RemoveOptions&) = delete;
  RemoveOptions(RemoveOptions&& rhs);
  RemoveOptions& operator=(RemoveOptions&& rhs);

  // Populates a RemoveOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RemoveOptions& out);

  // Populates a RemoveOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RemoveOptions& out);

  // Creates a deep copy of RemoveOptions.
  RemoveOptions Clone() const;

  // Creates a RemoveOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<RemoveOptions> FromValueDeprecated(const base::Value& value);

  // Creates a RemoveOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<RemoveOptions> FromValue(const base::Value::Dict& value);

  // Creates a RemoveOptions object from a base::Value, or nullopt on failure.
  static absl::optional<RemoveOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRemoveOptions object.
  base::Value::Dict ToValue() const;

  // The url to remove.
  std::string url;

};

struct UpdateEntryOptions {
  UpdateEntryOptions();
  ~UpdateEntryOptions();
  UpdateEntryOptions(const UpdateEntryOptions&) = delete;
  UpdateEntryOptions& operator=(const UpdateEntryOptions&) = delete;
  UpdateEntryOptions(UpdateEntryOptions&& rhs);
  UpdateEntryOptions& operator=(UpdateEntryOptions&& rhs);

  // Populates a UpdateEntryOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UpdateEntryOptions& out);

  // Populates a UpdateEntryOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UpdateEntryOptions& out);

  // Creates a deep copy of UpdateEntryOptions.
  UpdateEntryOptions Clone() const;

  // Creates a UpdateEntryOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<UpdateEntryOptions> FromValueDeprecated(const base::Value& value);

  // Creates a UpdateEntryOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<UpdateEntryOptions> FromValue(const base::Value::Dict& value);

  // Creates a UpdateEntryOptions object from a base::Value, or nullopt on
  // failure.
  static absl::optional<UpdateEntryOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUpdateEntryOptions object.
  base::Value::Dict ToValue() const;

  // The url that will be updated.
  std::string url;

  // The new title. The existing tile remains if a value isn't provided.
  absl::optional<std::string> title;

  // The updated read status. The existing status remains if a value isn't
  // provided.
  absl::optional<bool> has_been_read;

};

struct QueryInfo {
  QueryInfo();
  ~QueryInfo();
  QueryInfo(const QueryInfo&) = delete;
  QueryInfo& operator=(const QueryInfo&) = delete;
  QueryInfo(QueryInfo&& rhs);
  QueryInfo& operator=(QueryInfo&& rhs);

  // Populates a QueryInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, QueryInfo& out);

  // Populates a QueryInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, QueryInfo& out);

  // Creates a deep copy of QueryInfo.
  QueryInfo Clone() const;

  // Creates a QueryInfo object from a base::Value, or NULL on failure.
  static std::unique_ptr<QueryInfo> FromValueDeprecated(const base::Value& value);

  // Creates a QueryInfo object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<QueryInfo> FromValue(const base::Value::Dict& value);

  // Creates a QueryInfo object from a base::Value, or nullopt on failure.
  static absl::optional<QueryInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisQueryInfo object.
  base::Value::Dict ToValue() const;

  // A url to search for.
  absl::optional<std::string> url;

  // A title to search for.
  absl::optional<std::string> title;

  // Indicates whether to search for read (<code>true</code>) or unread
  // (<code>false</code>) items.
  absl::optional<bool> has_been_read;

};


//
// Functions
//

namespace AddEntry {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The entry to add to the reading list.
  AddEntryOptions entry;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AddEntry

namespace RemoveEntry {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The entry to remove from the reading list.
  RemoveOptions info;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveEntry

namespace UpdateEntry {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The entry to update.
  UpdateEntryOptions info;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateEntry

namespace Query {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The properties to search for.
  QueryInfo info;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<ReadingListEntry>& entries);
}  // namespace Results

}  // namespace Query

//
// Events
//

namespace OnEntryAdded {

extern const char kEventName[];  // "readingList.onEntryAdded"

// The entry that was added.
base::Value::List Create(const ReadingListEntry& entry);
}  // namespace OnEntryAdded

namespace OnEntryRemoved {

extern const char kEventName[];  // "readingList.onEntryRemoved"

// The entry that was removed.
base::Value::List Create(const ReadingListEntry& entry);
}  // namespace OnEntryRemoved

namespace OnEntryUpdated {

extern const char kEventName[];  // "readingList.onEntryUpdated"

// The entry that was updated.
base::Value::List Create(const ReadingListEntry& entry);
}  // namespace OnEntryUpdated

}  // namespace reading_list
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_READING_LIST_H__
