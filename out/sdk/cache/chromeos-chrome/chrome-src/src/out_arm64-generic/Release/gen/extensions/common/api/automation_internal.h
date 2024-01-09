// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/automation_internal.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_AUTOMATION_INTERNAL_H__
#define EXTENSIONS_COMMON_API_AUTOMATION_INTERNAL_H__

#include <stdint.h>

#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

#include "base/values.h"

namespace extensions {
namespace api {
namespace automation_internal {

//
// Types
//

struct AXEventParams {
  AXEventParams();
  ~AXEventParams();
  AXEventParams(const AXEventParams&) = delete;
  AXEventParams& operator=(const AXEventParams&) = delete;
  AXEventParams(AXEventParams&& rhs) noexcept;
  AXEventParams& operator=(AXEventParams&& rhs) noexcept;

  // Populates a AXEventParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AXEventParams& out);

  // Populates a AXEventParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AXEventParams& out);

  // Creates a deep copy of AXEventParams.
  AXEventParams Clone() const;

  // Creates a AXEventParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AXEventParams> FromValue(const base::Value::Dict& value);

  // Creates a AXEventParams object from a base::Value, or nullopt on failure.
  static std::optional<AXEventParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAXEventParams object.
  base::Value::Dict ToValue() const;

};

struct AXTextLocationParams {
  AXTextLocationParams();
  ~AXTextLocationParams();
  AXTextLocationParams(const AXTextLocationParams&) = delete;
  AXTextLocationParams& operator=(const AXTextLocationParams&) = delete;
  AXTextLocationParams(AXTextLocationParams&& rhs) noexcept;
  AXTextLocationParams& operator=(AXTextLocationParams&& rhs) noexcept;

  // Populates a AXTextLocationParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AXTextLocationParams& out);

  // Populates a AXTextLocationParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AXTextLocationParams& out);

  // Creates a deep copy of AXTextLocationParams.
  AXTextLocationParams Clone() const;

  // Creates a AXTextLocationParams object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<AXTextLocationParams> FromValue(const base::Value::Dict& value);

  // Creates a AXTextLocationParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<AXTextLocationParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAXTextLocationParams object.
  base::Value::Dict ToValue() const;

  std::string tree_id;

  int node_id;

  bool result;

  int left;

  int top;

  int width;

  int height;

  int request_id;

};

struct PerformActionRequiredParams {
  PerformActionRequiredParams();
  ~PerformActionRequiredParams();
  PerformActionRequiredParams(const PerformActionRequiredParams&) = delete;
  PerformActionRequiredParams& operator=(const PerformActionRequiredParams&) = delete;
  PerformActionRequiredParams(PerformActionRequiredParams&& rhs) noexcept;
  PerformActionRequiredParams& operator=(PerformActionRequiredParams&& rhs) noexcept;

  // Populates a PerformActionRequiredParams object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PerformActionRequiredParams& out);

  // Populates a PerformActionRequiredParams object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PerformActionRequiredParams& out);

  // Creates a deep copy of PerformActionRequiredParams.
  PerformActionRequiredParams Clone() const;

  // Creates a PerformActionRequiredParams object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<PerformActionRequiredParams> FromValue(const base::Value::Dict& value);

  // Creates a PerformActionRequiredParams object from a base::Value, or nullopt
  // on failure.
  static std::optional<PerformActionRequiredParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPerformActionRequiredParams object.
  base::Value::Dict ToValue() const;

  std::string tree_id;

  int automation_node_id;

  // This can be either automation::ActionType or
  // automation_internal::ActionTypePrivate.
  std::string action_type;

  std::optional<int> request_id;

};

struct PerformCustomActionParams {
  PerformCustomActionParams();
  ~PerformCustomActionParams();
  PerformCustomActionParams(const PerformCustomActionParams&) = delete;
  PerformCustomActionParams& operator=(const PerformCustomActionParams&) = delete;
  PerformCustomActionParams(PerformCustomActionParams&& rhs) noexcept;
  PerformCustomActionParams& operator=(PerformCustomActionParams&& rhs) noexcept;

  // Populates a PerformCustomActionParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, PerformCustomActionParams& out);

  // Populates a PerformCustomActionParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, PerformCustomActionParams& out);

  // Creates a deep copy of PerformCustomActionParams.
  PerformCustomActionParams Clone() const;

  // Creates a PerformCustomActionParams object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<PerformCustomActionParams> FromValue(const base::Value::Dict& value);

  // Creates a PerformCustomActionParams object from a base::Value, or nullopt
  // on failure.
  static std::optional<PerformCustomActionParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisPerformCustomActionParams object.
  base::Value::Dict ToValue() const;

  int custom_action_id;

};

struct SetSelectionParams {
  SetSelectionParams();
  ~SetSelectionParams();
  SetSelectionParams(const SetSelectionParams&) = delete;
  SetSelectionParams& operator=(const SetSelectionParams&) = delete;
  SetSelectionParams(SetSelectionParams&& rhs) noexcept;
  SetSelectionParams& operator=(SetSelectionParams&& rhs) noexcept;

  // Populates a SetSelectionParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetSelectionParams& out);

  // Populates a SetSelectionParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetSelectionParams& out);

  // Creates a deep copy of SetSelectionParams.
  SetSelectionParams Clone() const;

  // Creates a SetSelectionParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SetSelectionParams> FromValue(const base::Value::Dict& value);

  // Creates a SetSelectionParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<SetSelectionParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetSelectionParams object.
  base::Value::Dict ToValue() const;

  // Reuses ActionRequiredParams automationNodeID to mean anchor node id, and
  // treeID to apply to both anchor and focus node ids.
  int focus_node_id;

  int anchor_offset;

  int focus_offset;

};

struct ReplaceSelectedTextParams {
  ReplaceSelectedTextParams();
  ~ReplaceSelectedTextParams();
  ReplaceSelectedTextParams(const ReplaceSelectedTextParams&) = delete;
  ReplaceSelectedTextParams& operator=(const ReplaceSelectedTextParams&) = delete;
  ReplaceSelectedTextParams(ReplaceSelectedTextParams&& rhs) noexcept;
  ReplaceSelectedTextParams& operator=(ReplaceSelectedTextParams&& rhs) noexcept;

  // Populates a ReplaceSelectedTextParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ReplaceSelectedTextParams& out);

  // Populates a ReplaceSelectedTextParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ReplaceSelectedTextParams& out);

  // Creates a deep copy of ReplaceSelectedTextParams.
  ReplaceSelectedTextParams Clone() const;

  // Creates a ReplaceSelectedTextParams object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<ReplaceSelectedTextParams> FromValue(const base::Value::Dict& value);

  // Creates a ReplaceSelectedTextParams object from a base::Value, or nullopt
  // on failure.
  static std::optional<ReplaceSelectedTextParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisReplaceSelectedTextParams object.
  base::Value::Dict ToValue() const;

  std::string value;

};

struct SetValueParams {
  SetValueParams();
  ~SetValueParams();
  SetValueParams(const SetValueParams&) = delete;
  SetValueParams& operator=(const SetValueParams&) = delete;
  SetValueParams(SetValueParams&& rhs) noexcept;
  SetValueParams& operator=(SetValueParams&& rhs) noexcept;

  // Populates a SetValueParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetValueParams& out);

  // Populates a SetValueParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetValueParams& out);

  // Creates a deep copy of SetValueParams.
  SetValueParams Clone() const;

  // Creates a SetValueParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<SetValueParams> FromValue(const base::Value::Dict& value);

  // Creates a SetValueParams object from a base::Value, or nullopt on failure.
  static std::optional<SetValueParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetValueParams object.
  base::Value::Dict ToValue() const;

  std::string value;

};

struct ScrollToPointParams {
  ScrollToPointParams();
  ~ScrollToPointParams();
  ScrollToPointParams(const ScrollToPointParams&) = delete;
  ScrollToPointParams& operator=(const ScrollToPointParams&) = delete;
  ScrollToPointParams(ScrollToPointParams&& rhs) noexcept;
  ScrollToPointParams& operator=(ScrollToPointParams&& rhs) noexcept;

  // Populates a ScrollToPointParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScrollToPointParams& out);

  // Populates a ScrollToPointParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScrollToPointParams& out);

  // Creates a deep copy of ScrollToPointParams.
  ScrollToPointParams Clone() const;

  // Creates a ScrollToPointParams object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<ScrollToPointParams> FromValue(const base::Value::Dict& value);

  // Creates a ScrollToPointParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<ScrollToPointParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScrollToPointParams object.
  base::Value::Dict ToValue() const;

  int x;

  int y;

};

struct ScrollToPositionAtRowColumnParams {
  ScrollToPositionAtRowColumnParams();
  ~ScrollToPositionAtRowColumnParams();
  ScrollToPositionAtRowColumnParams(const ScrollToPositionAtRowColumnParams&) = delete;
  ScrollToPositionAtRowColumnParams& operator=(const ScrollToPositionAtRowColumnParams&) = delete;
  ScrollToPositionAtRowColumnParams(ScrollToPositionAtRowColumnParams&& rhs) noexcept;
  ScrollToPositionAtRowColumnParams& operator=(ScrollToPositionAtRowColumnParams&& rhs) noexcept;

  // Populates a ScrollToPositionAtRowColumnParams object from a base::Value&
  // instance. Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, ScrollToPositionAtRowColumnParams& out);

  // Populates a ScrollToPositionAtRowColumnParams object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, ScrollToPositionAtRowColumnParams& out);

  // Creates a deep copy of ScrollToPositionAtRowColumnParams.
  ScrollToPositionAtRowColumnParams Clone() const;

  // Creates a ScrollToPositionAtRowColumnParams object from a
  // base::Value::Dict, or nullopt on failure.
  static std::optional<ScrollToPositionAtRowColumnParams> FromValue(const base::Value::Dict& value);

  // Creates a ScrollToPositionAtRowColumnParams object from a base::Value, or
  // nullopt on failure.
  static std::optional<ScrollToPositionAtRowColumnParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisScrollToPositionAtRowColumnParams object.
  base::Value::Dict ToValue() const;

  int row;

  int column;

};

struct SetScrollOffsetParams {
  SetScrollOffsetParams();
  ~SetScrollOffsetParams();
  SetScrollOffsetParams(const SetScrollOffsetParams&) = delete;
  SetScrollOffsetParams& operator=(const SetScrollOffsetParams&) = delete;
  SetScrollOffsetParams(SetScrollOffsetParams&& rhs) noexcept;
  SetScrollOffsetParams& operator=(SetScrollOffsetParams&& rhs) noexcept;

  // Populates a SetScrollOffsetParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetScrollOffsetParams& out);

  // Populates a SetScrollOffsetParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetScrollOffsetParams& out);

  // Creates a deep copy of SetScrollOffsetParams.
  SetScrollOffsetParams Clone() const;

  // Creates a SetScrollOffsetParams object from a base::Value::Dict, or nullopt
  // on failure.
  static std::optional<SetScrollOffsetParams> FromValue(const base::Value::Dict& value);

  // Creates a SetScrollOffsetParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<SetScrollOffsetParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetScrollOffsetParams object.
  base::Value::Dict ToValue() const;

  int x;

  int y;

};

struct GetImageDataParams {
  GetImageDataParams();
  ~GetImageDataParams();
  GetImageDataParams(const GetImageDataParams&) = delete;
  GetImageDataParams& operator=(const GetImageDataParams&) = delete;
  GetImageDataParams(GetImageDataParams&& rhs) noexcept;
  GetImageDataParams& operator=(GetImageDataParams&& rhs) noexcept;

  // Populates a GetImageDataParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetImageDataParams& out);

  // Populates a GetImageDataParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetImageDataParams& out);

  // Creates a deep copy of GetImageDataParams.
  GetImageDataParams Clone() const;

  // Creates a GetImageDataParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<GetImageDataParams> FromValue(const base::Value::Dict& value);

  // Creates a GetImageDataParams object from a base::Value, or nullopt on
  // failure.
  static std::optional<GetImageDataParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetImageDataParams object.
  base::Value::Dict ToValue() const;

  int max_width;

  int max_height;

};

struct HitTestParams {
  HitTestParams();
  ~HitTestParams();
  HitTestParams(const HitTestParams&) = delete;
  HitTestParams& operator=(const HitTestParams&) = delete;
  HitTestParams(HitTestParams&& rhs) noexcept;
  HitTestParams& operator=(HitTestParams&& rhs) noexcept;

  // Populates a HitTestParams object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, HitTestParams& out);

  // Populates a HitTestParams object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, HitTestParams& out);

  // Creates a deep copy of HitTestParams.
  HitTestParams Clone() const;

  // Creates a HitTestParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<HitTestParams> FromValue(const base::Value::Dict& value);

  // Creates a HitTestParams object from a base::Value, or nullopt on failure.
  static std::optional<HitTestParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisHitTestParams object.
  base::Value::Dict ToValue() const;

  int x;

  int y;

  std::string event_to_fire;

};

struct GetTextLocationDataParams {
  GetTextLocationDataParams();
  ~GetTextLocationDataParams();
  GetTextLocationDataParams(const GetTextLocationDataParams&) = delete;
  GetTextLocationDataParams& operator=(const GetTextLocationDataParams&) = delete;
  GetTextLocationDataParams(GetTextLocationDataParams&& rhs) noexcept;
  GetTextLocationDataParams& operator=(GetTextLocationDataParams&& rhs) noexcept;

  // Populates a GetTextLocationDataParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, GetTextLocationDataParams& out);

  // Populates a GetTextLocationDataParams object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, GetTextLocationDataParams& out);

  // Creates a deep copy of GetTextLocationDataParams.
  GetTextLocationDataParams Clone() const;

  // Creates a GetTextLocationDataParams object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<GetTextLocationDataParams> FromValue(const base::Value::Dict& value);

  // Creates a GetTextLocationDataParams object from a base::Value, or nullopt
  // on failure.
  static std::optional<GetTextLocationDataParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisGetTextLocationDataParams object.
  base::Value::Dict ToValue() const;

  int start_index;

  int end_index;

};


//
// Functions
//

namespace EnableTree {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  std::string tree_id;


 private:
  Params();
};

}  // namespace EnableTree

namespace EnableDesktop {

namespace Results {

base::Value::List Create(const std::string& tree_id);
}  // namespace Results

}  // namespace EnableDesktop

namespace DisableDesktop {

namespace Results {

base::Value::List Create();
}  // namespace Results

}  // namespace DisableDesktop

namespace PerformAction {

struct Params {
  static std::optional<Params> Create(const base::Value::List& args);
  Params(const Params&) = delete;
  Params& operator=(const Params&) = delete;
  Params(Params&& rhs) noexcept;
  Params& operator=(Params&& rhs) noexcept;
  ~Params();

  struct OptArgs {
    OptArgs();
    ~OptArgs();
    OptArgs(const OptArgs&) = delete;
    OptArgs& operator=(const OptArgs&) = delete;
    OptArgs(OptArgs&& rhs) noexcept;
    OptArgs& operator=(OptArgs&& rhs) noexcept;

    // Populates a OptArgs object from a base::Value& instance. Returns whether
    // |out| was successfully populated.
    static bool Populate(const base::Value& value, OptArgs& out);

    // Populates a OptArgs object from a Dict& instance. Returns whether |out| was
    // successfully populated.
    static bool Populate(const base::Value::Dict& value, OptArgs& out);

    // Creates a deep copy of OptArgs.
    OptArgs Clone() const;

    // Creates a OptArgs object from a base::Value::Dict, or nullopt on failure.
    static std::optional<OptArgs> FromValue(const base::Value::Dict& value);

    // Creates a OptArgs object from a base::Value, or nullopt on failure.
    static std::optional<OptArgs> FromValue(const base::Value& value);

    base::Value::Dict additional_properties;
  };


  PerformActionRequiredParams args;

  OptArgs opt_args;


 private:
  Params();
};

}  // namespace PerformAction

//
// Events
//

namespace OnAccessibilityEvent {

extern const char kEventName[];  // "automationInternal.onAccessibilityEvent"

base::Value::List Create(const AXEventParams& update);
}  // namespace OnAccessibilityEvent

namespace OnAccessibilityTreeDestroyed {

extern const char kEventName[];  // "automationInternal.onAccessibilityTreeDestroyed"

base::Value::List Create(const std::string& tree_id);
}  // namespace OnAccessibilityTreeDestroyed

namespace OnGetTextLocationResult {

extern const char kEventName[];  // "automationInternal.onGetTextLocationResult"

base::Value::List Create(const AXTextLocationParams& params);
}  // namespace OnGetTextLocationResult

namespace OnTreeChange {

extern const char kEventName[];  // "automationInternal.onTreeChange"

base::Value::List Create(int observer_id, const std::string& tree_id, int node_id, const std::string& change_type);
}  // namespace OnTreeChange

namespace OnChildTreeID {

extern const char kEventName[];  // "automationInternal.onChildTreeID"

base::Value::List Create(const std::string& tree_id);
}  // namespace OnChildTreeID

namespace OnNodesRemoved {

extern const char kEventName[];  // "automationInternal.onNodesRemoved"

base::Value::List Create(const std::string& tree_id, const std::vector<int>& node_i_ds);
}  // namespace OnNodesRemoved

namespace OnAccessibilityTreeSerializationError {

extern const char kEventName[];  // "automationInternal.onAccessibilityTreeSerializationError"

base::Value::List Create(const std::string& tree_id);
}  // namespace OnAccessibilityTreeSerializationError

namespace OnActionResult {

extern const char kEventName[];  // "automationInternal.onActionResult"

base::Value::List Create(const std::string& tree_id, int request_id, bool result);
}  // namespace OnActionResult

namespace OnAllAutomationEventListenersRemoved {

extern const char kEventName[];  // "automationInternal.onAllAutomationEventListenersRemoved"

base::Value::List Create();
}  // namespace OnAllAutomationEventListenersRemoved

}  // namespace automation_internal
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_AUTOMATION_INTERNAL_H__
