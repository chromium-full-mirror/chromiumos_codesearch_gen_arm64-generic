// Copyright 2024 The Chromium Authors
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
#include <optional>
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
enum class ContextType {
  kNone = 0,
  kAll,
  kPage,
  kFrame,
  kSelection,
  kLink,
  kEditable,
  kImage,
  kVideo,
  kAudio,
  kLauncher,
  kBrowserAction,
  kPageAction,
  kAction,
  kMaxValue = kAction,
};


const char* ToString(ContextType as_enum);
ContextType ParseContextType(base::StringPiece as_string);
std::u16string GetContextTypeParseError(base::StringPiece as_string);

// The type of menu item.
enum class ItemType {
  kNone = 0,
  kNormal,
  kCheckbox,
  kRadio,
  kSeparator,
  kMaxValue = kSeparator,
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
  OnClickData(OnClickData&& rhs) noexcept;
  OnClickData& operator=(OnClickData&& rhs) noexcept;

  // Populates a OnClickData object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OnClickData& out);

  // Populates a OnClickData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, OnClickData& out);

  // Creates a deep copy of OnClickData.
  OnClickData Clone() const;

  // Creates a OnClickData object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OnClickData> FromValue(const base::Value::Dict& value);

  // Creates a OnClickData object from a base::Value, or nullopt on failure.
  static std::optional<OnClickData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOnClickData object.
  base::Value::Dict ToValue() const;

  // The ID of the menu item that was clicked.
  struct MenuItemId {
    MenuItemId();
    ~MenuItemId();
    MenuItemId(const MenuItemId&) = delete;
    MenuItemId& operator=(const MenuItemId&) = delete;
    MenuItemId(MenuItemId&& rhs) noexcept;
    MenuItemId& operator=(MenuItemId&& rhs) noexcept;

    // Populates a MenuItemId object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, MenuItemId& out);

    // Creates a deep copy of MenuItemId.
    MenuItemId Clone() const;

    // Creates a MenuItemId object from a base::Value, or nullopt on failure.
    static std::optional<MenuItemId> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of
    // thisMenuItemId object.
    base::Value ToValue() const;
    // Choices:
    std::optional<int> as_integer;
    std::optional<std::string> as_string;
  };

  // The parent ID, if any, for the item clicked.
  struct ParentMenuItemId {
    ParentMenuItemId();
    ~ParentMenuItemId();
    ParentMenuItemId(const ParentMenuItemId&) = delete;
    ParentMenuItemId& operator=(const ParentMenuItemId&) = delete;
    ParentMenuItemId(ParentMenuItemId&& rhs) noexcept;
    ParentMenuItemId& operator=(ParentMenuItemId&& rhs) noexcept;

    // Populates a ParentMenuItemId object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, ParentMenuItemId& out);

    // Creates a deep copy of ParentMenuItemId.
    ParentMenuItemId Clone() const;

    // Creates a ParentMenuItemId object from a base::Value, or nullopt on
    // failure.
    static std::optional<ParentMenuItemId> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of
    // thisParentMenuItemId object.
    base::Value ToValue() const;
    // Choices:
    std::optional<int> as_integer;
    std::optional<std::string> as_string;
  };


  // The ID of the menu item that was clicked.
  MenuItemId menu_item_id;

  // The parent ID, if any, for the item clicked.
  std::optional<ParentMenuItemId> parent_menu_item_id;

  // One of 'image', 'video', or 'audio' if the context menu was activated on one
  // of these types of elements.
  std::optional<std::string> media_type;

  // If the element is a link, the URL it points to.
  std::optional<std::string> link_url;

  // Will be present for elements with a 'src' URL.
  std::optional<std::string> src_url;

  // The URL of the page where the menu item was clicked. This property is not set
  // if the click occured in a context where there is no current page, such as in
  // a launcher context menu.
  std::optional<std::string> page_url;

  //  The URL of the frame of the element where the context menu was clicked, if
  // it was in a frame.
  std::optional<std::string> frame_url;

  //  The <a href='webNavigation#frame_ids'>ID of the frame</a> of the element
  // where the context menu was clicked, if it was in a frame.
  std::optional<int> frame_id;

  // The text for the context selection, if any.
  std::optional<std::string> selection_text;

  // A flag indicating whether the element is editable (text input, textarea,
  // etc.).
  bool editable;

  // A flag indicating the state of a checkbox or radio item before it was
  // clicked.
  std::optional<bool> was_checked;

  // A flag indicating the state of a checkbox or radio item after it is clicked.
  std::optional<bool> checked;

};

// Properties of the new context menu item.
struct CreateProperties {
  CreateProperties();
  ~CreateProperties();
  CreateProperties(const CreateProperties&) = delete;
  CreateProperties& operator=(const CreateProperties&) = delete;
  CreateProperties(CreateProperties&& rhs) noexcept;
  CreateProperties& operator=(CreateProperties&& rhs) noexcept;

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
  static std::optional<CreateProperties> FromValue(const base::Value::Dict& value);

  // Creates a CreateProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<CreateProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCreateProperties object.
  base::Value::Dict ToValue() const;

  // The ID of a parent menu item; this makes the item a child of a previously
  // added item.
  struct ParentId {
    ParentId();
    ~ParentId();
    ParentId(const ParentId&) = delete;
    ParentId& operator=(const ParentId&) = delete;
    ParentId(ParentId&& rhs) noexcept;
    ParentId& operator=(ParentId&& rhs) noexcept;

    // Populates a ParentId object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, ParentId& out);

    // Creates a deep copy of ParentId.
    ParentId Clone() const;

    // Creates a ParentId object from a base::Value, or nullopt on failure.
    static std::optional<ParentId> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of thisParentId
    // object.
    base::Value ToValue() const;
    // Choices:
    std::optional<int> as_integer;
    std::optional<std::string> as_string;
  };


  // The type of menu item. Defaults to <code>normal</code>.
  ItemType type;

  // The unique ID to assign to this item. Mandatory for event pages. Cannot be
  // the same as another ID for this extension.
  std::optional<std::string> id;

  // The text to display in the item; this is <em>required</em> unless
  // <code>type</code> is <code>separator</code>. When the context is
  // <code>selection</code>, use <code>%s</code> within the string to show the
  // selected text. For example, if this parameter's value is "Translate '%s' to
  // Pig Latin" and the user selects the word "cool", the context menu item for
  // the selection is "Translate 'cool' to Pig Latin".
  std::optional<std::string> title;

  // The initial state of a checkbox or radio button: <code>true</code> for
  // selected, <code>false</code> for unselected. Only one radio button can be
  // selected at a time in a given group.
  std::optional<bool> checked;

  // List of contexts this menu item will appear in. Defaults to
  // <code>['page']</code>.
  std::optional<std::vector<ContextType>> contexts;

  // Whether the item is visible in the menu.
  std::optional<bool> visible;

  // A function that is called back when the menu item is clicked. This is not
  // available inside of a service worker; instead, they should register a
  // listener for $(ref:contextMenus.onClicked).
  std::optional<base::Value::Dict> onclick;

  // The ID of a parent menu item; this makes the item a child of a previously
  // added item.
  std::optional<ParentId> parent_id;

  // Restricts the item to apply only to documents or frames whose URL matches one
  // of the given patterns. For details on pattern formats, see <a
  // href='/docs/extensions/develop/concepts/match-patterns'>Match Patterns</a>.
  std::optional<std::vector<std::string>> document_url_patterns;

  // Similar to <code>documentUrlPatterns</code>, filters based on the
  // <code>src</code> attribute of <code>img</code>, <code>audio</code>, and
  // <code>video</code> tags and the <code>href</code> attribute of <code>a</code>
  // tags.
  std::optional<std::vector<std::string>> target_url_patterns;

  // Whether this context menu item is enabled or disabled. Defaults to
  // <code>true</code>.
  std::optional<bool> enabled;

};


//
// Functions
//

namespace Create {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID of the item to update.
  struct Id {
    Id();
    ~Id();
    Id(const Id&) = delete;
    Id& operator=(const Id&) = delete;
    Id(Id&& rhs) noexcept;
    Id& operator=(Id&& rhs) noexcept;

    // Populates a Id object from a base::Value& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value& value, Id& out);

    // Creates a deep copy of Id.
    Id Clone() const;

    // Creates a Id object from a base::Value, or nullopt on failure.
    static std::optional<Id> FromValue(const base::Value& value);
    // Choices:
    std::optional<int> as_integer;
    std::optional<std::string> as_string;
  };

  // The properties to update. Accepts the same values as the
  // $(ref:contextMenus.create) function.
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

    // The ID of the item to be made this item's parent. Note: You cannot set an
    // item to become a child of its own descendant.
    struct ParentId {
      ParentId();
      ~ParentId();
      ParentId(const ParentId&) = delete;
      ParentId& operator=(const ParentId&) = delete;
      ParentId(ParentId&& rhs) noexcept;
      ParentId& operator=(ParentId&& rhs) noexcept;

      // Populates a ParentId object from a base::Value& instance. Returns whether
      // |out| was successfully populated.
      static bool Populate(const base::Value& value, ParentId& out);

      // Creates a deep copy of ParentId.
      ParentId Clone() const;

      // Creates a ParentId object from a base::Value, or nullopt on failure.
      static std::optional<ParentId> FromValue(const base::Value& value);
      // Choices:
      std::optional<int> as_integer;
      std::optional<std::string> as_string;
    };


    ItemType type;

    std::optional<std::string> title;

    std::optional<bool> checked;

    std::optional<std::vector<ContextType>> contexts;

    // Whether the item is visible in the menu.
    std::optional<bool> visible;

    std::optional<base::Value::Dict> onclick;

    // The ID of the item to be made this item's parent. Note: You cannot set an
    // item to become a child of its own descendant.
    std::optional<ParentId> parent_id;

    std::optional<std::vector<std::string>> document_url_patterns;

    std::optional<std::vector<std::string>> target_url_patterns;

    std::optional<bool> enabled;

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
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The ID of the context menu item to remove.
  struct MenuItemId {
    MenuItemId();
    ~MenuItemId();
    MenuItemId(const MenuItemId&) = delete;
    MenuItemId& operator=(const MenuItemId&) = delete;
    MenuItemId(MenuItemId&& rhs) noexcept;
    MenuItemId& operator=(MenuItemId&& rhs) noexcept;

    // Populates a MenuItemId object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, MenuItemId& out);

    // Creates a deep copy of MenuItemId.
    MenuItemId Clone() const;

    // Creates a MenuItemId object from a base::Value, or nullopt on failure.
    static std::optional<MenuItemId> FromValue(const base::Value& value);
    // Choices:
    std::optional<int> as_integer;
    std::optional<std::string> as_string;
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
