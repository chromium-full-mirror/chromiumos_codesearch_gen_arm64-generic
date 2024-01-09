// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/activity_log_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_ACTIVITY_LOG_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_ACTIVITY_LOG_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace activity_log_private {

//
// Types
//

enum class ExtensionActivityType {
  kNone = 0,
  kApiCall,
  kApiEvent,
  kContentScript,
  kDomAccess,
  kDomEvent,
  kWebRequest,
  kMaxValue = kWebRequest,
};


const char* ToString(ExtensionActivityType as_enum);
ExtensionActivityType ParseExtensionActivityType(base::StringPiece as_string);
std::u16string GetExtensionActivityTypeParseError(base::StringPiece as_string);

// Exact match or any
enum class ExtensionActivityFilter {
  kNone = 0,
  kApiCall,
  kApiEvent,
  kContentScript,
  kDomAccess,
  kDomEvent,
  kWebRequest,
  kAny,
  kMaxValue = kAny,
};


const char* ToString(ExtensionActivityFilter as_enum);
ExtensionActivityFilter ParseExtensionActivityFilter(base::StringPiece as_string);
std::u16string GetExtensionActivityFilterParseError(base::StringPiece as_string);

enum class ExtensionActivityDomVerb {
  kNone = 0,
  kGetter,
  kSetter,
  kMethod,
  kInserted,
  kXhr,
  kWebrequest,
  kModified,
  kMaxValue = kModified,
};


const char* ToString(ExtensionActivityDomVerb as_enum);
ExtensionActivityDomVerb ParseExtensionActivityDomVerb(base::StringPiece as_string);
std::u16string GetExtensionActivityDomVerbParseError(base::StringPiece as_string);

// This corresponds to a row from the ActivityLog database. Fields will be blank
// if they were specified precisely in a lookup filter.
struct ExtensionActivity {
  ExtensionActivity();
  ~ExtensionActivity();
  ExtensionActivity(const ExtensionActivity&) = delete;
  ExtensionActivity& operator=(const ExtensionActivity&) = delete;
  ExtensionActivity(ExtensionActivity&& rhs) noexcept;
  ExtensionActivity& operator=(ExtensionActivity&& rhs) noexcept;

  // Populates a ExtensionActivity object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionActivity& out);

  // Populates a ExtensionActivity object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionActivity& out);

  // Creates a deep copy of ExtensionActivity.
  ExtensionActivity Clone() const;

  // Creates a ExtensionActivity object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ExtensionActivity> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionActivity object from a base::Value, or nullopt on
  // failure.
  static std::optional<ExtensionActivity> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionActivity object.
  base::Value::Dict ToValue() const;

  struct Other {
    Other();
    ~Other();
    Other(const Other&) = delete;
    Other& operator=(const Other&) = delete;
    Other(Other&& rhs) noexcept;
    Other& operator=(Other&& rhs) noexcept;

    // Populates a Other object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Other& out);

    // Populates a Other object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Other& out);

    // Creates a deep copy of Other.
    Other Clone() const;

    // Creates a Other object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Other> FromValue(const base::Value::Dict& value);

    // Creates a Other object from a base::Value, or nullopt on failure.
    static std::optional<Other> FromValue(const base::Value& value);

    // Returns a new base::Value::Dict representing the serialized form of
    // thisOther object.
    base::Value::Dict ToValue() const;

    std::optional<bool> prerender;

    ExtensionActivityDomVerb dom_verb;

    std::optional<std::string> web_request;

    std::optional<std::string> extra;

  };


  // An ID of a row in the ActivityLog database that corresponds to the activity.
  // ID is set only on activities retrieved from the database.
  std::optional<std::string> activity_id;

  std::optional<std::string> extension_id;

  ExtensionActivityType activity_type;

  std::optional<double> time;

  std::optional<std::string> api_call;

  std::optional<std::string> args;

  std::optional<double> count;

  std::optional<std::string> page_url;

  std::optional<std::string> page_title;

  std::optional<std::string> arg_url;

  std::optional<Other> other;

};

// Used to specify values for a lookup.
struct Filter {
  Filter();
  ~Filter();
  Filter(const Filter&) = delete;
  Filter& operator=(const Filter&) = delete;
  Filter(Filter&& rhs) noexcept;
  Filter& operator=(Filter&& rhs) noexcept;

  // Populates a Filter object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Filter& out);

  // Populates a Filter object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Filter& out);

  // Creates a deep copy of Filter.
  Filter Clone() const;

  // Creates a Filter object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Filter> FromValue(const base::Value::Dict& value);

  // Creates a Filter object from a base::Value, or nullopt on failure.
  static std::optional<Filter> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFilter object.
  base::Value::Dict ToValue() const;

  // Exact match
  std::optional<std::string> extension_id;

  ExtensionActivityFilter activity_type;

  // Exact match
  std::optional<std::string> api_call;

  // Treated as a prefix
  std::optional<std::string> page_url;

  // Treated as a prefix
  std::optional<std::string> arg_url;

  // Used to lookup a precise day; today is 0
  std::optional<int> days_ago;

};

// This holds the results of a lookup, the filter of the lookup, the time of the
// lookup, and whether there are more results that match.
struct ActivityResultSet {
  ActivityResultSet();
  ~ActivityResultSet();
  ActivityResultSet(const ActivityResultSet&) = delete;
  ActivityResultSet& operator=(const ActivityResultSet&) = delete;
  ActivityResultSet(ActivityResultSet&& rhs) noexcept;
  ActivityResultSet& operator=(ActivityResultSet&& rhs) noexcept;

  // Populates a ActivityResultSet object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ActivityResultSet& out);

  // Populates a ActivityResultSet object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ActivityResultSet& out);

  // Creates a deep copy of ActivityResultSet.
  ActivityResultSet Clone() const;

  // Creates a ActivityResultSet object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ActivityResultSet> FromValue(const base::Value::Dict& value);

  // Creates a ActivityResultSet object from a base::Value, or nullopt on
  // failure.
  static std::optional<ActivityResultSet> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisActivityResultSet object.
  base::Value::Dict ToValue() const;

  std::vector<ExtensionActivity> activities;

};


//
// Functions
//

namespace GetExtensionActivities {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Fill out the fields that you want to search for in the database.
  Filter filter;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ActivityResultSet& result);
}  // namespace Results

}  // namespace GetExtensionActivities

namespace DeleteActivities {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Erases only the activities which IDs are listed in the array.
  std::vector<std::string> activity_ids;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteActivities

namespace DeleteActivitiesByExtension {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID of the extension to delete activities for.
  std::string extension_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteActivitiesByExtension

namespace DeleteDatabase {

}  // namespace DeleteDatabase

namespace DeleteUrls {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Erases only the URLs listed; if empty, erases all URLs.
  std::vector<std::string> urls;


 private:
  Params();
};

}  // namespace DeleteUrls

//
// Events
//

namespace OnExtensionActivity {

extern const char kEventName[];  // "activityLogPrivate.onExtensionActivity"

base::Value::List Create(const ExtensionActivity& activity);
}  // namespace OnExtensionActivity

}  // namespace activity_log_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_ACTIVITY_LOG_PRIVATE_H__
