// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/bookmarks.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_BOOKMARKS_H__
#define CHROME_COMMON_EXTENSIONS_API_BOOKMARKS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace bookmarks {

//
// Properties
//

//
extern const int MAX_WRITE_OPERATIONS_PER_HOUR;

//
extern const int MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE;

//
// Types
//

// Indicates the reason why this node is unmodifiable. The <var>managed</var>
// value indicates that this node was configured by the system administrator.
// Omitted if the node can be modified by the user and the extension (default).
enum class BookmarkTreeNodeUnmodifiable {
  kNone = 0,
  kManaged,
  kMaxValue = kManaged,
};


const char* ToString(BookmarkTreeNodeUnmodifiable as_enum);
BookmarkTreeNodeUnmodifiable ParseBookmarkTreeNodeUnmodifiable(base::StringPiece as_string);
std::u16string GetBookmarkTreeNodeUnmodifiableParseError(base::StringPiece as_string);

// A node (either a bookmark or a folder) in the bookmark tree.  Child nodes are
// ordered within their parent folder.
struct BookmarkTreeNode {
  BookmarkTreeNode();
  ~BookmarkTreeNode();
  BookmarkTreeNode(const BookmarkTreeNode&) = delete;
  BookmarkTreeNode& operator=(const BookmarkTreeNode&) = delete;
  BookmarkTreeNode(BookmarkTreeNode&& rhs);
  BookmarkTreeNode& operator=(BookmarkTreeNode&& rhs);

  // Populates a BookmarkTreeNode object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BookmarkTreeNode& out);

  // Populates a BookmarkTreeNode object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, BookmarkTreeNode& out);

  // Creates a deep copy of BookmarkTreeNode.
  BookmarkTreeNode Clone() const;

  // Creates a BookmarkTreeNode object from a base::Value, or NULL on failure.
  static std::unique_ptr<BookmarkTreeNode> FromValueDeprecated(const base::Value& value);

  // Creates a BookmarkTreeNode object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<BookmarkTreeNode> FromValue(const base::Value::Dict& value);

  // Creates a BookmarkTreeNode object from a base::Value, or nullopt on
  // failure.
  static absl::optional<BookmarkTreeNode> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBookmarkTreeNode object.
  base::Value::Dict ToValue() const;

  // The unique identifier for the node. IDs are unique within the current
  // profile, and they remain valid even after the browser is restarted.
  std::string id;

  // The <code>id</code> of the parent folder.  Omitted for the root node.
  absl::optional<std::string> parent_id;

  // The 0-based position of this node within its parent folder.
  absl::optional<int> index;

  // The URL navigated to when a user clicks the bookmark. Omitted for folders.
  absl::optional<std::string> url;

  // The text displayed for the node.
  std::string title;

  // When this node was created, in milliseconds since the epoch (<code>new
  // Date(dateAdded)</code>).
  absl::optional<double> date_added;

  // When this node was last opened, in milliseconds since the epoch. Not set for
  // folders.
  absl::optional<double> date_last_used;

  // When the contents of this folder last changed, in milliseconds since the
  // epoch.
  absl::optional<double> date_group_modified;

  // Indicates the reason why this node is unmodifiable. The <var>managed</var>
  // value indicates that this node was configured by the system administrator or
  // by the custodian of a supervised user. Omitted if the node can be modified by
  // the user and the extension (default).
  BookmarkTreeNodeUnmodifiable unmodifiable;

  // An ordered list of children of this node.
  absl::optional<std::vector<BookmarkTreeNode>> children;

};

// Object passed to the create() function.
struct CreateDetails {
  CreateDetails();
  ~CreateDetails();
  CreateDetails(const CreateDetails&) = delete;
  CreateDetails& operator=(const CreateDetails&) = delete;
  CreateDetails(CreateDetails&& rhs);
  CreateDetails& operator=(CreateDetails&& rhs);

  // Populates a CreateDetails object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CreateDetails& out);

  // Populates a CreateDetails object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CreateDetails& out);

  // Creates a deep copy of CreateDetails.
  CreateDetails Clone() const;

  // Creates a CreateDetails object from a base::Value, or NULL on failure.
  static std::unique_ptr<CreateDetails> FromValueDeprecated(const base::Value& value);

  // Creates a CreateDetails object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<CreateDetails> FromValue(const base::Value::Dict& value);

  // Creates a CreateDetails object from a base::Value, or nullopt on failure.
  static absl::optional<CreateDetails> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateDetails object.
  base::Value::Dict ToValue() const;

  // Defaults to the Other Bookmarks folder.
  absl::optional<std::string> parent_id;

  absl::optional<int> index;

  absl::optional<std::string> title;

  absl::optional<std::string> url;

};


//
// Functions
//

namespace Get {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // A single string-valued id, or an array of string-valued ids
  struct IdOrIdList {
    IdOrIdList();
    ~IdOrIdList();
    IdOrIdList(const IdOrIdList&) = delete;
    IdOrIdList& operator=(const IdOrIdList&) = delete;
    IdOrIdList(IdOrIdList&& rhs);
    IdOrIdList& operator=(IdOrIdList&& rhs);

    // Populates a IdOrIdList object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, IdOrIdList& out);

    // Creates a deep copy of IdOrIdList.
    IdOrIdList Clone() const;

    // Creates a IdOrIdList object from a base::Value, or nullopt on failure.
    static absl::optional<IdOrIdList> FromValue(const base::Value& value);
    // Choices:
    absl::optional<std::string> as_string;
    absl::optional<std::vector<std::string>> as_strings;
  };


  // A single string-valued id, or an array of string-valued ids
  IdOrIdList id_or_id_list;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace Get

namespace GetChildren {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetChildren

namespace GetRecent {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The maximum number of items to return.
  int number_of_items;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetRecent

namespace GetTree {

namespace Results {

base::Value::List Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetTree

namespace GetSubTree {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the root of the subtree to retrieve.
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetSubTree

namespace Search {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Either a string of words and quoted phrases that are matched against bookmark
  // URLs and titles, or an object. If an object, the properties
  // <code>query</code>, <code>url</code>, and <code>title</code> may be specified
  // and bookmarks matching all specified properties will be produced.
  struct Query {
    Query();
    ~Query();
    Query(const Query&) = delete;
    Query& operator=(const Query&) = delete;
    Query(Query&& rhs);
    Query& operator=(Query&& rhs);

    // Populates a Query object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Query& out);

    // Creates a deep copy of Query.
    Query Clone() const;

    // Creates a Query object from a base::Value, or nullopt on failure.
    static absl::optional<Query> FromValue(const base::Value& value);
    // An object specifying properties and values to match when searching. Produces
    // bookmarks matching all properties.
    struct Object {
      Object();
      ~Object();
      Object(const Object&) = delete;
      Object& operator=(const Object&) = delete;
      Object(Object&& rhs);
      Object& operator=(Object&& rhs);

      // Populates a Object object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, Object& out);

      // Populates a Object object from a Dict& instance. Returns whether |out| was
      // successfully populated.
      static bool Populate(const base::Value::Dict& value, Object& out);

      // Creates a deep copy of Object.
      Object Clone() const;

      // Creates a Object object from a base::Value::Dict, or nullopt on failure.
      static absl::optional<Object> FromValue(const base::Value::Dict& value);

      // Creates a Object object from a base::Value, or nullopt on failure.
      static absl::optional<Object> FromValue(const base::Value& value);

      // A string of words and quoted phrases that are matched against bookmark URLs
      // and titles.
      absl::optional<std::string> query;

      // The URL of the bookmark; matches verbatim. Note that folders have no URL.
      absl::optional<std::string> url;

      // The title of the bookmark; matches verbatim.
      absl::optional<std::string> title;

    };


    // Choices:
    absl::optional<std::string> as_string;
    absl::optional<Object> as_object;
  };


  // Either a string of words and quoted phrases that are matched against bookmark
  // URLs and titles, or an object. If an object, the properties
  // <code>query</code>, <code>url</code>, and <code>title</code> may be specified
  // and bookmarks matching all specified properties will be produced.
  Query query;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace Search

namespace Create {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  CreateDetails bookmark;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const BookmarkTreeNode& result);
}  // namespace Results

}  // namespace Create

namespace Move {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Destination {
    Destination();
    ~Destination();
    Destination(const Destination&) = delete;
    Destination& operator=(const Destination&) = delete;
    Destination(Destination&& rhs);
    Destination& operator=(Destination&& rhs);

    // Populates a Destination object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, Destination& out);

    // Populates a Destination object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Destination& out);

    // Creates a deep copy of Destination.
    Destination Clone() const;

    // Creates a Destination object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<Destination> FromValue(const base::Value::Dict& value);

    // Creates a Destination object from a base::Value, or nullopt on failure.
    static absl::optional<Destination> FromValue(const base::Value& value);

    absl::optional<std::string> parent_id;

    absl::optional<int> index;

  };


  std::string id;

  Destination destination;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const BookmarkTreeNode& result);
}  // namespace Results

}  // namespace Move

namespace Update {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct Changes {
    Changes();
    ~Changes();
    Changes(const Changes&) = delete;
    Changes& operator=(const Changes&) = delete;
    Changes(Changes&& rhs);
    Changes& operator=(Changes&& rhs);

    // Populates a Changes object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Changes& out);

    // Populates a Changes object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, Changes& out);

    // Creates a deep copy of Changes.
    Changes Clone() const;

    // Creates a Changes object from a base::Value::Dict, or nullopt on failure.
    static absl::optional<Changes> FromValue(const base::Value::Dict& value);

    // Creates a Changes object from a base::Value, or nullopt on failure.
    static absl::optional<Changes> FromValue(const base::Value& value);

    absl::optional<std::string> title;

    absl::optional<std::string> url;

  };


  std::string id;

  Changes changes;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const BookmarkTreeNode& result);
}  // namespace Results

}  // namespace Update

namespace Remove {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Remove

namespace RemoveTree {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveTree

//
// Events
//

namespace OnCreated {

extern const char kEventName[];  // "bookmarks.onCreated"

base::Value::List Create(const std::string& id, const BookmarkTreeNode& bookmark);
}  // namespace OnCreated

namespace OnRemoved {

extern const char kEventName[];  // "bookmarks.onRemoved"

struct RemoveInfo {
  RemoveInfo();
  ~RemoveInfo();
  RemoveInfo(const RemoveInfo&) = delete;
  RemoveInfo& operator=(const RemoveInfo&) = delete;
  RemoveInfo(RemoveInfo&& rhs);
  RemoveInfo& operator=(RemoveInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRemoveInfo object.
  base::Value::Dict ToValue() const;

  std::string parent_id;

  int index;

  BookmarkTreeNode node;

};


base::Value::List Create(const std::string& id, const RemoveInfo& remove_info);
}  // namespace OnRemoved

namespace OnChanged {

extern const char kEventName[];  // "bookmarks.onChanged"

struct ChangeInfo {
  ChangeInfo();
  ~ChangeInfo();
  ChangeInfo(const ChangeInfo&) = delete;
  ChangeInfo& operator=(const ChangeInfo&) = delete;
  ChangeInfo(ChangeInfo&& rhs);
  ChangeInfo& operator=(ChangeInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisChangeInfo object.
  base::Value::Dict ToValue() const;

  std::string title;

  absl::optional<std::string> url;

};


base::Value::List Create(const std::string& id, const ChangeInfo& change_info);
}  // namespace OnChanged

namespace OnMoved {

extern const char kEventName[];  // "bookmarks.onMoved"

struct MoveInfo {
  MoveInfo();
  ~MoveInfo();
  MoveInfo(const MoveInfo&) = delete;
  MoveInfo& operator=(const MoveInfo&) = delete;
  MoveInfo(MoveInfo&& rhs);
  MoveInfo& operator=(MoveInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMoveInfo object.
  base::Value::Dict ToValue() const;

  std::string parent_id;

  int index;

  std::string old_parent_id;

  int old_index;

};


base::Value::List Create(const std::string& id, const MoveInfo& move_info);
}  // namespace OnMoved

namespace OnChildrenReordered {

extern const char kEventName[];  // "bookmarks.onChildrenReordered"

struct ReorderInfo {
  ReorderInfo();
  ~ReorderInfo();
  ReorderInfo(const ReorderInfo&) = delete;
  ReorderInfo& operator=(const ReorderInfo&) = delete;
  ReorderInfo(ReorderInfo&& rhs);
  ReorderInfo& operator=(ReorderInfo&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReorderInfo object.
  base::Value::Dict ToValue() const;

  std::vector<std::string> child_ids;

};


base::Value::List Create(const std::string& id, const ReorderInfo& reorder_info);
}  // namespace OnChildrenReordered

namespace OnImportBegan {

extern const char kEventName[];  // "bookmarks.onImportBegan"

base::Value::List Create();
}  // namespace OnImportBegan

namespace OnImportEnded {

extern const char kEventName[];  // "bookmarks.onImportEnded"

base::Value::List Create();
}  // namespace OnImportEnded

}  // namespace bookmarks
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_BOOKMARKS_H__
