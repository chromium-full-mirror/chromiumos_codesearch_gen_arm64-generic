// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/controlled_frame/api/controlled_frame_internal.json
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_CONTROLLED_FRAME_API_CONTROLLED_FRAME_INTERNAL_H__
#define CHROME_COMMON_CONTROLLED_FRAME_API_CONTROLLED_FRAME_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"
#include "chrome/common/extensions/api/context_menus.h"


namespace controlled_frame {
namespace api {
namespace controlled_frame_internal {

//
// Functions
//

namespace ContextMenusCreate {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

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
      // Choices:
      std::optional<int> as_integer;
      std::optional<std::string> as_string;
    };


    // The type of menu item. Defaults to 'normal' if not specified.
    extensions::api::context_menus::ItemType type;

    // The unique ID to assign to this item.
    std::string id;

    // The text to be displayed in the item; this is <em>required</em> unless
    // <em>type</em> is 'separator'. When the context is 'selection', you can use
    // <code>%s</code> within the string to show the selected text. For example, if
    // this parameter's value is "Translate '%s' to Pig Latin" and the user selects
    // the word "cool", the context menu item for the selection is "Translate 'cool'
    // to Pig Latin".
    std::optional<std::string> title;

    // The initial state of a checkbox or radio item: true for selected and false
    // for unselected. Only one radio item can be selected at a time in a given
    // group of radio items.
    std::optional<bool> checked;

    // List of contexts this menu item will appear in. Defaults to ['page'] if not
    // specified.
    std::optional<std::vector<extensions::api::context_menus::ContextType>> contexts;

    // Whether the item is visible in the menu.
    std::optional<bool> visible;

    // A function that will be called back when the menu item is clicked.
    std::optional<base::Value::Dict> onclick;

    // The ID of a parent menu item; this makes the item a child of a previously
    // added item.
    std::optional<ParentId> parent_id;

    // Lets you restrict the item to apply only to documents whose URL matches one
    // of the given patterns. (This applies to frames as well.) For details on the
    // format of a pattern, see <a href='match_patterns'>Match Patterns</a>.
    std::optional<std::vector<std::string>> document_url_patterns;

    // Similar to documentUrlPatterns, but lets you filter based on the src
    // attribute of img/audio/video tags and the href of anchor tags.
    std::optional<std::vector<std::string>> target_url_patterns;

    // Whether this context menu item is enabled or disabled. Defaults to true.
    std::optional<bool> enabled;

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

}  // namespace controlled_frame_internal
}  // namespace api
}  // namespace controlled_frame

#endif  // CHROME_COMMON_CONTROLLED_FRAME_API_CONTROLLED_FRAME_INTERNAL_H__
