// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/context_menus.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_CONTEXT_MENUS_H__
#define CHROME_COMMON_EXTENSIONS_API_CONTEXT_MENUS_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"
#include "chrome/common/extensions/api/tabs.h"


namespace extensions {
namespace api {
namespace context_menus {

//
// Properties
//

// The maximum number of top level extension items that can be added to an
// extension action context menu. Any items beyond this limit will be ignored.
extern const int ACTION_MENU_TOP_LEVEL_LIMIT;

//
// Types
//

// The different contexts a menu can appear in. Specifying 'all' is equivalent
// to the combination of all other contexts except for 'launcher'. The
// 'launcher' context is only supported by apps and is used to add menu items to
// the context menu that appears when clicking the app icon in the
// launcher/taskbar/dock/etc. Different platforms might put limitations on what
// is actually supported in a launcher context menu.
enum  ContextType {
  CONTEXT_TYPE_NONE = 0,
  CONTEXT_TYPE_ALL,
  CONTEXT_TYPE_PAGE,
  CONTEXT_TYPE_FRAME,
  CONTEXT_TYPE_SELECTION,
  CONTEXT_TYPE_LINK,
  CONTEXT_TYPE_EDITABLE,
  CONTEXT_TYPE_IMAGE,
  CONTEXT_TYPE_VIDEO,
  CONTEXT_TYPE_AUDIO,
  CONTEXT_TYPE_LAUNCHER,
  CONTEXT_TYPE_BROWSER_ACTION,
  CONTEXT_TYPE_PAGE_ACTION,
  CONTEXT_TYPE_ACTION,
  CONTEXT_TYPE_LAST = CONTEXT_TYPE_ACTION,
};


const char* ToString(ContextType as_enum);
ContextType ParseContextType(base::StringPiece as_string);
std::u16string GetContextTypeParseError(base::StringPiece as_string);

// The type of menu item.
enum  ItemType {
  ITEM_TYPE_NONE = 0,
  ITEM_TYPE_NORMAL,
  ITEM_TYPE_CHECKBOX,
  ITEM_TYPE_RADIO,
  ITEM_TYPE_SEPARATOR,
  ITEM_TYPE_LAST = ITEM_TYPE_SEPARATOR,
};


const char* ToString(ItemType as_enum);
ItemType ParseItemType(base::StringPiece as_string);
std::u16string GetItemTypeParseError(base::StringPiece as_string);

// Information sent when a context menu item is clicked.
struct OnClickData {
  OnClickData();
  ~OnClickData();
  OnClickData(const OnClickData&) = delete;
  OnClickData& operator=(const OnClickData&) = delete;
  OnClickData(OnClickData&& rhs);
  OnClickData& operator=(OnClickData&& rhs);

  // Populates a OnClickData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OnClickData& out);

  // Populates a OnClickData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, OnClickData& out);

  // Creates a deep copy of OnClickData.
  OnClickData Clone() const;

  // Creates a OnClickData object from a base::Value, or NULL on failure.
  static std::unique_ptr<OnClickData> FromValueDeprecated(const base::Value& value);

  // Creates a OnClickData object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<OnClickData> FromValue(const base::Value::Dict& value);

  // Creates a OnClickData object from a base::Value, or nullopt on failure.
  static absl::optional<OnClickData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOnClickData object.
  base::Value::Dict ToValue() const;

  // The ID of the menu item that was clicked.
  struct MenuItemId {
    MenuItemId();
    ~MenuItemId();
    MenuItemId(const MenuItemId&) = delete;
    MenuItemId& operator=(const MenuItemId&) = delete;
    MenuItemId(MenuItemId&& rhs);
    MenuItemId& operator=(MenuItemId&& rhs);

    // Populates a MenuItemId object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, MenuItemId& out);

    // Creates a deep copy of MenuItemId.
    MenuItemId Clone() const;

    // Creates a MenuItemId object from a base::Value, or nullopt on failure.
    static absl::optional<MenuItemId> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of
    // thisMenuItemId object.
    base::Value ToValue() const;
    // Choices:
    absl::optional<int> as_integer;
    absl::optional<std::string> as_string;
  };

  // The parent ID, if any, for the item clicked.
  struct ParentMenuItemId {
    ParentMenuItemId();
    ~ParentMenuItemId();
    ParentMenuItemId(const ParentMenuItemId&) = delete;
    ParentMenuItemId& operator=(const ParentMenuItemId&) = delete;
    ParentMenuItemId(ParentMenuItemId&& rhs);
    ParentMenuItemId& operator=(ParentMenuItemId&& rhs);

    // Populates a ParentMenuItemId object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ParentMenuItemId& out);

    // Creates a deep copy of ParentMenuItemId.
    ParentMenuItemId Clone() const;

    // Creates a ParentMenuItemId object from a base::Value, or nullopt on
    // failure.
    static absl::optional<ParentMenuItemId> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of
    // thisParentMenuItemId object.
    base::Value ToValue() const;
    // Choices:
    absl::optional<int> as_integer;
    absl::optional<std::string> as_string;
  };


  // The ID of the menu item that was clicked.
  MenuItemId menu_item_id;

  // The parent ID, if any, for the item clicked.
  absl::optional<ParentMenuItemId> parent_menu_item_id;

  // One of 'image', 'video', or 'audio' if the context menu was activated on one
  // of these types of elements.
  absl::optional<std::string> media_type;

  // If the element is a link, the URL it points to.
  absl::optional<std::string> link_url;

  // Will be present for elements with a 'src' URL.
  absl::optional<std::string> src_url;

  // The URL of the page where the menu item was clicked. This property is not set
  // if the click occured in a context where there is no current page, such as in
  // a launcher context menu.
  absl::optional<std::string> page_url;

  //  The URL of the frame of the element where the context menu was clicked, if
  // it was in a frame.
  absl::optional<std::string> frame_url;

  //  The <a href='webNavigation#frame_ids'>ID of the frame</a> of the element
  // where the context menu was clicked, if it was in a frame.
  absl::optional<int> frame_id;

  // The text for the context selection, if any.
  absl::optional<std::string> selection_text;

  // A flag indicating whether the element is editable (text input, textarea,
  // etc.).
  bool editable;

  // A flag indicating the state of a checkbox or radio item before it was
  // clicked.
  absl::optional<bool> was_checked;

  // A flag indicating the state of a checkbox or radio item after it is clicked.
  absl::optional<bool> checked;

};


//
// Functions
//

namespace Create {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  struct CreateProperties {
    CreateProperties();
    ~CreateProperties();
    CreateProperties(const CreateProperties&) = delete;
    CreateProperties& operator=(const CreateProperties&) = delete;
    CreateProperties(CreateProperties&& rhs);
    CreateProperties& operator=(CreateProperties&& rhs);

    // Populates a CreateProperties object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, CreateProperties& out);

    // Populates a CreateProperties object from a Dict& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value::Dict& value, CreateProperties& out);

    // Creates a deep copy of CreateProperties.
    CreateProperties Clone() const;

    // Creates a CreateProperties object from a base::Value::Dict, or nullopt on
    // failure.
    static absl::optional<CreateProperties> FromValue(const base::Value::Dict& value);

    // Creates a CreateProperties object from a base::Value, or nullopt on
    // failure.
    static absl::optional<CreateProperties> FromValue(const base::Value& value);

    // The ID of a parent menu item; this makes the item a child of a previously
    // added item.
    struct ParentId {
      ParentId();
      ~ParentId();
      ParentId(const ParentId&) = delete;
      ParentId& operator=(const ParentId&) = delete;
      ParentId(ParentId&& rhs);
      ParentId& operator=(ParentId&& rhs);

      // Populates a ParentId object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, ParentId& out);

      // Creates a deep copy of ParentId.
      ParentId Clone() const;

      // Creates a ParentId object from a base::Value, or nullopt on failure.
      static absl::optional<ParentId> FromValue(const base::Value& value);
      // Choices:
      absl::optional<int> as_integer;
      absl::optional<std::string> as_string;
    };


    // The type of menu item. Defaults to <code>normal</code>.
    ItemType type;

    // The unique ID to assign to this item. Mandatory for event pages. Cannot be
    // the same as another ID for this extension.
    absl::optional<std::string> id;

    // The text to display in the item; this is <em>required</em> unless
    // <code>type</code> is <code>separator</code>. When the context is
    // <code>selection</code>, use <code>%s</code> within the string to show the
    // selected text. For example, if this parameter's value is "Translate '%s' to
    // Pig Latin" and the user selects the word "cool", the context menu item for
    // the selection is "Translate 'cool' to Pig Latin".
    absl::optional<std::string> title;

    // The initial state of a checkbox or radio button: <code>true</code> for
    // selected, <code>false</code> for unselected. Only one radio button can be
    // selected at a time in a given group.
    absl::optional<bool> checked;

    // List of contexts this menu item will appear in. Defaults to
    // <code>['page']</code>.
    absl::optional<std::vector<ContextType>> contexts;

    // Whether the item is visible in the menu.
    absl::optional<bool> visible;

    // A function that is called back when the menu item is clicked. This is not
    // available inside of a service worker; instead, they should register a
    // listener for $(ref:contextMenus.onClicked).
    absl::optional<base::Value::Dict> onclick;

    // The ID of a parent menu item; this makes the item a child of a previously
    // added item.
    absl::optional<ParentId> parent_id;

    // Restricts the item to apply only to documents or frames whose URL matches one
    // of the given patterns. For details on pattern formats, see <a
    // href='match_patterns'>Match Patterns</a>.
    absl::optional<std::vector<std::string>> document_url_patterns;

    // Similar to <code>documentUrlPatterns</code>, filters based on the
    // <code>src</code> attribute of <code>img</code>, <code>audio</code>, and
    // <code>video</code> tags and the <code>href</code> attribute of <code>a</code>
    // tags.
    absl::optional<std::vector<std::string>> target_url_patterns;

    // Whether this context menu item is enabled or disabled. Defaults to
    // <code>true</code>.
    absl::optional<bool> enabled;

  };


  CreateProperties create_properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Create

namespace Update {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The ID of the item to update.
  struct Id {
    Id();
    ~Id();
    Id(const Id&) = delete;
    Id& operator=(const Id&) = delete;
    Id(Id&& rhs);
    Id& operator=(Id&& rhs);

    // Populates a Id object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Id& out);

    // Creates a deep copy of Id.
    Id Clone() const;

    // Creates a Id object from a base::Value, or nullopt on failure.
    static absl::optional<Id> FromValue(const base::Value& value);
    // Choices:
    absl::optional<int> as_integer;
    absl::optional<std::string> as_string;
  };

  // The properties to update. Accepts the same values as the
  // $(ref:contextMenus.create) function.
  struct UpdateProperties {
    UpdateProperties();
    ~UpdateProperties();
    UpdateProperties(const UpdateProperties&) = delete;
    UpdateProperties& operator=(const UpdateProperties&) = delete;
    UpdateProperties(UpdateProperties&& rhs);
    UpdateProperties& operator=(UpdateProperties&& rhs);

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
    static absl::optional<UpdateProperties> FromValue(const base::Value::Dict& value);

    // Creates a UpdateProperties object from a base::Value, or nullopt on
    // failure.
    static absl::optional<UpdateProperties> FromValue(const base::Value& value);

    // The ID of the item to be made this item's parent. Note: You cannot set an
    // item to become a child of its own descendant.
    struct ParentId {
      ParentId();
      ~ParentId();
      ParentId(const ParentId&) = delete;
      ParentId& operator=(const ParentId&) = delete;
      ParentId(ParentId&& rhs);
      ParentId& operator=(ParentId&& rhs);

      // Populates a ParentId object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, ParentId& out);

      // Creates a deep copy of ParentId.
      ParentId Clone() const;

      // Creates a ParentId object from a base::Value, or nullopt on failure.
      static absl::optional<ParentId> FromValue(const base::Value& value);
      // Choices:
      absl::optional<int> as_integer;
      absl::optional<std::string> as_string;
    };


    ItemType type;

    absl::optional<std::string> title;

    absl::optional<bool> checked;

    absl::optional<std::vector<ContextType>> contexts;

    // Whether the item is visible in the menu.
    absl::optional<bool> visible;

    absl::optional<base::Value::Dict> onclick;

    // The ID of the item to be made this item's parent. Note: You cannot set an
    // item to become a child of its own descendant.
    absl::optional<ParentId> parent_id;

    absl::optional<std::vector<std::string>> document_url_patterns;

    absl::optional<std::vector<std::string>> target_url_patterns;

    absl::optional<bool> enabled;

  };


  // The ID of the item to update.
  Id id;

  // The properties to update. Accepts the same values as the
  // $(ref:contextMenus.create) function.
  UpdateProperties update_properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
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

  // The ID of the context menu item to remove.
  struct MenuItemId {
    MenuItemId();
    ~MenuItemId();
    MenuItemId(const MenuItemId&) = delete;
    MenuItemId& operator=(const MenuItemId&) = delete;
    MenuItemId(MenuItemId&& rhs);
    MenuItemId& operator=(MenuItemId&& rhs);

    // Populates a MenuItemId object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, MenuItemId& out);

    // Creates a deep copy of MenuItemId.
    MenuItemId Clone() const;

    // Creates a MenuItemId object from a base::Value, or nullopt on failure.
    static absl::optional<MenuItemId> FromValue(const base::Value& value);
    // Choices:
    absl::optional<int> as_integer;
    absl::optional<std::string> as_string;
  };


  // The ID of the context menu item to remove.
  MenuItemId menu_item_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Remove

namespace RemoveAll {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveAll

//
// Events
//

namespace OnClicked {

extern const char kEventName[];  // "contextMenus.onClicked"

// Information about the item clicked and the context where the click happened.
// The details of the tab where the click took place. If the click did not take
// place in a tab, this parameter will be missing.
base::Value::List Create(const OnClickData& info, const extensions::api::tabs::Tab& tab);
}  // namespace OnClicked

}  // namespace context_menus
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_CONTEXT_MENUS_H__
