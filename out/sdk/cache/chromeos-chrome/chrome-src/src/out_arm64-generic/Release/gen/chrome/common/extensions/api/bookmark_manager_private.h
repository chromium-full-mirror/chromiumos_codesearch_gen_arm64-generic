// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/bookmark_manager_private.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_BOOKMARK_MANAGER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_BOOKMARK_MANAGER_PRIVATE_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "chrome/common/extensions/api/bookmarks.h"


namespace extensions {
namespace api {
namespace bookmark_manager_private {

//
// Types
//

struct BookmarkNodeDataElement {
  BookmarkNodeDataElement();
  ~BookmarkNodeDataElement();
  BookmarkNodeDataElement(const BookmarkNodeDataElement&) = delete;
  BookmarkNodeDataElement& operator=(const BookmarkNodeDataElement&) = delete;
  BookmarkNodeDataElement(BookmarkNodeDataElement&& rhs);
  BookmarkNodeDataElement& operator=(BookmarkNodeDataElement&& rhs);

  // Populates a BookmarkNodeDataElement object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BookmarkNodeDataElement& out);

  // Populates a BookmarkNodeDataElement object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, BookmarkNodeDataElement& out);

  // Creates a deep copy of BookmarkNodeDataElement.
  BookmarkNodeDataElement Clone() const;

  // Creates a BookmarkNodeDataElement object from a base::Value, or NULL on
  // failure.
  static std::unique_ptr<BookmarkNodeDataElement> FromValueDeprecated(const base::Value& value);

  // Creates a BookmarkNodeDataElement object from a base::Value::Dict, or
  // nullopt on failure.
  static absl::optional<BookmarkNodeDataElement> FromValue(const base::Value::Dict& value);

  // Creates a BookmarkNodeDataElement object from a base::Value, or nullopt on
  // failure.
  static absl::optional<BookmarkNodeDataElement> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBookmarkNodeDataElement object.
  base::Value::Dict ToValue() const;

  // The ID of the bookmark. This is only provided if the data is from the same
  // profile.
  absl::optional<std::string> id;

  // The ID of the parent of the bookmark. This is only provided if the data is
  // from the same profile.
  absl::optional<std::string> parent_id;

  std::string title;

  absl::optional<std::string> url;

  std::vector<BookmarkNodeDataElement> children;

};

// Information about the drag and drop data for use with drag and drop events.
struct BookmarkNodeData {
  BookmarkNodeData();
  ~BookmarkNodeData();
  BookmarkNodeData(const BookmarkNodeData&) = delete;
  BookmarkNodeData& operator=(const BookmarkNodeData&) = delete;
  BookmarkNodeData(BookmarkNodeData&& rhs);
  BookmarkNodeData& operator=(BookmarkNodeData&& rhs);

  // Populates a BookmarkNodeData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, BookmarkNodeData& out);

  // Populates a BookmarkNodeData object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, BookmarkNodeData& out);

  // Creates a deep copy of BookmarkNodeData.
  BookmarkNodeData Clone() const;

  // Creates a BookmarkNodeData object from a base::Value, or NULL on failure.
  static std::unique_ptr<BookmarkNodeData> FromValueDeprecated(const base::Value& value);

  // Creates a BookmarkNodeData object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<BookmarkNodeData> FromValue(const base::Value::Dict& value);

  // Creates a BookmarkNodeData object from a base::Value, or nullopt on
  // failure.
  static absl::optional<BookmarkNodeData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisBookmarkNodeData object.
  base::Value::Dict ToValue() const;

  bool same_profile;

  std::vector<BookmarkNodeDataElement> elements;

};


//
// Functions
//

namespace Copy {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // An array of string-valued ids
  std::vector<std::string> id_list;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Copy

namespace Cut {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // An array of string-valued ids
  std::vector<std::string> id_list;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Cut

namespace Paste {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  std::string parent_id;

  // An array of string-valued ids for selected bookmarks.
  absl::optional<std::vector<std::string>> selected_id_list;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Paste

namespace CanPaste {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the folder to paste into.
  std::string parent_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace CanPaste

namespace SortChildren {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the folder to sort the children of.
  std::string parent_id;


 private:
  Params();
};

}  // namespace SortChildren

namespace StartDrag {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // An array of string-valued ids.
  std::vector<std::string> id_list;

  // The index of the dragged node in |idList|
  int drag_node_index;

  // True if the drag was initiated from touch.
  bool is_from_touch;

  // The clientX of the dragStart event
  int x;

  // The clientY of the dragStart event
  int y;


 private:
  Params();
};

}  // namespace StartDrag

namespace Drop {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the folder that the drop was made.
  std::string parent_id;

  // The index of the position to drop at. If left out the dropped items will be
  // placed at the end of the existing children.
  absl::optional<int> index;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Drop

namespace GetSubtree {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // ID of the root of the tree to pull.  If empty, the entire tree will be
  // returned.
  std::string id;

  // Pass true to only return folders.
  bool folders_only;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<extensions::api::bookmarks::BookmarkTreeNode>& results);
}  // namespace Results

}  // namespace GetSubtree

namespace RemoveTrees {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // An array of string-valued ids.
  std::vector<std::string> id_list;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveTrees

namespace Undo {

}  // namespace Undo

namespace Redo {

}  // namespace Redo

namespace OpenInNewTab {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // One string-valued id.
  std::string id;

  // Whether this tab should be active.
  bool active;


 private:
  Params();
};

}  // namespace OpenInNewTab

namespace OpenInNewWindow {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // An array of string-valued ids.
  std::vector<std::string> id_list;

  // Whether the new window should be an incognito window.
  bool incognito;


 private:
  Params();
};

}  // namespace OpenInNewWindow

namespace Import {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Import

namespace Export {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Export

//
// Events
//

namespace OnDragEnter {

extern const char kEventName[];  // "bookmarkManagerPrivate.onDragEnter"

base::Value::List Create(const BookmarkNodeData& bookmark_node_data);
}  // namespace OnDragEnter

namespace OnDragLeave {

extern const char kEventName[];  // "bookmarkManagerPrivate.onDragLeave"

base::Value::List Create(const BookmarkNodeData& bookmark_node_data);
}  // namespace OnDragLeave

namespace OnDrop {

extern const char kEventName[];  // "bookmarkManagerPrivate.onDrop"

base::Value::List Create(const BookmarkNodeData& bookmark_node_data);
}  // namespace OnDrop

}  // namespace bookmark_manager_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_BOOKMARK_MANAGER_PRIVATE_H__
