// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Supported macros. Similar to UserIntent.MacroName in
 * google3/intelligence/dbw/proto/macros/user_intent.proto.
 * These should match semantic tags in Voice Access, see
 * voiceaccess_config.config and voiceaccess.patterns_template.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 * Ensure this enum stays in sync with the CrosDictationMacroName enum in
 * tools/metrics/histograms/enums.xml.
 */
export var MacroName;
(function (MacroName) {
    MacroName[MacroName["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    // Simply input text into a text field.
    MacroName[MacroName["INPUT_TEXT_VIEW"] = 1] = "INPUT_TEXT_VIEW";
    // Delete one character.
    MacroName[MacroName["DELETE_PREV_CHAR"] = 2] = "DELETE_PREV_CHAR";
    // Move the cursor to the previous character.
    MacroName[MacroName["NAV_PREV_CHAR"] = 3] = "NAV_PREV_CHAR";
    // Move the cursor to the next character.
    MacroName[MacroName["NAV_NEXT_CHAR"] = 4] = "NAV_NEXT_CHAR";
    // Move up to the previous line.
    MacroName[MacroName["NAV_PREV_LINE"] = 5] = "NAV_PREV_LINE";
    // Move down to the next line.
    MacroName[MacroName["NAV_NEXT_LINE"] = 6] = "NAV_NEXT_LINE";
    // Copy any selected text, using clipboard copy.
    MacroName[MacroName["COPY_SELECTED_TEXT"] = 7] = "COPY_SELECTED_TEXT";
    // Paste any clipboard text.
    MacroName[MacroName["PASTE_TEXT"] = 8] = "PASTE_TEXT";
    // Cut (copy and delete) any selected text.
    MacroName[MacroName["CUT_SELECTED_TEXT"] = 9] = "CUT_SELECTED_TEXT";
    // Undo previous text-editing action. Does not undo
    // previous navigation or selection action, does not
    // clear clipboard.
    MacroName[MacroName["UNDO_TEXT_EDIT"] = 10] = "UNDO_TEXT_EDIT";
    // Redo previous text-editing action. Does not redo
    // previous navigation or selection action, does not
    // clear clipboard.
    MacroName[MacroName["REDO_ACTION"] = 11] = "REDO_ACTION";
    // Select all text in the text field.
    MacroName[MacroName["SELECT_ALL_TEXT"] = 12] = "SELECT_ALL_TEXT";
    // Clears the current selection, moving the cursor to
    // the end of the selection.
    MacroName[MacroName["UNSELECT_TEXT"] = 13] = "UNSELECT_TEXT";
    // Lists available Dictation commands by bringing up the Help page.
    MacroName[MacroName["LIST_COMMANDS"] = 14] = "LIST_COMMANDS";
    // Insert a new line character.
    // Note: This doesn't correspond to a Voice Access action.
    MacroName[MacroName["NEW_LINE"] = 15] = "NEW_LINE";
    // Stops dictation.
    MacroName[MacroName["STOP_LISTENING"] = 16] = "STOP_LISTENING";
    // Delete one word.
    MacroName[MacroName["DELETE_PREV_WORD"] = 17] = "DELETE_PREV_WORD";
    // Delete one sentence.
    MacroName[MacroName["DELETE_PREV_SENT"] = 18] = "DELETE_PREV_SENT";
    // Move the cursor to the next word.
    MacroName[MacroName["NAV_NEXT_WORD"] = 19] = "NAV_NEXT_WORD";
    // Move the cursor to the previous word.
    MacroName[MacroName["NAV_PREV_WORD"] = 20] = "NAV_PREV_WORD";
    // Deletes a provided word or phrase.
    MacroName[MacroName["SMART_DELETE_PHRASE"] = 21] = "SMART_DELETE_PHRASE";
    // Replaces a provided word or phrase.
    MacroName[MacroName["SMART_REPLACE_PHRASE"] = 22] = "SMART_REPLACE_PHRASE";
    // Inserts a provided word or phrase.
    MacroName[MacroName["SMART_INSERT_BEFORE"] = 23] = "SMART_INSERT_BEFORE";
    // Sets selection between two provided words or phrases.
    MacroName[MacroName["SMART_SELECT_BTWN_INCL"] = 24] = "SMART_SELECT_BTWN_INCL";
    // Move the cursor to the next sentence.
    MacroName[MacroName["NAV_NEXT_SENT"] = 25] = "NAV_NEXT_SENT";
    // Move the cursor to the previous sentence.
    MacroName[MacroName["NAV_PREV_SENT"] = 26] = "NAV_PREV_SENT";
    // Deletes all text in the input field.
    MacroName[MacroName["DELETE_ALL_TEXT"] = 27] = "DELETE_ALL_TEXT";
    // Moves the cursor to the start of the input field.
    MacroName[MacroName["NAV_START_TEXT"] = 28] = "NAV_START_TEXT";
    // Moves the cursor to the end of the input field.
    MacroName[MacroName["NAV_END_TEXT"] = 29] = "NAV_END_TEXT";
    // Select the previous word in the input field.
    MacroName[MacroName["SELECT_PREV_WORD"] = 30] = "SELECT_PREV_WORD";
    // Select the next word in the input field.
    MacroName[MacroName["SELECT_NEXT_WORD"] = 31] = "SELECT_NEXT_WORD";
    // Select the next character in the input field.
    MacroName[MacroName["SELECT_NEXT_CHAR"] = 32] = "SELECT_NEXT_CHAR";
    // Select the previous character in the input field.
    MacroName[MacroName["SELECT_PREV_CHAR"] = 33] = "SELECT_PREV_CHAR";
    // Repeats the last executed macro.
    MacroName[MacroName["REPEAT"] = 34] = "REPEAT";
    // Any new actions should match with Voice Access's semantic tags.
})(MacroName || (MacroName = {}));
