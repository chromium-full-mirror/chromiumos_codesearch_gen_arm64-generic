// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/storage.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_STORAGE_H__
#define EXTENSIONS_COMMON_API_STORAGE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace storage {

//
// Properties
//

// Items in the <code>sync</code> storage area are synced using Chrome Sync.
namespace sync {
  // The maximum total amount (in bytes) of data that can be stored in sync
  // storage, as measured by the JSON stringification of every value plus every
  // key's length. Updates that would cause this limit to be exceeded fail
  // immediately and set $(ref:runtime.lastError).
  extern const int QUOTA_BYTES;
  // The maximum size (in bytes) of each individual item in sync storage, as
  // measured by the JSON stringification of its value plus its key length.
  // Updates containing items larger than this limit will fail immediately and set
  // $(ref:runtime.lastError).
  extern const int QUOTA_BYTES_PER_ITEM;
  // The maximum number of items that can be stored in sync storage. Updates that
  // would cause this limit to be exceeded will fail immediately and set
  // $(ref:runtime.lastError).
  extern const int MAX_ITEMS;
  // <p>The maximum number of <code>set</code>, <code>remove</code>, or
  // <code>clear</code> operations that can be performed each hour. This is 1
  // every 2 seconds, a lower ceiling than the short term higher writes-per-minute
  // limit.</p><p>Updates that would cause this limit to be exceeded fail
  // immediately and set $(ref:runtime.lastError).</p>
  extern const int MAX_WRITE_OPERATIONS_PER_HOUR;
  // <p>The maximum number of <code>set</code>, <code>remove</code>, or
  // <code>clear</code> operations that can be performed each minute. This is 2
  // per second, providing higher throughput than writes-per-hour over a shorter
  // period of time.</p><p>Updates that would cause this limit to be exceeded fail
  // immediately and set $(ref:runtime.lastError).</p>
  extern const int MAX_WRITE_OPERATIONS_PER_MINUTE;
  //
  extern const int MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE;
}  // namespace sync

// Items in the <code>local</code> storage area are local to each machine.
namespace local {
  // The maximum amount (in bytes) of data that can be stored in local storage, as
  // measured by the JSON stringification of every value plus every key's length.
  // This value will be ignored if the extension has the
  // <code>unlimitedStorage</code> permission. Updates that would cause this limit
  // to be exceeded fail immediately and set $(ref:runtime.lastError).
  extern const int QUOTA_BYTES;
}  // namespace local

// Items in the <code>session</code> storage area are stored in-memory and will
// not be persisted to disk.
namespace session {
  // The maximum amount (in bytes) of data that can be stored in memory, as
  // measured by estimating the dynamically allocated memory usage of every value
  // and key. Updates that would cause this limit to be exceeded fail immediately
  // and set $(ref:runtime.lastError).
  extern const int QUOTA_BYTES;
}  // namespace session

//
// Types
//

// The storage area's access level.
enum AccessLevel {
  ACCESS_LEVEL_NONE,
  ACCESS_LEVEL_TRUSTED_CONTEXTS,
  ACCESS_LEVEL_TRUSTED_AND_UNTRUSTED_CONTEXTS,
  ACCESS_LEVEL_LAST = ACCESS_LEVEL_TRUSTED_AND_UNTRUSTED_CONTEXTS,
};


const char* ToString(AccessLevel as_enum);
AccessLevel ParseAccessLevel(const std::string& as_string);

struct StorageChange {
  StorageChange();
  ~StorageChange();
  StorageChange(const StorageChange&) = delete;
  StorageChange& operator=(const StorageChange&) = delete;
  StorageChange(StorageChange&& rhs);
  StorageChange& operator=(StorageChange&& rhs);

  // Populates a StorageChange object from a base::Value. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, StorageChange* out);

  // Creates a StorageChange object from a base::Value, or NULL on failure.
  static std::unique_ptr<StorageChange> FromValue(const base::Value& value);

  // Returns a new base::DictionaryValue representing the serialized form of
  // this StorageChange object.
  std::unique_ptr<base::DictionaryValue> ToValue() const;

  // The old value of the item, if there was an old value.
  absl::optional<base::Value> old_value;

  // The new value of the item, if there is a new value.
  absl::optional<base::Value> new_value;

};

namespace StorageArea {

namespace Get {

struct Params {
  static std::unique_ptr<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  ~Params();

  // A single key to get, list of keys to get, or a dictionary specifying default
  // values (see description of the object).  An empty list or object will return
  // an empty result object.  Pass in <code>null</code> to get the entire contents
  // of storage.
  struct Keys {
    Keys();
    ~Keys();
    Keys(const Keys&) = delete;
    Keys& operator=(const Keys&) = delete;
    Keys(Keys&& rhs);
    Keys& operator=(Keys&& rhs);

    // Populates a Keys object from a base::Value. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value& value, Keys* out);
    // Storage items to return in the callback, where the values are replaced with
    // those from storage if they exist.
    struct Object {
      Object();
      ~Object();
      Object(const Object&) = delete;
      Object& operator=(const Object&) = delete;
      Object(Object&& rhs);
      Object& operator=(Object&& rhs);

      // Populates a Object object from a base::Value. Returns whether |out| was
      // successfully populated.
      static bool Populate(const base::Value& value, Object* out);

      base::DictionaryValue additional_properties;
    };


    // Choices:
    absl::optional<std::string> as_string;
    absl::optional<std::vector<std::string>> as_strings;
    std::unique_ptr<Object> as_object;
  };


  // A single key to get, list of keys to get, or a dictionary specifying default
  // values (see description of the object).  An empty list or object will return
  // an empty result object.  Pass in <code>null</code> to get the entire contents
  // of storage.
  std::unique_ptr<Keys> keys;


 private:
  Params();
};

namespace Results {

// Object with items in their key-value mappings.
struct Items {
  Items();
  ~Items();
  Items(const Items&) = delete;
  Items& operator=(const Items&) = delete;
  Items(Items&& rhs);
  Items& operator=(Items&& rhs);

  // Returns a new base::DictionaryValue representing the serialized form of
  // this Items object.
  std::unique_ptr<base::DictionaryValue> ToValue() const;

  base::DictionaryValue additional_properties;
};


// Object with items in their key-value mappings.
base::Value::List Create(const Items& items);
}  // namespace Results

}  // namespace Get

namespace GetBytesInUse {

struct Params {
  static std::unique_ptr<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  ~Params();

  // A single key or list of keys to get the total usage for. An empty list will
  // return 0. Pass in <code>null</code> to get the total usage of all of storage.
  struct Keys {
    Keys();
    ~Keys();
    Keys(const Keys&) = delete;
    Keys& operator=(const Keys&) = delete;
    Keys(Keys&& rhs);
    Keys& operator=(Keys&& rhs);

    // Populates a Keys object from a base::Value. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value& value, Keys* out);
    // Choices:
    absl::optional<std::string> as_string;
    absl::optional<std::vector<std::string>> as_strings;
  };


  // A single key or list of keys to get the total usage for. An empty list will
  // return 0. Pass in <code>null</code> to get the total usage of all of storage.
  std::unique_ptr<Keys> keys;


 private:
  Params();
};

namespace Results {

// Amount of space being used in storage, in bytes.
base::Value::List Create(int bytes_in_use);
}  // namespace Results

}  // namespace GetBytesInUse

namespace Set {

struct Params {
  static std::unique_ptr<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  ~Params();

  // <p>An object which gives each key/value pair to update storage with. Any
  // other key/value pairs in storage will not be affected.</p><p>Primitive values
  // such as numbers will serialize as expected. Values with a <code>typeof</code>
  // <code>"object"</code> and <code>"function"</code> will typically serialize to
  // <code>{}</code>, with the exception of <code>Array</code> (serializes as
  // expected), <code>Date</code>, and <code>Regex</code> (serialize using their
  // <code>String</code> representation).</p>
  struct Items {
    Items();
    ~Items();
    Items(const Items&) = delete;
    Items& operator=(const Items&) = delete;
    Items(Items&& rhs);
    Items& operator=(Items&& rhs);

    // Populates a Items object from a base::Value. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value& value, Items* out);

    base::DictionaryValue additional_properties;
  };


  // <p>An object which gives each key/value pair to update storage with. Any
  // other key/value pairs in storage will not be affected.</p><p>Primitive values
  // such as numbers will serialize as expected. Values with a <code>typeof</code>
  // <code>"object"</code> and <code>"function"</code> will typically serialize to
  // <code>{}</code>, with the exception of <code>Array</code> (serializes as
  // expected), <code>Date</code>, and <code>Regex</code> (serialize using their
  // <code>String</code> representation).</p>
  Items items;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Set

namespace Remove {

struct Params {
  static std::unique_ptr<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  ~Params();

  // A single key or a list of keys for items to remove.
  struct Keys {
    Keys();
    ~Keys();
    Keys(const Keys&) = delete;
    Keys& operator=(const Keys&) = delete;
    Keys(Keys&& rhs);
    Keys& operator=(Keys&& rhs);

    // Populates a Keys object from a base::Value. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value& value, Keys* out);
    // Choices:
    absl::optional<std::string> as_string;
    absl::optional<std::vector<std::string>> as_strings;
  };


  // A single key or a list of keys for items to remove.
  Keys keys;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Remove

namespace Clear {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Clear

namespace SetAccessLevel {

struct Params {
  static std::unique_ptr<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  ~Params();

  struct AccessOptions {
    AccessOptions();
    ~AccessOptions();
    AccessOptions(const AccessOptions&) = delete;
    AccessOptions& operator=(const AccessOptions&) = delete;
    AccessOptions(AccessOptions&& rhs);
    AccessOptions& operator=(AccessOptions&& rhs);

    // Populates a AccessOptions object from a base::Value. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, AccessOptions* out);

    // The access level of the storage area.
    AccessLevel access_level;

  };


  AccessOptions access_options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetAccessLevel

}  // namespace StorageArea


//
// Events
//

namespace OnChanged {

extern const char kEventName[];  // "storage.onChanged"

// Object mapping each key that changed to its corresponding
// $(ref:storage.StorageChange) for that item.
struct Changes {
  Changes();
  ~Changes();
  Changes(const Changes&) = delete;
  Changes& operator=(const Changes&) = delete;
  Changes(Changes&& rhs);
  Changes& operator=(Changes&& rhs);

  // Returns a new base::DictionaryValue representing the serialized form of
  // this Changes object.
  std::unique_ptr<base::DictionaryValue> ToValue() const;

  std::map<std::string, StorageChange> additional_properties;
};


// Object mapping each key that changed to its corresponding
// $(ref:storage.StorageChange) for that item.
// The name of the storage area (<code>"sync"</code>, <code>"local"</code> or
// <code>"managed"</code>) the changes are for.
base::Value::List Create(const Changes& changes, const std::string& area_name);
}  // namespace OnChanged

}  // namespace storage
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_STORAGE_H__
