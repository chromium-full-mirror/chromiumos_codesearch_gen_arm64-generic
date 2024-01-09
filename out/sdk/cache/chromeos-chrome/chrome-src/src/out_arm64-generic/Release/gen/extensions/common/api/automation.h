// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/automation.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#ifndef EXTENSIONS_COMMON_API_AUTOMATION_H__
#define EXTENSIONS_COMMON_API_AUTOMATION_H__

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
namespace automation {

//
// Types
//

// Possible events fired on an $(ref:automation.AutomationNode).
enum class EventType {
  kNone = 0,
  kAccessKeyChanged,
  kActiveDescendantChanged,
  kAlert,
  kAriaAttributeChangedDeprecated,
  kAriaCurrentChanged,
  kAtomicChanged,
  kAutoCompleteChanged,
  kAutocorrectionOccured,
  kAutofillAvailabilityChanged,
  kBlur,
  kBusyChanged,
  kCaretBoundsChanged,
  kCheckedStateChanged,
  kCheckedStateDescriptionChanged,
  kChildrenChanged,
  kClassNameChanged,
  kClicked,
  kCollapsed,
  kControlsChanged,
  kDetailsChanged,
  kDescribedByChanged,
  kDescriptionChanged,
  kDocumentSelectionChanged,
  kDocumentTitleChanged,
  kDropeffectChanged,
  kEditableTextChanged,
  kEnabledChanged,
  kEndOfTest,
  kExpanded,
  kExpandedChanged,
  kFlowFromChanged,
  kFlowToChanged,
  kFocus,
  kFocusAfterMenuClose,
  kFocusChanged,
  kFocusContext,
  kGrabbedChanged,
  kHaspopupChanged,
  kHide,
  kHierarchicalLevelChanged,
  kHitTestResult,
  kHover,
  kIgnoredChanged,
  kImageAnnotationChanged,
  kImageFrameUpdated,
  kInvalidStatusChanged,
  kKeyShortcutsChanged,
  kLabeledByChanged,
  kLanguageChanged,
  kLayoutComplete,
  kLayoutInvalidated,
  kLiveRegionChanged,
  kLiveRegionCreated,
  kLiveRegionNodeChanged,
  kLiveRelevantChanged,
  kLiveStatusChanged,
  kLoadComplete,
  kLoadStart,
  kLocationChanged,
  kMediaStartedPlaying,
  kMediaStoppedPlaying,
  kMenuEnd,
  kMenuItemSelected,
  kMenuListValueChanged,
  kMenuPopupEnd,
  kMenuPopupStart,
  kMenuStart,
  kMouseCanceled,
  kMouseDragged,
  kMouseMoved,
  kMousePressed,
  kMouseReleased,
  kMultilineStateChanged,
  kMultiselectableStateChanged,
  kNameChanged,
  kObjectAttributeChanged,
  kOrientationChanged,
  kOtherAttributeChanged,
  kParentChanged,
  kPlaceholderChanged,
  kPortalActivated,
  kPositionInSetChanged,
  kRangeValueChanged,
  kRangeValueMaxChanged,
  kRangeValueMinChanged,
  kRangeValueStepChanged,
  kReadonlyChanged,
  kRelatedNodeChanged,
  kRequiredStateChanged,
  kRoleChanged,
  kRowCollapsed,
  kRowCountChanged,
  kRowExpanded,
  kScrollHorizontalPositionChanged,
  kScrollPositionChanged,
  kScrollVerticalPositionChanged,
  kScrolledToAnchor,
  kSelectedChanged,
  kSelectedChildrenChanged,
  kSelectedValueChanged,
  kSelection,
  kSelectionAdd,
  kSelectionRemove,
  kSetSizeChanged,
  kShow,
  kSortChanged,
  kStateChanged,
  kSubtreeCreated,
  kTextAttributeChanged,
  kTextSelectionChanged,
  kTextChanged,
  kTooltipClosed,
  kTooltipOpened,
  kTreeChanged,
  kValueInTextFieldChanged,
  kValueChanged,
  kWindowActivated,
  kWindowDeactivated,
  kWindowVisibilityChanged,
  kMaxValue = kWindowVisibilityChanged,
};


const char* ToString(EventType as_enum);
EventType ParseEventType(base::StringPiece as_string);
std::u16string GetEventTypeParseError(base::StringPiece as_string);

// Describes the purpose of an $(ref:automation.AutomationNode).
enum class RoleType {
  kNone = 0,
  kAbbr,
  kAlert,
  kAlertDialog,
  kApplication,
  kArticle,
  kAudio,
  kBanner,
  kBlockquote,
  kButton,
  kCanvas,
  kCaption,
  kCaret,
  kCell,
  kCheckBox,
  kClient,
  kCode,
  kColorWell,
  kColumn,
  kColumnHeader,
  kComboBoxGrouping,
  kComboBoxMenuButton,
  kComboBoxSelect,
  kComment,
  kComplementary,
  kContentDeletion,
  kContentInsertion,
  kContentInfo,
  kDate,
  kDateTime,
  kDefinition,
  kDescriptionList,
  kDescriptionListDetail,
  kDescriptionListTerm,
  kDesktop,
  kDetails,
  kDialog,
  kDirectory,
  kDisclosureTriangle,
  kDisclosureTriangleGrouped,
  kDocAbstract,
  kDocAcknowledgments,
  kDocAfterword,
  kDocAppendix,
  kDocBackLink,
  kDocBiblioEntry,
  kDocBibliography,
  kDocBiblioRef,
  kDocChapter,
  kDocColophon,
  kDocConclusion,
  kDocCover,
  kDocCredit,
  kDocCredits,
  kDocDedication,
  kDocEndnote,
  kDocEndnotes,
  kDocEpigraph,
  kDocEpilogue,
  kDocErrata,
  kDocExample,
  kDocFootnote,
  kDocForeword,
  kDocGlossary,
  kDocGlossRef,
  kDocIndex,
  kDocIntroduction,
  kDocNoteRef,
  kDocNotice,
  kDocPageBreak,
  kDocPageFooter,
  kDocPageHeader,
  kDocPageList,
  kDocPart,
  kDocPreface,
  kDocPrologue,
  kDocPullquote,
  kDocQna,
  kDocSubtitle,
  kDocTip,
  kDocToc,
  kDocument,
  kEmbeddedObject,
  kEmphasis,
  kFeed,
  kFigcaption,
  kFigure,
  kFooter,
  kFooterAsNonLandmark,
  kForm,
  kGenericContainer,
  kGraphicsDocument,
  kGraphicsObject,
  kGraphicsSymbol,
  kGrid,
  kGroup,
  kHeader,
  kHeaderAsNonLandmark,
  kHeading,
  kIframe,
  kIframePresentational,
  kImage,
  kImeCandidate,
  kInlineTextBox,
  kInputTime,
  kKeyboard,
  kLabelText,
  kLayoutTable,
  kLayoutTableCell,
  kLayoutTableRow,
  kLegend,
  kLineBreak,
  kLink,
  kList,
  kListBox,
  kListBoxOption,
  kListGrid,
  kListItem,
  kListMarker,
  kLog,
  kMain,
  kMark,
  kMarquee,
  kMath,
  kMathMlfraction,
  kMathMlidentifier,
  kMathMlmath,
  kMathMlmultiscripts,
  kMathMlnoneScript,
  kMathMlnumber,
  kMathMloperator,
  kMathMlover,
  kMathMlprescriptDelimiter,
  kMathMlroot,
  kMathMlrow,
  kMathMlsquareRoot,
  kMathMlstringLiteral,
  kMathMlsub,
  kMathMlsubSup,
  kMathMlsup,
  kMathMltable,
  kMathMltableCell,
  kMathMltableRow,
  kMathMltext,
  kMathMlunder,
  kMathMlunderOver,
  kMenu,
  kMenuBar,
  kMenuItem,
  kMenuItemCheckBox,
  kMenuItemRadio,
  kMenuListOption,
  kMenuListPopup,
  kMeter,
  kNavigation,
  kNote,
  kPane,
  kParagraph,
  kPdfActionableHighlight,
  kPdfRoot,
  kPluginObject,
  kPopUpButton,
  kPortal,
  kPreDeprecated,
  kProgressIndicator,
  kRadioButton,
  kRadioGroup,
  kRegion,
  kRootWebArea,
  kRow,
  kRowGroup,
  kRowHeader,
  kRuby,
  kRubyAnnotation,
  kScrollBar,
  kScrollView,
  kSearch,
  kSearchBox,
  kSection,
  kSlider,
  kSpinButton,
  kSplitter,
  kStaticText,
  kStatus,
  kStrong,
  kSubscript,
  kSuggestion,
  kSuperscript,
  kSvgRoot,
  kSwitch,
  kTab,
  kTabList,
  kTabPanel,
  kTable,
  kTableHeaderContainer,
  kTerm,
  kTextField,
  kTextFieldWithComboBox,
  kTime,
  kTimer,
  kTitleBar,
  kToggleButton,
  kToolbar,
  kTooltip,
  kTree,
  kTreeGrid,
  kTreeItem,
  kUnknown,
  kVideo,
  kWebView,
  kWindow,
  kMaxValue = kWindow,
};


const char* ToString(RoleType as_enum);
RoleType ParseRoleType(base::StringPiece as_string);
std::u16string GetRoleTypeParseError(base::StringPiece as_string);

// Describes characteristics of an $(ref:automation.AutomationNode).
enum class StateType {
  kNone = 0,
  kAutofillAvailable,
  kCollapsed,
  kDefault,
  kEditable,
  kExpanded,
  kFocusable,
  kFocused,
  kHorizontal,
  kHovered,
  kIgnored,
  kInvisible,
  kLinked,
  kMultiline,
  kMultiselectable,
  kOffscreen,
  kProtected,
  kRequired,
  kRichlyEditable,
  kVertical,
  kVisited,
  kMaxValue = kVisited,
};


const char* ToString(StateType as_enum);
StateType ParseStateType(base::StringPiece as_string);
std::u16string GetStateTypeParseError(base::StringPiece as_string);

// All possible actions that can be performed on automation nodes.
enum class ActionType {
  kNone = 0,
  kAnnotatePageImages,
  kBlur,
  kClearAccessibilityFocus,
  kCollapse,
  kCustomAction,
  kDecrement,
  kDoDefault,
  kExpand,
  kFocus,
  kGetImageData,
  kGetTextLocation,
  kHideTooltip,
  kHitTest,
  kIncrement,
  kInternalInvalidateTree,
  kLoadInlineTextBoxes,
  kLongClick,
  kReplaceSelectedText,
  kResumeMedia,
  kScrollBackward,
  kScrollDown,
  kScrollForward,
  kScrollLeft,
  kScrollRight,
  kScrollUp,
  kScrollToMakeVisible,
  kScrollToPoint,
  kScrollToPositionAtRowColumn,
  kSetAccessibilityFocus,
  kSetScrollOffset,
  kSetSelection,
  kSetSequentialFocusNavigationStartingPoint,
  kSetValue,
  kShowContextMenu,
  kSignalEndOfTest,
  kShowTooltip,
  kStitchChildTree,
  kStartDuckingMedia,
  kStopDuckingMedia,
  kSuspendMedia,
  kMaxValue = kSuspendMedia,
};


const char* ToString(ActionType as_enum);
ActionType ParseActionType(base::StringPiece as_string);
std::u16string GetActionTypeParseError(base::StringPiece as_string);

// <p>Possible changes to the automation tree. For any given atomic change to
// the tree, each node that's added, removed, or changed, will appear in exactly
// one TreeChange, with one of these types.</p><p>nodeCreated means that this
// node was added to the tree and its parent is new as well, so it's just one
// node in a new subtree that was added.</p>
enum class TreeChangeType {
  kNone = 0,
  kNodeCreated,
  kSubtreeCreated,
  kNodeChanged,
  kTextChanged,
  kNodeRemoved,
  kSubtreeUpdateEnd,
  kMaxValue = kSubtreeUpdateEnd,
};


const char* ToString(TreeChangeType as_enum);
TreeChangeType ParseTreeChangeType(base::StringPiece as_string);
std::u16string GetTreeChangeTypeParseError(base::StringPiece as_string);

// Where the node's name is from.
enum class NameFromType {
  kNone = 0,
  kAttribute,
  kAttributeExplicitlyEmpty,
  kCaption,
  kContents,
  kPlaceholder,
  kPopoverAttribute,
  kRelatedElement,
  kTitle,
  kValue,
  kMaxValue = kValue,
};


const char* ToString(NameFromType as_enum);
NameFromType ParseNameFromType(base::StringPiece as_string);
std::u16string GetNameFromTypeParseError(base::StringPiece as_string);

enum class DescriptionFromType {
  kNone = 0,
  kAriaDescription,
  kAttributeExplicitlyEmpty,
  kButtonLabel,
  kPopoverAttribute,
  kRelatedElement,
  kRubyAnnotation,
  kSummary,
  kSvgDescElement,
  kTableCaption,
  kTitle,
  kMaxValue = kTitle,
};


const char* ToString(DescriptionFromType as_enum);
DescriptionFromType ParseDescriptionFromType(base::StringPiece as_string);
std::u16string GetDescriptionFromTypeParseError(base::StringPiece as_string);

// The input restriction for a object -- even non-controls can be disabled.
enum class Restriction {
  kNone = 0,
  kDisabled,
  kReadOnly,
  kMaxValue = kReadOnly,
};


const char* ToString(Restriction as_enum);
Restriction ParseRestriction(base::StringPiece as_string);
std::u16string GetRestrictionParseError(base::StringPiece as_string);

// Availability and types for an interactive popup element.
enum class HasPopup {
  kNone = 0,
  kFalse,
  kTrue,
  kMenu,
  kListbox,
  kTree,
  kGrid,
  kDialog,
  kMaxValue = kDialog,
};


const char* ToString(HasPopup as_enum);
HasPopup ParseHasPopup(base::StringPiece as_string);
std::u16string GetHasPopupParseError(base::StringPiece as_string);

// Indicates the ARIA-current state.
enum class AriaCurrentState {
  kNone = 0,
  kFalse,
  kTrue,
  kPage,
  kStep,
  kLocation,
  kDate,
  kTime,
  kMaxValue = kTime,
};


const char* ToString(AriaCurrentState as_enum);
AriaCurrentState ParseAriaCurrentState(base::StringPiece as_string);
std::u16string GetAriaCurrentStateParseError(base::StringPiece as_string);

// Lists the values that `invalidState` can take on.
enum class InvalidState {
  kNone = 0,
  kFalse,
  kTrue,
  kMaxValue = kTrue,
};


const char* ToString(InvalidState as_enum);
InvalidState ParseInvalidState(base::StringPiece as_string);
std::u16string GetInvalidStateParseError(base::StringPiece as_string);

// Describes possible actions when performing a do default action.
enum class DefaultActionVerb {
  kNone = 0,
  kActivate,
  kCheck,
  kClick,
  kClickAncestor,
  kJump,
  kOpen,
  kPress,
  kSelect,
  kUncheck,
  kMaxValue = kUncheck,
};


const char* ToString(DefaultActionVerb as_enum);
DefaultActionVerb ParseDefaultActionVerb(base::StringPiece as_string);
std::u16string GetDefaultActionVerbParseError(base::StringPiece as_string);

// Types of markers on text. See <code>AutomationNode.markerTypes</code>.
enum class MarkerType {
  kNone = 0,
  kSpelling,
  kGrammar,
  kTextMatch,
  kActiveSuggestion,
  kSuggestion,
  kHighlight,
  kMaxValue = kHighlight,
};


const char* ToString(MarkerType as_enum);
MarkerType ParseMarkerType(base::StringPiece as_string);
std::u16string GetMarkerTypeParseError(base::StringPiece as_string);

// A command associated with an $(ref:automation.AutomationIntent).
enum class IntentCommandType {
  kNone = 0,
  kClearSelection,
  kDelete,
  kDictate,
  kExtendSelection,
  kFormat,
  kHistory,
  kInsert,
  kMarker,
  kMoveSelection,
  kSetSelection,
  kMaxValue = kSetSelection,
};


const char* ToString(IntentCommandType as_enum);
IntentCommandType ParseIntentCommandType(base::StringPiece as_string);
std::u16string GetIntentCommandTypeParseError(base::StringPiece as_string);

// The type of an input event associated with an
// $(ref:automation.AutomationIntent). It describes an edit command, e.g.
// IntentCommandType.insert, in more detail.
enum class IntentInputEventType {
  kNone = 0,
  kInsertText,
  kInsertLineBreak,
  kInsertParagraph,
  kInsertOrderedList,
  kInsertUnorderedList,
  kInsertHorizontalRule,
  kInsertFromPaste,
  kInsertFromDrop,
  kInsertFromYank,
  kInsertTranspose,
  kInsertReplacementText,
  kInsertCompositionText,
  kDeleteWordBackward,
  kDeleteWordForward,
  kDeleteSoftLineBackward,
  kDeleteSoftLineForward,
  kDeleteHardLineBackward,
  kDeleteHardLineForward,
  kDeleteContentBackward,
  kDeleteContentForward,
  kDeleteByCut,
  kDeleteByDrag,
  kHistoryUndo,
  kHistoryRedo,
  kFormatBold,
  kFormatItalic,
  kFormatUnderline,
  kFormatStrikeThrough,
  kFormatSuperscript,
  kFormatSubscript,
  kFormatJustifyCenter,
  kFormatJustifyFull,
  kFormatJustifyRight,
  kFormatJustifyLeft,
  kFormatIndent,
  kFormatOutdent,
  kFormatRemove,
  kFormatSetBlockTextDirection,
  kMaxValue = kFormatSetBlockTextDirection,
};


const char* ToString(IntentInputEventType as_enum);
IntentInputEventType ParseIntentInputEventType(base::StringPiece as_string);
std::u16string GetIntentInputEventTypeParseError(base::StringPiece as_string);

// A text boundary associated with an $(ref:automation.AutomationIntent).
enum class IntentTextBoundaryType {
  kNone = 0,
  kCharacter,
  kFormatEnd,
  kFormatStart,
  kFormatStartOrEnd,
  kLineEnd,
  kLineStart,
  kLineStartOrEnd,
  kObject,
  kPageEnd,
  kPageStart,
  kPageStartOrEnd,
  kParagraphEnd,
  kParagraphStart,
  kParagraphStartSkippingEmptyParagraphs,
  kParagraphStartOrEnd,
  kSentenceEnd,
  kSentenceStart,
  kSentenceStartOrEnd,
  kWebPage,
  kWordEnd,
  kWordStart,
  kWordStartOrEnd,
  kMaxValue = kWordStartOrEnd,
};


const char* ToString(IntentTextBoundaryType as_enum);
IntentTextBoundaryType ParseIntentTextBoundaryType(base::StringPiece as_string);
std::u16string GetIntentTextBoundaryTypeParseError(base::StringPiece as_string);

// A move direction associated with an $(ref:automation.AutomationIntent).
enum class IntentMoveDirectionType {
  kNone = 0,
  kBackward,
  kForward,
  kMaxValue = kForward,
};


const char* ToString(IntentMoveDirectionType as_enum);
IntentMoveDirectionType ParseIntentMoveDirectionType(base::StringPiece as_string);
std::u16string GetIntentMoveDirectionTypeParseError(base::StringPiece as_string);

// A sort applied to a table row or column header.
enum class SortDirectionType {
  kNone = 0,
  kUnsorted,
  kAscending,
  kDescending,
  kOther,
  kMaxValue = kOther,
};


const char* ToString(SortDirectionType as_enum);
SortDirectionType ParseSortDirectionType(base::StringPiece as_string);
std::u16string GetSortDirectionTypeParseError(base::StringPiece as_string);

// A type of AutomationPosition.
enum class PositionType {
  kNone = 0,
  kNull,
  kText,
  kTree,
  kMaxValue = kTree,
};


const char* ToString(PositionType as_enum);
PositionType ParsePositionType(base::StringPiece as_string);
std::u16string GetPositionTypeParseError(base::StringPiece as_string);

struct Rect {
  Rect();
  ~Rect();
  Rect(const Rect&) = delete;
  Rect& operator=(const Rect&) = delete;
  Rect(Rect&& rhs) noexcept;
  Rect& operator=(Rect&& rhs) noexcept;

  // Populates a Rect object from a base::Value& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value& value, Rect& out);

  // Populates a Rect object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Rect& out);

  // Creates a deep copy of Rect.
  Rect Clone() const;

  // Creates a Rect object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Rect> FromValue(const base::Value::Dict& value);

  // Creates a Rect object from a base::Value, or nullopt on failure.
  static std::optional<Rect> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisRect object.
  base::Value::Dict ToValue() const;

  int left;

  int top;

  int width;

  int height;

};

struct FindParams {
  FindParams();
  ~FindParams();
  FindParams(const FindParams&) = delete;
  FindParams& operator=(const FindParams&) = delete;
  FindParams(FindParams&& rhs) noexcept;
  FindParams& operator=(FindParams&& rhs) noexcept;

  // Populates a FindParams object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, FindParams& out);

  // Populates a FindParams object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, FindParams& out);

  // Creates a deep copy of FindParams.
  FindParams Clone() const;

  // Creates a FindParams object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<FindParams> FromValue(const base::Value::Dict& value);

  // Creates a FindParams object from a base::Value, or nullopt on failure.
  static std::optional<FindParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisFindParams object.
  base::Value::Dict ToValue() const;

};

struct SetDocumentSelectionParams {
  SetDocumentSelectionParams();
  ~SetDocumentSelectionParams();
  SetDocumentSelectionParams(const SetDocumentSelectionParams&) = delete;
  SetDocumentSelectionParams& operator=(const SetDocumentSelectionParams&) = delete;
  SetDocumentSelectionParams(SetDocumentSelectionParams&& rhs) noexcept;
  SetDocumentSelectionParams& operator=(SetDocumentSelectionParams&& rhs) noexcept;

  // Populates a SetDocumentSelectionParams object from a base::Value& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value& value, SetDocumentSelectionParams& out);

  // Populates a SetDocumentSelectionParams object from a Dict& instance.
  // Returns whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, SetDocumentSelectionParams& out);

  // Creates a deep copy of SetDocumentSelectionParams.
  SetDocumentSelectionParams Clone() const;

  // Creates a SetDocumentSelectionParams object from a base::Value::Dict, or
  // nullopt on failure.
  static std::optional<SetDocumentSelectionParams> FromValue(const base::Value::Dict& value);

  // Creates a SetDocumentSelectionParams object from a base::Value, or nullopt
  // on failure.
  static std::optional<SetDocumentSelectionParams> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisSetDocumentSelectionParams object.
  base::Value::Dict ToValue() const;

};

struct AutomationIntent {
  AutomationIntent();
  ~AutomationIntent();
  AutomationIntent(const AutomationIntent&) = delete;
  AutomationIntent& operator=(const AutomationIntent&) = delete;
  AutomationIntent(AutomationIntent&& rhs) noexcept;
  AutomationIntent& operator=(AutomationIntent&& rhs) noexcept;

  // Populates a AutomationIntent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AutomationIntent& out);

  // Populates a AutomationIntent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AutomationIntent& out);

  // Creates a deep copy of AutomationIntent.
  AutomationIntent Clone() const;

  // Creates a AutomationIntent object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AutomationIntent> FromValue(const base::Value::Dict& value);

  // Creates a AutomationIntent object from a base::Value, or nullopt on
  // failure.
  static std::optional<AutomationIntent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAutomationIntent object.
  base::Value::Dict ToValue() const;

};

struct AutomationEvent {
  AutomationEvent();
  ~AutomationEvent();
  AutomationEvent(const AutomationEvent&) = delete;
  AutomationEvent& operator=(const AutomationEvent&) = delete;
  AutomationEvent(AutomationEvent&& rhs) noexcept;
  AutomationEvent& operator=(AutomationEvent&& rhs) noexcept;

  // Populates a AutomationEvent object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AutomationEvent& out);

  // Populates a AutomationEvent object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AutomationEvent& out);

  // Creates a deep copy of AutomationEvent.
  AutomationEvent Clone() const;

  // Creates a AutomationEvent object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AutomationEvent> FromValue(const base::Value::Dict& value);

  // Creates a AutomationEvent object from a base::Value, or nullopt on failure.
  static std::optional<AutomationEvent> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAutomationEvent object.
  base::Value::Dict ToValue() const;

};

struct TreeChange {
  TreeChange();
  ~TreeChange();
  TreeChange(const TreeChange&) = delete;
  TreeChange& operator=(const TreeChange&) = delete;
  TreeChange(TreeChange&& rhs) noexcept;
  TreeChange& operator=(TreeChange&& rhs) noexcept;

  // Populates a TreeChange object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, TreeChange& out);

  // Populates a TreeChange object from a Dict& instance. Returns whether |out|
  // was successfully populated.
  static bool Populate(const base::Value::Dict& value, TreeChange& out);

  // Creates a deep copy of TreeChange.
  TreeChange Clone() const;

  // Creates a TreeChange object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<TreeChange> FromValue(const base::Value::Dict& value);

  // Creates a TreeChange object from a base::Value, or nullopt on failure.
  static std::optional<TreeChange> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisTreeChange object.
  base::Value::Dict ToValue() const;

};

// Possible tree changes to listen to using addTreeChangeObserver. Note that
// listening to all tree changes can be expensive.
enum class TreeChangeObserverFilter {
  kNone = 0,
  kNoTreeChanges,
  kLiveRegionTreeChanges,
  kTextMarkerChanges,
  kAllTreeChanges,
  kMaxValue = kAllTreeChanges,
};


const char* ToString(TreeChangeObserverFilter as_enum);
TreeChangeObserverFilter ParseTreeChangeObserverFilter(base::StringPiece as_string);
std::u16string GetTreeChangeObserverFilterParseError(base::StringPiece as_string);

struct CustomAction {
  CustomAction();
  ~CustomAction();
  CustomAction(const CustomAction&) = delete;
  CustomAction& operator=(const CustomAction&) = delete;
  CustomAction(CustomAction&& rhs) noexcept;
  CustomAction& operator=(CustomAction&& rhs) noexcept;

  // Populates a CustomAction object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, CustomAction& out);

  // Populates a CustomAction object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, CustomAction& out);

  // Creates a deep copy of CustomAction.
  CustomAction Clone() const;

  // Creates a CustomAction object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<CustomAction> FromValue(const base::Value::Dict& value);

  // Creates a CustomAction object from a base::Value, or nullopt on failure.
  static std::optional<CustomAction> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisCustomAction object.
  base::Value::Dict ToValue() const;

};

struct Marker {
  Marker();
  ~Marker();
  Marker(const Marker&) = delete;
  Marker& operator=(const Marker&) = delete;
  Marker(Marker&& rhs) noexcept;
  Marker& operator=(Marker&& rhs) noexcept;

  // Populates a Marker object from a base::Value& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value& value, Marker& out);

  // Populates a Marker object from a Dict& instance. Returns whether |out| was
  // successfully populated.
  static bool Populate(const base::Value::Dict& value, Marker& out);

  // Creates a deep copy of Marker.
  Marker Clone() const;

  // Creates a Marker object from a base::Value::Dict, or nullopt on failure.
  static std::optional<Marker> FromValue(const base::Value::Dict& value);

  // Creates a Marker object from a base::Value, or nullopt on failure.
  static std::optional<Marker> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisMarker object.
  base::Value::Dict ToValue() const;

};

struct AutomationPosition {
  AutomationPosition();
  ~AutomationPosition();
  AutomationPosition(const AutomationPosition&) = delete;
  AutomationPosition& operator=(const AutomationPosition&) = delete;
  AutomationPosition(AutomationPosition&& rhs) noexcept;
  AutomationPosition& operator=(AutomationPosition&& rhs) noexcept;

  // Populates a AutomationPosition object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AutomationPosition& out);

  // Populates a AutomationPosition object from a Dict& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AutomationPosition& out);

  // Creates a deep copy of AutomationPosition.
  AutomationPosition Clone() const;

  // Creates a AutomationPosition object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AutomationPosition> FromValue(const base::Value::Dict& value);

  // Creates a AutomationPosition object from a base::Value, or nullopt on
  // failure.
  static std::optional<AutomationPosition> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAutomationPosition object.
  base::Value::Dict ToValue() const;

};

struct AutomationNode {
  AutomationNode();
  ~AutomationNode();
  AutomationNode(const AutomationNode&) = delete;
  AutomationNode& operator=(const AutomationNode&) = delete;
  AutomationNode(AutomationNode&& rhs) noexcept;
  AutomationNode& operator=(AutomationNode&& rhs) noexcept;

  // Populates a AutomationNode object from a base::Value& instance. Returns
  // whether |out| was successfully populated.
  static bool Populate(const base::Value& value, AutomationNode& out);

  // Populates a AutomationNode object from a Dict& instance. Returns whether
  // |out| was successfully populated.
  static bool Populate(const base::Value::Dict& value, AutomationNode& out);

  // Creates a deep copy of AutomationNode.
  AutomationNode Clone() const;

  // Creates a AutomationNode object from a base::Value::Dict, or nullopt on
  // failure.
  static std::optional<AutomationNode> FromValue(const base::Value::Dict& value);

  // Creates a AutomationNode object from a base::Value, or nullopt on failure.
  static std::optional<AutomationNode> FromValue(const base::Value& value);

  // Returns a new base::Value::Dict representing the serialized form of
  // thisAutomationNode object.
  base::Value::Dict ToValue() const;

};


}  // namespace automation
}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_COMMON_API_AUTOMATION_H__
