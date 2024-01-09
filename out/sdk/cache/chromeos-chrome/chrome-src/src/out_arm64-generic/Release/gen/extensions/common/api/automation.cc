// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// GENERATED FROM THE API DEFINITION IN
//   extensions/common/api/automation.idl
// by tools/json_schema_compiler.
// DO NOT EDIT.

#include "extensions/common/api/automation.h"

#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <utility>
#include <vector>

#include "base/check.h"
#include "base/check_op.h"
#include "base/notreached.h"
#include "base/strings/string_number_conversions.h"
#include "base/strings/utf_string_conversions.h"
#include "base/values.h"
#include "tools/json_schema_compiler/util.h"
#include "base/strings/string_piece.h"


using base::UTF8ToUTF16;

namespace extensions {
namespace api {
namespace automation {
//
// Types
//

const char* ToString(EventType enum_param) {
  switch (enum_param) {
    case EventType::kAccessKeyChanged:
      return "accessKeyChanged";
    case EventType::kActiveDescendantChanged:
      return "activeDescendantChanged";
    case EventType::kAlert:
      return "alert";
    case EventType::kAriaAttributeChangedDeprecated:
      return "ariaAttributeChangedDeprecated";
    case EventType::kAriaCurrentChanged:
      return "ariaCurrentChanged";
    case EventType::kAtomicChanged:
      return "atomicChanged";
    case EventType::kAutoCompleteChanged:
      return "autoCompleteChanged";
    case EventType::kAutocorrectionOccured:
      return "autocorrectionOccured";
    case EventType::kAutofillAvailabilityChanged:
      return "autofillAvailabilityChanged";
    case EventType::kBlur:
      return "blur";
    case EventType::kBusyChanged:
      return "busyChanged";
    case EventType::kCaretBoundsChanged:
      return "caretBoundsChanged";
    case EventType::kCheckedStateChanged:
      return "checkedStateChanged";
    case EventType::kCheckedStateDescriptionChanged:
      return "checkedStateDescriptionChanged";
    case EventType::kChildrenChanged:
      return "childrenChanged";
    case EventType::kClassNameChanged:
      return "classNameChanged";
    case EventType::kClicked:
      return "clicked";
    case EventType::kCollapsed:
      return "collapsed";
    case EventType::kControlsChanged:
      return "controlsChanged";
    case EventType::kDetailsChanged:
      return "detailsChanged";
    case EventType::kDescribedByChanged:
      return "describedByChanged";
    case EventType::kDescriptionChanged:
      return "descriptionChanged";
    case EventType::kDocumentSelectionChanged:
      return "documentSelectionChanged";
    case EventType::kDocumentTitleChanged:
      return "documentTitleChanged";
    case EventType::kDropeffectChanged:
      return "dropeffectChanged";
    case EventType::kEditableTextChanged:
      return "editableTextChanged";
    case EventType::kEnabledChanged:
      return "enabledChanged";
    case EventType::kEndOfTest:
      return "endOfTest";
    case EventType::kExpanded:
      return "expanded";
    case EventType::kExpandedChanged:
      return "expandedChanged";
    case EventType::kFlowFromChanged:
      return "flowFromChanged";
    case EventType::kFlowToChanged:
      return "flowToChanged";
    case EventType::kFocus:
      return "focus";
    case EventType::kFocusAfterMenuClose:
      return "focusAfterMenuClose";
    case EventType::kFocusChanged:
      return "focusChanged";
    case EventType::kFocusContext:
      return "focusContext";
    case EventType::kGrabbedChanged:
      return "grabbedChanged";
    case EventType::kHaspopupChanged:
      return "haspopupChanged";
    case EventType::kHide:
      return "hide";
    case EventType::kHierarchicalLevelChanged:
      return "hierarchicalLevelChanged";
    case EventType::kHitTestResult:
      return "hitTestResult";
    case EventType::kHover:
      return "hover";
    case EventType::kIgnoredChanged:
      return "ignoredChanged";
    case EventType::kImageAnnotationChanged:
      return "imageAnnotationChanged";
    case EventType::kImageFrameUpdated:
      return "imageFrameUpdated";
    case EventType::kInvalidStatusChanged:
      return "invalidStatusChanged";
    case EventType::kKeyShortcutsChanged:
      return "keyShortcutsChanged";
    case EventType::kLabeledByChanged:
      return "labeledByChanged";
    case EventType::kLanguageChanged:
      return "languageChanged";
    case EventType::kLayoutComplete:
      return "layoutComplete";
    case EventType::kLayoutInvalidated:
      return "layoutInvalidated";
    case EventType::kLiveRegionChanged:
      return "liveRegionChanged";
    case EventType::kLiveRegionCreated:
      return "liveRegionCreated";
    case EventType::kLiveRegionNodeChanged:
      return "liveRegionNodeChanged";
    case EventType::kLiveRelevantChanged:
      return "liveRelevantChanged";
    case EventType::kLiveStatusChanged:
      return "liveStatusChanged";
    case EventType::kLoadComplete:
      return "loadComplete";
    case EventType::kLoadStart:
      return "loadStart";
    case EventType::kLocationChanged:
      return "locationChanged";
    case EventType::kMediaStartedPlaying:
      return "mediaStartedPlaying";
    case EventType::kMediaStoppedPlaying:
      return "mediaStoppedPlaying";
    case EventType::kMenuEnd:
      return "menuEnd";
    case EventType::kMenuItemSelected:
      return "menuItemSelected";
    case EventType::kMenuListValueChanged:
      return "menuListValueChanged";
    case EventType::kMenuPopupEnd:
      return "menuPopupEnd";
    case EventType::kMenuPopupStart:
      return "menuPopupStart";
    case EventType::kMenuStart:
      return "menuStart";
    case EventType::kMouseCanceled:
      return "mouseCanceled";
    case EventType::kMouseDragged:
      return "mouseDragged";
    case EventType::kMouseMoved:
      return "mouseMoved";
    case EventType::kMousePressed:
      return "mousePressed";
    case EventType::kMouseReleased:
      return "mouseReleased";
    case EventType::kMultilineStateChanged:
      return "multilineStateChanged";
    case EventType::kMultiselectableStateChanged:
      return "multiselectableStateChanged";
    case EventType::kNameChanged:
      return "nameChanged";
    case EventType::kObjectAttributeChanged:
      return "objectAttributeChanged";
    case EventType::kOrientationChanged:
      return "orientationChanged";
    case EventType::kOtherAttributeChanged:
      return "otherAttributeChanged";
    case EventType::kParentChanged:
      return "parentChanged";
    case EventType::kPlaceholderChanged:
      return "placeholderChanged";
    case EventType::kPortalActivated:
      return "portalActivated";
    case EventType::kPositionInSetChanged:
      return "positionInSetChanged";
    case EventType::kRangeValueChanged:
      return "rangeValueChanged";
    case EventType::kRangeValueMaxChanged:
      return "rangeValueMaxChanged";
    case EventType::kRangeValueMinChanged:
      return "rangeValueMinChanged";
    case EventType::kRangeValueStepChanged:
      return "rangeValueStepChanged";
    case EventType::kReadonlyChanged:
      return "readonlyChanged";
    case EventType::kRelatedNodeChanged:
      return "relatedNodeChanged";
    case EventType::kRequiredStateChanged:
      return "requiredStateChanged";
    case EventType::kRoleChanged:
      return "roleChanged";
    case EventType::kRowCollapsed:
      return "rowCollapsed";
    case EventType::kRowCountChanged:
      return "rowCountChanged";
    case EventType::kRowExpanded:
      return "rowExpanded";
    case EventType::kScrollHorizontalPositionChanged:
      return "scrollHorizontalPositionChanged";
    case EventType::kScrollPositionChanged:
      return "scrollPositionChanged";
    case EventType::kScrollVerticalPositionChanged:
      return "scrollVerticalPositionChanged";
    case EventType::kScrolledToAnchor:
      return "scrolledToAnchor";
    case EventType::kSelectedChanged:
      return "selectedChanged";
    case EventType::kSelectedChildrenChanged:
      return "selectedChildrenChanged";
    case EventType::kSelectedValueChanged:
      return "selectedValueChanged";
    case EventType::kSelection:
      return "selection";
    case EventType::kSelectionAdd:
      return "selectionAdd";
    case EventType::kSelectionRemove:
      return "selectionRemove";
    case EventType::kSetSizeChanged:
      return "setSizeChanged";
    case EventType::kShow:
      return "show";
    case EventType::kSortChanged:
      return "sortChanged";
    case EventType::kStateChanged:
      return "stateChanged";
    case EventType::kSubtreeCreated:
      return "subtreeCreated";
    case EventType::kTextAttributeChanged:
      return "textAttributeChanged";
    case EventType::kTextSelectionChanged:
      return "textSelectionChanged";
    case EventType::kTextChanged:
      return "textChanged";
    case EventType::kTooltipClosed:
      return "tooltipClosed";
    case EventType::kTooltipOpened:
      return "tooltipOpened";
    case EventType::kTreeChanged:
      return "treeChanged";
    case EventType::kValueInTextFieldChanged:
      return "valueInTextFieldChanged";
    case EventType::kValueChanged:
      return "valueChanged";
    case EventType::kWindowActivated:
      return "windowActivated";
    case EventType::kWindowDeactivated:
      return "windowDeactivated";
    case EventType::kWindowVisibilityChanged:
      return "windowVisibilityChanged";
    case EventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

EventType ParseEventType(base::StringPiece enum_string) {
  if (enum_string == "accessKeyChanged")
    return EventType::kAccessKeyChanged;
  if (enum_string == "activeDescendantChanged")
    return EventType::kActiveDescendantChanged;
  if (enum_string == "alert")
    return EventType::kAlert;
  if (enum_string == "ariaAttributeChangedDeprecated")
    return EventType::kAriaAttributeChangedDeprecated;
  if (enum_string == "ariaCurrentChanged")
    return EventType::kAriaCurrentChanged;
  if (enum_string == "atomicChanged")
    return EventType::kAtomicChanged;
  if (enum_string == "autoCompleteChanged")
    return EventType::kAutoCompleteChanged;
  if (enum_string == "autocorrectionOccured")
    return EventType::kAutocorrectionOccured;
  if (enum_string == "autofillAvailabilityChanged")
    return EventType::kAutofillAvailabilityChanged;
  if (enum_string == "blur")
    return EventType::kBlur;
  if (enum_string == "busyChanged")
    return EventType::kBusyChanged;
  if (enum_string == "caretBoundsChanged")
    return EventType::kCaretBoundsChanged;
  if (enum_string == "checkedStateChanged")
    return EventType::kCheckedStateChanged;
  if (enum_string == "checkedStateDescriptionChanged")
    return EventType::kCheckedStateDescriptionChanged;
  if (enum_string == "childrenChanged")
    return EventType::kChildrenChanged;
  if (enum_string == "classNameChanged")
    return EventType::kClassNameChanged;
  if (enum_string == "clicked")
    return EventType::kClicked;
  if (enum_string == "collapsed")
    return EventType::kCollapsed;
  if (enum_string == "controlsChanged")
    return EventType::kControlsChanged;
  if (enum_string == "detailsChanged")
    return EventType::kDetailsChanged;
  if (enum_string == "describedByChanged")
    return EventType::kDescribedByChanged;
  if (enum_string == "descriptionChanged")
    return EventType::kDescriptionChanged;
  if (enum_string == "documentSelectionChanged")
    return EventType::kDocumentSelectionChanged;
  if (enum_string == "documentTitleChanged")
    return EventType::kDocumentTitleChanged;
  if (enum_string == "dropeffectChanged")
    return EventType::kDropeffectChanged;
  if (enum_string == "editableTextChanged")
    return EventType::kEditableTextChanged;
  if (enum_string == "enabledChanged")
    return EventType::kEnabledChanged;
  if (enum_string == "endOfTest")
    return EventType::kEndOfTest;
  if (enum_string == "expanded")
    return EventType::kExpanded;
  if (enum_string == "expandedChanged")
    return EventType::kExpandedChanged;
  if (enum_string == "flowFromChanged")
    return EventType::kFlowFromChanged;
  if (enum_string == "flowToChanged")
    return EventType::kFlowToChanged;
  if (enum_string == "focus")
    return EventType::kFocus;
  if (enum_string == "focusAfterMenuClose")
    return EventType::kFocusAfterMenuClose;
  if (enum_string == "focusChanged")
    return EventType::kFocusChanged;
  if (enum_string == "focusContext")
    return EventType::kFocusContext;
  if (enum_string == "grabbedChanged")
    return EventType::kGrabbedChanged;
  if (enum_string == "haspopupChanged")
    return EventType::kHaspopupChanged;
  if (enum_string == "hide")
    return EventType::kHide;
  if (enum_string == "hierarchicalLevelChanged")
    return EventType::kHierarchicalLevelChanged;
  if (enum_string == "hitTestResult")
    return EventType::kHitTestResult;
  if (enum_string == "hover")
    return EventType::kHover;
  if (enum_string == "ignoredChanged")
    return EventType::kIgnoredChanged;
  if (enum_string == "imageAnnotationChanged")
    return EventType::kImageAnnotationChanged;
  if (enum_string == "imageFrameUpdated")
    return EventType::kImageFrameUpdated;
  if (enum_string == "invalidStatusChanged")
    return EventType::kInvalidStatusChanged;
  if (enum_string == "keyShortcutsChanged")
    return EventType::kKeyShortcutsChanged;
  if (enum_string == "labeledByChanged")
    return EventType::kLabeledByChanged;
  if (enum_string == "languageChanged")
    return EventType::kLanguageChanged;
  if (enum_string == "layoutComplete")
    return EventType::kLayoutComplete;
  if (enum_string == "layoutInvalidated")
    return EventType::kLayoutInvalidated;
  if (enum_string == "liveRegionChanged")
    return EventType::kLiveRegionChanged;
  if (enum_string == "liveRegionCreated")
    return EventType::kLiveRegionCreated;
  if (enum_string == "liveRegionNodeChanged")
    return EventType::kLiveRegionNodeChanged;
  if (enum_string == "liveRelevantChanged")
    return EventType::kLiveRelevantChanged;
  if (enum_string == "liveStatusChanged")
    return EventType::kLiveStatusChanged;
  if (enum_string == "loadComplete")
    return EventType::kLoadComplete;
  if (enum_string == "loadStart")
    return EventType::kLoadStart;
  if (enum_string == "locationChanged")
    return EventType::kLocationChanged;
  if (enum_string == "mediaStartedPlaying")
    return EventType::kMediaStartedPlaying;
  if (enum_string == "mediaStoppedPlaying")
    return EventType::kMediaStoppedPlaying;
  if (enum_string == "menuEnd")
    return EventType::kMenuEnd;
  if (enum_string == "menuItemSelected")
    return EventType::kMenuItemSelected;
  if (enum_string == "menuListValueChanged")
    return EventType::kMenuListValueChanged;
  if (enum_string == "menuPopupEnd")
    return EventType::kMenuPopupEnd;
  if (enum_string == "menuPopupStart")
    return EventType::kMenuPopupStart;
  if (enum_string == "menuStart")
    return EventType::kMenuStart;
  if (enum_string == "mouseCanceled")
    return EventType::kMouseCanceled;
  if (enum_string == "mouseDragged")
    return EventType::kMouseDragged;
  if (enum_string == "mouseMoved")
    return EventType::kMouseMoved;
  if (enum_string == "mousePressed")
    return EventType::kMousePressed;
  if (enum_string == "mouseReleased")
    return EventType::kMouseReleased;
  if (enum_string == "multilineStateChanged")
    return EventType::kMultilineStateChanged;
  if (enum_string == "multiselectableStateChanged")
    return EventType::kMultiselectableStateChanged;
  if (enum_string == "nameChanged")
    return EventType::kNameChanged;
  if (enum_string == "objectAttributeChanged")
    return EventType::kObjectAttributeChanged;
  if (enum_string == "orientationChanged")
    return EventType::kOrientationChanged;
  if (enum_string == "otherAttributeChanged")
    return EventType::kOtherAttributeChanged;
  if (enum_string == "parentChanged")
    return EventType::kParentChanged;
  if (enum_string == "placeholderChanged")
    return EventType::kPlaceholderChanged;
  if (enum_string == "portalActivated")
    return EventType::kPortalActivated;
  if (enum_string == "positionInSetChanged")
    return EventType::kPositionInSetChanged;
  if (enum_string == "rangeValueChanged")
    return EventType::kRangeValueChanged;
  if (enum_string == "rangeValueMaxChanged")
    return EventType::kRangeValueMaxChanged;
  if (enum_string == "rangeValueMinChanged")
    return EventType::kRangeValueMinChanged;
  if (enum_string == "rangeValueStepChanged")
    return EventType::kRangeValueStepChanged;
  if (enum_string == "readonlyChanged")
    return EventType::kReadonlyChanged;
  if (enum_string == "relatedNodeChanged")
    return EventType::kRelatedNodeChanged;
  if (enum_string == "requiredStateChanged")
    return EventType::kRequiredStateChanged;
  if (enum_string == "roleChanged")
    return EventType::kRoleChanged;
  if (enum_string == "rowCollapsed")
    return EventType::kRowCollapsed;
  if (enum_string == "rowCountChanged")
    return EventType::kRowCountChanged;
  if (enum_string == "rowExpanded")
    return EventType::kRowExpanded;
  if (enum_string == "scrollHorizontalPositionChanged")
    return EventType::kScrollHorizontalPositionChanged;
  if (enum_string == "scrollPositionChanged")
    return EventType::kScrollPositionChanged;
  if (enum_string == "scrollVerticalPositionChanged")
    return EventType::kScrollVerticalPositionChanged;
  if (enum_string == "scrolledToAnchor")
    return EventType::kScrolledToAnchor;
  if (enum_string == "selectedChanged")
    return EventType::kSelectedChanged;
  if (enum_string == "selectedChildrenChanged")
    return EventType::kSelectedChildrenChanged;
  if (enum_string == "selectedValueChanged")
    return EventType::kSelectedValueChanged;
  if (enum_string == "selection")
    return EventType::kSelection;
  if (enum_string == "selectionAdd")
    return EventType::kSelectionAdd;
  if (enum_string == "selectionRemove")
    return EventType::kSelectionRemove;
  if (enum_string == "setSizeChanged")
    return EventType::kSetSizeChanged;
  if (enum_string == "show")
    return EventType::kShow;
  if (enum_string == "sortChanged")
    return EventType::kSortChanged;
  if (enum_string == "stateChanged")
    return EventType::kStateChanged;
  if (enum_string == "subtreeCreated")
    return EventType::kSubtreeCreated;
  if (enum_string == "textAttributeChanged")
    return EventType::kTextAttributeChanged;
  if (enum_string == "textSelectionChanged")
    return EventType::kTextSelectionChanged;
  if (enum_string == "textChanged")
    return EventType::kTextChanged;
  if (enum_string == "tooltipClosed")
    return EventType::kTooltipClosed;
  if (enum_string == "tooltipOpened")
    return EventType::kTooltipOpened;
  if (enum_string == "treeChanged")
    return EventType::kTreeChanged;
  if (enum_string == "valueInTextFieldChanged")
    return EventType::kValueInTextFieldChanged;
  if (enum_string == "valueChanged")
    return EventType::kValueChanged;
  if (enum_string == "windowActivated")
    return EventType::kWindowActivated;
  if (enum_string == "windowDeactivated")
    return EventType::kWindowDeactivated;
  if (enum_string == "windowVisibilityChanged")
    return EventType::kWindowVisibilityChanged;
  return EventType::kNone;
}

std::u16string GetEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"accessKeyChanged\" or \"activeDescendantChanged\" or \"alert\" or \"ariaAttributeChangedDeprecated\" or \"ariaCurrentChanged\" or \"atomicChanged\" or \"autoCompleteChanged\" or \"autocorrectionOccured\" or \"autofillAvailabilityChanged\" or \"blur\" or \"busyChanged\" or \"caretBoundsChanged\" or \"checkedStateChanged\" or \"checkedStateDescriptionChanged\" or \"childrenChanged\" or \"classNameChanged\" or \"clicked\" or \"collapsed\" or \"controlsChanged\" or \"detailsChanged\" or \"describedByChanged\" or \"descriptionChanged\" or \"documentSelectionChanged\" or \"documentTitleChanged\" or \"dropeffectChanged\" or \"editableTextChanged\" or \"enabledChanged\" or \"endOfTest\" or \"expanded\" or \"expandedChanged\" or \"flowFromChanged\" or \"flowToChanged\" or \"focus\" or \"focusAfterMenuClose\" or \"focusChanged\" or \"focusContext\" or \"grabbedChanged\" or \"haspopupChanged\" or \"hide\" or \"hierarchicalLevelChanged\" or \"hitTestResult\" or \"hover\" or \"ignoredChanged\" or \"imageAnnotationChanged\" or \"imageFrameUpdated\" or \"invalidStatusChanged\" or \"keyShortcutsChanged\" or \"labeledByChanged\" or \"languageChanged\" or \"layoutComplete\" or \"layoutInvalidated\" or \"liveRegionChanged\" or \"liveRegionCreated\" or \"liveRegionNodeChanged\" or \"liveRelevantChanged\" or \"liveStatusChanged\" or \"loadComplete\" or \"loadStart\" or \"locationChanged\" or \"mediaStartedPlaying\" or \"mediaStoppedPlaying\" or \"menuEnd\" or \"menuItemSelected\" or \"menuListValueChanged\" or \"menuPopupEnd\" or \"menuPopupStart\" or \"menuStart\" or \"mouseCanceled\" or \"mouseDragged\" or \"mouseMoved\" or \"mousePressed\" or \"mouseReleased\" or \"multilineStateChanged\" or \"multiselectableStateChanged\" or \"nameChanged\" or \"objectAttributeChanged\" or \"orientationChanged\" or \"otherAttributeChanged\" or \"parentChanged\" or \"placeholderChanged\" or \"portalActivated\" or \"positionInSetChanged\" or \"rangeValueChanged\" or \"rangeValueMaxChanged\" or \"rangeValueMinChanged\" or \"rangeValueStepChanged\" or \"readonlyChanged\" or \"relatedNodeChanged\" or \"requiredStateChanged\" or \"roleChanged\" or \"rowCollapsed\" or \"rowCountChanged\" or \"rowExpanded\" or \"scrollHorizontalPositionChanged\" or \"scrollPositionChanged\" or \"scrollVerticalPositionChanged\" or \"scrolledToAnchor\" or \"selectedChanged\" or \"selectedChildrenChanged\" or \"selectedValueChanged\" or \"selection\" or \"selectionAdd\" or \"selectionRemove\" or \"setSizeChanged\" or \"show\" or \"sortChanged\" or \"stateChanged\" or \"subtreeCreated\" or \"textAttributeChanged\" or \"textSelectionChanged\" or \"textChanged\" or \"tooltipClosed\" or \"tooltipOpened\" or \"treeChanged\" or \"valueInTextFieldChanged\" or \"valueChanged\" or \"windowActivated\" or \"windowDeactivated\" or \"windowVisibilityChanged\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(RoleType enum_param) {
  switch (enum_param) {
    case RoleType::kAbbr:
      return "abbr";
    case RoleType::kAlert:
      return "alert";
    case RoleType::kAlertDialog:
      return "alertDialog";
    case RoleType::kApplication:
      return "application";
    case RoleType::kArticle:
      return "article";
    case RoleType::kAudio:
      return "audio";
    case RoleType::kBanner:
      return "banner";
    case RoleType::kBlockquote:
      return "blockquote";
    case RoleType::kButton:
      return "button";
    case RoleType::kCanvas:
      return "canvas";
    case RoleType::kCaption:
      return "caption";
    case RoleType::kCaret:
      return "caret";
    case RoleType::kCell:
      return "cell";
    case RoleType::kCheckBox:
      return "checkBox";
    case RoleType::kClient:
      return "client";
    case RoleType::kCode:
      return "code";
    case RoleType::kColorWell:
      return "colorWell";
    case RoleType::kColumn:
      return "column";
    case RoleType::kColumnHeader:
      return "columnHeader";
    case RoleType::kComboBoxGrouping:
      return "comboBoxGrouping";
    case RoleType::kComboBoxMenuButton:
      return "comboBoxMenuButton";
    case RoleType::kComboBoxSelect:
      return "comboBoxSelect";
    case RoleType::kComment:
      return "comment";
    case RoleType::kComplementary:
      return "complementary";
    case RoleType::kContentDeletion:
      return "contentDeletion";
    case RoleType::kContentInsertion:
      return "contentInsertion";
    case RoleType::kContentInfo:
      return "contentInfo";
    case RoleType::kDate:
      return "date";
    case RoleType::kDateTime:
      return "dateTime";
    case RoleType::kDefinition:
      return "definition";
    case RoleType::kDescriptionList:
      return "descriptionList";
    case RoleType::kDescriptionListDetail:
      return "descriptionListDetail";
    case RoleType::kDescriptionListTerm:
      return "descriptionListTerm";
    case RoleType::kDesktop:
      return "desktop";
    case RoleType::kDetails:
      return "details";
    case RoleType::kDialog:
      return "dialog";
    case RoleType::kDirectory:
      return "directory";
    case RoleType::kDisclosureTriangle:
      return "disclosureTriangle";
    case RoleType::kDisclosureTriangleGrouped:
      return "disclosureTriangleGrouped";
    case RoleType::kDocAbstract:
      return "docAbstract";
    case RoleType::kDocAcknowledgments:
      return "docAcknowledgments";
    case RoleType::kDocAfterword:
      return "docAfterword";
    case RoleType::kDocAppendix:
      return "docAppendix";
    case RoleType::kDocBackLink:
      return "docBackLink";
    case RoleType::kDocBiblioEntry:
      return "docBiblioEntry";
    case RoleType::kDocBibliography:
      return "docBibliography";
    case RoleType::kDocBiblioRef:
      return "docBiblioRef";
    case RoleType::kDocChapter:
      return "docChapter";
    case RoleType::kDocColophon:
      return "docColophon";
    case RoleType::kDocConclusion:
      return "docConclusion";
    case RoleType::kDocCover:
      return "docCover";
    case RoleType::kDocCredit:
      return "docCredit";
    case RoleType::kDocCredits:
      return "docCredits";
    case RoleType::kDocDedication:
      return "docDedication";
    case RoleType::kDocEndnote:
      return "docEndnote";
    case RoleType::kDocEndnotes:
      return "docEndnotes";
    case RoleType::kDocEpigraph:
      return "docEpigraph";
    case RoleType::kDocEpilogue:
      return "docEpilogue";
    case RoleType::kDocErrata:
      return "docErrata";
    case RoleType::kDocExample:
      return "docExample";
    case RoleType::kDocFootnote:
      return "docFootnote";
    case RoleType::kDocForeword:
      return "docForeword";
    case RoleType::kDocGlossary:
      return "docGlossary";
    case RoleType::kDocGlossRef:
      return "docGlossRef";
    case RoleType::kDocIndex:
      return "docIndex";
    case RoleType::kDocIntroduction:
      return "docIntroduction";
    case RoleType::kDocNoteRef:
      return "docNoteRef";
    case RoleType::kDocNotice:
      return "docNotice";
    case RoleType::kDocPageBreak:
      return "docPageBreak";
    case RoleType::kDocPageFooter:
      return "docPageFooter";
    case RoleType::kDocPageHeader:
      return "docPageHeader";
    case RoleType::kDocPageList:
      return "docPageList";
    case RoleType::kDocPart:
      return "docPart";
    case RoleType::kDocPreface:
      return "docPreface";
    case RoleType::kDocPrologue:
      return "docPrologue";
    case RoleType::kDocPullquote:
      return "docPullquote";
    case RoleType::kDocQna:
      return "docQna";
    case RoleType::kDocSubtitle:
      return "docSubtitle";
    case RoleType::kDocTip:
      return "docTip";
    case RoleType::kDocToc:
      return "docToc";
    case RoleType::kDocument:
      return "document";
    case RoleType::kEmbeddedObject:
      return "embeddedObject";
    case RoleType::kEmphasis:
      return "emphasis";
    case RoleType::kFeed:
      return "feed";
    case RoleType::kFigcaption:
      return "figcaption";
    case RoleType::kFigure:
      return "figure";
    case RoleType::kFooter:
      return "footer";
    case RoleType::kFooterAsNonLandmark:
      return "footerAsNonLandmark";
    case RoleType::kForm:
      return "form";
    case RoleType::kGenericContainer:
      return "genericContainer";
    case RoleType::kGraphicsDocument:
      return "graphicsDocument";
    case RoleType::kGraphicsObject:
      return "graphicsObject";
    case RoleType::kGraphicsSymbol:
      return "graphicsSymbol";
    case RoleType::kGrid:
      return "grid";
    case RoleType::kGroup:
      return "group";
    case RoleType::kHeader:
      return "header";
    case RoleType::kHeaderAsNonLandmark:
      return "headerAsNonLandmark";
    case RoleType::kHeading:
      return "heading";
    case RoleType::kIframe:
      return "iframe";
    case RoleType::kIframePresentational:
      return "iframePresentational";
    case RoleType::kImage:
      return "image";
    case RoleType::kImeCandidate:
      return "imeCandidate";
    case RoleType::kInlineTextBox:
      return "inlineTextBox";
    case RoleType::kInputTime:
      return "inputTime";
    case RoleType::kKeyboard:
      return "keyboard";
    case RoleType::kLabelText:
      return "labelText";
    case RoleType::kLayoutTable:
      return "layoutTable";
    case RoleType::kLayoutTableCell:
      return "layoutTableCell";
    case RoleType::kLayoutTableRow:
      return "layoutTableRow";
    case RoleType::kLegend:
      return "legend";
    case RoleType::kLineBreak:
      return "lineBreak";
    case RoleType::kLink:
      return "link";
    case RoleType::kList:
      return "list";
    case RoleType::kListBox:
      return "listBox";
    case RoleType::kListBoxOption:
      return "listBoxOption";
    case RoleType::kListGrid:
      return "listGrid";
    case RoleType::kListItem:
      return "listItem";
    case RoleType::kListMarker:
      return "listMarker";
    case RoleType::kLog:
      return "log";
    case RoleType::kMain:
      return "main";
    case RoleType::kMark:
      return "mark";
    case RoleType::kMarquee:
      return "marquee";
    case RoleType::kMath:
      return "math";
    case RoleType::kMathMlfraction:
      return "mathMLFraction";
    case RoleType::kMathMlidentifier:
      return "mathMLIdentifier";
    case RoleType::kMathMlmath:
      return "mathMLMath";
    case RoleType::kMathMlmultiscripts:
      return "mathMLMultiscripts";
    case RoleType::kMathMlnoneScript:
      return "mathMLNoneScript";
    case RoleType::kMathMlnumber:
      return "mathMLNumber";
    case RoleType::kMathMloperator:
      return "mathMLOperator";
    case RoleType::kMathMlover:
      return "mathMLOver";
    case RoleType::kMathMlprescriptDelimiter:
      return "mathMLPrescriptDelimiter";
    case RoleType::kMathMlroot:
      return "mathMLRoot";
    case RoleType::kMathMlrow:
      return "mathMLRow";
    case RoleType::kMathMlsquareRoot:
      return "mathMLSquareRoot";
    case RoleType::kMathMlstringLiteral:
      return "mathMLStringLiteral";
    case RoleType::kMathMlsub:
      return "mathMLSub";
    case RoleType::kMathMlsubSup:
      return "mathMLSubSup";
    case RoleType::kMathMlsup:
      return "mathMLSup";
    case RoleType::kMathMltable:
      return "mathMLTable";
    case RoleType::kMathMltableCell:
      return "mathMLTableCell";
    case RoleType::kMathMltableRow:
      return "mathMLTableRow";
    case RoleType::kMathMltext:
      return "mathMLText";
    case RoleType::kMathMlunder:
      return "mathMLUnder";
    case RoleType::kMathMlunderOver:
      return "mathMLUnderOver";
    case RoleType::kMenu:
      return "menu";
    case RoleType::kMenuBar:
      return "menuBar";
    case RoleType::kMenuItem:
      return "menuItem";
    case RoleType::kMenuItemCheckBox:
      return "menuItemCheckBox";
    case RoleType::kMenuItemRadio:
      return "menuItemRadio";
    case RoleType::kMenuListOption:
      return "menuListOption";
    case RoleType::kMenuListPopup:
      return "menuListPopup";
    case RoleType::kMeter:
      return "meter";
    case RoleType::kNavigation:
      return "navigation";
    case RoleType::kNote:
      return "note";
    case RoleType::kPane:
      return "pane";
    case RoleType::kParagraph:
      return "paragraph";
    case RoleType::kPdfActionableHighlight:
      return "pdfActionableHighlight";
    case RoleType::kPdfRoot:
      return "pdfRoot";
    case RoleType::kPluginObject:
      return "pluginObject";
    case RoleType::kPopUpButton:
      return "popUpButton";
    case RoleType::kPortal:
      return "portal";
    case RoleType::kPreDeprecated:
      return "preDeprecated";
    case RoleType::kProgressIndicator:
      return "progressIndicator";
    case RoleType::kRadioButton:
      return "radioButton";
    case RoleType::kRadioGroup:
      return "radioGroup";
    case RoleType::kRegion:
      return "region";
    case RoleType::kRootWebArea:
      return "rootWebArea";
    case RoleType::kRow:
      return "row";
    case RoleType::kRowGroup:
      return "rowGroup";
    case RoleType::kRowHeader:
      return "rowHeader";
    case RoleType::kRuby:
      return "ruby";
    case RoleType::kRubyAnnotation:
      return "rubyAnnotation";
    case RoleType::kScrollBar:
      return "scrollBar";
    case RoleType::kScrollView:
      return "scrollView";
    case RoleType::kSearch:
      return "search";
    case RoleType::kSearchBox:
      return "searchBox";
    case RoleType::kSection:
      return "section";
    case RoleType::kSlider:
      return "slider";
    case RoleType::kSpinButton:
      return "spinButton";
    case RoleType::kSplitter:
      return "splitter";
    case RoleType::kStaticText:
      return "staticText";
    case RoleType::kStatus:
      return "status";
    case RoleType::kStrong:
      return "strong";
    case RoleType::kSubscript:
      return "subscript";
    case RoleType::kSuggestion:
      return "suggestion";
    case RoleType::kSuperscript:
      return "superscript";
    case RoleType::kSvgRoot:
      return "svgRoot";
    case RoleType::kSwitch:
      return "switch";
    case RoleType::kTab:
      return "tab";
    case RoleType::kTabList:
      return "tabList";
    case RoleType::kTabPanel:
      return "tabPanel";
    case RoleType::kTable:
      return "table";
    case RoleType::kTableHeaderContainer:
      return "tableHeaderContainer";
    case RoleType::kTerm:
      return "term";
    case RoleType::kTextField:
      return "textField";
    case RoleType::kTextFieldWithComboBox:
      return "textFieldWithComboBox";
    case RoleType::kTime:
      return "time";
    case RoleType::kTimer:
      return "timer";
    case RoleType::kTitleBar:
      return "titleBar";
    case RoleType::kToggleButton:
      return "toggleButton";
    case RoleType::kToolbar:
      return "toolbar";
    case RoleType::kTooltip:
      return "tooltip";
    case RoleType::kTree:
      return "tree";
    case RoleType::kTreeGrid:
      return "treeGrid";
    case RoleType::kTreeItem:
      return "treeItem";
    case RoleType::kUnknown:
      return "unknown";
    case RoleType::kVideo:
      return "video";
    case RoleType::kWebView:
      return "webView";
    case RoleType::kWindow:
      return "window";
    case RoleType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

RoleType ParseRoleType(base::StringPiece enum_string) {
  if (enum_string == "abbr")
    return RoleType::kAbbr;
  if (enum_string == "alert")
    return RoleType::kAlert;
  if (enum_string == "alertDialog")
    return RoleType::kAlertDialog;
  if (enum_string == "application")
    return RoleType::kApplication;
  if (enum_string == "article")
    return RoleType::kArticle;
  if (enum_string == "audio")
    return RoleType::kAudio;
  if (enum_string == "banner")
    return RoleType::kBanner;
  if (enum_string == "blockquote")
    return RoleType::kBlockquote;
  if (enum_string == "button")
    return RoleType::kButton;
  if (enum_string == "canvas")
    return RoleType::kCanvas;
  if (enum_string == "caption")
    return RoleType::kCaption;
  if (enum_string == "caret")
    return RoleType::kCaret;
  if (enum_string == "cell")
    return RoleType::kCell;
  if (enum_string == "checkBox")
    return RoleType::kCheckBox;
  if (enum_string == "client")
    return RoleType::kClient;
  if (enum_string == "code")
    return RoleType::kCode;
  if (enum_string == "colorWell")
    return RoleType::kColorWell;
  if (enum_string == "column")
    return RoleType::kColumn;
  if (enum_string == "columnHeader")
    return RoleType::kColumnHeader;
  if (enum_string == "comboBoxGrouping")
    return RoleType::kComboBoxGrouping;
  if (enum_string == "comboBoxMenuButton")
    return RoleType::kComboBoxMenuButton;
  if (enum_string == "comboBoxSelect")
    return RoleType::kComboBoxSelect;
  if (enum_string == "comment")
    return RoleType::kComment;
  if (enum_string == "complementary")
    return RoleType::kComplementary;
  if (enum_string == "contentDeletion")
    return RoleType::kContentDeletion;
  if (enum_string == "contentInsertion")
    return RoleType::kContentInsertion;
  if (enum_string == "contentInfo")
    return RoleType::kContentInfo;
  if (enum_string == "date")
    return RoleType::kDate;
  if (enum_string == "dateTime")
    return RoleType::kDateTime;
  if (enum_string == "definition")
    return RoleType::kDefinition;
  if (enum_string == "descriptionList")
    return RoleType::kDescriptionList;
  if (enum_string == "descriptionListDetail")
    return RoleType::kDescriptionListDetail;
  if (enum_string == "descriptionListTerm")
    return RoleType::kDescriptionListTerm;
  if (enum_string == "desktop")
    return RoleType::kDesktop;
  if (enum_string == "details")
    return RoleType::kDetails;
  if (enum_string == "dialog")
    return RoleType::kDialog;
  if (enum_string == "directory")
    return RoleType::kDirectory;
  if (enum_string == "disclosureTriangle")
    return RoleType::kDisclosureTriangle;
  if (enum_string == "disclosureTriangleGrouped")
    return RoleType::kDisclosureTriangleGrouped;
  if (enum_string == "docAbstract")
    return RoleType::kDocAbstract;
  if (enum_string == "docAcknowledgments")
    return RoleType::kDocAcknowledgments;
  if (enum_string == "docAfterword")
    return RoleType::kDocAfterword;
  if (enum_string == "docAppendix")
    return RoleType::kDocAppendix;
  if (enum_string == "docBackLink")
    return RoleType::kDocBackLink;
  if (enum_string == "docBiblioEntry")
    return RoleType::kDocBiblioEntry;
  if (enum_string == "docBibliography")
    return RoleType::kDocBibliography;
  if (enum_string == "docBiblioRef")
    return RoleType::kDocBiblioRef;
  if (enum_string == "docChapter")
    return RoleType::kDocChapter;
  if (enum_string == "docColophon")
    return RoleType::kDocColophon;
  if (enum_string == "docConclusion")
    return RoleType::kDocConclusion;
  if (enum_string == "docCover")
    return RoleType::kDocCover;
  if (enum_string == "docCredit")
    return RoleType::kDocCredit;
  if (enum_string == "docCredits")
    return RoleType::kDocCredits;
  if (enum_string == "docDedication")
    return RoleType::kDocDedication;
  if (enum_string == "docEndnote")
    return RoleType::kDocEndnote;
  if (enum_string == "docEndnotes")
    return RoleType::kDocEndnotes;
  if (enum_string == "docEpigraph")
    return RoleType::kDocEpigraph;
  if (enum_string == "docEpilogue")
    return RoleType::kDocEpilogue;
  if (enum_string == "docErrata")
    return RoleType::kDocErrata;
  if (enum_string == "docExample")
    return RoleType::kDocExample;
  if (enum_string == "docFootnote")
    return RoleType::kDocFootnote;
  if (enum_string == "docForeword")
    return RoleType::kDocForeword;
  if (enum_string == "docGlossary")
    return RoleType::kDocGlossary;
  if (enum_string == "docGlossRef")
    return RoleType::kDocGlossRef;
  if (enum_string == "docIndex")
    return RoleType::kDocIndex;
  if (enum_string == "docIntroduction")
    return RoleType::kDocIntroduction;
  if (enum_string == "docNoteRef")
    return RoleType::kDocNoteRef;
  if (enum_string == "docNotice")
    return RoleType::kDocNotice;
  if (enum_string == "docPageBreak")
    return RoleType::kDocPageBreak;
  if (enum_string == "docPageFooter")
    return RoleType::kDocPageFooter;
  if (enum_string == "docPageHeader")
    return RoleType::kDocPageHeader;
  if (enum_string == "docPageList")
    return RoleType::kDocPageList;
  if (enum_string == "docPart")
    return RoleType::kDocPart;
  if (enum_string == "docPreface")
    return RoleType::kDocPreface;
  if (enum_string == "docPrologue")
    return RoleType::kDocPrologue;
  if (enum_string == "docPullquote")
    return RoleType::kDocPullquote;
  if (enum_string == "docQna")
    return RoleType::kDocQna;
  if (enum_string == "docSubtitle")
    return RoleType::kDocSubtitle;
  if (enum_string == "docTip")
    return RoleType::kDocTip;
  if (enum_string == "docToc")
    return RoleType::kDocToc;
  if (enum_string == "document")
    return RoleType::kDocument;
  if (enum_string == "embeddedObject")
    return RoleType::kEmbeddedObject;
  if (enum_string == "emphasis")
    return RoleType::kEmphasis;
  if (enum_string == "feed")
    return RoleType::kFeed;
  if (enum_string == "figcaption")
    return RoleType::kFigcaption;
  if (enum_string == "figure")
    return RoleType::kFigure;
  if (enum_string == "footer")
    return RoleType::kFooter;
  if (enum_string == "footerAsNonLandmark")
    return RoleType::kFooterAsNonLandmark;
  if (enum_string == "form")
    return RoleType::kForm;
  if (enum_string == "genericContainer")
    return RoleType::kGenericContainer;
  if (enum_string == "graphicsDocument")
    return RoleType::kGraphicsDocument;
  if (enum_string == "graphicsObject")
    return RoleType::kGraphicsObject;
  if (enum_string == "graphicsSymbol")
    return RoleType::kGraphicsSymbol;
  if (enum_string == "grid")
    return RoleType::kGrid;
  if (enum_string == "group")
    return RoleType::kGroup;
  if (enum_string == "header")
    return RoleType::kHeader;
  if (enum_string == "headerAsNonLandmark")
    return RoleType::kHeaderAsNonLandmark;
  if (enum_string == "heading")
    return RoleType::kHeading;
  if (enum_string == "iframe")
    return RoleType::kIframe;
  if (enum_string == "iframePresentational")
    return RoleType::kIframePresentational;
  if (enum_string == "image")
    return RoleType::kImage;
  if (enum_string == "imeCandidate")
    return RoleType::kImeCandidate;
  if (enum_string == "inlineTextBox")
    return RoleType::kInlineTextBox;
  if (enum_string == "inputTime")
    return RoleType::kInputTime;
  if (enum_string == "keyboard")
    return RoleType::kKeyboard;
  if (enum_string == "labelText")
    return RoleType::kLabelText;
  if (enum_string == "layoutTable")
    return RoleType::kLayoutTable;
  if (enum_string == "layoutTableCell")
    return RoleType::kLayoutTableCell;
  if (enum_string == "layoutTableRow")
    return RoleType::kLayoutTableRow;
  if (enum_string == "legend")
    return RoleType::kLegend;
  if (enum_string == "lineBreak")
    return RoleType::kLineBreak;
  if (enum_string == "link")
    return RoleType::kLink;
  if (enum_string == "list")
    return RoleType::kList;
  if (enum_string == "listBox")
    return RoleType::kListBox;
  if (enum_string == "listBoxOption")
    return RoleType::kListBoxOption;
  if (enum_string == "listGrid")
    return RoleType::kListGrid;
  if (enum_string == "listItem")
    return RoleType::kListItem;
  if (enum_string == "listMarker")
    return RoleType::kListMarker;
  if (enum_string == "log")
    return RoleType::kLog;
  if (enum_string == "main")
    return RoleType::kMain;
  if (enum_string == "mark")
    return RoleType::kMark;
  if (enum_string == "marquee")
    return RoleType::kMarquee;
  if (enum_string == "math")
    return RoleType::kMath;
  if (enum_string == "mathMLFraction")
    return RoleType::kMathMlfraction;
  if (enum_string == "mathMLIdentifier")
    return RoleType::kMathMlidentifier;
  if (enum_string == "mathMLMath")
    return RoleType::kMathMlmath;
  if (enum_string == "mathMLMultiscripts")
    return RoleType::kMathMlmultiscripts;
  if (enum_string == "mathMLNoneScript")
    return RoleType::kMathMlnoneScript;
  if (enum_string == "mathMLNumber")
    return RoleType::kMathMlnumber;
  if (enum_string == "mathMLOperator")
    return RoleType::kMathMloperator;
  if (enum_string == "mathMLOver")
    return RoleType::kMathMlover;
  if (enum_string == "mathMLPrescriptDelimiter")
    return RoleType::kMathMlprescriptDelimiter;
  if (enum_string == "mathMLRoot")
    return RoleType::kMathMlroot;
  if (enum_string == "mathMLRow")
    return RoleType::kMathMlrow;
  if (enum_string == "mathMLSquareRoot")
    return RoleType::kMathMlsquareRoot;
  if (enum_string == "mathMLStringLiteral")
    return RoleType::kMathMlstringLiteral;
  if (enum_string == "mathMLSub")
    return RoleType::kMathMlsub;
  if (enum_string == "mathMLSubSup")
    return RoleType::kMathMlsubSup;
  if (enum_string == "mathMLSup")
    return RoleType::kMathMlsup;
  if (enum_string == "mathMLTable")
    return RoleType::kMathMltable;
  if (enum_string == "mathMLTableCell")
    return RoleType::kMathMltableCell;
  if (enum_string == "mathMLTableRow")
    return RoleType::kMathMltableRow;
  if (enum_string == "mathMLText")
    return RoleType::kMathMltext;
  if (enum_string == "mathMLUnder")
    return RoleType::kMathMlunder;
  if (enum_string == "mathMLUnderOver")
    return RoleType::kMathMlunderOver;
  if (enum_string == "menu")
    return RoleType::kMenu;
  if (enum_string == "menuBar")
    return RoleType::kMenuBar;
  if (enum_string == "menuItem")
    return RoleType::kMenuItem;
  if (enum_string == "menuItemCheckBox")
    return RoleType::kMenuItemCheckBox;
  if (enum_string == "menuItemRadio")
    return RoleType::kMenuItemRadio;
  if (enum_string == "menuListOption")
    return RoleType::kMenuListOption;
  if (enum_string == "menuListPopup")
    return RoleType::kMenuListPopup;
  if (enum_string == "meter")
    return RoleType::kMeter;
  if (enum_string == "navigation")
    return RoleType::kNavigation;
  if (enum_string == "note")
    return RoleType::kNote;
  if (enum_string == "pane")
    return RoleType::kPane;
  if (enum_string == "paragraph")
    return RoleType::kParagraph;
  if (enum_string == "pdfActionableHighlight")
    return RoleType::kPdfActionableHighlight;
  if (enum_string == "pdfRoot")
    return RoleType::kPdfRoot;
  if (enum_string == "pluginObject")
    return RoleType::kPluginObject;
  if (enum_string == "popUpButton")
    return RoleType::kPopUpButton;
  if (enum_string == "portal")
    return RoleType::kPortal;
  if (enum_string == "preDeprecated")
    return RoleType::kPreDeprecated;
  if (enum_string == "progressIndicator")
    return RoleType::kProgressIndicator;
  if (enum_string == "radioButton")
    return RoleType::kRadioButton;
  if (enum_string == "radioGroup")
    return RoleType::kRadioGroup;
  if (enum_string == "region")
    return RoleType::kRegion;
  if (enum_string == "rootWebArea")
    return RoleType::kRootWebArea;
  if (enum_string == "row")
    return RoleType::kRow;
  if (enum_string == "rowGroup")
    return RoleType::kRowGroup;
  if (enum_string == "rowHeader")
    return RoleType::kRowHeader;
  if (enum_string == "ruby")
    return RoleType::kRuby;
  if (enum_string == "rubyAnnotation")
    return RoleType::kRubyAnnotation;
  if (enum_string == "scrollBar")
    return RoleType::kScrollBar;
  if (enum_string == "scrollView")
    return RoleType::kScrollView;
  if (enum_string == "search")
    return RoleType::kSearch;
  if (enum_string == "searchBox")
    return RoleType::kSearchBox;
  if (enum_string == "section")
    return RoleType::kSection;
  if (enum_string == "slider")
    return RoleType::kSlider;
  if (enum_string == "spinButton")
    return RoleType::kSpinButton;
  if (enum_string == "splitter")
    return RoleType::kSplitter;
  if (enum_string == "staticText")
    return RoleType::kStaticText;
  if (enum_string == "status")
    return RoleType::kStatus;
  if (enum_string == "strong")
    return RoleType::kStrong;
  if (enum_string == "subscript")
    return RoleType::kSubscript;
  if (enum_string == "suggestion")
    return RoleType::kSuggestion;
  if (enum_string == "superscript")
    return RoleType::kSuperscript;
  if (enum_string == "svgRoot")
    return RoleType::kSvgRoot;
  if (enum_string == "switch")
    return RoleType::kSwitch;
  if (enum_string == "tab")
    return RoleType::kTab;
  if (enum_string == "tabList")
    return RoleType::kTabList;
  if (enum_string == "tabPanel")
    return RoleType::kTabPanel;
  if (enum_string == "table")
    return RoleType::kTable;
  if (enum_string == "tableHeaderContainer")
    return RoleType::kTableHeaderContainer;
  if (enum_string == "term")
    return RoleType::kTerm;
  if (enum_string == "textField")
    return RoleType::kTextField;
  if (enum_string == "textFieldWithComboBox")
    return RoleType::kTextFieldWithComboBox;
  if (enum_string == "time")
    return RoleType::kTime;
  if (enum_string == "timer")
    return RoleType::kTimer;
  if (enum_string == "titleBar")
    return RoleType::kTitleBar;
  if (enum_string == "toggleButton")
    return RoleType::kToggleButton;
  if (enum_string == "toolbar")
    return RoleType::kToolbar;
  if (enum_string == "tooltip")
    return RoleType::kTooltip;
  if (enum_string == "tree")
    return RoleType::kTree;
  if (enum_string == "treeGrid")
    return RoleType::kTreeGrid;
  if (enum_string == "treeItem")
    return RoleType::kTreeItem;
  if (enum_string == "unknown")
    return RoleType::kUnknown;
  if (enum_string == "video")
    return RoleType::kVideo;
  if (enum_string == "webView")
    return RoleType::kWebView;
  if (enum_string == "window")
    return RoleType::kWindow;
  return RoleType::kNone;
}

std::u16string GetRoleTypeParseError(base::StringPiece enum_string) {
  return u"expected \"abbr\" or \"alert\" or \"alertDialog\" or \"application\" or \"article\" or \"audio\" or \"banner\" or \"blockquote\" or \"button\" or \"canvas\" or \"caption\" or \"caret\" or \"cell\" or \"checkBox\" or \"client\" or \"code\" or \"colorWell\" or \"column\" or \"columnHeader\" or \"comboBoxGrouping\" or \"comboBoxMenuButton\" or \"comboBoxSelect\" or \"comment\" or \"complementary\" or \"contentDeletion\" or \"contentInsertion\" or \"contentInfo\" or \"date\" or \"dateTime\" or \"definition\" or \"descriptionList\" or \"descriptionListDetail\" or \"descriptionListTerm\" or \"desktop\" or \"details\" or \"dialog\" or \"directory\" or \"disclosureTriangle\" or \"disclosureTriangleGrouped\" or \"docAbstract\" or \"docAcknowledgments\" or \"docAfterword\" or \"docAppendix\" or \"docBackLink\" or \"docBiblioEntry\" or \"docBibliography\" or \"docBiblioRef\" or \"docChapter\" or \"docColophon\" or \"docConclusion\" or \"docCover\" or \"docCredit\" or \"docCredits\" or \"docDedication\" or \"docEndnote\" or \"docEndnotes\" or \"docEpigraph\" or \"docEpilogue\" or \"docErrata\" or \"docExample\" or \"docFootnote\" or \"docForeword\" or \"docGlossary\" or \"docGlossRef\" or \"docIndex\" or \"docIntroduction\" or \"docNoteRef\" or \"docNotice\" or \"docPageBreak\" or \"docPageFooter\" or \"docPageHeader\" or \"docPageList\" or \"docPart\" or \"docPreface\" or \"docPrologue\" or \"docPullquote\" or \"docQna\" or \"docSubtitle\" or \"docTip\" or \"docToc\" or \"document\" or \"embeddedObject\" or \"emphasis\" or \"feed\" or \"figcaption\" or \"figure\" or \"footer\" or \"footerAsNonLandmark\" or \"form\" or \"genericContainer\" or \"graphicsDocument\" or \"graphicsObject\" or \"graphicsSymbol\" or \"grid\" or \"group\" or \"header\" or \"headerAsNonLandmark\" or \"heading\" or \"iframe\" or \"iframePresentational\" or \"image\" or \"imeCandidate\" or \"inlineTextBox\" or \"inputTime\" or \"keyboard\" or \"labelText\" or \"layoutTable\" or \"layoutTableCell\" or \"layoutTableRow\" or \"legend\" or \"lineBreak\" or \"link\" or \"list\" or \"listBox\" or \"listBoxOption\" or \"listGrid\" or \"listItem\" or \"listMarker\" or \"log\" or \"main\" or \"mark\" or \"marquee\" or \"math\" or \"mathMLFraction\" or \"mathMLIdentifier\" or \"mathMLMath\" or \"mathMLMultiscripts\" or \"mathMLNoneScript\" or \"mathMLNumber\" or \"mathMLOperator\" or \"mathMLOver\" or \"mathMLPrescriptDelimiter\" or \"mathMLRoot\" or \"mathMLRow\" or \"mathMLSquareRoot\" or \"mathMLStringLiteral\" or \"mathMLSub\" or \"mathMLSubSup\" or \"mathMLSup\" or \"mathMLTable\" or \"mathMLTableCell\" or \"mathMLTableRow\" or \"mathMLText\" or \"mathMLUnder\" or \"mathMLUnderOver\" or \"menu\" or \"menuBar\" or \"menuItem\" or \"menuItemCheckBox\" or \"menuItemRadio\" or \"menuListOption\" or \"menuListPopup\" or \"meter\" or \"navigation\" or \"note\" or \"pane\" or \"paragraph\" or \"pdfActionableHighlight\" or \"pdfRoot\" or \"pluginObject\" or \"popUpButton\" or \"portal\" or \"preDeprecated\" or \"progressIndicator\" or \"radioButton\" or \"radioGroup\" or \"region\" or \"rootWebArea\" or \"row\" or \"rowGroup\" or \"rowHeader\" or \"ruby\" or \"rubyAnnotation\" or \"scrollBar\" or \"scrollView\" or \"search\" or \"searchBox\" or \"section\" or \"slider\" or \"spinButton\" or \"splitter\" or \"staticText\" or \"status\" or \"strong\" or \"subscript\" or \"suggestion\" or \"superscript\" or \"svgRoot\" or \"switch\" or \"tab\" or \"tabList\" or \"tabPanel\" or \"table\" or \"tableHeaderContainer\" or \"term\" or \"textField\" or \"textFieldWithComboBox\" or \"time\" or \"timer\" or \"titleBar\" or \"toggleButton\" or \"toolbar\" or \"tooltip\" or \"tree\" or \"treeGrid\" or \"treeItem\" or \"unknown\" or \"video\" or \"webView\" or \"window\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(StateType enum_param) {
  switch (enum_param) {
    case StateType::kAutofillAvailable:
      return "autofillAvailable";
    case StateType::kCollapsed:
      return "collapsed";
    case StateType::kDefault:
      return "default";
    case StateType::kEditable:
      return "editable";
    case StateType::kExpanded:
      return "expanded";
    case StateType::kFocusable:
      return "focusable";
    case StateType::kFocused:
      return "focused";
    case StateType::kHorizontal:
      return "horizontal";
    case StateType::kHovered:
      return "hovered";
    case StateType::kIgnored:
      return "ignored";
    case StateType::kInvisible:
      return "invisible";
    case StateType::kLinked:
      return "linked";
    case StateType::kMultiline:
      return "multiline";
    case StateType::kMultiselectable:
      return "multiselectable";
    case StateType::kOffscreen:
      return "offscreen";
    case StateType::kProtected:
      return "protected";
    case StateType::kRequired:
      return "required";
    case StateType::kRichlyEditable:
      return "richlyEditable";
    case StateType::kVertical:
      return "vertical";
    case StateType::kVisited:
      return "visited";
    case StateType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

StateType ParseStateType(base::StringPiece enum_string) {
  if (enum_string == "autofillAvailable")
    return StateType::kAutofillAvailable;
  if (enum_string == "collapsed")
    return StateType::kCollapsed;
  if (enum_string == "default")
    return StateType::kDefault;
  if (enum_string == "editable")
    return StateType::kEditable;
  if (enum_string == "expanded")
    return StateType::kExpanded;
  if (enum_string == "focusable")
    return StateType::kFocusable;
  if (enum_string == "focused")
    return StateType::kFocused;
  if (enum_string == "horizontal")
    return StateType::kHorizontal;
  if (enum_string == "hovered")
    return StateType::kHovered;
  if (enum_string == "ignored")
    return StateType::kIgnored;
  if (enum_string == "invisible")
    return StateType::kInvisible;
  if (enum_string == "linked")
    return StateType::kLinked;
  if (enum_string == "multiline")
    return StateType::kMultiline;
  if (enum_string == "multiselectable")
    return StateType::kMultiselectable;
  if (enum_string == "offscreen")
    return StateType::kOffscreen;
  if (enum_string == "protected")
    return StateType::kProtected;
  if (enum_string == "required")
    return StateType::kRequired;
  if (enum_string == "richlyEditable")
    return StateType::kRichlyEditable;
  if (enum_string == "vertical")
    return StateType::kVertical;
  if (enum_string == "visited")
    return StateType::kVisited;
  return StateType::kNone;
}

std::u16string GetStateTypeParseError(base::StringPiece enum_string) {
  return u"expected \"autofillAvailable\" or \"collapsed\" or \"default\" or \"editable\" or \"expanded\" or \"focusable\" or \"focused\" or \"horizontal\" or \"hovered\" or \"ignored\" or \"invisible\" or \"linked\" or \"multiline\" or \"multiselectable\" or \"offscreen\" or \"protected\" or \"required\" or \"richlyEditable\" or \"vertical\" or \"visited\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(ActionType enum_param) {
  switch (enum_param) {
    case ActionType::kAnnotatePageImages:
      return "annotatePageImages";
    case ActionType::kBlur:
      return "blur";
    case ActionType::kClearAccessibilityFocus:
      return "clearAccessibilityFocus";
    case ActionType::kCollapse:
      return "collapse";
    case ActionType::kCustomAction:
      return "customAction";
    case ActionType::kDecrement:
      return "decrement";
    case ActionType::kDoDefault:
      return "doDefault";
    case ActionType::kExpand:
      return "expand";
    case ActionType::kFocus:
      return "focus";
    case ActionType::kGetImageData:
      return "getImageData";
    case ActionType::kGetTextLocation:
      return "getTextLocation";
    case ActionType::kHideTooltip:
      return "hideTooltip";
    case ActionType::kHitTest:
      return "hitTest";
    case ActionType::kIncrement:
      return "increment";
    case ActionType::kInternalInvalidateTree:
      return "internalInvalidateTree";
    case ActionType::kLoadInlineTextBoxes:
      return "loadInlineTextBoxes";
    case ActionType::kLongClick:
      return "longClick";
    case ActionType::kReplaceSelectedText:
      return "replaceSelectedText";
    case ActionType::kResumeMedia:
      return "resumeMedia";
    case ActionType::kScrollBackward:
      return "scrollBackward";
    case ActionType::kScrollDown:
      return "scrollDown";
    case ActionType::kScrollForward:
      return "scrollForward";
    case ActionType::kScrollLeft:
      return "scrollLeft";
    case ActionType::kScrollRight:
      return "scrollRight";
    case ActionType::kScrollUp:
      return "scrollUp";
    case ActionType::kScrollToMakeVisible:
      return "scrollToMakeVisible";
    case ActionType::kScrollToPoint:
      return "scrollToPoint";
    case ActionType::kScrollToPositionAtRowColumn:
      return "scrollToPositionAtRowColumn";
    case ActionType::kSetAccessibilityFocus:
      return "setAccessibilityFocus";
    case ActionType::kSetScrollOffset:
      return "setScrollOffset";
    case ActionType::kSetSelection:
      return "setSelection";
    case ActionType::kSetSequentialFocusNavigationStartingPoint:
      return "setSequentialFocusNavigationStartingPoint";
    case ActionType::kSetValue:
      return "setValue";
    case ActionType::kShowContextMenu:
      return "showContextMenu";
    case ActionType::kSignalEndOfTest:
      return "signalEndOfTest";
    case ActionType::kShowTooltip:
      return "showTooltip";
    case ActionType::kStitchChildTree:
      return "stitchChildTree";
    case ActionType::kStartDuckingMedia:
      return "startDuckingMedia";
    case ActionType::kStopDuckingMedia:
      return "stopDuckingMedia";
    case ActionType::kSuspendMedia:
      return "suspendMedia";
    case ActionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

ActionType ParseActionType(base::StringPiece enum_string) {
  if (enum_string == "annotatePageImages")
    return ActionType::kAnnotatePageImages;
  if (enum_string == "blur")
    return ActionType::kBlur;
  if (enum_string == "clearAccessibilityFocus")
    return ActionType::kClearAccessibilityFocus;
  if (enum_string == "collapse")
    return ActionType::kCollapse;
  if (enum_string == "customAction")
    return ActionType::kCustomAction;
  if (enum_string == "decrement")
    return ActionType::kDecrement;
  if (enum_string == "doDefault")
    return ActionType::kDoDefault;
  if (enum_string == "expand")
    return ActionType::kExpand;
  if (enum_string == "focus")
    return ActionType::kFocus;
  if (enum_string == "getImageData")
    return ActionType::kGetImageData;
  if (enum_string == "getTextLocation")
    return ActionType::kGetTextLocation;
  if (enum_string == "hideTooltip")
    return ActionType::kHideTooltip;
  if (enum_string == "hitTest")
    return ActionType::kHitTest;
  if (enum_string == "increment")
    return ActionType::kIncrement;
  if (enum_string == "internalInvalidateTree")
    return ActionType::kInternalInvalidateTree;
  if (enum_string == "loadInlineTextBoxes")
    return ActionType::kLoadInlineTextBoxes;
  if (enum_string == "longClick")
    return ActionType::kLongClick;
  if (enum_string == "replaceSelectedText")
    return ActionType::kReplaceSelectedText;
  if (enum_string == "resumeMedia")
    return ActionType::kResumeMedia;
  if (enum_string == "scrollBackward")
    return ActionType::kScrollBackward;
  if (enum_string == "scrollDown")
    return ActionType::kScrollDown;
  if (enum_string == "scrollForward")
    return ActionType::kScrollForward;
  if (enum_string == "scrollLeft")
    return ActionType::kScrollLeft;
  if (enum_string == "scrollRight")
    return ActionType::kScrollRight;
  if (enum_string == "scrollUp")
    return ActionType::kScrollUp;
  if (enum_string == "scrollToMakeVisible")
    return ActionType::kScrollToMakeVisible;
  if (enum_string == "scrollToPoint")
    return ActionType::kScrollToPoint;
  if (enum_string == "scrollToPositionAtRowColumn")
    return ActionType::kScrollToPositionAtRowColumn;
  if (enum_string == "setAccessibilityFocus")
    return ActionType::kSetAccessibilityFocus;
  if (enum_string == "setScrollOffset")
    return ActionType::kSetScrollOffset;
  if (enum_string == "setSelection")
    return ActionType::kSetSelection;
  if (enum_string == "setSequentialFocusNavigationStartingPoint")
    return ActionType::kSetSequentialFocusNavigationStartingPoint;
  if (enum_string == "setValue")
    return ActionType::kSetValue;
  if (enum_string == "showContextMenu")
    return ActionType::kShowContextMenu;
  if (enum_string == "signalEndOfTest")
    return ActionType::kSignalEndOfTest;
  if (enum_string == "showTooltip")
    return ActionType::kShowTooltip;
  if (enum_string == "stitchChildTree")
    return ActionType::kStitchChildTree;
  if (enum_string == "startDuckingMedia")
    return ActionType::kStartDuckingMedia;
  if (enum_string == "stopDuckingMedia")
    return ActionType::kStopDuckingMedia;
  if (enum_string == "suspendMedia")
    return ActionType::kSuspendMedia;
  return ActionType::kNone;
}

std::u16string GetActionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"annotatePageImages\" or \"blur\" or \"clearAccessibilityFocus\" or \"collapse\" or \"customAction\" or \"decrement\" or \"doDefault\" or \"expand\" or \"focus\" or \"getImageData\" or \"getTextLocation\" or \"hideTooltip\" or \"hitTest\" or \"increment\" or \"internalInvalidateTree\" or \"loadInlineTextBoxes\" or \"longClick\" or \"replaceSelectedText\" or \"resumeMedia\" or \"scrollBackward\" or \"scrollDown\" or \"scrollForward\" or \"scrollLeft\" or \"scrollRight\" or \"scrollUp\" or \"scrollToMakeVisible\" or \"scrollToPoint\" or \"scrollToPositionAtRowColumn\" or \"setAccessibilityFocus\" or \"setScrollOffset\" or \"setSelection\" or \"setSequentialFocusNavigationStartingPoint\" or \"setValue\" or \"showContextMenu\" or \"signalEndOfTest\" or \"showTooltip\" or \"stitchChildTree\" or \"startDuckingMedia\" or \"stopDuckingMedia\" or \"suspendMedia\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(TreeChangeType enum_param) {
  switch (enum_param) {
    case TreeChangeType::kNodeCreated:
      return "nodeCreated";
    case TreeChangeType::kSubtreeCreated:
      return "subtreeCreated";
    case TreeChangeType::kNodeChanged:
      return "nodeChanged";
    case TreeChangeType::kTextChanged:
      return "textChanged";
    case TreeChangeType::kNodeRemoved:
      return "nodeRemoved";
    case TreeChangeType::kSubtreeUpdateEnd:
      return "subtreeUpdateEnd";
    case TreeChangeType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TreeChangeType ParseTreeChangeType(base::StringPiece enum_string) {
  if (enum_string == "nodeCreated")
    return TreeChangeType::kNodeCreated;
  if (enum_string == "subtreeCreated")
    return TreeChangeType::kSubtreeCreated;
  if (enum_string == "nodeChanged")
    return TreeChangeType::kNodeChanged;
  if (enum_string == "textChanged")
    return TreeChangeType::kTextChanged;
  if (enum_string == "nodeRemoved")
    return TreeChangeType::kNodeRemoved;
  if (enum_string == "subtreeUpdateEnd")
    return TreeChangeType::kSubtreeUpdateEnd;
  return TreeChangeType::kNone;
}

std::u16string GetTreeChangeTypeParseError(base::StringPiece enum_string) {
  return u"expected \"nodeCreated\" or \"subtreeCreated\" or \"nodeChanged\" or \"textChanged\" or \"nodeRemoved\" or \"subtreeUpdateEnd\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(NameFromType enum_param) {
  switch (enum_param) {
    case NameFromType::kAttribute:
      return "attribute";
    case NameFromType::kAttributeExplicitlyEmpty:
      return "attributeExplicitlyEmpty";
    case NameFromType::kCaption:
      return "caption";
    case NameFromType::kContents:
      return "contents";
    case NameFromType::kPlaceholder:
      return "placeholder";
    case NameFromType::kPopoverAttribute:
      return "popoverAttribute";
    case NameFromType::kRelatedElement:
      return "relatedElement";
    case NameFromType::kTitle:
      return "title";
    case NameFromType::kValue:
      return "value";
    case NameFromType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

NameFromType ParseNameFromType(base::StringPiece enum_string) {
  if (enum_string == "attribute")
    return NameFromType::kAttribute;
  if (enum_string == "attributeExplicitlyEmpty")
    return NameFromType::kAttributeExplicitlyEmpty;
  if (enum_string == "caption")
    return NameFromType::kCaption;
  if (enum_string == "contents")
    return NameFromType::kContents;
  if (enum_string == "placeholder")
    return NameFromType::kPlaceholder;
  if (enum_string == "popoverAttribute")
    return NameFromType::kPopoverAttribute;
  if (enum_string == "relatedElement")
    return NameFromType::kRelatedElement;
  if (enum_string == "title")
    return NameFromType::kTitle;
  if (enum_string == "value")
    return NameFromType::kValue;
  return NameFromType::kNone;
}

std::u16string GetNameFromTypeParseError(base::StringPiece enum_string) {
  return u"expected \"attribute\" or \"attributeExplicitlyEmpty\" or \"caption\" or \"contents\" or \"placeholder\" or \"popoverAttribute\" or \"relatedElement\" or \"title\" or \"value\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DescriptionFromType enum_param) {
  switch (enum_param) {
    case DescriptionFromType::kAriaDescription:
      return "ariaDescription";
    case DescriptionFromType::kAttributeExplicitlyEmpty:
      return "attributeExplicitlyEmpty";
    case DescriptionFromType::kButtonLabel:
      return "buttonLabel";
    case DescriptionFromType::kPopoverAttribute:
      return "popoverAttribute";
    case DescriptionFromType::kRelatedElement:
      return "relatedElement";
    case DescriptionFromType::kRubyAnnotation:
      return "rubyAnnotation";
    case DescriptionFromType::kSummary:
      return "summary";
    case DescriptionFromType::kSvgDescElement:
      return "svgDescElement";
    case DescriptionFromType::kTableCaption:
      return "tableCaption";
    case DescriptionFromType::kTitle:
      return "title";
    case DescriptionFromType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DescriptionFromType ParseDescriptionFromType(base::StringPiece enum_string) {
  if (enum_string == "ariaDescription")
    return DescriptionFromType::kAriaDescription;
  if (enum_string == "attributeExplicitlyEmpty")
    return DescriptionFromType::kAttributeExplicitlyEmpty;
  if (enum_string == "buttonLabel")
    return DescriptionFromType::kButtonLabel;
  if (enum_string == "popoverAttribute")
    return DescriptionFromType::kPopoverAttribute;
  if (enum_string == "relatedElement")
    return DescriptionFromType::kRelatedElement;
  if (enum_string == "rubyAnnotation")
    return DescriptionFromType::kRubyAnnotation;
  if (enum_string == "summary")
    return DescriptionFromType::kSummary;
  if (enum_string == "svgDescElement")
    return DescriptionFromType::kSvgDescElement;
  if (enum_string == "tableCaption")
    return DescriptionFromType::kTableCaption;
  if (enum_string == "title")
    return DescriptionFromType::kTitle;
  return DescriptionFromType::kNone;
}

std::u16string GetDescriptionFromTypeParseError(base::StringPiece enum_string) {
  return u"expected \"ariaDescription\" or \"attributeExplicitlyEmpty\" or \"buttonLabel\" or \"popoverAttribute\" or \"relatedElement\" or \"rubyAnnotation\" or \"summary\" or \"svgDescElement\" or \"tableCaption\" or \"title\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(Restriction enum_param) {
  switch (enum_param) {
    case Restriction::kDisabled:
      return "disabled";
    case Restriction::kReadOnly:
      return "readOnly";
    case Restriction::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

Restriction ParseRestriction(base::StringPiece enum_string) {
  if (enum_string == "disabled")
    return Restriction::kDisabled;
  if (enum_string == "readOnly")
    return Restriction::kReadOnly;
  return Restriction::kNone;
}

std::u16string GetRestrictionParseError(base::StringPiece enum_string) {
  return u"expected \"disabled\" or \"readOnly\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(HasPopup enum_param) {
  switch (enum_param) {
    case HasPopup::kFalse:
      return "false";
    case HasPopup::kTrue:
      return "true";
    case HasPopup::kMenu:
      return "menu";
    case HasPopup::kListbox:
      return "listbox";
    case HasPopup::kTree:
      return "tree";
    case HasPopup::kGrid:
      return "grid";
    case HasPopup::kDialog:
      return "dialog";
    case HasPopup::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

HasPopup ParseHasPopup(base::StringPiece enum_string) {
  if (enum_string == "false")
    return HasPopup::kFalse;
  if (enum_string == "true")
    return HasPopup::kTrue;
  if (enum_string == "menu")
    return HasPopup::kMenu;
  if (enum_string == "listbox")
    return HasPopup::kListbox;
  if (enum_string == "tree")
    return HasPopup::kTree;
  if (enum_string == "grid")
    return HasPopup::kGrid;
  if (enum_string == "dialog")
    return HasPopup::kDialog;
  return HasPopup::kNone;
}

std::u16string GetHasPopupParseError(base::StringPiece enum_string) {
  return u"expected \"false\" or \"true\" or \"menu\" or \"listbox\" or \"tree\" or \"grid\" or \"dialog\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(AriaCurrentState enum_param) {
  switch (enum_param) {
    case AriaCurrentState::kFalse:
      return "false";
    case AriaCurrentState::kTrue:
      return "true";
    case AriaCurrentState::kPage:
      return "page";
    case AriaCurrentState::kStep:
      return "step";
    case AriaCurrentState::kLocation:
      return "location";
    case AriaCurrentState::kDate:
      return "date";
    case AriaCurrentState::kTime:
      return "time";
    case AriaCurrentState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

AriaCurrentState ParseAriaCurrentState(base::StringPiece enum_string) {
  if (enum_string == "false")
    return AriaCurrentState::kFalse;
  if (enum_string == "true")
    return AriaCurrentState::kTrue;
  if (enum_string == "page")
    return AriaCurrentState::kPage;
  if (enum_string == "step")
    return AriaCurrentState::kStep;
  if (enum_string == "location")
    return AriaCurrentState::kLocation;
  if (enum_string == "date")
    return AriaCurrentState::kDate;
  if (enum_string == "time")
    return AriaCurrentState::kTime;
  return AriaCurrentState::kNone;
}

std::u16string GetAriaCurrentStateParseError(base::StringPiece enum_string) {
  return u"expected \"false\" or \"true\" or \"page\" or \"step\" or \"location\" or \"date\" or \"time\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(InvalidState enum_param) {
  switch (enum_param) {
    case InvalidState::kFalse:
      return "false";
    case InvalidState::kTrue:
      return "true";
    case InvalidState::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

InvalidState ParseInvalidState(base::StringPiece enum_string) {
  if (enum_string == "false")
    return InvalidState::kFalse;
  if (enum_string == "true")
    return InvalidState::kTrue;
  return InvalidState::kNone;
}

std::u16string GetInvalidStateParseError(base::StringPiece enum_string) {
  return u"expected \"false\" or \"true\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(DefaultActionVerb enum_param) {
  switch (enum_param) {
    case DefaultActionVerb::kActivate:
      return "activate";
    case DefaultActionVerb::kCheck:
      return "check";
    case DefaultActionVerb::kClick:
      return "click";
    case DefaultActionVerb::kClickAncestor:
      return "clickAncestor";
    case DefaultActionVerb::kJump:
      return "jump";
    case DefaultActionVerb::kOpen:
      return "open";
    case DefaultActionVerb::kPress:
      return "press";
    case DefaultActionVerb::kSelect:
      return "select";
    case DefaultActionVerb::kUncheck:
      return "uncheck";
    case DefaultActionVerb::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

DefaultActionVerb ParseDefaultActionVerb(base::StringPiece enum_string) {
  if (enum_string == "activate")
    return DefaultActionVerb::kActivate;
  if (enum_string == "check")
    return DefaultActionVerb::kCheck;
  if (enum_string == "click")
    return DefaultActionVerb::kClick;
  if (enum_string == "clickAncestor")
    return DefaultActionVerb::kClickAncestor;
  if (enum_string == "jump")
    return DefaultActionVerb::kJump;
  if (enum_string == "open")
    return DefaultActionVerb::kOpen;
  if (enum_string == "press")
    return DefaultActionVerb::kPress;
  if (enum_string == "select")
    return DefaultActionVerb::kSelect;
  if (enum_string == "uncheck")
    return DefaultActionVerb::kUncheck;
  return DefaultActionVerb::kNone;
}

std::u16string GetDefaultActionVerbParseError(base::StringPiece enum_string) {
  return u"expected \"activate\" or \"check\" or \"click\" or \"clickAncestor\" or \"jump\" or \"open\" or \"press\" or \"select\" or \"uncheck\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(MarkerType enum_param) {
  switch (enum_param) {
    case MarkerType::kSpelling:
      return "spelling";
    case MarkerType::kGrammar:
      return "grammar";
    case MarkerType::kTextMatch:
      return "textMatch";
    case MarkerType::kActiveSuggestion:
      return "activeSuggestion";
    case MarkerType::kSuggestion:
      return "suggestion";
    case MarkerType::kHighlight:
      return "highlight";
    case MarkerType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

MarkerType ParseMarkerType(base::StringPiece enum_string) {
  if (enum_string == "spelling")
    return MarkerType::kSpelling;
  if (enum_string == "grammar")
    return MarkerType::kGrammar;
  if (enum_string == "textMatch")
    return MarkerType::kTextMatch;
  if (enum_string == "activeSuggestion")
    return MarkerType::kActiveSuggestion;
  if (enum_string == "suggestion")
    return MarkerType::kSuggestion;
  if (enum_string == "highlight")
    return MarkerType::kHighlight;
  return MarkerType::kNone;
}

std::u16string GetMarkerTypeParseError(base::StringPiece enum_string) {
  return u"expected \"spelling\" or \"grammar\" or \"textMatch\" or \"activeSuggestion\" or \"suggestion\" or \"highlight\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(IntentCommandType enum_param) {
  switch (enum_param) {
    case IntentCommandType::kClearSelection:
      return "clearSelection";
    case IntentCommandType::kDelete:
      return "delete";
    case IntentCommandType::kDictate:
      return "dictate";
    case IntentCommandType::kExtendSelection:
      return "extendSelection";
    case IntentCommandType::kFormat:
      return "format";
    case IntentCommandType::kHistory:
      return "history";
    case IntentCommandType::kInsert:
      return "insert";
    case IntentCommandType::kMarker:
      return "marker";
    case IntentCommandType::kMoveSelection:
      return "moveSelection";
    case IntentCommandType::kSetSelection:
      return "setSelection";
    case IntentCommandType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IntentCommandType ParseIntentCommandType(base::StringPiece enum_string) {
  if (enum_string == "clearSelection")
    return IntentCommandType::kClearSelection;
  if (enum_string == "delete")
    return IntentCommandType::kDelete;
  if (enum_string == "dictate")
    return IntentCommandType::kDictate;
  if (enum_string == "extendSelection")
    return IntentCommandType::kExtendSelection;
  if (enum_string == "format")
    return IntentCommandType::kFormat;
  if (enum_string == "history")
    return IntentCommandType::kHistory;
  if (enum_string == "insert")
    return IntentCommandType::kInsert;
  if (enum_string == "marker")
    return IntentCommandType::kMarker;
  if (enum_string == "moveSelection")
    return IntentCommandType::kMoveSelection;
  if (enum_string == "setSelection")
    return IntentCommandType::kSetSelection;
  return IntentCommandType::kNone;
}

std::u16string GetIntentCommandTypeParseError(base::StringPiece enum_string) {
  return u"expected \"clearSelection\" or \"delete\" or \"dictate\" or \"extendSelection\" or \"format\" or \"history\" or \"insert\" or \"marker\" or \"moveSelection\" or \"setSelection\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(IntentInputEventType enum_param) {
  switch (enum_param) {
    case IntentInputEventType::kInsertText:
      return "insertText";
    case IntentInputEventType::kInsertLineBreak:
      return "insertLineBreak";
    case IntentInputEventType::kInsertParagraph:
      return "insertParagraph";
    case IntentInputEventType::kInsertOrderedList:
      return "insertOrderedList";
    case IntentInputEventType::kInsertUnorderedList:
      return "insertUnorderedList";
    case IntentInputEventType::kInsertHorizontalRule:
      return "insertHorizontalRule";
    case IntentInputEventType::kInsertFromPaste:
      return "insertFromPaste";
    case IntentInputEventType::kInsertFromDrop:
      return "insertFromDrop";
    case IntentInputEventType::kInsertFromYank:
      return "insertFromYank";
    case IntentInputEventType::kInsertTranspose:
      return "insertTranspose";
    case IntentInputEventType::kInsertReplacementText:
      return "insertReplacementText";
    case IntentInputEventType::kInsertCompositionText:
      return "insertCompositionText";
    case IntentInputEventType::kDeleteWordBackward:
      return "deleteWordBackward";
    case IntentInputEventType::kDeleteWordForward:
      return "deleteWordForward";
    case IntentInputEventType::kDeleteSoftLineBackward:
      return "deleteSoftLineBackward";
    case IntentInputEventType::kDeleteSoftLineForward:
      return "deleteSoftLineForward";
    case IntentInputEventType::kDeleteHardLineBackward:
      return "deleteHardLineBackward";
    case IntentInputEventType::kDeleteHardLineForward:
      return "deleteHardLineForward";
    case IntentInputEventType::kDeleteContentBackward:
      return "deleteContentBackward";
    case IntentInputEventType::kDeleteContentForward:
      return "deleteContentForward";
    case IntentInputEventType::kDeleteByCut:
      return "deleteByCut";
    case IntentInputEventType::kDeleteByDrag:
      return "deleteByDrag";
    case IntentInputEventType::kHistoryUndo:
      return "historyUndo";
    case IntentInputEventType::kHistoryRedo:
      return "historyRedo";
    case IntentInputEventType::kFormatBold:
      return "formatBold";
    case IntentInputEventType::kFormatItalic:
      return "formatItalic";
    case IntentInputEventType::kFormatUnderline:
      return "formatUnderline";
    case IntentInputEventType::kFormatStrikeThrough:
      return "formatStrikeThrough";
    case IntentInputEventType::kFormatSuperscript:
      return "formatSuperscript";
    case IntentInputEventType::kFormatSubscript:
      return "formatSubscript";
    case IntentInputEventType::kFormatJustifyCenter:
      return "formatJustifyCenter";
    case IntentInputEventType::kFormatJustifyFull:
      return "formatJustifyFull";
    case IntentInputEventType::kFormatJustifyRight:
      return "formatJustifyRight";
    case IntentInputEventType::kFormatJustifyLeft:
      return "formatJustifyLeft";
    case IntentInputEventType::kFormatIndent:
      return "formatIndent";
    case IntentInputEventType::kFormatOutdent:
      return "formatOutdent";
    case IntentInputEventType::kFormatRemove:
      return "formatRemove";
    case IntentInputEventType::kFormatSetBlockTextDirection:
      return "formatSetBlockTextDirection";
    case IntentInputEventType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IntentInputEventType ParseIntentInputEventType(base::StringPiece enum_string) {
  if (enum_string == "insertText")
    return IntentInputEventType::kInsertText;
  if (enum_string == "insertLineBreak")
    return IntentInputEventType::kInsertLineBreak;
  if (enum_string == "insertParagraph")
    return IntentInputEventType::kInsertParagraph;
  if (enum_string == "insertOrderedList")
    return IntentInputEventType::kInsertOrderedList;
  if (enum_string == "insertUnorderedList")
    return IntentInputEventType::kInsertUnorderedList;
  if (enum_string == "insertHorizontalRule")
    return IntentInputEventType::kInsertHorizontalRule;
  if (enum_string == "insertFromPaste")
    return IntentInputEventType::kInsertFromPaste;
  if (enum_string == "insertFromDrop")
    return IntentInputEventType::kInsertFromDrop;
  if (enum_string == "insertFromYank")
    return IntentInputEventType::kInsertFromYank;
  if (enum_string == "insertTranspose")
    return IntentInputEventType::kInsertTranspose;
  if (enum_string == "insertReplacementText")
    return IntentInputEventType::kInsertReplacementText;
  if (enum_string == "insertCompositionText")
    return IntentInputEventType::kInsertCompositionText;
  if (enum_string == "deleteWordBackward")
    return IntentInputEventType::kDeleteWordBackward;
  if (enum_string == "deleteWordForward")
    return IntentInputEventType::kDeleteWordForward;
  if (enum_string == "deleteSoftLineBackward")
    return IntentInputEventType::kDeleteSoftLineBackward;
  if (enum_string == "deleteSoftLineForward")
    return IntentInputEventType::kDeleteSoftLineForward;
  if (enum_string == "deleteHardLineBackward")
    return IntentInputEventType::kDeleteHardLineBackward;
  if (enum_string == "deleteHardLineForward")
    return IntentInputEventType::kDeleteHardLineForward;
  if (enum_string == "deleteContentBackward")
    return IntentInputEventType::kDeleteContentBackward;
  if (enum_string == "deleteContentForward")
    return IntentInputEventType::kDeleteContentForward;
  if (enum_string == "deleteByCut")
    return IntentInputEventType::kDeleteByCut;
  if (enum_string == "deleteByDrag")
    return IntentInputEventType::kDeleteByDrag;
  if (enum_string == "historyUndo")
    return IntentInputEventType::kHistoryUndo;
  if (enum_string == "historyRedo")
    return IntentInputEventType::kHistoryRedo;
  if (enum_string == "formatBold")
    return IntentInputEventType::kFormatBold;
  if (enum_string == "formatItalic")
    return IntentInputEventType::kFormatItalic;
  if (enum_string == "formatUnderline")
    return IntentInputEventType::kFormatUnderline;
  if (enum_string == "formatStrikeThrough")
    return IntentInputEventType::kFormatStrikeThrough;
  if (enum_string == "formatSuperscript")
    return IntentInputEventType::kFormatSuperscript;
  if (enum_string == "formatSubscript")
    return IntentInputEventType::kFormatSubscript;
  if (enum_string == "formatJustifyCenter")
    return IntentInputEventType::kFormatJustifyCenter;
  if (enum_string == "formatJustifyFull")
    return IntentInputEventType::kFormatJustifyFull;
  if (enum_string == "formatJustifyRight")
    return IntentInputEventType::kFormatJustifyRight;
  if (enum_string == "formatJustifyLeft")
    return IntentInputEventType::kFormatJustifyLeft;
  if (enum_string == "formatIndent")
    return IntentInputEventType::kFormatIndent;
  if (enum_string == "formatOutdent")
    return IntentInputEventType::kFormatOutdent;
  if (enum_string == "formatRemove")
    return IntentInputEventType::kFormatRemove;
  if (enum_string == "formatSetBlockTextDirection")
    return IntentInputEventType::kFormatSetBlockTextDirection;
  return IntentInputEventType::kNone;
}

std::u16string GetIntentInputEventTypeParseError(base::StringPiece enum_string) {
  return u"expected \"insertText\" or \"insertLineBreak\" or \"insertParagraph\" or \"insertOrderedList\" or \"insertUnorderedList\" or \"insertHorizontalRule\" or \"insertFromPaste\" or \"insertFromDrop\" or \"insertFromYank\" or \"insertTranspose\" or \"insertReplacementText\" or \"insertCompositionText\" or \"deleteWordBackward\" or \"deleteWordForward\" or \"deleteSoftLineBackward\" or \"deleteSoftLineForward\" or \"deleteHardLineBackward\" or \"deleteHardLineForward\" or \"deleteContentBackward\" or \"deleteContentForward\" or \"deleteByCut\" or \"deleteByDrag\" or \"historyUndo\" or \"historyRedo\" or \"formatBold\" or \"formatItalic\" or \"formatUnderline\" or \"formatStrikeThrough\" or \"formatSuperscript\" or \"formatSubscript\" or \"formatJustifyCenter\" or \"formatJustifyFull\" or \"formatJustifyRight\" or \"formatJustifyLeft\" or \"formatIndent\" or \"formatOutdent\" or \"formatRemove\" or \"formatSetBlockTextDirection\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(IntentTextBoundaryType enum_param) {
  switch (enum_param) {
    case IntentTextBoundaryType::kCharacter:
      return "character";
    case IntentTextBoundaryType::kFormatEnd:
      return "formatEnd";
    case IntentTextBoundaryType::kFormatStart:
      return "formatStart";
    case IntentTextBoundaryType::kFormatStartOrEnd:
      return "formatStartOrEnd";
    case IntentTextBoundaryType::kLineEnd:
      return "lineEnd";
    case IntentTextBoundaryType::kLineStart:
      return "lineStart";
    case IntentTextBoundaryType::kLineStartOrEnd:
      return "lineStartOrEnd";
    case IntentTextBoundaryType::kObject:
      return "object";
    case IntentTextBoundaryType::kPageEnd:
      return "pageEnd";
    case IntentTextBoundaryType::kPageStart:
      return "pageStart";
    case IntentTextBoundaryType::kPageStartOrEnd:
      return "pageStartOrEnd";
    case IntentTextBoundaryType::kParagraphEnd:
      return "paragraphEnd";
    case IntentTextBoundaryType::kParagraphStart:
      return "paragraphStart";
    case IntentTextBoundaryType::kParagraphStartSkippingEmptyParagraphs:
      return "paragraphStartSkippingEmptyParagraphs";
    case IntentTextBoundaryType::kParagraphStartOrEnd:
      return "paragraphStartOrEnd";
    case IntentTextBoundaryType::kSentenceEnd:
      return "sentenceEnd";
    case IntentTextBoundaryType::kSentenceStart:
      return "sentenceStart";
    case IntentTextBoundaryType::kSentenceStartOrEnd:
      return "sentenceStartOrEnd";
    case IntentTextBoundaryType::kWebPage:
      return "webPage";
    case IntentTextBoundaryType::kWordEnd:
      return "wordEnd";
    case IntentTextBoundaryType::kWordStart:
      return "wordStart";
    case IntentTextBoundaryType::kWordStartOrEnd:
      return "wordStartOrEnd";
    case IntentTextBoundaryType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IntentTextBoundaryType ParseIntentTextBoundaryType(base::StringPiece enum_string) {
  if (enum_string == "character")
    return IntentTextBoundaryType::kCharacter;
  if (enum_string == "formatEnd")
    return IntentTextBoundaryType::kFormatEnd;
  if (enum_string == "formatStart")
    return IntentTextBoundaryType::kFormatStart;
  if (enum_string == "formatStartOrEnd")
    return IntentTextBoundaryType::kFormatStartOrEnd;
  if (enum_string == "lineEnd")
    return IntentTextBoundaryType::kLineEnd;
  if (enum_string == "lineStart")
    return IntentTextBoundaryType::kLineStart;
  if (enum_string == "lineStartOrEnd")
    return IntentTextBoundaryType::kLineStartOrEnd;
  if (enum_string == "object")
    return IntentTextBoundaryType::kObject;
  if (enum_string == "pageEnd")
    return IntentTextBoundaryType::kPageEnd;
  if (enum_string == "pageStart")
    return IntentTextBoundaryType::kPageStart;
  if (enum_string == "pageStartOrEnd")
    return IntentTextBoundaryType::kPageStartOrEnd;
  if (enum_string == "paragraphEnd")
    return IntentTextBoundaryType::kParagraphEnd;
  if (enum_string == "paragraphStart")
    return IntentTextBoundaryType::kParagraphStart;
  if (enum_string == "paragraphStartSkippingEmptyParagraphs")
    return IntentTextBoundaryType::kParagraphStartSkippingEmptyParagraphs;
  if (enum_string == "paragraphStartOrEnd")
    return IntentTextBoundaryType::kParagraphStartOrEnd;
  if (enum_string == "sentenceEnd")
    return IntentTextBoundaryType::kSentenceEnd;
  if (enum_string == "sentenceStart")
    return IntentTextBoundaryType::kSentenceStart;
  if (enum_string == "sentenceStartOrEnd")
    return IntentTextBoundaryType::kSentenceStartOrEnd;
  if (enum_string == "webPage")
    return IntentTextBoundaryType::kWebPage;
  if (enum_string == "wordEnd")
    return IntentTextBoundaryType::kWordEnd;
  if (enum_string == "wordStart")
    return IntentTextBoundaryType::kWordStart;
  if (enum_string == "wordStartOrEnd")
    return IntentTextBoundaryType::kWordStartOrEnd;
  return IntentTextBoundaryType::kNone;
}

std::u16string GetIntentTextBoundaryTypeParseError(base::StringPiece enum_string) {
  return u"expected \"character\" or \"formatEnd\" or \"formatStart\" or \"formatStartOrEnd\" or \"lineEnd\" or \"lineStart\" or \"lineStartOrEnd\" or \"object\" or \"pageEnd\" or \"pageStart\" or \"pageStartOrEnd\" or \"paragraphEnd\" or \"paragraphStart\" or \"paragraphStartSkippingEmptyParagraphs\" or \"paragraphStartOrEnd\" or \"sentenceEnd\" or \"sentenceStart\" or \"sentenceStartOrEnd\" or \"webPage\" or \"wordEnd\" or \"wordStart\" or \"wordStartOrEnd\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(IntentMoveDirectionType enum_param) {
  switch (enum_param) {
    case IntentMoveDirectionType::kBackward:
      return "backward";
    case IntentMoveDirectionType::kForward:
      return "forward";
    case IntentMoveDirectionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

IntentMoveDirectionType ParseIntentMoveDirectionType(base::StringPiece enum_string) {
  if (enum_string == "backward")
    return IntentMoveDirectionType::kBackward;
  if (enum_string == "forward")
    return IntentMoveDirectionType::kForward;
  return IntentMoveDirectionType::kNone;
}

std::u16string GetIntentMoveDirectionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"backward\" or \"forward\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(SortDirectionType enum_param) {
  switch (enum_param) {
    case SortDirectionType::kUnsorted:
      return "unsorted";
    case SortDirectionType::kAscending:
      return "ascending";
    case SortDirectionType::kDescending:
      return "descending";
    case SortDirectionType::kOther:
      return "other";
    case SortDirectionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

SortDirectionType ParseSortDirectionType(base::StringPiece enum_string) {
  if (enum_string == "unsorted")
    return SortDirectionType::kUnsorted;
  if (enum_string == "ascending")
    return SortDirectionType::kAscending;
  if (enum_string == "descending")
    return SortDirectionType::kDescending;
  if (enum_string == "other")
    return SortDirectionType::kOther;
  return SortDirectionType::kNone;
}

std::u16string GetSortDirectionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"unsorted\" or \"ascending\" or \"descending\" or \"other\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


const char* ToString(PositionType enum_param) {
  switch (enum_param) {
    case PositionType::kNull:
      return "null";
    case PositionType::kText:
      return "text";
    case PositionType::kTree:
      return "tree";
    case PositionType::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

PositionType ParsePositionType(base::StringPiece enum_string) {
  if (enum_string == "null")
    return PositionType::kNull;
  if (enum_string == "text")
    return PositionType::kText;
  if (enum_string == "tree")
    return PositionType::kTree;
  return PositionType::kNone;
}

std::u16string GetPositionTypeParseError(base::StringPiece enum_string) {
  return u"expected \"null\" or \"text\" or \"tree\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


Rect::Rect()
: left(0),
top(0),
width(0),
height(0) {}

Rect::~Rect() = default;
Rect::Rect(Rect&& rhs) noexcept = default;
Rect& Rect::operator=(Rect&& rhs) noexcept = default;
Rect Rect::Clone() const {
  Rect out;
  out.left = left;
  out.top = top;
  out.width = width;
  out.height = height;
  return out;
}

// static
bool Rect::Populate(
    const base::Value::Dict& dict, Rect& out) {
  const base::Value* left_value = dict.Find("left");
  if (!left_value) {
    return false;
  }
  {
    auto temp = (*left_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.left = *temp;
  }

  const base::Value* top_value = dict.Find("top");
  if (!top_value) {
    return false;
  }
  {
    auto temp = (*top_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.top = *temp;
  }

  const base::Value* width_value = dict.Find("width");
  if (!width_value) {
    return false;
  }
  {
    auto temp = (*width_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.width = *temp;
  }

  const base::Value* height_value = dict.Find("height");
  if (!height_value) {
    return false;
  }
  {
    auto temp = (*height_value).GetIfInt();
    if (!temp.has_value()) {
      return false;
    }
    out.height = *temp;
  }

  return true;
}

// static
bool Rect::Populate(
    const base::Value& value, Rect& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Rect> Rect::FromValue(const base::Value::Dict& value) {
  Rect out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Rect> Rect::FromValue(const base::Value& value) {
  Rect out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Rect::ToValue() const {
  base::Value::Dict to_value_result;

  to_value_result.Set("left", this->left);

  to_value_result.Set("top", this->top);

  to_value_result.Set("width", this->width);

  to_value_result.Set("height", this->height);


  return to_value_result;
}


FindParams::FindParams()
 {}

FindParams::~FindParams() = default;
FindParams::FindParams(FindParams&& rhs) noexcept = default;
FindParams& FindParams::operator=(FindParams&& rhs) noexcept = default;
FindParams FindParams::Clone() const {
  FindParams out;
  return out;
}

// static
bool FindParams::Populate(
    const base::Value::Dict& dict, FindParams& out) {
  return true;
}

// static
bool FindParams::Populate(
    const base::Value& value, FindParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<FindParams> FindParams::FromValue(const base::Value::Dict& value) {
  FindParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<FindParams> FindParams::FromValue(const base::Value& value) {
  FindParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict FindParams::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


SetDocumentSelectionParams::SetDocumentSelectionParams()
 {}

SetDocumentSelectionParams::~SetDocumentSelectionParams() = default;
SetDocumentSelectionParams::SetDocumentSelectionParams(SetDocumentSelectionParams&& rhs) noexcept = default;
SetDocumentSelectionParams& SetDocumentSelectionParams::operator=(SetDocumentSelectionParams&& rhs) noexcept = default;
SetDocumentSelectionParams SetDocumentSelectionParams::Clone() const {
  SetDocumentSelectionParams out;
  return out;
}

// static
bool SetDocumentSelectionParams::Populate(
    const base::Value::Dict& dict, SetDocumentSelectionParams& out) {
  return true;
}

// static
bool SetDocumentSelectionParams::Populate(
    const base::Value& value, SetDocumentSelectionParams& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<SetDocumentSelectionParams> SetDocumentSelectionParams::FromValue(const base::Value::Dict& value) {
  SetDocumentSelectionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<SetDocumentSelectionParams> SetDocumentSelectionParams::FromValue(const base::Value& value) {
  SetDocumentSelectionParams out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict SetDocumentSelectionParams::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


AutomationIntent::AutomationIntent()
 {}

AutomationIntent::~AutomationIntent() = default;
AutomationIntent::AutomationIntent(AutomationIntent&& rhs) noexcept = default;
AutomationIntent& AutomationIntent::operator=(AutomationIntent&& rhs) noexcept = default;
AutomationIntent AutomationIntent::Clone() const {
  AutomationIntent out;
  return out;
}

// static
bool AutomationIntent::Populate(
    const base::Value::Dict& dict, AutomationIntent& out) {
  return true;
}

// static
bool AutomationIntent::Populate(
    const base::Value& value, AutomationIntent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AutomationIntent> AutomationIntent::FromValue(const base::Value::Dict& value) {
  AutomationIntent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AutomationIntent> AutomationIntent::FromValue(const base::Value& value) {
  AutomationIntent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AutomationIntent::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


AutomationEvent::AutomationEvent()
 {}

AutomationEvent::~AutomationEvent() = default;
AutomationEvent::AutomationEvent(AutomationEvent&& rhs) noexcept = default;
AutomationEvent& AutomationEvent::operator=(AutomationEvent&& rhs) noexcept = default;
AutomationEvent AutomationEvent::Clone() const {
  AutomationEvent out;
  return out;
}

// static
bool AutomationEvent::Populate(
    const base::Value::Dict& dict, AutomationEvent& out) {
  return true;
}

// static
bool AutomationEvent::Populate(
    const base::Value& value, AutomationEvent& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AutomationEvent> AutomationEvent::FromValue(const base::Value::Dict& value) {
  AutomationEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AutomationEvent> AutomationEvent::FromValue(const base::Value& value) {
  AutomationEvent out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AutomationEvent::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


TreeChange::TreeChange()
 {}

TreeChange::~TreeChange() = default;
TreeChange::TreeChange(TreeChange&& rhs) noexcept = default;
TreeChange& TreeChange::operator=(TreeChange&& rhs) noexcept = default;
TreeChange TreeChange::Clone() const {
  TreeChange out;
  return out;
}

// static
bool TreeChange::Populate(
    const base::Value::Dict& dict, TreeChange& out) {
  return true;
}

// static
bool TreeChange::Populate(
    const base::Value& value, TreeChange& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<TreeChange> TreeChange::FromValue(const base::Value::Dict& value) {
  TreeChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<TreeChange> TreeChange::FromValue(const base::Value& value) {
  TreeChange out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict TreeChange::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


const char* ToString(TreeChangeObserverFilter enum_param) {
  switch (enum_param) {
    case TreeChangeObserverFilter::kNoTreeChanges:
      return "noTreeChanges";
    case TreeChangeObserverFilter::kLiveRegionTreeChanges:
      return "liveRegionTreeChanges";
    case TreeChangeObserverFilter::kTextMarkerChanges:
      return "textMarkerChanges";
    case TreeChangeObserverFilter::kAllTreeChanges:
      return "allTreeChanges";
    case TreeChangeObserverFilter::kNone:
      return "";
  }
  NOTREACHED();
  return "";
}

TreeChangeObserverFilter ParseTreeChangeObserverFilter(base::StringPiece enum_string) {
  if (enum_string == "noTreeChanges")
    return TreeChangeObserverFilter::kNoTreeChanges;
  if (enum_string == "liveRegionTreeChanges")
    return TreeChangeObserverFilter::kLiveRegionTreeChanges;
  if (enum_string == "textMarkerChanges")
    return TreeChangeObserverFilter::kTextMarkerChanges;
  if (enum_string == "allTreeChanges")
    return TreeChangeObserverFilter::kAllTreeChanges;
  return TreeChangeObserverFilter::kNone;
}

std::u16string GetTreeChangeObserverFilterParseError(base::StringPiece enum_string) {
  return u"expected \"noTreeChanges\" or \"liveRegionTreeChanges\" or \"textMarkerChanges\" or \"allTreeChanges\", got \"" + UTF8ToUTF16(enum_string) + u"\"";
}


CustomAction::CustomAction()
 {}

CustomAction::~CustomAction() = default;
CustomAction::CustomAction(CustomAction&& rhs) noexcept = default;
CustomAction& CustomAction::operator=(CustomAction&& rhs) noexcept = default;
CustomAction CustomAction::Clone() const {
  CustomAction out;
  return out;
}

// static
bool CustomAction::Populate(
    const base::Value::Dict& dict, CustomAction& out) {
  return true;
}

// static
bool CustomAction::Populate(
    const base::Value& value, CustomAction& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<CustomAction> CustomAction::FromValue(const base::Value::Dict& value) {
  CustomAction out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<CustomAction> CustomAction::FromValue(const base::Value& value) {
  CustomAction out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict CustomAction::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


Marker::Marker()
 {}

Marker::~Marker() = default;
Marker::Marker(Marker&& rhs) noexcept = default;
Marker& Marker::operator=(Marker&& rhs) noexcept = default;
Marker Marker::Clone() const {
  Marker out;
  return out;
}

// static
bool Marker::Populate(
    const base::Value::Dict& dict, Marker& out) {
  return true;
}

// static
bool Marker::Populate(
    const base::Value& value, Marker& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<Marker> Marker::FromValue(const base::Value::Dict& value) {
  Marker out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<Marker> Marker::FromValue(const base::Value& value) {
  Marker out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict Marker::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


AutomationPosition::AutomationPosition()
 {}

AutomationPosition::~AutomationPosition() = default;
AutomationPosition::AutomationPosition(AutomationPosition&& rhs) noexcept = default;
AutomationPosition& AutomationPosition::operator=(AutomationPosition&& rhs) noexcept = default;
AutomationPosition AutomationPosition::Clone() const {
  AutomationPosition out;
  return out;
}

// static
bool AutomationPosition::Populate(
    const base::Value::Dict& dict, AutomationPosition& out) {
  return true;
}

// static
bool AutomationPosition::Populate(
    const base::Value& value, AutomationPosition& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AutomationPosition> AutomationPosition::FromValue(const base::Value::Dict& value) {
  AutomationPosition out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AutomationPosition> AutomationPosition::FromValue(const base::Value& value) {
  AutomationPosition out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AutomationPosition::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}


AutomationNode::AutomationNode()
 {}

AutomationNode::~AutomationNode() = default;
AutomationNode::AutomationNode(AutomationNode&& rhs) noexcept = default;
AutomationNode& AutomationNode::operator=(AutomationNode&& rhs) noexcept = default;
AutomationNode AutomationNode::Clone() const {
  AutomationNode out;
  return out;
}

// static
bool AutomationNode::Populate(
    const base::Value::Dict& dict, AutomationNode& out) {
  return true;
}

// static
bool AutomationNode::Populate(
    const base::Value& value, AutomationNode& out) {
  if (!value.is_dict()) {
    return false;
  }
  return Populate(value.GetDict(), out);
}

// static
std::optional<AutomationNode> AutomationNode::FromValue(const base::Value::Dict& value) {
  AutomationNode out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

// static
std::optional<AutomationNode> AutomationNode::FromValue(const base::Value& value) {
  AutomationNode out;
  bool result = Populate(value, out);
  if (!result) {
    return std::nullopt;
  }
  return out;
}

base::Value::Dict AutomationNode::ToValue() const {
  base::Value::Dict to_value_result;


  return to_value_result;
}



}  // namespace automation
}  // namespace api
}  // namespace extensions

