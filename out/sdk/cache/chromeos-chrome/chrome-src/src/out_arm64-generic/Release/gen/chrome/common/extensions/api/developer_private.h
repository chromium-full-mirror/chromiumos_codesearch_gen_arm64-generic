// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   chrome/common/extensions/api/developer_private.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef CHROME_COMMON_EXTENSIONS_API_DEVELOPER_PRIVATE_H__
#define CHROME_COMMON_EXTENSIONS_API_DEVELOPER_PRIVATE_H__

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
namespace developer_private {

//
// Types
//

// DEPRECATED: Prefer ExtensionType.
enum class ItemType {
  kNone = 0,
  kHostedApp,
  kPackagedApp,
  kLegacyPackagedApp,
  kExtension,
  kTheme,
  kMaxValue = kTheme,
};


const char* ToString(ItemType as_enum);
ItemType ParseItemType(base::StringPiece as_string);
std::u16string GetItemTypeParseError(base::StringPiece as_string);

struct ItemInspectView {
  ItemInspectView();
  ~ItemInspectView();
  ItemInspectView(const ItemInspectView&) = delete;
  ItemInspectView& operator=(const ItemInspectView&) = delete;
  ItemInspectView(ItemInspectView&& rhs) noexcept;
  ItemInspectView& operator=(ItemInspectView&& rhs) noexcept;

  // Populates a ItemInspectView object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ItemInspectView& out);

  // Populates a ItemInspectView object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ItemInspectView& out);

  // Creates a deep copy of ItemInspectView.
  ItemInspectView Clone() const;

  // Creates a ItemInspectView object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ItemInspectView> FromValue(const base::Value::Dict& value);

  // Creates a ItemInspectView object from a base::Value, or nullopt on failure.
  static std::optional<ItemInspectView> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisItemInspectView object.
  base::Value::Dict ToValue() const;

  // path to the inspect page.
  std::string path;

  // For lazy background pages, the value is -1.
  int render_process_id;

  // This actually refers to a render frame.
  int render_view_id;

  bool incognito;

  bool generated_background_page;

};

struct InspectOptions {
  InspectOptions();
  ~InspectOptions();
  InspectOptions(const InspectOptions&) = delete;
  InspectOptions& operator=(const InspectOptions&) = delete;
  InspectOptions(InspectOptions&& rhs) noexcept;
  InspectOptions& operator=(InspectOptions&& rhs) noexcept;

  // Populates a InspectOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InspectOptions& out);

  // Populates a InspectOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InspectOptions& out);

  // Creates a deep copy of InspectOptions.
  InspectOptions Clone() const;

  // Creates a InspectOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<InspectOptions> FromValue(const base::Value::Dict& value);

  // Creates a InspectOptions object from a base::Value, or nullopt on failure.
  static std::optional<InspectOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInspectOptions object.
  base::Value::Dict ToValue() const;

  struct RenderProcessId {
    RenderProcessId();
    ~RenderProcessId();
    RenderProcessId(const RenderProcessId&) = delete;
    RenderProcessId& operator=(const RenderProcessId&) = delete;
    RenderProcessId(RenderProcessId&& rhs) noexcept;
    RenderProcessId& operator=(RenderProcessId&& rhs) noexcept;

    // Populates a RenderProcessId object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, RenderProcessId& out);

    // Creates a deep copy of RenderProcessId.
    RenderProcessId Clone() const;

    // Creates a RenderProcessId object from a base::Value, or nullopt on failure.
    static std::optional<RenderProcessId> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of
    // thisRenderProcessId object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::string> as_string;
    std::optional<int> as_integer;
  };

  struct RenderViewId {
    RenderViewId();
    ~RenderViewId();
    RenderViewId(const RenderViewId&) = delete;
    RenderViewId& operator=(const RenderViewId&) = delete;
    RenderViewId(RenderViewId&& rhs) noexcept;
    RenderViewId& operator=(RenderViewId&& rhs) noexcept;

    // Populates a RenderViewId object from a base::Value& instance. Returns
    // whether |out| was successfully populated.
    static bool Populate(const base::Value& value, RenderViewId& out);

    // Creates a deep copy of RenderViewId.
    RenderViewId Clone() const;

    // Creates a RenderViewId object from a base::Value, or nullopt on failure.
    static std::optional<RenderViewId> FromValue(const base::Value& value);

    // Returns a new base::Value representing the serialized form of
    // thisRenderViewId object.
    base::Value ToValue() const;
    // Choices:
    std::optional<std::string> as_string;
    std::optional<int> as_integer;
  };


  std::string extension_id;

  RenderProcessId render_process_id;

  RenderViewId render_view_id;

  bool incognito;

};

struct InstallWarning {
  InstallWarning();
  ~InstallWarning();
  InstallWarning(const InstallWarning&) = delete;
  InstallWarning& operator=(const InstallWarning&) = delete;
  InstallWarning(InstallWarning&& rhs) noexcept;
  InstallWarning& operator=(InstallWarning&& rhs) noexcept;

  // Populates a InstallWarning object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, InstallWarning& out);

  // Populates a InstallWarning object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, InstallWarning& out);

  // Creates a deep copy of InstallWarning.
  InstallWarning Clone() const;

  // Creates a InstallWarning object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<InstallWarning> FromValue(const base::Value::Dict& value);

  // Creates a InstallWarning object from a base::Value, or nullopt on failure.
  static std::optional<InstallWarning> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisInstallWarning object.
  base::Value::Dict ToValue() const;

  std::string message;

};

enum class ExtensionType {
  kNone = 0,
  kHostedApp,
  kPlatformApp,
  kLegacyPackagedApp,
  kExtension,
  kTheme,
  kSharedModule,
  kMaxValue = kSharedModule,
};


const char* ToString(ExtensionType as_enum);
ExtensionType ParseExtensionType(base::StringPiece as_string);
std::u16string GetExtensionTypeParseError(base::StringPiece as_string);

enum class Location {
  kNone = 0,
  kFromStore,
  kUnpacked,
  kThirdParty,
  kInstalledByDefault,
  kUnknown,
  kMaxValue = kUnknown,
};


const char* ToString(Location as_enum);
Location ParseLocation(base::StringPiece as_string);
std::u16string GetLocationParseError(base::StringPiece as_string);

enum class ViewType {
  kNone = 0,
  kAppWindow,
  kBackgroundContents,
  kComponent,
  kExtensionBackgroundPage,
  kExtensionGuest,
  kExtensionPopup,
  kExtensionServiceWorkerBackground,
  kTabContents,
  kOffscreenDocument,
  kExtensionSidePanel,
  kMaxValue = kExtensionSidePanel,
};


const char* ToString(ViewType as_enum);
ViewType ParseViewType(base::StringPiece as_string);
std::u16string GetViewTypeParseError(base::StringPiece as_string);

enum class ErrorType {
  kNone = 0,
  kManifest,
  kRuntime,
  kMaxValue = kRuntime,
};


const char* ToString(ErrorType as_enum);
ErrorType ParseErrorType(base::StringPiece as_string);
std::u16string GetErrorTypeParseError(base::StringPiece as_string);

enum class ErrorLevel {
  kNone = 0,
  kLog,
  kWarn,
  kError,
  kMaxValue = kError,
};


const char* ToString(ErrorLevel as_enum);
ErrorLevel ParseErrorLevel(base::StringPiece as_string);
std::u16string GetErrorLevelParseError(base::StringPiece as_string);

enum class ExtensionState {
  kNone = 0,
  kEnabled,
  kDisabled,
  kTerminated,
  kBlacklisted,
  kMaxValue = kBlacklisted,
};


const char* ToString(ExtensionState as_enum);
ExtensionState ParseExtensionState(base::StringPiece as_string);
std::u16string GetExtensionStateParseError(base::StringPiece as_string);

enum class CommandScope {
  kNone = 0,
  kGlobal,
  kChrome,
  kMaxValue = kChrome,
};


const char* ToString(CommandScope as_enum);
CommandScope ParseCommandScope(base::StringPiece as_string);
std::u16string GetCommandScopeParseError(base::StringPiece as_string);

struct AccessModifier {
  AccessModifier();
  ~AccessModifier();
  AccessModifier(const AccessModifier&) = delete;
  AccessModifier& operator=(const AccessModifier&) = delete;
  AccessModifier(AccessModifier&& rhs) noexcept;
  AccessModifier& operator=(AccessModifier&& rhs) noexcept;

  // Populates a AccessModifier object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AccessModifier& out);

  // Populates a AccessModifier object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AccessModifier& out);

  // Creates a deep copy of AccessModifier.
  AccessModifier Clone() const;

  // Creates a AccessModifier object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AccessModifier> FromValue(const base::Value::Dict& value);

  // Creates a AccessModifier object from a base::Value, or nullopt on failure.
  static std::optional<AccessModifier> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAccessModifier object.
  base::Value::Dict ToValue() const;

  bool is_enabled;

  bool is_active;

};

struct StackFrame {
  StackFrame();
  ~StackFrame();
  StackFrame(const StackFrame&) = delete;
  StackFrame& operator=(const StackFrame&) = delete;
  StackFrame(StackFrame&& rhs) noexcept;
  StackFrame& operator=(StackFrame&& rhs) noexcept;

  // Populates a StackFrame object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, StackFrame& out);

  // Populates a StackFrame object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, StackFrame& out);

  // Creates a deep copy of StackFrame.
  StackFrame Clone() const;

  // Creates a StackFrame object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<StackFrame> FromValue(const base::Value::Dict& value);

  // Creates a StackFrame object from a base::Value, or nullopt on failure.
  static std::optional<StackFrame> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisStackFrame object.
  base::Value::Dict ToValue() const;

  int line_number;

  int column_number;

  std::string url;

  std::string function_name;

};

struct ManifestError {
  ManifestError();
  ~ManifestError();
  ManifestError(const ManifestError&) = delete;
  ManifestError& operator=(const ManifestError&) = delete;
  ManifestError(ManifestError&& rhs) noexcept;
  ManifestError& operator=(ManifestError&& rhs) noexcept;

  // Populates a ManifestError object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ManifestError& out);

  // Populates a ManifestError object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ManifestError& out);

  // Creates a deep copy of ManifestError.
  ManifestError Clone() const;

  // Creates a ManifestError object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ManifestError> FromValue(const base::Value::Dict& value);

  // Creates a ManifestError object from a base::Value, or nullopt on failure.
  static std::optional<ManifestError> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisManifestError object.
  base::Value::Dict ToValue() const;

  ErrorType type;

  std::string extension_id;

  bool from_incognito;

  std::string source;

  std::string message;

  int id;

  std::string manifest_key;

  std::optional<std::string> manifest_specific;

};

struct RuntimeError {
  RuntimeError();
  ~RuntimeError();
  RuntimeError(const RuntimeError&) = delete;
  RuntimeError& operator=(const RuntimeError&) = delete;
  RuntimeError(RuntimeError&& rhs) noexcept;
  RuntimeError& operator=(RuntimeError&& rhs) noexcept;

  // Populates a RuntimeError object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RuntimeError& out);

  // Populates a RuntimeError object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RuntimeError& out);

  // Creates a deep copy of RuntimeError.
  RuntimeError Clone() const;

  // Creates a RuntimeError object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<RuntimeError> FromValue(const base::Value::Dict& value);

  // Creates a RuntimeError object from a base::Value, or nullopt on failure.
  static std::optional<RuntimeError> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRuntimeError object.
  base::Value::Dict ToValue() const;

  ErrorType type;

  std::string extension_id;

  bool from_incognito;

  std::string source;

  std::string message;

  int id;

  ErrorLevel severity;

  std::string context_url;

  int occurrences;

  int render_view_id;

  int render_process_id;

  bool can_inspect;

  std::vector<StackFrame> stack_trace;

};

struct DisableReasons {
  DisableReasons();
  ~DisableReasons();
  DisableReasons(const DisableReasons&) = delete;
  DisableReasons& operator=(const DisableReasons&) = delete;
  DisableReasons(DisableReasons&& rhs) noexcept;
  DisableReasons& operator=(DisableReasons&& rhs) noexcept;

  // Populates a DisableReasons object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DisableReasons& out);

  // Populates a DisableReasons object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DisableReasons& out);

  // Creates a deep copy of DisableReasons.
  DisableReasons Clone() const;

  // Creates a DisableReasons object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DisableReasons> FromValue(const base::Value::Dict& value);

  // Creates a DisableReasons object from a base::Value, or nullopt on failure.
  static std::optional<DisableReasons> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDisableReasons object.
  base::Value::Dict ToValue() const;

  bool suspicious_install;

  bool corrupt_install;

  bool update_required;

  bool published_in_store_required;

  bool blocked_by_policy;

  bool reloading;

  bool custodian_approval_required;

  bool parent_disabled_permissions;

};

struct OptionsPage {
  OptionsPage();
  ~OptionsPage();
  OptionsPage(const OptionsPage&) = delete;
  OptionsPage& operator=(const OptionsPage&) = delete;
  OptionsPage(OptionsPage&& rhs) noexcept;
  OptionsPage& operator=(OptionsPage&& rhs) noexcept;

  // Populates a OptionsPage object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OptionsPage& out);

  // Populates a OptionsPage object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, OptionsPage& out);

  // Creates a deep copy of OptionsPage.
  OptionsPage Clone() const;

  // Creates a OptionsPage object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<OptionsPage> FromValue(const base::Value::Dict& value);

  // Creates a OptionsPage object from a base::Value, or nullopt on failure.
  static std::optional<OptionsPage> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOptionsPage object.
  base::Value::Dict ToValue() const;

  bool open_in_tab;

  std::string url;

};

struct HomePage {
  HomePage();
  ~HomePage();
  HomePage(const HomePage&) = delete;
  HomePage& operator=(const HomePage&) = delete;
  HomePage(HomePage&& rhs) noexcept;
  HomePage& operator=(HomePage&& rhs) noexcept;

  // Populates a HomePage object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, HomePage& out);

  // Populates a HomePage object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, HomePage& out);

  // Creates a deep copy of HomePage.
  HomePage Clone() const;

  // Creates a HomePage object from a base::Value::Dict, or nullopt on failure.
  static std::optional<HomePage> FromValue(const base::Value::Dict& value);

  // Creates a HomePage object from a base::Value, or nullopt on failure.
  static std::optional<HomePage> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHomePage object.
  base::Value::Dict ToValue() const;

  std::string url;

  bool specified;

};

struct ExtensionView {
  ExtensionView();
  ~ExtensionView();
  ExtensionView(const ExtensionView&) = delete;
  ExtensionView& operator=(const ExtensionView&) = delete;
  ExtensionView(ExtensionView&& rhs) noexcept;
  ExtensionView& operator=(ExtensionView&& rhs) noexcept;

  // Populates a ExtensionView object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionView& out);

  // Populates a ExtensionView object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionView& out);

  // Creates a deep copy of ExtensionView.
  ExtensionView Clone() const;

  // Creates a ExtensionView object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ExtensionView> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionView object from a base::Value, or nullopt on failure.
  static std::optional<ExtensionView> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionView object.
  base::Value::Dict ToValue() const;

  std::string url;

  int render_process_id;

  // This actually refers to a render frame.
  int render_view_id;

  bool incognito;

  bool is_iframe;

  ViewType type;

};

enum class HostAccess {
  kNone = 0,
  kOnClick,
  kOnSpecificSites,
  kOnAllSites,
  kMaxValue = kOnAllSites,
};


const char* ToString(HostAccess as_enum);
HostAccess ParseHostAccess(base::StringPiece as_string);
std::u16string GetHostAccessParseError(base::StringPiece as_string);

struct SafetyCheckStrings {
  SafetyCheckStrings();
  ~SafetyCheckStrings();
  SafetyCheckStrings(const SafetyCheckStrings&) = delete;
  SafetyCheckStrings& operator=(const SafetyCheckStrings&) = delete;
  SafetyCheckStrings(SafetyCheckStrings&& rhs) noexcept;
  SafetyCheckStrings& operator=(SafetyCheckStrings&& rhs) noexcept;

  // Populates a SafetyCheckStrings object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SafetyCheckStrings& out);

  // Populates a SafetyCheckStrings object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SafetyCheckStrings& out);

  // Creates a deep copy of SafetyCheckStrings.
  SafetyCheckStrings Clone() const;

  // Creates a SafetyCheckStrings object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SafetyCheckStrings> FromValue(const base::Value::Dict& value);

  // Creates a SafetyCheckStrings object from a base::Value, or nullopt on
  // failure.
  static std::optional<SafetyCheckStrings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSafetyCheckStrings object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> panel_string;

  std::optional<std::string> detail_string;

};

struct ControlledInfo {
  ControlledInfo();
  ~ControlledInfo();
  ControlledInfo(const ControlledInfo&) = delete;
  ControlledInfo& operator=(const ControlledInfo&) = delete;
  ControlledInfo(ControlledInfo&& rhs) noexcept;
  ControlledInfo& operator=(ControlledInfo&& rhs) noexcept;

  // Populates a ControlledInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ControlledInfo& out);

  // Populates a ControlledInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ControlledInfo& out);

  // Creates a deep copy of ControlledInfo.
  ControlledInfo Clone() const;

  // Creates a ControlledInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ControlledInfo> FromValue(const base::Value::Dict& value);

  // Creates a ControlledInfo object from a base::Value, or nullopt on failure.
  static std::optional<ControlledInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisControlledInfo object.
  base::Value::Dict ToValue() const;

  std::string text;

};

struct Command {
  Command();
  ~Command();
  Command(const Command&) = delete;
  Command& operator=(const Command&) = delete;
  Command(Command&& rhs) noexcept;
  Command& operator=(Command&& rhs) noexcept;

  // Populates a Command object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Command& out);

  // Populates a Command object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Command& out);

  // Creates a deep copy of Command.
  Command Clone() const;

  // Creates a Command object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Command> FromValue(const base::Value::Dict& value);

  // Creates a Command object from a base::Value, or nullopt on failure.
  static std::optional<Command> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCommand object.
  base::Value::Dict ToValue() const;

  std::string description;

  std::string keybinding;

  std::string name;

  bool is_active;

  CommandScope scope;

  bool is_extension_action;

};

struct DependentExtension {
  DependentExtension();
  ~DependentExtension();
  DependentExtension(const DependentExtension&) = delete;
  DependentExtension& operator=(const DependentExtension&) = delete;
  DependentExtension(DependentExtension&& rhs) noexcept;
  DependentExtension& operator=(DependentExtension&& rhs) noexcept;

  // Populates a DependentExtension object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DependentExtension& out);

  // Populates a DependentExtension object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DependentExtension& out);

  // Creates a deep copy of DependentExtension.
  DependentExtension Clone() const;

  // Creates a DependentExtension object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<DependentExtension> FromValue(const base::Value::Dict& value);

  // Creates a DependentExtension object from a base::Value, or nullopt on
  // failure.
  static std::optional<DependentExtension> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDependentExtension object.
  base::Value::Dict ToValue() const;

  std::string id;

  std::string name;

};

struct Permission {
  Permission();
  ~Permission();
  Permission(const Permission&) = delete;
  Permission& operator=(const Permission&) = delete;
  Permission(Permission&& rhs) noexcept;
  Permission& operator=(Permission&& rhs) noexcept;

  // Populates a Permission object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Permission& out);

  // Populates a Permission object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Permission& out);

  // Creates a deep copy of Permission.
  Permission Clone() const;

  // Creates a Permission object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Permission> FromValue(const base::Value::Dict& value);

  // Creates a Permission object from a base::Value, or nullopt on failure.
  static std::optional<Permission> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPermission object.
  base::Value::Dict ToValue() const;

  std::string message;

  std::vector<std::string> submessages;

};

struct SiteControl {
  SiteControl();
  ~SiteControl();
  SiteControl(const SiteControl&) = delete;
  SiteControl& operator=(const SiteControl&) = delete;
  SiteControl(SiteControl&& rhs) noexcept;
  SiteControl& operator=(SiteControl&& rhs) noexcept;

  // Populates a SiteControl object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SiteControl& out);

  // Populates a SiteControl object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SiteControl& out);

  // Creates a deep copy of SiteControl.
  SiteControl Clone() const;

  // Creates a SiteControl object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SiteControl> FromValue(const base::Value::Dict& value);

  // Creates a SiteControl object from a base::Value, or nullopt on failure.
  static std::optional<SiteControl> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSiteControl object.
  base::Value::Dict ToValue() const;

  // The host pattern for the site.
  std::string host;

  // Whether the pattern has been granted.
  bool granted;

};

struct RuntimeHostPermissions {
  RuntimeHostPermissions();
  ~RuntimeHostPermissions();
  RuntimeHostPermissions(const RuntimeHostPermissions&) = delete;
  RuntimeHostPermissions& operator=(const RuntimeHostPermissions&) = delete;
  RuntimeHostPermissions(RuntimeHostPermissions&& rhs) noexcept;
  RuntimeHostPermissions& operator=(RuntimeHostPermissions&& rhs) noexcept;

  // Populates a RuntimeHostPermissions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RuntimeHostPermissions& out);

  // Populates a RuntimeHostPermissions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RuntimeHostPermissions& out);

  // Creates a deep copy of RuntimeHostPermissions.
  RuntimeHostPermissions Clone() const;

  // Creates a RuntimeHostPermissions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<RuntimeHostPermissions> FromValue(const base::Value::Dict& value);

  // Creates a RuntimeHostPermissions object from a base::Value, or nullopt on
  // failure.
  static std::optional<RuntimeHostPermissions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRuntimeHostPermissions object.
  base::Value::Dict ToValue() const;

  // True if |hosts| contains an all hosts like pattern.
  bool has_all_hosts;

  // The current HostAccess setting for the extension.
  HostAccess host_access;

  // The site controls for all granted and requested patterns.
  std::vector<SiteControl> hosts;

};

struct Permissions {
  Permissions();
  ~Permissions();
  Permissions(const Permissions&) = delete;
  Permissions& operator=(const Permissions&) = delete;
  Permissions(Permissions&& rhs) noexcept;
  Permissions& operator=(Permissions&& rhs) noexcept;

  // Populates a Permissions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, Permissions& out);

  // Populates a Permissions object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, Permissions& out);

  // Creates a deep copy of Permissions.
  Permissions Clone() const;

  // Creates a Permissions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<Permissions> FromValue(const base::Value::Dict& value);

  // Creates a Permissions object from a base::Value, or nullopt on failure.
  static std::optional<Permissions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPermissions object.
  base::Value::Dict ToValue() const;

  std::vector<Permission> simple_permissions;

  // Only populated for extensions that can be affected by the runtime host
  // permissions feature.
  std::optional<RuntimeHostPermissions> runtime_host_permissions;

  // True if the extension can access site data through host permissions or API
  // permissions such as activeTab.
  bool can_access_site_data;

};

struct ExtensionInfo {
  ExtensionInfo();
  ~ExtensionInfo();
  ExtensionInfo(const ExtensionInfo&) = delete;
  ExtensionInfo& operator=(const ExtensionInfo&) = delete;
  ExtensionInfo(ExtensionInfo&& rhs) noexcept;
  ExtensionInfo& operator=(ExtensionInfo&& rhs) noexcept;

  // Populates a ExtensionInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionInfo& out);

  // Populates a ExtensionInfo object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionInfo& out);

  // Creates a deep copy of ExtensionInfo.
  ExtensionInfo Clone() const;

  // Creates a ExtensionInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ExtensionInfo> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionInfo object from a base::Value, or nullopt on failure.
  static std::optional<ExtensionInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionInfo object.
  base::Value::Dict ToValue() const;

  std::optional<std::string> blacklist_text;

  std::optional<SafetyCheckStrings> safety_check_text;

  std::vector<Command> commands;

  std::optional<ControlledInfo> controlled_info;

  std::vector<DependentExtension> dependent_extensions;

  std::string description;

  DisableReasons disable_reasons;

  AccessModifier error_collection;

  AccessModifier file_access;

  HomePage home_page;

  std::string icon_url;

  std::string id;

  AccessModifier incognito_access;

  std::vector<std::string> install_warnings;

  std::optional<std::string> launch_url;

  Location location;

  std::optional<std::string> location_text;

  std::vector<ManifestError> manifest_errors;

  std::string manifest_home_page_url;

  bool must_remain_installed;

  std::string name;

  bool offline_enabled;

  std::optional<OptionsPage> options_page;

  std::optional<std::string> path;

  Permissions permissions;

  std::optional<std::string> prettified_path;

  std::vector<RuntimeError> runtime_errors;

  std::vector<std::string> runtime_warnings;

  ExtensionState state;

  ExtensionType type;

  std::string update_url;

  bool user_may_modify;

  std::string version;

  std::vector<ExtensionView> views;

  std::string web_store_url;

  bool show_safe_browsing_allowlist_warning;

  bool show_access_requests_in_toolbar;

  bool acknowledge_safety_check_warning;

  std::optional<bool> pinned_to_toolbar;

};

struct ProfileInfo {
  ProfileInfo();
  ~ProfileInfo();
  ProfileInfo(const ProfileInfo&) = delete;
  ProfileInfo& operator=(const ProfileInfo&) = delete;
  ProfileInfo(ProfileInfo&& rhs) noexcept;
  ProfileInfo& operator=(ProfileInfo&& rhs) noexcept;

  // Populates a ProfileInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProfileInfo& out);

  // Populates a ProfileInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProfileInfo& out);

  // Creates a deep copy of ProfileInfo.
  ProfileInfo Clone() const;

  // Creates a ProfileInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProfileInfo> FromValue(const base::Value::Dict& value);

  // Creates a ProfileInfo object from a base::Value, or nullopt on failure.
  static std::optional<ProfileInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProfileInfo object.
  base::Value::Dict ToValue() const;

  bool can_load_unpacked;

  bool in_developer_mode;

  bool is_developer_mode_controlled_by_policy;

  bool is_incognito_available;

  bool is_child_account;

};

struct ItemInfo {
  ItemInfo();
  ~ItemInfo();
  ItemInfo(const ItemInfo&) = delete;
  ItemInfo& operator=(const ItemInfo&) = delete;
  ItemInfo(ItemInfo&& rhs) noexcept;
  ItemInfo& operator=(ItemInfo&& rhs) noexcept;

  // Populates a ItemInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, ItemInfo& out);

  // Populates a ItemInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ItemInfo& out);

  // Creates a deep copy of ItemInfo.
  ItemInfo Clone() const;

  // Creates a ItemInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<ItemInfo> FromValue(const base::Value::Dict& value);

  // Creates a ItemInfo object from a base::Value, or nullopt on failure.
  static std::optional<ItemInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisItemInfo object.
  base::Value::Dict ToValue() const;

  std::string id;

  std::string name;

  std::string version;

  std::string description;

  bool may_disable;

  bool enabled;

  bool is_app;

  ItemType type;

  bool allow_activity;

  bool allow_file_access;

  bool wants_file_access;

  bool incognito_enabled;

  bool is_unpacked;

  bool allow_reload;

  bool terminated;

  bool allow_incognito;

  std::string icon_url;

  // Path of an unpacked extension.
  std::optional<std::string> path;

  // Options settings page for the item.
  std::optional<std::string> options_url;

  std::optional<std::string> app_launch_url;

  std::optional<std::string> homepage_url;

  std::optional<std::string> update_url;

  std::vector<InstallWarning> install_warnings;

  base::Value::List manifest_errors;

  base::Value::List runtime_errors;

  bool offline_enabled;

  // All views of the current extension.
  std::vector<ItemInspectView> views;

};

struct GetExtensionsInfoOptions {
  GetExtensionsInfoOptions();
  ~GetExtensionsInfoOptions();
  GetExtensionsInfoOptions(const GetExtensionsInfoOptions&) = delete;
  GetExtensionsInfoOptions& operator=(const GetExtensionsInfoOptions&) = delete;
  GetExtensionsInfoOptions(GetExtensionsInfoOptions&& rhs) noexcept;
  GetExtensionsInfoOptions& operator=(GetExtensionsInfoOptions&& rhs) noexcept;

  // Populates a GetExtensionsInfoOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetExtensionsInfoOptions& out);

  // Populates a GetExtensionsInfoOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetExtensionsInfoOptions& out);

  // Creates a deep copy of GetExtensionsInfoOptions.
  GetExtensionsInfoOptions Clone() const;

  // Creates a GetExtensionsInfoOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetExtensionsInfoOptions> FromValue(const base::Value::Dict& value);

  // Creates a GetExtensionsInfoOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetExtensionsInfoOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetExtensionsInfoOptions object.
  base::Value::Dict ToValue() const;

  std::optional<bool> include_disabled;

  std::optional<bool> include_terminated;

};

struct ExtensionConfigurationUpdate {
  ExtensionConfigurationUpdate();
  ~ExtensionConfigurationUpdate();
  ExtensionConfigurationUpdate(const ExtensionConfigurationUpdate&) = delete;
  ExtensionConfigurationUpdate& operator=(const ExtensionConfigurationUpdate&) = delete;
  ExtensionConfigurationUpdate(ExtensionConfigurationUpdate&& rhs) noexcept;
  ExtensionConfigurationUpdate& operator=(ExtensionConfigurationUpdate&& rhs) noexcept;

  // Populates a ExtensionConfigurationUpdate object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionConfigurationUpdate& out);

  // Populates a ExtensionConfigurationUpdate object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionConfigurationUpdate& out);

  // Creates a deep copy of ExtensionConfigurationUpdate.
  ExtensionConfigurationUpdate Clone() const;

  // Creates a ExtensionConfigurationUpdate object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ExtensionConfigurationUpdate> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionConfigurationUpdate object from a base::Value, or
  // nullopt on failure.
  static std::optional<ExtensionConfigurationUpdate> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionConfigurationUpdate object.
  base::Value::Dict ToValue() const;

  std::string extension_id;

  std::optional<bool> file_access;

  std::optional<bool> incognito_access;

  std::optional<bool> error_collection;

  HostAccess host_access;

  std::optional<bool> show_access_requests_in_toolbar;

  std::optional<bool> acknowledge_safety_check_warning;

  std::optional<bool> pinned_to_toolbar;

};

struct ProfileConfigurationUpdate {
  ProfileConfigurationUpdate();
  ~ProfileConfigurationUpdate();
  ProfileConfigurationUpdate(const ProfileConfigurationUpdate&) = delete;
  ProfileConfigurationUpdate& operator=(const ProfileConfigurationUpdate&) = delete;
  ProfileConfigurationUpdate(ProfileConfigurationUpdate&& rhs) noexcept;
  ProfileConfigurationUpdate& operator=(ProfileConfigurationUpdate&& rhs) noexcept;

  // Populates a ProfileConfigurationUpdate object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProfileConfigurationUpdate& out);

  // Populates a ProfileConfigurationUpdate object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProfileConfigurationUpdate& out);

  // Creates a deep copy of ProfileConfigurationUpdate.
  ProfileConfigurationUpdate Clone() const;

  // Creates a ProfileConfigurationUpdate object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ProfileConfigurationUpdate> FromValue(const base::Value::Dict& value);

  // Creates a ProfileConfigurationUpdate object from a base::Value, or nullopt
  // on failure.
  static std::optional<ProfileConfigurationUpdate> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProfileConfigurationUpdate object.
  base::Value::Dict ToValue() const;

  std::optional<bool> in_developer_mode;

};

struct ExtensionCommandUpdate {
  ExtensionCommandUpdate();
  ~ExtensionCommandUpdate();
  ExtensionCommandUpdate(const ExtensionCommandUpdate&) = delete;
  ExtensionCommandUpdate& operator=(const ExtensionCommandUpdate&) = delete;
  ExtensionCommandUpdate(ExtensionCommandUpdate&& rhs) noexcept;
  ExtensionCommandUpdate& operator=(ExtensionCommandUpdate&& rhs) noexcept;

  // Populates a ExtensionCommandUpdate object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionCommandUpdate& out);

  // Populates a ExtensionCommandUpdate object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionCommandUpdate& out);

  // Creates a deep copy of ExtensionCommandUpdate.
  ExtensionCommandUpdate Clone() const;

  // Creates a ExtensionCommandUpdate object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ExtensionCommandUpdate> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionCommandUpdate object from a base::Value, or nullopt on
  // failure.
  static std::optional<ExtensionCommandUpdate> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionCommandUpdate object.
  base::Value::Dict ToValue() const;

  std::string extension_id;

  std::string command_name;

  CommandScope scope;

  std::optional<std::string> keybinding;

};

struct ReloadOptions {
  ReloadOptions();
  ~ReloadOptions();
  ReloadOptions(const ReloadOptions&) = delete;
  ReloadOptions& operator=(const ReloadOptions&) = delete;
  ReloadOptions(ReloadOptions&& rhs) noexcept;
  ReloadOptions& operator=(ReloadOptions&& rhs) noexcept;

  // Populates a ReloadOptions object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReloadOptions& out);

  // Populates a ReloadOptions object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReloadOptions& out);

  // Creates a deep copy of ReloadOptions.
  ReloadOptions Clone() const;

  // Creates a ReloadOptions object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ReloadOptions> FromValue(const base::Value::Dict& value);

  // Creates a ReloadOptions object from a base::Value, or nullopt on failure.
  static std::optional<ReloadOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReloadOptions object.
  base::Value::Dict ToValue() const;

  // If false, an alert dialog will show in the event of a reload error. Defaults
  // to false.
  std::optional<bool> fail_quietly;

  // If true, populates a LoadError for the response rather than setting
  // lastError. Only relevant for unpacked extensions; it will be ignored for any
  // other extension.
  std::optional<bool> populate_error_for_unpacked;

};

struct LoadUnpackedOptions {
  LoadUnpackedOptions();
  ~LoadUnpackedOptions();
  LoadUnpackedOptions(const LoadUnpackedOptions&) = delete;
  LoadUnpackedOptions& operator=(const LoadUnpackedOptions&) = delete;
  LoadUnpackedOptions(LoadUnpackedOptions&& rhs) noexcept;
  LoadUnpackedOptions& operator=(LoadUnpackedOptions&& rhs) noexcept;

  // Populates a LoadUnpackedOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, LoadUnpackedOptions& out);

  // Populates a LoadUnpackedOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, LoadUnpackedOptions& out);

  // Creates a deep copy of LoadUnpackedOptions.
  LoadUnpackedOptions Clone() const;

  // Creates a LoadUnpackedOptions object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<LoadUnpackedOptions> FromValue(const base::Value::Dict& value);

  // Creates a LoadUnpackedOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<LoadUnpackedOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLoadUnpackedOptions object.
  base::Value::Dict ToValue() const;

  // If false, an alert dialog will show in the event of a reload error. Defaults
  // to false.
  std::optional<bool> fail_quietly;

  // If true, populates a LoadError for the response rather than setting
  // lastError.
  std::optional<bool> populate_error;

  // A unique identifier for retrying a previous failed load. This should be the
  // identifier returned in the LoadError. If specified, the path associated with
  // the identifier will be loaded, and the file chooser will be skipped.
  std::optional<std::string> retry_guid;

  // True if the function should try to load an extension from the drop data of
  // the page. notifyDragInstallInProgress() needs to be called prior to this
  // being used. This cannot be used with |retryGuid|.
  std::optional<bool> use_dragged_path;

};

// Describes which set of sites a given url/string is associated with. Note that
// a site can belong to multiple sets at the same time.
enum class SiteSet {
  kNone = 0,
  kUserPermitted,
  kUserRestricted,
  kExtensionSpecified,
  kMaxValue = kExtensionSpecified,
};


const char* ToString(SiteSet as_enum);
SiteSet ParseSiteSet(base::StringPiece as_string);
std::u16string GetSiteSetParseError(base::StringPiece as_string);

struct UserSiteSettingsOptions {
  UserSiteSettingsOptions();
  ~UserSiteSettingsOptions();
  UserSiteSettingsOptions(const UserSiteSettingsOptions&) = delete;
  UserSiteSettingsOptions& operator=(const UserSiteSettingsOptions&) = delete;
  UserSiteSettingsOptions(UserSiteSettingsOptions&& rhs) noexcept;
  UserSiteSettingsOptions& operator=(UserSiteSettingsOptions&& rhs) noexcept;

  // Populates a UserSiteSettingsOptions object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UserSiteSettingsOptions& out);

  // Populates a UserSiteSettingsOptions object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UserSiteSettingsOptions& out);

  // Creates a deep copy of UserSiteSettingsOptions.
  UserSiteSettingsOptions Clone() const;

  // Creates a UserSiteSettingsOptions object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<UserSiteSettingsOptions> FromValue(const base::Value::Dict& value);

  // Creates a UserSiteSettingsOptions object from a base::Value, or nullopt on
  // failure.
  static std::optional<UserSiteSettingsOptions> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUserSiteSettingsOptions object.
  base::Value::Dict ToValue() const;

  // Specifies which set of user specified sites that the host will be added to or
  // removed from.
  SiteSet site_set;

  // The sites to add/remove.
  std::vector<std::string> hosts;

};

struct UserSiteSettings {
  UserSiteSettings();
  ~UserSiteSettings();
  UserSiteSettings(const UserSiteSettings&) = delete;
  UserSiteSettings& operator=(const UserSiteSettings&) = delete;
  UserSiteSettings(UserSiteSettings&& rhs) noexcept;
  UserSiteSettings& operator=(UserSiteSettings&& rhs) noexcept;

  // Populates a UserSiteSettings object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, UserSiteSettings& out);

  // Populates a UserSiteSettings object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, UserSiteSettings& out);

  // Creates a deep copy of UserSiteSettings.
  UserSiteSettings Clone() const;

  // Creates a UserSiteSettings object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<UserSiteSettings> FromValue(const base::Value::Dict& value);

  // Creates a UserSiteSettings object from a base::Value, or nullopt on
  // failure.
  static std::optional<UserSiteSettings> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisUserSiteSettings object.
  base::Value::Dict ToValue() const;

  // The list of origins where the user has allowed all extensions to run on.
  std::vector<std::string> permitted_sites;

  // The list of origins where the user has blocked all extensions from running
  // on.
  std::vector<std::string> restricted_sites;

};

struct SiteInfo {
  SiteInfo();
  ~SiteInfo();
  SiteInfo(const SiteInfo&) = delete;
  SiteInfo& operator=(const SiteInfo&) = delete;
  SiteInfo(SiteInfo&& rhs) noexcept;
  SiteInfo& operator=(SiteInfo&& rhs) noexcept;

  // Populates a SiteInfo object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SiteInfo& out);

  // Populates a SiteInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SiteInfo& out);

  // Creates a deep copy of SiteInfo.
  SiteInfo Clone() const;

  // Creates a SiteInfo object from a base::Value::Dict, or nullopt on failure.
  static std::optional<SiteInfo> FromValue(const base::Value::Dict& value);

  // Creates a SiteInfo object from a base::Value, or nullopt on failure.
  static std::optional<SiteInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSiteInfo object.
  base::Value::Dict ToValue() const;

  // The site set that `site` belongs to.
  SiteSet site_set;

  // The number of extensions with access to `site`. TODO(crbug.com/1331137): A
  // tricky edge case is when one extension specifies something like *.foo.com and
  // another specifies foo.com. Patterns which match all subdomains should be
  // represented differently.
  int num_extensions;

  // The site itself. This could either be a user specified site or an extension
  // host permission pattern.
  std::string site;

};

struct SiteGroup {
  SiteGroup();
  ~SiteGroup();
  SiteGroup(const SiteGroup&) = delete;
  SiteGroup& operator=(const SiteGroup&) = delete;
  SiteGroup(SiteGroup&& rhs) noexcept;
  SiteGroup& operator=(SiteGroup&& rhs) noexcept;

  // Populates a SiteGroup object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, SiteGroup& out);

  // Populates a SiteGroup object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, SiteGroup& out);

  // Creates a deep copy of SiteGroup.
  SiteGroup Clone() const;

  // Creates a SiteGroup object from a base::Value::Dict, or nullopt on failure.
  static std::optional<SiteGroup> FromValue(const base::Value::Dict& value);

  // Creates a SiteGroup object from a base::Value, or nullopt on failure.
  static std::optional<SiteGroup> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSiteGroup object.
  base::Value::Dict ToValue() const;

  // The common effective top level domain plus one (eTLD+1) for all sites in
  // `sites`.
  std::string etld_plus_one;

  // The number of extensions that can run on at least one site inside `sites` for
  // this eTLD+1.
  int num_extensions;

  // The list of user or extension specified sites that share the same eTLD+1.
  std::vector<SiteInfo> sites;

};

struct MatchingExtensionInfo {
  MatchingExtensionInfo();
  ~MatchingExtensionInfo();
  MatchingExtensionInfo(const MatchingExtensionInfo&) = delete;
  MatchingExtensionInfo& operator=(const MatchingExtensionInfo&) = delete;
  MatchingExtensionInfo(MatchingExtensionInfo&& rhs) noexcept;
  MatchingExtensionInfo& operator=(MatchingExtensionInfo&& rhs) noexcept;

  // Populates a MatchingExtensionInfo object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, MatchingExtensionInfo& out);

  // Populates a MatchingExtensionInfo object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, MatchingExtensionInfo& out);

  // Creates a deep copy of MatchingExtensionInfo.
  MatchingExtensionInfo Clone() const;

  // Creates a MatchingExtensionInfo object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<MatchingExtensionInfo> FromValue(const base::Value::Dict& value);

  // Creates a MatchingExtensionInfo object from a base::Value, or nullopt on
  // failure.
  static std::optional<MatchingExtensionInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMatchingExtensionInfo object.
  base::Value::Dict ToValue() const;

  // The id of the matching extension.
  std::string id;

  // Describes the extension's access to the queried site from
  // getMatchingExtensionsForSite. Note that the meaning is different from the
  // original enum: - ON_CLICK: The extension requested access to the site but its
  // access is   withheld. - ON_SPECIFIC_SITES: the extension is permitted to run
  // on at least one   site specified by the queried site but it does not request
  // access to   all sites or it has its access withheld on at least one site in
  // its   host permissions. - ON_ALL_SITES: the extension is permitted to run on
  // all sites.
  HostAccess site_access;

  // Whether the matching extension requests access to all sites in its host
  // permissions.
  bool can_request_all_sites;

};

struct ExtensionSiteAccessUpdate {
  ExtensionSiteAccessUpdate();
  ~ExtensionSiteAccessUpdate();
  ExtensionSiteAccessUpdate(const ExtensionSiteAccessUpdate&) = delete;
  ExtensionSiteAccessUpdate& operator=(const ExtensionSiteAccessUpdate&) = delete;
  ExtensionSiteAccessUpdate(ExtensionSiteAccessUpdate&& rhs) noexcept;
  ExtensionSiteAccessUpdate& operator=(ExtensionSiteAccessUpdate&& rhs) noexcept;

  // Populates a ExtensionSiteAccessUpdate object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ExtensionSiteAccessUpdate& out);

  // Populates a ExtensionSiteAccessUpdate object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ExtensionSiteAccessUpdate& out);

  // Creates a deep copy of ExtensionSiteAccessUpdate.
  ExtensionSiteAccessUpdate Clone() const;

  // Creates a ExtensionSiteAccessUpdate object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ExtensionSiteAccessUpdate> FromValue(const base::Value::Dict& value);

  // Creates a ExtensionSiteAccessUpdate object from a base::Value, or nullopt
  // on failure.
  static std::optional<ExtensionSiteAccessUpdate> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisExtensionSiteAccessUpdate object.
  base::Value::Dict ToValue() const;

  // The id of the extension to update its site access settings for.
  std::string id;

  // Describes the update made to the extension's site access for a given site
  // Note that this has a different meaning from the original enum: - ON_CLICK:
  // Withholds the extension's access to the given site, - ON_SPECIFIC_SITES:
  // Grants the extension access to the intersection of   (given site, extension's
  // specified host permissions.) - ON_ALL_SITES: Grants access to all of the
  // extension's specified host   permissions.
  HostAccess site_access;

};

enum class PackStatus {
  kNone = 0,
  kSuccess,
  kError,
  kWarning,
  kMaxValue = kWarning,
};


const char* ToString(PackStatus as_enum);
PackStatus ParsePackStatus(base::StringPiece as_string);
std::u16string GetPackStatusParseError(base::StringPiece as_string);

enum class FileType {
  kNone = 0,
  kLoad,
  kPem,
  kMaxValue = kPem,
};


const char* ToString(FileType as_enum);
FileType ParseFileType(base::StringPiece as_string);
std::u16string GetFileTypeParseError(base::StringPiece as_string);

enum class SelectType {
  kNone = 0,
  kFile,
  kFolder,
  kMaxValue = kFolder,
};


const char* ToString(SelectType as_enum);
SelectType ParseSelectType(base::StringPiece as_string);
std::u16string GetSelectTypeParseError(base::StringPiece as_string);

enum class EventType {
  kNone = 0,
  kInstalled,
  kUninstalled,
  kLoaded,
  kUnloaded,
  kViewRegistered,
  kViewUnregistered,
  kErrorAdded,
  kErrorsRemoved,
  kPrefsChanged,
  kWarningsChanged,
  kCommandAdded,
  kCommandRemoved,
  kPermissionsChanged,
  kServiceWorkerStarted,
  kServiceWorkerStopped,
  kConfigurationChanged,
  kPinnedActionsChanged,
  kMaxValue = kPinnedActionsChanged,
};


const char* ToString(EventType as_enum);
EventType ParseEventType(base::StringPiece as_string);
std::u16string GetEventTypeParseError(base::StringPiece as_string);

struct PackDirectoryResponse {
  PackDirectoryResponse();
  ~PackDirectoryResponse();
  PackDirectoryResponse(const PackDirectoryResponse&) = delete;
  PackDirectoryResponse& operator=(const PackDirectoryResponse&) = delete;
  PackDirectoryResponse(PackDirectoryResponse&& rhs) noexcept;
  PackDirectoryResponse& operator=(PackDirectoryResponse&& rhs) noexcept;

  // Populates a PackDirectoryResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PackDirectoryResponse& out);

  // Populates a PackDirectoryResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PackDirectoryResponse& out);

  // Creates a deep copy of PackDirectoryResponse.
  PackDirectoryResponse Clone() const;

  // Creates a PackDirectoryResponse object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<PackDirectoryResponse> FromValue(const base::Value::Dict& value);

  // Creates a PackDirectoryResponse object from a base::Value, or nullopt on
  // failure.
  static std::optional<PackDirectoryResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPackDirectoryResponse object.
  base::Value::Dict ToValue() const;

  // The response message of success or error.
  std::string message;

  // Unpacked items's path.
  std::string item_path;

  // Permanent key path.
  std::string pem_path;

  int override_flags;

  PackStatus status;

};

struct ProjectInfo {
  ProjectInfo();
  ~ProjectInfo();
  ProjectInfo(const ProjectInfo&) = delete;
  ProjectInfo& operator=(const ProjectInfo&) = delete;
  ProjectInfo(ProjectInfo&& rhs) noexcept;
  ProjectInfo& operator=(ProjectInfo&& rhs) noexcept;

  // Populates a ProjectInfo object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ProjectInfo& out);

  // Populates a ProjectInfo object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, ProjectInfo& out);

  // Creates a deep copy of ProjectInfo.
  ProjectInfo Clone() const;

  // Creates a ProjectInfo object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ProjectInfo> FromValue(const base::Value::Dict& value);

  // Creates a ProjectInfo object from a base::Value, or nullopt on failure.
  static std::optional<ProjectInfo> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisProjectInfo object.
  base::Value::Dict ToValue() const;

  std::string name;

};

struct EventData {
  EventData();
  ~EventData();
  EventData(const EventData&) = delete;
  EventData& operator=(const EventData&) = delete;
  EventData(EventData&& rhs) noexcept;
  EventData& operator=(EventData&& rhs) noexcept;

  // Populates a EventData object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, EventData& out);

  // Populates a EventData object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, EventData& out);

  // Creates a deep copy of EventData.
  EventData Clone() const;

  // Creates a EventData object from a base::Value::Dict, or nullopt on failure.
  static std::optional<EventData> FromValue(const base::Value::Dict& value);

  // Creates a EventData object from a base::Value, or nullopt on failure.
  static std::optional<EventData> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisEventData object.
  base::Value::Dict ToValue() const;

  EventType event_type;

  std::string item_id;

  std::optional<ExtensionInfo> extension_info;

};

struct ErrorFileSource {
  ErrorFileSource();
  ~ErrorFileSource();
  ErrorFileSource(const ErrorFileSource&) = delete;
  ErrorFileSource& operator=(const ErrorFileSource&) = delete;
  ErrorFileSource(ErrorFileSource&& rhs) noexcept;
  ErrorFileSource& operator=(ErrorFileSource&& rhs) noexcept;

  // Populates a ErrorFileSource object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ErrorFileSource& out);

  // Populates a ErrorFileSource object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ErrorFileSource& out);

  // Creates a deep copy of ErrorFileSource.
  ErrorFileSource Clone() const;

  // Creates a ErrorFileSource object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<ErrorFileSource> FromValue(const base::Value::Dict& value);

  // Creates a ErrorFileSource object from a base::Value, or nullopt on failure.
  static std::optional<ErrorFileSource> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisErrorFileSource object.
  base::Value::Dict ToValue() const;

  // The region before the "highlight" portion. If the region which threw the
  // error was not found, the full contents of the file will be in the
  // "beforeHighlight" section.
  std::string before_highlight;

  // The region of the code which threw the error, and should be highlighted.
  std::string highlight;

  // The region after the "highlight" portion.
  std::string after_highlight;

};

struct LoadError {
  LoadError();
  ~LoadError();
  LoadError(const LoadError&) = delete;
  LoadError& operator=(const LoadError&) = delete;
  LoadError(LoadError&& rhs) noexcept;
  LoadError& operator=(LoadError&& rhs) noexcept;

  // Populates a LoadError object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, LoadError& out);

  // Populates a LoadError object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, LoadError& out);

  // Creates a deep copy of LoadError.
  LoadError Clone() const;

  // Creates a LoadError object from a base::Value::Dict, or nullopt on failure.
  static std::optional<LoadError> FromValue(const base::Value::Dict& value);

  // Creates a LoadError object from a base::Value, or nullopt on failure.
  static std::optional<LoadError> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisLoadError object.
  base::Value::Dict ToValue() const;

  // The error that occurred when trying to load the extension.
  std::string error;

  // The path to the extension.
  std::string path;

  // The file source for the error, if it could be retrieved.
  std::optional<ErrorFileSource> source;

  // A unique identifier to pass to developerPrivate.loadUnpacked to retry loading
  // the extension at the same path.
  std::string retry_guid;

};

struct RequestFileSourceProperties {
  RequestFileSourceProperties();
  ~RequestFileSourceProperties();
  RequestFileSourceProperties(const RequestFileSourceProperties&) = delete;
  RequestFileSourceProperties& operator=(const RequestFileSourceProperties&) = delete;
  RequestFileSourceProperties(RequestFileSourceProperties&& rhs) noexcept;
  RequestFileSourceProperties& operator=(RequestFileSourceProperties&& rhs) noexcept;

  // Populates a RequestFileSourceProperties object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestFileSourceProperties& out);

  // Populates a RequestFileSourceProperties object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RequestFileSourceProperties& out);

  // Creates a deep copy of RequestFileSourceProperties.
  RequestFileSourceProperties Clone() const;

  // Creates a RequestFileSourceProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<RequestFileSourceProperties> FromValue(const base::Value::Dict& value);

  // Creates a RequestFileSourceProperties object from a base::Value, or nullopt
  // on failure.
  static std::optional<RequestFileSourceProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRequestFileSourceProperties object.
  base::Value::Dict ToValue() const;

  // The ID of the extension owning the file.
  std::string extension_id;

  // The path of the file, relative to the extension; e.g., manifest.json,
  // script.js, or main.html.
  std::string path_suffix;

  // The error message which was thrown as a result of the error in the file.
  std::string message;

  // The key in the manifest which caused the error (e.g., "permissions").
  // (Required for "manifest.json" files)
  std::optional<std::string> manifest_key;

  // The specific portion of the manifest key which caused the error (e.g., "foo"
  // in the "permissions" key). (Optional for "manifest.json" file).
  std::optional<std::string> manifest_specific;

  // The line number which caused the error (optional for non-manifest files).
  std::optional<int> line_number;

};

struct RequestFileSourceResponse {
  RequestFileSourceResponse();
  ~RequestFileSourceResponse();
  RequestFileSourceResponse(const RequestFileSourceResponse&) = delete;
  RequestFileSourceResponse& operator=(const RequestFileSourceResponse&) = delete;
  RequestFileSourceResponse(RequestFileSourceResponse&& rhs) noexcept;
  RequestFileSourceResponse& operator=(RequestFileSourceResponse&& rhs) noexcept;

  // Populates a RequestFileSourceResponse object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, RequestFileSourceResponse& out);

  // Populates a RequestFileSourceResponse object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, RequestFileSourceResponse& out);

  // Creates a deep copy of RequestFileSourceResponse.
  RequestFileSourceResponse Clone() const;

  // Creates a RequestFileSourceResponse object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<RequestFileSourceResponse> FromValue(const base::Value::Dict& value);

  // Creates a RequestFileSourceResponse object from a base::Value, or nullopt
  // on failure.
  static std::optional<RequestFileSourceResponse> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRequestFileSourceResponse object.
  base::Value::Dict ToValue() const;

  // The region of the code which threw the error, and should be highlighted.
  std::string highlight;

  // The region before the "highlight" portion. If the region which threw the
  // error was not found, the full contents of the file will be in the
  // "beforeHighlight" section.
  std::string before_highlight;

  // The region after the "highlight" portion.
  std::string after_highlight;

  // A title for the file in the form '<extension name>: <file name>'.
  std::string title;

  // The error message.
  std::string message;

};

struct OpenDevToolsProperties {
  OpenDevToolsProperties();
  ~OpenDevToolsProperties();
  OpenDevToolsProperties(const OpenDevToolsProperties&) = delete;
  OpenDevToolsProperties& operator=(const OpenDevToolsProperties&) = delete;
  OpenDevToolsProperties(OpenDevToolsProperties&& rhs) noexcept;
  OpenDevToolsProperties& operator=(OpenDevToolsProperties&& rhs) noexcept;

  // Populates a OpenDevToolsProperties object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, OpenDevToolsProperties& out);

  // Populates a OpenDevToolsProperties object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, OpenDevToolsProperties& out);

  // Creates a deep copy of OpenDevToolsProperties.
  OpenDevToolsProperties Clone() const;

  // Creates a OpenDevToolsProperties object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<OpenDevToolsProperties> FromValue(const base::Value::Dict& value);

  // Creates a OpenDevToolsProperties object from a base::Value, or nullopt on
  // failure.
  static std::optional<OpenDevToolsProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisOpenDevToolsProperties object.
  base::Value::Dict ToValue() const;

  // The ID of the extension. This is only needed if opening its background page
  // or its background service worker (where renderViewId and renderProcessId are
  // -1).
  std::optional<std::string> extension_id;

  // The ID of the render frame in which the error occurred. Despite being called
  // renderViewId, this refers to a render frame.
  int render_view_id;

  // The ID of the process in which the error occurred.
  int render_process_id;

  // Whether or not the background is service worker based.
  std::optional<bool> is_service_worker;

  std::optional<bool> incognito;

  // The URL in which the error occurred.
  std::optional<std::string> url;

  // The line to focus the devtools at.
  std::optional<int> line_number;

  // The column to focus the devtools at.
  std::optional<int> column_number;

};

struct DeleteExtensionErrorsProperties {
  DeleteExtensionErrorsProperties();
  ~DeleteExtensionErrorsProperties();
  DeleteExtensionErrorsProperties(const DeleteExtensionErrorsProperties&) = delete;
  DeleteExtensionErrorsProperties& operator=(const DeleteExtensionErrorsProperties&) = delete;
  DeleteExtensionErrorsProperties(DeleteExtensionErrorsProperties&& rhs) noexcept;
  DeleteExtensionErrorsProperties& operator=(DeleteExtensionErrorsProperties&& rhs) noexcept;

  // Populates a DeleteExtensionErrorsProperties object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, DeleteExtensionErrorsProperties& out);

  // Populates a DeleteExtensionErrorsProperties object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, DeleteExtensionErrorsProperties& out);

  // Creates a deep copy of DeleteExtensionErrorsProperties.
  DeleteExtensionErrorsProperties Clone() const;

  // Creates a DeleteExtensionErrorsProperties object from a base::Value::Dict,
  // or nullopt on failure.
  static std::optional<DeleteExtensionErrorsProperties> FromValue(const base::Value::Dict& value);

  // Creates a DeleteExtensionErrorsProperties object from a base::Value, or
  // nullopt on failure.
  static std::optional<DeleteExtensionErrorsProperties> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisDeleteExtensionErrorsProperties object.
  base::Value::Dict ToValue() const;

  std::string extension_id;

  std::optional<std::vector<int>> error_ids;

  ErrorType type;

};


//
// Functions
//

namespace AutoUpdate {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AutoUpdate

namespace GetExtensionsInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Options to restrict the items returned.
  std::optional<GetExtensionsInfoOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<ExtensionInfo>& result);
}  // namespace Results

}  // namespace GetExtensionsInfo

namespace GetExtensionInfo {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension.
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const ExtensionInfo& result);
}  // namespace Results

}  // namespace GetExtensionInfo

namespace GetExtensionSize {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension.
  std::string id;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& string);
}  // namespace Results

}  // namespace GetExtensionSize

namespace GetProfileConfiguration {

namespace Results {

base::Value::List Create(const ProfileInfo& info);
}  // namespace Results

}  // namespace GetProfileConfiguration

namespace UpdateProfileConfiguration {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The parameters for updating the profile's configuration.  Any     properties
  // omitted from |update| will not be changed.
  ProfileConfigurationUpdate update;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateProfileConfiguration

namespace Reload {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension to reload.
  std::string extension_id;

  // Additional configuration parameters.
  std::optional<ReloadOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const LoadError& error);
}  // namespace Results

}  // namespace Reload

namespace UpdateExtensionConfiguration {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The parameters for updating the extension's configuration.     Any properties
  // omitted from |update| will not be changed.
  ExtensionConfigurationUpdate update;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateExtensionConfiguration

namespace LoadUnpacked {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Additional configuration parameters.
  std::optional<LoadUnpackedOptions> options;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const LoadError& error);
}  // namespace Results

}  // namespace LoadUnpacked

namespace InstallDroppedFile {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace InstallDroppedFile

namespace NotifyDragInstallInProgress {

}  // namespace NotifyDragInstallInProgress

namespace LoadDirectory {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The directory to load the extension from.
  struct Directory {
    Directory();
    ~Directory();
    Directory(const Directory&) = delete;
    Directory& operator=(const Directory&) = delete;
    Directory(Directory&& rhs) noexcept;
    Directory& operator=(Directory&& rhs) noexcept;

    // Populates a Directory object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, Directory& out);

    // Populates a Directory object from a Dict& instance. Returns whether |out|
    // was successfully populated.
    static bool Populate(const base::Value::Dict& value, Directory& out);

    // Creates a deep copy of Directory.
    Directory Clone() const;

    // Creates a Directory object from a base::Value::Dict, or nullopt on failure.
    static std::optional<Directory> FromValue(const base::Value::Dict& value);

    // Creates a Directory object from a base::Value, or nullopt on failure.
    static std::optional<Directory> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  // The directory to load the extension from.
  Directory directory;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& string);
}  // namespace Results

}  // namespace LoadDirectory

namespace ChoosePath {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Select a file or a folder.
  SelectType select_type;

  // Required file type. For example, pem type is for private key and load type is
  // for an unpacked item.
  FileType file_type;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::string& string);
}  // namespace Results

}  // namespace ChoosePath

namespace PackDirectory {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string path;

  // The path of the private key, if one is given.
  std::optional<std::string> private_key_path;

  // Special flags to apply to the loading process, if any.
  std::optional<int> flags;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const PackDirectoryResponse& response);
}  // namespace Results

}  // namespace PackDirectory

namespace IsProfileManaged {

namespace Results {

base::Value::List Create(bool result);
}  // namespace Results

}  // namespace IsProfileManaged

namespace RequestFileSource {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  RequestFileSourceProperties properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const RequestFileSourceResponse& response);
}  // namespace Results

}  // namespace RequestFileSource

namespace OpenDevTools {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  OpenDevToolsProperties properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace OpenDevTools

namespace DeleteExtensionErrors {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The properties specifying the errors to remove.
  DeleteExtensionErrorsProperties properties;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DeleteExtensionErrors

namespace RepairExtension {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension to repair.
  std::string extension_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RepairExtension

namespace ShowOptions {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension to show the options page for.
  std::string extension_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ShowOptions

namespace ShowPath {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension to show the path for.
  std::string extension_id;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace ShowPath

namespace SetShortcutHandlingSuspended {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // Whether or not shortcut handling should be suspended.
  bool is_suspended;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace SetShortcutHandlingSuspended

namespace UpdateExtensionCommand {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The parameters for updating the extension command.
  ExtensionCommandUpdate update;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateExtensionCommand

namespace AddHostPermission {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension to modify.
  std::string extension_id;

  // The host to add.
  std::string host;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AddHostPermission

namespace RemoveHostPermission {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  // The id of the extension to modify.
  std::string extension_id;

  // The host to remove.
  std::string host;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveHostPermission

namespace GetUserSiteSettings {

namespace Results {

base::Value::List Create(const UserSiteSettings& settings);
}  // namespace Results

}  // namespace GetUserSiteSettings

namespace AddUserSpecifiedSites {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UserSiteSettingsOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace AddUserSpecifiedSites

namespace RemoveUserSpecifiedSites {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  UserSiteSettingsOptions options;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveUserSpecifiedSites

namespace GetUserAndExtensionSitesByEtld {

namespace Results {

base::Value::List Create(const std::vector<SiteGroup>& site_groups);
}  // namespace Results

}  // namespace GetUserAndExtensionSitesByEtld

namespace GetMatchingExtensionsForSite {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string site;


 private:
  Params();
};

namespace Results {

base::Value::List Create(const std::vector<MatchingExtensionInfo>& matching_extensions);
}  // namespace Results

}  // namespace GetMatchingExtensionsForSite

namespace UpdateSiteAccess {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string site;

  std::vector<ExtensionSiteAccessUpdate> updates;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace UpdateSiteAccess

namespace RemoveMultipleExtensions {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::vector<std::string> extension_ids;


 private:
  Params();
};

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace RemoveMultipleExtensions

namespace DismissSafetyHubExtensionsMenuNotification {

}  // namespace DismissSafetyHubExtensionsMenuNotification

//
// Events
//

namespace OnItemStateChanged {

extern const char kEventName[];  // "developerPrivate.onItemStateChanged"

base::Value::List Create(const EventData& response);
}  // namespace OnItemStateChanged

namespace OnProfileStateChanged {

extern const char kEventName[];  // "developerPrivate.onProfileStateChanged"

base::Value::List Create(const ProfileInfo& info);
}  // namespace OnProfileStateChanged

namespace OnUserSiteSettingsChanged {

extern const char kEventName[];  // "developerPrivate.onUserSiteSettingsChanged"

base::Value::List Create(const UserSiteSettings& settings);
}  // namespace OnUserSiteSettingsChanged

}  // namespace developer_private
}  // namespace api
}  // namespace extensions

#endif  // CHROME_COMMON_EXTENSIONS_API_DEVELOPER_PRIVATE_H__
