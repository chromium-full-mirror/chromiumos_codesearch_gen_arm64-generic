// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/history.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_HISTORY_H__
#define CHROME_COMMON_EXTENSIONS_API_HISTORY_H__

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
namespace history {

//
// Types
//

// The <a href='#transition_types'>transition type</a> for this visit from its
// referrer.
enum class TransitionType {
  kNone = 0,
  kLink,
  kTyped,
  kAutoBookmark,
  kAutoSubframe,
  kManualSubframe,
  kGenerated,
  kAutoToplevel,
  kFormSubmit,
  kReload,
  kKeyword,
  kKeywordGenerated,
  kMaxValue = kKeywordGenerated,
};


const char* ToString(TransitionType as_enum);
TransitionType ParseTransitionType(base::StringPiece as_string);
std::u16string GetTransitionTypeParseError(base::StringPiece as_string);

// An object encapsulating one result of a history query.
struct HistoryItem {
  HistoryItem();
  ~HistoryItem();
  HistoryItem(const HistoryItem&) = delete;
  HistoryItem& operator=(const HistoryItem&) = delete;
  HistoryItem(HistoryItem&& rhs) noexcept;
  HistoryItem& operator=(HistoryItem&& rhs) noexcept;

  // Populates a HistoryItem object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HistoryItem& out);

  // Populates a HistoryItem object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, HistoryItem& out);

  // Creates a deep copy of HistoryItem.
  HistoryItem Clone() const;

  // Creates a HistoryItem object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<HistoryItem> FromValue(const base::Value::Dict& value);

  // Creates a HistoryItem object from a base::Value, or nullopt on failure.
  static std::optional<HistoryItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHistoryItem object.
  base::Value::Dict ToValue() const;

  // The unique identifier for the item.
  std::string id;

  // The URL navigated to by a user.
  std::optional<std::string> url;

  // The title of the page when it was last loaded.
  std::optional<std::string> title;

  // When this page was last loaded, represented in milliseconds since the epoch.
  std::optional<double> last_visit_time;

  // The number of times the user has navigated to this page.
  std::optional<int> visit_count;

  // The number of times the user has navigated to this page by typing in the
  // address.
  std::optional<int> typed_count;

};

// An object encapsulating one visit to a URL.
struct VisitItem {
  VisitItem();
  ~VisitItem();
  VisitItem(const VisitItem&) = delete;
  VisitItem& operator=(const VisitItem&) = delete;
  VisitItem(VisitItem&& rhs) noexcept;
  VisitItem& operator=(VisitItem&& rhs) noexcept;

  // Populates a VisitItem object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, VisitItem& out);

  // Populates a VisitItem object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, VisitItem& out);

  // Creates a deep copy of VisitItem.
  VisitItem Clone() const;

  // Creates a VisitItem object from a base::Value::Dict, or nullopt on failure.
  static std::optional<VisitItem> FromValue(const base::Value::Dict& value);

  // Creates a VisitItem object from a base::Value, or nullopt on failure.
  static std::optional<VisitItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisVisitItem object.
  base::Value::Dict ToValue() const;

  // The unique identifier for the corresponding $(ref:history.HistoryItem).
  std::string id;

  // The unique identifier for this visit.
  std::string visit_id;

  // When this visit occurred, represented in milliseconds since the epoch.
  std::optional<double> visit_time;

  // The visit ID of the referrer.
  std::string referring_visit_id;

  // The <a href='#transition_types'>transition type</a> for this visit from its
  // referrer.
  TransitionType transition;

  // True if the visit originated on this device. False if it was synced from a
  // different device.
  bool is_local;

};

struct UrlDetails {
  UrlDetails();
  ~UrlDetails();
  UrlDetails(const UrlDetails&) = delete;
  UrlDetails& operator=(const UrlDetails&) = delete;
  UrlDetails(UrlDetails&& rhs) noexcept;
  UrlDetails& operator=(UrlDetails&& rhs) noexcept;

  // Populates a UrlDetails object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, UrlDetails& out);

  // Populates a UrlDetails object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, UrlDetails& out);

  // Creates a deep copy of UrlDetails.
  UrlDetails Clone() const;

  // Creates a UrlDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UrlDetails> FromValue(const base::Value::Dict& value);

  // Creates a UrlDetails object from a base::Value, or nullopt on failure.
  static std::optional<UrlDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUrlDetails object.
  base::Value::Dict ToValue() const;

  // The URL for the operation. It must be in the format as returned from a call
  // to history.search.
  std::string url;

};


//
// Functions
//

namespace Search {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Query {
    Query();
    ~Query();
    Query(const Query&) = delete;
    Query& operator=(const Query&) = delete;
    Query(Query&& rhs) noexcept;
    Query& operator=(Query&& rhs) noexcept;

    // Populates a Query object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Query& out);

    // Populates a Query object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Query& out);

    // Creates a deep copy of Query.
    Query Clone() const;

    // Creates a Query object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Query> FromValue(const base::Value::Dict& value);

    // Creates a Query object from a base::Value, or nullopt on failure.
    static std::optional<Query> FromValue(const base::Value& value);

    // A free-text query to the history service.  Leave empty to retrieve all pages.
    std::string text;

    // Limit results to those visited after this date, represented in milliseconds
    // since the epoch. If not specified, this defaults to 24 hours in the past.
    std::optional<double> start_time;

    // Limit results to those visited before this date, represented in milliseconds
    // since the epoch.
    std::optional<double> end_time;

    // The maximum number of results to retrieve.  Defaults to 100.
    std::optional<int> max_results;

  };


  Query query;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<HistoryItem>& results);
}  // namespace Results

}  // namespace Search

namespace GetVisits {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UrlDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<VisitItem>& results);
}  // namespace Results

}  // namespace GetVisits

namespace AddUrl {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UrlDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AddUrl

namespace DeleteUrl {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UrlDetails details;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteUrl

namespace DeleteRange {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct Range {
    Range();
    ~Range();
    Range(const Range&) = delete;
    Range& operator=(const Range&) = delete;
    Range(Range&& rhs) noexcept;
    Range& operator=(Range&& rhs) noexcept;

    // Populates a Range object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Range& out);

    // Populates a Range object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Range& out);

    // Creates a deep copy of Range.
    Range Clone() const;

    // Creates a Range object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Range> FromValue(const base::Value::Dict& value);

    // Creates a Range object from a base::Value, or nullopt on failure.
    static std::optional<Range> FromValue(const base::Value& value);

    // Items added to history after this date, represented in milliseconds since the
    // epoch.
    double start_time;

    // Items added to history before this date, represented in milliseconds since
    // the epoch.
    double end_time;

  };


  Range range;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteRange

namespace DeleteAll {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteAll

//
// Events
//

namespace OnVisited {

extern const char kEventName[];  // "history.onVisited"

base::Value::List Create(const HistoryItem& result);
}  // namespace OnVisited

namespace OnVisitRemoved {

extern const char kEventName[];  // "history.onVisitRemoved"

struct Removed {
  Removed();
  ~Removed();
  Removed(const Removed&) = delete;
  Removed& operator=(const Removed&) = delete;
  Removed(Removed&& rhs) noexcept;
  Removed& operator=(Removed&& rhs) noexcept;

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRemoved object.
  base::Value::Dict ToValue() const;

  // True if all history was removed.  If true, then urls will be empty.
  bool all_history;

  std::optional<std::vector<std::string>> urls;

};


base::Value::List Create(const Removed& removed);
}  // namespace OnVisitRemoved

}  // namespace history
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_HISTORY_H__
