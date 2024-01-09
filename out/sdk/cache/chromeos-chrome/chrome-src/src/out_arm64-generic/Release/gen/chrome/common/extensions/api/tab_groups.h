// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/tab_groups.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_TAB_GROUPS_H__
#define CHROME_COMMON_EXTENSIONS_API_TAB_GROUPS_H__

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
namespace tab_groups {

//
// Properties
//

// An ID that represents the absence of a group.
extern const int TAB_GROUP_ID_NONE;

//
// Types
//

// The group's color.
enum class Color {
  kNone = 0,
  kGrey,
  kBlue,
  kRed,
  kYellow,
  kGreen,
  kPink,
  kPurple,
  kCyan,
  kOrange,
  kMaxValue = kOrange,
};


const char* ToString(Color as_enum);
Color ParseColor(base::StringPiece as_string);
std::u16string GetColorParseError(base::StringPiece as_string);

struct TabGroup {
  TabGroup();
  ~TabGroup();
  TabGroup(const TabGroup&) = delete;
  TabGroup& operator=(const TabGroup&) = delete;
  TabGroup(TabGroup&& rhs) noexcept;
  TabGroup& operator=(TabGroup&& rhs) noexcept;

  // Populates a TabGroup object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, TabGroup& out);

  // Populates a TabGroup object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, TabGroup& out);

  // Creates a deep copy of TabGroup.
  TabGroup Clone() const;

  // Creates a TabGroup object from a base::Value::Dict, or nullopt on failure.
  static std::optional<TabGroup> FromValue(const base::Value::Dict& value);

  // Creates a TabGroup object from a base::Value, or nullopt on failure.
  static std::optional<TabGroup> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTabGroup object.
  base::Value::Dict ToValue() const;

  // The ID of the group. Group IDs are unique within a browser session.
  int id;

  // Whether the group is collapsed. A collapsed group is one whose tabs are
  // hidden.
  bool collapsed;

  // The group's color.
  Color color;

  // The title of the group.
  std::optional<std::string> title;

  // The ID of the window that contains the group.
  int window_id;

};


//
// Functions
//

namespace Get {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  int group_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const TabGroup& group);
}  // namespace Results

}  // namespace Get

namespace Query {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct QueryInfo {
    QueryInfo();
    ~QueryInfo();
    QueryInfo(const QueryInfo&) = delete;
    QueryInfo& operator=(const QueryInfo&) = delete;
    QueryInfo(QueryInfo&& rhs) noexcept;
    QueryInfo& operator=(QueryInfo&& rhs) noexcept;

    // Populates a QueryInfo object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, QueryInfo& out);

    // Populates a QueryInfo object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, QueryInfo& out);

    // Creates a deep copy of QueryInfo.
    QueryInfo Clone() const;

    // Creates a QueryInfo object from a base::Value::Dict, or nullopt on failure.
    static std::optional<QueryInfo> FromValue(const base::Value::Dict& value);

    // Creates a QueryInfo object from a base::Value, or nullopt on failure.
    static std::optional<QueryInfo> FromValue(const base::Value& value);

    // Whether the groups are collapsed.
    std::optional<bool> collapsed;

    // The color of the groups.
    Color color;

    // Match group titles against a pattern.
    std::optional<std::string> title;

    // The ID of the parent window, or $(ref:windows.WINDOW_ID_CURRENT) for the <a
    // href='windows#current-window'>current window</a>.
    std::optional<int> window_id;

  };


  QueryInfo query_info;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<TabGroup>& result);
}  // namespace Results

}  // namespace Query

namespace Update {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct UpdateProperties {
    UpdateProperties();
    ~UpdateProperties();
    UpdateProperties(const UpdateProperties&) = delete;
    UpdateProperties& operator=(const UpdateProperties&) = delete;
    UpdateProperties(UpdateProperties&& rhs) noexcept;
    UpdateProperties& operator=(UpdateProperties&& rhs) noexcept;

    // Populates a UpdateProperties object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, UpdateProperties& out);

    // Populates a UpdateProperties object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, UpdateProperties& out);

    // Creates a deep copy of UpdateProperties.
    UpdateProperties Clone() const;

    // Creates a UpdateProperties object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<UpdateProperties> FromValue(const base::Value::Dict& value);

    // Creates a UpdateProperties object from a base::Value, or nullopt on
    // failure.
    static std::optional<UpdateProperties> FromValue(const base::Value& value);

    // Whether the group should be collapsed.
    std::optional<bool> collapsed;

    // The color of the group.
    Color color;

    // The title of the group.
    std::optional<std::string> title;

  };


  // The ID of the group to modify.
  int group_id;

  UpdateProperties update_properties;


 private:
  Params();
};

namespace Results {

// Details about the updated group.
base::Value::List Create(const TabGroup& group);
}  // namespace Results

}  // namespace Update

namespace Move {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct MoveProperties {
    MoveProperties();
    ~MoveProperties();
    MoveProperties(const MoveProperties&) = delete;
    MoveProperties& operator=(const MoveProperties&) = delete;
    MoveProperties(MoveProperties&& rhs) noexcept;
    MoveProperties& operator=(MoveProperties&& rhs) noexcept;

    // Populates a MoveProperties object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, MoveProperties& out);

    // Populates a MoveProperties object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, MoveProperties& out);

    // Creates a deep copy of MoveProperties.
    MoveProperties Clone() const;

    // Creates a MoveProperties object from a base::Value::Dict, or nullopt on
    // failure.
    static std::optional<MoveProperties> FromValue(const base::Value::Dict& value);

    // Creates a MoveProperties object from a base::Value, or nullopt on failure.
    static std::optional<MoveProperties> FromValue(const base::Value& value);

    // The window to move the group to. Defaults to the window the group is
    // currently in. Note that groups can only be moved to and from windows with
    // $(ref:windows.WindowType) type <code>"normal"</code>.
    std::optional<int> window_id;

    // The position to move the group to. Use <code>-1</code> to place the group at
    // the end of the window.
    int index;

  };


  // The ID of the group to move.
  int group_id;

  MoveProperties move_properties;


 private:
  Params();
};

namespace Results {

// Details about the moved group.
base::Value::List Create(const TabGroup& group);
}  // namespace Results

}  // namespace Move

//
// Events
//

namespace OnCreated {

extern const char kEventName[];  // "tabGroups.onCreated"

// Details of the group that was created.
base::Value::List Create(const TabGroup& group);
}  // namespace OnCreated

namespace OnUpdated {

extern const char kEventName[];  // "tabGroups.onUpdated"

// Details of the group that was updated.
base::Value::List Create(const TabGroup& group);
}  // namespace OnUpdated

namespace OnMoved {

extern const char kEventName[];  // "tabGroups.onMoved"

// Details of the group that was moved.
base::Value::List Create(const TabGroup& group);
}  // namespace OnMoved

namespace OnRemoved {

extern const char kEventName[];  // "tabGroups.onRemoved"

// Details of the group that was removed.
base::Value::List Create(const TabGroup& group);
}  // namespace OnRemoved

}  // namespace tab_groups
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_TAB_GROUPS_H__
