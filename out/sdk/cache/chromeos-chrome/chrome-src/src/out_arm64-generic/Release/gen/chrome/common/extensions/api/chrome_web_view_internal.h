// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/chrome_web_view_internal.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_CHROME_WEB_VIEW_INTERNAL_H__
#define CHROME_COMMON_EXTENSIONS_API_CHROME_WEB_VIEW_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "chrome/common/extensions/api/context_menus.h"


namespace extensions {
namespace api {
namespace chrome_web_view_internal {

//
// Types
//

// An item in the context menu.
struct ContextMenuItem {
  ContextMenuItem();
  ~ContextMenuItem();
  ContextMenuItem(const ContextMenuItem&) = delete;
  ContextMenuItem& operator=(const ContextMenuItem&) = delete;
  ContextMenuItem(ContextMenuItem&& rhs);
  ContextMenuItem& operator=(ContextMenuItem&& rhs);

  // Populates a ContextMenuItem object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ContextMenuItem& out);

  // Populates a ContextMenuItem object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ContextMenuItem& out);

  // Creates a deep copy of ContextMenuItem.
  ContextMenuItem Clone() const;

  // Creates a ContextMenuItem object from a base::Value, or NULL on failure.
  static std::unique_ptr<ContextMenuItem> FromValueDeprecated(const base::Value& value);

  // Creates a ContextMenuItem object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<ContextMenuItem> FromValue(const base::Value::Dict& value);

  // Creates a ContextMenuItem object from a base::Value, or nullopt on failure.
  static absl::optional<ContextMenuItem> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisContextMenuItem object.
  base::Value::Dict ToValue() const;

  // label of the item
  absl::optional<std::string> label;

  // id of the input item
  int command_id;

};


//
// Functions
//

namespace ContextMenusCreate {

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


    // The type of menu item. Defaults to 'normal' if not specified.
    extensions::api::context_menus::ItemType type;

    // The unique ID to assign to this item. Cannot be the same as another ID for
    // this webview.
    absl::optional<std::string> id;

    // The text to be displayed in the item; this is <em>required</em> unless
    // <em>type</em> is 'separator'. When the context is 'selection', you can use
    // <code>%s</code> within the string to show the selected text. For example, if
    // this parameter's value is "Translate '%s' to Pig Latin" and the user selects
    // the word "cool", the context menu item for the selection is "Translate 'cool'
    // to Pig Latin".
    absl::optional<std::string> title;

    // The initial state of a checkbox or radio item: true for selected and false
    // for unselected. Only one radio item can be selected at a time in a given
    // group of radio items.
    absl::optional<bool> checked;

    // List of contexts this menu item will appear in. Defaults to ['page'] if not
    // specified.
    absl::optional<std::vector<extensions::api::context_menus::ContextType>> contexts;

    // Whether the item is visible in the menu.
    absl::optional<bool> visible;

    // A function that will be called back when the menu item is clicked.
    absl::optional<base::Value::Dict> onclick;

    // The ID of a parent menu item; this makes the item a child of a previously
    // added item.
    absl::optional<ParentId> parent_id;

    // Lets you restrict the item to apply only to documents whose URL matches one
    // of the given patterns. (This applies to frames as well.) For details on the
    // format of a pattern, see <a href='match_patterns'>Match Patterns</a>.
    absl::optional<std::vector<std::string>> document_url_patterns;

    // Similar to documentUrlPatterns, but lets you filter based on the src
    // attribute of img/audio/video tags and the href of anchor tags.
    absl::optional<std::vector<std::string>> target_url_patterns;

    // Whether this context menu item is enabled or disabled. Defaults to true.
    absl::optional<bool> enabled;

  };


  int instance_id;

  CreateProperties create_properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ContextMenusCreate

namespace ContextMenusUpdate {

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

  // The properties to update. Accepts the same values as the create function.
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

    // Note: You cannot change an item to be a child of one of its own descendants.
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


    extensions::api::context_menus::ItemType type;

    absl::optional<std::string> title;

    absl::optional<bool> checked;

    // List of contexts this menu item will appear in. Defaults to ['page'] if not
    // specified.
    absl::optional<std::vector<extensions::api::context_menus::ContextType>> contexts;

    // Whether the item is visible in the menu.
    absl::optional<bool> visible;

    absl::optional<base::Value::Dict> onclick;

    // Note: You cannot change an item to be a child of one of its own descendants.
    absl::optional<ParentId> parent_id;

    absl::optional<std::vector<std::string>> document_url_patterns;

    absl::optional<std::vector<std::string>> target_url_patterns;

    absl::optional<bool> enabled;

  };


  int instance_id;

  // The ID of the item to update.
  Id id;

  // The properties to update. Accepts the same values as the create function.
  UpdateProperties update_properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ContextMenusUpdate

namespace ContextMenusRemove {

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


  int instance_id;

  // The ID of the context menu item to remove.
  MenuItemId menu_item_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ContextMenusRemove

namespace ContextMenusRemoveAll {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  int instance_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ContextMenusRemoveAll

namespace ShowContextMenu {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The instance ID of the guest &lt;webview&gt; process. This not exposed to
  // developers through the API.
  int instance_id;

  // The strictly increasing request counter that serves as ID for the context
  // menu. This not exposed to developers through the API.
  int request_id;

  // Items to be shown in the context menu. These are top level items as opposed
  // to children items.
  absl::optional<std::vector<ContextMenuItem>> items_to_show;


 private:
  Params();
};

}  // namespace ShowContextMenu

//
// Events
//

namespace OnClicked {

extern const char kEventName[];  // "chromeWebViewInternal.onClicked"

base::Value::List Create();
}  // namespace OnClicked

namespace OnShow {

extern const char kEventName[];  // "chromeWebViewInternal.onShow"

struct Event {
  Event();
  ~Event();
  Event(const Event&) = delete;
  Event& operator=(const Event&) = delete;
  Event(Event&& rhs);
  Event& operator=(Event&& rhs);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEvent object.
  base::Value::Dict ToValue() const;

  base::Value::Dict prevent_default;

};


base::Value::List Create(const Event& event);
}  // namespace OnShow

}  // namespace chrome_web_view_internal
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_CHROME_WEB_VIEW_INTERNAL_H__
