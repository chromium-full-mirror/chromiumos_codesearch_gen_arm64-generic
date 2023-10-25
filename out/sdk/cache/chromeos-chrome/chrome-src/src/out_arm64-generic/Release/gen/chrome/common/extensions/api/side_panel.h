// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/side_panel.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_SIDE_PANEL_H__
#define CHROME_COMMON_EXTENSIONS_API_SIDE_PANEL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <string>
#include <vector>

#include "base/values.h"
#include "base/strings/string_piece.h"


namespace extensions {
namespace api {
namespace side_panel {

//
// Types
//

struct SidePanel {
  SidePanel();
  ~SidePanel();
  SidePanel(const SidePanel&) = delete;
  SidePanel& operator=(const SidePanel&) = delete;
  SidePanel(SidePanel&& rhs);
  SidePanel& operator=(SidePanel&& rhs);

  // Manifest key constants.
  static constexpr char kDefaultPath[] = "default_path";

  // Populates a SidePanel object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SidePanel& out);

  // Populates a SidePanel object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SidePanel& out);

  // Creates a deep copy of SidePanel.
  SidePanel Clone() const;

  // Creates a SidePanel object from a base::Value, or NULL on failure.
  static std::unique_ptr<SidePanel> FromValueDeprecated(const base::Value& value);

  // Creates a SidePanel object from a base::Value::Dict, or nullopt on failure.
  static absl::optional<SidePanel> FromValue(const base::Value::Dict& value);

  // Creates a SidePanel object from a base::Value, or nullopt on failure.
  static absl::optional<SidePanel> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSidePanel object.
  base::Value::Dict ToValue() const;

  // Parses the given |key| from |root_dict|. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // and |error_path_reversed| are populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, base::StringPiece key, SidePanel& out, std::u16string& error, std::vector<base::StringPiece>& error_path_reversed);


  // Developer specified path for side panel display.
  std::string default_path;

};

struct PanelOptions {
  PanelOptions();
  ~PanelOptions();
  PanelOptions(const PanelOptions&) = delete;
  PanelOptions& operator=(const PanelOptions&) = delete;
  PanelOptions(PanelOptions&& rhs);
  PanelOptions& operator=(PanelOptions&& rhs);

  // Populates a PanelOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PanelOptions& out);

  // Populates a PanelOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PanelOptions& out);

  // Creates a deep copy of PanelOptions.
  PanelOptions Clone() const;

  // Creates a PanelOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<PanelOptions> FromValueDeprecated(const base::Value& value);

  // Creates a PanelOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<PanelOptions> FromValue(const base::Value::Dict& value);

  // Creates a PanelOptions object from a base::Value, or nullopt on failure.
  static absl::optional<PanelOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPanelOptions object.
  base::Value::Dict ToValue() const;

  // If specified, the side panel options will only apply to the tab with this id.
  // If omitted, these options set the default behavior (used for any tab that
  // doesn't have specific settings). Note: if the same path is set for this tabId
  // and the default tabId, then the panel for this tabId will be a different
  // instance than the panel for the default tabId.
  absl::optional<int> tab_id;

  // The path to the side panel HTML file to use. This must be a local resource
  // within the extension package.
  absl::optional<std::string> path;

  // Whether the side panel should be enabled. This is optional. The default value
  // is true.
  absl::optional<bool> enabled;

};

struct PanelBehavior {
  PanelBehavior();
  ~PanelBehavior();
  PanelBehavior(const PanelBehavior&) = delete;
  PanelBehavior& operator=(const PanelBehavior&) = delete;
  PanelBehavior(PanelBehavior&& rhs);
  PanelBehavior& operator=(PanelBehavior&& rhs);

  // Populates a PanelBehavior object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PanelBehavior& out);

  // Populates a PanelBehavior object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PanelBehavior& out);

  // Creates a deep copy of PanelBehavior.
  PanelBehavior Clone() const;

  // Creates a PanelBehavior object from a base::Value, or NULL on failure.
  static std::unique_ptr<PanelBehavior> FromValueDeprecated(const base::Value& value);

  // Creates a PanelBehavior object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<PanelBehavior> FromValue(const base::Value::Dict& value);

  // Creates a PanelBehavior object from a base::Value, or nullopt on failure.
  static absl::optional<PanelBehavior> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPanelBehavior object.
  base::Value::Dict ToValue() const;

  // Whether clicking the extension's icon will toggle showing the extension's
  // entry in the side panel. Defaults to false.
  absl::optional<bool> open_panel_on_action_click;

};

struct GetPanelOptions {
  GetPanelOptions();
  ~GetPanelOptions();
  GetPanelOptions(const GetPanelOptions&) = delete;
  GetPanelOptions& operator=(const GetPanelOptions&) = delete;
  GetPanelOptions(GetPanelOptions&& rhs);
  GetPanelOptions& operator=(GetPanelOptions&& rhs);

  // Populates a GetPanelOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetPanelOptions& out);

  // Populates a GetPanelOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetPanelOptions& out);

  // Creates a deep copy of GetPanelOptions.
  GetPanelOptions Clone() const;

  // Creates a GetPanelOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<GetPanelOptions> FromValueDeprecated(const base::Value& value);

  // Creates a GetPanelOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<GetPanelOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetPanelOptions object from a base::Value, or nullopt on failure.
  static absl::optional<GetPanelOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetPanelOptions object.
  base::Value::Dict ToValue() const;

  // If specified, the side panel options for the given tab will be returned.
  // Otherwise, returns the default side panel options (used for any tab that
  // doesn't have specific settings).
  absl::optional<int> tab_id;

};

struct OpenOptions {
  OpenOptions();
  ~OpenOptions();
  OpenOptions(const OpenOptions&) = delete;
  OpenOptions& operator=(const OpenOptions&) = delete;
  OpenOptions(OpenOptions&& rhs);
  OpenOptions& operator=(OpenOptions&& rhs);

  // Populates a OpenOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenOptions& out);

  // Populates a OpenOptions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, OpenOptions& out);

  // Creates a deep copy of OpenOptions.
  OpenOptions Clone() const;

  // Creates a OpenOptions object from a base::Value, or NULL on failure.
  static std::unique_ptr<OpenOptions> FromValueDeprecated(const base::Value& value);

  // Creates a OpenOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static absl::optional<OpenOptions> FromValue(const base::Value::Dict& value);

  // Creates a OpenOptions object from a base::Value, or nullopt on failure.
  static absl::optional<OpenOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOpenOptions object.
  base::Value::Dict ToValue() const;

  // The window in which to open the side panel. This is only applicable if the
  // extension has a global (non-tab-specific) side panel or <code>tabId</code> is
  // also specified. This will override any currently-active global side panel the
  // user has open in the given window. At least one of this or <code>tabId</code>
  // must be provided.
  absl::optional<int> window_id;

  // The tab in which to open the side panel. If the corresponding tab has a
  // tab-specific side panel, the panel will only be open for that tab. If there
  // is not a tab-specific panel, the global panel will be open in the specified
  // tab and any other tabs without a currently-open tab- specific panel. This
  // will override any currently-active side panel (global or tab-specific) in the
  // corresponding tab. At least one of this or <code>windowId</code> must be
  // provided.
  absl::optional<int> tab_id;

};


//
// Manifest Keys
//

struct ManifestKeys {
  ManifestKeys();
  ~ManifestKeys();
  ManifestKeys(const ManifestKeys&) = delete;
  ManifestKeys& operator=(const ManifestKeys&) = delete;
  ManifestKeys(ManifestKeys&& rhs);
  ManifestKeys& operator=(ManifestKeys&& rhs);

  // Manifest key constants.
  static constexpr char kSidePanel[] = "side_panel";

  // Parses manifest keys for this namespace. Any keys not available to the
  // manifest will be ignored. On a parsing error, false is returned and |error|
  // is populated.
  static bool ParseFromDictionary(const base::Value::Dict& root_dict, ManifestKeys& out, std::u16string& error);


  SidePanel side_panel;

};

//
// Functions
//

namespace SetOptions {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The configuration options to apply to the panel.
  PanelOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetOptions

namespace GetOptions {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Specifies the context to return the configuration for.
  GetPanelOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const PanelOptions& options);
}  // namespace Results

}  // namespace GetOptions

namespace SetPanelBehavior {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // The new behavior to be set.
  PanelBehavior behavior;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetPanelBehavior

namespace GetPanelBehavior {

namespace Results {

base::Value::List Create(const PanelBehavior& behavior);
}  // namespace Results

}  // namespace GetPanelBehavior

namespace Open {

struct Params {
  static absl::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs);
  Params& operator=(Params&& rhs);
  ~Params();

  // Specifies the context in which to open the side panel.
  OpenOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace Open

}  // namespace side_panel
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_SIDE_PANEL_H__
